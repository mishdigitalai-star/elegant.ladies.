import { useState, useEffect } from 'react';
import InviteCodeScreen from './InviteCodeScreen';
import VettingCouncilScreen from './VettingCouncilScreen';
import ExpectationsScreen from './ExpectationsScreen';
import AgreementScreen from './AgreementScreen';
import CodeOfConductScreen from './CodeOfConductScreen';
import WelcomeScreen from './WelcomeScreen';
import { submitMemberToAirtable } from './airtableService';

type Screen = 'invite' | 'vetting' | 'agreement' | 'conduct' | 'expectations' | 'welcome';

interface MemberFormData {
  name: string;
  email: string;
  phone: string;
  vettingStatus: 'Yes' | 'No';
  vettingDate: string;
  vettingTime: string;
  vettingCouncilMembers: string;
  expectationsAccepted: boolean;
  agreementSignedName: string;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('invite');
  const [formData, setFormData] = useState<MemberFormData>({
    name: '',
    email: '',
    phone: '',
    vettingStatus: 'No',
    vettingDate: '',
    vettingTime: '',
    vettingCouncilMembers: '',
    expectationsAccepted: false,
    agreementSignedName: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (currentScreen === 'vetting') {
      const preventBack = (e: PopStateEvent) => {
        e.preventDefault();
        window.history.pushState(null, '', window.location.href);
      };

      window.history.pushState(null, '', window.location.href);
      window.addEventListener('popstate', preventBack);

      return () => {
        window.removeEventListener('popstate', preventBack);
      };
    }
  }, [currentScreen]);

  const handleInviteCodeValid = () => {
    setCurrentScreen('vetting');
  };

  const handleVettingContinue = (data: {
    hadMeeting: boolean;
    meetingDate?: string;
    meetingTime?: string;
    councilMembers?: string;
  }) => {
    if (data.hadMeeting) {
      setFormData({
        ...formData,
        vettingStatus: 'Yes',
        vettingDate: data.meetingDate || '',
        vettingTime: data.meetingTime || '',
        vettingCouncilMembers: data.councilMembers || '',
      });
      setCurrentScreen('agreement');
    }
  };

  const handleVettingBack = () => {
    setCurrentScreen('invite');
  };

  const handleAgreementContinue = () => {
    // Core values accepted, move to Code of Conduct
    setCurrentScreen('conduct');
  };

  const handleConductContinue = () => {
    // Code of Conduct accepted, move to expectations
    setCurrentScreen('expectations');
  };

  const handleExpectationsSubmit = async (data: { signedName: string; email: string; phone: string }) => {
    const agreementDate = new Date().toISOString().split('T')[0];
    
    const finalData = {
      ...formData,
      name: data.signedName,
      email: data.email,
      phone: data.phone,
      expectationsAccepted: true,
      agreementSignedName: data.signedName,
    };

    setIsSubmitting(true);

    // Submit to Airtable
    const success = await submitMemberToAirtable({
      name: finalData.agreementSignedName,
      email: finalData.email,
      phone: finalData.phone,
      vettingStatus: finalData.vettingStatus,
      vettingDate: finalData.vettingDate,
      vettingTime: finalData.vettingTime,
      vettingCouncilMembers: finalData.vettingCouncilMembers,
      expectationsAccepted: finalData.expectationsAccepted,
      agreementSignedName: finalData.agreementSignedName,
      agreementSignedDate: agreementDate,
    });

    setIsSubmitting(false);

    if (success) {
      setCurrentScreen('welcome');
    } else {
      alert('There was an error submitting your application. Please try again or contact support.');
    }
  };

  const handleWelcomeComplete = () => {
    // Reset form and go back to start
    setFormData({
      name: '',
      email: '',
      phone: '',
      vettingStatus: 'No',
      vettingDate: '',
      vettingTime: '',
      vettingCouncilMembers: '',
      expectationsAccepted: false,
      agreementSignedName: '',
    });
    setCurrentScreen('invite');
  };

  return (
    <>
      {currentScreen === 'invite' && (
        <InviteCodeScreen onValidCode={handleInviteCodeValid} />
      )}
      {currentScreen === 'vetting' && (
        <VettingCouncilScreen
          onContinue={handleVettingContinue}
          onBack={handleVettingBack}
        />
      )}
      {currentScreen === 'agreement' && (
        <AgreementScreen onContinue={handleAgreementContinue} />
      )}
      {currentScreen === 'conduct' && (
        <CodeOfConductScreen onContinue={handleConductContinue} />
      )}
      {currentScreen === 'expectations' && (
        <ExpectationsScreen 
          onSubmit={handleExpectationsSubmit}
          isSubmitting={isSubmitting}
        />
      )}
      {currentScreen === 'welcome' && (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      )}
    </>
  );
}

export default App;

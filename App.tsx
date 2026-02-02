import { useState, useEffect } from 'react';
import InviteCodeScreen from './components/InviteCodeScreen';
import VettingCouncilScreen from './components/VettingCouncilScreen';
import ExpectationsScreen from './components/ExpectationsScreen';
import AgreementScreen from './components/AgreementScreen';
import WelcomeScreen from './components/WelcomeScreen';

type Screen = 'invite' | 'vetting' | 'expectations' | 'agreement' | 'welcome';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('invite');

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

  const handleVettingContinue = () => {
    setCurrentScreen('expectations');
  };

  const handleVettingBack = () => {
    setCurrentScreen('invite');
  };

  const handleExpectationsContinue = () => {
    setCurrentScreen('agreement');
  };

  const handleAgreementSubmit = () => {
    setCurrentScreen('welcome');
  };

  const handleWelcomeComplete = () => {
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
      {currentScreen === 'expectations' && (
        <ExpectationsScreen onContinue={handleExpectationsContinue} />
      )}
      {currentScreen === 'agreement' && (
        <AgreementScreen onSubmit={handleAgreementSubmit} />
      )}
      {currentScreen === 'welcome' && (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      )}
    </>
  );
}

export default App;

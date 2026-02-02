import { useState } from 'react';

interface VettingCouncilScreenProps {
  onContinue: () => void;
  onBack: () => void;
}

export default function VettingCouncilScreen({ onContinue, onBack }: VettingCouncilScreenProps) {
  const [hasMetCouncil, setHasMetCouncil] = useState<boolean | null>(null);
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [councilMembers, setCouncilMembers] = useState('');
  const [error, setError] = useState('');

  const handleYes = () => {
    setHasMetCouncil(true);
    setError('');
  };

  const handleNo = () => {
    setHasMetCouncil(false);
    setError('');
  };

  const handleClose = () => {
    setHasMetCouncil(null);
    setMeetingDate('');
    setMeetingTime('');
    setCouncilMembers('');
    setError('');
    onBack();
  };

  const handleContinue = () => {
    if (!meetingDate || !meetingTime || !councilMembers.trim()) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    onContinue();
  };

  return (
    <div className="min-h-screen bg-brand-ivory flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
          <div className="flex justify-center mb-6">
            <img
              src="/elegant_ladies_logo.png"
              alt="Elegant Ladies Logo"
              className="w-[300px] max-w-full object-contain"
            />
          </div>

          <h2 className="font-serif text-2xl font-bold text-brand-brown text-center">
            Vetting Council Checkpoint
          </h2>

          {hasMetCouncil === null && (
            <div className="space-y-6">
              <p className="text-brand-brown text-lg text-center leading-relaxed">
                Have you had your meeting with the Elegant Ladies Vetting Council?
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleYes}
                  className="w-full bg-brand-orange text-brand-ivory py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-opacity-90 transition-all active:scale-95"
                >
                  Yes
                </button>
                <button
                  onClick={handleNo}
                  className="w-full bg-brand-brown text-brand-ivory py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-opacity-90 transition-all active:scale-95"
                >
                  No
                </button>
              </div>
            </div>
          )}

          {hasMetCouncil === true && (
            <div className="space-y-4">
              <div>
                <label className="block text-brand-brown font-medium mb-2">
                  Meeting Date
                </label>
                <input
                  type="date"
                  value={meetingDate}
                  onChange={(e) => setMeetingDate(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-brand-gold rounded-lg focus:outline-none focus:border-brand-orange transition-colors text-brand-brown"
                />
              </div>

              <div>
                <label className="block text-brand-brown font-medium mb-2">
                  Meeting Time
                </label>
                <input
                  type="time"
                  value={meetingTime}
                  onChange={(e) => setMeetingTime(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-brand-gold rounded-lg focus:outline-none focus:border-brand-orange transition-colors text-brand-brown"
                />
              </div>

              <div>
                <label className="block text-brand-brown font-medium mb-2">
                  Vetting Council Member Names
                </label>
                <input
                  type="text"
                  value={councilMembers}
                  onChange={(e) => setCouncilMembers(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-brand-gold rounded-lg focus:outline-none focus:border-brand-orange transition-colors text-brand-brown"
                  placeholder="Enter member names"
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}

              <button
                onClick={handleContinue}
                className="w-full bg-brand-orange text-brand-ivory py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-opacity-90 transition-all active:scale-95"
              >
                Continue
              </button>
            </div>
          )}

          {hasMetCouncil === false && (
            <div className="space-y-6">
              <p className="text-brand-brown text-center leading-relaxed">
                Thank you for your interest in joining the Elegant Ladies, please bear with us as the Vetting Council gets to your turn.
              </p>
              <button
                onClick={handleClose}
                className="w-full bg-brand-orange text-brand-ivory py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-opacity-90 transition-all active:scale-95"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

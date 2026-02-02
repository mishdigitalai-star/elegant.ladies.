import { useState } from 'react';

interface InviteCodeScreenProps {
  onValidCode: () => void;
}

export default function InviteCodeScreen({ onValidCode }: InviteCodeScreenProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (code.trim() === 'Welcome 2026') {
      setError('');
      onValidCode();
    } else {
      setError('Invalid invite code. Please try again.');
    }
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

          <div className="text-center space-y-2">
            <h1 className="font-serif text-4xl font-bold text-brand-brown">
              Elegant Ladies
            </h1>
            <p className="text-brand-orange text-xl font-semibold">
              Women Supporting Women
            </p>
            <p className="text-brand-brown text-lg font-medium">
              Manchester Headquarters
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <div>
              <label
                htmlFor="inviteCode"
                className="block text-brand-brown font-medium mb-2 text-lg"
              >
                Enter Invite Code
              </label>
              <input
                id="inviteCode"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-4 py-3 border-2 border-brand-gold rounded-lg focus:outline-none focus:border-brand-orange transition-colors text-brand-brown"
                placeholder="Enter your code"
              />
              <p className="text-sm text-gray-500 mt-2 italic">
                (Do not share your code with anyone)
              </p>
              {error && (
                <p className="text-red-600 text-sm mt-2">{error}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-brand-orange text-brand-ivory py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-opacity-90 transition-all active:scale-95"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

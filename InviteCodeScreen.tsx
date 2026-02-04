import { useState } from 'react';
import { motion } from 'framer-motion';

interface InviteCodeScreenProps {
  onValidCode: () => void;
}

export default function InviteCodeScreen({ onValidCode }: InviteCodeScreenProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.toUpperCase() === 'ELEGANTLADIES2025') {
      onValidCode();
    } else {
      setError('Invalid invite code. Please check and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-brand-ivory flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-md w-full"
      >
        <div className="text-center mb-8">
          <img
            src="/elegant_ladies_logo.png"
            alt="Elegant Ladies Logo"
            className="w-64 h-auto mx-auto mb-6"
          />
          <h1 className="text-3xl font-serif text-brand-brown mb-2">Elegant Ladies</h1>
          <p className="text-brand-orange text-lg font-semibold">Women Supporting Women</p>
          <p className="text-brand-brown mt-2">Manchester Headquarters</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="code" className="block text-brand-brown font-medium mb-2">
              Enter Invite Code
            </label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange text-center text-lg"
              placeholder="Enter code"
            />
            {error && (
              <p className="text-red-600 text-sm mt-2">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-brand-orange text-white py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg"
          >
            Continue
          </button>
        </form>
      </motion.div>
    </div>
  );
}

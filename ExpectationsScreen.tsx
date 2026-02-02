import { useState } from 'react';

interface ExpectationsScreenProps {
  onContinue: () => void;
}

export default function ExpectationsScreen({ onContinue }: ExpectationsScreenProps) {
  const [agreements, setAgreements] = useState({
    sisterhood: false,
    attendance: false,
    membershipDuration: false,
    joiningFee: false,
    yearlyDues: false,
  });

  const expectations = [
    {
      id: 'sisterhood',
      text: 'I agree to interact with fellow Elegant Ladies with our core values and principles of Sisterhood',
    },
    {
      id: 'attendance',
      text: "Life gets busy, but I'll attend social gatherings, events and outings when possible",
    },
    {
      id: 'membershipDuration',
      text: "I'll be a member for at least 6 months before inviting Elegant Ladies to any party or celebration",
    },
    {
      id: 'joiningFee',
      text: "I'll pay the standard joining fee of £50 due immediately upon joining",
    },
    {
      id: 'yearlyDues',
      text: "I'll pay the yearly dues of £100 due by 31st March 2026 (payment plans available)",
    },
  ];

  const handleCheckboxChange = (id: string) => {
    setAgreements((prev) => ({
      ...prev,
      [id]: !prev[id as keyof typeof prev],
    }));
  };

  const allChecked = Object.values(agreements).every((val) => val);

  return (
    <div className="min-h-screen bg-brand-ivory flex items-center justify-center p-6 py-12">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
          <div className="flex justify-center mb-6">
            <img
              src="/elegant_ladies_logo.png"
              alt="Elegant Ladies Logo"
              className="w-[300px] max-w-full object-contain"
            />
          </div>

          <h2 className="font-serif text-3xl font-bold text-brand-brown text-center">
            Expectations
          </h2>

          <div className="space-y-4 pt-4">
            {expectations.map((expectation) => (
              <label
                key={expectation.id}
                className="flex items-start space-x-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={agreements[expectation.id as keyof typeof agreements]}
                  onChange={() => handleCheckboxChange(expectation.id)}
                  className="mt-1 w-5 h-5 text-brand-orange focus:ring-brand-orange border-brand-gold rounded cursor-pointer"
                />
                <span className="text-brand-brown leading-relaxed group-hover:text-brand-orange transition-colors">
                  {expectation.text}
                </span>
              </label>
            ))}
          </div>

          <button
            onClick={onContinue}
            disabled={!allChecked}
            className={`w-full py-4 rounded-lg font-semibold text-lg shadow-md transition-all ${
              allChecked
                ? 'bg-brand-orange text-brand-ivory hover:bg-opacity-90 active:scale-95 cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

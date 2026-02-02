import { useState } from 'react';

interface AgreementScreenProps {
  onSubmit: () => void;
}

export default function AgreementScreen({ onSubmit }: AgreementScreenProps) {
  const [fullName, setFullName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  const coreValues = [
    {
      title: 'Sisterhood',
      description: 'We support and uplift one another with genuine care and respect',
    },
    {
      title: 'Excellence',
      description: 'We strive for quality in all our endeavors and interactions',
    },
    {
      title: 'Integrity',
      description: 'We maintain honesty, transparency, and ethical conduct',
    },
    {
      title: 'Empowerment',
      description: 'We encourage personal growth and celebrate each other\'s success',
    },
    {
      title: 'Community',
      description: 'We actively engage and contribute to our collective wellbeing',
    },
  ];

  const handleSubmit = () => {
    if (!fullName.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!agreed) {
      setError('Please agree to the terms');
      return;
    }
    setError('');
    onSubmit();
  };

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
            Agreement
          </h2>

          <div className="space-y-4 pt-4">
            <h3 className="font-serif text-xl font-semibold text-brand-brown text-center mb-4">
              Our Core Values
            </h3>

            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-brand-ivory bg-opacity-50 rounded-xl p-4 border-l-4 border-brand-orange"
              >
                <h4 className="font-semibold text-brand-brown text-lg mb-1">
                  {index + 1}. {value.title}
                </h4>
                <p className="text-brand-brown text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}

            <div className="bg-brand-gold bg-opacity-20 rounded-xl p-4 mt-6">
              <p className="text-brand-brown text-center leading-relaxed italic">
                Receipt of the Welcome Pack and payment of dues signifies agreement to abide by the terms of this arrangement
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div>
                <label className="block text-brand-brown font-medium mb-2">
                  Type your full name as signature
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-brand-gold rounded-lg focus:outline-none focus:border-brand-orange transition-colors text-brand-brown font-serif text-lg"
                  placeholder="Your Full Name"
                />
              </div>

              <label className="flex items-start space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-5 h-5 text-brand-orange focus:ring-brand-orange border-brand-gold rounded cursor-pointer"
                />
                <span className="text-brand-brown leading-relaxed group-hover:text-brand-orange transition-colors">
                  I agree to the terms
                </span>
              </label>

              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}

              <button
                onClick={handleSubmit}
                className="w-full bg-brand-orange text-brand-ivory py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-opacity-90 transition-all active:scale-95"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

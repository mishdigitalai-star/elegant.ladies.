import { useState } from 'react';
import { motion } from 'framer-motion';

interface AgreementScreenProps {
  onSubmit: (signedName: string) => void;
  isSubmitting: boolean;
}

const coreValues = [
  {
    title: 'Belonging & Inclusivity',
    description: 'We create a welcoming space where every woman feels valued and included.',
  },
  {
    title: 'Empowerment & Growth',
    description: 'We support each other in reaching our full potential through mentorship and opportunities.',
  },
  {
    title: 'Authentic Connection & Sisterhood',
    description: 'We build genuine relationships based on trust, respect, and mutual support.',
  },
  {
    title: 'Well-being & Self-Care',
    description: 'We prioritize mental, physical, and emotional health for ourselves and each other.',
  },
  {
    title: 'Impact & Advocacy',
    description: 'We use our collective voice to create positive change in our community and beyond.',
  },
];

export default function AgreementScreen({ onSubmit, isSubmitting }: AgreementScreenProps) {
  const [signedName, setSignedName] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    if (!signedName.trim()) {
      alert('Please enter your full name');
      return;
    }
    if (!agreed) {
      alert('Please check the agreement box');
      return;
    }
    onSubmit(signedName);
  };

  return (
    <div className="min-h-screen bg-brand-ivory flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl w-full"
      >
        <div className="text-center mb-8">
          <img
            src="/elegant_ladies_logo.png"
            alt="Elegant Ladies Logo"
            className="w-64 h-auto mx-auto mb-6"
          />
          <h1 className="text-4xl font-serif text-brand-brown mb-2">Our Core Values</h1>
          <p className="text-brand-orange text-xl font-semibold">The Elegant Ladies Sisterhood</p>
        </div>

        <div className="space-y-6 mb-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-l-4 border-brand-orange pl-4 py-2"
            >
              <h3 className="text-xl font-serif text-brand-brown mb-1">{value.title}</h3>
              <p className="text-brand-brown text-opacity-80">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-orange bg-opacity-10 rounded-lg p-6 mb-6">
          <p className="text-brand-brown text-center font-medium">
            Receipt of Welcome Pack and payment of dues signifies agreement to uphold these values and
            participate actively in our sisterhood.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-brand-brown font-medium mb-2">
              Sign with Your Full Name
            </label>
            <input
              type="text"
              value={signedName}
              onChange={(e) => setSignedName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
              disabled={isSubmitting}
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-5 h-5 text-brand-orange border-brand-orange rounded focus:ring-brand-orange"
              disabled={isSubmitting}
            />
            <span className="text-brand-brown">
              I agree to uphold the Elegant Ladies core values and participate actively in our sisterhood
            </span>
          </label>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-brand-orange text-white py-4 rounded-lg text-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

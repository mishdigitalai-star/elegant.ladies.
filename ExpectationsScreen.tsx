import { useState } from 'react';
import { motion } from 'framer-motion';

interface ExpectationsScreenProps {
  onSubmit: (data: { signedName: string; email: string; phone: string }) => void;
  isSubmitting: boolean;
}

const expectations = [
  "I agree to interact with fellow Elegant Ladies with our core values and principles of Sisterhood",
  "Life gets busy, but I'll attend social gatherings, events and outings when possible",
  "I'll be a member for at least 6 months before inviting Elegant Ladies to any party or celebration",
  "I'll pay the standard joining fee of £50 due immediately upon joining",
  "I'll pay the yearly dues of £100 due by 31st March 2026 (payment plans available)",
];

export default function ExpectationsScreen({ onSubmit, isSubmitting }: ExpectationsScreenProps) {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(expectations.length).fill(false));
  const [signedName, setSignedName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const allChecked = checkedItems.every((item) => item === true);

  const handleSubmit = () => {
    if (!allChecked) {
      alert('Please check all expectation boxes');
      return;
    }
    if (!signedName.trim()) {
      alert('Please enter your full name');
      return;
    }
    if (!email.trim()) {
      alert('Please enter your email address');
      return;
    }
    if (!phone.trim()) {
      alert('Please enter your phone number');
      return;
    }
    if (!agreedToTerms) {
      alert('Please agree to uphold the Elegant Ladies core values and Code of Conduct');
      return;
    }
    onSubmit({ signedName, email, phone });
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
          <h1 className="text-4xl font-serif text-brand-brown mb-2">Expectations</h1>
        </div>

        <div className="space-y-4 mb-8">
          {expectations.map((expectation, index) => (
            <motion.label
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 cursor-pointer p-4 rounded-lg hover:bg-brand-ivory transition-colors"
            >
              <input
                type="checkbox"
                checked={checkedItems[index]}
                onChange={() => handleCheckboxChange(index)}
                className="mt-1 w-5 h-5 text-brand-orange border-brand-orange rounded focus:ring-brand-orange"
                disabled={isSubmitting}
              />
              <span className="text-brand-brown">{expectation}</span>
            </motion.label>
          ))}
        </div>

        <div className="bg-brand-orange bg-opacity-10 rounded-lg p-6 mb-6">
          <p className="text-brand-brown text-center font-medium">
            By completing this application and paying membership fees, you agree to uphold these values and participate actively with the Elegant Ladies Group.
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

          <div>
            <label className="block text-brand-brown font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-brand-brown font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="07XXX XXXXXX"
              className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
              disabled={isSubmitting}
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1 w-5 h-5 text-brand-orange border-brand-orange rounded focus:ring-brand-orange"
              disabled={isSubmitting}
            />
            <span className="text-brand-brown">
              I agree to uphold the Elegant Ladies Core Values, Code of Conduct and Participate actively in our sisterhood
            </span>
          </label>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !allChecked}
            className="w-full bg-brand-orange text-white py-4 rounded-lg text-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

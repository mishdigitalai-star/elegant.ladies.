import { useState } from 'react';
import { motion } from 'framer-motion';

interface ExpectationsScreenProps {
  onContinue: () => void;
}

const expectations = [
  "I agree to interact with fellow Elegant Ladies with our core values and principles of Sisterhood",
  "Life gets busy, but I'll attend social gatherings, events and outings when possible",
  "I'll be a member for at least 6 months before inviting Elegant Ladies to any party or celebration",
  "I'll pay the standard joining fee of £50 due immediately upon joining",
  "I'll pay the yearly dues of £100 due by 31st March 2026 (payment plans available)",
];

export default function ExpectationsScreen({ onContinue }: ExpectationsScreenProps) {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(expectations.length).fill(false));

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const allChecked = checkedItems.every((item) => item === true);

  const handleContinue = () => {
    if (!allChecked) {
      alert('Please check all expectation boxes to continue');
      return;
    }
    onContinue();
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
              />
              <span className="text-brand-brown">{expectation}</span>
            </motion.label>
          ))}
        </div>

        <button
          onClick={handleContinue}
          disabled={!allChecked}
          className="w-full bg-brand-orange text-white py-4 rounded-lg text-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </motion.div>
    </div>
  );
}

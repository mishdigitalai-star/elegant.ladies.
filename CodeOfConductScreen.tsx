import { useState } from 'react';
import { motion } from 'framer-motion';

interface CodeOfConductScreenProps {
  onContinue: () => void;
}

const codeOfConductPoints = [
  {
    title: "Belonging & Inclusivity",
    text: "Elegant Ladies is a safe, non-judgmental space. Every woman must feel welcomed, respected and valued regardless of background, personality, opinion or life stage.",
  },
  {
    title: "Speak With Kindness",
    text: "Words must build, not break. No insults, gossip, mockery, passive-aggressive posts or indirect comments toward another member.",
  },
  {
    title: "Confidentiality & Trust",
    text: "Personal stories and discussions shared in the group stay in the group. No screenshots, forwarding messages or discussing members outside the platform, due to Data Protection.",
  },
  {
    title: "Empowerment & Growth",
    text: "We encourage each other's development personally and professionally. We celebrate wins and support progress without jealousy or competition.",
  },
  {
    title: "Authentic Sisterhood",
    text: "We build real relationships, not surface interactions. Be sincere, supportive and considerate. Avoid exclusion, cliques or making anyone feel isolated.",
  },
  {
    title: "Mature Conflict Resolution",
    text: "Disagreements should be handled privately and respectfully. Public confrontations or tension disrupt the harmony of the group and are not acceptable.",
  },
  {
    title: "Well-being & Care",
    text: "Be mindful of each other's emotional, mental and personal wellbeing. Show empathy, compassion and support especially during difficult times.",
  },
  {
    title: "Responsible Communication & Posting",
    text: "Avoid offensive, divisive, or controversial content that may create discomfort or conflict within the group.",
  },
  {
    title: "Ethical Business & Opportunities",
    text: "Promote businesses honestly and respectfully. No spamming, pressure selling or discrediting another member's work, we grow together.",
  },
  {
    title: "Positive Impact & Representation",
    text: "Members represent Elegant Ladies inside and outside the platform. Our behaviour should reflect dignity, respect and positive influence in the wider community.",
  },
];

export default function CodeOfConductScreen({ onContinue }: CodeOfConductScreenProps) {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(codeOfConductPoints.length).fill(false));
  const [agreedToConduct, setAgreedToConduct] = useState(false);

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const allChecked = checkedItems.every((item) => item === true);

  const handleContinue = () => {
    if (!allChecked) {
      alert('Please read and check all Code of Conduct points');
      return;
    }
    if (!agreedToConduct) {
      alert('Please agree to uphold the Code of Conduct');
      return;
    }
    onContinue();
  };

  return (
    <div className="min-h-screen bg-brand-ivory flex items-center justify-center p-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl w-full"
      >
        <div className="text-center mb-8">
          <img
            src="/elegant_ladies_logo_new.jpg"
            alt="Elegant Ladies Logo"
            className="w-64 h-auto mx-auto mb-6"
          />
          <h1 className="text-4xl font-serif text-brand-brown mb-2">Code of Conduct</h1>
          <p className="text-brand-orange text-xl font-semibold">Women Supporting Women</p>
          <p className="text-brand-brown mt-1">Unity • Harmony • Growth</p>
        </div>

        <div className="space-y-4 mb-8 max-h-[500px] overflow-y-auto pr-2">
          {codeOfConductPoints.map((point, index) => (
            <motion.label
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3 cursor-pointer p-4 rounded-lg hover:bg-brand-ivory transition-colors"
            >
              <input
                type="checkbox"
                checked={checkedItems[index]}
                onChange={() => handleCheckboxChange(index)}
                className="mt-1 w-5 h-5 flex-shrink-0 text-brand-orange border-brand-orange rounded focus:ring-brand-orange"
              />
              <div className="flex-1">
                <span className="font-semibold text-brand-brown block mb-1">
                  {index + 1}. {point.title}
                </span>
                <span className="text-brand-brown text-sm">{point.text}</span>
              </div>
            </motion.label>
          ))}
        </div>

        <div className="bg-brand-orange bg-opacity-10 rounded-lg p-6 mb-6">
          <p className="text-brand-brown text-center font-medium mb-4">
            Failure to follow these guidelines may lead to warning, restriction or removal from the group.
          </p>
          <p className="text-brand-brown text-center font-medium">
            Elegant Ladies is a sisterhood built on belonging, empowerment and genuine connection, let's protect it together.
          </p>
        </div>

        <label className="flex items-start gap-3 cursor-pointer mb-6 p-4 bg-brand-ivory rounded-lg">
          <input
            type="checkbox"
            checked={agreedToConduct}
            onChange={(e) => setAgreedToConduct(e.target.checked)}
            className="mt-1 w-5 h-5 text-brand-orange border-brand-orange rounded focus:ring-brand-orange"
          />
          <span className="text-brand-brown font-medium">
            I have read and agree to uphold the Elegant Ladies Code of Conduct
          </span>
        </label>

        <button
          onClick={handleContinue}
          disabled={!allChecked || !agreedToConduct}
          className="w-full bg-brand-orange text-white py-4 rounded-lg text-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to Expectations
        </button>
      </motion.div>
    </div>
  );
}

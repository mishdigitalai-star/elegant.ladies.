import { motion } from 'framer-motion';

interface AgreementScreenProps {
  onContinue: () => void;
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

export default function AgreementScreen({ onContinue }: AgreementScreenProps) {
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
            These values guide everything we do as Elegant Ladies. In the next step, you'll review and agree to our membership expectations.
          </p>
        </div>

        <button
          onClick={onContinue}
          className="w-full bg-brand-orange text-white py-4 rounded-lg text-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg"
        >
          Continue to Expectations
        </button>
      </motion.div>
    </div>
  );
}

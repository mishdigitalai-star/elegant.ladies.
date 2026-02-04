import { motion } from 'framer-motion';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-brand-ivory flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <img
            src="/elegant_ladies_logo.png"
            alt="Elegant Ladies Logo"
            className="w-64 h-auto mx-auto mb-6"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-brand-brown mb-4">
            Welcome to Elegant Ladies!
          </h1>
          <p className="text-2xl text-brand-orange font-semibold mb-6">
            You're officially part of our sisterhood
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-4 mb-8"
        >
          <div className="bg-brand-orange bg-opacity-10 rounded-lg p-6">
            <h3 className="text-xl font-serif text-brand-brown mb-2">What's Next?</h3>
            <ul className="text-brand-brown space-y-2 text-left">
              <li>✓ Check your email for your Welcome Pack</li>
              <li>✓ Payment instructions will be sent separately</li>
              <li>✓ Join our WhatsApp group (link in email)</li>
              <li>✓ Introduce yourself to the sisterhood!</li>
            </ul>
          </div>

          <p className="text-brand-brown">
            We're excited to have you with us. Together, we support, empower, and uplift each other.
          </p>
        </motion.div>

        <button
          onClick={onComplete}
          className="bg-brand-orange text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg"
        >
          Finish
        </button>
      </motion.div>
    </div>
  );
}

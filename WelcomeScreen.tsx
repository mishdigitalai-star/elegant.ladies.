interface WelcomeScreenProps {
  onComplete: () => void;
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-brand-ivory flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6 text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/elegant_ladies_logo.png"
              alt="Elegant Ladies Logo"
              className="w-[300px] max-w-full object-contain"
            />
          </div>

          <div className="space-y-4">
            <h1 className="font-serif text-4xl font-bold text-brand-brown">
              Welcome to Elegant Ladies!
            </h1>

            <div className="h-1 w-24 bg-brand-orange mx-auto rounded-full"></div>

            <p className="text-brand-brown text-lg leading-relaxed px-4">
              Thank you for joining our sisterhood. You'll receive information about upcoming events soon.
            </p>

            <div className="pt-6">
              <button
                onClick={onComplete}
                className="w-full bg-brand-orange text-brand-ivory py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-opacity-90 transition-all active:scale-95"
              >
                Complete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

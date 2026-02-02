import { useState } from 'react';
import { motion } from 'framer-motion';

interface VettingCouncilScreenProps {
  onContinue: (data: {
    hadMeeting: boolean;
    meetingDate?: string;
    meetingTime?: string;
    councilMembers?: string;
  }) => void;
  onBack: () => void;
}

export default function VettingCouncilScreen({ onContinue, onBack }: VettingCouncilScreenProps) {
  const [hadMeeting, setHadMeeting] = useState<boolean | null>(null);
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [councilMembers, setCouncilMembers] = useState('');

  const handleContinue = () => {
    if (hadMeeting === null) return;

    if (hadMeeting) {
      if (!meetingDate || !meetingTime || !councilMembers.trim()) {
        alert('Please fill in all meeting details');
        return;
      }
      onContinue({
        hadMeeting: true,
        meetingDate,
        meetingTime,
        councilMembers,
      });
    } else {
      // User hasn't had meeting yet - show stop message
      return;
    }
  };

  return (
    <div className="min-h-screen bg-brand-ivory flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl w-full"
      >
        <div className="text-center mb-8">
          <img
            src="/elegant_ladies_logo_transparent.png"
            alt="Elegant Ladies Logo"
            className="w-64 h-auto mx-auto mb-6"
          />
          <h1 className="text-4xl font-serif text-brand-brown mb-2">Vetting Council Checkpoint</h1>
          <p className="text-brand-orange text-xl font-semibold">Required Step</p>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-lg text-brand-brown mb-4 font-medium">
              Have you had your meeting with the Elegant Ladies Vetting Council?
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setHadMeeting(true)}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                  hadMeeting === true
                    ? 'bg-brand-orange text-white'
                    : 'bg-gray-100 text-brand-brown hover:bg-gray-200'
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => setHadMeeting(false)}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                  hadMeeting === false
                    ? 'bg-brand-orange text-white'
                    : 'bg-gray-100 text-brand-brown hover:bg-gray-200'
                }`}
              >
                No
              </button>
            </div>
          </div>

          {hadMeeting === true && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-4"
            >
              <div>
                <label className="block text-brand-brown font-medium mb-2">Meeting Date</label>
                <input
                  type="date"
                  value={meetingDate}
                  onChange={(e) => setMeetingDate(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>
              <div>
                <label className="block text-brand-brown font-medium mb-2">Meeting Time</label>
                <input
                  type="time"
                  value={meetingTime}
                  onChange={(e) => setMeetingTime(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>
              <div>
                <label className="block text-brand-brown font-medium mb-2">
                  Council Member Names
                </label>
                <textarea
                  value={councilMembers}
                  onChange={(e) => setCouncilMembers(e.target.value)}
                  placeholder="Enter the names of council members present..."
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange resize-none"
                />
              </div>
            </motion.div>
          )}

          {hadMeeting === false && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-brand-orange bg-opacity-10 border-2 border-brand-orange rounded-lg p-6 text-center"
            >
              <p className="text-brand-brown text-lg font-medium">
                Thank you for your interest in joining Elegant Ladies.
              </p>
              <p className="text-brand-brown mt-2">
                Please bear with us as the Vetting Council gets to your turn. You'll be contacted soon to schedule your meeting.
              </p>
            </motion.div>
          )}

          {hadMeeting === true && (
            <button
              onClick={handleContinue}
              className="w-full bg-brand-orange text-white py-4 rounded-lg text-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg"
            >
              Continue
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

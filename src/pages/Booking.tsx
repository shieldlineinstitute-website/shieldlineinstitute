import { useState } from 'react';
import PageShell from '../components/PageShell';
import BookingFormModal from '../components/BookingFormModal';

const Booking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PageShell
      title="Register With Us"
      subtitle="Schedule Your Training"
      description="Book your driving training session with Shieldline Institute. Our doctor-led program ensures you're medically fit and road-ready."
      faqs={[
        {
          question: 'What do I need to bring?',
          answer: 'Bring your passport photo, medical certificate if available, and any previous driving documents.',
        },
        {
          question: 'How long does the process take?',
          answer: 'Initial assessment takes 1-2 hours, followed by training sessions as needed.',
        },
        {
          question: 'Is there a waiting period?',
          answer: 'We typically schedule within 3-5 days, depending on availability.',
        },
      ]}
    >
      <div className="flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center bg-[#0A2463] hover:bg-[#1E3A8A] text-white px-8 py-4 rounded-2xl font-semibold transition-colors"
        >
          Open Booking Form
        </button>
      </div>

      <BookingFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </PageShell>
  );
};

export default Booking;
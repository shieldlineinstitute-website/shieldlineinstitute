import PageShell from '../components/PageShell';
import BookingForm from '../components/BookingForm';

const Booking = () => {
  return (
    <PageShell
      title="Book Now"
      subtitle="Schedule Your Training"
      description="Book your driving training session with Shieldline Institute. Our doctor-led program ensures you're medically fit and road-ready."
      faqs={[
        {
          question: 'What do I need to bring?',
          answer: 'Bring your ID, medical certificate if available, and any previous driving documents.',
        },
        {
          question: 'How long does the process take?',
          answer: 'Initial assessment takes 2-3 hours, followed by training sessions as needed.',
        },
        {
          question: 'Is there a waiting period?',
          answer: 'We typically schedule within 1-2 weeks, depending on availability.',
        },
      ]}
    >
      <BookingForm />
    </PageShell>
  );
};

export default Booking;
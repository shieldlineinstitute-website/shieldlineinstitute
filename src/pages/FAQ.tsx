import PageShell from '../components/PageShell';

const faqs = [
  {
    question: 'How do I book a training program?',
    answer: 'Visit the contact page, send us a message, or call our number to reserve your training slot.',
  },
  {
    question: 'Can I combine medical audit with driving lessons?',
    answer: 'Yes, our programs are designed to include medical safety screening before practical driving begins.',
  },
  {
    question: 'What documents do I need for license support?',
    answer: 'We will guide you through the required FRSC documents, including identification, medical forms, and application materials.',
  },
];

const FAQ = () => {
  return (
    <PageShell
      title="Frequently Asked Questions"
      subtitle="Answers for Learners"
      description="Find clear answers to common questions about our programs, medical audits, licensing support, and how to get started."
      faqs={faqs}
    >
      <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm mt-12">
        <h2 className="text-2xl font-bold text-[#0A2463] mb-4">Need more help?</h2>
        <p className="text-[#64748B] leading-relaxed">
          If your question is not listed, our team is ready to answer it. Reach out through the contact page and we’ll respond promptly.
        </p>
      </div>
    </PageShell>
  );
};

export default FAQ;

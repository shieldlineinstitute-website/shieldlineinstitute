import { useState, useEffect } from 'react';
import PageShell from '../components/PageShell';
import { useFAQs } from '../hooks/useFAQs';

const FAQ = () => {
  const { faqs, loading, error } = useFAQs();

  // Format FAQs for PageShell
  const formattedFAQs = faqs.map(faq => ({
    question: faq.heading,
    answer: faq.body,
    heading: faq.heading,
    body: faq.body,
  }));

  // Add additional FAQs from Booking page
  const additionalFAQs = [
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
  ];

  const allFAQs = [...formattedFAQs, ...additionalFAQs];

  return (
    <PageShell
      title="Frequently Asked Questions"
      subtitle="Answers for Learners"
      description="Find clear answers to common questions about our programs, medical audits, licensing support, and how to get started."
      faqs={allFAQs}
    >
      <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm mt-12">
        <h2 className="text-2xl font-bold text-[#0A2463] mb-4">Need more help?</h2>
        <p className="text-[#64748B] leading-relaxed">
          If your question is not listed, our team is ready to answer it. Reach out through the contact page and we'll respond promptly.
        </p>
      </div>
      
      {error && (
        <div className="rounded-3xl bg-red-50 border border-red-200 p-6 mt-8">
          <p className="text-red-700">Error loading FAQs: {error}</p>
        </div>
      )}
      
      {loading && (
        <div className="rounded-3xl bg-blue-50 border border-blue-200 p-6 mt-8">
          <p className="text-blue-700">Loading FAQs...</p>
        </div>
      )}
    </PageShell>
  );
};

export default FAQ;

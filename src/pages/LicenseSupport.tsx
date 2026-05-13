import PageShell from '../components/PageShell';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What is included in License Support?',
    answer: 'We help with learner permit applications, FRSC documentation guidance, and preparation for license issuance.',
  },
  {
    question: 'Can Shieldline assist with FRSC appointments?',
    answer: 'Yes, we guide you through the FRSC process and help ensure your application is complete and compliant.',
  },
  {
    question: 'Does the service help new and renewing drivers?',
    answer: 'We support both first-time license applicants and drivers renewing or replacing their license.',
  },
];

const LicenseSupport = () => {
  return (
    <PageShell
      title="License Support"
      subtitle="Guidance Through FRSC Processes"
      description="Practical support for learner permits, license applications, and documentation needed for driver registration and certification."
      faqs={faqs}
    >
      <div className="grid gap-8 mt-12 md:grid-cols-2">
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-4">What we provide</h2>
          <ul className="space-y-4 text-[#64748B]">
            <li>Step-by-step assistance with the learner permit process.</li>
            <li>FRSC documentation review and submission guidance.</li>
            <li>Advice on physical and medical requirements for license issuance.</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-4">Who benefits</h2>
          <ul className="space-y-4 text-[#64748B]">
            <li>New drivers applying for their first license.</li>
            <li>Drivers renewing or replacing an existing license.</li>
            <li>Families who want to avoid common FRSC delays and mistakes.</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 inline-flex flex-wrap gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D68C0E] text-white px-8 py-4 rounded-xl font-semibold transition-colors">
          Talk to a License Advisor
        </Link>
        <Link to="/faq" className="inline-flex items-center gap-2 border border-[#0A2463] text-[#0A2463] px-8 py-4 rounded-xl font-semibold hover:bg-[#0A2463] hover:text-white transition-colors">
          View FAQs
        </Link>
      </div>
    </PageShell>
  );
};

export default LicenseSupport;

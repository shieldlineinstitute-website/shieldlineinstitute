import PageShell from '../components/PageShell';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What does the Medical Safety Audit include?',
    answer: 'It includes vision screening, blood pressure checks, blood sugar review, and a basic road readiness assessment.',
  },
  {
    question: 'Do I need a doctor referral to participate?',
    answer: 'No referral is needed. Anyone who wants to confirm their fitness to drive can book the audit directly.',
  },
  {
    question: 'How long does the audit take?',
    answer: 'The audit typically takes about 30 to 45 minutes depending on individual checks.',
  },
];

const MedicalSafetyAudit = () => {
  return (
    <PageShell
      title="Medical Safety Audit"
      subtitle="Health & Road Readiness"
      description="A focused medical screening service that ensures drivers are physically fit, alert, and ready for safe driving."
      faqs={faqs}
    >
      <div className="grid gap-8 mt-12 md:grid-cols-2">
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-4">What we check</h2>
          <ul className="space-y-4 text-[#64748B]">
            <li>Visual acuity and eye health screening.</li>
            <li>Blood pressure, glucose, and general wellness checks.</li>
            <li>Guidance on driving fitness and next steps.</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-4">Ideal for</h2>
          <ul className="space-y-4 text-[#64748B]">
            <li>Current and prospective drivers who want safety assurance.</li>
            <li>Fleet drivers who need medical certifications.</li>
            <li>Anyone preparing for a new or renewed license application.</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 inline-flex flex-wrap gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#00A896] hover:bg-[#00D9B5] text-white px-8 py-4 rounded-xl font-semibold transition-colors">
          Book Medical Audit
        </Link>
        <Link to="/faq" className="inline-flex items-center gap-2 border border-[#0A2463] text-[#0A2463] px-8 py-4 rounded-xl font-semibold hover:bg-[#0A2463] hover:text-white transition-colors">
          View FAQs
        </Link>
      </div>
    </PageShell>
  );
};

export default MedicalSafetyAudit;

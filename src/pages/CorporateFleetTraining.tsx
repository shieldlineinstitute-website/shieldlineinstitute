import PageShell from '../components/PageShell';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'Can training happen at our company location?',
    answer: 'Yes, we can deliver on-site training for fleet teams and drivers at your preferred facility or parking area.',
  },
  {
    question: 'Do you offer customized fleet packages?',
    answer: 'Absolutely. We tailor programs based on your industry, vehicle types, and safety goals.',
  },
  {
    question: 'What safety topics are included?',
    answer: 'Driver wellness, defensive driving, compliance requirements, and practical fleet risk management are all covered.',
  },
];

const CorporateFleetTraining = () => {
  return (
    <PageShell
      title="Corporate Fleet Training"
      subtitle="Professional Fleet Safety"
      description="Designed for businesses, NGOs, and fleet operators who need safer drivers, better compliance, and improved on-road performance."
      faqs={faqs}
    >
      <div className="grid gap-8 mt-12 md:grid-cols-2">
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-4">Program benefits</h2>
          <ul className="space-y-4 text-[#64748B]">
            <li>Fleet safety audits and driver evaluations.</li>
            <li>Company-specific defensive driving lessons.</li>
            <li>Reduced risk through medical screening and fitness checks.</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-4">Who should enroll?</h2>
          <ul className="space-y-4 text-[#64748B]">
            <li>Logistics teams and corporate drivers.</li>
            <li>Banks, telecoms, and service organizations.</li>
            <li>Companies that want to improve safety and reduce fleet losses.</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 inline-flex flex-wrap gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0A2463] hover:bg-[#1E3A8A] text-white px-8 py-4 rounded-xl font-semibold transition-colors">
          Request a Corporate Quote
        </Link>
        <Link to="/faq" className="inline-flex items-center gap-2 border border-[#0A2463] text-[#0A2463] px-8 py-4 rounded-xl font-semibold hover:bg-[#0A2463] hover:text-white transition-colors">
          View FAQs
        </Link>
      </div>
    </PageShell>
  );
};

export default CorporateFleetTraining;

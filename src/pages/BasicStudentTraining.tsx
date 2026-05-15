import PageShell from '../components/PageShell';
import { ScrollToTopLink } from '../components/ScrollToTop';

const faqs = [
  {
    question: 'Who is Basic Student Training best for?',
    answer: 'This program is ideal for first-time drivers, young adults, and students who want a complete driving curriculum with medical readiness included.',
  },
  {
    question: 'How long does the training take?',
    answer: 'Most learners finish the program in 6 to 8 weeks depending on scheduling, progress, and confidence behind the wheel.',
  },
  {
    question: 'Does the course include medical checks?',
    answer: 'Yes, we include a medical safety audit to ensure you are physically fit and safe to begin practical driving lessons.',
  },
];

const BasicStudentTraining = () => {
  return (
    <PageShell
      title="Basic Student Training"
      subtitle="Foundational Driver Education"
      description="A complete learner program for new drivers that blends practical driving skills with safety screening and instructor-led lessons."
      faqs={faqs}
    >
      <div className="grid gap-8 mt-12 md:grid-cols-2">
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-4">What you learn</h2>
          <ul className="space-y-4 text-[#64748B]">
            <li>Basic vehicle control, clutch work, and safe gear changes.</li>
            <li>Road rules, defensive driving, and hazard awareness.</li>
            <li>Confidence building on Lagos roads and practical test preparation.</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-4">Why choose this program?</h2>
          <ul className="space-y-4 text-[#64748B]">
            <li>Dual-control vehicles with certified instructors.</li>
            <li>Doctor-led safety assessment before training starts.</li>
            <li>Support through learner permits and FRSC compliance guidance.</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 inline-flex flex-wrap gap-4">
        <ScrollToTopLink to="/contact" className="inline-flex items-center gap-2 bg-[#00A896] hover:bg-[#00D9B5] text-white px-8 py-4 rounded-xl font-semibold transition-colors">
          Book a Trial Lesson
        </ScrollToTopLink>
        <ScrollToTopLink to="/faq" className="inline-flex items-center gap-2 border border-[#0A2463] text-[#0A2463] px-8 py-4 rounded-xl font-semibold hover:bg-[#0A2463] hover:text-white transition-colors">
          View FAQs
        </ScrollToTopLink>
      </div>
    </PageShell>
  );
};

export default BasicStudentTraining;

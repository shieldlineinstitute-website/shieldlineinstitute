import PageShell from '../components/PageShell';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What makes Shieldline different?',
    answer: 'We combine doctor-led safety screening with high-quality driving instruction, focusing on both physical and road fitness.',
  },
  {
    question: 'Where is Shieldline located?',
    answer: 'Shieldline is based in Abijo-Lekki, Lagos, serving students and corporate clients across the city and nearby communities.',
  },
  {
    question: 'Who trains the drivers?',
    answer: 'Certified driving instructors work alongside medical professionals to deliver safe, confident, and practical training.',
  },
];

const About = () => {
  return (
    <PageShell
      title="About Us"
      subtitle="Doctor-Led Driving Institute"
      description="Shieldline Institute is a premium driving and safety training center in Lagos focused on training safer drivers with medical screening and structured instruction."
      faqs={faqs}
    >
      <div className="grid gap-8 mt-12 md:grid-cols-2">
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-4">Our mission</h2>
          <p className="text-[#64748B] leading-relaxed">
            We help drivers become safer, healthier, and more confident by combining practical road training with medical safety assessments.
          </p>
        </div>
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-4">Our approach</h2>
          <p className="text-[#64748B] leading-relaxed">
            Our programs are designed for modern Lagos conditions, blending defensive driving, wellness screening, and FRSC-aligned support.
          </p>
        </div>
      </div>
      <div className="mt-12 inline-flex flex-wrap gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0A2463] hover:bg-[#1E3A8A] text-white px-8 py-4 rounded-xl font-semibold transition-colors">
          Contact the Team
        </Link>
        <Link to="/basic-student-training" className="inline-flex items-center gap-2 border border-[#0A2463] text-[#0A2463] px-8 py-4 rounded-xl font-semibold hover:bg-[#0A2463] hover:text-white transition-colors">
          Explore Training
        </Link>
      </div>
    </PageShell>
  );
};

export default About;

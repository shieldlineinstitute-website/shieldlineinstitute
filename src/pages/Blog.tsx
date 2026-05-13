import PageShell from '../components/PageShell';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What topics are covered in the blog?',
    answer: 'Our blog focuses on road safety, defensive driving tips, medical fitness for drivers, and practical advice for Lagos roads.',
  },
  {
    question: 'Can I use the blog to prepare for training?',
    answer: 'Yes, the blog is a great resource to learn more about safe habits, training expectations, and what to expect in our programs.',
  },
  {
    question: 'How often is new content published?',
    answer: 'We publish fresh safety tips and articles regularly so visitors can stay informed and road-ready.',
  },
];

const Blog = () => {
  return (
    <PageShell
      title="Blog"
      subtitle="Safety Insights"
      description="Read our latest articles and tips about defensive driving, road safety, and driver health to help you stay safe behind the wheel."
      faqs={faqs}
    >
      <div className="grid gap-8 mt-12 md:grid-cols-3">
        <article className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm">
          <p className="text-sm text-[#00A896] uppercase tracking-[0.2em] mb-4">Safety Tip</p>
          <h2 className="text-2xl font-bold text-[#0A2463] mb-4">Top defensive driving habits for Lagos roads</h2>
          <p className="text-[#64748B] leading-relaxed">Learn the best habits for staying calm, aware, and prepared for common road conditions in Lagos.</p>
        </article>
        <article className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm">
          <p className="text-sm text-[#00A896] uppercase tracking-[0.2em] mb-4">Medical Advice</p>
          <h2 className="text-2xl font-bold text-[#0A2463] mb-4">Why health checks matter before you drive</h2>
          <p className="text-[#64748B] leading-relaxed">Understand how vision, blood pressure, and fitness impact your ability to make safe decisions on the road.</p>
        </article>
        <article className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm">
          <p className="text-sm text-[#00A896] uppercase tracking-[0.2em] mb-4">Guidance</p>
          <h2 className="text-2xl font-bold text-[#0A2463] mb-4">Preparing for your first training session</h2>
          <p className="text-[#64748B] leading-relaxed">Get ready with simple steps that make your first lessons smoother and more productive.</p>
        </article>
      </div>
      <div className="mt-12 inline-flex flex-wrap gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#00A896] hover:bg-[#00D9B5] text-white px-8 py-4 rounded-xl font-semibold transition-colors">
          Ask a Question
        </Link>
        <Link to="/about" className="inline-flex items-center gap-2 border border-[#0A2463] text-[#0A2463] px-8 py-4 rounded-xl font-semibold hover:bg-[#0A2463] hover:text-white transition-colors">
          Learn More About Shieldline
        </Link>
      </div>
    </PageShell>
  );
};

export default Blog;

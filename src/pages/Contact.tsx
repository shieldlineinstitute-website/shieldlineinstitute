import PageShell from '../components/PageShell';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

const faqs = [
  {
    question: 'How can I reach Shieldline?',
    answer: 'Call us at +234 808 491 5273 or email shieldlineinstitute@gmail.com. You can also use the contact form on this page.',
  },
  {
    question: 'Where is the training held?',
    answer: 'Training is held at our Abijo-Lekki location, with flexible options for corporate on-site sessions.',
  },
  {
    question: 'Do you accept group bookings?',
    answer: 'Yes, we offer group and corporate bookings for fleet training and team safety sessions.',
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("mvzlnpjb");

  if (state.succeeded) {
    return (
      <PageShell
        title="Contact"
        subtitle="Get in Touch"
        description="Reach out to Shieldline Institute to ask questions, schedule training, or learn more about our medical and licensing support services."
        faqs={faqs}
      >
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm max-w-md mx-auto">
          <p className="text-center text-lg text-[#0A2463]">Thanks for your message! We'll get back to you soon.</p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      title="Contact"
      subtitle="Get in Touch"
      description="Reach out to Shieldline Institute to ask questions, schedule training, or learn more about our medical and licensing support services."
      faqs={faqs}
    >
      <div className="grid gap-8 mt-10 md:grid-cols-2">
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-6">Contact Details</h2>
          <ul className="space-y-5 text-[#64748B]">
            <li>
              <strong className="text-[#0A2463]">Phone:</strong> <a href="tel:+2348084915273" className="text-[#0A2463] hover:text-[#00A896]">+234 808 491 5273</a>
            </li>
            <li>
              <strong className="text-[#0A2463]">Email:</strong> <a href="mailto:shieldlineinstitute@gmail.com" className="text-[#0A2463] hover:text-[#00A896]">shieldlineinstitute@gmail.com</a>
            </li>
            <li>
              <strong className="text-[#0A2463]">Address:</strong> Abijo-Lekki Expressway, Lagos, Nigeria
            </li>
            <li>
              <strong className="text-[#0A2463]">Hours:</strong> Mon-Sat 8am - 6pm
            </li>
          </ul>
        </div>
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-6">Quick Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#0A2463] mb-2">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full rounded-2xl border border-[#E2E8F0] px-4 py-3 text-[#0A2463] focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                placeholder="Your name"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#0A2463] mb-2">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full rounded-2xl border border-[#E2E8F0] px-4 py-3 text-[#0A2463] focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                placeholder="Your email"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#0A2463] mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full rounded-2xl border border-[#E2E8F0] px-4 py-3 text-[#0A2463] focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                rows={5}
                placeholder="Tell us how we can help"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="inline-flex items-center justify-center w-full bg-[#0A2463] hover:bg-[#1E3A8A] text-white px-6 py-4 rounded-2xl font-semibold transition-colors disabled:opacity-50"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 inline-flex flex-wrap gap-4">
        <Link to="/faq" className="inline-flex items-center gap-2 border border-[#0A2463] text-[#0A2463] px-8 py-4 rounded-xl font-semibold hover:bg-[#0A2463] hover:text-white transition-colors">
          Frequently Asked Questions
        </Link>
        <Link to="/blog" className="inline-flex items-center gap-2 bg-[#00A896] hover:bg-[#00D9B5] text-white px-8 py-4 rounded-xl font-semibold transition-colors">
          Read Our Blog
        </Link>
      </div>
    </PageShell>
  );
};

export default Contact;

import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface FAQItem {
  question: string;
  answer: string;
}

interface PageShellProps {
  title: string;
  subtitle: string;
  description: string;
  children?: ReactNode;
  faqs: FAQItem[];
}

const PageShell = ({ title, subtitle, description, children, faqs }: PageShellProps) => {
  return (
    <div className="min-h-screen bg-white font-[Inter]">
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="bg-[#F8FAFC] py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-6">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#00A896] mb-4">{subtitle}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-6">{title}</h1>
              <p className="text-lg text-[#64748B] leading-relaxed mb-8">{description}</p>
              {children}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-[#0A2463]/60 mb-4">Common Questions</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463]">Frequently Asked Questions</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-3xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-xl hover:border-[#00A896]/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[#0A2463] mb-3">{faq.question}</h3>
                  <p className="text-[#64748B] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PageShell;

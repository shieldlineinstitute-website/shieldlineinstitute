import { ScrollToTopLink } from '../components/ScrollToTop';
import Footer from '../components/Footer';
import Header from '../components/Header';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white font-[Inter]">
      <Header />
      <main className="pt-24">
        <section className="min-h-[70vh] flex items-center bg-[#F8FAFC]">
          <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center py-20">
            <p className="text-sm uppercase tracking-[0.3em] text-[#00A896] mb-4">Page not found</p>
            <h1 className="text-5xl font-bold text-[#0A2463] mb-6">404 — Page missing</h1>
            <p className="text-lg text-[#64748B] mb-10">
              The page you’re looking for does not exist. Use the links below to continue exploring Shieldline Institute.
            </p>
            <div className="inline-flex flex-wrap justify-center gap-4">
              <ScrollToTopLink to="/" className="bg-[#0A2463] hover:bg-[#1E3A8A] text-white px-8 py-4 rounded-xl font-semibold transition-colors">Home</ScrollToTopLink>
              <ScrollToTopLink to="/contact" className="border border-[#0A2463] text-[#0A2463] px-8 py-4 rounded-xl font-semibold hover:bg-[#0A2463] hover:text-white transition-colors">Contact</ScrollToTopLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;

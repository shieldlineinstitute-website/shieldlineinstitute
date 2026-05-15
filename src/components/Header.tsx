import { useState } from 'react';
import { ScrollToTopLink } from './ScrollToTop';
import shieldlogo from '../images/shieldlinelogo.png';
import BookingFormModal from './BookingFormModal';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="hidden lg:block bg-[#0A2463] text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+2348084915273" className="flex items-center gap-2 hover:text-[#00A896] transition-colors">
              <i className="fa-solid fa-phone text-xs"></i>
              <span>+234 808 491 5273</span>
            </a>
            <a href="tel:+2348036746384" className="flex items-center gap-2 hover:text-[#00A896] transition-colors">
              <i className="fa-solid fa-phone text-xs"></i>
              <span>+234 803 674 6384</span>
            </a>
            <a href="mailto:info@shieldlinedriving.com" className="flex items-center gap-2 hover:text-[#00A896] transition-colors">
              <i className="fa-solid fa-envelope text-xs"></i>
              <span>shieldlineinstitute@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-clock text-xs"></i>
              Mon-Sat: 8am - 6pm
            </span>
            <div className="flex items-center gap-3 ml-4">
              <a href="#" aria-label="Facebook" className="hover:text-[#00A896] transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#00A896] transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-[#00A896] transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://wa.me/2348084915273" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-[#00A896] transition-colors">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20 md:h-16">
            <ScrollToTopLink to="/" className="flex items-center">
              <img
                src={shieldlogo}
                alt="Shieldline Driving Institute"
                className="h-12 w-auto"
              />
            </ScrollToTopLink>

            <div className="hidden lg:flex items-center gap-8">
              <ScrollToTopLink to="/" className="text-[#0A2463] font-semibold hover:text-[#00A896] transition-colors">
                Home
              </ScrollToTopLink>

              <div className="relative group">
                <button className="flex items-center gap-1 text-[#1A202C] font-medium hover:text-[#00A896] transition-colors py-6">
                  Programs
                  <i className="fa-solid fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-4 min-w-64">
                    <ScrollToTopLink to="/basic-student-training" className="block px-4 py-3 rounded-lg hover:bg-[#F0F4F9] transition-colors">
                      <div className="font-medium text-[#0A2463]">Basic Student Training</div>
                      <div className="text-sm text-[#64748B]">For first-time drivers</div>
                    </ScrollToTopLink>
                    <ScrollToTopLink to="/corporate-fleet-training" className="block px-4 py-3 rounded-lg hover:bg-[#F0F4F9] transition-colors mt-1">
                      <div className="font-medium text-[#0A2463]">Corporate Fleet Training</div>
                      <div className="text-sm text-[#64748B]">For companies & organizations</div>
                    </ScrollToTopLink>
                    <ScrollToTopLink to="/medical-safety-audit" className="block px-4 py-3 rounded-lg hover:bg-[#F0F4F9] transition-colors mt-1">
                      <div className="font-medium text-[#0A2463]">Medical Safety Audit</div>
                      <div className="text-sm text-[#64748B]">Health screening & assessment</div>
                    </ScrollToTopLink>
                    <ScrollToTopLink to="/license-support" className="block px-4 py-3 rounded-lg hover:bg-[#F0F4F9] transition-colors mt-1">
                      <div className="font-medium text-[#0A2463]">License Support</div>
                      <div className="text-sm text-[#64748B]">FRSC documentation help</div>
                    </ScrollToTopLink>
                  </div>
                </div>
              </div>

              <ScrollToTopLink to="/about" className="text-[#1A202C] font-medium hover:text-[#00A896] transition-colors">
                About
              </ScrollToTopLink>
              <ScrollToTopLink to="/blog" className="text-[#1A202C] font-medium hover:text-[#00A896] transition-colors">
                Blog
              </ScrollToTopLink>
              <ScrollToTopLink to="/faq" className="text-[#1A202C] font-medium hover:text-[#00A896] transition-colors">
                FAQ
              </ScrollToTopLink>
              <ScrollToTopLink to="/contact" className="text-[#1A202C] font-medium hover:text-[#00A896] transition-colors">
                Contact Us
              </ScrollToTopLink>
              <div className="px-10"></div>
              <div>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-[#0a2d82] hover:bg-[#1E3A8A] text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-lg shadow-[#0A2463]/20 text-center"
                >
                  <div>Register Today</div>
                  <div className="text-[0.6rem] font-normal uppercase mt-1">See How it Works</div>
                </button>
              </div>
            </div>



            <button
              type="button"
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="lg:hidden p-2 text-[#0A2463]"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>

        <div className={`lg:hidden bg-white border-t border-[#E2E8F0] ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            <ScrollToTopLink to="/" className="block py-2 text-[#0A2463] font-semibold">
              Home
            </ScrollToTopLink>
            <div className="py-2">
              <div className="font-semibold text-[#0A2463] mb-2">Programs</div>
              <div className="pl-4 space-y-2">
                <ScrollToTopLink to="/basic-student-training" className="block py-2 text-[#64748B]">Basic Student Training</ScrollToTopLink>
                <ScrollToTopLink to="/corporate-fleet-training" className="block py-2 text-[#64748B]">Corporate Fleet Training</ScrollToTopLink>
                <ScrollToTopLink to="/medical-safety-audit" className="block py-2 text-[#64748B]">Medical Safety Audit</ScrollToTopLink>
                <ScrollToTopLink to="/license-support" className="block py-2 text-[#64748B]">License Support</ScrollToTopLink>
              </div>
            </div>
            <ScrollToTopLink to="/about" className="block py-2 text-[#0A2463]">About Us</ScrollToTopLink>
            <ScrollToTopLink to="/blog" className="block py-2 text-[#0A2463]">Blog</ScrollToTopLink>
            <ScrollToTopLink to="/faq" className="block py-2 text-[#0A2463]">FAQ</ScrollToTopLink>
            <ScrollToTopLink to="/contact" className="block py-2 text-[#0A2463]">Contact Us</ScrollToTopLink>
            <div className="pt-4 border-t border-[#E2E8F0]">
              <button onClick={() => { setIsBookingModalOpen(true); setMobileMenuOpen(false); }} className="block w-full bg-[#0A2463] hover:bg-[#1E3A8A] text-white text-center py-3 rounded-lg font-semibold transition-colors">
                Register & Start
              </button>
            </div>
          </div>
        </div>
      </nav>

      <BookingFormModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </header >
  );
};

export default Header;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import shieldlogo from '../images/shieldlinelogo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="hidden lg:block bg-[#0A2463] text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+2348084915273" className="flex items-center gap-2 hover:text-[#00A896] transition-colors">
              <i className="fa-solid fa-phone text-xs"></i>
              <span>+234 808 491 5273</span>
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
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20 md:h-16">
            <Link to="/" className="flex items-center">
              <img
                src={shieldlogo}
                alt="Shieldline Driving Institute"
                className="h-12 w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-[#0A2463] font-semibold hover:text-[#00A896] transition-colors">
                Home
              </Link>

              <div className="relative group">
                <button className="flex items-center gap-1 text-[#1A202C] font-medium hover:text-[#00A896] transition-colors py-6">
                  Programs
                  <i className="fa-solid fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-4 min-w-64">
                    <Link to="/basic-student-training" className="block px-4 py-3 rounded-lg hover:bg-[#F0F4F9] transition-colors">
                      <div className="font-medium text-[#0A2463]">Basic Student Training</div>
                      <div className="text-sm text-[#64748B]">For first-time drivers</div>
                    </Link>
                    <Link to="/corporate-fleet-training" className="block px-4 py-3 rounded-lg hover:bg-[#F0F4F9] transition-colors mt-1">
                      <div className="font-medium text-[#0A2463]">Corporate Fleet Training</div>
                      <div className="text-sm text-[#64748B]">For companies & organizations</div>
                    </Link>
                    <Link to="/medical-safety-audit" className="block px-4 py-3 rounded-lg hover:bg-[#F0F4F9] transition-colors mt-1">
                      <div className="font-medium text-[#0A2463]">Medical Safety Audit</div>
                      <div className="text-sm text-[#64748B]">Health screening & assessment</div>
                    </Link>
                    <Link to="/license-support" className="block px-4 py-3 rounded-lg hover:bg-[#F0F4F9] transition-colors mt-1">
                      <div className="font-medium text-[#0A2463]">License Support</div>
                      <div className="text-sm text-[#64748B]">FRSC documentation help</div>
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/about" className="text-[#1A202C] font-medium hover:text-[#00A896] transition-colors">
                About
              </Link>
              <Link to="/blog" className="text-[#1A202C] font-medium hover:text-[#00A896] transition-colors">
                Blog
              </Link>
              <Link to="/faq" className="text-[#1A202C] font-medium hover:text-[#00A896] transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="text-[#1A202C] font-medium hover:text-[#00A896] transition-colors">
                Contact
              </Link>

              <Link to="/contact" className="flex flex-col items-center bg-[#0a2d82] hover:bg-[#1E3A8A] text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-lg shadow-[#0A2463]/20">
                <span>Register Today</span>
                <span className="text-[0.6rem] font-normal uppercase mt-1 items-center">See How it Works</span>
              </Link>
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
            <Link to="/" className="block py-2 text-[#0A2463] font-semibold">
              Home
            </Link>
            <div className="py-2">
              <div className="font-semibold text-[#0A2463] mb-2">Programs</div>
              <div className="pl-4 space-y-2">
                <Link to="/basic-student-training" className="block py-2 text-[#64748B]">Basic Student Training</Link>
                <Link to="/corporate-fleet-training" className="block py-2 text-[#64748B]">Corporate Fleet Training</Link>
                <Link to="/medical-safety-audit" className="block py-2 text-[#64748B]">Medical Safety Audit</Link>
                <Link to="/license-support" className="block py-2 text-[#64748B]">License Support</Link>
              </div>
            </div>
            <Link to="/about" className="block py-2 text-[#0A2463]">About</Link>
            <Link to="/blog" className="block py-2 text-[#0A2463]">Blog</Link>
            <Link to="/faq" className="block py-2 text-[#0A2463]">FAQ</Link>
            <Link to="/contact" className="block py-2 text-[#0A2463]">Contact</Link>
            <div className="pt-4 border-t border-[#E2E8F0]">
              <Link to="/contact" className="block w-full bg-[#0A2463] text-white text-center py-3 rounded-lg font-semibold">
                Register & Start
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header >
  );
};

export default Header;

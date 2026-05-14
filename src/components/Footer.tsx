import { Link } from 'react-router-dom';
import shieldlogowhite from '../images/shieldlogowhite.png';

const Footer = () => {
  return (
    <footer className="bg-[#0A2463] text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img
                src={shieldlogowhite}
                alt="Shieldline Driving Institute"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              A reliable, doctor-led driving and road safety institute in Abijo-Lekki, Lagos. Training safer, healthier, and more confident drivers.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00A896] transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00A896] transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00A896] transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://wa.me/2348084915273" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Programs</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/basic-student-training" className="text-white/70 hover:text-white transition-colors">Basic Student Training</Link>
              </li>
              <li>
                <Link to="/corporate-fleet-training" className="text-white/70 hover:text-white transition-colors">Corporate Fleet Training</Link>
              </li>
              <li>
                <Link to="/medical-safety-audit" className="text-white/70 hover:text-white transition-colors">Medical Safety Audit</Link>
              </li>
              <li>
                <Link to="/license-support" className="text-white/70 hover:text-white transition-colors">License Support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">About Shieldline</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-white transition-colors">Blog & Safety Tips</Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-white transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot text-[#00A896] mt-1"></i>
                <span className="text-white/70">Abijo-Lekki Expressway, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-[#00A896]"></i>
                <a href="tel:+2348084915273" className="text-white/70 hover:text-white transition-colors">+234 808 491 5273</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-[#00A896]"></i>
                <a href="tel:+2348036746384" className="text-white/70 hover:text-white transition-colors">+234 803 674 6384</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-[#00A896]"></i>
                <a href="mailto:shieldlineinstitute@gmail.com" className="text-white/70 hover:text-white transition-colors">shieldlineinstitute@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-clock text-[#00A896]"></i>
                <span className="text-white/70">Mon-Sat: 8am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">© 2026 Shieldline Driving Institute. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      <a href="https://wa.me/2348084915273" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:scale-110 transition-transform z-50">
        <i className="fa-brands fa-whatsapp text-2xl text-white"></i>
      </a>
    </footer>
  );
};

export default Footer;

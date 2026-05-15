import { useState } from 'react';
import { ScrollToTopLink } from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingFormModal from './components/BookingFormModal';
import supportpng from './images/supportpng.png';
import studentpng from './images/student.png'
import fleetpng from './images/fleetpng.png';
import auditpng from './images/audit.png';
import licensepng from './images/driving.png';
import drivepng from './images/drivepng.png';

const Homepage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white font-[Inter]">
      <Header />
      <main className="pt-15 md:pt-18">
        <section
          className="relative min-h-[90vh] flex items-center pt-20"
          style={{
            backgroundImage:
              `url(${drivepng})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/90 via-[#0A2463]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 py-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 w-fit">
                <div className="w-2 h-2 bg-[#00A896] rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium">Doctor-Led Institute</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Driving Training & Medical Screening for
                <span className="text-[#04cfb8]"> Safer Drivers</span> in Lagos
              </h1>
              <p className="text-lg md:text-lg text-white/80 mb-8 leading-relaxed">
                Shieldline Driving Institute combines medical screening, defensive driving, and FRSC-aligned instruction to produce road-ready drivers who are physically and mentally fit for Nigerian roads.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button onClick={() => setIsBookingModalOpen(true)} className="bg-[#00A896] hover:bg-[#00D9B5] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl shadow-[#00A896]/30 flex items-center gap-2">
                  <span>Register Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
                <ScrollToTopLink to="/basic-student-training" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                  <span>View Training Programs</span>
                </ScrollToTopLink>
              </div>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-10 h-10 bg-[#00A896]/20 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-user-doctor text-[#00A896]"></i>
                  </div>
                  <span className="text-sm font-medium">Doctor-Led</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-10 h-10 bg-[#00A896]/20 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-certificate text-[#00A896]"></i>
                  </div>
                  <span className="text-sm font-medium">FRSC-Aligned</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-10 h-10 bg-[#00A896]/20 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-heart-pulse text-[#00A896]"></i>
                  </div>
                  <span className="text-sm font-medium">Medical Safety Audit</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce"></div>
            </div>
          </div>
        </section>

        <section className="bg-[#F0F4F9] py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#00A896]/10 px-4 py-2 rounded-full mb-4">
                <i className="fa-solid fa-graduation-cap text-[#00A896]"></i>
                <span className="text-[#00A896] font-medium text-sm">Our Programs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Training Programs Built for Results</h2>
              <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
                From individual learners to corporate fleets, our programs are designed to produce safer, more confident drivers who are medically fit for the road.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-[#0A2463]/5 group hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={studentpng}
                    alt="Student learning to drive"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-[#00A896] text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                    <h3 className="text-2xl font-bold text-white mt-3">Basic Student Training</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[#64748B] mb-6">
                    Perfect for first-time drivers, students, and young adults. Our comprehensive curriculum covers everything from basic controls to advanced defensive driving techniques.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">6-8 Weeks</span>
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">Medicals Included</span>
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">Dual Control</span>
                  </div>
                  <ScrollToTopLink to="/basic-student-training" className="inline-flex items-center gap-2 text-[#00A896] font-semibold hover:text-[#0A2463] transition-colors">
                    <span>View Full Program</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </ScrollToTopLink>
                </div>
              </div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-[#0A2463]/5 group hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={fleetpng}
                    alt="Corporate fleet training"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium">For Organizations</span>
                    <h3 className="text-2xl font-bold text-white mt-3">Corporate Fleet Training</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[#64748B] mb-6">
                    Designed for companies, logistics firms, banks, and NGOs. We provide customized training packages that address fleet safety, driver wellness, and regulatory compliance.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">Custom Packages</span>
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">On-Site Training</span>
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">Driver Assessment</span>
                  </div>
                  <ScrollToTopLink to="/corporate-fleet-training" className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:text-[#0A2463] transition-colors">
                    <span>Request Corporate Proposal</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </ScrollToTopLink>
                </div>
              </div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-[#0A2463]/5 group hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={auditpng}
                    alt="Medical safety check"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-[#14B8A6] text-white px-3 py-1 rounded-full text-sm font-medium">Standalone Service</span>
                    <h3 className="text-2xl font-bold text-white mt-3">Medical Safety Audit</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[#64748B] mb-6">
                    A comprehensive health screening service that evaluates your fitness for driving. Includes vision tests, blood pressure checks, and medical fitness recommendations.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">45-90 Minutes</span>
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">Doctor Reviewed</span>
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">Privacy Protected</span>
                  </div>
                  <ScrollToTopLink to="/medical-safety-audit" className="inline-flex items-center gap-2 text-[#00A896] font-semibold hover:text-[#0A2463] transition-colors">
                    <span>Book Screening</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </ScrollToTopLink>
                </div>
              </div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-[#0A2463]/5 group hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={licensepng}
                    alt="License support"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-[#F59E0B] text-white px-3 py-1 rounded-full text-sm font-medium">Support Service</span>
                    <h3 className="text-2xl font-bold text-white mt-3">License Support</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[#64748B] mb-6">
                    Navigate the FRSC licensing process with confidence. We provide guidance on learner's permits, documentation, and driver's license applications.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">Documentation Help</span>
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">FRSC Guidance</span>
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">Step-by-Step</span>
                  </div>
                  <ScrollToTopLink to="/license-support" className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold hover:text-[#0A2463] transition-colors">
                    <span>Learn More</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </ScrollToTopLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden z-0">
          <img
            src={supportpng}
            alt="Shieldline Driving Support"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full mb-4">
                <i className="fa-solid fa-shield-halved text-[#0A2463]"></i>
                <span className="text-[#0A2463] font-medium text-sm">The Shieldline Difference</span>
              </div>
              <div className="bg-gray-800/70 p-8 md:p-10 rounded-2xl shadow-xl max-w-4xl mx-auto text-center border border-white/20 backdrop-blur-sm">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Shieldline?
                </h2>
                <p className="text-gray-100 text-lg max-w-2xl mx-auto leading-relaxed">
                  We're not just another driving school. Shieldline is a doctor-led safety
                  institute that trains complete drivers — physically and mentally prepared
                  for Nigerian roads.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="text-center group bg-[#00A896] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <i className="fa-solid fa-user-doctor text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Doctor-Led Management</h3>
                <p className="text-teal-50">
                  Medical authority built into every step of the training process. Your health is our priority.
                </p>
              </div>

              {/* Card 2 */}
              <div className="text-center group bg-[#00A896] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <i className="fa-solid fa-heart-pulse text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Safety-First Screening</h3>
                <p className="text-teal-50">
                  Comprehensive checks for vision, blood pressure, sugar levels, and physical fitness before training begins.
                </p>
              </div>

              {/* Card 3 */}
              <div className="text-center group bg-[#00A896] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <i className="fa-solid fa-road text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Defensive Driving Focus</h3>
                <p className="text-teal-50">
                  Real Lagos road conditions, hazard awareness, road discipline, and survival skills for Nigerian roads.
                </p>
              </div>

              {/* Card 4 */}
              <div className="text-center group bg-[#00A896] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <i className="fa-solid fa-award text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Premium Experience</h3>
                <p className="text-teal-50">
                  Clean process, clear communication, professional staff, and structured learning at every stage.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-16 border-t border-[#E2E8F0]">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1ec7c7] mb-2">30+</div>
                <div className="text-gray-700">Corporate Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-2">98%</div>
                <div className="text-[#64748B]">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">20+</div>
                <div className="text-[#64748B]">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
            {/* Soft Teal Glow */}
            <div className="absolute top-[-5%] left-[-5%] w-72 h-72 bg-[#00A896] rounded-full blur-[100px] animate-pulse"></div>

            {/* Soft Blue Glow */}
            <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-[#f5a52f] rounded-full blur-[120px]">
            </div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <i className="fa-solid fa-list-check text-black"></i>
                <span className="text-black font-medium text-sm">Simple Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">How Shieldline Works</h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                Our structured approach ensures you receive the best training and support throughout your journey to becoming a safe, confident driver.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="bg-[#1E3A8A] backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                  <div className="w-16 h-16 bg-[#00A896] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg shadow-[#00A896]/50">1</div>
                  <h3 className="text-xl font-bold text-white mb-3">Register With Us</h3>
                  <p className="text-white/70">
                    Schedule your free consultation to discuss your training needs and goals.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <i className="fa-solid fa-chevron-right text-[#0A2463] text-2xl"></i>
                </div>
              </div>
              <div className="relative">
                <div className="bg-[#1E3A8A] backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                  <div className="w-16 h-16 bg-[#00A896] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg shadow-[#00A896]/50">2</div>
                  <h3 className="text-xl font-bold text-white mb-3">Medical Safety Audit</h3>
                  <p className="text-white/70">
                    Complete our comprehensive health screening to ensure road readiness.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <i className="fa-solid fa-chevron-right text-[#0A2463] text-2xl"></i>
                </div>
              </div>
              <div className="relative">
                <div className="bg-[#1E3A8A] backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                  <div className="w-16 h-16 bg-[#00A896] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg shadow-[#00A896]/50">3</div>
                  <h3 className="text-xl font-bold text-white mb-3">Begin Training</h3>
                  <p className="text-white/70">
                    Start structured driving lessons with our certified instructors and dual-control vehicles.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <i className="fa-solid fa-chevron-right text-[#0A2463] text-2xl"></i>
                </div>
              </div>
              <div className="relative">
                <div className="bg-[#1E3A8A] backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                  <div className="w-16 h-16 bg-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg shadow-[#14B8A6]/50">4</div>
                  <h3 className="text-xl font-bold text-white mb-3">Assessment & License</h3>
                  <p className="text-white/70">
                    Complete your assessment and receive guidance on obtaining your driver's license.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-14">
              <ScrollToTopLink to="/contact" className="inline-flex items-center gap-2 bg-[#00A896] hover:bg-[#00D9B5] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl shadow-[#00A896]/30">
                <span>Start Your Journey Today</span>
                <i className="fa-solid fa-arrow-right"></i>
              </ScrollToTopLink>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#0A2463] via-[#1E3A8A] to-[#0A2463] py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A896]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <i className="fa-solid fa-phone text-white"></i>
              <span className="text-white font-medium text-sm">Get in Touch</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Train with a Reliable, Doctor-Led Institute?
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Book your free consultation today and begin your journey to becoming a safer, more confident driver with Shieldline Driving Institute.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <ScrollToTopLink to="/contact" className="bg-[#00A896] hover:bg-[#00D9B5] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl shadow-[#00A896]/30 flex items-center gap-2 text-lg">
                <i className="fa-solid fa-calendar-check"></i>
                <span>Register & Start</span>
              </ScrollToTopLink>
              <a href="https://wa.me/2348084915273" target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl shadow-[#25D366]/30 flex items-center gap-2 text-lg">
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>WhatsApp Us</span>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <a href="tel:+2348084915273" className="flex items-center gap-2 hover:text-white transition-colors">
                <i className="fa-solid fa-phone"></i>
                <span>+234 808 491 5273</span>
              </a>
              <a href="mailto:shieldlineinstitute@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <i className="fa-solid fa-envelope"></i>
                <span>shieldlineinstitute@gmail.com</span>
              </a>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot"></i>
                <span>Abijo-Lekki, Lagos</span>
              </span>
            </div>
          </div>
        </section>
      </main>

      <BookingFormModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      <Footer />
    </div >
  );
};

export default Homepage;

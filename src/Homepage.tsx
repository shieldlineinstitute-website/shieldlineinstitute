import Header from './components/Header';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white font-[Inter]">
      <Header />
      <main className="pt-24">
        <section
          className="relative min-h-[90vh] flex items-center pt-20"
          style={{
            backgroundImage:
              "url('https://assets.ls-assets.com/provider/istock/2255260540.jpg?w=1920')",
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
                Doctor-Led Driving Training for
                <span className="text-[#00A896]"> Safer Roads</span> in Lagos
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Shieldline Driving Institute combines medical screening, defensive driving, and FRSC-aligned instruction to produce road-ready drivers who are physically and mentally fit for Nigerian roads.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="/book-consultation" className="bg-[#00A896] hover:bg-[#00D9B5] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl shadow-[#00A896]/30 flex items-center gap-2">
                  <span>Book a Free Consultation</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a href="/basic-student-training" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
                  <span>View Training Programs</span>
                </a>
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

        <section className="bg-[#F0F4F9] py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-[#00A896]/10 px-4 py-2 rounded-full mb-4">
                <i className="fa-solid fa-route text-[#00A896]"></i>
                <span className="text-[#00A896] font-medium text-sm">Choose Your Path</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Find the Perfect Training Program</h2>
              <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
                Whether you're a first-time driver, a corporate fleet manager, or someone who values road safety, Shieldline has a tailored program for you.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-[#0A2463]/5 hover:shadow-2xl hover:shadow-[#0A2463]/10 transition-all duration-500 border border-[#E2E8F0] hover:border-[#00A896]/30">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#1E3A8A] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-car text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#0A2463] mb-3">Basic Student Training</h3>
                <p className="text-[#64748B] mb-6 leading-relaxed">
                  For first-time drivers and young adults seeking professional driving skills with medical screening included.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-[#1A202C]">
                    <i className="fa-solid fa-check-circle text-[#00A896]"></i>
                    <span>Complete driving curriculum</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#1A202C]">
                    <i className="fa-solid fa-check-circle text-[#00A896]"></i>
                    <span>Medical Safety Audit included</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#1A202C]">
                    <i className="fa-solid fa-check-circle text-[#00A896]"></i>
                    <span>Dual-control vehicles</span>
                  </li>
                </ul>
                <a href="/basic-student-training" className="inline-flex items-center gap-2 bg-[#0A2463] hover:bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  <span>Learn More</span>
                  <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
              <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-[#0A2463]/5 hover:shadow-2xl hover:shadow-[#0A2463]/10 transition-all duration-500 border border-[#E2E8F0] hover:border-[#00A896]/30">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F59E0B] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-building text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#0A2463] mb-3">Corporate Fleet Training</h3>
                <p className="text-[#64748B] mb-6 leading-relaxed">
                  For companies, logistics teams, banks, NGOs, and organizations committed to road safety compliance.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-[#1A202C]">
                    <i className="fa-solid fa-check-circle text-[#D4AF37]"></i>
                    <span>Customized training packages</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#1A202C]">
                    <i className="fa-solid fa-check-circle text-[#D4AF37]"></i>
                    <span>Defensive driving focus</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#1A202C]">
                    <i className="fa-solid fa-check-circle text-[#D4AF37]"></i>
                    <span>Driver wellness assessment</span>
                  </li>
                </ul>
                <a href="/corporate-fleet-training" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] hover:from-[#C9A030] hover:to-[#E5900A] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  <span>Request Proposal</span>
                  <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
              <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-[#0A2463]/5 hover:shadow-2xl hover:shadow-[#0A2463]/10 transition-all duration-500 border border-[#E2E8F0] hover:border-[#00A896]/30">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00A896] to-[#14B8A6] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-stethoscope text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#0A2463] mb-3">Medical Safety Audit</h3>
                <p className="text-[#64748B] mb-6 leading-relaxed">
                  Comprehensive health screening for anyone who values fitness, safety, and road readiness.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-[#1A202C]">
                    <i className="fa-solid fa-check-circle text-[#00A896]"></i>
                    <span>Vision & eye test</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#1A202C]">
                    <i className="fa-solid fa-check-circle text-[#00A896]"></i>
                    <span>Blood pressure & sugar check</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#1A202C]">
                    <i className="fa-solid fa-check-circle text-[#00A896]"></i>
                    <span>Fitness recommendation</span>
                  </li>
                </ul>
                <a href="/medical-safety-audit" className="inline-flex items-center gap-2 bg-[#00A896] hover:bg-[#00D9B5] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  <span>Book Screening</span>
                  <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#0A2463]/10 px-4 py-2 rounded-full mb-4">
                <i className="fa-solid fa-shield-halved text-[#0A2463]"></i>
                <span className="text-[#0A2463] font-medium text-sm">The Shieldline Difference</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">Why Choose Shieldline?</h2>
              <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
                We're not just another driving school. Shieldline is a doctor-led safety institute that trains complete drivers — physically and mentally prepared for Nigerian roads.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0A2463] to-[#1E3A8A] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#0A2463]/20 transition-all duration-300">
                  <i className="fa-solid fa-user-doctor text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-[#0A2463] mb-3">Doctor-Led Oversight</h3>
                <p className="text-[#64748B]">
                  Medical authority built into every step of the training process. Your health is our priority.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#00A896] to-[#14B8A6] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#00A896]/20 transition-all duration-300">
                  <i className="fa-solid fa-heart-pulse text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-[#0A2463] mb-3">Safety-First Screening</h3>
                <p className="text-[#64748B]">
                  Comprehensive checks for vision, blood pressure, sugar levels, and physical fitness before training begins.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#F59E0B] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#D4AF37]/20 transition-all duration-300">
                  <i className="fa-solid fa-road text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-[#0A2463] mb-3">Defensive Driving Focus</h3>
                <p className="text-[#64748B]">
                  Real Lagos road conditions, hazard awareness, road discipline, and survival skills for Nigerian roads.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#14B8A6] to-[#0A2463] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#14B8A6]/20 transition-all duration-300">
                  <i className="fa-solid fa-award text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-[#0A2463] mb-3">Premium Experience</h3>
                <p className="text-[#64748B]">
                  Clean process, clear communication, professional staff, and structured learning at every stage.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-[#E2E8F0]">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-2">500+</div>
                <div className="text-[#64748B]">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-2">98%</div>
                <div className="text-[#64748B]">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#00A896] mb-2">50+</div>
                <div className="text-[#64748B]">Corporate Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">5+</div>
                <div className="text-[#64748B]">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#0A2463] to-[#1E3A8A] py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 border border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-white rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <i className="fa-solid fa-list-check text-white"></i>
                <span className="text-white font-medium text-sm">Simple Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Shieldline Works</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Our structured approach ensures you receive the best training and support throughout your journey to becoming a safe, confident driver.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#00A896] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg shadow-[#00A896]/50">1</div>
                  <h3 className="text-xl font-bold text-white mb-3">Book Consultation</h3>
                  <p className="text-white/70">
                    Schedule your free consultation to discuss your training needs and goals.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <i className="fa-solid fa-chevron-right text-white/50 text-2xl"></i>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg shadow-[#D4AF37]/50">2</div>
                  <h3 className="text-xl font-bold text-white mb-3">Medical Safety Audit</h3>
                  <p className="text-white/70">
                    Complete our comprehensive health screening to ensure road readiness.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <i className="fa-solid fa-chevron-right text-white/50 text-2xl"></i>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg shadow-[#F59E0B]/50">3</div>
                  <h3 className="text-xl font-bold text-white mb-3">Begin Training</h3>
                  <p className="text-white/70">
                    Start structured driving lessons with our certified instructors and dual-control vehicles.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <i className="fa-solid fa-chevron-right text-white/50 text-2xl"></i>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg shadow-[#14B8A6]/50">4</div>
                  <h3 className="text-xl font-bold text-white mb-3">Assessment & License</h3>
                  <p className="text-white/70">
                    Complete your assessment and receive guidance on obtaining your driver's license.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-14">
              <a href="/book-consultation" className="inline-flex items-center gap-2 bg-[#00A896] hover:bg-[#00D9B5] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl shadow-[#00A896]/30">
                <span>Start Your Journey Today</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
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
                    src="https://assets.ls-assets.com/provider/istock/2241396789.jpg?w=768"
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
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">Medical Included</span>
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">Dual Control</span>
                  </div>
                  <a href="/basic-student-training" className="inline-flex items-center gap-2 text-[#00A896] font-semibold hover:text-[#0A2463] transition-colors">
                    <span>View Full Program</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-[#0A2463]/5 group hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://assets.ls-assets.com/provider/istock/2184648574.jpg?w=768"
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
                  <a href="/corporate-fleet-training" className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:text-[#0A2463] transition-colors">
                    <span>Request Corporate Proposal</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-[#0A2463]/5 group hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://assets.ls-assets.com/provider/istock/2247823007.jpg?w=768"
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
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">30-45 Minutes</span>
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">Doctor Reviewed</span>
                    <span className="bg-[#F0F4F9] text-[#0A2463] px-4 py-2 rounded-full text-sm font-medium">Privacy Protected</span>
                  </div>
                  <a href="/medical-safety-audit" className="inline-flex items-center gap-2 text-[#00A896] font-semibold hover:text-[#0A2463] transition-colors">
                    <span>Book Screening</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-[#0A2463]/5 group hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://assets.ls-assets.com/provider/istock/2214073896.jpg?w=768"
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
                  <a href="/license-support" className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold hover:text-[#0A2463] transition-colors">
                    <span>Learn More</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
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
              Ready to Train with a Premium, Doctor-Led Institute?
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Book your free consultation today and begin your journey to becoming a safer, more confident driver with Shieldline Driving Institute.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="/book-consultation" className="bg-[#00A896] hover:bg-[#00D9B5] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl shadow-[#00A896]/30 flex items-center gap-2 text-lg">
                <i className="fa-solid fa-calendar-check"></i>
                <span>Book Now</span>
              </a>
              <a href="https://wa.me/2348012345678" target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl shadow-[#25D366]/30 flex items-center gap-2 text-lg">
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>WhatsApp Us</span>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <a href="tel:+2348012345678" className="flex items-center gap-2 hover:text-white transition-colors">
                <i className="fa-solid fa-phone"></i>
                <span>+234 801 234 5678</span>
              </a>
              <a href="mailto:info@shieldlinedriving.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <i className="fa-solid fa-envelope"></i>
                <span>info@shieldlinedriving.com</span>
              </a>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot"></i>
                <span>Abijo-Lekki, Lagos</span>
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0A2463] text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <a href="/" className="flex items-center mb-6">
                <img
                  src="https://assets.ls-assets.com/uploads/ee647108-7cc9-47b0-a506-24f068789d03/b377731e-3b9b-4a8e-a94c-8ebed011e73a.png?w=200"
                  alt="Shieldline Driving Institute"
                  className="h-12 w-auto"
                />
              </a>
              <p className="text-white/70 mb-6 leading-relaxed">
                A premium, doctor-led driving and road safety institute in Abijo-Lekki, Lagos. Training safer, healthier, and more confident drivers.
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
                <a href="https://wa.me/2348012345678" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Programs</h4>
              <ul className="space-y-4">
                <li>
                  <a href="/basic-student-training" className="text-white/70 hover:text-white transition-colors">Basic Student Training</a>
                </li>
                <li>
                  <a href="/corporate-fleet-training" className="text-white/70 hover:text-white transition-colors">Corporate Fleet Training</a>
                </li>
                <li>
                  <a href="/medical-safety-audit" className="text-white/70 hover:text-white transition-colors">Medical Safety Audit</a>
                </li>
                <li>
                  <a href="/license-support" className="text-white/70 hover:text-white transition-colors">License Support</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <a href="/about" className="text-white/70 hover:text-white transition-colors">About Shieldline</a>
                </li>
                <li>
                  <a href="/testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</a>
                </li>
                <li>
                  <a href="/blog" className="text-white/70 hover:text-white transition-colors">Blog & Safety Tips</a>
                </li>
                <li>
                  <a href="/faqs" className="text-white/70 hover:text-white transition-colors">FAQs</a>
                </li>
                <li>
                  <a href="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</a>
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
                  <a href="tel:+2348012345678" className="text-white/70 hover:text-white transition-colors">+234 801 234 5678</a>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-envelope text-[#00A896]"></i>
                  <a href="mailto:info@shieldlinedriving.com" className="text-white/70 hover:text-white transition-colors">info@shieldlinedriving.com</a>
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
        <a href="https://wa.me/2348012345678" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:scale-110 transition-transform z-50">
          <i className="fa-brands fa-whatsapp text-2xl text-white"></i>
        </a>
      </footer>
    </div>
  );
};

export default Homepage;

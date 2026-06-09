import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock, Shield, BookOpen, Star } from 'lucide-react';

export default function StarsPrivateInvestigations() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [careerForm, setCareerForm] = useState({ name: '', email: '', phone: '', position: '', experience: '', message: '' });

  const services = [
    { id: 'guards', title: 'Security Guards', desc: 'Licensed, professional security officers for your facility' },
    { id: 'campus', title: 'Campus & School Security', desc: 'Specialized protection for educational institutions' },
    { id: 'protection', title: 'Protection Services', desc: 'Customized security solutions for businesses' },
    { id: 'training', title: 'Training & Classes', desc: 'Professional certifications and security training' }
  ];

  const trainings = [
    'CPT Crisis Prevention Institute',
    'Crash Prevention Instruction',
    'CPR & First Aid',
    'Psychological Handling & De-escalation',
    'MOAB Training',
    'AXON Training',
    'TASER Training',
    'Level III & IV Training',
    'Firearms Training',
    'Active Shooter Training',
    'NRA Civilian Training',
    'NRA LEO (Law Enforcement) Training'
  ];

  const benefits = [
    { title: 'Licensed & Professional', desc: 'All officers fully licensed and background checked' },
    { title: '24/7 Availability', desc: 'Round-the-clock protection when you need it' },
    { title: 'Customizable Solutions', desc: 'Services tailored to your specific security needs' },
    { title: 'Certified Training', desc: 'Industry-standard certifications and continuous education' }
  ];

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCareerFormChange = (e) => {
    setCareerForm({ ...careerForm, [e.target.name]: e.target.value });
  };

  const handleCareerFormSubmit = () => {
    if (careerForm.name && careerForm.email && careerForm.position) {
      alert(`Thank you ${careerForm.name}! Your application has been received. We will be in touch at ${careerForm.email}.`);
      setCareerForm({ name: '', email: '', phone: '', position: '', experience: '', message: '' });
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleFormSubmit = () => {
    if (formData.name && formData.email && formData.service) {
      alert(`Thank you ${formData.name}! We will contact you at ${formData.email} within 24 hours.`);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className="w-full">
      {/* Header/Navigation */}
      <header className="bg-slate-900 text-white sticky top-0 z-50" style={{ backgroundColor: '#001F3F' }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B8860B' }}>
              <Star className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">STARS</h1>
              <p className="text-xs" style={{ color: '#B8860B' }}>Private Investigations</p>
            </div>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            <button onClick={() => setCurrentPage('home')} className="hover:text-yellow-400 transition">Services</button>
            <button onClick={() => setCurrentPage('home')} className="hover:text-yellow-400 transition">Training</button>
            <button onClick={() => setCurrentPage('about')} className="hover:text-yellow-400 transition">About</button>
            <button onClick={() => setCurrentPage('home')} className="hover:text-yellow-400 transition">Contact</button>
          </nav>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded" style={{ backgroundColor: '#B8860B' }}>
            <Phone className="w-4 h-4" />
            <span>(210) 637-9061</span>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 px-4 py-4 space-y-3">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left hover:text-yellow-400">Services</button>
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left hover:text-yellow-400">Training</button>
            <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="block w-full text-left hover:text-yellow-400">About</button>
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left hover:text-yellow-400">Contact</button>
          </div>
        )}
      </header>

      {/* CAREERS PAGE */}
      {currentPage === 'careers' && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <button onClick={() => setCurrentPage('home')} className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition text-gray-800">
              ← Back to Home
            </button>

            <h1 className="text-4xl font-bold text-center mb-4" style={{ color: '#001F3F' }}>Join Our Team</h1>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Stars Private Investigations is always looking for dedicated, professional individuals to grow with us. Fill out the form below and we'll be in touch.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg border-l-4 mb-10" style={{ borderColor: '#B8860B' }}>
              <h2 className="text-xl font-bold mb-2" style={{ color: '#001F3F' }}>What We Look For</h2>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Strong integrity and professional conduct</li>
                <li>Military, law enforcement, or security background preferred</li>
                <li>Ability to obtain a Texas security license (we can assist)</li>
                <li>Reliable, punctual, and team-oriented</li>
                <li>CPR/First Aid certification (or willingness to obtain)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#001F3F' }}>Application Form</h2>
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={careerForm.name}
                onChange={handleCareerFormChange}
                className="w-full px-4 py-3 rounded border border-gray-300 text-black focus:outline-none focus:border-yellow-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={careerForm.email}
                onChange={handleCareerFormChange}
                className="w-full px-4 py-3 rounded border border-gray-300 text-black focus:outline-none focus:border-yellow-600"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={careerForm.phone}
                onChange={handleCareerFormChange}
                className="w-full px-4 py-3 rounded border border-gray-300 text-black focus:outline-none focus:border-yellow-600"
              />
              <select
                name="position"
                value={careerForm.position}
                onChange={handleCareerFormChange}
                className="w-full px-4 py-3 rounded border border-gray-300 text-black focus:outline-none focus:border-yellow-600"
              >
                <option value="">Position of Interest *</option>
                <option value="security-officer">Security Officer</option>
                <option value="campus-security">Campus / School Security</option>
                <option value="investigator">Private Investigator</option>
                <option value="training-instructor">Training Instructor</option>
                <option value="other">Other</option>
              </select>
              <select
                name="experience"
                value={careerForm.experience}
                onChange={handleCareerFormChange}
                className="w-full px-4 py-3 rounded border border-gray-300 text-black focus:outline-none focus:border-yellow-600"
              >
                <option value="">Years of Experience</option>
                <option value="0-1">Less than 1 year</option>
                <option value="1-3">1–3 years</option>
                <option value="3-5">3–5 years</option>
                <option value="5+">5+ years</option>
              </select>
              <textarea
                name="message"
                placeholder="Tell us about your background, certifications, and why you want to join Stars..."
                value={careerForm.message}
                onChange={handleCareerFormChange}
                rows="5"
                className="w-full px-4 py-3 rounded border border-gray-300 text-black focus:outline-none focus:border-yellow-600"
              />
              <button
                onClick={handleCareerFormSubmit}
                className="w-full py-3 rounded-lg font-semibold text-white transition"
                style={{ backgroundColor: '#B8860B' }}
              >
                Submit Application
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ABOUT PAGE */}
      {currentPage === 'about' && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <button onClick={() => setCurrentPage('home')} className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition text-gray-800">
              ← Back to Home
            </button>

            <h1 className="text-4xl font-bold text-center mb-12" style={{ color: '#001F3F' }}>About Our Founder</h1>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              {/* Image Placeholder */}
              <div className="rounded-lg overflow-hidden shadow-lg" style={{ height: '500px' }}>
                <img
                  src="https://i.imgur.com/4DjhANg.png"
                  alt="Tony Trevino - Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Biography */}
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#B8860B' }}>Tony Trevino</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  With a lifetime dedicated to service, integrity, and protecting others, Tony Trevino founded <strong>Stars Private Investigations in 2013</strong> with a vision of providing professional, trustworthy, and results-driven investigative services.
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  Tony proudly served the <strong>United States Army for 26 years</strong>, building a distinguished career founded on discipline, leadership, and unwavering commitment to duty. Upon his honorable retirement as a disabled veteran, he continued his mission by entering law enforcement.
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  Today, Tony serves as a <strong>Captain with the Maverick County Sheriff's Office</strong>, bringing decades of investigative experience and operational leadership to every case handled by Stars Private Investigations.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Under Tony's leadership, Stars has earned a reputation for professionalism, discretion, and dedication. His military and law enforcement background ensures every case is handled with the highest standards of ethics, confidentiality, and attention to detail.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 mb-12" style={{ borderColor: '#B8860B' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#001F3F' }}>Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide accurate information, professional investigative services, and peace of mind to every client we serve. Whether assisting individuals, attorneys, businesses, or families, we are committed to delivering reliable results with honesty, integrity, and respect.
              </p>
            </div>

            {/* Back to Home */}
            <div className="text-center">
              <button onClick={() => setCurrentPage('home')} className="px-8 py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: '#B8860B' }}>
                Return to Home
              </button>
            </div>
          </div>
        </section>
      )}

      {/* HOME PAGE */}
      {currentPage === 'home' && (
        <>
          {/* Video Section */}
          <section className="py-8 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://drive.google.com/file/d/1eW8lr56_u0TLb06EYmupoGdpzMjaYQrT/preview"
                  width="100%"
                  height="600"
                  allow="autoplay"
                  allowFullScreen
                  title="Stars Private Investigations Video"
                />
              </div>
            </div>
          </section>

          {/* Hero Section */}
          <section className="text-white py-20 px-4" style={{ background: 'linear-gradient(135deg, #001F3F 0%, #003d5c 100%)' }}>
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B8860B' }}>
                  <Star className="w-12 h-12 text-white fill-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Stars Private Investigations</h2>
              <p className="text-xl mb-8 opacity-90">Professional Security & Investigation Services for San Antonio, Texas</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 rounded-lg font-semibold transition text-slate-900" style={{ backgroundColor: '#B8860B' }}>
                  Book a Consultation
                </button>
                <button className="border-2 px-8 py-3 rounded-lg font-semibold transition hover:text-slate-900" style={{ borderColor: '#B8860B', color: '#B8860B' }}>
                  View Services
                </button>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#001F3F' }}>Our Security Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map(service => (
                  <div key={service.id} className="border-2 rounded-lg p-6 hover:shadow-lg transition cursor-pointer" style={{ borderColor: '#B8860B' }}>
                    <Shield className="w-10 h-10 mb-3" style={{ color: '#B8860B' }} />
                    <h3 className="font-bold text-lg mb-2" style={{ color: '#001F3F' }}>{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Training Section */}
          <section id="training" className="py-16 px-4" style={{ backgroundColor: '#f5f3f0' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#001F3F' }}>Training & Certifications</h2>
              <p className="text-center text-gray-600 mb-12">Industry-leading courses for security professionals</p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trainings.map((training, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border-2 border-gray-200 flex items-start gap-3">
                    <BookOpen className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#B8860B' }} />
                    <span className="text-gray-800">{training}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <button className="text-white px-8 py-3 rounded-lg font-semibold transition" style={{ backgroundColor: '#B8860B' }}>
                  Enroll in Training
                </button>
              </div>
            </div>
          </section>

          {/* Why Us Section */}
          <section id="why-us" className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#001F3F' }}>Why Choose STARS?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#B8860B' }}>
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: '#001F3F' }}>{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16 px-4" style={{ backgroundColor: '#f5f3f0' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#001F3F' }}>Our Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { num: '01', title: 'Assessment', desc: 'We evaluate your security needs' },
                  { num: '02', title: 'Consultation', desc: 'Expert advice tailored to you' },
                  { num: '03', title: 'Proposal', desc: 'Custom security solution' },
                  { num: '04', title: 'Deployment', desc: 'Immediate implementation' }
                ].map((step, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl font-bold mb-2" style={{ color: '#B8860B' }}>{step.num}</div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: '#001F3F' }}>{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#001F3F' }}>What Clients Say</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { quote: 'Professional, reliable, and responsive. Highly recommended.', author: 'Arlington School District' },
                  { quote: 'The training program exceeded our expectations. Excellent instructors.', author: 'Local Business Owner' },
                  { quote: "Best security investment we've made. Top-notch service.", author: 'Commercial Property Manager' }
                ].map((testimonial, idx) => (
                  <div key={idx} className="p-6 rounded-lg border-2 border-gray-200" style={{ borderColor: '#B8860B' }}>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                    <p className="font-semibold" style={{ color: '#001F3F' }}>{testimonial.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact & Booking Section */}
          <section id="contact" className="py-16 px-4 text-white" style={{ background: 'linear-gradient(135deg, #001F3F 0%, #003d5c 100%)' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Get Started Today</h2>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Request a Consultation</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 rounded text-black"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 rounded text-black"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 rounded text-black"
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 rounded text-black"
                    >
                      <option value="">Select Service of Interest</option>
                      <option value="guards">Security Guards</option>
                      <option value="campus">Campus & School Security</option>
                      <option value="protection">Protection Services</option>
                      <option value="training">Training & Classes</option>
                    </select>
                    <textarea
                      name="message"
                      placeholder="Tell us about your security needs..."
                      value={formData.message}
                      onChange={handleFormChange}
                      rows="4"
                      className="w-full px-4 py-2 rounded text-black"
                    />
                    <button onClick={handleFormSubmit} className="w-full text-slate-900 py-2 rounded font-semibold transition" style={{ backgroundColor: '#B8860B' }}>
                      Submit Inquiry
                    </button>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#B8860B' }} />
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p>(210) 637-9061<br/>(210) 589-0259</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#B8860B' }} />
                        <div>
                          <p className="font-semibold">Address</p>
                          <p>7461 Callaghan Rd, Ste 100<br/>San Antonio, TX 78229</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#B8860B' }} />
                        <div>
                          <p className="font-semibold">Hours</p>
                          <p>24/7 Available</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#B8860B' }} />
                        <div>
                          <p className="font-semibold">Email</p>
                          <p>spitx06@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(184, 134, 11, 0.2)', borderLeft: '4px solid #B8860B' }}>
                    <h4 className="font-bold mb-2">Online</h4>
                    <p className="text-sm opacity-90">www.starsprivatei.com</p>
                    <p className="text-sm opacity-90 mt-2">Licensed & Bonded #C00444101</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-gray-400 py-8 px-4" style={{ backgroundColor: '#0a1929' }}>
            <div className="max-w-6xl mx-auto text-center">
              <p>&copy; 2024 Stars Private Investigations. All rights reserved.</p>
              <p className="mt-2 text-sm">San Antonio, Texas | Licensed & Bonded #C00444101</p>
              <p className="mt-2 text-sm">www.starsprivatei.com</p>
              <div className="mt-4 flex justify-center gap-6">
                <button className="hover:text-white transition">Privacy Policy</button>
                <button className="hover:text-white transition">Terms of Service</button>
                <button className="hover:text-white transition">Certifications</button>
                <button onClick={() => setCurrentPage('careers')} className="hover:text-white transition">Careers</button>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

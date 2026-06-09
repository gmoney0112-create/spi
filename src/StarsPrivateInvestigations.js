import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock, Shield, BookOpen, Star, ChevronRight } from 'lucide-react';

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

// Replace these with your Formspree form IDs after signing up at formspree.io
const CONTACT_FORM_ID = 'REPLACE_WITH_CONTACT_FORM_ID';
const CAREER_FORM_ID  = 'REPLACE_WITH_CAREER_FORM_ID';

// Replace with your Calendly link after setting up at calendly.com
const CALENDLY_URL = 'https://calendly.com/REPLACE_WITH_YOUR_LINK';

export default function StarsPrivateInvestigations() {
  const [mobileMenuOpen, setMobileMenuOpen]     = useState(false);
  const [currentPage, setCurrentPage]           = useState('home');
  const [bannerDismissed, setBannerDismissed]   = useState(false);
  const [formData, setFormData]                 = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [careerForm, setCareerForm]             = useState({ name: '', email: '', phone: '', position: '', experience: '', message: '' });
  const [formStatus, setFormStatus]             = useState('');
  const [careerStatus, setCareerStatus]         = useState('');

  const services = [
    { id: 'guards',      title: 'Security Guards',        desc: 'Licensed, professional security officers for your facility' },
    { id: 'campus',      title: 'Campus & School Security', desc: 'Specialized protection for educational institutions' },
    { id: 'protection',  title: 'Protection Services',    desc: 'Customized security solutions for businesses' },
    { id: 'training',    title: 'Training & Classes',     desc: 'Professional certifications and security training' },
    { id: 'extradition', title: 'Extradition Services',   desc: 'Professional fugitive transport and extradition assistance' },
    { id: 'pi',          title: 'Private Investigation',  desc: 'Discreet, thorough investigations for individuals, businesses, and attorneys' },
    { id: 'event',       title: 'Event Security',         desc: 'Reliable security coverage for private and public events of all sizes' },
    { id: 'monitoring',  title: 'Personnel Monitoring',   desc: 'Surveillance and monitoring services for workforce accountability' },
    { id: 'process',     title: 'Process Serving',        desc: 'Fast, reliable legal document delivery throughout Texas' }
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
    'Firearms Training & Concealed Carry License (LTC)',
    'Active Shooter Training',
    'NRA Civilian Training',
    'NRA LEO (Law Enforcement) Training'
  ];

  const benefits = [
    { title: 'Licensed & Professional', desc: 'All officers fully licensed and background checked' },
    { title: '24/7 Availability',       desc: 'Round-the-clock protection when you need it' },
    { title: 'Customizable Solutions',  desc: 'Services tailored to your specific security needs' },
    { title: 'Certified Training',      desc: 'Industry-standard certifications and continuous education' }
  ];

  const blogPosts = [
    {
      title: '5 Signs Your Business Needs a Security Guard',
      date: 'May 2025',
      summary: 'From rising theft to after-hours incidents, learn the warning signs that indicate it\'s time to invest in professional security for your San Antonio business.',
      tag: 'Business Security'
    },
    {
      title: 'Understanding Texas Security License Requirements',
      date: 'April 2025',
      summary: 'Texas has strict licensing requirements for security professionals. Here\'s what employers and guards need to know about DPS licensing, training hours, and renewals.',
      tag: 'Compliance'
    },
    {
      title: 'Active Shooter Response: What Every Business Should Know',
      date: 'March 2025',
      summary: 'Active shooter incidents are on the rise. We cover the Run-Hide-Fight framework, how to train your staff, and why professional security training saves lives.',
      tag: 'Safety Training'
    }
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFormSubmit = async () => {
    if (!formData.name || !formData.email || !formData.service) {
      setFormStatus('error');
      return;
    }
    try {
      const res = await fetch(`https://formspree.io/f/${CONTACT_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setFormStatus('fail');
      }
    } catch {
      setFormStatus('fail');
    }
  };

  const handleCareerFormChange = (e) => setCareerForm({ ...careerForm, [e.target.name]: e.target.value });

  const handleCareerFormSubmit = async () => {
    if (!careerForm.name || !careerForm.email || !careerForm.position) {
      setCareerStatus('error');
      return;
    }
    try {
      const res = await fetch(`https://formspree.io/f/${CAREER_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(careerForm)
      });
      if (res.ok) {
        setCareerStatus('success');
        setCareerForm({ name: '', email: '', phone: '', position: '', experience: '', message: '' });
      } else {
        setCareerStatus('fail');
      }
    } catch {
      setCareerStatus('fail');
    }
  };

  return (
    <div className="w-full">

      {/* Free Consultation Banner */}
      {!bannerDismissed && (
        <div className="text-white text-center py-2 px-4 text-sm flex items-center justify-center gap-3 relative" style={{ backgroundColor: '#B8860B' }}>
          <span>🎖️ Veteran-Owned Business — <strong>Free Security Consultation</strong> for New Clients in San Antonio &amp; South Texas</span>
          <button onClick={() => scrollToSection('contact')} className="underline font-semibold hover:opacity-80">Book Now</button>
          <button onClick={() => setBannerDismissed(true)} className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header/Navigation */}
      <header className="text-white sticky top-0 z-50" style={{ backgroundColor: '#001F3F' }}>
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

          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('services')} className="hover:text-yellow-400 transition">Services</button>
            <button onClick={() => scrollToSection('training')} className="hover:text-yellow-400 transition">Training</button>
            <button onClick={() => setCurrentPage('about')} className="hover:text-yellow-400 transition">About</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-yellow-400 transition">Contact</button>
          </nav>

          <a href={`tel:2106379061`} className="hidden md:flex items-center gap-2 px-4 py-2 rounded" style={{ backgroundColor: '#B8860B' }}>
            <Phone className="w-4 h-4" />
            <span>(210) 637-9061</span>
          </a>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left hover:text-yellow-400">Services</button>
            <button onClick={() => scrollToSection('training')} className="block w-full text-left hover:text-yellow-400">Training</button>
            <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="block w-full text-left hover:text-yellow-400">About</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-yellow-400">Contact</button>
            <a href="tel:2106379061" className="block w-full text-left hover:text-yellow-400 font-semibold" style={{ color: '#B8860B' }}>(210) 637-9061</a>
          </div>
        )}
      </header>

      {/* Floating Call Now Button (mobile only) */}
      <a
        href="tel:2106379061"
        className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold shadow-lg"
        style={{ backgroundColor: '#B8860B' }}
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>

      {/* CAREERS PAGE */}
      {currentPage === 'careers' && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <button onClick={() => setCurrentPage('home')} className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition text-gray-800">
              ← Back to Home
            </button>
            <h1 className="text-4xl font-bold text-center mb-4" style={{ color: '#001F3F' }}>Join Our Team</h1>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Stars Private Investigations is always looking for dedicated, professional individuals to grow with us.
            </p>
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 mb-10" style={{ borderColor: '#B8860B' }}>
              <h2 className="text-xl font-bold mb-3" style={{ color: '#001F3F' }}>What We Look For</h2>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Strong integrity and professional conduct</li>
                <li>Military, law enforcement, or security background preferred</li>
                <li>Ability to obtain a Texas security license (we can assist)</li>
                <li>Reliable, punctual, and team-oriented</li>
                <li>CPR/First Aid certification (or willingness to obtain)</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#001F3F' }}>Application Form</h2>
              {careerStatus === 'success' && (
                <div className="bg-green-100 text-green-800 px-4 py-3 rounded">Application submitted! We'll be in touch soon.</div>
              )}
              {careerStatus === 'error' && (
                <div className="bg-red-100 text-red-800 px-4 py-3 rounded">Please fill in all required fields (Name, Email, Position).</div>
              )}
              {careerStatus === 'fail' && (
                <div className="bg-red-100 text-red-800 px-4 py-3 rounded">Something went wrong. Please call us at (210) 637-9061.</div>
              )}
              <input type="text" name="name" placeholder="Full Name *" value={careerForm.name} onChange={handleCareerFormChange} className="w-full px-4 py-3 rounded border border-gray-300 text-black" />
              <input type="email" name="email" placeholder="Email Address *" value={careerForm.email} onChange={handleCareerFormChange} className="w-full px-4 py-3 rounded border border-gray-300 text-black" />
              <input type="tel" name="phone" placeholder="Phone Number" value={careerForm.phone} onChange={handleCareerFormChange} className="w-full px-4 py-3 rounded border border-gray-300 text-black" />
              <select name="position" value={careerForm.position} onChange={handleCareerFormChange} className="w-full px-4 py-3 rounded border border-gray-300 text-black">
                <option value="">Position of Interest *</option>
                <optgroup label="Security">
                  <option value="security-officer">Security Officer</option>
                  <option value="campus-security">Campus / School Security</option>
                  <option value="event-security">Event Security</option>
                  <option value="investigator">Private Investigator</option>
                  <option value="process-server">Process Server</option>
                  <option value="training-instructor">Training Instructor</option>
                </optgroup>
                <optgroup label="Administrative">
                  <option value="executive">Executive</option>
                  <option value="records-clerk">Records Clerk</option>
                </optgroup>
                <option value="other">Other</option>
              </select>
              <select name="experience" value={careerForm.experience} onChange={handleCareerFormChange} className="w-full px-4 py-3 rounded border border-gray-300 text-black">
                <option value="">Years of Experience</option>
                <option value="0-1">Less than 1 year</option>
                <option value="1-3">1–3 years</option>
                <option value="3-5">3–5 years</option>
                <option value="5+">5+ years</option>
              </select>
              <textarea name="message" placeholder="Tell us about your background, certifications, and why you want to join Stars..." value={careerForm.message} onChange={handleCareerFormChange} rows="5" className="w-full px-4 py-3 rounded border border-gray-300 text-black" />
              <button onClick={handleCareerFormSubmit} className="w-full py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: '#B8860B' }}>
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
              <div className="rounded-lg overflow-hidden shadow-lg" style={{ height: '500px' }}>
                <img src="/spi-logo.png" alt="SPI Security - Stars Private Investigations" className="w-full h-full object-contain bg-gray-900" />
              </div>
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
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 mb-12" style={{ borderColor: '#B8860B' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#001F3F' }}>Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide accurate information, professional investigative services, and peace of mind to every client we serve. Whether assisting individuals, attorneys, businesses, or families, we are committed to delivering reliable results with honesty, integrity, and respect.
              </p>
            </div>
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
              <div className="mb-4 flex justify-center">
                <span className="px-4 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: 'rgba(184,134,11,0.3)', color: '#f0c040', border: '1px solid #B8860B' }}>
                  🎖️ Veteran-Owned &amp; Operated | Licensed &amp; Bonded #C00444101
                </span>
              </div>
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B8860B' }}>
                  <Star className="w-12 h-12 text-white fill-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Stars Private Investigations</h2>
              <p className="text-xl mb-3 opacity-90">Professional Security &amp; Investigation Services</p>
              <p className="text-lg mb-8 opacity-75">Serving San Antonio, Eagle Pass, South Texas &amp; Surrounding Areas</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => scrollToSection('booking')} className="px-8 py-3 rounded-lg font-semibold transition text-slate-900" style={{ backgroundColor: '#B8860B' }}>
                  Book Free Consultation
                </button>
                <button onClick={() => scrollToSection('services')} className="border-2 px-8 py-3 rounded-lg font-semibold transition" style={{ borderColor: '#B8860B', color: '#B8860B' }}>
                  View Services
                </button>
              </div>
            </div>
          </section>

          {/* Credentials Bar */}
          <section className="py-6 px-4 text-white" style={{ backgroundColor: '#B8860B' }}>
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2 font-semibold">
                <Shield className="w-5 h-5" />
                <span>Licensed #C00444101</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Star className="w-5 h-5 fill-white" />
                <span>Veteran-Owned Business</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Shield className="w-5 h-5" />
                <span>Fully Bonded &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Clock className="w-5 h-5" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <MapPin className="w-5 h-5" />
                <span>San Antonio, TX &amp; South Texas</span>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#001F3F' }}>Our Security Services</h2>
              <p className="text-center text-gray-600 mb-12">Serving businesses, schools, and individuals across San Antonio, Eagle Pass, and South Texas</p>
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
              <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#001F3F' }}>Training &amp; Certifications</h2>
              <p className="text-center text-gray-600 mb-12">Industry-leading courses for security professionals in Texas</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trainings.map((training, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border-2 border-gray-200 flex items-start gap-3">
                    <BookOpen className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#B8860B' }} />
                    <span className="text-gray-800">{training}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <button onClick={() => scrollToSection('contact')} className="text-white px-8 py-3 rounded-lg font-semibold transition" style={{ backgroundColor: '#B8860B' }}>
                  Enroll in Training
                </button>
              </div>
            </div>
          </section>

          {/* Why Us Section */}
          <section id="why-us" className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#001F3F' }}>Why Choose STARS?</h2>
              <p className="text-center text-gray-600 mb-12">San Antonio's trusted veteran-owned security company since 2013</p>
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
                  { num: '01', title: 'Assessment',   desc: 'We evaluate your security needs' },
                  { num: '02', title: 'Consultation',  desc: 'Expert advice tailored to you' },
                  { num: '03', title: 'Proposal',      desc: 'Custom security solution' },
                  { num: '04', title: 'Deployment',    desc: 'Immediate implementation' }
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
                ].map((t, idx) => (
                  <div key={idx} className="p-6 rounded-lg border-2" style={{ borderColor: '#B8860B' }}>
                    <p className="text-gray-700 mb-4 italic">"{t.quote}"</p>
                    <p className="font-semibold" style={{ color: '#001F3F' }}>{t.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Blog / News Section */}
          <section id="blog" className="py-16 px-4" style={{ backgroundColor: '#f5f3f0' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#001F3F' }}>Security Insights</h2>
              <p className="text-center text-gray-600 mb-12">Tips, news, and expert guidance from Stars Private Investigations</p>
              <div className="grid md:grid-cols-3 gap-8">
                {blogPosts.map((post, idx) => (
                  <div key={idx} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                    <div className="p-6">
                      <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: '#B8860B', color: 'white' }}>{post.tag}</span>
                      <p className="text-xs text-gray-400 mt-2 mb-3">{post.date}</p>
                      <h3 className="font-bold text-lg mb-3 leading-snug" style={{ color: '#001F3F' }}>{post.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{post.summary}</p>
                      <button onClick={() => scrollToSection('contact')} className="mt-4 flex items-center gap-1 text-sm font-semibold" style={{ color: '#B8860B' }}>
                        Contact Us <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Book a Consultation (Calendly) */}
          <section id="booking" className="py-16 px-4 text-white" style={{ background: 'linear-gradient(135deg, #001F3F 0%, #003d5c 100%)' }}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Book a Free Consultation</h2>
              <p className="text-lg opacity-90 mb-8">
                Schedule a no-obligation security assessment with our team. We'll evaluate your needs and recommend the right solution for your business, campus, or property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-lg font-semibold text-slate-900 transition"
                  style={{ backgroundColor: '#B8860B' }}
                >
                  Schedule Online
                </a>
                <a
                  href="tel:2106379061"
                  className="border-2 px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                  style={{ borderColor: '#B8860B', color: '#B8860B' }}
                >
                  <Phone className="w-4 h-4" /> Call (210) 637-9061
                </a>
              </div>
            </div>
          </section>

          {/* Contact & Booking Section */}
          <section id="contact" className="py-16 px-4 text-white" style={{ background: 'linear-gradient(135deg, #002a50 0%, #001F3F 100%)' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Get Started Today</h2>
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Request a Consultation</h3>
                  {formStatus === 'success' && (
                    <div className="bg-green-100 text-green-800 px-4 py-3 rounded mb-4">Message sent! We'll contact you within 24 hours.</div>
                  )}
                  {formStatus === 'error' && (
                    <div className="bg-red-100 text-red-800 px-4 py-3 rounded mb-4">Please fill in Name, Email, and Service.</div>
                  )}
                  {formStatus === 'fail' && (
                    <div className="bg-red-100 text-red-800 px-4 py-3 rounded mb-4">Something went wrong. Please call (210) 637-9061.</div>
                  )}
                  <div className="space-y-4">
                    <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleFormChange} className="w-full px-4 py-2 rounded text-black" />
                    <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleFormChange} className="w-full px-4 py-2 rounded text-black" />
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-2 rounded text-black" />
                    <select name="service" value={formData.service} onChange={handleFormChange} className="w-full px-4 py-2 rounded text-black">
                      <option value="">Select Service of Interest *</option>
                      <option value="guards">Security Guards</option>
                      <option value="campus">Campus &amp; School Security</option>
                      <option value="protection">Protection Services</option>
                      <option value="extradition">Extradition Services</option>
                      <option value="pi">Private Investigation</option>
                      <option value="event">Event Security</option>
                      <option value="monitoring">Personnel Monitoring</option>
                      <option value="process">Process Serving</option>
                      <option value="training">Training &amp; Classes</option>
                    </select>
                    <textarea name="message" placeholder="Tell us about your security needs..." value={formData.message} onChange={handleFormChange} rows="4" className="w-full px-4 py-2 rounded text-black" />
                    <button onClick={handleFormSubmit} className="w-full text-slate-900 py-2 rounded font-semibold transition" style={{ backgroundColor: '#B8860B' }}>
                      Submit Inquiry
                    </button>
                  </div>
                </div>

                {/* Contact Info + Map */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#B8860B' }} />
                        <div>
                          <p className="font-semibold">Phone</p>
                          <a href="tel:2106379061" className="hover:underline">(210) 637-9061</a><br />
                          <a href="tel:2105890259" className="hover:underline">(210) 589-0259</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#B8860B' }} />
                        <div>
                          <p className="font-semibold">Address</p>
                          <p>7461 Callaghan Rd, Ste 100<br />San Antonio, TX 78229</p>
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
                          <a href="mailto:spitx06@gmail.com" className="hover:underline">spitx06@gmail.com</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Google Maps */}
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      title="Stars Private Investigations Location"
                      width="100%"
                      height="220"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src="https://maps.google.com/maps?q=7461+Callaghan+Rd+Ste+100+San+Antonio+TX+78229&output=embed"
                    />
                  </div>

                  <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(184, 134, 11, 0.2)', borderLeft: '4px solid #B8860B' }}>
                    <p className="text-sm opacity-90">www.starsprivatei.com</p>
                    <p className="text-sm opacity-90 mt-1">Licensed &amp; Bonded #C00444101</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-gray-400 py-10 px-4" style={{ backgroundColor: '#0a1929' }}>
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B8860B' }}>
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold">STARS Private Investigations</p>
                    <p className="text-xs">San Antonio, TX | Licensed &amp; Bonded #C00444101</p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
                    <FacebookIcon />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition">
                    <InstagramIcon />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
                    <LinkedinIcon />
                  </a>
                </div>
              </div>

              <hr className="border-gray-700 mb-6" />

              <div className="text-center">
                <div className="flex flex-wrap justify-center gap-6 mb-4">
                  <button className="hover:text-white transition">Privacy Policy</button>
                  <button className="hover:text-white transition">Terms of Service</button>
                  <button className="hover:text-white transition">Certifications</button>
                  <button onClick={() => setCurrentPage('careers')} className="hover:text-white transition">Careers</button>
                  <button onClick={() => setCurrentPage('about')} className="hover:text-white transition">About</button>
                </div>
                <p className="text-sm">&copy; {new Date().getFullYear()} Stars Private Investigations. All rights reserved.</p>
                <p className="text-xs mt-1 opacity-60">Veteran-Owned &amp; Operated | Serving San Antonio, Eagle Pass &amp; South Texas</p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

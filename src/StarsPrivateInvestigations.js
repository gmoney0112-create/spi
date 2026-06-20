import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Shield, BookOpen, Star, ChevronRight } from 'lucide-react';

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const TikTokIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/></svg>
);

const CONTACT_FORM_ID = 'mzdqvlln';
const CAREER_FORM_ID  = 'xojzlogq';

// Replace with your Stripe donation link
const STRIPE_DONATE_URL = 'https://donate.stripe.com/REPLACE_WITH_YOUR_LINK';
const CALENDLY_URL = 'https://calendly.com/spitxadmin/30min';

export default function StarsPrivateInvestigations() {
  const [mobileMenuOpen, setMobileMenuOpen]     = useState(false);
  const [currentPage, setCurrentPage]           = useState('home');
  const [currentBlogPost, setCurrentBlogPost]   = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setCurrentBlogPost(null);
    const hashMap = { home: '', assessment: '#assessment', '21angels': '#21angels', about: '#about', careers: '#careers', privacy: '#privacy', terms: '#terms' };
    window.location.hash = hashMap[page] ?? '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const openArticle = (id) => {
    setCurrentBlogPost(id);
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const hashPageMap = { '#assessment': 'assessment', '#21angels': '21angels', '#about': 'about', '#careers': 'careers', '#privacy': 'privacy', '#terms': 'terms' };
    const page = hashPageMap[window.location.hash];
    if (page) setCurrentPage(page);
  }, []);
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
      id: 'security-guard-company',
      title: 'What to Look for in a Security Guard Company',
      date: 'May 2025',
      tag: 'Business Security',
      summary: 'Choosing the right security guard company is one of the most critical decisions a property manager can make. This guide walks you through the essential criteria that separate professional security providers from bottom-tier operators.',
      sections: [
        { heading: 'Introduction', body: 'Choosing the right security guard company is one of the most critical decisions a property manager can make. Your security provider directly impacts tenant safety, liability protection, and property value. Yet many property managers in San Antonio make this decision based on price alone—a costly mistake that often leads to inadequate coverage, unprofessional staff, and increased risk exposure.\n\nThis guide walks you through the essential criteria that separate professional security providers from bottom-tier operators.' },
        { heading: '1. Licensing, Bonding, and Insurance', body: 'The non-negotiable foundation.\n\nBefore considering anything else, verify that your security provider holds:\n• Texas Security Officer License (issued by DPS)\n• Company licensing for armed or unarmed guard services\n• General liability insurance (minimum $1 million)\n• Workers\' compensation coverage for all employees\n\nAsk for proof of these. Any legitimate security company will provide documentation without hesitation. If they resist or seem unclear about licensing requirements, move on immediately.\n\nWhy this matters: An unlicensed security provider creates massive liability for your property. If an incident occurs and your guard isn\'t properly licensed, your insurance may refuse to cover losses, and you could face personal liability.' },
        { heading: '2. Background Screening and Vetting Process', body: 'Your guards will have access to your property, tenants, and potentially sensitive information.\n\nReputable security companies conduct:\n• Criminal background checks\n• Texas DPS records review\n• National crime database searches\n• Previous employment verification\n• Driving records (if mobile patrol is involved)\n• Drug screening\n\nAsk how deep their vetting goes. "We run checks" is too vague. Request their actual screening procedure and turnaround time.\n\nRed flag: Companies that hire quickly with minimal screening typically have high turnover and lower-quality personnel.' },
        { heading: '3. Training and Professional Development', body: 'Licensing is the floor, not the ceiling.\n\nThe best security companies invest in ongoing training:\n• De-escalation and conflict resolution\n• Emergency response procedures\n• First aid/CPR certification\n• Technology and access control systems\n• Customer service and professional standards\n\nAsk prospective providers:\n• How many hours of annual training does each guard receive?\n• Who conducts the training?\n• Are guards certified in any specialized areas?\n\nA guard with 8 hours of annual training is not equivalent to one with 40 hours. The difference shows up during incidents.' },
        { heading: '4. Supervisory Oversight and Quality Control', body: 'Who watches the guards?\n\nAsk about:\n• Supervisor-to-guard ratio\n• Frequency of site visits and inspections\n• Random quality audits\n• Complaint resolution process\n• Incident reporting procedures\n\nProfessional companies conduct surprise inspections and maintain detailed incident logs. If a provider can\'t tell you how they oversee their personnel, they likely aren\'t.' },
        { heading: '5. Technology and Reporting Systems', body: 'Modern security requires modern tools.\n\nLook for companies that offer:\n• Digital incident reporting (not handwritten logs)\n• Real-time alert systems\n• Video integration and monitoring capability\n• GPS tracking for mobile patrols\n• Client portal access to reports and alerts\n• Integration with property management systems\n\nTechnology minimizes human error, provides accountability, and gives you visibility into actual security operations. A company relying solely on manual logbooks in 2025 is outdated.' },
        { heading: '6. Local Knowledge and Experience', body: 'San Antonio has specific security needs.\n\nThe best providers understand:\n• Local crime patterns and high-risk areas\n• San Antonio building codes and parking structure vulnerabilities\n• Seasonal risks (events, conventions, flooding)\n• Local law enforcement relationships\n• Property-specific challenges (highway access, industrial areas, mixed-use buildings)\n\nAsk candidates: "What do you know about security challenges in this part of San Antonio?" Their answer will tell you if they\'ve worked in your area or if they\'re cookie-cutter.' },
        { heading: '7. Customization and Flexibility', body: 'Every property is different.\n\nWatch out for companies with rigid, one-size-fits-all packages. Your security needs at a downtown office building differ drastically from a suburban industrial park or residential complex.\n\nA good provider:\n• Conducts a vulnerability assessment before quoting\n• Tailors staffing and hours to your actual risk profile\n• Scales services up or down based on tenant demand\n• Offers both armed and unarmed options\n• Provides mobile patrol, stationary guard, and hybrid models' },
        { heading: '8. Transparency and Communication', body: 'You should know what\'s happening on your property.\n\nEvaluate how quickly they:\n• Return calls and emails\n• Provide incident reports\n• Share performance metrics\n• Address concerns\n• Communicate with tenants when needed\n\nRequest a sample incident report and communication protocol. Some companies provide weekly summaries; others quarterly. Know what you\'re getting.' },
        { heading: '9. References and Track Record', body: 'Talk to other property managers.\n\nAsk for:\n• At least 3 references from similar-sized properties (office, industrial, residential)\n• How long they\'ve served each reference\n• Any incidents and how they were handled\n• Overall satisfaction and renewal rates\n\nCall these references. Ask specifically: "If a serious incident occurred, would you trust this company to respond professionally?"' },
        { heading: '10. Cost vs. Value', body: 'Price should be the last decision factor, not the first.\n\nA $3/hour guard and an $8/hour guard are not the same product. That $5/hour difference often reflects training, oversight, technology, and reliability.\n\nCompare:\n• Hourly rates\n• Minimum contract terms\n• What\'s included (equipment, uniforms, incident reports, etc.)\n• Cancellation policies\n• Surge pricing for events or peak times' },
        { heading: 'What to Avoid', body: '• Pushy sales tactics — Legitimate companies let the work speak for itself\n• Vague licensing claims — If they can\'t clearly explain their licensing, they might not have it\n• "We\'ll figure it out on site" — Security needs planning, not improvisation\n• No written incident procedures — If they don\'t have documented protocols, they\'re winging it\n• Reluctance to provide references — This is a massive red flag' },
        { heading: 'Making the Final Decision', body: 'Schedule meetings with your top 2–3 candidates. Ask the questions above. Trust your instincts about their professionalism and responsiveness. Request a 30-day trial if possible — you\'ll quickly see if the reality matches their promises.\n\nRemember: You\'re not just hiring guards. You\'re transferring responsibility for tenant safety, asset protection, and liability management to an external team. Choose accordingly.' },
      ]
    },
    {
      id: 'campus-security-best-practices',
      title: 'Campus Security Best Practices for San Antonio Schools',
      date: 'April 2025',
      tag: 'Campus Security',
      summary: 'Campus security has never been more complex. Schools must balance student safety, parental peace of mind, federal compliance, and budget constraints. This guide outlines evidence-based security practices that work for San Antonio schools and institutions.',
      sections: [
        { heading: 'Introduction', body: 'Campus security has never been more complex. Schools today must balance student safety, parental peace of mind, federal compliance requirements, and budget constraints. A school shooting anywhere is a school shooting everywhere — the responsibility to maintain a safe learning environment has become a defining operational priority.\n\nThis guide outlines evidence-based security practices that work for San Antonio schools and institutions.' },
        { heading: '1. Comprehensive Threat Assessment', body: 'You can\'t secure what you haven\'t assessed.\n\nStart with a professional security audit that evaluates:\n• All entry and exit points\n• Blind spots in hallways, parking areas, and grounds\n• Access control vulnerabilities\n• Emergency communication gaps\n• Current staff training and protocols\n• Historical incidents and patterns\n\nThis assessment becomes your security roadmap. Without it, you\'re making educated guesses rather than data-driven decisions.\n\nSan Antonio-specific consideration: Schools in flood-prone areas need emergency evacuation plans that account for water access. Schools near major highways need perimeter security that limits unauthorized vehicle access.' },
        { heading: '2. Layered Access Control', body: 'One lock is never enough.\n\nImplement multiple entry points with increasing security:\n• Outer perimeter: Fence or barrier to prevent unauthorized vehicle access to parking and drop-off zones\n• Building entrance: Single controlled point during school hours; ID verification system\n• Interior doors: Card access to sensitive areas (offices, labs, storage); emergency exit capability for quick evacuation\n• Visitor management: Sign-in procedures; photo ID verification; escort requirements\n\nModern schools use badge readers, RFID systems, or mobile app-based access. The key is that every person on campus is accounted for and every space has controlled access.' },
        { heading: '3. Security Camera Coverage (CCTV)', body: 'Cameras serve two purposes: prevention and investigation.\n\nStrategic placement should cover:\n• All entry/exit points\n• Parking areas and bus zones\n• Hallways (primary throughways and corners)\n• Cafeteria, gym, and common areas\n• Perimeter and outdoor spaces\n• Server rooms and sensitive technology areas\n\nMinimum specifications:\n• 1080p resolution (higher is better)\n• 24/7 recording with 30+ days of retention\n• Night vision capability\n• Cloud backup (protects against on-site equipment failure)\n• Central monitoring dashboard for rapid incident response\n\nImportant: Check local school board policies and Texas education code regarding camera placement in bathrooms and locker rooms. Most districts have explicit restrictions. Consult legal counsel before installation.' },
        { heading: '4. Visitor and Contractor Management', body: 'Most school security breaches involve someone who had legitimate reason to be there.\n\nImplement:\n• Visitor sign-in protocol — Photo ID, purpose, duration, escorted access\n• Background checks for contractors — Anyone with repeated access (HVAC, cleaning, IT vendors)\n• Parking restrictions — Visitors park in designated areas visible to staff\n• Delivery procedures — Packages screened, dropped at main entrance, not delivered internally\n• Contractor badges — Visible identification while on campus' },
        { heading: '5. Threat Assessment and Early Warning Systems', body: 'Prevention is infinitely better than response.\n\nDevelop a formal threat assessment protocol:\n• Designated threat assessment team — Principal, counselor, security officer, district office representative\n• Student reporting channels — Anonymous hotlines, trusted adult relationships, peer reporting\n• Staff training — Recognizing warning signs (social isolation, violent language, access to weapons)\n• Law enforcement partnership — Regular coordination with San Antonio PD; clear escalation protocols\n• Mental health integration — School counselors and external resources for at-risk students\n\nEarly intervention prevents most threats before they materialize.' },
        { heading: '6. Emergency Response Planning', body: 'Every minute matters in a crisis.\n\nYour school needs:\n• Detailed lockdown procedures — Clear communication, classroom protocols, special education considerations\n• Evacuation routes — Multiple exits, designated assembly areas, accountability procedures\n• Medical response — Staff trained in first aid, AED locations, emergency medical access\n• Parent communication — Rapid notification system, reunion procedures, counseling resources\n• After-incident support — Trauma counseling, staff debriefing, transparent communication\n\nCritical: Practice these procedures quarterly. Drills should be realistic enough that students and staff treat them seriously, but clearly labeled as drills to avoid psychological stress.' },
        { heading: '7. Professional Security Personnel on Campus', body: 'Consider a full-time School Resource Officer (SRO) or security officer.\n\nOptions include:\n• San Antonio PD SRO — Law enforcement officer, works with district, covered by city training and standards\n• Contract security officer — Professional trained in school environments, familiar with your specific campus\n• Hybrid model — SRO for law enforcement response, contract officer for daily presence and prevention\n\nThe presence of a trained security professional:\n• Deters would-be threats\n• Provides immediate incident response capability\n• Builds relationships with students (trust improves reporting)\n• Helps coordinate emergency procedures\n• Provides accountability during critical moments' },
        { heading: '8. Communication Systems', body: 'When seconds count, communication systems save lives.\n\nImplement:\n• Internal PA system — Clear, audible announcements throughout buildings\n• Mass notification system — Rapid parent/guardian alerts via text, email, phone\n• Two-way radios — For staff coordination during incidents\n• Mobile app — Real-time updates to parents and community\n• Backup communication — What happens when power or internet fails?\n\nTest these systems quarterly and ensure all staff understand activation procedures.' },
        { heading: '9. Parking Lot and Transportation Security', body: 'Students spend substantial time in parking areas and on buses.\n\nSecurity measures:\n• Parking lot patrols — Walking or vehicle-based, random timing\n• Student ID verification — For parking lot access (prevents open public access)\n• Drop-off and pick-up procedures — Single-file flow, visual accountability, no unattended students\n• Bus security — Background-checked drivers, communication systems, GPS tracking\n• After-school activity security — Extended hours, reduced staffing — increase supervision proportionally' },
        { heading: '10. Staff Training and Culture', body: 'Your security plan is only as good as your staff\'s ability to execute it.\n\nEvery staff member should receive:\n• Initial orientation — Campus security plan overview, emergency procedures, their role\n• Annual refresher training — Updates to procedures, new threats, lessons learned\n• Specialized training — Security personnel receive advanced training in threat assessment, de-escalation, incident response\n• Drills and exercises — Hands-on practice with actual procedures\n\nBeyond training, foster a security culture:\n• Empowerment to report concerns\n• Clear communication from administration\n• Acknowledgment that security is everyone\'s responsibility\n• Recognition of threat reporting and early intervention efforts' },
        { heading: 'Special Considerations for San Antonio Schools', body: 'San Antonio has unique geographic and demographic factors:\n\n• Military family demographics — Highly aware of security protocols; may have expertise that assists threat assessment\n• Large campus sizes — Many San Antonio schools cover significant acreage; perimeter control and response times are critical\n• Flood risks — Spring and summer flooding affects evacuation routes and emergency access\n• Bilingual communication — Emergency notifications should be available in Spanish for families with limited English proficiency\n• Traffic patterns — Heavy morning and afternoon traffic near schools; traffic control during evacuations is essential' },
        { heading: 'Common Mistakes to Avoid', body: '• Reactive rather than proactive — Waiting for an incident to improve security instead of planning ahead\n• Over-reliance on one person — If your security depends entirely on one trusted individual, you\'re vulnerable when they\'re absent\n• Assuming it won\'t happen here — Statistics show it can happen anywhere. Assume it\'s possible, plan accordingly\n• Treating security as a cost rather than investment — The cost of a security incident vastly exceeds the cost of prevention\n• Failing to drill — Plans that aren\'t practiced don\'t work under stress\n• Ignoring mental health — Most school security incidents involve students with warning signs that were missed or unreported' },
        { heading: 'Getting Started', body: 'Campus security is an ongoing commitment, not a one-time project. The schools that maintain the safest environments treat security as a core institutional value.\n\n1. Conduct a professional threat assessment — Hire an external security consultant to evaluate your campus objectively\n2. Assemble a threat assessment team — Meet monthly to discuss concerns and coordinate prevention efforts\n3. Review and update your emergency plan — Make sure everyone knows their role\n4. Schedule comprehensive drills — Lockdown, evacuation, medical emergency, and active threat responses\n5. Train and educate — Staff, students, parents, and community\n6. Communicate transparently — Let your community know you take safety seriously' },
      ]
    },
    {
      id: 'property-security-vulnerabilities',
      title: 'Property Security Vulnerabilities in San Antonio: What You Need to Know',
      date: 'March 2025',
      tag: 'Property Security',
      summary: 'San Antonio property managers handle millions of dollars in assets and bear the legal responsibility if those assets are compromised. This article identifies the 10 most common security vulnerabilities we see across San Antonio commercial properties and the practical steps to address them.',
      sections: [
        { heading: 'Introduction', body: 'San Antonio property managers handle millions of dollars in assets and bear the legal responsibility if those assets are compromised. Yet many properties operate with outdated security practices, leaving them exposed to theft, vandalism, liability claims, and operational disruptions.\n\nThis article identifies the 10 most common security vulnerabilities we see across San Antonio commercial properties and the practical steps to address them.' },
        { heading: '1. Inadequate Perimeter Control', body: 'Your first line of defense is controlling who (and what) enters your property.\n\nCommon vulnerabilities:\n• Open parking lots with multiple unmonitored entrances\n• No gates or barriers on ground-level access\n• Landscaping that provides cover for trespassers\n• Delivery areas without controlled access\n• Construction or maintenance zones that blend into public areas\n\nSolutions:\n• Install gates or bollards at vehicle access points\n• Trim landscaping at building perimeter (eliminate hiding spots)\n• Designate separate delivery zones with controlled, monitored access\n• Mark public vs. private areas clearly with signage\n• Conduct regular perimeter walks to identify new vulnerabilities' },
        { heading: '2. Ineffective Access Control Systems', body: 'Knowing who\'s in your building is fundamental.\n\nProblems:\n• Expired credentials still grant access (badges never deactivated)\n• "Propped" doors that bypass electronic locks\n• Shared access codes among multiple users\n• No audit trail of who accessed which areas when\n• Legacy locks on sensitive areas (no digital record)\n\nSolutions:\n• Implement badge reader systems with access logs\n• Deactivate credentials immediately when employees/contractors depart\n• Assign unique codes to individuals; change codes when employees leave\n• Audit access logs monthly for unusual patterns\n• Upgrade legacy locks to modern systems' },
        { heading: '3. Inadequate Surveillance Coverage', body: 'Cameras are your documentary record.\n\nGaps we frequently see:\n• Cameras covering the "nice" areas but missing blind spots\n• Low-resolution footage that doesn\'t capture identifying details\n• Short retention periods (7–14 days) that miss investigation opportunities\n• No backup system — equipment failure means zero footage\n• No one actually monitoring feeds in real time\n\nSolutions:\n• Conduct a professional camera placement audit\n• Install high-resolution (1080p minimum) cameras at all entry/exit points\n• Maintain 30+ days of storage (or longer based on insurance requirements)\n• Use cloud backup to protect against equipment failure\n• Monitor key areas during high-risk periods (nights, weekends, peak times)' },
        { heading: '4. Poor Lighting', body: 'Darkness is a criminal\'s best friend.\n\nVulnerabilities:\n• Burned-out lights in parking areas\n• Dark corners around building perimeter\n• Inconsistent lighting that creates shadows\n• No lighting schedule (entire lot lit 24/7, or some areas never lit)\n• Lights that draw attention to entry points rather than deterring approach\n\nSolutions:\n• Install motion-activated lighting in lower-traffic areas\n• Use consistent, bright lighting (LED, 4000K color temperature) at building entrances and parking areas\n• Light the perimeter in a way that makes unauthorized approach visible\n• Trim trees and landscaping that create shadows\n• Audit lighting monthly; replace burned-out bulbs within 48 hours' },
        { heading: '5. Weak Visitor and Contractor Management', body: 'Most internal threats have legitimate access.\n\nGaps:\n• Visitors freely roaming without escorting\n• Contractors with permanent access keys (not deactivated when projects end)\n• No background checks for repeat vendors\n• Unclear sign-in procedures; poor enforcement\n• No restrictions on what areas visitors can access\n\nSolutions:\n• Require all visitors to sign in at main entrance with photo ID\n• Verify purpose and duration of visit\n• Escort visitors to their destination (no self-guided access)\n• Issue temporary badges; collect before departure\n• Conduct background checks on any contractor with regular access\n• Create a vendor management system with contact info, insurance, background clearance' },
        { heading: '6. Inadequate Incident Reporting', body: 'If it\'s not documented, it didn\'t happen — from a legal standpoint.\n\nCommon problems:\n• Incidents reported verbally, never documented\n• Incident reports that lack critical details (time, description, follow-up)\n• No standardized reporting procedure\n• Reports filed but never reviewed\n• Management unaware of emerging patterns (repeated theft, unauthorized access, etc.)\n\nSolutions:\n• Implement a digital incident reporting system\n• Train all staff on what constitutes a reportable incident\n• Require detailed documentation: date, time, description, individuals involved, actions taken, follow-up\n• Review incidents weekly to identify patterns\n• Share summary reports with building managers and ownership' },
        { heading: '7. Neglected Emergency Response Planning', body: 'Hoping you won\'t need an emergency plan is not a plan.\n\nVulnerabilities:\n• No written emergency procedures\n• Staff unaware of evacuation routes or assembly areas\n• Medical equipment (AED) deployed but staff not trained\n• No communication protocol for notifying authorities, management, occupants\n• Power outage scenarios not addressed\n\nSolutions:\n• Develop comprehensive emergency procedures for fire, medical, active threat, hazmat, weather\n• Post evacuation routes and assembly areas visibly\n• Train all staff on their role during emergencies; conduct annual drills\n• Maintain AED equipment and train staff on operation\n• Test communication systems quarterly' },
        { heading: '8. Insufficient Staffing or Staffing Gaps', body: 'Unmanned buildings at night or weekends are easy targets.\n\nIssues:\n• Night shift security absent or inadequately trained\n• Gaps between shift changes (30–60 minutes unmonitored)\n• Single-person shifts with no backup for breaks or emergencies\n• Security staff with insufficient authority to prevent unauthorized access\n• Cleaning and maintenance crews unsupervised\n\nSolutions:\n• Assess your property\'s actual risk profile and schedule appropriate staffing\n• Eliminate shift gaps; stagger schedules to ensure continuous coverage\n• Maintain supervisory presence for high-risk periods\n• Equip security staff with authority and training to enforce access policies\n• Supervise or monitor cleaning/maintenance crews, especially in sensitive areas' },
        { heading: '9. Outdated Technology Integration', body: 'Modern security systems should work together, not in silos.\n\nProblems:\n• Access control, CCTV, and alarm systems that don\'t communicate\n• No integration with property management systems\n• Alert systems that send notifications to inboxes that no one monitors\n• Manual processes (keycards, logbooks) instead of digital systems\n• Inability to correlate events across systems during investigations\n\nSolutions:\n• Implement integrated security platform that connects access control, CCTV, alarms, and alerts\n• Use real-time notification systems for critical events\n• Digitize all processes (visitor management, incident reporting, access logs)\n• Create unified dashboard for security personnel to monitor all systems\n• Regular software updates and system maintenance' },
        { heading: '10. Inadequate Staff Training and Security Awareness', body: 'Your staff is either your security asset or liability.\n\nGaps:\n• Minimal or no security training for most staff\n• No awareness of threat reporting procedures\n• Staff unaware of security policies (badge protocol, visitor escort requirements, etc.)\n• Complacency — "we\'ve never had an incident"\n• No culture of security responsibility\n\nSolutions:\n• Conduct mandatory security orientation for all new employees\n• Provide annual refresher training covering policies and procedures\n• Create clear, simple reporting channels for security concerns\n• Empower staff to report unusual activity without fear of being "wrong"\n• Leadership communication that emphasizes security as a core value\n• Recognize and acknowledge staff who report concerns or prevent incidents' },
        { heading: 'Additional San Antonio Considerations', body: 'San Antonio\'s unique property landscape requires tailored security:\n\n• High-value industrial and manufacturing properties — Often located with limited perimeter control and valuable inventory\n• Multi-tenant office complexes — Hundreds of potential access points and shared responsibility for security\n• Hospitality and entertainment venues — Large transient populations requiring different threat models than office buildings\n• Properties near highways and airports — Increased vehicle-based security risks\n• Aging infrastructure — Many San Antonio properties have legacy security that needs modernization' },
        { heading: 'The Bottom Line', body: 'Security vulnerabilities don\'t disappear if you ignore them. They accumulate. An incident that costs you $50,000 today (inventory loss, liability claim, downtime) could have been prevented with $5,000 in security improvements.\n\nThe properties that maintain the best safety records treat security as an ongoing operational commitment, invest appropriately, and measure results.\n\nYour tenants, your insurance company, and your bottom line will thank you.' },
      ]
    },
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      navigateTo('home');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 200);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAssessmentFormSubmit = async () => {
    if (!formData.email) {
      setFormStatus('error');
      return;
    }
    try {
      const res = await fetch(`https://formspree.io/f/${CONTACT_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, service: 'Property Manager Assessment', name: formData.name || 'Property Manager Inquiry' })
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
          <button onClick={() => navigateTo('home')} className="flex items-center gap-3 cursor-pointer">
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
            <button onClick={() => navigateTo('about')} className="hover:text-yellow-400 transition">About</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-yellow-400 transition">Contact</button>
            <button onClick={() => navigateTo('21angels')} className="px-3 py-1 rounded font-semibold transition text-white" style={{ backgroundColor: '#7B2D8B' }}>21 Angels</button>
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
            <button onClick={() => navigateTo('about')} className="block w-full text-left hover:text-yellow-400">About</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-yellow-400">Contact</button>
            <button onClick={() => navigateTo('21angels')} className="block w-full text-left font-semibold" style={{ color: '#c084d4' }}>21 Angels</button>
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

      {/* PRIVACY POLICY PAGE */}
      {currentPage === 'privacy' && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => navigateTo('home')} className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition text-gray-800">
              ← Back to Home
            </button>
            <h1 className="text-4xl font-bold mb-2" style={{ color: '#001F3F' }}>Privacy Policy</h1>
            <p className="text-gray-500 text-sm mb-10">Effective Date: January 1, 2024 | Last Updated: January 1, 2024</p>

            {[
              {
                title: '1. Introduction',
                body: 'Stars Private Investigations ("Company," "we," "us," or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.starsprivatei.com or contact us for services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.'
              },
              {
                title: '2. Information We Collect',
                body: 'We may collect personal information that you voluntarily provide when you fill out a contact form, submit a service inquiry, or apply for a career position. This may include:\n• Full name\n• Email address\n• Phone number\n• Service interest or position of interest\n• Any additional information you choose to include in a message\n\nWe do not collect payment information directly. All donation payments are processed securely through Stripe.'
              },
              {
                title: '3. How We Use Your Information',
                body: 'We use the information we collect to:\n• Respond to your inquiries and service requests\n• Process job applications and career inquiries\n• Communicate with you about our services, training, and updates\n• Improve our website and user experience\n• Comply with applicable laws and regulations\n\nWe will never sell, rent, or trade your personal information to third parties for marketing purposes.'
              },
              {
                title: '4. How We Share Your Information',
                body: 'We may share your information in the following limited circumstances:\n• Service Providers: With trusted third-party vendors who help us operate our website and services (such as form processing via Formspree and donation processing via Stripe), each bound by confidentiality obligations.\n• Legal Requirements: If required by law, court order, or governmental authority.\n• Business Protection: To protect the rights, property, or safety of Stars Private Investigations, our clients, or the public.\n\nWe do not share your information with any third parties for advertising or marketing purposes.'
              },
              {
                title: '5. Cookies and Tracking',
                body: 'Our website may use standard web technologies such as cookies and similar tracking tools to enhance your browsing experience. You may configure your browser to refuse cookies; however, some portions of the site may not function properly as a result. We do not use cookies for advertising or behavioral tracking purposes.'
              },
              {
                title: '6. Data Security',
                body: 'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.'
              },
              {
                title: '7. Third-Party Links',
                body: 'Our website may contain links to third-party websites including Stripe, Calendly, and social media platforms. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before submitting any personal information.'
              },
              {
                title: '8. Children\'s Privacy',
                body: 'Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately and we will take steps to delete it.'
              },
              {
                title: '9. Your Rights',
                body: 'You have the right to:\n• Request access to the personal information we hold about you\n• Request correction of inaccurate information\n• Request deletion of your personal information\n• Opt out of future communications at any time\n\nTo exercise any of these rights, please contact us at spitx06@gmail.com or by phone at (210) 637-9061.'
              },
              {
                title: '10. Changes to This Policy',
                body: 'We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. Your continued use of our website after any changes constitutes your acceptance of the updated policy.'
              },
              {
                title: '11. Contact Us',
                body: 'If you have questions or concerns about this Privacy Policy, please contact us:\n\nStars Private Investigations\n7461 Callaghan Rd, Ste 100\nSan Antonio, TX 78229\nPhone: (210) 637-9061\nEmail: spitx06@gmail.com'
              }
            ].map((section, i) => (
              <div key={i} className="mb-8">
                <h2 className="text-xl font-bold mb-3" style={{ color: '#001F3F' }}>{section.title}</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.body}</p>
              </div>
            ))}

            <div className="mt-10 text-center">
              <button onClick={() => navigateTo('home')} className="px-8 py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: '#B8860B' }}>
                Return to Home
              </button>
            </div>
          </div>
        </section>
      )}

      {/* TERMS OF SERVICE PAGE */}
      {currentPage === 'terms' && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => navigateTo('home')} className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition text-gray-800">
              ← Back to Home
            </button>
            <h1 className="text-4xl font-bold mb-2" style={{ color: '#001F3F' }}>Terms of Service</h1>
            <p className="text-gray-500 text-sm mb-10">Effective Date: January 1, 2024 | Last Updated: January 1, 2024</p>

            {[
              {
                title: '1. Acceptance of Terms',
                body: 'By accessing or using the Stars Private Investigations website (www.starsprivatei.com), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. These terms apply to all visitors, users, and others who access the site.'
              },
              {
                title: '2. Use of Website',
                body: 'You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the site. Prohibited uses include:\n• Submitting false or misleading information through any form\n• Attempting to gain unauthorized access to any part of the site\n• Using the site to harass, abuse, or harm any individual\n• Transmitting any viruses, malware, or other harmful code\n• Scraping or harvesting data from the site without permission'
              },
              {
                title: '3. Services and Engagement',
                body: 'Information provided on this website is for general informational purposes only and does not constitute a contract for services. Engagement of Stars Private Investigations for any security, investigative, training, or related service requires a separate written agreement signed by both parties. No service relationship is established by submitting a contact form or inquiry through this website.\n\nAll services are subject to availability, licensing requirements, and applicable Texas and federal law.'
              },
              {
                title: '4. Licensing and Compliance',
                body: 'Stars Private Investigations operates under Texas Department of Public Safety License #C00444101. All security and investigative services are performed in compliance with applicable Texas laws, including the Texas Private Security Act. We reserve the right to decline any engagement that falls outside our licensing authority or conflicts with applicable law.'
              },
              {
                title: '5. Intellectual Property',
                body: 'All content on this website, including text, graphics, logos, images, and design elements, is the property of Stars Private Investigations and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, modify, or create derivative works from any content on this site without our express written permission.'
              },
              {
                title: '6. Disclaimer of Warranties',
                body: 'This website is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. Stars Private Investigations does not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components. We do not warrant the accuracy, completeness, or usefulness of any information on the site.'
              },
              {
                title: '7. Limitation of Liability',
                body: 'To the fullest extent permitted by law, Stars Private Investigations shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or reliance on any information provided herein. Our total liability to you for any claim arising from use of this site shall not exceed $100.'
              },
              {
                title: '8. Third-Party Services',
                body: 'Our website may integrate with or link to third-party services including Formspree (form processing), Stripe (donation processing), Calendly (scheduling), and social media platforms. Your use of those services is governed by their respective terms of service and privacy policies. Stars Private Investigations is not responsible for the practices or content of third-party services.'
              },
              {
                title: '9. Governing Law',
                body: 'These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Bexar County, Texas.'
              },
              {
                title: '10. Indemnification',
                body: 'You agree to indemnify, defend, and hold harmless Stars Private Investigations, its officers, employees, agents, and affiliates from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorney\'s fees) arising out of or related to your use of the website or your violation of these Terms of Service.'
              },
              {
                title: '11. Modifications to Terms',
                body: 'We reserve the right to modify these Terms of Service at any time. Updated terms will be posted on this page with a revised effective date. Your continued use of the website after any modifications constitutes your acceptance of the revised terms. It is your responsibility to review these terms periodically.'
              },
              {
                title: '12. Contact Us',
                body: 'If you have any questions about these Terms of Service, please contact us:\n\nStars Private Investigations\n7461 Callaghan Rd, Ste 100\nSan Antonio, TX 78229\nPhone: (210) 637-9061\nEmail: spitx06@gmail.com'
              }
            ].map((section, i) => (
              <div key={i} className="mb-8">
                <h2 className="text-xl font-bold mb-3" style={{ color: '#001F3F' }}>{section.title}</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.body}</p>
              </div>
            ))}

            <div className="mt-10 text-center">
              <button onClick={() => navigateTo('home')} className="px-8 py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: '#B8860B' }}>
                Return to Home
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 21 ANGELS PAGE */}
      {currentPage === '21angels' && (
        <div className="w-full">

          {/* Video */}
          <section className="py-8 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-lg" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src="https://drive.google.com/file/d/16oa5OtxOuESxU1j9YqbrBg-Ihba7tkNc/preview?autoplay=1"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="21 Angels Strong Video"
                />
              </div>
            </div>
          </section>

          {/* Hero */}
          <section className="text-white py-24 px-4 text-center" style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #3b0764 50%, #1a0a2e 100%)' }}>
            <div className="max-w-4xl mx-auto">
              <img src="/angels-logo.png" alt="21 Angels Strong" className="h-56 w-auto mx-auto mb-6" />
              <span className="px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block" style={{ backgroundColor: 'rgba(123,45,139,0.4)', border: '1px solid #c084d4', color: '#e0b0f0' }}>
                501(c)(3) Nonprofit Organization
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-4" style={{ color: '#fff' }}>21 Angels Strong</h1>
              <p className="text-2xl font-semibold mb-6" style={{ color: '#c084d4' }}>Protecting children. Supporting schools. Honoring the 21 angels.</p>
              <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-3xl mx-auto">
                21 Angels Strong is a 501(c)(3) nonprofit founded in 2022 with one mission: to help protect school children, staff, and local communities through advanced training, preparedness, and security support. We provide veterans, reserve law enforcement officers, and qualified civilians with the training and equipment needed to help protect schools nationwide.
              </p>
              <a href={STRIPE_DONATE_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-lg font-bold text-lg text-white transition shadow-lg hover:opacity-90" style={{ backgroundColor: '#7B2D8B' }}>
                Donate to 21 Angels
              </a>
            </div>
          </section>

          {/* Mission */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#3b0764' }}>Our Mission</h2>
              <div className="bg-purple-50 border-l-4 rounded-lg p-6 mb-8" style={{ borderColor: '#7B2D8B' }}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  21 Angels Strong was born from tragedy. Our organization was inspired by a devastating active shooting event that claimed the lives of multiple innocent individuals — a heartbreaking loss that made clear the urgent need for better-trained, better-equipped protectors in our schools and communities.
                </p>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
                21 Angels Strong was created to honor the lives of 21 angels and to give people a meaningful way to help make child safety a priority.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-10 text-center">
                We believe <strong>preparation saves lives.</strong> Schools and communities need more than concern — they need trained, capable, immediate support before tragedy happens.
              </p>
              <div className="bg-purple-50 rounded-xl p-8 border-l-4" style={{ borderColor: '#7B2D8B' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#3b0764' }}>Your donation helps provide:</h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'Advanced protection training for veterans, reserve law enforcement officers, and civilians',
                    'Safety equipment for trained protectors serving school communities',
                    'Preparedness support for schools and local organizations',
                    'Community-focused prevention efforts designed to reduce response gaps'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ backgroundColor: '#7B2D8B' }}>
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Why This Matters */}
          <section className="py-16 px-4" style={{ backgroundColor: '#f5f0fa' }}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#3b0764' }}>Why This Matters</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Across the country, schools and places of worship continue to face serious security threats. The data shows that casualties are often driven by attacker free-fire time, crowd exposure, and how quickly an incident is interrupted.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Security presence alone is not enough. Effective protection requires training, preparation, coordination, and the ability to respond immediately when seconds matter.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Research shows that many active-shooter incidents end before police arrive — making prevention, access control, communication, training, and immediate intervention critical parts of any safety strategy.
              </p>
            </div>
          </section>

          {/* Impact Statistics */}
          <section className="py-16 px-4 text-white" style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #3b0764 100%)' }}>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">The Need Is Urgent</h2>
              <p className="text-center opacity-80 mb-12 text-lg">The data makes the case for action</p>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { stat: '130', label: 'Major active-shooter incidents in the last 10 years' },
                  { stat: '23', label: 'Involved some form of guard presence' },
                  { stat: '9 / 130', label: 'Total major incidents involved formalized training' }
                ].map((item, i) => (
                  <div key={i} className="text-center p-6 rounded-xl" style={{ backgroundColor: 'rgba(123,45,139,0.3)', border: '1px solid #c084d4' }}>
                    <p className="text-5xl font-bold mb-3" style={{ color: '#c084d4' }}>{item.stat}</p>
                    <p className="opacity-90 text-sm leading-relaxed">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl p-8 text-center" style={{ backgroundColor: 'rgba(123,45,139,0.25)', border: '1px solid #c084d4' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#e0b0f0' }}>2026 K–12 School Shootings Involving Injuries or Deaths</h3>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { stat: '13', label: 'Incidents with injuries or deaths' },
                    { stat: '9',  label: 'Killed' },
                    { stat: '8',  label: 'Injured' }
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-4xl font-bold" style={{ color: '#c084d4' }}>{item.stat}</p>
                      <p className="text-sm opacity-80 mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 opacity-75 text-sm">These numbers point to a clear gap: communities need more than passive security. They need trained, equipped, and prepared protectors.</p>
              </div>
            </div>
          </section>

          {/* Donation CTA */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#3b0764' }}>Help Us Protect What Matters Most</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Every donation helps 21 Angels Strong expand training, provide equipment, and support school safety efforts across the country.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-10">
                Your gift can help place more trained protectors where they are needed most — near children, staff, and communities before tragedy strikes.
              </p>
              <a href={STRIPE_DONATE_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-lg font-bold text-lg text-white transition shadow-lg hover:opacity-90 mb-4" style={{ backgroundColor: '#7B2D8B' }}>
                Donate Securely Through Stripe
              </a>
              <p className="text-gray-500 text-sm mt-3">21 Angels Strong is a 501(c)(3) nonprofit. Donations may be tax-deductible as allowed by law.</p>
            </div>
          </section>

          {/* Why Donate / Trust */}
          <section className="py-16 px-4" style={{ backgroundColor: '#f5f0fa' }}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#3b0764' }}>Why Donate?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Prevention Before Tragedy',   desc: 'We focus on building readiness before an incident occurs, not just responding after.' },
                  { title: 'Training Before Response',    desc: 'Equipping protectors with the skills they need to act confidently and effectively.' },
                  { title: 'Preparedness Before Panic',   desc: 'Communities with trained, prepared individuals respond faster and more effectively.' },
                  { title: 'Protection for Children',     desc: 'Every effort is focused on the safety of children, school staff, and local communities.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm border-l-4" style={{ borderColor: '#7B2D8B' }}>
                    <h3 className="font-bold text-lg mb-2" style={{ color: '#3b0764' }}>{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-4 text-white text-center" style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #3b0764 100%)' }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-4">Stand With 21 Angels Strong</h2>
              <p className="text-xl opacity-90 mb-4" style={{ color: '#c084d4' }}>Honor the 21 angels by helping protect the next generation.</p>
              <p className="text-lg opacity-80 mb-10">Your donation helps turn concern into action.</p>
              <a href={STRIPE_DONATE_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-4 rounded-lg font-bold text-lg text-white transition shadow-lg hover:opacity-90 mb-6" style={{ backgroundColor: '#7B2D8B' }}>
                Make a Donation Today
              </a>
              <div className="mt-6">
                <button onClick={() => navigateTo('home')} className="text-purple-300 hover:text-white underline text-sm transition">
                  ← Return to Stars Private Investigations
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 px-4 text-gray-400 text-center" style={{ backgroundColor: '#0a0014' }}>
            <p className="text-sm">&copy; {new Date().getFullYear()} 21 Angels Strong. All rights reserved.</p>
            <p className="text-xs mt-1 opacity-60">501(c)(3) Nonprofit Organization | Donations may be tax-deductible as allowed by law.</p>
            <button onClick={() => navigateTo('home')} className="mt-3 text-xs hover:text-white underline transition">
              starsprivatei.com
            </button>
          </footer>
        </div>
      )}

      {/* BLOG ARTICLE DETAIL PAGE */}
      {currentPage === 'home' && currentBlogPost && (() => {
        const article = blogPosts.find(p => p.id === currentBlogPost);
        if (!article) return null;
        const renderBody = (text) => text.split('\n').map((line, i) => {
          if (!line.trim()) return <br key={i} />;
          const parts = line.split(/\*\*(.*?)\*\*/g);
          const rendered = parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part);
          return <span key={i} className="block mb-1">{rendered}</span>;
        });
        return (
          <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <button onClick={() => { setCurrentBlogPost(null); setTimeout(() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition text-gray-800">
                ← Back to Articles
              </button>
              <span className="text-xs font-semibold px-3 py-1 rounded text-white" style={{ backgroundColor: '#B8860B' }}>{article.tag}</span>
              <p className="text-gray-400 text-sm mt-3 mb-2">{article.date}</p>
              <h1 className="text-4xl font-bold mb-10 leading-tight" style={{ color: '#001F3F' }}>{article.title}</h1>
              {article.sections.map((section, i) => (
                <div key={i} className="mb-8">
                  {section.heading !== 'Introduction' && (
                    <h2 className="text-xl font-bold mb-3" style={{ color: '#001F3F' }}>{section.heading}</h2>
                  )}
                  <div className="text-gray-700 leading-relaxed">{renderBody(section.body)}</div>
                </div>
              ))}
              <div className="mt-12 p-8 rounded-lg text-white text-center" style={{ background: 'linear-gradient(135deg, #001F3F 0%, #003d5c 100%)' }}>
                <h3 className="text-2xl font-bold mb-3">Ready to Strengthen Your Security?</h3>
                <p className="opacity-90 mb-6">Stars Private Investigations offers free security assessments for San Antonio property managers and businesses.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg font-semibold text-slate-900" style={{ backgroundColor: '#B8860B' }}>
                    Book Free Assessment
                  </a>
                  <button onClick={() => { setCurrentBlogPost(null); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="border-2 px-8 py-3 rounded-lg font-semibold" style={{ borderColor: '#B8860B', color: '#B8860B' }}>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* CAREERS PAGE */}
      {currentPage === 'careers' && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <button onClick={() => navigateTo('home')} className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition text-gray-800">
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
            <button onClick={() => navigateTo('home')} className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition text-gray-800">
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
            {/* Leadership & Board */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#001F3F' }}>Leadership & Board</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'Tiynomi Sheely',   role: 'President' },
                  { name: 'Ricardo Camacho',  role: 'Vice President' },
                  { name: 'Sara Rodriguez',   role: 'Secretary' },
                  { name: 'Terrance Gee',     role: 'Board Member' },
                ].map((member, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-lg border-2" style={{ borderColor: '#B8860B' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg" style={{ backgroundColor: '#001F3F' }}>
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-lg" style={{ color: '#001F3F' }}>{member.name}</p>
                      <p className="text-sm font-semibold" style={{ color: '#B8860B' }}>{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button onClick={() => navigateTo('home')} className="px-8 py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: '#B8860B' }}>
                Return to Home
              </button>
            </div>
          </div>
        </section>
      )}

      {/* PROPERTY MANAGER ASSESSMENT LANDING PAGE */}
      {currentPage === 'assessment' && (
        <div className="w-full bg-white">

          {/* Hero */}
          <section className="text-white py-20 px-4" style={{ background: 'linear-gradient(135deg, #001F3F 0%, #003d5c 100%)' }}>
            <div className="max-w-3xl mx-auto text-center">
              <span className="px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block" style={{ backgroundColor: 'rgba(184,134,11,0.3)', color: '#f0c040', border: '1px solid #B8860B' }}>
                🎖️ Veteran-Owned | Licensed & Bonded #C00444101 | San Antonio, TX
              </span>
              <h1 className="font-bold mt-4 mb-5 leading-tight text-center">
                <span className="block text-4xl md:text-6xl">Is Your Property <span className="whitespace-nowrap">at Risk?</span></span>
                <span className="block text-2xl md:text-3xl mt-2" style={{ color: '#B8860B' }}>Free Security Assessment for San Antonio Property Managers</span>
              </h1>
              <p className="text-xl opacity-90 mb-10 leading-relaxed">
                Discover gaps in your security in <strong>20 minutes</strong>. No obligation. No sales pitch.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 rounded-lg font-bold text-xl text-slate-900 shadow-lg hover:opacity-90 transition mb-4"
                style={{ backgroundColor: '#B8860B' }}
              >
                Book Your Free Assessment →
              </a>
              <p className="text-sm opacity-60 mt-3">Takes 20 minutes. No commitment required. We come to you.</p>
            </div>
          </section>

          {/* Pain Points */}
          <section className="py-14 px-4" style={{ backgroundColor: '#f5f3f0' }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-3" style={{ color: '#001F3F' }}>
                Property Managers Face These Security Risks Every Day
              </h2>
              <p className="text-center text-gray-500 mb-10">One unaddressed gap can cost you tenants, money, and sleep.</p>
              <div className="space-y-4">
                {[
                  { icon: '⚖️', title: 'Liability Exposure',             desc: 'One incident on an unprotected property can trigger lawsuits, insurance claims, and regulatory fines. Prevention costs a fraction of what litigation does.' },
                  { icon: '🔓', title: 'After-Hours Break-Ins & Theft',  desc: 'Vacant units, common areas, package theft — these incidents eat into your margins and signal to prospective tenants that your property isn\'t safe.' },
                  { icon: '⭐', title: 'Tenant Safety Concerns',          desc: 'No visible security means negative reviews, lease non-renewals, and word-of-mouth damage. Tenants pay more — and stay longer — when they feel safe.' },
                  { icon: '📋', title: 'Compliance Gaps',                desc: 'Local ordinances and insurance policies often require specific security measures. Are you meeting them? Non-compliance can void your coverage entirely.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 flex gap-4 shadow-sm border-l-4" style={{ borderColor: '#B8860B' }}>
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg mb-1" style={{ color: '#001F3F' }}>{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What You Get */}
          <section className="py-14 px-4 bg-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-3" style={{ color: '#001F3F' }}>What's Included in Your Free Assessment</h2>
              <p className="text-gray-500 mb-10">A licensed security professional walks your property and delivers a clear, written picture of your risk — and your options.</p>
              <div className="grid md:grid-cols-2 gap-4 text-left mb-10">
                {[
                  'Perimeter vulnerability assessment',
                  'Access point security review',
                  'Lighting & visibility audit',
                  'After-hours incident pattern analysis',
                  'Tenant safety perception survey',
                  'Compliance gaps report',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg border" style={{ borderColor: '#B8860B' }}>
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: '#B8860B' }}>✓</div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 rounded-lg font-bold text-xl text-slate-900 shadow-lg hover:opacity-90 transition"
                style={{ backgroundColor: '#B8860B' }}
              >
                Book Your Free Assessment →
              </a>
            </div>
          </section>

          {/* Social Proof */}
          <section className="py-14 px-4" style={{ backgroundColor: '#f5f3f0' }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-10" style={{ color: '#001F3F' }}>Trusted by Property Managers Across San Antonio</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { quote: 'After the assessment, we prevented 3 break-ins in Q1. The ROI was immediate.', author: 'Residential Complex — 120 Units, San Antonio' },
                  { quote: 'Stars identified compliance gaps our insurance company had flagged. They fixed it before it cost us our coverage.', author: 'Commercial Property Manager, Bexar County' },
                  { quote: 'Tenant complaints about safety dropped to zero after we brought Stars in. Renewals went up.', author: 'Multi-Property Owner, South Texas' },
                ].map((t, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-sm border-t-4" style={{ borderColor: '#B8860B' }}>
                    <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">"{t.quote}"</p>
                    <p className="font-semibold text-xs" style={{ color: '#001F3F' }}>— {t.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Simplified Backup Form */}
          <section className="py-14 px-4 text-white" style={{ background: 'linear-gradient(135deg, #001F3F 0%, #003d5c 100%)' }}>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-2">Prefer Email?</h2>
              <p className="opacity-80 mb-8">We'll send assessment times within 2 hours.</p>
              {formStatus === 'success' && (
                <div className="bg-green-100 text-green-800 px-4 py-3 rounded mb-4">Got it! We'll be in touch within 2 hours.</div>
              )}
              {(formStatus === 'error' || formStatus === 'fail') && (
                <div className="bg-red-100 text-red-800 px-4 py-3 rounded mb-4">Something went wrong. Call us at (210) 637-9061.</div>
              )}
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address *"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="flex-1 px-4 py-3 rounded text-black text-base"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="flex-1 px-4 py-3 rounded text-black text-base"
                />
              </div>
              <button
                onClick={handleAssessmentFormSubmit}
                className="mt-3 w-full max-w-lg mx-auto block py-3 rounded-lg font-bold text-slate-900 text-lg"
                style={{ backgroundColor: '#B8860B' }}
              >
                Send Me Assessment Times
              </button>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6 text-sm opacity-70">
                <a href="tel:2106379061" className="hover:opacity-100 hover:underline flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" /> (210) 637-9061
                </a>
                <a href="mailto:spitx06@gmail.com" className="hover:opacity-100 hover:underline">spitx06@gmail.com</a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-6 px-4 text-center text-gray-400 text-sm" style={{ backgroundColor: '#0a1929' }}>
            <p>&copy; {new Date().getFullYear()} Stars Private Investigations | Licensed & Bonded #C00444101 | San Antonio, TX</p>
            <button onClick={() => navigateTo('home')} className="mt-2 underline hover:text-white transition">
              Return to Main Site
            </button>
          </footer>
        </div>
      )}

      {/* HOME PAGE */}
      {currentPage === 'home' && !currentBlogPost && (
<>
          {/* Video Section */}
          <section className="py-8 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              {/* Main featured video - 16:9 responsive */}
              <div className="rounded-lg overflow-hidden shadow-lg" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/SVd0o30yc6s?autoplay=1&rel=0"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Stars Private Investigations Video"
                />
              </div>

              {/* Additional Videos - 16:9 responsive grid */}
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {[
                  { id: 'qLv9D4LvZTs', title: 'Stars Private Investigations Video 2' },
                  { id: 'AKPT2PCHl0w', title: 'Stars Private Investigations Video 3' },
                ].map((v) => (
                  <div key={v.id} className="rounded-lg overflow-hidden shadow-lg" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}?rel=0`}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={v.title}
                    />
                  </div>
                ))}
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
                      <button onClick={() => openArticle(post.id)} className="mt-4 flex items-center gap-1 text-sm font-semibold" style={{ color: '#B8860B' }}>
                        Read Article <ChevronRight className="w-4 h-4" />
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
                        <Mail className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#B8860B' }} />
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
                  <a href="https://www.facebook.com/share/18fGiBc1tq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
                    <FacebookIcon />
                  </a>
                  <a href="https://www.tiktok.com/@spi.security" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-white transition">
                    <TikTokIcon />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition">
                    <InstagramIcon />
                  </a>
                </div>
              </div>

              <hr className="border-gray-700 mb-6" />

              <div className="text-center">
                <div className="flex flex-wrap justify-center gap-6 mb-4">
                  <button onClick={() => navigateTo('privacy')} className="hover:text-white transition">Privacy Policy</button>
                  <button onClick={() => navigateTo('terms')} className="hover:text-white transition">Terms of Service</button>
                  <button className="hover:text-white transition">Certifications</button>
                  <button onClick={() => navigateTo('careers')} className="hover:text-white transition">Careers</button>
                  <button onClick={() => navigateTo('about')} className="hover:text-white transition">About</button>
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

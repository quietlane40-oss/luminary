import { CaseStudy, LeadershipMember, PricingModel } from '../types';
import { eventImages } from '../assets';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'microsoft-ignite-summit',
    title: 'Global Tech Keynote & Worldwide Executive Summit',
    client: 'Enterprise Cloud & AI Leader',
    category: 'corporate',
    categoryLabel: 'Corporate Conference',
    year: '2025',
    location: 'Seattle Convention Center, WA',
    guestCount: '12,500 In-Person | 88,000 Virtual',
    budgetBracket: '$3.5M - $5M Production Scope',
    heroImage: eventImages.birthday,
    summary: 'A 4-day global flagship developer and executive conference featuring dual plenary auditoriums, 120 breakout sessions, and zero-latency live streaming to 42 countries.',
    brief: {
      challenge: 'Seamlessly orchestrate a 12,500-attendee in-person symposium with synchronized real-time multi-track AI demonstrations, strict executive security, and zero-tolerance AV latency during the CEO keynote broadcast.',
      objective: 'Position the client as the undisputed enterprise AI pioneer while driving $15M+ qualified enterprise pipeline within 60 days post-event.',
      stakeholders: 'Executive Office of the CEO, Global Corporate Marketing, Enterprise Security Command, Procurement & ESG Compliance.'
    },
    strategyExecution: {
      spatialDesign: 'Engineered a 360-degree tiered plenary with 4K curved LED walls (180ft panoramic aperture) and custom acoustic baffles that preserved pristine speech intelligibility across 12,500 seats.',
      avProduction: 'Redundant fiber-optic backbone with secondary Dante audio matrices and automated failover broadcast switchers guaranteeing 99.999% uptime SLA.',
      guestExperience: 'Frictionless biometric RFID credentialing, executive VIP green rooms with private broadcast links, and an interactive 15,000 sq ft hands-on AI discovery lab.',
      logisticsRisk: 'Full incident-command contingency framework with dedicated medical, local municipal authority liaison, and secret-service-grade VIP escort routes.'
    },
    outcomeMetrics: {
      primaryMetric: '99.8%',
      primaryLabel: 'Keynote Attendee CSAT Score',
      secondaryMetric: '$18.4M',
      secondaryLabel: 'Influenced Enterprise Pipeline',
      tertiaryMetric: '0.00s',
      tertiaryLabel: 'AV Broadcast Downtime',
      roiSummary: 'Exceeded media impressions target by 142%, generating 4.8M digital engagements across key global tech media outlets.'
    },
    testimonial: {
      quote: 'Luminary Guild set an unmatched benchmark for enterprise event precision. Managing our CEO keynote with zero margin for error across 100k global attendees was executed with military-grade calm.',
      author: 'Marcus Vance',
      title: 'VP of Worldwide Corporate Events',
      company: 'Fortune 10 Enterprise Tech Group'
    },
    tags: ['Keynote Production', 'Hybrid Simulcast', '10k+ Scale', 'Enterprise AV']
  },
  {
    id: 'cartier-haute-horlogerie',
    title: 'Haute Horlogerie Private Nocturne & Benefactor Auction',
    client: 'Swiss Heritage Luxury Maison',
    category: 'gala',
    categoryLabel: 'Luxury Gala & Social',
    year: '2025',
    location: 'Metropolitan Arts Pavilion, New York',
    guestCount: '420 Ultra-HNW Benefactors',
    budgetBracket: '$1.8M - $2.5M Production Scope',
    heroImage: eventImages.wedding,
    summary: 'An opulent private nocturne dinner and bespoke horological auction featuring custom champagne architectural installations, museum-grade display vaults, and Michelin 3-star culinary orchestration.',
    brief: {
      challenge: 'Create an intimate, high-security environment for ultra-high-net-worth collectors to inspect irreplaceable historical timepieces while delivering an unforgettable sensory dining narrative.',
      objective: 'Secure 100% private placement for a 12-piece limited collection and raise over $5M for the Maison Arts Preservation Trust.',
      stakeholders: 'Private Client Director, Head of Global Communications, Sotheby’s Philanthropic Auction Board.'
    },
    strategyExecution: {
      spatialDesign: 'Fabricated bespoke velvet-lined vitrines equipped with seismic and laser tamper detection, bathed in 98+ CRI museum-grade optical pin-spotting.',
      avProduction: 'Subtle spatial audio soundscapes programmed by a live classical quartet and custom acoustic zoning to enable effortless private transactional dialogue.',
      guestExperience: 'Six-course bespoke gastronomic journey curated in partnership with a 3-star Michelin chef, accompanied by rare Premier Cru pairings.',
      logisticsRisk: 'Armed discrete security detail, armored vehicle transport manifests, and private motorcade access protocols for discreet VIP departures.'
    },
    outcomeMetrics: {
      primaryMetric: '$7.4M',
      primaryLabel: 'Total Auction Proceeds Raised',
      secondaryMetric: '100%',
      secondaryLabel: 'Timepiece Collection Sold Out',
      tertiaryMetric: '420/420',
      tertiaryLabel: 'VIP Guest Attendance Rate',
      roiSummary: '100% allotment completed before dessert course with record-setting bids surpassing reserve pricing by 47%.'
    },
    testimonial: {
      quote: 'The level of discretion, sensory elegance, and aesthetic refinement Luminary Guild brought to our annual gala was beyond perfection. Our most demanding collectors were mesmerized.',
      author: 'Eleanor de Saint-Germain',
      title: 'Managing Director of Private Clients',
      company: 'Haute Horlogerie & Heritage Luxury'
    },
    tags: ['Ultra-HNW', 'Michelin Culinary', 'Private Auction', 'Spatial Architecture']
  },
  {
    id: 'palantir-defense-activation',
    title: 'Autonomous Systems & Aerospace Defense Unveiling',
    client: 'Global Defense & Intelligence Consortium',
    category: 'activation',
    categoryLabel: 'Brand Activation',
    year: '2025',
    location: 'New Generation Mobile Accessories, Machakos',
    guestCount: '850 Defense Ministers & CTOs',
    budgetBracket: '$2.2M - $3M Production Scope',
    heroImage: eventImages.mobile,
    summary: 'A classified-grade experiential brand activation incorporating holographic telemetry domes, military-grade acoustic baffling, and interactive tactical command simulations.',
    brief: {
      challenge: 'Demonstrate complex autonomous swarm intelligence software inside an exhibition hall with zero RF interference, complete acoustic isolation, and SCIF-adjacent security compliance.',
      objective: 'Engage procurement delegations from NATO allies and secure formal tender evaluations with multi-year contract milestones.',
      stakeholders: 'Chief Defense Architect, Government Affairs, Cyber Security Risk Assessment Team.'
    },
    strategyExecution: {
      spatialDesign: 'Engineered a monolithic matte-black architectural shell with pressurized acoustic air-locks and custom CNC-milled carbon fiber display consoles.',
      avProduction: 'Holographic volumetric displays rendering real-time 3D airspace telemetry, synchronized with tactile sub-bass floor transducers for immersive impact.',
      guestExperience: 'Encrypted RF badges triggering customized briefing dossiers displayed on transparent OLED touch terminals calibrated to attendee security clearances.',
      logisticsRisk: 'Full spectrum RF sweeping, biometric two-factor entry checkpoints, and 24/7 guarded chain of custody for all hardware assets.'
    },
    outcomeMetrics: {
      primaryMetric: '34',
      primaryLabel: 'Ministerial Delegations Hosted',
      secondaryMetric: '$64M',
      secondaryLabel: 'Identified Defense Tender Value',
      tertiaryMetric: '100%',
      tertiaryLabel: 'Zero Security or RF Breaches',
      roiSummary: 'Formalized 8 multinational trial agreements within 14 days, establishing the client as the preferred next-gen defense platform.'
    },
    testimonial: {
      quote: 'Luminary Guild understood the exacting technical requirements of high-security defense demonstrations without sacrificing theatrical elegance.',
      author: 'Gen. Arthur Sterling (Ret.)',
      title: 'Senior Advisor for Strategic Systems',
      company: 'Aerospace & Intelligence Coalition'
    },
    tags: ['Experiential Tech', 'Spatial Architecture', 'Security Protocol', 'Government/Defense']
  },
  {
    id: 'davos-esg-pavilion',
    title: 'World Economic Forum: Sustainable Future Pavilion',
    client: 'Global Sustainable Finance Alliance',
    category: 'hybrid',
    categoryLabel: 'Global Hybrid Leadership',
    year: '2025',
    location: 'Davos Promenade, Switzerland',
    guestCount: '1,400 In-Person | 45,000 Global Stream',
    budgetBracket: '$1.5M - $2M Production Scope',
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80',
    summary: 'A zero-waste, carbon-neutral alpine pavilion hosting closed-door bilateral meetings for sovereign wealth funds, heads of state, and Fortune 50 chief sustainability officers.',
    brief: {
      challenge: 'Design and erect a temporary two-story timber structure in sub-zero alpine conditions under strict WEF security cordons while meeting ISO 20121 zero-waste mandates.',
      objective: 'Facilitate landmark green-bond agreements totaling over $10B and achieve net-zero carbon footprint verified by third-party auditors.',
      stakeholders: 'Alliance Steering Committee, Sovereign Wealth Fund Executives, Swiss Cantonal Environmental Police.'
    },
    strategyExecution: {
      spatialDesign: 'Constructed from 100% locally sourced cross-laminated Swiss pine designed for circular deconstruction and re-use in communal housing post-forum.',
      avProduction: 'Solar-battery assisted power grids with high-efficiency Micro-LED displays and low-draw studio broadcast lighting.',
      guestExperience: 'Private diplomatic breakout pods with heated acoustic glass overlooking the Davos valley, serviced by farm-to-table Swiss botanical catering.',
      logisticsRisk: 'Avalanche and ice protocol management, redundant satellite communication lines, and vetted Swiss security details.'
    },
    outcomeMetrics: {
      primaryMetric: 'ISO 20121',
      primaryLabel: 'Verified Net-Zero Certification',
      secondaryMetric: '$12.2B',
      secondaryLabel: 'Green Capital Commitments Signed',
      tertiaryMetric: '99.9%',
      tertiaryLabel: 'Materials Recycled or Repurposed',
      roiSummary: 'Recognized as the benchmark pavilion at Davos 2025, cited across Bloomberg, Financial Times, and Reuters.'
    },
    testimonial: {
      quote: 'Delivering an architectural marvel in freezing Davos with a certified zero-waste footprint was an extraordinary feat of engineering and hospitality.',
      author: 'Dr. Vivienne Leclair',
      title: 'Executive Director of Global Finance Initiatives',
      company: 'Sustainable Capital Coalition'
    },
    tags: ['Davos WEF', 'ISO 20121', 'Diplomatic Security', 'Hybrid Broadcast']
  }
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    name: 'Benard Odhiambo',
    role: 'Managing Director & Founder',
    credentials: ['CMP Fellow', 'CMM (Certificate in Meeting Management)', 'MBA Wharton'],
    bio: 'With over 10 years of experience in event planning and decoration, I specialize in creating memorable and beautifully coordinated events. From weddings and corporate events to private celebrations, I bring creativity, attention to detail, and professional planning to every occasion.',
    experienceYears: 10,
    formerAffiliations: ['Microsoft Global Events', 'Four Seasons Hotels & Resorts', 'PCMA Board of Directors'],
    image: eventImages.ben,
    specialty: 'Executive Governance, Master Services Agreements & Venue Acquisition'
  },
  {
    name: 'Stephen Odhiambo',
    role: 'Technical Officer',
    credentials: ['DES (Digital Event Strategist)', 'CTS-D Certified', 'SMPTE Fellow'],
    bio: 'I oversee all technical operations, audiovisual setups, and digital tools across live and hybrid events. Bringing 4 years of expertise in network architecture, live production engineering, and AV vendor management, Stephen ensures every event delivers flawless audio, visual, and interactive experiences without a hitch.',
    experienceYears: 4,
    formerAffiliations: ['NBC Olympics Broadcast', 'Production Resource Group (PRG)', 'TED Conferences'],
    image: eventImages.stephen,
    specialty: 'Enterprise Redundant AV Architecture, Dante Matrices & Stagecraft'
  },
];

export const PRICING_MODELS: PricingModel[] = [
  {
    id: 'advisory',
    tierName: 'The Celebration Essentials Tier',
    targetClient: 'Internal Enterprise Event Teams & Executive Committees',
    investmentBaseline: 'Engagements from Ksh 35,000',
    description: 'High-impact decor focal points, custom balloon art, and key aesthetic styling.',
    deliverables: [
      'Statement organic balloon arch, themed backdrop wall, and personalized welcome signage.',
      'Grazing or dessert table setup, thematic table linens, and focal centerpieces.',
      'Minute-by-minute timeline for party games, cake cutting, and gift reveals.',
      'Complete morning setup and post-event teardown by our styling crew.'
    ],
    serviceScope: {
      conceptDesign: true,
      technicalAVRiders: true,
      onSiteExecutiveProducers: '1 Lead Advisory Producer during rehearsals',
      vendorManagement: 'Vetting & RFP selection advisory',
      complianceRiskAudit: true,
      postEventAnalytics: true
    }
  },
  {
    id: 'turnkey',
    tierName: 'The Signature Elegance Tier (Most Popular)',
    targetClient: 'Conferences, Keynotes & Mid-to-Large Brand Activations (500 - 5,000 pax)',
    investmentBaseline: 'Budgets Ksh 150,000 (Production Fee: 15-18%)',
    popular: true,
    description: 'Turnkey spatial design, full vendor coordination, and complete event-day management.',
    deliverables: [
      'Comprehensive venue layout, custom balloon sculptures, ambient lighting setups, and floral accent integrations.',
      'Clear acoustic audio engineering for vows, speeches, or brand presentations, plus stage lighting.',
      'Direct coordination with caterers, DJs/MC, photographers, and venue management.',
      'Dedicated Lead Producer and on-site crew to manage guest arrivals, VIP hosting, and schedule flow.'
    ],
    serviceScope: {
      conceptDesign: true,
      technicalAVRiders: true,
      onSiteExecutiveProducers: 'Full On-Site Command Staff (5-12 Producers)',
      vendorManagement: 'Complete Turnkey Contracting & Financial Accounting',
      complianceRiskAudit: true,
      postEventAnalytics: true
    }
  },
  {
    id: 'master-service',
    tierName: 'The Grand Horizon Tier',
    targetClient: 'Fortune 500 Enterprises & Global Foundation Portfolios',
    investmentBaseline: 'Ksh 200,000+',
    description: 'Bespoke spatial architecture, immersive media features, and white-glove VIP management.',
    deliverables: [
      'Custom-built wooden/metal display structures, entrance tunnels, immersive photo galleries, and luxury lounge zones.',
      'Dynamic lighting scenes, high-definition LED displays for media/slideshows, and silent backup power generators.',
      'Dedicated bridal concierge or executive host team, private VIP lounge setups, and seating orchestration.',
      'Complete team of staging specialists, balloon artisans, lighting technicians, and run-of-show directors.',
    ],
    serviceScope: {
      conceptDesign: true,
      technicalAVRiders: true,
      onSiteExecutiveProducers: 'Dedicated Year-Round Executive Unit',
      vendorManagement: 'Global Preferred Vendor Consortium Management',
      complianceRiskAudit: true,
      postEventAnalytics: true
    }
  }
];

export const TRUST_CREDENTIALS = [
  { label: 'MPI Approved', badge: 'Meeting Professionals International', desc: 'Elite Global Chapter Member' },
  { label: 'PCMA Accredited', badge: 'Professional Convention Management', desc: 'Enterprise Convening Leaders' },
  { label: 'CMP Certified', badge: 'Certified Meeting Professional', desc: '100% Lead Producers Certified' },
  { label: '$20M Umbrella', badge: 'Commercial General Liability', desc: 'Underwritten by Lloyd’s of London' },
  { label: 'ISO 20121', badge: 'Sustainable Event Management', desc: 'Net-Zero Carbon Certified' },
  { label: 'SOC 2 Type II', badge: 'Data Security & Vendor Compliance', desc: 'Enterprise Privacy Validated' }
];

export const CORPORATE_CLIENTS = [
  { name: 'Helium Baloon Kenya', logoText: 'Helium', industry: 'Events Organization' },
  { name: 'Zuri', logoText: 'Zuri', industry: 'Events Organization' },
  { name: 'Helium Kenya', logoText: 'HeliumKenya', industry: 'Evants Organization' },
];

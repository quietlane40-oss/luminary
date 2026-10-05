import React, { useState } from 'react';
import { CaseStudy, PageView } from '../types';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudyCard } from './CaseStudyCard';
import { Search, ArrowRight } from 'lucide-react';

export const PORTFOLIO_CASE_STUDIES: CaseStudy[] = [
  {
    ...CASE_STUDIES[1],
    id: 'wedding-bridal-celebration',
    title: 'The Garden Vow: A Bespoke Wedding Weekend',
    client: 'Private Family Office',
    category: 'gala',
    categoryLabel: 'Wedding & Bridal Celebration',
    location: 'Karen, Nairobi',
    guestCount: '180 Family & Friends',
    budgetBracket: 'Ksh120k - Ksh150k Production Scope',
    summary: 'A multi-day destination wedding experience combining refined scenography, guest concierge, culinary hospitality, and seamless ceremony-to-reception transitions.',
    brief: {
      challenge: 'Create an intimate destination celebration while coordinating guests, suppliers, weather contingencies, and multiple venues across an entire weekend.',
      objective: 'Deliver a calm, beautifully paced wedding journey where the couple and their families can remain fully present from welcome dinner through final dance.',
      stakeholders: 'The couple, family office, bridal party, venue partners, luxury hospitality and culinary teams.'
    },
    strategyExecution: {
      spatialDesign: 'Developed a garden ceremony setting, candlelit dinner architecture, and late-night dance environment with a coherent visual story across three venues.',
      avProduction: 'Managed discreet ceremony audio, live musicians, lighting cues, speeches, and a redundant weather-ready production plan.',
      guestExperience: 'Delivered arrival concierge, room-drop welcome details, personalized seating, dietary coordination, and dedicated bridal party support.',
      logisticsRisk: 'Built a minute-by-minute run of show, supplier command center, transport schedule, rain plan, and guest privacy protocols.'
    },
    outcomeMetrics: {
      primaryMetric: '100%',
      primaryLabel: 'Key Moments Delivered On Cue',
      secondaryMetric: '98%',
      secondaryLabel: 'Guest Experience Rating',
      tertiaryMetric: '0',
      tertiaryLabel: 'Weather-Related Disruptions',
      roiSummary: 'A seamless three-day celebration that gave the couple and their guests an effortless, highly personal experience.'
    },
    testimonial: {
      quote: 'Every detail felt considered, but nothing ever felt over-produced. We were able to enjoy our wedding because the entire weekend was in expert hands.',
      author: 'Private Client',
      title: 'Bride',
      company: 'Confidential Family Office'
    },
    tags: ['Wedding Production', 'Bridal Concierge', 'Luxury Hospitality', 'Destination Events']
  },
  {
    ...CASE_STUDIES[2],
    id: 'brand-activation-launch',
    title: 'The Future Is Now: Immersive Brand Launch',
    client: 'Helium Baloon',
    category: 'activation',
    categoryLabel: 'Brand Activation',
    summary: 'A high-impact product launch turning a live audience into active participants through spatial storytelling, interactive demonstrations, and broadcast-ready content capture.',
    brief: {
      challenge: 'Make a new product understandable and memorable in a busy launch environment while serving press, creators, buyers, and VIP guests at the same time.',
      objective: 'Generate qualified attention and shareable content while giving every guest a clear, hands-on understanding of the product promise.',
      stakeholders: 'Global brand team, product marketing, retail partners, press, creators, production and technology vendors.'
    },
    strategyExecution: {
      spatialDesign: 'Created a guided discovery journey with a hero reveal, modular demonstration zones, content capture moments, and a hospitality lounge.',
      avProduction: 'Integrated show control, projection, product demonstrations, live sound, lighting, and a broadcast feed for remote audiences.',
      guestExperience: 'Designed timed invitations, host-led product tours, creator-ready moments, and a frictionless VIP and media check-in flow.',
      logisticsRisk: 'Coordinated product security, crowd movement, technical rehearsals, supplier access, and rapid reset between guest groups.'
    },
    outcomeMetrics: {
      primaryMetric: '4,800',
      primaryLabel: 'Qualified Guest Interactions',
      secondaryMetric: '2.1M',
      secondaryLabel: 'Organic Content Impressions',
      tertiaryMetric: '96%',
      tertiaryLabel: 'Product Demo Completion',
      roiSummary: 'The activation converted product curiosity into measurable engagement and a sustained wave of launch content across priority markets.'
    },
    tags: ['Experiential Marketing', 'Product Launch', 'Content Capture', 'Guest Journey']
  },
  {
    ...CASE_STUDIES[0],
    id: 'birthday-baby-shower-celebration',
    title: 'A Year of Firsts: Birthday & Baby Shower Celebration',
    client: 'Private Family',
    category: 'corporate',
    categoryLabel: 'Birthday & Baby Shower',
    location: 'Westlands, Nairobi',
    guestCount: '95 Family & Friends',
    budgetBracket: 'Ksh20k - Ksh30k Production Scope',
    summary: 'A joyful double celebration bringing together a milestone birthday and baby shower through warm design, thoughtful family hospitality, and a relaxed but precise guest experience.',
    brief: {
      challenge: 'Bring two meaningful milestones together without making either celebration feel secondary, while accommodating multiple generations and young families.',
      objective: 'Create a welcoming afternoon-to-evening celebration with memorable reveals, comfortable pacing, and effortless hosting for the family.',
      stakeholders: 'The host family, grandparents, close friends, children, venue team, caterer and entertainment partners.'
    },
    strategyExecution: {
      spatialDesign: 'Designed distinct birthday and baby shower moments within one flowing estate layout, with flexible lounge, dining, and play areas.',
      avProduction: 'Coordinated warm architectural lighting, music, tribute videos, microphone support, and a surprise birthday reveal.',
      guestExperience: 'Planned age-inclusive activities, family-style dining, thoughtful gifting, childcare-friendly amenities, and personal welcome touches.',
      logisticsRisk: 'Managed supplier timing, outdoor contingency planning, food service transitions, privacy, and a quiet-room plan for younger guests.'
    },
    outcomeMetrics: {
      primaryMetric: '95/95',
      primaryLabel: 'Guests Welcomed',
      secondaryMetric: '2',
      secondaryLabel: 'Milestones Celebrated',
      tertiaryMetric: '100%',
      tertiaryLabel: 'Host Satisfaction',
      roiSummary: 'A relaxed, heartfelt celebration that made space for every generation and gave the family a memorable milestone to share.'
    },
    tags: ['Private Celebrations', 'Birthday Events', 'Baby Showers', 'Family Hospitality']
  },
  {
    ...CASE_STUDIES[0],
    id: 'botanical-karen-baby-shower',
    title: 'A Garden Welcome: Baby Shower Celebration',
    client: 'Private Family',
    category: 'corporate',
    categoryLabel: 'Baby Shower',
    location: 'Botanical Langata Road, Karen',
    guestCount: 'Family & Friends',
    budgetBracket: 'Private Event Production Scope',
    heroImage: new URL('../../assets/botan.jpeg', import.meta.url).href,
    summary: 'A warm baby shower at Botanical, bringing family and friends together for a thoughtful celebration surrounded by Karen’s garden setting.',
    brief: {
      challenge: 'Create a welcoming baby shower that feels personal and relaxed while keeping the event details coordinated for the host family.',
      objective: 'Celebrate the growing family with a comfortable guest experience, considered styling, and a smooth event-day flow.',
      stakeholders: 'The host family, guests, venue team, caterer, and event suppliers.'
    },
    strategyExecution: {
      spatialDesign: 'Used the garden venue as the backdrop for a soft, celebratory setting with a defined gathering and dining area.',
      avProduction: 'Coordinated background music and event announcements to support the gathering without interrupting conversation.',
      guestExperience: 'Planned a warm welcome, comfortable seating, refreshments, and time for family moments and gifting.',
      logisticsRisk: 'Aligned venue access, supplier setup, guest arrival, and event timing with the host family and venue team.'
    },
    outcomeMetrics: {
      primaryMetric: 'Baby Shower',
      primaryLabel: 'Milestone Celebrated',
      secondaryMetric: 'Botanical',
      secondaryLabel: 'Garden Venue',
      tertiaryMetric: 'Family & Friends',
      tertiaryLabel: 'Gathered to Celebrate',
      roiSummary: 'A personal garden celebration bringing loved ones together to welcome the family’s new arrival.'
    },
    testimonial: {
      quote: 'The day felt warm, personal, and easy to enjoy with everyone together.',
      author: 'Private Client',
      title: 'Host',
      company: 'Private Family'
    },
    tags: ['Baby Shower', 'Private Celebrations', 'Garden Venue', 'Family Hospitality']
  },
  {
    ...CASE_STUDIES[2],
    id: 'dari-business-park-brand-activation',
    title: 'Brand Activation at Dari Business Park',
    client: 'Brand Client',
    category: 'activation',
    categoryLabel: 'Brand Activation',
    location: 'Dari Business Park Along Ngong Road',
    guestCount: 'Event Guests',
    budgetBracket: 'Brand Activation Production Scope',
    heroImage: new URL('../../assets/brand.jpeg', import.meta.url).href,
    summary: 'A brand activation at Dari Business Park designed to bring the brand closer to its audience through an engaging, well-coordinated event experience.',
    brief: {
      challenge: 'Create a clear and engaging brand presence while coordinating the activation setup, audience flow, and event-day operations.',
      objective: 'Give guests an accessible way to experience the brand and leave with a memorable impression.',
      stakeholders: 'The client brand team, event guests, venue team, and activation suppliers.'
    },
    strategyExecution: {
      spatialDesign: 'Arranged the activation space to make the brand presence visible and create a natural route for guest interaction.',
      avProduction: 'Coordinated the event’s sound and presentation requirements to support the brand programme.',
      guestExperience: 'Focused the guest journey on a clear welcome, approachable brand interaction, and smooth movement through the space.',
      logisticsRisk: 'Managed setup timing, supplier coordination, venue requirements, and on-site event flow.'
    },
    outcomeMetrics: {
      primaryMetric: 'Brand Experience',
      primaryLabel: 'Activation Focus',
      secondaryMetric: 'Dari Business Park',
      secondaryLabel: 'Event Venue',
      tertiaryMetric: 'Guest Interaction',
      tertiaryLabel: 'Experience Priority',
      roiSummary: 'A coordinated activation that gave the brand a dedicated space to connect with guests at Dari Business Park.'
    },
    testimonial: {
      quote: 'The activation gave our guests a welcoming and engaging way to experience the brand.',
      author: 'Brand Client',
      title: 'Client Representative',
      company: 'Brand Client'
    },
    tags: ['Brand Activation', 'Experiential Marketing', 'Guest Engagement', 'Event Production']
  },
  {
    ...CASE_STUDIES[0],
    id: 'lazarine-hardy-karen-birthday',
    title: 'A Birthday Celebration at Lazarine',
    client: 'Private Family',
    category: 'corporate',
    categoryLabel: 'Birthday Celebration',
    location: 'Karen',
    guestCount: 'Family & Friends',
    budgetBracket: 'Private Event Production Scope',
    heroImage: new URL('../../assets/laz.jpeg', import.meta.url).href,
    summary: 'A birthday celebration at Lazarine, Hardy, bringing loved ones together for an enjoyable occasion with thoughtful event styling and attentive hosting.',
    brief: {
      challenge: 'Make the birthday feel special for the celebrant while ensuring guests can relax and enjoy the occasion.',
      objective: 'Deliver a smoothly coordinated celebration with a welcoming atmosphere and memorable moments for family and friends.',
      stakeholders: 'The celebrant, host family, guests, venue team, and event suppliers.'
    },
    strategyExecution: {
      spatialDesign: 'Prepared a celebratory venue layout with a focal area for gathering and key birthday moments.',
      avProduction: 'Coordinated music and announcements to support the celebration and its programme.',
      guestExperience: 'Created a warm arrival and an easy flow between socializing, dining, and birthday activities.',
      logisticsRisk: 'Aligned supplier setup and event timing with the venue and host to keep the day running smoothly.'
    },
    outcomeMetrics: {
      primaryMetric: 'Birthday',
      primaryLabel: 'Milestone Celebrated',
      secondaryMetric: 'Lazarine',
      secondaryLabel: 'Celebration Venue',
      tertiaryMetric: 'Family & Friends',
      tertiaryLabel: 'Gathered to Celebrate',
      roiSummary: 'A joyful birthday gathering at Lazarine, thoughtfully coordinated for the celebrant and their guests.'
    },
    testimonial: {
      quote: 'Everything came together beautifully, and we could focus on celebrating with our guests.',
      author: 'Private Client',
      title: 'Host',
      company: 'Private Family'
    },
    tags: ['Birthday Events', 'Private Celebrations', 'Guest Experience', 'Event Coordination']
  },
  {
    ...CASE_STUDIES[1],
    id: 'pioneer-thika-graduation',
    title: 'A Graduation Ceremony at Pioneer',
    client: 'Private Family',
    category: 'gala',
    categoryLabel: 'Graduation & Academic Celebration',
    location: 'Pioneer Thika',
    guestCount: 'Family & Friends',
    budgetBracket: 'Graduation Production Scope',
    heroImage: new URL('../../assets/wed.jpeg', import.meta.url).href,
    summary: 'A graduation ceremony at Pioneer, Thika, bringing the graduate’s loved ones together for a meaningful day with considered styling and coordinated event delivery.',
    brief: {
      challenge: 'Coordinate the people, suppliers, and programme details needed to make the graduation day feel seamless for the graduate and their guests.',
      objective: 'Create a welcoming graduation experience that lets the graduate and their families stay present throughout the celebration.',
      stakeholders: 'The graduate, their families, graduation party, venue team, and event suppliers.'
    },
    strategyExecution: {
      spatialDesign: 'Prepared a ceremony and celebration setting suited to the venue and the couple’s wedding day.',
      avProduction: 'Coordinated sound and programme cues for the ceremony, speeches, and celebration.',
      guestExperience: 'Supported guest arrival and movement through the wedding programme with attentive on-site coordination.',
      logisticsRisk: 'Aligned venue access, supplier schedules, setup, and event timing with the couple and wedding team.'
    },
    outcomeMetrics: {
      primaryMetric: 'Graduation Day',
      primaryLabel: 'Milestone Celebrated',
      secondaryMetric: 'Pioneer',
      secondaryLabel: 'Thika Venue',
      tertiaryMetric: 'Family & Friends',
      tertiaryLabel: 'Gathered to Celebrate',
      roiSummary: 'A thoughtfully coordinated graduation celebration at Pioneer, Thika, shared with the couple’s loved ones.'
    },
    testimonial: {
      quote: 'We were able to enjoy our day with family and friends while the details were taken care of.',
      author: 'Private Client',
      title: 'Couple',
      company: 'Private Family'
    },
    tags: ['Graduation Events', 'Private Celebrations', 'Pioneer', 'Guest Experience']
  },
  {
    ...CASE_STUDIES[0],
    id: 'westlands-birthday-celebration',
    title: 'A Birthday Celebration in Westlands',
    client: 'Private Family',
    category: 'corporate',
    categoryLabel: 'Birthday Celebration',
    location: 'Westlands, Nairobi',
    guestCount: 'Family & Friends',
    budgetBracket: 'Private Event Production Scope',
    heroImage: new URL('../../assets/bday.jpeg', import.meta.url).href,
    summary: 'A birthday gathering in Westlands, bringing family and friends together for a personal celebration with a welcoming atmosphere and coordinated event details.',
    brief: {
      challenge: 'Plan a birthday gathering that feels personal to the celebrant and comfortable for the invited guests.',
      objective: 'Make it easy for the host and guests to enjoy the celebration through thoughtful preparation and smooth coordination.',
      stakeholders: 'The celebrant, host family, guests, venue team, and event suppliers.'
    },
    strategyExecution: {
      spatialDesign: 'Set up a celebratory space with a clear focal point and comfortable areas for guests to gather.',
      avProduction: 'Coordinated music and key programme moments to suit the birthday celebration.',
      guestExperience: 'Supported guest arrival, social time, and the birthday moments that brought everyone together.',
      logisticsRisk: 'Managed event setup, supplier coordination, and timing with the host and venue.'
    },
    outcomeMetrics: {
      primaryMetric: 'Birthday',
      primaryLabel: 'Milestone Celebrated',
      secondaryMetric: 'Westlands',
      secondaryLabel: 'Event Location',
      tertiaryMetric: 'Family & Friends',
      tertiaryLabel: 'Gathered to Celebrate',
      roiSummary: 'A warm birthday celebration in Westlands, giving the host and guests space to enjoy the occasion together.'
    },
    testimonial: {
      quote: 'The celebration felt personal and gave everyone a chance to enjoy the day together.',
      author: 'Private Client',
      title: 'Host',
      company: 'Private Family'
    },
    tags: ['Birthday Events', 'Private Celebrations', 'Westlands', 'Guest Experience']
  }
];

interface PortfolioViewProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onNavigate: (page: PageView) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  onSelectCaseStudy,
  onNavigate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredStudies = PORTFOLIO_CASE_STUDIES.filter((cs) => {
    const matchesCat = selectedCategory === 'all' || cs.category === selectedCategory;
    const matchesSearch = 
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-slate-900 border border-amber-500/30 rounded-full px-4 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-300 font-mono">
              The Enterprise Case Archive
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-slate-100 mb-4">
            Our Event Portfolio
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Explore how our three-part framework (The Brief, Strategy &amp; Execution, Outcome &amp; Metrics) turns meaningful celebrations and brand moments into beautifully managed experiences.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-amber-300 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              All Engagements ({PORTFOLIO_CASE_STUDIES.length})
            </button>
            <button
              onClick={() => setSelectedCategory('gala')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === 'gala'
                  ? 'bg-amber-300 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Wedding &amp; Bridal Celebrations
            </button>
            <button
              onClick={() => setSelectedCategory('activation')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === 'activation'
                  ? 'bg-amber-300 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Brand Activations
            </button>
            <button
              onClick={() => setSelectedCategory('corporate')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === 'corporate'
                  ? 'bg-amber-300 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Birthday &amp; Baby Showers
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search case studies, tags, or scale..."
              className="w-full bg-slate-950 border border-slate-700/80 text-slate-200 pl-9 pr-3 py-1.5 rounded-lg text-xs focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Case Studies Grid */}
        {filteredStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {filteredStudies.map((cs) => (
              <CaseStudyCard 
                key={cs.id} 
                caseStudy={cs} 
                onSelect={onSelectCaseStudy} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-xl mb-16">
            <p className="text-sm text-slate-400">No case studies found matching your criteria.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs text-amber-300 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Bottom Procurement Ingestion CTA */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 rounded-2xl p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-serif-luxury font-bold text-slate-100 mb-2">
            Require Custom Case Studies for Your Procurement Committee?
          </h3>
          <p className="text-xs text-slate-400 max-w-xl mx-auto mb-6">
            We maintain over 140 confidential, NDA-protected case studies across Fortune 500 tech, pharmaceuticals, private equity, and sovereign foundations.
          </p>
          <button
            onClick={() => onNavigate('rfp')}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-200 to-amber-400 rounded-md font-heading hover:from-amber-100 hover:to-amber-300 transition-all inline-flex items-center space-x-2"
          >
            <span>Request Confidential Industry Dossier</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

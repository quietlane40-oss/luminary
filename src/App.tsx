import React, { useEffect, useState } from 'react';
import { PageView, CaseStudy } from './types';
import { PAGE_PATHS, Seo, pageFromPath } from './seo';
import { CASE_STUDIES } from './data/mockData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ServicesView } from './components/ServicesView';
import { PortfolioView, PORTFOLIO_CASE_STUDIES } from './components/PortfolioView';
import { CaseStudyCard } from './components/CaseStudyCard';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AboutView } from './components/AboutView';
import { InvestmentPricingView } from './components/InvestmentPricingView';
import { InquiryRFPView } from './components/InquiryRFPView';
import { ClientPortalModal } from './components/ClientPortalModal';
import { CapabilitiesDeckModal } from './components/CapabilitiesDeckModal';
import { LegalModal } from './components/LegalModals';
import { 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Gift, 
  Wine, 
  TrendingUp, 
  FileText,
  Lock,
  Layers,
  MessageCircle
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>(() => pageFromPath(window.location.pathname));
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);
  const [isDeckOpen, setIsDeckOpen] = useState<boolean>(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | 'cookies' | 'accessibility' | null>(null);

  useEffect(() => {
    const handlePopState = () => setCurrentPage(pageFromPath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: PageView) => {
    setCurrentPage(page);
    const nextPath = PAGE_PATHS[page];
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = () => {
    // Navigate to RFP view on bookings tab or open direct
    navigateTo('rfp');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9fe] text-purple-950 font-sans selection:bg-purple-200 selection:text-purple-950">
      <Seo page={currentPage} />
      {/* Enterprise Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenDeck={() => setIsDeckOpen(true)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Routing Switcher */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <div className="space-y-0">
            {/* 1. Hero Section with Video Canvas & Social Proof Logo Bar */}
            <HeroSection
              onNavigate={navigateTo}
              onOpenBooking={handleOpenBooking}
              onOpenDeck={() => setIsDeckOpen(true)}
            />

            {/* 2. Three Specialized Disciplines Spotlight */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-purple-200">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-300 rounded-full px-3.5 py-1 mb-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-xs font-mono uppercase tracking-widest text-purple-900 font-bold">
                      Core Services
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-purple-950">
                    Visionary Design. Flawless Execution
                  </h2>
                </div>
                <button
                  onClick={() => navigateTo('corporate-conferences')}
                  className="text-xs text-purple-800 hover:text-purple-950 font-bold uppercase tracking-wider flex items-center space-x-1 underline decoration-purple-300 underline-offset-4"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Discipline 1 */}
                <div 
                  onClick={() => navigateTo('corporate-conferences')}
                  className="bg-white border border-purple-200/90 hover:border-purple-400 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer group shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors shadow-xs">
                      <Gift className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase text-purple-700 font-bold">Scale 500 – 15,000+ Attendees</span>
                    <h3 className="text-xl font-serif-luxury font-bold text-purple-950 mt-1 mb-3 group-hover:text-purple-800 transition-colors">
                      Wedding &amp; Bridal celebrations
                    </h3>
                    <p className="text-xs text-purple-800/80 leading-relaxed">
                      We design and produce breathtaking weddings and bridal celebrations tailored to your personal love story. 
                      From custom balloon art installations and elegant spatial styling to seamless on-the-day coordination, we handle every detail so you can savor every moment with your guests.
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-purple-100 flex items-center justify-between text-xs text-purple-900 font-semibold">
                    <span>Inspect Wedding framework</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-purple-700" />
                  </div>
                </div>

                {/* Discipline 2 */}
                <div 
                  onClick={() => navigateTo('brand-activations')}
                  className="bg-white border border-purple-200/90 hover:border-purple-400 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer group shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors shadow-xs">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase text-purple-700 font-bold">Experiential &amp; Press Unveilings</span>
                    <h3 className="text-xl font-serif-luxury font-bold text-purple-950 mt-1 mb-3 group-hover:text-purple-800 transition-colors">
                      Brand Activations &amp; Launches
                    </h3>
                    <p className="text-xs text-purple-800/80 leading-relaxed">
                      We craft immersive brand activations and high-impact product unveilings that captivate your target audience 
                      and bring your story to life. From custom spatial installations and eye-catching decor to seamless vendor 
                      management and event flow, we transform ordinary spaces into unforgettable brand experiences across Kenya.
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-purple-100 flex items-center justify-between text-xs text-purple-900 font-semibold">
                    <span>Inspect Spatial Framework</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-purple-700" />
                  </div>
                </div>

                {/* Discipline 3 */}
                <div 
                  onClick={() => navigateTo('galas-celebrations')}
                  className="bg-white border border-purple-200/90 hover:border-purple-400 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer group shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors shadow-xs">
                      <Wine className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase text-purple-700 font-bold">Ultra-HNW &amp; Philanthropic</span>
                    <h3 className="text-xl font-serif-luxury font-bold text-purple-950 mt-1 mb-3 group-hover:text-purple-800 transition-colors">
                      Birthday &amp; Babyshower
                    </h3>
                    <p className="text-xs text-purple-800/80 leading-relaxed">
                        We design and curate intimate social celebrations, milestone birthdays, and welcoming baby showers that reflect your
                        unique personal style. From bespoke balloon art and custom spatial styling to seamless timeline coordination, we handle every detail so you can relax and truly enjoy the moment with your guests.
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-purple-100 flex items-center justify-between text-xs text-purple-900 font-semibold">
                    <span>Inspect Birthday Scenography</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-purple-700" />
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Featured Case Studies Grid (The Structured Framework) */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-purple-200">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-300 rounded-full px-3.5 py-1 mb-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-xs font-mono uppercase tracking-widest text-purple-900 font-bold">
                    Structured Enterprise Framework
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-purple-950 mb-3">
                  The Brief. Strategy &amp; Execution. Outcome &amp; Metrics.
                </h2>
                <p className="text-xs sm:text-sm text-purple-800/80">
                  Every portfolio case study is documented through our standardized three-part framework to prove business return and technical resilience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {PORTFOLIO_CASE_STUDIES.slice(0, 2).map((cs) => (
                  <CaseStudyCard
                    key={cs.id}
                    caseStudy={cs}
                    onSelect={(study) => setSelectedCaseStudy(study)}
                  />
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => navigateTo('portfolio')}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-purple-950 hover:text-purple-900 bg-white hover:bg-purple-50 border border-purple-300 hover:border-purple-400 rounded-xl shadow-xs transition-all inline-flex items-center space-x-2"
                >
                  <span>View other Confidential Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </section>

            {/* 4. Enterprise Leadership & Master Service Agreements Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-purple-200">
              <div className="bg-white border border-purple-200/90 rounded-2xl p-8 sm:p-12 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-5">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">
                      Procurement Reliability &amp; Governance
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-purple-950">
                      Certified Meeting Professionals. Master Service Agreements.
                    </h2>
                    <p className="text-xs sm:text-sm text-purple-800/90 leading-relaxed">
                      Luminary Guild operates under bilateral Master Services Agreements (MSAs) with Fortune 500 procurement teams, offering pre-negotiated rate cards, vetted union labor protocols, and a comprehensive $20M umbrella policy underwritten by Lloyd’s of London.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="border-l-2 border-purple-600 pl-3">
                        <div className="text-lg font-bold font-serif-luxury text-purple-950">100% Certified</div>
                        <div className="text-xs text-purple-700 font-medium">Lead Producers CMP/CMM</div>
                      </div>
                      <div className="border-l-2 border-purple-600 pl-3">
                        <div className="text-lg font-bold font-serif-luxury text-purple-950">Ksh200,000</div>
                        <div className="text-xs text-purple-700 font-medium">Commercial Liability Policy</div>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4">
                      <button
                        onClick={() => navigateTo('about')}
                        className="px-5 py-2.5 text-xs font-semibold text-purple-950 bg-purple-100 hover:bg-purple-200 border border-purple-200 rounded-md transition-colors"
                      >
                        Meet Certified Leadership
                      </button>
              
                    </div>
                  </div>

          
                </div>
              </div>
            </section>

            {/* 5. Primary Pre-Closing Proposal CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
              <div className="bg-gradient-to-br from-purple-800 via-purple-900 to-purple-950 border border-purple-700 text-white rounded-3xl p-10 sm:p-14 shadow-2xl relative overflow-hidden">
                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">
                    2026/2027 Calendar Allotments
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
                    Ready to Architect Your Next Flagship Event?
                  </h2>
                  <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed">
                    Submit your preliminary specifications or RFP document through our secure portal to receive a formal proposal and technical feasibility audit within 24 hours.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button
                      onClick={() => navigateTo('rfp')}
                      className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-purple-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-300 rounded-md font-heading transition-all shadow-xl"
                    >
                      Request a Proposal (RFP)
                    </button>
                    <button
                      onClick={handleOpenBooking}
                      className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold text-white hover:text-purple-100 bg-white/15 hover:bg-white/25 border border-white/20 rounded-md transition-colors"
                    >
                      Schedule Discovery Call
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Dedicated Service Pages */}
        {currentPage === 'corporate-conferences' && (
          <ServicesView 
            initialService="corporate-conferences" 
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'brand-activations' && (
          <ServicesView 
            initialService="brand-activations" 
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'galas-celebrations' && (
          <ServicesView 
            initialService="galas-celebrations" 
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {/* Portfolio & Case Studies Page */}
        {currentPage === 'portfolio' && (
          <PortfolioView 
            onSelectCaseStudy={(study) => setSelectedCaseStudy(study)} 
            onNavigate={navigateTo}
          />
        )}

        {/* About & Leadership Page */}
        {currentPage === 'about' && (
          <AboutView 
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {/* Investment & Pricing Guidance Page with Interactive Estimator */}
        {currentPage === 'pricing' && (
          <InvestmentPricingView 
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {/* Inquiry / RFP Page with Dynamics 365 & Bookings */}
        {currentPage === 'rfp' && (
          <InquiryRFPView onNavigate={navigateTo} />
        )}

      </main>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/254792604341"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl ring-4 ring-white/60 transition-all hover:scale-105 hover:bg-[#1ebc5d]"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Floating "Schedule Discovery Call" Action Button */}
      <aside aria-label="Quick scheduling action" className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleOpenBooking}
          className="bg-purple-900 hover:bg-purple-950 border border-purple-700 text-white shadow-2xl px-4 py-2.5 rounded-full backdrop-blur-md flex items-center space-x-2 text-xs font-semibold transition-all transform hover:scale-105 group cursor-pointer ring-2 ring-purple-400/30"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <Calendar className="w-3.5 h-3.5 text-amber-300" />
          <span className="hidden sm:inline">Schedule Discovery Call</span>
          <span className="sm:hidden">Book Call</span>
        </button>
      </aside>

      {/* Case Study Detail Modal (The Structured Framework) */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenRFP={() => {
          setSelectedCaseStudy(null);
          navigateTo('rfp');
        }}
      />

      {/* Client Portal Gateway Modal (SharePoint/Teams SSO) */}
      <ClientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

      {/* Capabilities Deck Lead Magnet Modal */}
      <CapabilitiesDeckModal
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
        onOpenRFP={() => {
          setIsDeckOpen(false);
          navigateTo('rfp');
        }}
      />

      {/* Legal & Compliance Modal */}
      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />

      {/* Enterprise Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenLegal={(type) => setLegalType(type)}
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenDeck={() => setIsDeckOpen(true)}
      />
    </div>
  );
}

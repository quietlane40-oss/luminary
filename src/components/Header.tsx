import React, { useState } from 'react';
import { PageView } from '../types';
import { 
  ChevronDown, 
  ShieldCheck, 
  Briefcase, 
  FileText, 
  Calendar, 
  Menu, 
  X, 
  ExternalLink,
  Layers,
  Sparkles,
  Lock
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenPortal: () => void;
  onOpenDeck: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenPortal,
  onOpenDeck,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const isServiceActive = ['corporate-conferences', 'brand-activations', 'galas-celebrations'].includes(currentPage);

  return (
    <header className="sticky top-0 z-50 w-full bg-purple-100/90 backdrop-blur-md border-b border-purple-200/80 transition-all shadow-xs">


      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-purple-700 via-purple-800 to-purple-950 border border-amber-400/70 flex items-center justify-center shadow-md group-hover:border-amber-300 transition-all">
              <span className="font-serif-luxury text-base font-bold text-amber-300 tracking-wider">LG</span>
            </div>
            <div>
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-purple-950 group-hover:text-purple-800 transition-colors">
                LUMINARY GUILD
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-purple-700 uppercase font-semibold">
                Executive Event Planning
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentPage === 'home' 
                  ? 'text-purple-950 bg-purple-200/80 border border-purple-300/80 shadow-xs' 
                  : 'text-purple-900 hover:text-purple-950 hover:bg-purple-200/50'
              }`}
            >
              Overview
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors flex items-center space-x-1 ${
                  isServiceActive 
                    ? 'text-purple-950 bg-purple-200/80 border border-purple-300/80 shadow-xs' 
                    : 'text-purple-900 hover:text-purple-950 hover:bg-purple-200/50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div 
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-80 rounded-xl bg-white/98 border border-purple-200 shadow-2xl p-2 z-50 backdrop-blur-xl"
                >
                  <div className="px-3 py-2 text-[11px] font-bold text-purple-700 uppercase tracking-wider border-b border-purple-100 mb-1">
                    Specialized Production Disciplines
                  </div>
                  <button
                    onClick={() => handleNavClick('corporate-conferences')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-purple-50 transition-colors group cursor-pointer"
                  >
                    <div className="text-sm font-semibold text-purple-950 group-hover:text-purple-700">
                      Wedding &amp; Bridal celebrations
                    </div>
                    <div className="text-xs text-purple-700/80 mt-0.5">
                      Produce breathtaking weddings and bridal celebrations tailored to your personal love story.
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('brand-activations')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-purple-50 transition-colors group cursor-pointer"
                  >
                    <div className="text-sm font-semibold text-purple-950 group-hover:text-purple-700">
                      Brand Activations &amp; Product Launches
                    </div>
                    <div className="text-xs text-purple-700/80 mt-0.5">
                      Experiential spatial architecture, sensory tech &amp; press unveilings.
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('galas-celebrations')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-purple-50 transition-colors group cursor-pointer"
                  >
                    <div className="text-sm font-semibold text-purple-950 group-hover:text-purple-700">
                      Galas &amp; Social Celebrations
                    </div>
                    <div className="text-xs text-purple-700/80 mt-0.5">
                      Haute decor, Michelin culinary curation &amp; private benefactor auctions.
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('portfolio')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentPage === 'portfolio' 
                  ? 'text-purple-950 bg-purple-200/80 border border-purple-300/80 shadow-xs' 
                  : 'text-purple-900 hover:text-purple-950 hover:bg-purple-200/50'
              }`}
            >
              Case Studies
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentPage === 'about' 
                  ? 'text-purple-950 bg-purple-200/80 border border-purple-300/80 shadow-xs' 
                  : 'text-purple-900 hover:text-purple-950 hover:bg-purple-200/50'
              }`}
            >
              Leadership &amp; Governance
            </button>

            <button
              onClick={() => handleNavClick('pricing')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                currentPage === 'pricing' 
                  ? 'text-purple-950 bg-purple-200/80 border border-purple-300/80 shadow-xs' 
                  : 'text-purple-900 hover:text-purple-950 hover:bg-purple-200/50'
              }`}
            >
              Investment Models
            </button>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-2 text-xs font-semibold text-purple-900 hover:text-purple-950 bg-purple-200/70 hover:bg-purple-200 rounded-md border border-purple-300 transition-colors flex items-center cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-purple-700" />
              <span>Schedule Call</span>
            </button>

            <button
              onClick={() => handleNavClick('rfp')}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-md shadow-md shadow-amber-500/20 border border-amber-400/50 transition-all transform hover:-translate-y-0.5 cursor-pointer font-heading"
            >
              Request Proposal
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-purple-800 hover:text-purple-950 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-purple-50 border-b border-purple-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-1 gap-1 text-sm font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left px-3 py-2.5 rounded-md text-purple-950 hover:bg-purple-100 font-semibold"
            >
              Overview
            </button>
            <div className="px-3 pt-2 text-xs font-bold text-purple-800 uppercase tracking-wider">
              Services
            </div>
            <button
              onClick={() => handleNavClick('corporate-conferences')}
              className="text-left px-4 py-2 rounded-md text-purple-900 hover:bg-purple-100 text-xs"
            >
              • Corporate Conferences &amp; Summits
            </button>
            <button
              onClick={() => handleNavClick('brand-activations')}
              className="text-left px-4 py-2 rounded-md text-purple-900 hover:bg-purple-100 text-xs"
            >
              • Brand Activations &amp; Launches
            </button>
            <button
              onClick={() => handleNavClick('galas-celebrations')}
              className="text-left px-4 py-2 rounded-md text-purple-900 hover:bg-purple-100 text-xs"
            >
              • Galas &amp; Social Celebrations
            </button>

            <button
              onClick={() => handleNavClick('portfolio')}
              className="text-left px-3 py-2.5 rounded-md text-purple-950 hover:bg-purple-100 font-semibold"
            >
              Case Studies &amp; Portfolio
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left px-3 py-2.5 rounded-md text-purple-950 hover:bg-purple-100 font-semibold"
            >
              About &amp; Certified Leadership
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="text-left px-3 py-2.5 rounded-md text-purple-950 hover:bg-purple-100 font-semibold"
            >
              Investment &amp; Pricing Models
            </button>
          </div>

          <div className="pt-3 border-t border-purple-200 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-purple-900 bg-white border border-purple-300 rounded-md"
            >
              Schedule Discovery Call
            </button>
            <button
              onClick={() => handleNavClick('rfp')}
              className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-purple-950 bg-gradient-to-r from-amber-300 to-amber-400 rounded-md shadow-sm"
            >
              Request a Proposal (RFP)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

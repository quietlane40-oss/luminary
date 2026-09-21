import React from 'react';
import { PageView } from '../types';
import { FileText, Lock, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'cookies' | 'accessibility') => void;
  onOpenPortal: () => void;
  onOpenDeck: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  onOpenPortal,
  onOpenDeck
}) => {
  return (
    <footer className="bg-purple-100/90 border-t border-purple-200 text-purple-900">

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">

            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-purple-700 to-purple-950 border border-amber-400/60 flex items-center justify-center shadow-md">
                <span className="font-serif-luxury text-sm font-bold text-amber-300">
                  LG
                </span>
              </div>

              <span className="font-serif-luxury text-xl font-bold tracking-wider text-purple-950">
                LUMINARY GUILD
              </span>
            </div>

            <p className="text-xs leading-relaxed text-purple-800/90 max-w-md">
              Luminary Guild is a Kenyan event planning and decoration company
              creating beautiful, memorable celebrations and professionally
              styled events. From weddings and private celebrations to
              corporate events and brand activations, we bring together
              thoughtful design, careful planning, and seamless event-day
              coordination.
            </p>

            <div className="pt-2">
              <div className="text-xs text-purple-950 font-bold mb-1">
                Contact Us:
              </div>

              <p className="text-xs text-purple-800/80 leading-relaxed">
                Nairobi, Kenya<br />
                <a
                  href="mailto:nyamwalo402@gmail.com"
                  className="hover:text-purple-950 transition-colors"
                >
                  nyamwalo402@gmail.com
                </a>
                <br />
                <a
                  href="tel:+254792604341"
                  className="hover:text-purple-950 transition-colors"
                >
                  +254 792 604 341
                </a>
                <br />
                <a
                  href="tel:+254111464092"
                  className="hover:text-purple-950 transition-colors"
                >
                  +254 111 464 092
                </a>
              </p>
            </div>

            <div className="flex items-center space-x-3 text-xs pt-2">

              <button
                onClick={onOpenDeck}
                className="text-purple-900 hover:text-purple-950 underline decoration-purple-300 transition-colors flex items-center font-semibold"
              >
                <FileText className="w-3.5 h-3.5 mr-1 text-purple-700" />
                Our Services
              </button>

              <span className="text-purple-300">•</span>

              <button
                onClick={onOpenPortal}
                className="text-purple-900 hover:text-purple-950 transition-colors flex items-center font-semibold"
              >
                <Lock className="w-3.5 h-3.5 mr-1 text-purple-700" />
                Client Portal
              </button>

            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-950 mb-4 font-heading">
              Our Services
            </h4>

            <ul className="space-y-2 text-xs text-purple-800">

              <li>
                <button
                  onClick={() => onNavigate('corporate-conferences')}
                  className="hover:text-purple-950 transition-colors text-left"
                >
                  Corporate Events &amp; Conferences
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('brand-activations')}
                  className="hover:text-purple-950 transition-colors text-left"
                >
                  Brand Activations &amp; Launches
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('galas-celebrations')}
                  className="hover:text-purple-950 transition-colors text-left"
                >
                  Weddings &amp; Celebrations
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('galas-celebrations')}
                  className="hover:text-purple-950 transition-colors text-left"
                >
                  Event Decoration &amp; Styling
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-purple-950 transition-colors text-left"
                >
                  Event Planning &amp; Coordination
                </button>
              </li>

            </ul>
          </div>

          {/* Planning & Experience */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-950 mb-4 font-heading">
              Planning &amp; Experience
            </h4>

            <ul className="space-y-2 text-xs text-purple-800">

              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-purple-950 transition-colors text-left"
                >
                  Our Events
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-purple-950 transition-colors text-left"
                >
                  About Luminary Guild
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-purple-950 transition-colors text-left"
                >
                  Packages &amp; Pricing
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('rfp')}
                  className="hover:text-purple-950 transition-colors text-left"
                >
                  Plan Your Event
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-purple-950 transition-colors text-left"
                >
                  Event Inspiration
                </button>
              </li>

            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="space-y-3">

            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-950 font-heading">
              Event Updates
            </h4>

            <p className="text-xs text-purple-800/80">
              Get event ideas, planning tips, decoration inspiration and
              updates from Luminary Guild.
            </p>

            <div className="flex items-center">

              <input
                type="email"
                placeholder="Your email address"
                className="bg-white border border-purple-300 text-purple-950 px-3 py-2 text-xs rounded-l-md w-full focus:outline-none focus:border-purple-500 placeholder:text-purple-300"
              />

              <button
                onClick={() =>
                  alert(
                    'Thank you for subscribing to Luminary Guild event updates.'
                  )
                }
                className="bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 text-purple-950 px-3 py-2 rounded-r-md text-xs font-bold transition-colors border border-l-0 border-purple-300"
                title="Subscribe to Event Updates"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>

            <div className="text-[10px] text-purple-700/70">
              We respect your privacy and only send relevant event updates.
            </div>

          </div>
        </div>

        {/* Bottom Legal & Compliance */}
        <div className="pt-12 mt-12 border-t border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-700/80">

          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Luminary Guild. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">

            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-purple-950 transition-colors"
            >
              Privacy Policy
            </button>

            <span>•</span>

            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-purple-950 transition-colors"
            >
              Terms &amp; Conditions
            </button>

            <span>•</span>

            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-purple-950 transition-colors"
            >
              Cookie Policy
            </button>

            <span>•</span>

            <button
              onClick={() => onOpenLegal('accessibility')}
              className="hover:text-purple-950 transition-colors"
            >
              Accessibility
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
};

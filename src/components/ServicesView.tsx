import React, { useState } from 'react';
import { PageView } from '../types';
import { eventImages } from '../assets';
import { 
  Gift, 
  Sparkles, 
  Wine, 
  Layers, 
  Radio, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Sliders, 
  FileCheck,
  Compass,
  Zap,
  Globe
} from 'lucide-react';

interface ServicesViewProps {
  initialService?: 'corporate-conferences' | 'brand-activations' | 'galas-celebrations';
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ 
  initialService = 'corporate-conferences', 
  onNavigate,
  onOpenBooking
}) => {
  const [activeService, setActiveService] = useState<'corporate' | 'activation' | 'gala'>(
    initialService === 'brand-activations' 
      ? 'activation' 
      : initialService === 'galas-celebrations' 
        ? 'gala' 
        : 'corporate'
  );

  return (
    <div className="bg-[#fbf9fe] min-h-screen text-purple-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-purple-900 font-mono">
              Specialized services
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-purple-950 mb-4">
            Services Engineered for High-Stakes Impact
          </h1>
          <p className="text-sm sm:text-base text-purple-800/85 leading-relaxed">
            Every engagement is supported by rigorous technical team. Choose a specialized service to examine the operational framework.
          </p>
        </div>

        {/* 3 Discipline Master Navigation Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <button
            onClick={() => setActiveService('corporate')}
            className={`p-6 rounded-2xl border text-left transition-all cursor-pointer ${
              activeService === 'corporate'
                ? 'bg-white border-purple-500 shadow-md ring-2 ring-purple-400/30'
                : 'bg-white/70 border-purple-200/90 hover:border-purple-300 text-purple-800 hover:text-purple-950 shadow-2xs'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4 shadow-xs">
              <Gift className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-purple-700 font-bold mb-1">
              Scale 500 – 15,000+ Attendees
            </div>
            <h3 className="text-lg font-serif-luxury font-bold text-purple-950 mb-2">
              Wedding &amp; Bridal celebrations
            </h3>
            <p className="text-xs text-purple-800/80 leading-relaxed">
              Focus: Produce breathtaking weddings and bridal celebrations tailored to your personal love story.
            </p>
          </button>

          <button
            onClick={() => setActiveService('activation')}
            className={`p-6 rounded-2xl border text-left transition-all cursor-pointer ${
              activeService === 'activation'
                ? 'bg-white border-purple-500 shadow-md ring-2 ring-purple-400/30'
                : 'bg-white/70 border-purple-200/90 hover:border-purple-300 text-purple-800 hover:text-purple-950 shadow-2xs'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4 shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-purple-700 font-bold mb-1">
              Experiential &amp; Press Unveilings
            </div>
            <h3 className="text-lg font-serif-luxury font-bold text-purple-950 mb-2">
              Brand Activations &amp; Launches
            </h3>
            <p className="text-xs text-purple-800/80 leading-relaxed">
              Focus: Spatial installations and eye-catching decor to seamless vendor 
                      management and event flow, we transform ordinary spaces into unforgettable brand experiences across Kenya.
            </p>
          </button>

          <button
            onClick={() => setActiveService('gala')}
            className={`p-6 rounded-2xl border text-left transition-all cursor-pointer ${
              activeService === 'gala'
                ? 'bg-white border-purple-500 shadow-md ring-2 ring-purple-400/30'
                : 'bg-white/70 border-purple-200/90 hover:border-purple-300 text-purple-800 hover:text-purple-950 shadow-2xs'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4 shadow-xs">
              <Wine className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-purple-700 font-bold mb-1">
              Ultra-HNW &amp; Philanthropic
            </div>
            <h3 className="text-lg font-serif-luxury font-bold text-purple-950 mb-2">
              Birthday &amp; Babyshower
            </h3>
            <p className="text-xs text-purple-800/80 leading-relaxed">
              Focus: From bespoke balloon art and custom spatial styling to seamless timeline coordination
            </p>
          </button>
        </div>

        {/* Dynamic Service Deep Dive Container */}
        {activeService === 'corporate' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Split Visual & Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white border border-purple-200/90 rounded-2xl p-6 sm:p-10 shadow-xs">
              <div className="space-y-5">
                <div className="inline-block text-xs font-mono uppercase tracking-widest text-purple-900 font-bold bg-purple-100 border border-purple-200 px-3 py-1 rounded">
                  Core Service: Nationwide Wedding Plenary &amp; Multi-Track
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-purple-950">
                  Produce breathtaking weddings and bridal celebrations for romantic events.
                </h2>
                <p className="text-xs sm:text-sm text-purple-800/85 leading-relaxed">
                  When you make your grand entrance into a beautifully transformed venue, every floral detail and light fixture should reflect your personal love story. Luminary Guild orchestrates high-end weddings and bridal celebrations with creative spatial design, bespoke decor, and quiet, invisible coordination.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <div className="text-xs text-purple-900/90">
                      <strong>Immersive Atmosphere & Lighting:</strong> Tailored lighting design, custom balloon art focal points, and crystal-clear sound systems tuned perfectly for your venue's acoustics.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <div className="text-xs text-purple-900/90">
                      <strong>Unmatched Guest Hospitality:</strong> End-to-end guest journey management, custom menu tasting alignment, and seamless floor planning for effortless movement between ceremony and reception.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <div className="text-xs text-purple-900/90">
                      <strong>Bespoke Bridal Concierge:</strong> Dedicated bridal party coordination, green room styling, and on-the-day management to handle every timeline shift seamlessly.
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={() => onNavigate('rfp')}
                    className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-purple-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-md font-heading transition-all shadow-sm"
                  >
                    Request Conference RFP
                  </button>
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3 text-xs font-semibold text-purple-950 bg-purple-100 hover:bg-purple-200 border border-purple-200 rounded-md transition-colors"
                  >
                    Consult With Lead Producer
                  </button>
                </div>
              </div>

              {/* Visual Showcase Card */}
              <div className="relative rounded-2xl overflow-hidden border border-purple-200 h-80 lg:h-96 shadow-xs">
                <img 
                  src={eventImages.wedding}
                  alt="Wedding and bridal celebration decoration in Kenya" 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/30 to-transparent" />
          
              </div>
            </div>

            {/* Technical Specifications Matrix */}
            <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-serif-luxury font-bold text-purple-950 mb-6 flex items-center">
                <Sliders className="w-5 h-5 mr-2 text-purple-700" />
                Wedding Styling &amp; Technical Standards
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
                <div className="border-l-2 border-purple-600 pl-4 space-y-1">
                  <div className="font-bold text-purple-950 uppercase tracking-wider">Acoustic Design & Music Setup</div>
                  <p className="text-purple-800/80 leading-relaxed">
                    Premium sound coverage tuned specifically for romantic venues, dual wireless microphone channels for officiants, and crisp DJ or live-band audio mixing.
                  </p>
                </div>

                <div className="border-l-2 border-purple-600 pl-4 space-y-1">
                  <div className="font-bold text-purple-950 uppercase tracking-wider">Ambiance &amp; Scenic Lighting</div>
                  <p className="text-purple-800/80 leading-relaxed">
                    Custom mood-lighting scenes tailored to each stage of your day, from soft candlelit dinner hues to vibrant reception dancefloor effects paired with bespoke balloon art and floral structures.
                  </p>
                </div>

                <div className="border-l-2 border-purple-600 pl-4 space-y-1">
                  <div className="font-bold text-purple-950 uppercase tracking-wider">Screen &amp; Video Displays</div>
                  <p className="text-purple-800/80 leading-relaxed">
                    Ultra-thin high-definition screens for personal bridal stories, live multi-angle coverage for large guest venues, and glare-free lighting for videographers.
                  </p>
                </div>

                <div className="border-l-2 border-purple-600 pl-4 space-y-1">
                  <div className="font-bold text-purple-950 uppercase tracking-wider">Seamless Operations &amp; Backup</div>
                  <p className="text-purple-800/80 leading-relaxed">
                    Silent dual-redundant backup power systems and an expert on-the-day production team ensuring your schedule runs perfectly from bridal prep to the final farewell.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeService === 'activation' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white border border-purple-200/90 rounded-2xl p-6 sm:p-10 shadow-xs">
              <div className="space-y-5">
                <div className="inline-block text-xs font-mono uppercase tracking-widest text-purple-900 font-bold bg-purple-100 border border-purple-200 px-3 py-1 rounded">
                  Core Discipline: Brand Styling &amp; Immersive Activations
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-purple-950">
                  Environments Built to Captivate Your Audience
                </h2>
                <p className="text-xs sm:text-sm text-purple-800/85 leading-relaxed">
                  Turning brand stories into tactile, beautiful spaces. We blend custom balloon art, signature backdrops, and dramatic lighting to create instagrammable moments that get people talking.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <div className="text-xs text-purple-900/90">
                      <strong>Modular Decor &amp; Backdrop Displays:</strong> Custom-built arches, branded feature walls, and modular photo booths designed to elevate any venue.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <div className="text-xs text-purple-900/90">
                      <strong>Atmospheric Lighting &amp; Motion Effects:</strong> Warm ambient lighting, focal spotlighting for key products, and dynamic visual displays.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <div className="text-xs text-purple-900/90">
                      <strong>Exclusive Media &amp Influencer Previews:</strong> Dedicated VIP lounges, private viewing corners, and organized access for press and content creators.
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={() => onNavigate('rfp')}
                    className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-purple-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-md font-heading transition-all shadow-sm"
                  >
                    Request Activation Proposal
                  </button>
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3 text-xs font-semibold text-purple-950 bg-purple-100 hover:bg-purple-200 border border-purple-200 rounded-md transition-colors"
                  >
                    Meet With Spatial Design Director
                  </button>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-purple-200 h-80 lg:h-96 shadow-xs">
                <img 
                  src={eventImages.brand}
                  alt="Brand activation decor and spatial styling in Kenya" 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/30 to-transparent" />
         
              </div>
            </div>
          </div>
        )}

        {activeService === 'gala' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white border border-purple-200/90 rounded-2xl p-6 sm:p-10 shadow-xs">
              <div className="space-y-5">
                <div className="inline-block text-xs font-mono uppercase tracking-widest text-purple-900 font-bold bg-purple-100 border border-purple-200 px-3 py-1 rounded">
                  Core Discipline: Milestone Celebrations &amp; Spatial Styling
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-purple-950">
                  Unforgettable Atmospheres for Your Special Moments
                </h2>
                <p className="text-xs sm:text-sm text-purple-800/85 leading-relaxed">
                  Creating beautiful, joyous gatherings where family, friends, and loved ones come together to celebrate life's biggest milestones. From venue transformations to custom theme styling, we ensure every birthday and baby shower feels personal and magical.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <div className="text-xs text-purple-900/90">
                      <strong>Curated Dining &amp; Treat Displays:</strong> Customized dessert stations, grazing tables, and tailored catering coordination that perfectly match your party theme.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <div className="text-xs text-purple-900/90">
                      <strong>Bespoke Balloon Art &amp; Decor:</strong> Custom balloon arches, statement backdrops, delicate table centers, and playful photo walls that bring your theme to life.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <div className="text-xs text-purple-900/90">
                      <strong>Seamless Party Activities &amp; Flow:</strong> Effortless schedule management for cake cutting, party games, gift reveals, and guest entertainment so you can relax and enjoy the day.
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={() => onNavigate('rfp')}
                    className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-purple-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-md font-heading transition-all shadow-sm"
                  >
                    Request Birthday Proposal
                  </button>
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3 text-xs font-semibold text-purple-950 bg-purple-100 hover:bg-purple-200 border border-purple-200 rounded-md transition-colors"
                  >
                    Consult With Private Client Lead
                  </button>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-purple-200 h-80 lg:h-96 shadow-xs">
                <img 
                  src={eventImages.birthday}
                  alt="Birthday and baby shower event decoration in Kenya" 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/30 to-transparent" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

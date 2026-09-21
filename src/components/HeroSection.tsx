import React, { useState } from 'react';
import { PageView } from '../types';
import { CORPORATE_CLIENTS } from '../data/mockData';
import { 
  Play, 
  Pause, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  BarChart3, 
  ChevronRight, 
  Volume2, 
  VolumeX,
  Sparkles,
  Maximize2
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
  onOpenDeck: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenDeck
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-100/80 via-purple-50/70 to-purple-100/50 border-b border-purple-200/80">
      {/* Background Video / Media Canvas Placeholder Simulation */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`w-full h-full bg-cover bg-center transition-all duration-1000 transform ${
            isPlaying ? 'scale-105' : 'scale-100'
          }`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=85')`,
          }}
        >
          {/* Multi-layered luminous lavender/purple editorial gradient overlays (NOT dark) */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50/95 via-purple-50/90 to-purple-100/80" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-purple-100/50 to-purple-50/95" />
          <div className="absolute inset-0 bg-purple-200/20 mix-blend-multiply" />
        </div>

        {/* Ambient Video Control HUD */}
        <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center space-x-2 bg-white/90 backdrop-blur-md border border-purple-200 px-3 py-1.5 rounded-full text-xs text-purple-900 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-purple-700 font-medium">Cinematic Reel: 4K HDR</span>
          <div className="h-3 w-px bg-purple-200 mx-1" />
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 text-purple-800 hover:text-purple-950 transition-colors cursor-pointer"
            title={isPlaying ? "Pause cinematic preview" : "Play cinematic preview"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="p-1 text-purple-800 hover:text-purple-950 transition-colors cursor-pointer"
            title={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Executive Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-24 lg:pb-32">
        <div className="max-w-3xl">
          {/* Executive Category Tag */}
          <div className="inline-flex items-center space-x-2 bg-white/90 border border-purple-300/80 rounded-full px-3.5 py-1.5 mb-6 backdrop-blur-md shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-purple-900 font-mono">
              Enterprise Event Planning • Countrywide
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-purple-950 tracking-tight leading-[1.15] mb-6">
            Elevating Events across Kenya.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-purple-900/90 font-normal leading-relaxed mb-10 max-w-2xl">
            We craft unforgettable corporate gatherings, elegant product unveils, and exclusive galas. Brought to life through visionary decor, beautiful ambiance, and flawless execution.
          </p>

          {/* Primary Action Suite */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <button
              onClick={() => onNavigate('rfp')}
              className="px-8 py-4 text-sm font-bold uppercase tracking-wider text-purple-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-md shadow-lg shadow-amber-500/25 border border-amber-400/60 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5 cursor-pointer font-heading"
            >
              <span>Request a Proposal (RFP)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenBooking}
              className="px-6 py-4 text-sm font-semibold text-purple-950 hover:text-purple-900 bg-white hover:bg-purple-50 border border-purple-300/90 rounded-md backdrop-blur-md shadow-xs flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <span>Schedule Discovery Briefing</span>
              <ChevronRight className="w-4 h-4 text-purple-700" />
            </button>
          </div>

          {/* Enterprise Statistical Proof Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-purple-200/90">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-950 font-serif-luxury">
                Ksh 500K+
              </div>
              <div className="text-xs text-purple-800 mt-1 uppercase tracking-wider font-mono font-semibold">
                Event Spend Administered
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold text-amber-700 font-serif-luxury">
                99.99%
              </div>
              <div className="text-xs text-purple-800 mt-1 uppercase tracking-wider font-mono font-semibold">
                AV Broadcast Uptime SLA
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-950 font-serif-luxury">
                100%
              </div>
              <div className="text-xs text-purple-800 mt-1 uppercase tracking-wider font-mono font-semibold">
                CMP/CMM Lead Producers
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-950 font-serif-luxury">
                40+ Metropolitans
              </div>
              <div className="text-xs text-purple-800 mt-1 uppercase tracking-wider font-mono font-semibold">
                Nationwide Production Reach
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Logo Marquee / Enterprise Client Ribbon */}
      <div className="relative z-10 bg-purple-100/90 border-t border-purple-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs font-bold uppercase tracking-widest text-purple-800 shrink-0 font-mono">
            Trusted by Procurement &amp; Executive Teams At:
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 w-full items-center justify-items-center opacity-90 hover:opacity-100 transition-opacity">
            {CORPORATE_CLIENTS.map((client, idx) => (
              <div 
                key={idx}
                className="text-xs tracking-widest font-bold text-purple-900 hover:text-purple-950 transition-colors cursor-default whitespace-nowrap"
              >
                {client.logoText}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

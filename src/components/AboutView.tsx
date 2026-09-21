import React from 'react';
import { PageView } from '../types';
import { LEADERSHIP_TEAM, TRUST_CREDENTIALS } from '../data/mockData';
import { ShieldCheck, Award, Users, Globe, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="bg-[#fbf9fe] min-h-screen text-purple-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-purple-900 font-mono">
              Certified Governance &amp; Proven Leadership
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-purple-950 mb-4">
            The Leadership Behind Luminary Guild
          </h1>
        </div>

        {/* Agency Mission Statement Box */}
        <div className="bg-white border border-purple-200/90 rounded-2xl p-8 sm:p-12 mb-16 relative overflow-hidden shadow-xs">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold mb-2 block">
              Our Founding Ethos
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-purple-950 mb-4">
              "Exceptional Décor. Unforgettable Experiences."
            </h2>
            <p className="text-sm text-purple-800/90 leading-relaxed mb-6">
              Every celebration deserves an atmosphere that feels intentional, beautiful, and uniquely yours. We believe event decoration is 
              more than simply adding flowers, fabrics, or beautiful backdrops. It is about transforming a space into an experience that 
              reflects the occasion and the people celebrating it.From weddings and traditional ceremonies to corporate events, birthdays, 
              baby showers, and private celebrations, we bring together creative styling, quality décor, and careful attention to detail. 
              Our approach combines modern design with the warmth and character of Kenyan celebrations, creating spaces that look elegant, 
              welcoming, and memorable. We do not believe in one size fits all decoration. Every event is thoughtfully designed around your theme, venue, colors, and vision, from the first concept to the final setup.
            </p>
    
          </div>
        </div>

        {/* Certified Leadership Team Grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-700 font-bold">
              Executive Committee
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEADERSHIP_TEAM.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white border border-purple-200/90 hover:border-purple-400 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 transition-all shadow-xs hover:shadow-md"
              >
                <div className="w-full sm:w-44 h-52 sm:h-auto rounded-xl overflow-hidden shrink-0 bg-purple-100">
                  <img 
                    src={member.image} 
                    alt={`${member.name}, ${member.role} at Luminary Guild`} 
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between space-y-3">
                  <div>
           

                    <h3 className="text-xl font-serif-luxury font-bold text-purple-950">
                      {member.name}
                    </h3>
                    <div className="text-xs text-purple-700 font-semibold mt-0.5">
                      {member.role} • {member.experienceYears} Years Experience
                    </div>

                    <p className="text-xs text-purple-800/85 leading-relaxed mt-3">
                      {member.bio}
                    </p>
                  </div>

            
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vetted Global Vendor Network & Compliance Credentials */}
        <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-8 sm:p-10 mb-16 shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-700 font-bold">
              Our Trusted Event Partner Network
            </span>
            <h3 className="text-2xl font-serif-luxury font-bold text-purple-950 mt-1 mb-3">
              Curated Local Craftsmanship and Reliable Suppliers
            </h3>
            <p className="text-xs sm:text-sm text-purple-800/85 leading-relaxed">
              We partner with a handpicked network of Kenya’s finest decor creators, skilled balloon artists, premium sound engineers, top-tier caterers, and beautiful venue spaces across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="bg-white border border-purple-200 p-5 rounded-xl space-y-2 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-purple-700" />
              <div className="font-bold text-purple-950">Transparent Pricing &amp; Great Value</div>
              <p className="text-purple-800/80 leading-relaxed">
                We use our strong relationships with local suppliers to secure the best rates on rentals and decor, passing those savings directly to you.
              </p>
            </div>

            <div className="bg-white border border-purple-200 p-5 rounded-xl space-y-2 shadow-2xs">
              <Globe className="w-5 h-5 text-purple-700" />
              <div className="font-bold text-purple-950">Eco-Friendly &amp; Thoughtful Styling</div>
              <p className="text-purple-800/80 leading-relaxed">
                We focus on sustainable decor choices, reusable floral and balloon structures, and eco-conscious setup practices to keep your event beautiful and clean.
              </p>
            </div>

            <div className="bg-white border border-purple-200 p-5 rounded-xl space-y-2 shadow-2xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <div className="font-bold text-purple-950">Certified Safety &amp; Reliability</div>
              <p className="text-purple-800/80 leading-relaxed">
                All our venue and equipment partners carry verified liability coverage and proven track records for safety and punctuality.
              </p>
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="text-center py-6">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-purple-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-md font-heading hover:from-amber-200 hover:to-amber-300 shadow-md transition-all inline-flex items-center space-x-2"
          >
            <span>Schedule Executive Discovery Briefing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

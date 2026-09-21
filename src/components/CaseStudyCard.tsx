import React from 'react';
import { CaseStudy } from '../types';
import { ArrowUpRight, CheckCircle2, TrendingUp, Users, MapPin, DollarSign } from 'lucide-react';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onSelect: (caseStudy: CaseStudy) => void;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(caseStudy)}
      className="group relative bg-white border border-purple-200/90 hover:border-purple-400 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
    >
      {/* Visual Header & Image */}
      <div className="relative h-60 w-full overflow-hidden bg-purple-100">
        <img 
          src={caseStudy.heroImage} 
          alt={caseStudy.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-purple-950/20 to-transparent" />

        {/* Category Pill */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 text-purple-900 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-purple-200 shadow-xs backdrop-blur-md">
            {caseStudy.categoryLabel}
          </span>
        </div>

        {/* Year / Location Badge */}
        <div className="absolute top-4 right-4 flex items-center space-x-1.5 text-[11px] font-medium text-purple-950 bg-white/90 px-2.5 py-1 rounded-lg backdrop-blur-md border border-purple-200 shadow-xs">
          <MapPin className="w-3 h-3 text-purple-700" />
          <span>{caseStudy.location.split(',')[0]}</span>
        </div>

        {/* Primary Metric Ribbon Overlay */}

      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-purple-700 font-bold mb-1">
            {caseStudy.client} • {caseStudy.year}
          </div>
          <h3 className="text-lg font-serif-luxury font-bold text-purple-950 group-hover:text-purple-700 transition-colors line-clamp-2">
            {caseStudy.title}
          </h3>
          <p className="text-xs text-purple-800/80 mt-2 line-clamp-3 leading-relaxed">
            {caseStudy.summary}
          </p>
        </div>

        {/* Structured Framework Snapshot */}
        <div className="border-t border-purple-100 pt-3 space-y-2 text-xs">
          <div className="flex items-start space-x-2">
            <span className="font-bold text-purple-950 text-[11px] uppercase tracking-wider shrink-0 w-20">The Brief:</span>
            <span className="text-purple-800/80 line-clamp-1">{caseStudy.brief.challenge}</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="font-bold text-purple-800 text-[11px] uppercase tracking-wider shrink-0 w-20">Strategy:</span>
            <span className="text-purple-800/80 line-clamp-1">{caseStudy.strategyExecution.spatialDesign}</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="font-bold text-emerald-700 text-[11px] uppercase tracking-wider shrink-0 w-20">Metrics:</span>
            <span className="text-purple-950 font-semibold line-clamp-1">{caseStudy.outcomeMetrics.roiSummary}</span>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="flex items-center justify-between text-[11px] text-purple-700 pt-2 border-t border-purple-100">
          <span className="flex items-center font-medium">
            <Users className="w-3.5 h-3.5 mr-1 text-purple-600" />
            {caseStudy.guestCount}
          </span>
          <span className="font-bold text-purple-900 group-hover:text-purple-950 flex items-center">
            Inspect Full Framework <ArrowUpRight className="w-3 h-3 ml-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

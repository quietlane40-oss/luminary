import React from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle2, TrendingUp, Users, MapPin, DollarSign, Quote, Shield, Calendar } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenRFP: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose, onOpenRFP }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner Header */}
        <div className="relative h-72 sm:h-80 w-full overflow-hidden">
          <img 
            src={caseStudy.heroImage} 
            alt={`${caseStudy.title} event case study`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {caseStudy.categoryLabel}
              </span>
              <span className="bg-slate-950/80 text-slate-300 text-xs px-2.5 py-1 rounded-md border border-slate-700">
                {caseStudy.location}
              </span>
              <span className="bg-slate-950/80 text-slate-300 text-xs px-2.5 py-1 rounded-md border border-slate-700">
                Scale: {caseStudy.guestCount}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-slate-100">
              {caseStudy.title}
            </h2>
            <p className="text-xs text-amber-200/80 font-mono tracking-wider mt-1">
              Client Confidentiality Tier: {caseStudy.client} • Deployed {caseStudy.year}
            </p>
          </div>
        </div>

        {/* Modal Body: Three-Part Structured Framework */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[calc(85vh-20rem)] overflow-y-auto">
          {/* Executive Summary */}
          <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              Executive Engagement Summary
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {caseStudy.summary}
            </p>
          </div>

          {/* Section 1: The Brief */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 pb-2 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/30">
                FRAMEWORK PART 01
              </span>
              <h3 className="text-lg font-serif-luxury font-semibold text-slate-100">
                The Strategic Brief &amp; Operational Constraints
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-950/40 border border-slate-800/80 p-4 rounded-lg">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Core Challenge
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {caseStudy.brief.challenge}
                </p>
              </div>

              <div className="bg-slate-950/40 border border-slate-800/80 p-4 rounded-lg">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Target Objective
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {caseStudy.brief.objective}
                </p>
              </div>

              <div className="bg-slate-950/40 border border-slate-800/80 p-4 rounded-lg">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Governing Stakeholders
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {caseStudy.brief.stakeholders}
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Strategy & Execution */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 pb-2 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/30">
                FRAMEWORK PART 02
              </span>
              <h3 className="text-lg font-serif-luxury font-semibold text-slate-100">
                Strategy, Spatial Engineering &amp; AV Execution
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-lg">
                <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                  Spatial Architecture &amp; Scenography
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {caseStudy.strategyExecution.spatialDesign}
                </p>
              </div>

              <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-lg">
                <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                  Technical AV, Dante Audio &amp; Redundancy
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {caseStudy.strategyExecution.avProduction}
                </p>
              </div>

              <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-lg">
                <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                  Guest Flow, VIP Handling &amp; Concierge
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {caseStudy.strategyExecution.guestExperience}
                </p>
              </div>

              <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-lg">
                <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                  Risk Mitigation, Security &amp; Permits
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {caseStudy.strategyExecution.logisticsRisk}
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Outcome & Metrics */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 pb-2 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded border border-emerald-400/30">
                FRAMEWORK PART 03
              </span>
              <h3 className="text-lg font-serif-luxury font-semibold text-slate-100">
                Quantified Outcomes, ROI &amp; Enterprise Impact
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl text-center">
                <div className="text-3xl font-bold font-serif-luxury text-amber-300 mb-1">
                  {caseStudy.outcomeMetrics.primaryMetric}
                </div>
                <div className="text-xs font-medium text-slate-300">
                  {caseStudy.outcomeMetrics.primaryLabel}
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl text-center">
                <div className="text-3xl font-bold font-serif-luxury text-emerald-400 mb-1">
                  {caseStudy.outcomeMetrics.secondaryMetric}
                </div>
                <div className="text-xs font-medium text-slate-300">
                  {caseStudy.outcomeMetrics.secondaryLabel}
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl text-center">
                <div className="text-3xl font-bold font-serif-luxury text-slate-100 mb-1">
                  {caseStudy.outcomeMetrics.tertiaryMetric}
                </div>
                <div className="text-xs font-medium text-slate-300">
                  {caseStudy.outcomeMetrics.tertiaryLabel}
                </div>
              </div>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-800/40 p-4 rounded-lg text-xs text-emerald-200">
              <strong>Procurement ROI Analysis:</strong> {caseStudy.outcomeMetrics.roiSummary}
            </div>
          </div>

          {/* Stakeholder Testimonial */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 p-6 rounded-xl relative">
            <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 right-4" />
            <p className="text-sm font-serif-luxury italic text-slate-200 leading-relaxed mb-4">
              "{caseStudy.testimonial.quote}"
            </p>
            <div>
              <div className="text-xs font-bold text-amber-300">
                {caseStudy.testimonial.author}
              </div>
              <div className="text-[11px] text-slate-400">
                {caseStudy.testimonial.title} • {caseStudy.testimonial.company}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 flex items-center">
            <Shield className="w-4 h-4 mr-1.5 text-amber-400" />
            Protected by Enterprise Non-Disclosure Agreement (NDA).
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs text-slate-300 hover:text-white bg-slate-800 rounded-md transition-colors"
            >
              Close Framework
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenRFP();
              }}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-200 to-amber-400 hover:from-amber-100 hover:to-amber-300 rounded-md transition-all shadow-md"
            >
              Request Similar Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

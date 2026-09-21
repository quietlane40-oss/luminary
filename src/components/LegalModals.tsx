import React from 'react';
import { X, ShieldCheck, FileCheck, CheckCircle2, Lock } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'cookies' | 'accessibility' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-purple-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-3xl bg-white border border-purple-200 text-purple-950 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-500 hover:text-purple-950 p-2 cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div className="overflow-y-auto pr-2 space-y-4">
            <span className="text-xs font-mono text-purple-700 font-bold uppercase tracking-widest">Enterprise Compliance</span>
            <h2 className="text-2xl font-serif-luxury font-bold text-purple-950">
              Corporate Privacy &amp; Data Protection Policy
            </h2>
            <p className="text-xs text-purple-800/80">
              Last updated: September 2026 • Governing Jurisdictions: US, EU GDPR, UK GDPR, Swiss FADP
            </p>

            <div className="space-y-4 text-xs text-purple-800/85 leading-relaxed pt-2">
              <h4 className="font-bold text-purple-950 uppercase text-[11px] tracking-wider">1. Scope of Enterprise Information Collection</h4>
              <p>
                Luminary Guild Executive Event Group LLC collects corporate executive credentials, procurement contact information, and technical event specifications solely for proposal formulation, Master Services Agreement (MSA) fulfillment, and authorized Microsoft Dynamics 365 lead processing.
              </p>

              <h4 className="font-bold text-purple-950 uppercase text-[11px] tracking-wider">2. Data Residency &amp; Cloud Security Architecture</h4>
              <p>
                All RFP submissions, vendor bids, attendee counts, and CAD venue specifications are encrypted in transit via TLS 1.3 and at rest via AES-256 within Microsoft Azure US/EU Commercial Cloud infrastructure adhering to SOC 2 Type II controls.
              </p>

              <h4 className="font-bold text-purple-950 uppercase text-[11px] tracking-wider">3. Non-Disclosure &amp; Third-Party Restrictions</h4>
              <p>
                Under our strict corporate covenant, client event specifications, guest lists, VIP speaker identities, and budget allocations are never sold, rented, or shared with unapproved third parties. Every member of our executive production team operates under executed mutual Non-Disclosure Agreements (NDAs).
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div className="overflow-y-auto pr-2 space-y-4">
            <span className="text-xs font-mono text-purple-700 font-bold uppercase tracking-widest">Legal Governance</span>
            <h2 className="text-2xl font-serif-luxury font-bold text-purple-950">
              Enterprise Terms of Service &amp; Master Engagement Conditions
            </h2>
            <p className="text-xs text-purple-800/80">
              Version 4.2 • Standard Commercial Baseline for Corporate Engagements
            </p>

            <div className="space-y-4 text-xs text-purple-800/85 leading-relaxed pt-2">
              <h4 className="font-bold text-purple-950 uppercase text-[11px] tracking-wider">1. Master Services Agreement (MSA) Precedence</h4>
              <p>
                All production deliverables, payment schedules, cancellation provisions, and liability umbrellas are governed by the bilateral Master Services Agreement (MSA) executed between Luminary Guild and the Client Procurement Authority.
              </p>

              <h4 className="font-bold text-purple-950 uppercase text-[11px] tracking-wider">2. Insurance &amp; Indemnification Umbrella</h4>
              <p>
                Luminary Guild maintains a $20,000,000 Commercial General Liability and Excess Umbrella Policy underwritten by Lloyd’s of London. Certificates of Additional Insured (COI) are issued directly to client enterprise risk management within 48 hours of contract execution.
              </p>

              <h4 className="font-bold text-purple-950 uppercase text-[11px] tracking-wider">3. Force Majeure &amp; Contested Jurisdiction</h4>
              <p>
                Comprehensive force majeure clauses protect corporate investments in the event of civil emergencies, airspace closures, extreme weather, or municipal order restrictions with guaranteed credit rollovers.
              </p>
            </div>
          </div>
        )}

        {type === 'cookies' && (
          <div className="overflow-y-auto pr-2 space-y-4">
            <span className="text-xs font-mono text-purple-700 font-bold uppercase tracking-widest">Security &amp; Consent</span>
            <h2 className="text-2xl font-serif-luxury font-bold text-purple-950">
              Cookie Consent &amp; Telemetry Management
            </h2>
            <p className="text-xs text-purple-800/80">
              Strictly compliant with ePrivacy Directive and Global Privacy Regulations
            </p>

            <div className="space-y-4 text-xs text-purple-800/85 leading-relaxed pt-2">
              <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-purple-950">Strictly Necessary Cookies</span>
                  <span className="text-[10px] font-mono bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">Always Active</span>
                </div>
                <p className="text-[11px] text-purple-800/80">
                  Required for Microsoft Entra ID authentication, secure RFP session state, and load balancer affinity.
                </p>
              </div>

              <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-purple-950">Performance &amp; Diagnostics</span>
                  <span className="text-[10px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-bold">Active</span>
                </div>
                <p className="text-[11px] text-purple-800/80">
                  Measures latency, CDN asset delivery speeds, and audio/video streaming buffer performance without tracking personal identities.
                </p>
              </div>
            </div>
          </div>
        )}

        {type === 'accessibility' && (
          <div className="overflow-y-auto pr-2 space-y-4">
            <span className="text-xs font-mono text-purple-700 font-bold uppercase tracking-widest">Universal Accessibility</span>
            <h2 className="text-2xl font-serif-luxury font-bold text-purple-950">
              Accessibility Statement (ADA Title III &amp; WCAG 2.1 AA)
            </h2>
            <p className="text-xs text-purple-800/80">
              Commitment to inclusive digital platforms and barrier-free physical event environments
            </p>

            <div className="space-y-4 text-xs text-purple-800/85 leading-relaxed pt-2">
              <h4 className="font-bold text-purple-950 uppercase text-[11px] tracking-wider">1. Digital Accessibility Standards</h4>
              <p>
                Our digital platforms conform to the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. We ensure high-contrast typography, full screen-reader keyboard navigation, ARIA landmarks, and semantic HTML5 structures.
              </p>

              <h4 className="font-bold text-purple-950 uppercase text-[11px] tracking-wider">2. Physical Event &amp; Plenary Inclusivity Mandate</h4>
              <p>
                Every live event produced by Luminary Guild incorporates universal accessibility: ADA-compliant ramp gradients, live real-time CART speech-to-text captioning screens, assistive listening Dante loops, and quiet sensory isolation suites for neurodiverse attendees.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-purple-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold text-purple-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-md transition-colors cursor-pointer shadow-xs"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};

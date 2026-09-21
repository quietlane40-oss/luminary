import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ShieldCheck, ArrowRight, Eye } from 'lucide-react';

interface CapabilitiesDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRFP: () => void;
}

export const CapabilitiesDeckModal: React.FC<CapabilitiesDeckModalProps> = ({ 
  isOpen, 
  onClose,
  onOpenRFP
}) => {
  const [downloaded, setDownloaded] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-purple-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-2xl bg-white border border-purple-200 text-purple-950 rounded-2xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-500 hover:text-purple-950 p-2 cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!downloaded ? (
          <div>
            <div className="text-center mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-700 font-bold">
                2026/2027 Executive Document
              </span>
              <h3 className="text-2xl font-serif-luxury font-bold text-purple-950 mt-1 mb-2">
                Download the Enterprise Capabilities Deck
              </h3>
              <p className="text-xs text-purple-800/80 max-w-md mx-auto">
                Comprehensive 48-page technical dossier covering AV architecture riders, Dante audio failover topologies, spatial case studies, and standard MSA pricing rate cards.
              </p>
            </div>

            {/* Document Preview Graphic Card */}
            <div className="bg-purple-50/70 border border-purple-200 rounded-xl p-5 mb-6 flex items-center space-x-4">
              <div className="w-16 h-20 bg-purple-100 border border-purple-300 rounded-lg flex flex-col items-center justify-center text-purple-800 shrink-0">
                <FileText className="w-8 h-8" />
                <span className="text-[9px] font-mono mt-1 font-bold">PDF (18MB)</span>
              </div>
              <div className="text-xs space-y-1">
                <div className="font-bold text-purple-950">
                  Luminary Guild — Enterprise Capabilities &amp; Technical Specifications
                </div>
                <div className="text-purple-800/80 text-[11px]">
                  Includes: Plenary Staging CADs • Dante System Topologies • ISO 20121 Net-Zero Compliance Audit • Master Rate Cards
                </div>
                <div className="text-emerald-700 font-mono text-[10px] flex items-center font-bold">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Authorized for Procurement &amp; Executive Review
                </div>
              </div>
            </div>

            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-950 mb-1.5">
                  Corporate Work Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="executive@company.com"
                  className="w-full bg-white border border-purple-200 text-purple-950 px-3.5 py-2.5 rounded-lg text-xs focus:outline-none focus:border-purple-500 placeholder:text-purple-300"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-purple-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-lg shadow-sm font-heading transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Executive Capabilities Deck (PDF)</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-serif-luxury font-bold text-purple-950">
              Dossier Dispatched
            </h4>
            <p className="text-xs text-purple-800/85 max-w-sm mx-auto">
              The complete 48-page 2026 Capabilities Deck has been delivered to <strong className="text-purple-950">{email}</strong>. You may also view the digital specification directly inside our blueprint viewer.
            </p>
            <div className="pt-2 flex justify-center space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-purple-950 bg-purple-100 hover:bg-purple-200 rounded-md border border-purple-200 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenRFP();
                }}
                className="px-5 py-2 text-xs font-bold uppercase text-purple-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-md cursor-pointer"
              >
                Initiate RFP Proposal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

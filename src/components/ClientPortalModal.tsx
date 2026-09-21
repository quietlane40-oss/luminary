import React, { useState } from 'react';
import { X, Lock, ExternalLink, ShieldCheck, CheckCircle2, FileText, Calendar, Clock, Download } from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSSOLogin = () => {
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      setIsAuthenticated(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAuthenticated ? (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-amber-400" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Enterprise Client Workspace
            </span>
            <h3 className="text-2xl font-serif-luxury font-bold text-slate-100 mt-1 mb-2">
              Microsoft Entra ID / SharePoint Gateway
            </h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto mb-8">
              Access real-time run-of-show minute-by-minute cue sheets, 3D CAD venue walk-throughs, budget reconciliations, and dedicated Microsoft Teams channels.
            </p>

            <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-xl max-w-md mx-auto space-y-4">
              <button
                onClick={handleSSOLogin}
                disabled={isAuthenticating}
                className="w-full py-3 px-4 rounded-lg text-xs font-semibold text-white bg-[#0078D4] hover:bg-[#006cbd] transition-colors flex items-center justify-center space-x-2.5 shadow-md cursor-pointer"
              >
                <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                  <span className="bg-[#f25022]" />
                  <span className="bg-[#7fba00]" />
                  <span className="bg-[#00a4ef]" />
                  <span className="bg-[#ffb900]" />
                </div>
                <span>{isAuthenticating ? "Authenticating via Microsoft Entra..." : "Sign in with Microsoft 365 (SSO)"}</span>
              </button>

              <div className="text-[11px] text-slate-500">
                Authorized for designated corporate procurement officers, meeting stakeholders, and executive producers only.
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase">Authenticated Session: Microsoft Entra</span>
                <h3 className="text-lg font-serif-luxury font-bold text-slate-100">
                  Active Workspace: Ignite Global Executive Summit 2026
                </h3>
              </div>
              <button 
                onClick={() => setIsAuthenticated(false)}
                className="text-xs text-slate-400 hover:text-slate-200"
              >
                Sign out
              </button>
            </div>

            {/* Quick Live Telemetry Dashboard */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="text-slate-500 text-[10px] uppercase font-mono">Run of Show</div>
                <div className="text-amber-300 font-bold mt-0.5">Keynote Rehearsal: Day -1</div>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="text-slate-500 text-[10px] uppercase font-mono">Budget Health</div>
                <div className="text-emerald-400 font-bold mt-0.5">On Target (0.2% Var)</div>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="text-slate-500 text-[10px] uppercase font-mono">AV Redundancy</div>
                <div className="text-slate-200 font-bold mt-0.5">Dual Hot-Swap Online</div>
              </div>
            </div>

            {/* SharePoint Document Repositories */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Integrated SharePoint &amp; Teams Repositories:
              </div>
              <div className="bg-slate-950/60 border border-slate-800 rounded-xl divide-y divide-slate-800 text-xs">
                <div className="p-3 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
                  <div className="flex items-center space-x-2 text-slate-200">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span>Master_Run_of_Show_Minute_by_Minute_v4.xlsx</span>
                  </div>
                  <button onClick={() => alert('Opening live Excel in Microsoft 365...')} className="text-xs text-amber-300 hover:underline flex items-center">
                    Open <ExternalLink className="w-3 h-3 ml-1" />
                  </button>
                </div>
                <div className="p-3 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
                  <div className="flex items-center space-x-2 text-slate-200">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span>Plenary_Auditorium_Spatial_CAD_3D_Renderings.dwg</span>
                  </div>
                  <button onClick={() => alert('Opening live CAD viewer...')} className="text-xs text-amber-300 hover:underline flex items-center">
                    Inspect <ExternalLink className="w-3 h-3 ml-1" />
                  </button>
                </div>
                <div className="p-3 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
                  <div className="flex items-center space-x-2 text-slate-200">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span>Vendor_Insurance_Underwriting_Lloyds_Binder.pdf</span>
                  </div>
                  <button onClick={() => alert('Opening encrypted PDF...')} className="text-xs text-amber-300 hover:underline flex items-center">
                    View <ExternalLink className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs text-slate-300 hover:text-white bg-slate-800 rounded-md transition-colors"
              >
                Close Portal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

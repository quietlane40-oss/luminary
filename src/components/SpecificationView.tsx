import React, { useState } from 'react';
import { PageView } from '../types';
import { 
  Layers, 
  FileCode, 
  Layout, 
  Compass, 
  Copy, 
  Check, 
  ChevronRight, 
  Code, 
  Sliders, 
  Sparkles, 
  ShieldCheck, 
  Download,
  Terminal,
  ArrowRight
} from 'lucide-react';

interface SpecificationViewProps {
  onNavigate: (page: PageView) => void;
}

export const SpecificationView: React.FC<SpecificationViewProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'sitemap' | 'wireframes' | 'components' | 'snippets'>('sitemap');
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(key);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="bg-[#fbf9fe] min-h-screen text-purple-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-b border-purple-200 pb-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-200 rounded-full px-3.5 py-1 mb-3">
                <Layers className="w-3.5 h-3.5 text-purple-700" />
                <span className="text-xs font-mono uppercase tracking-widest text-purple-800 font-bold">
                  Deliverable Architecture &amp; Technical Specifications
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-purple-950">
                Enterprise UX/UI Blueprint &amp; Code Architecture
              </h1>
              <p className="text-xs sm:text-sm text-purple-800/80 mt-1 max-w-3xl">
                The technical design documentation, information architecture, page wireframes, and production-ready code templates for Microsoft-business-level event planning.
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => onNavigate('home')}
                className="px-4 py-2 text-xs font-bold text-purple-950 hover:bg-purple-100 bg-white border border-purple-200 rounded-lg transition-colors flex items-center space-x-1.5 cursor-pointer shadow-xs"
              >
                <span>Return to Live Experience</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </div>
          </div>

          {/* Sub-nav Tabs */}
          <div className="flex flex-wrap gap-2 mt-8">
            {[
              { id: 'sitemap', label: '1. Master Sitemap & Navigation Structure', icon: Compass },
              { id: 'wireframes', label: '2. Wireframe Specifications (Home & RFP)', icon: Layout },
              { id: 'components', label: '3. Component & UI Specifications', icon: Sliders },
              { id: 'snippets', label: '4. Production Code Snippet Templates', icon: FileCode },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-purple-950 shadow-xs'
                      : 'bg-white border border-purple-200 text-purple-800 hover:text-purple-950 hover:bg-purple-50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: SITEMAP & NAVIGATION BAR LAYOUT */}
        {activeTab === 'sitemap' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl font-serif-luxury font-bold text-purple-950 mb-2">
                Executive Information Architecture (IA) &amp; Master Sitemap
              </h2>
              <p className="text-xs text-purple-800/80 mb-6">
                Designed to satisfy three distinct enterprise personas: Corporate Procurement / C-Suite Stakeholders (evaluating credibility, SLAs, and MSAs), Luxury Hosts (evaluating high-end sensory aesthetics), and Technical Production Leads (evaluating AV redundancy).
              </p>

              {/* Visual Tree Graph */}
              <div className="bg-purple-50/70 border border-purple-200 rounded-xl p-6 font-mono text-xs overflow-x-auto">
                <div className="text-purple-950 font-bold pb-2 border-b border-purple-200">
                  ROOT DOMAIN (/) — Luminary Guild Executive Events
                </div>
                <div className="pt-4 pl-4 space-y-3 text-purple-900">
                  <div>
                    <span className="text-purple-950 font-bold">├── [01] 1.0 HOME PAGE (/)</span>
                    <div className="pl-6 text-purple-800/85 text-[11px] space-y-0.5 mt-1">
                      <div>├─ 1.1 Hero Section (Video simulation, $450M stats, primary "Request a Proposal" CTA)</div>
                      <div>├─ 1.2 Enterprise Client Ribbon (Fortune 100 social proof: Microsoft, Goldman, Cartier, Pfizer)</div>
                      <div>├─ 1.3 Strategic Pillars (AV Redundancy, Spatial Scenography, VIP Concierge)</div>
                      <div>├─ 1.4 Featured Case Studies Carousel (Three-Part Framework: Brief / Strategy / Metrics)</div>
                      <div>├─ 1.5 Governance &amp; Insurance Seal ($20M Umbrella, ISO 20121, CMP Credentials)</div>
                      <div>└─ 1.6 Lead Magnet: Capabilities Deck (PDF Download)</div>
                    </div>
                  </div>

                  <div>
                    <span className="text-purple-950 font-bold">├── [02] 2.0 DEDICATED SERVICES (/services)</span>
                    <div className="pl-6 text-purple-800/85 text-[11px] space-y-0.5 mt-1">
                      <div>├─ 2.1 Corporate Events &amp; Conferences (/services/corporate-conferences) [AV, Dante, 15k pax scale]</div>
                      <div>├─ 2.2 Brand Activations &amp; Launches (/services/brand-activations) [Spatial design, projection mapping]</div>
                      <div>└─ 2.3 Galas &amp; Social Celebrations (/services/galas-celebrations) [3-Star Michelin, auctions, decor]</div>
                    </div>
                  </div>

                  <div>
                    <span className="text-purple-950 font-bold">├── [03] 3.0 PORTFOLIO &amp; CASE STUDIES (/case-studies)</span>
                    <div className="pl-6 text-purple-800/85 text-[11px] space-y-0.5 mt-1">
                      <div>├─ 3.1 Structured Framework Modal (The Brief, Strategy &amp; Execution, Outcome &amp; Metrics)</div>
                      <div>└─ 3.2 Filterable Taxonomy: Scale, Category, Industry, Budget Bracket</div>
                    </div>
                  </div>

                  <div>
                    <span className="text-purple-950 font-bold">├── [04] 4.0 ABOUT &amp; CERTIFIED LEADERSHIP (/about)</span>
                    <div className="pl-6 text-purple-800/85 text-[11px] space-y-0.5 mt-1">
                      <div>├─ 4.1 Executive Pedigree &amp; Mission Statement (22+ Years, Ex-Microsoft/Four Seasons)</div>
                      <div>├─ 4.2 Accredited Leadership (CMP, CMM, DES, AIA, CTS-D Profiles)</div>
                      <div>└─ 4.3 Vetted Global Consortium (400+ Tier-1 vendors, MSA Pre-negotiated rates)</div>
                    </div>
                  </div>

                  <div>
                    <span className="text-purple-950 font-bold">├── [05] 5.0 INVESTMENT &amp; PRICING GUIDANCE (/investment)</span>
                    <div className="pl-6 text-purple-800/85 text-[11px] space-y-0.5 mt-1">
                      <div>├─ 5.1 Baseline Engagement Models (Strategic Advisory, Turnkey Production, Global MSA)</div>
                      <div>├─ 5.2 Budget Pre-Qualification Matrix ($45k advisory min, $150k production min)</div>
                      <div>└─ 5.3 Interactive Event Budget &amp; Resource Estimator Calculator</div>
                    </div>
                  </div>

                  <div>
                    <span className="text-purple-950 font-bold">├── [06] 6.0 INQUIRY &amp; RFP ENGINE (/rfp)</span>
                    <div className="pl-6 text-purple-800/85 text-[11px] space-y-0.5 mt-1">
                      <div>├─ 6.1 Multi-Step RFP Form (Scope, Dates &amp; Scale, Production/AV, Procurement/Upload)</div>
                      <div>├─ 6.2 Microsoft Dynamics 365 / Power Automate Inbound Webhook Pipeline</div>
                      <div>└─ 6.3 Microsoft Bookings / Teams Direct 30-Minute Consultation Scheduler</div>
                    </div>
                  </div>

                  <div>
                    <span className="text-purple-950 font-bold">└── [07] 7.0 COMPLIANCE, SECURITY &amp; PORTALS</span>
                    <div className="pl-6 text-purple-800/85 text-[11px] space-y-0.5 mt-1">
                      <div>├─ 7.1 Client Portal Gateway (Microsoft Entra ID / SharePoint / Teams SSO)</div>
                      <div>├─ 7.2 Enterprise Privacy Policy (SOC 2, GDPR, CCPA)</div>
                      <div>├─ 7.3 Master Terms of Service &amp; $20M Insurance Underwriting</div>
                      <div>├─ 7.4 Cookie Consent &amp; Telemetry Manager</div>
                      <div>└─ 7.5 Universal Accessibility Statement (ADA Title III, WCAG 2.1 AA)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Bar Layout Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-purple-200 rounded-xl p-6 shadow-xs">
                <h3 className="text-base font-serif-luxury font-bold text-purple-950 mb-3">
                  Header Navigation Architecture
                </h3>
                <div className="space-y-3 text-xs text-purple-900">
                  <div>
                    <strong className="text-purple-950">Utility Bar (Top):</strong> Live Procurement Alert (MSA Allocation), $20M Underwritten proof badge, Download Capabilities Deck (PDF), Client Portal (SharePoint SSO).
                  </div>
                  <div>
                    <strong className="text-purple-950">Primary Nav (Center):</strong> Brand Logo with monogram "LG", Overview, Services Dropdown (Conferences, Activations, Galas), Case Studies, Leadership, Investment Models.
                  </div>
                  <div>
                    <strong className="text-purple-950">Action Cluster (Right):</strong> Floating "Schedule Call" (Microsoft Bookings), "Request Proposal" (High-contrast Gold Primary CTA).
                  </div>
                </div>
              </div>

              <div className="bg-white border border-purple-200 rounded-xl p-6 shadow-xs">
                <h3 className="text-base font-serif-luxury font-bold text-purple-950 mb-3">
                  Footer Architecture
                </h3>
                <div className="space-y-3 text-xs text-purple-900">
                  <div>
                    <strong className="text-purple-950">Trust Badges Ribbon:</strong> MPI Approved, PCMA Accredited, CMP Certified, $20M Lloyds Umbrella, ISO 20121 Net-Zero, SOC-2 Type II.
                  </div>
                  <div>
                    <strong className="text-purple-950">Columns:</strong> Brand Statement &amp; Metros (NYC, London, Geneva, Seattle), Capabilities Links, Architecture &amp; Governance Links, Executive Quarterly Briefing Signup.
                  </div>
                  <div>
                    <strong className="text-purple-950">Legal Strip:</strong> Copyright, Privacy, Terms, Cookie Consent, WCAG 2.1 AA Statement.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: WIREFRAME SPECIFICATIONS FOR HOME PAGE & INQUIRY/RFP PAGE */}
        {activeTab === 'wireframes' && (
          <div className="space-y-10 animate-fadeIn">
            {/* WIREFRAME: HOME PAGE */}
            <div className="bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-purple-200">
                <div>
                  <span className="text-xs font-mono text-purple-700 font-bold uppercase">Wireframe Specification 01</span>
                  <h2 className="text-xl font-serif-luxury font-bold text-purple-950">
                    Home Page Wireframe Layout &amp; Copy Specifications
                  </h2>
                </div>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-xs text-purple-700 font-bold hover:underline flex items-center cursor-pointer"
                >
                  View live Home view <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Block-by-Block Wireframe Breakdown */}
              <div className="space-y-6 text-xs">
                {/* Block 1: Hero */}
                <div className="border border-purple-200 rounded-xl p-4 bg-purple-50/60">
                  <div className="flex justify-between items-center text-purple-950 font-mono font-bold mb-2">
                    <span>[BLOCK 1.0] EXECUTIVE HERO &amp; CINEMATIC CANVAS</span>
                    <span className="text-[10px] text-purple-600 uppercase">Above the fold (100vh)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-purple-900">
                    <div>
                      <div className="font-bold text-purple-950">Wireframe Layout Elements:</div>
                      <ul className="list-disc list-inside space-y-1 text-purple-800/85 mt-1">
                        <li>Background: 4K HDR cinematic ambient video loop with play/pause and audio HUD controls.</li>
                        <li>Pre-heading: Monospaced gold badge: "Enterprise Event Architecture • Global Scale".</li>
                        <li>Display H1: 56px Serif Typography ("Where Fortune 100 Ambition Meets Flawless Production").</li>
                        <li>Body Copy: Sub-headline positioned at 65-75ch maximum readable measure.</li>
                        <li>Dual Action Buttons: Primary Gold Button ("Request a Proposal") + Secondary Purple Outline ("Schedule Discovery Briefing").</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border border-purple-200 space-y-1.5 shadow-xs">
                      <div className="font-bold text-purple-950">Executive Proof Metrics Strip:</div>
                      <div className="text-purple-800/90">• $450M+ Event Spend Administered</div>
                      <div className="text-purple-800/90">• 99.99% AV Broadcast Uptime SLA (Dante Redundancy)</div>
                      <div className="text-purple-800/90">• 100% CMP/CMM Lead Certified Producers</div>
                      <div className="text-purple-800/90">• 40+ Metros Worldwide Execution Reach</div>
                    </div>
                  </div>
                </div>

                {/* Block 2: Logo Ribbon */}
                <div className="border border-purple-200 rounded-xl p-4 bg-purple-50/60">
                  <div className="text-purple-950 font-mono font-bold mb-2">
                    [BLOCK 2.0] SOCIAL PROOF &amp; ENTERPRISE LOGO RIBBON
                  </div>
                  <p className="text-purple-800/85 mb-2">
                    Subtle, high-contrast enterprise ticker showcasing vetted procurement relationships: Microsoft, Goldman Sachs, Cartier, Pfizer, McKinsey &amp; Company, Palantir, Salesforce, LVMH.
                  </p>
                </div>

                {/* Block 3: Disciplines */}
                <div className="border border-purple-200 rounded-xl p-4 bg-purple-50/60">
                  <div className="text-purple-950 font-mono font-bold mb-2">
                    [BLOCK 3.0] THE THREE CORE PRODUCTION DISCIPLINES (INTERACTIVE MATRIX)
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-purple-900">
                    <div className="p-3 bg-white rounded border border-purple-200 shadow-xs">
                      <div className="font-bold text-purple-950">1. Corporate Conferences</div>
                      <p className="text-purple-800/80 text-[11px] mt-1">Plenary stagecraft, SMPTE 2110 IP video, Dante audio networks, 500-15k+ scale, hybrid streaming.</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-purple-200 shadow-xs">
                      <div className="font-bold text-purple-950">2. Brand Activations</div>
                      <p className="text-purple-800/80 text-[11px] mt-1">Spatial architecture, volumetric holographic displays, sensory immersion, strict press NDAs.</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-purple-200 shadow-xs">
                      <div className="font-bold text-purple-950">3. Galas &amp; Benefactor Auctions</div>
                      <p className="text-purple-800/80 text-[11px] mt-1">98+ CRI table pin-spotting, 3-star Michelin culinary choreography, encrypted bidding terminals.</p>
                    </div>
                  </div>
                </div>

                {/* Block 4: Featured Framework Showcase */}
                <div className="border border-purple-200 rounded-xl p-4 bg-purple-50/60">
                  <div className="text-purple-950 font-mono font-bold mb-2">
                    [BLOCK 4.0] STRUCTURED FRAMEWORK CASE STUDY CARDS
                  </div>
                  <p className="text-purple-800/85">
                    Bypasses generic portfolio imagery by structuring each card with 3 standardized sections: <strong className="text-purple-950">The Brief</strong> (Challenge &amp; Objective) → <strong className="text-purple-950">Strategy &amp; Execution</strong> (Spatial &amp; AV) → <strong className="text-purple-950">Outcome &amp; Metrics</strong> (CSAT, Pipeline, Zero-Downtime SLA).
                  </p>
                </div>
              </div>
            </div>

            {/* WIREFRAME: INQUIRY / RFP PAGE */}
            <div className="bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-purple-200">
                <div>
                  <span className="text-xs font-mono text-purple-700 font-bold uppercase">Wireframe Specification 02</span>
                  <h2 className="text-xl font-serif-luxury font-bold text-purple-950">
                    Inquiry / RFP &amp; Microsoft Bookings Wireframe Structure
                  </h2>
                </div>
                <button
                  onClick={() => onNavigate('rfp')}
                  className="text-xs text-purple-700 font-bold hover:underline flex items-center cursor-pointer"
                >
                  View live RFP view <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div className="border border-purple-200 rounded-xl p-4 bg-purple-50/60 space-y-3">
                  <div className="text-purple-950 font-mono font-bold">
                    STEP-BY-STEP PROGRESSIVE DISCLOSURE WIZARD:
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-white rounded border border-purple-200 space-y-1 shadow-xs">
                      <strong className="text-purple-950">Step 1: Event Scope &amp; Purpose</strong>
                      <p className="text-purple-800/80">Event type radio grid, Delivery format (In-person / Hybrid / Virtual), and Strategic business objective textarea.</p>
                    </div>

                    <div className="p-3 bg-white rounded border border-purple-200 space-y-1 shadow-xs">
                      <strong className="text-purple-950">Step 2: Dates, Attendance Scale &amp; Location</strong>
                      <p className="text-purple-800/80">Target date selector with date flexibility window, numeric guest count field (50-50,000+), preferred city, venue status toggle.</p>
                    </div>

                    <div className="p-3 bg-white rounded border border-purple-200 space-y-1 shadow-xs">
                      <strong className="text-purple-950">Step 3: Technical AV &amp; Production Budget Scope</strong>
                      <p className="text-purple-800/80">Pre-qualified budget brackets ($100k-$250k, $250k-$500k, $500k-$1M, $1M+), technical capabilities multi-select pill checkboxes.</p>
                    </div>

                    <div className="p-3 bg-white rounded border border-purple-200 space-y-1 shadow-xs">
                      <strong className="text-purple-950">Step 4: Organization, Procurement Code &amp; Upload</strong>
                      <p className="text-purple-800/80">Corporate entity details, procurement MSA code, drag &amp; drop PDF/DOCX technical specification uploader.</p>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-3 rounded border border-emerald-200 text-emerald-900">
                    <strong className="font-mono text-emerald-800 font-bold">Backend Telemetry Hook:</strong> Form submission triggers an automated POST to Microsoft Dynamics 365 / Power Automate lead capture webhook with JSON payload validation and 4-hour SLA assignment.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: COMPONENT SPECIFICATIONS */}
        {activeTab === 'components' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl font-serif-luxury font-bold text-purple-950 mb-2">
                Executive Component Specifications &amp; Design Tokens
              </h2>
              <p className="text-xs text-purple-800/80 mb-6">
                System components adhere strictly to accessibility contrast ratios (WCAG 2.1 AA &gt; 4.5:1), mathematical nested border-radius logic, and Microsoft enterprise typography hierarchy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                {/* Spec 1: Form Fields */}
                <div className="border border-purple-200 bg-purple-50/60 p-5 rounded-xl space-y-3">
                  <div className="text-purple-950 font-mono font-bold uppercase tracking-wider">
                    01. Form Field Specifications
                  </div>
                  <div className="space-y-2 text-purple-900">
                    <div><strong>Base Background:</strong> <code className="text-purple-950 bg-white px-1.5 py-0.5 rounded border border-purple-200">#FFFFFF (white)</code></div>
                    <div><strong>Border Inactive:</strong> <code className="text-purple-950 bg-white px-1.5 py-0.5 rounded border border-purple-200">1px solid #E9D5FF (purple-200)</code></div>
                    <div><strong>Border Focus:</strong> <code className="text-purple-950 bg-white px-1.5 py-0.5 rounded border border-purple-200">1px solid #7E22CE (purple-700)</code></div>
                    <div><strong>Typography:</strong> 12px Plus Jakarta Sans / Inter; 44px min touch target on mobile.</div>
                    <div><strong>Validation:</strong> Real-time regex with error labels announced via aria-live.</div>
                  </div>
                </div>

                {/* Spec 2: Case Study Card Design */}
                <div className="border border-purple-200 bg-purple-50/60 p-5 rounded-xl space-y-3">
                  <div className="text-purple-950 font-mono font-bold uppercase tracking-wider">
                    02. Case Study Card Spec
                  </div>
                  <div className="space-y-2 text-purple-900">
                    <div><strong>Image Aspect:</strong> 16:10 ratio with subtle high-contrast framing.</div>
                    <div><strong>Metric Ribbon:</strong> Prominent floating pill anchoring Key Outcome (e.g. 99.8% CSAT).</div>
                    <div><strong>Structured Rows:</strong> Fixed 3-line breakdown: The Brief, Strategy, Outcome.</div>
                    <div><strong>Hover State:</strong> -4px Y-translation with 0.35s ease-out curve + border highlight.</div>
                  </div>
                </div>

                {/* Spec 3: ROI Calculator UI Outline */}
                <div className="border border-purple-200 bg-purple-50/60 p-5 rounded-xl space-y-3">
                  <div className="text-purple-950 font-mono font-bold uppercase tracking-wider">
                    03. ROI &amp; Budget Calculator
                  </div>
                  <div className="space-y-2 text-purple-900">
                    <div><strong>Input Knobs:</strong> Event type selector, 100–8,000 attendee slider, AV redundancy tier.</div>
                    <div><strong>Dynamic Calculation:</strong> Real-time normalized cost-per-attendee algorithmic matrix.</div>
                    <div><strong>Outputs:</strong> Range bracket, progress bars for AV/Spatial/Hospitality distribution.</div>
                    <div><strong>Procurement Benchmarks:</strong> Historical influenced sales pipeline ratio (4.2x spend).</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PRODUCTION CODE SNIPPET TEMPLATES */}
        {activeTab === 'snippets' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl font-serif-luxury font-bold text-purple-950 mb-2">
                Production-Ready Code Snippets (React + Tailwind CSS)
              </h2>
              <p className="text-xs text-purple-800/80 mb-6">
                Direct drop-in components implementing the executive design system, accessible form structures, and structured case study cards.
              </p>

              {/* Snippet 1: Executive Hero Section */}
              <div className="mb-8 border border-purple-200 rounded-xl overflow-hidden bg-white shadow-xs">
                <div className="bg-purple-100/70 px-4 py-3 flex items-center justify-between border-b border-purple-200">
                  <span className="text-xs font-mono text-purple-950 font-bold">
                    Template A: Executive Hero Section Component
                  </span>
                  <button
                    onClick={() => copyToClipboard('hero', HERO_CODE_SNIPPET)}
                    className="text-xs text-purple-700 hover:text-purple-950 font-bold flex items-center space-x-1 cursor-pointer"
                  >
                    {copiedSnippet === 'hero' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSnippet === 'hero' ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>
                <div className="p-4 text-xs font-mono bg-[#1a0f2b] text-purple-100 overflow-x-auto max-h-72">
                  <pre>{HERO_CODE_SNIPPET}</pre>
                </div>
              </div>

              {/* Snippet 2: Multi-Step RFP Form */}
              <div className="mb-8 border border-purple-200 rounded-xl overflow-hidden bg-white shadow-xs">
                <div className="bg-purple-100/70 px-4 py-3 flex items-center justify-between border-b border-purple-200">
                  <span className="text-xs font-mono text-purple-950 font-bold">
                    Template B: Multi-Step Interactive RFP Engine
                  </span>
                  <button
                    onClick={() => copyToClipboard('rfp', RFP_CODE_SNIPPET)}
                    className="text-xs text-purple-700 hover:text-purple-950 font-bold flex items-center space-x-1 cursor-pointer"
                  >
                    {copiedSnippet === 'rfp' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSnippet === 'rfp' ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>
                <div className="p-4 text-xs font-mono bg-[#1a0f2b] text-purple-100 overflow-x-auto max-h-72">
                  <pre>{RFP_CODE_SNIPPET}</pre>
                </div>
              </div>

              {/* Snippet 3: Case Study Grid Component */}
              <div className="border border-purple-200 rounded-xl overflow-hidden bg-white shadow-xs">
                <div className="bg-purple-100/70 px-4 py-3 flex items-center justify-between border-b border-purple-200">
                  <span className="text-xs font-mono text-purple-950 font-bold">
                    Template C: Structured Case Study Framework Grid
                  </span>
                  <button
                    onClick={() => copyToClipboard('grid', CASE_STUDY_GRID_SNIPPET)}
                    className="text-xs text-purple-700 hover:text-purple-950 font-bold flex items-center space-x-1 cursor-pointer"
                  >
                    {copiedSnippet === 'grid' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSnippet === 'grid' ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>
                <div className="p-4 text-xs font-mono bg-[#1a0f2b] text-purple-100 overflow-x-auto max-h-72">
                  <pre>{CASE_STUDY_GRID_SNIPPET}</pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Raw Snippet Constants for copying
const HERO_CODE_SNIPPET = `// Executive Hero Section Component (React + Tailwind CSS)
import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';

export const ExecutiveHero = ({ onRequestProposal, onScheduleBriefing }) => {
  return (
    <section className="relative bg-slate-950 text-slate-100 py-24 px-6 lg:px-8 border-b border-slate-800 overflow-hidden">
      {/* Ambient background canvas */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-5xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-slate-900 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-300">
            Enterprise Event Architecture • Global Scale
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white leading-tight mb-6">
          Where Fortune 100 Ambition Meets Flawless Production.
        </h1>

        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-10">
          Flagship corporate congresses, high-security product unveilings, and discreet benefactor galas.
          Engineered with military-grade AV redundancy, Dante audio networking, and bespoke spatial elegance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button 
            onClick={onRequestProposal}
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-300 to-amber-500 text-slate-950 rounded-md shadow-lg hover:from-amber-200 hover:to-amber-400 transition-all flex items-center justify-center space-x-2"
          >
            <span>Request a Proposal (RFP)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={onScheduleBriefing}
            className="px-6 py-4 text-xs font-medium text-slate-200 bg-slate-900/80 border border-slate-700 rounded-md hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Schedule Discovery Call</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Statistical Proof Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-800">
          <div>
            <div className="text-3xl font-bold font-serif text-white">$450M+</div>
            <div className="text-xs text-slate-400 uppercase font-mono mt-1">Event Spend Managed</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-serif text-amber-300">99.99%</div>
            <div className="text-xs text-slate-400 uppercase font-mono mt-1">AV Uptime SLA</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-serif text-white">100%</div>
            <div className="text-xs text-slate-400 uppercase font-mono mt-1">CMP/CMM Producers</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-serif text-white">40+ Metros</div>
            <div className="text-xs text-slate-400 uppercase font-mono mt-1">Global Reach</div>
          </div>
        </div>
      </div>
    </section>
  );
};`;

const RFP_CODE_SNIPPET = `// Multi-Step Interactive RFP Form Component (React + Tailwind CSS)
import React, { useState } from 'react';

export const MultiStepRFPForm = ({ onSubmitToDynamics }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: 'Corporate Global Conference',
    guestCount: 1000,
    budgetTier: '$500,000 - $1,000,000',
    company: '',
    email: ''
  });

  const nextStep = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else onSubmitToDynamics(formData);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-2xl mx-auto text-slate-100">
      <div className="flex justify-between text-xs font-mono text-amber-400 mb-6 pb-2 border-b border-slate-800">
        <span>STEP {step} OF 3</span>
        <span>MICROSOFT DYNAMICS 365 LEAD CAPTURE</span>
      </div>

      <form onSubmit={nextStep} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white">1. Event Scope & Classification</h3>
            <select 
              value={formData.eventType}
              onChange={(e) => setFormData({...formData, eventType: e.target.value})}
              className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-xs text-slate-200"
            >
              <option>Corporate Global Conference</option>
              <option>Brand Activation & Product Launch</option>
              <option>Luxury Gala & Benefactor Auction</option>
            </select>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white">2. Guest Scale & Production Budget</h3>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Expected Attendee Count</label>
              <input 
                type="number"
                value={formData.guestCount}
                onChange={(e) => setFormData({...formData, guestCount: Number(e.target.value)})}
                className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-xs text-slate-200 font-mono"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-white">3. Enterprise Organization Details</h3>
            <input 
              type="text"
              placeholder="Enterprise / Corporation Name"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-xs text-slate-200"
              required
            />
            <input 
              type="email"
              placeholder="Executive Work Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-xs text-slate-200"
              required
            />
          </div>
        )}

        <div className="flex justify-between pt-4 border-t border-slate-800">
          {step > 1 && (
            <button 
              type="button" 
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 text-xs bg-slate-800 rounded text-slate-300"
            >
              Previous
            </button>
          )}
          <button 
            type="submit"
            className="ml-auto px-6 py-2.5 text-xs font-bold uppercase bg-amber-400 text-slate-950 rounded hover:bg-amber-300 transition-colors"
          >
            {step === 3 ? "Submit Formal RFP" : "Continue"}
          </button>
        </div>
      </form>
    </div>
  );
};`;

const CASE_STUDY_GRID_SNIPPET = `// Structured Framework Case Study Grid (React + Tailwind CSS)
import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export const CaseStudyGrid = ({ caseStudies, onSelectStudy }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {caseStudies.map((item) => (
        <div 
          key={item.id}
          onClick={() => onSelectStudy(item)}
          className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
        >
          <div className="relative h-60 bg-slate-950">
            <img src={item.heroImage} alt={item.title + ' event case study'} loading="lazy" className="w-full h-full object-cover opacity-85" />
            <div className="absolute top-4 left-4 bg-slate-950/80 text-amber-300 text-xs px-3 py-1 rounded-full border border-amber-500/30">
              {item.categoryLabel}
            </div>
            <div className="absolute bottom-3 left-4 right-4 bg-slate-950/90 p-3 rounded border border-slate-800 flex justify-between items-center">
              <span className="text-xs font-bold text-amber-300 flex items-center">
                <TrendingUp className="w-3.5 h-3.5 mr-1" />
                {item.outcomeMetrics.primaryMetric} {item.outcomeMetrics.primaryLabel}
              </span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </div>
          </div>

          <div className="p-6 space-y-3">
            <h3 className="text-lg font-serif font-bold text-slate-100">{item.title}</h3>
            
            {/* The 3-part structured framework preview */}
            <div className="border-t border-slate-800 pt-3 text-xs space-y-1.5">
              <div><strong className="text-slate-300">Brief:</strong> <span className="text-slate-400">{item.brief.challenge}</span></div>
              <div><strong className="text-amber-400">Strategy:</strong> <span className="text-slate-400">{item.strategyExecution.spatialDesign}</span></div>
              <div><strong className="text-emerald-400">Metrics:</strong> <span className="text-slate-300">{item.outcomeMetrics.roiSummary}</span></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};`;

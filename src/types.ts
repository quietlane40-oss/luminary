export type PageView = 
  | 'home'
  | 'corporate-conferences'
  | 'brand-activations'
  | 'galas-celebrations'
  | 'portfolio'
  | 'about'
  | 'pricing'
  | 'rfp';

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'corporate' | 'activation' | 'gala' | 'hybrid';
  categoryLabel: string;
  year: string;
  location: string;
  guestCount: string;
  budgetBracket: string;
  heroImage: string;
  summary: string;
  brief: {
    challenge: string;
    objective: string;
    stakeholders: string;
  };
  strategyExecution: {
    spatialDesign: string;
    avProduction: string;
    guestExperience: string;
    logisticsRisk: string;
  };
  outcomeMetrics: {
    primaryMetric: string;
    primaryLabel: string;
    secondaryMetric: string;
    secondaryLabel: string;
    tertiaryMetric: string;
    tertiaryLabel: string;
    roiSummary: string;
  };
  testimonial: {
    quote: string;
    author: string;
    title: string;
    company: string;
  };
  tags: string[];
}

export interface LeadershipMember {
  name: string;
  role: string;
  credentials: string[]; // e.g. ["CMP", "CMM", "DES"]
  bio: string;
  experienceYears: number;
  formerAffiliations: string[];
  image: string;
  specialty: string;
}

export interface PricingModel {
  id: string;
  tierName: string;
  targetClient: string;
  investmentBaseline: string;
  description: string;
  deliverables: string[];
  serviceScope: {
    conceptDesign: boolean;
    technicalAVRiders: boolean;
    onSiteExecutiveProducers: string;
    vendorManagement: string;
    complianceRiskAudit: boolean;
    postEventAnalytics: boolean;
  };
  popular?: boolean;
}

export interface RFPFormData {
  // Step 1: Event Scope
  eventType: string;
  strategicObjective: string;
  format: 'in-person' | 'hybrid' | 'virtual';
  // Step 2: Date, Scale & Location
  targetDate: string;
  flexibility: string;
  guestCount: number;
  preferredCity: string;
  venueStatus: 'secured' | 'shortlisted' | 'needs-scouting';
  // Step 3: Production & Budget
  budgetTier: string;
  avRequirements: string[];
  productionLevel: string;
  // Step 4: Contact & Procurement Info
  companyName: string;
  contactName: string;
  contactTitle: string;
  email: string;
  phone: string;
  procurementCode?: string;
  additionalNotes?: string;
  fileName?: string;
}

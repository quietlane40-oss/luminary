import React, { useId, useState } from 'react';
import { PageView } from '../types';
import { PRICING_MODELS } from '../data/mockData';
import {
  Calculator,
  Check,
  TrendingUp,
} from 'lucide-react';

interface InvestmentPricingViewProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
}

type EventType = 'wedding' | 'corporate' | 'activation' | 'gala';
type GuestScale = 'small' | 'medium' | 'large' | 'premium';
type DecorationTier = 'essentials' | 'signature' | 'grand';
type HospitalityTier = 'standard' | 'premium';
type ProductionLevel = 'standard' | 'enhanced' | 'immersive';

export const InvestmentPricingView: React.FC<InvestmentPricingViewProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const guestsInputId = useId();

  // Calculator state
  const [eventType, setEventType] = useState<EventType>('wedding');
  const [guests, setGuests] = useState<number>(300);
  const [decorationTier, setDecorationTier] =
    useState<DecorationTier>('signature');
  const [hospitalityTier, setHospitalityTier] =
    useState<HospitalityTier>('standard');
  const [productionLevel, setProductionLevel] =
    useState<ProductionLevel>('standard');

  /*
   * Pricing is intentionally tied to the actual PRICING_MODELS:
   *
   * Celebration Essentials  -> Ksh 35,000
   * Signature Elegance     -> Ksh 150,000
   * Grand Horizon          -> Ksh 200,000+
   *
   * The calculator estimates the service investment based on:
   * - selected package
   * - guest count
   * - event type
   * - hospitality requirements
   * - production / styling complexity
   *
   * The result is never allowed to fall below the package baseline.
   */
  const calculateBudget = () => {
    const packageBase: Record<DecorationTier, number> = {
      essentials: 35000,
      signature: 150000,
      grand: 200000,
    };

    const packageNames: Record<DecorationTier, string> = {
      essentials: 'The Celebration Essentials Tier',
      signature: 'The Signature Elegance Tier',
      grand: 'The Grand Horizon Tier',
    };

    /*
     * Guest-scale multipliers.
     *
     * These are service-scaling factors, not claims about venue,
     * catering, transport, or supplier costs.
     */
    let guestMultiplier = 1;

    if (guests <= 150) {
      guestMultiplier = 0.90;
    } else if (guests <= 500) {
      guestMultiplier = 1;
    } else if (guests <= 1000) {
      guestMultiplier = 1.15;
    } else if (guests <= 2500) {
      guestMultiplier = 1.30;
    } else {
      guestMultiplier = 1.50;
    }

    /*
     * Event complexity.
     */
    const eventMultiplier: Record<EventType, number> = {
      wedding: 1.05,
      corporate: 1.10,
      activation: 1.15,
      gala: 1.20,
    };

    /*
     * Hospitality / guest experience.
     */
    const hospitalityMultiplier: Record<HospitalityTier, number> = {
      standard: 1,
      premium: 1.12,
    };

    /*
     * Styling / production complexity.
     */
    const productionMultiplier: Record<ProductionLevel, number> = {
      standard: 1,
      enhanced: 1.12,
      immersive: 1.25,
    };

    /*
     * Grand Horizon is intended for bespoke installations,
     * immersive features and VIP management. Smaller events
     * therefore do not automatically need to use it.
     */
    const rawEstimate =
      packageBase[decorationTier] *
      guestMultiplier *
      eventMultiplier[eventType] *
      hospitalityMultiplier[hospitalityTier] *
      productionMultiplier[productionLevel];

    /*
     * Signature Elegance includes a 15-18% production fee.
     * We use the midpoint (16.5%) for the calculator estimate.
     */
    const productionFee =
      decorationTier === 'signature' ? 0.165 : 0;

    const estimateWithProductionFee =
      rawEstimate * (1 + productionFee);

    /*
     * Enforce package minimums.
     */
    const minimumInvestment = packageBase[decorationTier];

    const estimatedInvestment = Math.max(
      minimumInvestment,
      estimateWithProductionFee
    );

    /*
     * Create a practical quotation range.
     * This is an indicative planning range rather than a quotation.
     */
    const lowerEstimate =
      Math.floor((estimatedInvestment * 0.95) / 5000) * 5000;

    const upperEstimate =
      Math.ceil((estimatedInvestment * 1.10) / 5000) * 5000;

    /*
     * Never allow the lower estimate to fall below
     * the published package baseline.
     */
    const minRange = Math.max(
      minimumInvestment,
      lowerEstimate
    );

    const maxRange = Math.max(
      minRange,
      upperEstimate
    );

    /*
     * Resource allocation changes according to the selected
     * event requirements.
     */
    let decorationShare = 45;
    let coordinationShare = 25;
    let guestExperienceShare = 20;
    let productionShare = 10;

    if (eventType === 'corporate') {
      decorationShare = 35;
      coordinationShare = 30;
      guestExperienceShare = 15;
      productionShare = 20;
    }

    if (eventType === 'activation') {
      decorationShare = 30;
      coordinationShare = 25;
      guestExperienceShare = 15;
      productionShare = 30;
    }

    if (eventType === 'gala') {
      decorationShare = 40;
      coordinationShare = 25;
      guestExperienceShare = 25;
      productionShare = 10;
    }

    if (decorationTier === 'grand') {
      decorationShare += 5;
      productionShare += 5;
      coordinationShare -= 5;
      guestExperienceShare -= 5;
    }

    const totalShares =
      decorationShare +
      coordinationShare +
      guestExperienceShare +
      productionShare;

    /*
     * Normalize percentages to exactly 100%.
     */
    const normalizedDecorationShare = Math.round(
      (decorationShare / totalShares) * 100
    );

    const normalizedCoordinationShare = Math.round(
      (coordinationShare / totalShares) * 100
    );

    const normalizedGuestExperienceShare = Math.round(
      (guestExperienceShare / totalShares) * 100
    );

    const normalizedProductionShare =
      100 -
      normalizedDecorationShare -
      normalizedCoordinationShare -
      normalizedGuestExperienceShare;

    return {
      minRange,
      maxRange,
      packageName: packageNames[decorationTier],
      packageBaseline: packageBase[decorationTier],
      productionFee,
      decorationShare: normalizedDecorationShare,
      coordinationShare: normalizedCoordinationShare,
      guestExperienceShare: normalizedGuestExperienceShare,
      productionShare: normalizedProductionShare,
    };
  };

  const budget = calculateBudget();

  /*
   * Automatically suggest a package from event size.
   * The user can still manually select a different package.
   */
  const getSuggestedTier = (): DecorationTier => {
    if (guests <= 300) {
      return 'essentials';
    }

    if (guests <= 1500) {
      return 'signature';
    }

    return 'grand';
  };

  const suggestedTier = getSuggestedTier();

  const formatCurrency = (amount: number) => {
    return `Ksh ${amount.toLocaleString('en-KE')}`;
  };

  return (
    <div className="bg-[#fbf9fe] min-h-screen text-purple-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500" />

            <span className="text-xs font-bold uppercase tracking-widest text-purple-900 font-mono">
              Transparent Event Investment Models
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-purple-950 mb-4">
            Package Tier Options
          </h1>

          <p className="text-sm text-purple-800/80 max-w-2xl mx-auto leading-relaxed">
            Flexible event decoration and planning packages designed for
            weddings, corporate events, celebrations, brand activations,
            galas, and large-scale occasions across Kenya.
          </p>
        </div>

        {/* Pricing Models */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {PRICING_MODELS.map((model) => (
            <div
              key={model.id}
              className={`rounded-2xl border p-8 flex flex-col justify-between transition-all relative ${
                model.popular
                  ? 'bg-white border-purple-500 shadow-md ring-2 ring-purple-400/30'
                  : 'bg-white/80 border-purple-200/90 hover:border-purple-300 shadow-2xs'
              }`}
            >
              {model.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-purple-950 text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm font-mono">
                    Most Frequently Contracted
                  </span>
                </div>
              )}

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-purple-700 font-bold mb-1">
                  {model.targetClient}
                </div>

                <h3 className="text-xl font-serif-luxury font-bold text-purple-950 mb-3">
                  {model.tierName}
                </h3>

                <div className="text-2xl font-bold text-purple-950 mb-4 font-mono">
                  {model.investmentBaseline}
                </div>

                <p className="text-xs text-purple-800/80 leading-relaxed mb-6 border-b border-purple-100 pb-6">
                  {model.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-900 font-heading">
                    Core Deliverables:
                  </div>

                  {model.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2.5 text-xs text-purple-900/90"
                    >
                      <Check className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-purple-100">
                <button
                  onClick={() => onNavigate('rfp')}
                  className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all font-heading cursor-pointer ${
                    model.popular
                      ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-purple-950 shadow-sm'
                      : 'bg-purple-100 text-purple-950 hover:bg-purple-200 border border-purple-200'
                  }`}
                >
                  Initiate Event Discussion
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Event Investment Calculator */}
        <div className="bg-white border border-purple-200 rounded-2xl p-6 sm:p-10 mb-20 shadow-xs">

          {/* Calculator Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-purple-100">
            <div>
              <div className="flex items-center space-x-2 text-purple-700 text-xs font-mono uppercase tracking-widest mb-1 font-bold">
                <Calculator className="w-4 h-4" />
                <span>Planning Tool</span>
              </div>

              <h2 className="text-2xl font-serif-luxury font-bold text-purple-950">
                Event Investment Calculator
              </h2>

              <p className="text-xs text-purple-800/85 mt-1">
                Adjust your event requirements to generate an indicative
                decoration and event-management investment range.
              </p>
            </div>

            <div className="bg-purple-50 px-4 py-2 rounded-lg border border-purple-200 text-xs text-purple-900">
              <span className="text-purple-700 font-mono font-bold">
                Kenya Pricing:
              </span>{' '}
              Indicative planning estimates in Ksh.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* LEFT INPUTS */}
            <div className="lg:col-span-7 space-y-6">

              {/* Event Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-950 mb-2">
                  1. Event Type
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'wedding', label: 'Wedding' },
                    { id: 'corporate', label: 'Corporate Event' },
                    { id: 'activation', label: 'Brand Activation' },
                    { id: 'gala', label: 'Gala / Celebration' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() =>
                        setEventType(item.id as EventType)
                      }
                      className={`py-2.5 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                        eventType === item.id
                          ? 'bg-purple-100 border-purple-500 text-purple-950 font-bold shadow-2xs'
                          : 'bg-purple-50/50 border-purple-200 text-purple-800 hover:border-purple-300 hover:text-purple-950'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Scale */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label
                    htmlFor={guestsInputId}
                    className="text-xs font-bold uppercase tracking-wider text-purple-950"
                  >
                    2. Expected Guest Count
                  </label>

                  <span className="text-sm font-mono font-bold text-purple-950 bg-purple-100 px-3 py-1 rounded border border-purple-200">
                    {guests.toLocaleString('en-KE')} Guests
                  </span>
                </div>

                <input
                  id={guestsInputId}
                  type="range"
                  min={50}
                  max={5000}
                  step={50}
                  value={guests}
                  onChange={(e) =>
                    setGuests(Number(e.target.value))
                  }
                  className="w-full h-2 bg-purple-100 rounded-lg appearance-none cursor-pointer accent-purple-700"
                />

                <div className="flex justify-between text-[10px] text-purple-700/80 font-mono mt-1">
                  <span>50 Guests</span>
                  <span>1,500 Guests</span>
                  <span>5,000+ Guests</span>
                </div>
              </div>

              {/* Package Tier */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-950 mb-2">
                  3. Decoration &amp; Planning Tier
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: 'essentials',
                      name: 'Celebration Essentials',
                      price: 'From Ksh 35,000',
                      desc: 'Focused styling, balloon art, backdrop and key decorative elements.',
                    },
                    {
                      id: 'signature',
                      name: 'Signature Elegance',
                      price: 'From Ksh 150,000',
                      desc: 'Turnkey decoration, vendor coordination and complete event-day management.',
                    },
                    {
                      id: 'grand',
                      name: 'Grand Horizon',
                      price: 'Ksh 200,000+',
                      desc: 'Bespoke installations, immersive features and VIP guest management.',
                    },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() =>
                        setDecorationTier(tier.id as DecorationTier)
                      }
                      className={`p-4 rounded-lg text-left border transition-all cursor-pointer ${
                        decorationTier === tier.id
                          ? 'bg-purple-100 border-purple-500 text-purple-950 font-medium shadow-2xs'
                          : 'bg-purple-50/50 border-purple-200 text-purple-800 hover:border-purple-300'
                      }`}
                    >
                      <div className="text-xs font-bold text-purple-950">
                        {tier.name}
                      </div>

                      <div className="text-xs font-mono font-bold text-purple-700 mt-1">
                        {tier.price}
                      </div>

                      <div className="text-[10px] text-purple-800/75 mt-2 leading-snug">
                        {tier.desc}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Suggested package */}
                <div className="mt-3 text-[10px] text-purple-700 font-mono">
                  Based on {guests.toLocaleString('en-KE')} guests, the calculator
                  suggests the{' '}
                  <span className="font-bold text-purple-950">
                    {suggestedTier === 'essentials'
                      ? 'Celebration Essentials'
                      : suggestedTier === 'signature'
                      ? 'Signature Elegance'
                      : 'Grand Horizon'}
                  </span>{' '}
                  level. You can select any package manually.
                </div>
              </div>

              {/* Styling / Production Complexity */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-950 mb-2">
                  4. Styling &amp; Production Complexity
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: 'standard',
                      name: 'Standard Styling',
                      desc: 'Core décor, floral accents, linens and standard lighting.',
                    },
                    {
                      id: 'enhanced',
                      name: 'Enhanced Styling',
                      desc: 'Expanded décor, custom installations and enhanced lighting.',
                    },
                    {
                      id: 'immersive',
                      name: 'Immersive Experience',
                      desc: 'Large custom structures, feature zones and immersive styling.',
                    },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() =>
                        setProductionLevel(item.id as ProductionLevel)
                      }
                      className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                        productionLevel === item.id
                          ? 'bg-purple-100 border-purple-500 text-purple-950 font-medium shadow-2xs'
                          : 'bg-purple-50/50 border-purple-200 text-purple-800 hover:border-purple-300'
                      }`}
                    >
                      <div className="text-xs font-bold text-purple-950">
                        {item.name}
                      </div>

                      <div className="text-[10px] text-purple-800/75 mt-1 leading-snug">
                        {item.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hospitality */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-950 mb-2">
                  5. Guest Experience Level
                </label>

                <select
                  value={hospitalityTier}
                  onChange={(e) =>
                    setHospitalityTier(
                      e.target.value as HospitalityTier
                    )
                  }
                  className="w-full bg-white border border-purple-200 text-purple-950 p-2.5 rounded-lg text-xs focus:outline-none focus:border-purple-500"
                >
                  <option value="standard">
                    Standard Guest Experience
                  </option>

                  <option value="premium">
                    Premium Guest Experience &amp; VIP Styling
                  </option>
                </select>
              </div>
            </div>

            {/* RIGHT OUTPUT */}
            <div className="lg:col-span-5 bg-purple-950 text-white border border-purple-800 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-xl">

              {/* Estimate */}
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-purple-300 mb-1">
                  Estimated Event Investment
                </div>

                <div className="text-3xl sm:text-4xl font-serif-luxury font-bold text-amber-300 mb-2 font-mono">
                  {formatCurrency(budget.minRange)}
                  <span className="text-purple-300 mx-1">–</span>
                  {formatCurrency(budget.maxRange)}
                </div>

                <div className="text-xs text-purple-200/90 leading-relaxed">
                  Indicative investment for the selected event style,
                  guest scale, decoration package and production requirements.
                  Final pricing is confirmed after venue assessment,
                  design consultation and supplier requirements.
                </div>
              </div>

              {/* Selected Package */}
              <div className="bg-purple-900/60 border border-purple-800 p-4 rounded-xl">
                <div className="text-[10px] uppercase tracking-widest text-purple-300 font-mono mb-1">
                  Selected Package
                </div>

                <div className="text-lg font-serif-luxury font-bold text-white">
                  {budget.packageName}
                </div>

                <div className="text-xs text-purple-300 mt-1">
                  Published baseline:{' '}
                  <span className="text-white font-mono font-bold">
                    {formatCurrency(budget.packageBaseline)}
                  </span>
                </div>

                {budget.productionFee > 0 && (
                  <div className="text-[10px] text-purple-300 mt-2">
                    Signature Elegance production fee:
                    <span className="text-white font-mono ml-1">
                      15–18%
                    </span>
                  </div>
                )}
              </div>

              {/* Resource Distribution */}
              <div className="space-y-3 pt-4 border-t border-purple-800/80 text-xs">
                <div className="text-[11px] font-semibold text-purple-200 uppercase tracking-wider">
                  Indicative Resource Distribution:
                </div>

                {/* Decoration */}
                <div>
                  <div className="flex justify-between text-purple-300 text-[11px] mb-1">
                    <span>Décor &amp; Styling</span>
                    <span className="font-mono text-white">
                      {budget.decorationShare}%
                    </span>
                  </div>

                  <div className="w-full bg-purple-900/80 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-400 h-full rounded-full"
                      style={{
                        width: `${budget.decorationShare}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Coordination */}
                <div>
                  <div className="flex justify-between text-purple-300 text-[11px] mb-1">
                    <span>Planning &amp; Coordination</span>
                    <span className="font-mono text-white">
                      {budget.coordinationShare}%
                    </span>
                  </div>

                  <div className="w-full bg-purple-900/80 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-purple-300 h-full rounded-full"
                      style={{
                        width: `${budget.coordinationShare}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Guest Experience */}
                <div>
                  <div className="flex justify-between text-purple-300 text-[11px] mb-1">
                    <span>Guest Experience</span>
                    <span className="font-mono text-white">
                      {budget.guestExperienceShare}%
                    </span>
                  </div>

                  <div className="w-full bg-purple-900/80 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-400 h-full rounded-full"
                      style={{
                        width: `${budget.guestExperienceShare}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Production */}
                <div>
                  <div className="flex justify-between text-purple-300 text-[11px] mb-1">
                    <span>Production &amp; Technical Support</span>
                    <span className="font-mono text-white">
                      {budget.productionShare}%
                    </span>
                  </div>

                  <div className="w-full bg-purple-900/80 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-300 h-full rounded-full"
                      style={{
                        width: `${budget.productionShare}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Investment Note */}
              <div className="bg-purple-900/60 border border-purple-800 p-4 rounded-xl">
                <div className="flex items-center space-x-2 text-emerald-300 text-xs font-semibold mb-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Planning Note:</span>
                </div>

                <div className="text-xs text-purple-200 leading-relaxed">
                  The calculator provides a preliminary planning figure.
                  Venue requirements, décor quantities, custom fabrication,
                  supplier costs, guest count and final event scope may affect
                  the confirmed quotation.
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onNavigate('rfp')}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-purple-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-lg shadow-md font-heading transition-all"
              >
                Request a Detailed Quote
              </button>
            </div>
          </div>
        </div>

        {/* Budget Guidance */}
        <div className="bg-white border border-purple-200 rounded-2xl p-8 max-w-4xl mx-auto shadow-xs">

          <div className="text-center mb-6">
            <h3 className="text-lg font-serif-luxury font-bold text-purple-950">
              Event Investment Guidance
            </h3>

            <p className="text-xs text-purple-800/85 mt-1">
              Choose a package according to the scale, styling requirements
              and level of event management required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">

            {/* Essentials */}
            <div className="border border-purple-200 bg-purple-50/60 p-4 rounded-xl">
              <div className="font-bold text-purple-950 mb-1">
                Celebration Essentials
              </div>

              <div className="text-lg font-bold text-purple-950 font-mono mb-2">
                From Ksh 35,000
              </div>

              <p className="text-purple-800/80">
                Suitable for focused event styling, statement décor,
                balloon installations, themed backdrops, welcome signage,
                table styling and key visual focal points.
              </p>
            </div>

            {/* Signature */}
            <div className="border border-purple-200 bg-purple-50/60 p-4 rounded-xl">
              <div className="font-bold text-purple-950 mb-1">
                Signature Elegance
              </div>

              <div className="text-lg font-bold text-purple-950 font-mono mb-2">
                From Ksh 150,000
              </div>

              <p className="text-purple-800/80">
                Designed for larger celebrations, corporate events,
                conferences and brand activations requiring complete
                coordination and event-day management.
              </p>
            </div>

            {/* Grand */}
            <div className="border border-purple-200 bg-purple-50/60 p-4 rounded-xl">
              <div className="font-bold text-purple-950 mb-1">
                Grand Horizon
              </div>

              <div className="text-lg font-bold text-purple-950 font-mono mb-2">
                Ksh 200,000+
              </div>

              <p className="text-purple-800/80">
                For bespoke event environments, custom structures,
                immersive décor features, luxury guest zones, VIP
                management and large-scale event production.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-purple-100 text-center">
            <p className="text-[11px] text-purple-700/80 max-w-2xl mx-auto leading-relaxed">
              All figures are starting investment levels and planning
              estimates. A final quotation is prepared after reviewing the
              venue, guest count, event date, design requirements, supplier
              requirements and overall event scope.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

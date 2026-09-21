import React, { useEffect, useRef, useState } from 'react';
import { PageView, RFPFormData } from '../types';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Calendar as CalendarIcon,
  UploadCloud,
  FileText,
  Lock,
  Check,
} from 'lucide-react';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        prefill?: {
          name?: string;
          email?: string;
          customAnswers?: Record<string, string>;
        };
        utm?: Record<string, string>;
        resize?: boolean;
      }) => void;
    };
  }
}

interface InquiryRFPViewProps {
  onNavigate: (page: PageView) => void;
}

export const InquiryRFPView: React.FC<InquiryRFPViewProps> = ({
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'rfp' | 'bookings'>('rfp');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<RFPFormData>({
    eventType: 'Wedding',
    strategicObjective: 'Create a beautiful and memorable wedding celebration.',
    format: 'in-person',
    targetDate: '2026-11-12',
    flexibility: '± 2 Weeks',
    guestCount: 300,
    preferredCity: 'Nairobi',
    venueStatus: 'needs-scouting',
    budgetTier: 'Ksh 150,000 – Ksh 300,000',
    avRequirements: [],
    productionLevel: 'Signature Elegance',
    companyName: '',
    contactName: '',
    contactTitle: '',
    email: '',
    phone: '',
    procurementCode: '',
    additionalNotes: '',
    fileName: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const calendlyRef = useRef<HTMLDivElement | null>(null);

  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

  const toggleRequirement = (req: string) => {
    if (formData.avRequirements.includes(req)) {
      setFormData({
        ...formData,
        avRequirements: formData.avRequirements.filter(
          (r) => r !== req
        ),
      });
    } else {
      setFormData({
        ...formData,
        avRequirements: [...formData.avRequirements, req],
      });
    }
  };

  useEffect(() => {
    if (activeTab !== 'bookings' || !CALENDLY_URL || !calendlyRef.current) {
      return;
    }

    const initializeCalendly = () => {
      if (!calendlyRef.current || !window.Calendly) {
        return;
      }

      calendlyRef.current.innerHTML = '';

      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: calendlyRef.current,
        resize: true,
        prefill: {
          name: formData.contactName || undefined,
          email: formData.email || undefined,
        },
      });
    };

    if (window.Calendly) {
      initializeCalendly();
      return;
    }

    const existingScript = document.querySelector(
      'script[data-calendly-widget="true"]'
    );

    if (existingScript) {
      existingScript.addEventListener('load', initializeCalendly);
      return () => {
        existingScript.removeEventListener('load', initializeCalendly);
      };
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.dataset.calendlyWidget = 'true';
    script.addEventListener('load', initializeCalendly);
    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', initializeCalendly);
    };
  }, [activeTab, CALENDLY_URL, formData.contactName, formData.email]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (!file) {
      setSelectedFile(null);
      setFormData((prev) => ({ ...prev, fileName: '' }));
      return;
    }

    const maxFileSize = 5 * 1024 * 1024;
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
      'image/webp',
    ];

    if (file.size > maxFileSize) {
      alert('Please upload a file smaller than 5 MB.');
      e.target.value = '';
      setSelectedFile(null);
      setFormData((prev) => ({ ...prev, fileName: '' }));
      return;
    }

    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a PDF, DOCX, JPG, PNG or WEBP file.');
      e.target.value = '';
      setSelectedFile(null);
      setFormData((prev) => ({ ...prev, fileName: '' }));
      return;
    }

    setSelectedFile(file);
    setFormData((prev) => ({
      ...prev,
      fileName: file.name,
    }));
  };

  const submitInquiry = async () => {
    if (!WEB3FORMS_ACCESS_KEY) {
      alert(
        'The inquiry form is not configured yet. Please add VITE_WEB3FORMS_ACCESS_KEY to your environment variables.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const submission = new FormData();

      submission.append('access_key', WEB3FORMS_ACCESS_KEY);
      submission.append(
        'subject',
        `New Event Inquiry - ${formData.eventType} - ${formData.contactName || 'Website Inquiry'}`
      );
      submission.append('from_name', 'Luminary Guild Website');
      submission.append('replyto', formData.email);
      submission.append('botcheck', '');

      submission.append('event_type', formData.eventType);
      submission.append('event_description', formData.strategicObjective);
      submission.append('event_format', formData.format);
      submission.append('event_date', formData.targetDate);
      submission.append('date_flexibility', formData.flexibility);
      submission.append('guest_count', String(formData.guestCount));
      submission.append('preferred_location', formData.preferredCity);
      submission.append('venue_status', formData.venueStatus);
      submission.append('budget', formData.budgetTier);
      submission.append('event_package', formData.productionLevel);
      submission.append(
        'requested_services',
        formData.avRequirements.length
          ? formData.avRequirements.join(', ')
          : 'None selected'
      );
      submission.append('company', formData.companyName || 'Not provided');
      submission.append('contact_name', formData.contactName);
      submission.append('contact_title', formData.contactTitle || 'Not provided');
      submission.append('email', formData.email);
      submission.append('phone', formData.phone);
      submission.append(
        'additional_notes',
        formData.additionalNotes || 'None provided'
      );

      if (selectedFile) {
        submission.append('attachment', selectedFile, selectedFile.name);
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submission,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'We could not send your inquiry.'
        );
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Inquiry submission error:', error);

      alert(
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your inquiry. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault();

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      return;
    }

    await submitInquiry();
  };

  return (
    <div className="bg-[#fbf9fe] min-h-screen text-purple-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-300 rounded-full px-4 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-900 font-mono">
              Plan Your Event
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-purple-950 mb-4">
            Tell Us About Your Event
          </h1>

          <p className="text-sm sm:text-base text-purple-800/80 leading-relaxed">
            Share a few details about your event and what you have in mind.
            We will use this information to understand your needs and prepare
            the right decoration, planning and coordination options for you.
          </p>
        </div>

        {/* Contact Details */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-8 text-center">
          <p className="text-xs text-purple-800">
            Prefer to speak to us directly? Call{' '}
            <a
              href="tel:+254792604341"
              className="font-bold text-purple-950 hover:text-purple-700"
            >
              +254 792 604 341
            </a>{' '}
            or{' '}
            <a
              href="tel:+254111464092"
              className="font-bold text-purple-950 hover:text-purple-700"
            >
              +254 111 464 092
            </a>
            {' '}or email{' '}
            <a
              href="mailto:nyamwalo402@gmail.com"
              className="font-bold text-purple-950 hover:text-purple-700"
            >
              nyamwalo402@gmail.com
            </a>
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-purple-100 border border-purple-200 p-1.5 rounded-xl inline-flex space-x-2">
            <button
              onClick={() => setActiveTab('rfp')}
              className={`px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'rfp'
                  ? 'bg-amber-300 text-purple-950 shadow-md font-heading'
                  : 'text-purple-700 hover:text-purple-950'
              }`}
            >
              Event Inquiry
            </button>

            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-2 ${
                activeTab === 'bookings'
                  ? 'bg-amber-300 text-purple-950 shadow-md font-heading'
                  : 'text-purple-700 hover:text-purple-950'
              }`}
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>

        {/* EVENT INQUIRY */}
        {activeTab === 'rfp' && !isSubmitted && (
          <div className="bg-white border border-purple-200 rounded-2xl shadow-xl p-6 sm:p-10">

            {/* Progress */}
            <div className="mb-10">
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                {[
                  { step: 1, title: 'Event Details' },
                  { step: 2, title: 'Date & Guests' },
                  { step: 3, title: 'Style & Budget' },
                  { step: 4, title: 'Your Details' },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs mb-2 transition-all ${
                        currentStep === s.step
                          ? 'bg-amber-400 text-purple-950 ring-4 ring-amber-400/20'
                          : currentStep > s.step
                          ? 'bg-emerald-500 text-purple-950'
                          : 'bg-purple-100 text-purple-500'
                      }`}
                    >
                      {currentStep > s.step ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        s.step
                      )}
                    </div>

                    <span
                      className={`text-[11px] font-medium hidden sm:inline ${
                        currentStep === s.step
                          ? 'text-purple-950'
                          : 'text-purple-600'
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative mt-3 h-1 bg-purple-100 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-300 to-amber-500 transition-all duration-300"
                  style={{
                    width: `${((currentStep - 1) / 3) * 100}%`,
                  }}
                />
              </div>
            </div>

            <form onSubmit={handleNextStep}>

              {/* STEP 1 */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">

                  <div>
                    <h3 className="text-xl font-serif-luxury font-bold text-purple-950">
                      Step 1: Tell Us About Your Event
                    </h3>
                    <p className="text-xs text-purple-700/80 mt-1">
                      Start with the type of event you are planning and the
                      kind of experience you would like to create.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                      What are you planning? *
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Wedding',
                        'Birthday / Private Celebration',
                        'Corporate Event',
                        'Conference',
                        'Brand Activation',
                        'Gala / Dinner',
                        'Baby Shower',
                        'Other Celebration',
                      ].map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() =>
                            setFormData({
                              ...formData,
                              eventType: type,
                            })
                          }
                          className={`p-3.5 rounded-lg text-left border text-xs font-medium transition-all cursor-pointer ${
                            formData.eventType === type
                              ? 'bg-purple-100 border-purple-500 text-purple-950 font-semibold ring-1 ring-purple-400/40'
                              : 'bg-purple-50/50 border-purple-200 text-purple-800 hover:border-purple-300'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                      What would you like us to help with?
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Decoration & Styling',
                        'Full Event Planning',
                        'Event-Day Coordination',
                        'Venue Styling',
                        'Balloon Decoration',
                        'Corporate Event Setup',
                        'Brand Activation',
                        'Complete Event Package',
                      ].map((req) => (
                        <div
                          key={req}
                          onClick={() => toggleRequirement(req)}
                          className={`p-3 rounded-lg border text-xs flex items-center justify-between cursor-pointer transition-colors ${
                            formData.avRequirements.includes(req)
                              ? 'bg-purple-100 border-purple-400 text-purple-950 font-medium'
                              : 'bg-purple-50/50 border-purple-200 text-purple-800 hover:border-purple-300'
                          }`}
                        >
                          <span>{req}</span>

                          {formData.avRequirements.includes(req) && (
                            <CheckCircle2 className="w-4 h-4 text-purple-700" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                      Tell us what you have in mind
                    </label>

                    <textarea
                      rows={4}
                      value={formData.strategicObjective}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          strategicObjective: e.target.value,
                        })
                      }
                      placeholder="Tell us about your theme, colours, preferred style, special requests or anything else you would like us to know..."
                      className="w-full bg-white border border-purple-200 text-purple-950 p-3 rounded-lg text-xs focus:outline-none focus:border-purple-500 leading-relaxed"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">

                  <div>
                    <h3 className="text-xl font-serif-luxury font-bold text-purple-950">
                      Step 2: Date, Guests & Venue
                    </h3>
                    <p className="text-xs text-purple-700/80 mt-1">
                      These details help us understand the size and practical
                      requirements of your event.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                        Event Date *
                      </label>

                      <input
                        type="date"
                        value={formData.targetDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            targetDate: e.target.value,
                          })
                        }
                        className="w-full bg-white border border-purple-200 text-purple-950 p-3 rounded-lg text-xs focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                        Date Flexibility
                      </label>

                      <select
                        value={formData.flexibility}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            flexibility: e.target.value,
                          })
                        }
                        className="w-full bg-white border border-purple-200 text-purple-950 p-3 rounded-lg text-xs focus:outline-none focus:border-purple-500"
                      >
                        <option value="Fixed Date">
                          Fixed Date
                        </option>
                        <option value="± 1 Week">
                          ± 1 Week
                        </option>
                        <option value="± 2 Weeks">
                          ± 2 Weeks
                        </option>
                        <option value="Flexible Month">
                          Flexible Month
                        </option>
                      </select>
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                        Expected Number of Guests *
                      </label>

                      <input
                        type="number"
                        min={10}
                        max={10000}
                        value={formData.guestCount}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            guestCount: Number(e.target.value),
                          })
                        }
                        className="w-full bg-white border border-purple-200 text-purple-950 p-3 rounded-lg text-xs focus:outline-none focus:border-purple-500 font-mono"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                        Preferred Location *
                      </label>

                      <input
                        type="text"
                        value={formData.preferredCity}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredCity: e.target.value,
                          })
                        }
                        placeholder="e.g. Nairobi, Kiambu, Nakuru, Mombasa"
                        className="w-full bg-white border border-purple-200 text-purple-950 p-3 rounded-lg text-xs focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>

                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                      Venue Status
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        {
                          id: 'secured',
                          label: 'Venue Confirmed',
                        },
                        {
                          id: 'shortlisted',
                          label: 'Venue Shortlisted',
                        },
                        {
                          id: 'needs-scouting',
                          label: 'Need Help Finding a Venue',
                        },
                      ].map((v) => (
                        <button
                          type="button"
                          key={v.id}
                          onClick={() =>
                            setFormData({
                              ...formData,
                              venueStatus: v.id as any,
                            })
                          }
                          className={`p-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                            formData.venueStatus === v.id
                              ? 'bg-purple-100 border-purple-500 text-purple-950 font-semibold'
                              : 'bg-purple-50/50 border-purple-200 text-purple-800 hover:border-purple-300'
                          }`}
                        >
                          {v.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">

                  <div>
                    <h3 className="text-xl font-serif-luxury font-bold text-purple-950">
                      Step 3: Style & Budget
                    </h3>
                    <p className="text-xs text-purple-700/80 mt-1">
                      Choose the level of styling and investment that best
                      matches your event.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                      Estimated Event Budget
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Ksh 35,000 – Ksh 75,000',
                        'Ksh 75,000 – Ksh 150,000',
                        'Ksh 150,000 – Ksh 300,000',
                        'Ksh 300,000+',
                      ].map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() =>
                            setFormData({
                              ...formData,
                              budgetTier: b,
                            })
                          }
                          className={`p-3.5 rounded-lg text-center border text-xs font-medium transition-all cursor-pointer ${
                            formData.budgetTier === b
                              ? 'bg-purple-100 border-purple-500 text-purple-950 font-semibold ring-1 ring-purple-400/40'
                              : 'bg-purple-50/50 border-purple-200 text-purple-800 hover:border-purple-300'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                      Preferred Event Package
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                      {[
                        {
                          name: 'Celebration Essentials',
                          value: 'Celebration Essentials',
                          price: 'From Ksh 35,000',
                          desc: 'Key décor, balloon art, backdrops, signage and table styling.',
                        },
                        {
                          name: 'Signature Elegance',
                          value: 'Signature Elegance',
                          price: 'From Ksh 150,000',
                          desc: 'Complete styling, coordination and event-day management.',
                        },
                        {
                          name: 'Grand Horizon',
                          value: 'Grand Horizon',
                          price: 'Ksh 200,000+',
                          desc: 'Bespoke décor, custom features, VIP areas and larger event production.',
                        },
                      ].map((tier) => (
                        <button
                          type="button"
                          key={tier.value}
                          onClick={() =>
                            setFormData({
                              ...formData,
                              productionLevel: tier.value,
                            })
                          }
                          className={`p-4 rounded-lg text-left border transition-all cursor-pointer ${
                            formData.productionLevel === tier.value
                              ? 'bg-purple-100 border-purple-500 text-purple-950 font-medium'
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
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                      Additional Services You May Need
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Floral Styling',
                        'Custom Backdrop',
                        'Balloon Decoration',
                        'Lighting',
                        'Stage & Seating Setup',
                        'Welcome Area Styling',
                        'VIP / Lounge Area',
                        'Photography Area / Photo Wall',
                      ].map((req) => (
                        <div
                          key={req}
                          onClick={() => toggleRequirement(req)}
                          className={`p-3 rounded-lg border text-xs flex items-center justify-between cursor-pointer transition-colors ${
                            formData.avRequirements.includes(req)
                              ? 'bg-purple-100 border-purple-400 text-purple-950 font-medium'
                              : 'bg-purple-50/50 border-purple-200 text-purple-800 hover:border-purple-300'
                          }`}
                        >
                          <span>{req}</span>

                          {formData.avRequirements.includes(req) && (
                            <CheckCircle2 className="w-4 h-4 text-purple-700" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                      Anything Else We Should Know?
                    </label>

                    <textarea
                      rows={3}
                      value={formData.additionalNotes}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          additionalNotes: e.target.value,
                        })
                      }
                      placeholder="Tell us about special guests, colours, theme, cultural details, venue requirements or anything else..."
                      className="w-full bg-white border border-purple-200 text-purple-950 p-3 rounded-lg text-xs focus:outline-none focus:border-purple-500 leading-relaxed"
                    />
                  </div>

                </div>
              )}

              {/* STEP 4 */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fadeIn">

                  <div>
                    <h3 className="text-xl font-serif-luxury font-bold text-purple-950">
                      Step 4: Your Contact Details
                    </h3>

                    <p className="text-xs text-purple-700/80 mt-1">
                      Give us your details so we can get back to you about
                      your event.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                        Your Name *
                      </label>

                      <input
                        type="text"
                        value={formData.contactName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactName: e.target.value,
                          })
                        }
                        placeholder="Full name"
                        className="w-full bg-white border border-purple-200 text-purple-950 p-3 rounded-lg text-xs focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                        Company / Organisation
                      </label>

                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyName: e.target.value,
                          })
                        }
                        placeholder="Optional"
                        className="w-full bg-white border border-purple-200 text-purple-950 p-3 rounded-lg text-xs focus:outline-none focus:border-purple-500"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                        Email Address *
                      </label>

                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        placeholder="your@email.com"
                        className="w-full bg-white border border-purple-200 text-purple-950 p-3 rounded-lg text-xs focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                        Phone Number *
                      </label>

                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          })
                        }
                        placeholder="+254..."
                        className="w-full bg-white border border-purple-200 text-purple-950 p-3 rounded-lg text-xs focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>

                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                      Additional Information
                    </label>

                    <textarea
                      rows={4}
                      value={formData.additionalNotes}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          additionalNotes: e.target.value,
                        })
                      }
                      placeholder="Anything else you would like us to know about your event?"
                      className="w-full bg-white border border-purple-200 text-purple-950 p-3 rounded-lg text-xs focus:outline-none focus:border-purple-500 leading-relaxed"
                    />
                  </div>

                  {/* Optional Upload */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-purple-900 mb-2">
                      Upload Inspiration or Event Details
                    </label>

                    <label
                      htmlFor="event-file-upload"
                      className="block border-2 border-dashed border-purple-200 hover:border-purple-400 bg-purple-50/50 rounded-xl p-6 text-center transition-colors cursor-pointer"
                    >
                      <UploadCloud className="w-8 h-8 text-purple-600/80 mx-auto mb-2" />

                      <div className="text-xs text-purple-900 font-medium">
                        Upload a mood board, venue details, event brief or
                        inspiration
                      </div>

                      <div className="text-[11px] text-purple-600/70 mt-1">
                        Optional. PDF, DOCX, JPG, PNG or WEBP. Maximum 5 MB.
                      </div>

                      <input
                        id="event-file-upload"
                        type="file"
                        name="attachment"
                        accept=".pdf,.docx,.jpg,.jpeg,.png,.webp,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png,image/webp"
                        onChange={handleFileChange}
                        className="sr-only"
                      />

                      {formData.fileName && (
                        <div className="inline-flex items-center space-x-2 mt-3 bg-purple-100 border border-purple-300 px-3 py-1.5 rounded-lg text-xs text-purple-800">
                          <FileText className="w-3.5 h-3.5" />
                          <span>{formData.fileName}</span>
                        </div>
                      )}
                    </label>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 flex items-start space-x-3">
                    <Lock className="w-4 h-4 text-purple-700 mt-0.5 shrink-0" />

                    <p className="text-[11px] text-purple-700/80 leading-relaxed">
                      Your contact details are used only to respond to your
                      event inquiry and discuss your requirements with you.
                    </p>
                  </div>

                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between pt-8 mt-8 border-t border-purple-100">

                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentStep(currentStep - 1)
                    }
                    className="px-5 py-2.5 text-xs text-purple-800 hover:text-purple-950 bg-purple-100 rounded-md flex items-center space-x-2 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 text-xs font-semibold uppercase tracking-wider text-purple-950 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 hover:from-amber-100 hover:to-amber-300 rounded-md font-heading transition-all shadow-lg flex items-center space-x-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : currentStep === 4 ? (
                    <>
                      <span>Send Event Inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      <span>
                        Continue to Step {currentStep + 1}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

              </div>
            </form>
          </div>
        )}

        {/* SUCCESS */}
        {activeTab === 'rfp' && isSubmitted && (
          <div className="bg-white border border-purple-200 rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl animate-fadeIn">

            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-emerald-600">
              Inquiry Received
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-purple-950 mt-2 mb-4">
              Thank You, {formData.contactName || 'We Have Received Your Inquiry'}
            </h2>

            <p className="text-xs sm:text-sm text-purple-800/80 leading-relaxed max-w-xl mx-auto mb-8">
              Thank you for sharing your event details with Luminary Guild.
              We will review your requirements and get in touch with you to
              discuss your event, styling needs and quotation.
            </p>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-2">
                Your Event
              </div>

              <div className="text-sm font-serif-luxury font-bold text-purple-950">
                {formData.eventType}
              </div>

              <div className="text-xs text-purple-700 mt-1">
                {formData.guestCount.toLocaleString('en-KE')} guests
                {' • '}
                {formData.preferredCity}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setSelectedFile(null);
                  setFormData((prev) => ({
                    ...prev,
                    fileName: '',
                  }));
                }}
                className="px-5 py-2.5 text-xs text-purple-800 hover:text-purple-950 bg-purple-100 rounded-lg transition-colors"
              >
                Send Another Inquiry
              </button>

              <button
                onClick={() => onNavigate('portfolio')}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-purple-950 bg-gradient-to-r from-amber-300 to-amber-400 rounded-lg shadow-md font-heading"
              >
                View Our Events
              </button>

            </div>

          </div>
        )}

        {/* BOOKING */}
        {activeTab === 'bookings' && (
          <div className="bg-white border border-purple-200 rounded-2xl p-6 sm:p-10 animate-fadeIn shadow-xl">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-purple-100">

              <div>
                <div className="flex items-center space-x-2 text-purple-700 text-xs font-mono uppercase tracking-widest mb-1">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span>Consultation</span>
                </div>

                <h3 className="text-xl font-serif-luxury font-bold text-purple-950">
                  Book an Event Consultation
                </h3>

                <p className="text-xs text-purple-700/80">
                  Choose an available time to speak with our event planning
                  team about your celebration or event.
                </p>
              </div>

              <div className="bg-purple-50 px-3.5 py-1.5 rounded-md border border-purple-200 text-xs text-purple-700 font-mono">
                30 Minute Consultation
              </div>

            </div>

            {!CALENDLY_URL ? (
              <div className="text-center py-10 bg-purple-50/60 rounded-xl border border-purple-200">
                <CalendarIcon className="w-10 h-10 text-purple-500 mx-auto mb-3" />

                <h4 className="text-lg font-serif-luxury font-bold text-purple-950">
                  Consultation Booking
                </h4>

                <p className="text-xs text-purple-700/80 mt-2 max-w-md mx-auto leading-relaxed">
                  Our online booking calendar has not been configured yet.
                  Please add your Calendly scheduling link to
                  <span className="font-mono font-semibold"> VITE_CALENDLY_URL </span>
                  in your environment variables.
                </p>
              </div>
            ) : (
              <div>
                <div
                  ref={calendlyRef}
                  className="w-full min-w-[320px] min-h-[700px]"
                />

                <p className="text-[11px] text-purple-600/70 text-center mt-4">
                  Your consultation is booked directly through Calendly. Once
                  you select a time and complete the Calendly form, the booking
                  confirmation will be handled by Calendly.
                </p>
              </div>
            )}

          </div>
        )}

        {/* Bottom Contact */}
        <div className="text-center mt-10">
          <p className="text-[11px] text-purple-700/70">
            Luminary Guild • Nairobi, Kenya • Weddings • Celebrations •
            Corporate Events • Conferences • Brand Activations
          </p>
        </div>

      </div>
    </div>
  );
};
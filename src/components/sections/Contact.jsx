import React, { useState, useEffect, useRef } from 'react';
import {
  Send,
  Mail,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  AlertTriangle,
  Settings
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { FormField } from '../ui/FormField';
import { Toast } from '../ui/Toast';
import { siteConfig } from '../../config/siteConfig';
import { services } from '../../data/services';
import { validateContactForm } from '../../utils/validators';

export function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: preselectedService || 'Website Development',
    message: '',
    botField: '', // Honeypot field for bot protection
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastConfig, setToastConfig] = useState({
    isOpen: false,
    type: 'info',
    title: '',
    message: '',
  });

  const formRef = useRef(null);

  // Sync when user clicks a pricing plan CTA
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    ...services.map((s) => ({ value: s.title, label: s.title })),
    { value: 'Other', label: 'Other Custom Solution' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot bot protection check
    if (formData.botField) {
      return;
    }

    // Run client-side validation
    const { isValid, errors: validationErrors } = validateContactForm(formData);

    if (!isValid) {
      setErrors(validationErrors);
      // Accessibility: Move focus to the first invalid field
      const firstInvalidFieldName = Object.keys(validationErrors)[0];
      if (firstInvalidFieldName) {
        const element = document.getElementById(firstInvalidFieldName);
        element?.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const hasEndpoint = Boolean(siteConfig.formEndpoint && siteConfig.formEndpoint.trim());

      if (hasEndpoint) {
        // Real API Submission (Formspree, Web3Forms, custom REST endpoint)
        const response = await fetch(siteConfig.formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            service: formData.service,
            message: formData.message,
          }),
        });

        if (response.ok) {
          setToastConfig({
            isOpen: true,
            type: 'success',
            title: 'Inquiry Sent Successfully',
            message: 'Thank you! Your project brief has been received. PixelForge Studio will review your requirements and respond within 24 business hours.',
          });
          setFormData({
            name: '',
            email: '',
            service: 'Website Development',
            message: '',
            botField: '',
          });
          setErrors({});
        } else {
          throw new Error('Form submission failed');
        }
      } else {
        // Honest indication that form needs configuration instead of pretending message was sent
        await new Promise((resolve) => setTimeout(resolve, 500));

        setToastConfig({
          isOpen: true,
          type: 'info',
          title: 'Configuration Required (No Backend Connected)',
          message: 'Client-side validation passed! However, no email service or API endpoint is configured in siteConfig.js. No message was transmitted. To receive live inquiries, set formEndpoint in src/config/siteConfig.js to your Formspree, Web3Forms, or custom URL.',
        });

        // Do not pretend message was sent; retain values or show clean indication
        setErrors({});
      }
    } catch (err) {
      setToastConfig({
        isOpen: true,
        type: 'error',
        title: 'Submission Encountered an Issue',
        message: 'Unable to deliver your message at this time. Please check your network connection or reach out via direct email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasEmail = Boolean(siteConfig.contact.email && siteConfig.contact.email.trim());
  const hasWhatsApp = Boolean(siteConfig.contact.whatsappNumber && siteConfig.contact.whatsappNumber.trim());
  const hasEndpoint = Boolean(siteConfig.formEndpoint && siteConfig.formEndpoint.trim());

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 lg:py-28 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="Start the Conversation"
          title="Ready to Forge Your"
          highlight="Next Digital Venture?"
          description="Tell us about your project vision, timeline, and goals. We analyze each brief to propose clear milestones and straightforward fixed-rate pricing."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Direct Communication Channels & Setup Notes (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <Card className="p-8 border border-white/10">
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mb-2">
                Direct Channels
              </h3>
              <p className="text-sm text-slate-400 font-['Inter'] leading-relaxed mb-6">
                Prefer direct messaging or an initial email exchange? All channels are configured in <code className="text-[#00D9FF] font-mono text-xs">siteConfig.js</code>.
              </p>

              <div className="space-y-4">
                {/* Email Action */}
                <div className="relative group">
                  {hasEmail ? (
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-[#0B1220] border border-white/10 hover:border-[#00D9FF]/40 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-[#00D9FF]/10 text-[#00D9FF]">
                          <Mail className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 font-mono">Email Us</div>
                          <div className="text-sm font-semibold text-white">{siteConfig.contact.email}</div>
                        </div>
                      </div>
                      <Send className="w-4 h-4 text-slate-500 group-hover:text-[#00D9FF] transition-colors" />
                    </a>
                  ) : (
                    <div
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-[#0B1220]/50 border border-white/5 opacity-75 cursor-not-allowed"
                      title="Add your verified agency email in src/config/siteConfig.js"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-white/5 text-slate-500">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-mono">Email Channel</div>
                          <div className="text-xs font-mono text-slate-400">Configure in siteConfig.js</div>
                        </div>
                      </div>
                      <HelpCircle className="w-4 h-4 text-slate-600" />
                    </div>
                  )}
                </div>

                {/* WhatsApp Action */}
                <div className="relative group">
                  {hasWhatsApp ? (
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                        siteConfig.contact.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-[#0B1220] border border-white/10 hover:border-emerald-500/40 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                          <MessageCircle className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 font-mono">WhatsApp Chat</div>
                          <div className="text-sm font-semibold text-white">+{siteConfig.contact.whatsappNumber}</div>
                        </div>
                      </div>
                      <Send className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                    </a>
                  ) : (
                    <div
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-[#0B1220]/50 border border-white/5 opacity-75 cursor-not-allowed"
                      title="Add your verified WhatsApp number in src/config/siteConfig.js"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-white/5 text-slate-500">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-mono">WhatsApp Channel</div>
                          <div className="text-xs font-mono text-slate-400">Configure in siteConfig.js</div>
                        </div>
                      </div>
                      <HelpCircle className="w-4 h-4 text-slate-600" />
                    </div>
                  )}
                </div>
              </div>

              {/* Service Level Commitments */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>24-Hour Business Response Commitment</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Confidentiality & Non-Disclosure by Default</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Direct Communication with Senior Engineers</span>
                </div>
              </div>
            </Card>

            {/* Central Config Guide Card */}
            <div className="p-6 rounded-2xl bg-[#111827]/70 border border-white/5 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-white font-semibold mb-2 font-['Space_Grotesk']">
                <Settings className="w-4 h-4 text-[#00D9FF]" />
                <span>Centralized Configuration</span>
              </div>
              <p className="leading-relaxed">
                Contact email, WhatsApp, social links, and form endpoints are managed from <code className="bg-[#0B1220] px-1.5 py-0.5 rounded text-[#00D9FF] font-mono">src/config/siteConfig.js</code>. No hardcoded credentials or unverified data exist in markup.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 border border-white/10 shadow-2xl">
              <div className="mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-slate-400 font-['Inter'] mt-1">
                    Fields marked with an asterisk (<span className="text-[#00D9FF]">*</span>) are required.
                  </p>
                </div>
                {!hasEndpoint && (
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Needs Configuration
                  </span>
                )}
              </div>

              {/* Explicit notification when no endpoint is connected */}
              {!hasEndpoint && (
                <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold block mb-0.5">Form Backend Not Connected</span>
                    <span>
                      This form is currently in offline validation mode. To receive real messages, connect your Formspree, Web3Forms, or custom API URL in <code className="bg-[#0B1220]/60 px-1 py-0.5 rounded font-mono text-white">src/config/siteConfig.js</code>.
                    </span>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot field (hidden from genuine users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="botField">Do not fill this field</label>
                  <input
                    type="text"
                    id="botField"
                    name="botField"
                    value={formData.botField}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    id="name"
                    label="Your Full Name"
                    placeholder="e.g., Alex Rivers"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />

                  <FormField
                    id="email"
                    label="Business Email"
                    type="email"
                    placeholder="e.g., alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                </div>

                {/* Service Selection Dropdown */}
                <FormField
                  id="service"
                  label="Service Required"
                  type="select"
                  value={formData.service}
                  onChange={handleChange}
                  error={errors.service}
                  options={serviceOptions}
                  required
                />

                {/* Message Textarea */}
                <FormField
                  id="message"
                  label="Project Scope & Objectives"
                  type="textarea"
                  placeholder="Describe your project requirements, target timeline, and goals (minimum 15 characters)..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                />

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={Send}
                    iconPosition="right"
                    className="w-full sm:w-auto font-bold text-sm min-w-[180px]"
                  >
                    {isSubmitting ? 'Validating Brief...' : 'Send Inquiry'}
                  </Button>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>Client-side validation enabled. Submissions log zero sensitive data.</span>
                </div>
              </form>
            </Card>
          </div>

        </div>

      </div>

      {/* Accessible Notification Toast */}
      <Toast
        isOpen={toastConfig.isOpen}
        type={toastConfig.type}
        title={toastConfig.title}
        message={toastConfig.message}
        onClose={() => setToastConfig((prev) => ({ ...prev, isOpen: false }))}
      />
    </section>
  );
}

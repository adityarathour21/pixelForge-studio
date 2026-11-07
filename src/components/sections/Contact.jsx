import React, { useState, useEffect, useRef } from 'react';
import {
  Send,
  Mail,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  Sparkles
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
    botField: '', // Honeypot field
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastConfig, setToastConfig] = useState({
    isOpen: false,
    type: 'success',
    title: '',
    message: '',
  });

  const formRef = useRef(null);

  // Sync when user clicks pricing plan CTA
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
      // Accessibility: Move focus to first invalid field
      const firstInvalidFieldName = Object.keys(validationErrors)[0];
      if (firstInvalidFieldName) {
        const element = document.getElementById(firstInvalidFieldName);
        element?.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      if (siteConfig.formEndpoint && siteConfig.formEndpoint.trim()) {
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
            title: 'Message Sent Successfully',
            message: 'Thank you! Your inquiry has been received. PixelForge Studio will review your requirements and respond within 24 business hours.',
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
        // Transparent Demo Mode (No backend endpoint configured yet)
        await new Promise((resolve) => setTimeout(resolve, 600));

        setToastConfig({
          isOpen: true,
          type: 'info',
          title: 'Demo Mode: Form Validated!',
          message: 'Client-side validation passed! The contact form is currently in safe Demo Mode because no endpoint is configured in siteConfig.js. To receive real messages, set formEndpoint in siteConfig.js to your Formspree or Web3Forms URL.',
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          service: 'Website Development',
          message: '',
          botField: '',
        });
        setErrors({});
      }
    } catch (err) {
      setToastConfig({
        isOpen: true,
        type: 'error',
        title: 'Submission Encountered an Issue',
        message: 'Unable to deliver your message at this time. Please check your network connection or reach out via email directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasEmail = Boolean(siteConfig.contact.email && siteConfig.contact.email.trim());
  const hasWhatsApp = Boolean(siteConfig.contact.whatsappNumber && siteConfig.contact.whatsappNumber.trim());

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
                Prefer direct messaging or an initial email exchange? Connect with our engineering leads directly.
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
                      title="Add your email in src/config/siteConfig.js"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-white/5 text-slate-500">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-mono">Email Channel</div>
                          <div className="text-xs font-mono text-slate-400">Add email in siteConfig.js</div>
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
                      title="Add your WhatsApp number in src/config/siteConfig.js"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-white/5 text-slate-500">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-mono">WhatsApp Channel</div>
                          <div className="text-xs font-mono text-slate-400">Add number in siteConfig.js</div>
                        </div>
                      </div>
                      <HelpCircle className="w-4 h-4 text-slate-600" />
                    </div>
                  )}
                </div>
              </div>

              {/* Service Level Guarantee */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>24-Hour Business Response Guarantee</span>
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

            {/* Quick Setup Card */}
            <div className="p-6 rounded-2xl bg-[#111827]/70 border border-white/5 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-white font-semibold mb-2 font-['Space_Grotesk']">
                <Sparkles className="w-4 h-4 text-[#00D9FF]" />
                <span>Form Integration Notice</span>
              </div>
              <p className="leading-relaxed">
                This form supports instant integration with <strong>Formspree</strong>, <strong>Web3Forms</strong>, or <strong>EmailJS</strong>. 
                Configure your endpoint URL in <code className="bg-[#0B1220] px-1.5 py-0.5 rounded text-[#00D9FF] font-mono">src/config/siteConfig.js</code> to begin receiving inquiries.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
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
                {!siteConfig.formEndpoint && (
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30">
                    Safe Demo Mode
                  </span>
                )}
              </div>

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
                  placeholder="Tell us about what you want to build, target timeline, key requirements, and estimated budget..."
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
                  <span>Zero telemetry. Your information is never sold or shared.</span>
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

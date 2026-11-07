import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';
import { faqs } from '../../data/faqs';

export function FAQ() {
  // Only one open at a time
  const [openId, setOpenId] = useState(faqs[0]?.id || null);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 lg:py-28 relative z-10 bg-[#080D18]/60 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="Clear Answers"
          title="Frequently Asked"
          highlight="Questions"
          description="Everything you need to know about working with PixelForge Studio, from contracts and timelines to post-launch support."
        />

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const buttonId = `faq-btn-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <Reveal key={faq.id} delay={index * 50}>
                <div
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-[#111827] border-[#00D9FF]/40 shadow-[0_0_20px_-5px_rgba(0,217,255,0.15)]'
                      : 'bg-[#111827]/70 border-white/5 hover:border-white/15'
                  }`}
                >
                  {/* Accordion Trigger Button */}
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggleAccordion(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF] rounded-2xl cursor-pointer"
                    >
                      <span className="text-base sm:text-lg font-bold font-['Space_Grotesk'] text-white">
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full bg-[#0B1220] border border-white/10 flex items-center justify-center text-[#00D9FF] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 bg-[#00D9FF]/10 border-[#00D9FF]/30' : ''
                        }`}
                        aria-hidden="true"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                  </h3>

                  {/* Accordion Expandable Panel */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm sm:text-base text-slate-300 font-['Inter'] leading-relaxed pt-2 border-t border-white/5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400 font-['Inter']">
            Have a question not listed here?{' '}
            <a
              href="#contact"
              className="text-[#00D9FF] hover:underline font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9FF] rounded px-1"
            >
              Contact our team directly
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Target } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { siteConfig } from '../../config/siteConfig';

export function Pricing({ onSelectService }) {
  const { currencySymbol, disclaimer, plans } = siteConfig.pricing;

  const handlePlanClick = (serviceValue) => {
    if (onSelectService) {
      onSelectService(serviceValue);
    }
    // Smooth scroll to contact
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-20 lg:py-28 relative z-10 bg-[#080D18]/70 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="Transparent Investment"
          title="Predictable Pricing for"
          highlight="Every Stage"
          description="Fixed, transparent rates with zero hidden fees. Choose a battle-tested tier or contact us for a custom quote tailored to your exact technical scope."
        />

        {/* Pricing Cards Grid - Consistent Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-10">
          {plans.map((plan, index) => {
            const isFeatured = plan.highlighted;

            return (
              <Reveal key={plan.id} delay={index * 100} className="h-full">
                <div
                  className={`h-full rounded-2xl transition-all duration-300 relative flex flex-col justify-between ${
                    isFeatured
                      ? 'bg-[#111827] border-2 border-[#00D9FF] shadow-[0_0_35px_-5px_rgba(0,217,255,0.35)] lg:-translate-y-2'
                      : 'bg-[#111827] border border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Visually Highlighted "Most Popular" Badge */}
                  {plan.recommended && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#00D9FF] text-[#0B1220] shadow-[0_0_18px_rgba(0,217,255,0.65)] uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 fill-[#0B1220]" aria-hidden="true" />
                        <span>{plan.badgeText || "Most Popular"}</span>
                      </span>
                    </div>
                  )}

                  <div className="p-8 flex-1 flex flex-col">
                    {/* Plan Header */}
                    <div className="mb-5">
                      <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white mb-2">
                        {plan.name}
                      </h3>
                      
                      {/* Target Audience */}
                      {plan.target && (
                        <div className="inline-flex items-center gap-1.5 text-xs text-[#00D9FF] font-medium font-['Inter'] mb-3 bg-[#00D9FF]/10 px-2.5 py-1 rounded-md border border-[#00D9FF]/20">
                          <Target className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{plan.target}</span>
                        </div>
                      )}

                      <p className="text-xs text-slate-400 font-['Inter'] leading-relaxed min-h-[34px]">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Tag */}
                    <div className="mb-8 pb-6 border-b border-white/10 flex items-baseline gap-1">
                      {plan.isNumericPrice ? (
                        <>
                          <span className="text-2xl font-bold text-[#00D9FF] font-['Space_Grotesk']">
                            {currencySymbol}
                          </span>
                          <span className="text-4xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
                            {plan.numericValue || plan.price.replace('+', '')}
                          </span>
                          <span className="text-2xl font-bold text-[#00D9FF] font-['Space_Grotesk']">
                            {plan.priceSuffix || "+"}
                          </span>
                          <span className="text-xs text-slate-400 ml-2 font-mono">
                            /{plan.period}
                          </span>
                        </>
                      ) : (
                        <div className="flex flex-col">
                          <span className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk']">
                            {plan.price}
                          </span>
                          <span className="text-xs text-slate-400 font-mono mt-1">
                            {plan.period}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Features List */}
                    <div className="flex-1 mb-8">
                      <span className="text-xs font-semibold text-white uppercase tracking-wider font-['Space_Grotesk'] block mb-4">
                        What's Included:
                      </span>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                            <div className="p-0.5 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5" aria-hidden="true" />
                            </div>
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Plan CTA Button */}
                  <div className="p-8 pt-0 mt-auto">
                    <Button
                      variant={isFeatured ? 'primary' : 'secondary'}
                      size="lg"
                      className="w-full font-bold text-sm"
                      onClick={() => handlePlanClick(plan.serviceSelectValue)}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
                    </Button>
                    <div className="text-center mt-3">
                      <span className="text-[11px] text-slate-500 font-mono">
                        Pre-selects in contact form
                      </span>
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Small Disclaimer Note */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs text-slate-500 font-mono flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>{disclaimer}</span>
          </p>
        </div>

      </div>
    </section>
  );
}

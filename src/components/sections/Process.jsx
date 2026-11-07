import React from 'react';
import { Search, Compass, Layout, Code2, Rocket, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';
import { processSteps } from '../../data/process';

const iconMap = {
  Search,
  Compass,
  Layout,
  Code2,
  Rocket,
};

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-20 lg:py-28 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="Methodology"
          title="A Structured Path From"
          highlight="Concept to Production"
          description="Our 5-phase delivery process eliminates ambiguity, keeps milestones transparent, and guarantees high-grade engineering quality at every checkpoint."
        />

        {/* 5-Step Process Timeline */}
        <div className="relative">
          
          {/* Desktop Connecting Line (hidden on mobile) */}
          <div
            className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-[#00D9FF]/20 via-[#00D9FF]/60 to-[#00D9FF]/20 -translate-y-12 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.iconName] || Code2;
              return (
                <Reveal key={step.stepNumber} delay={index * 80}>
                  <Card className="p-6 h-full flex flex-col justify-between group border border-white/5 hover:border-[#00D9FF]/40 transition-all duration-300">
                    <div>
                      {/* Step Number Badge & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-['Space_Grotesk'] text-2xl font-bold text-[#00D9FF]">
                          {step.stepNumber}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center text-[#00D9FF] group-hover:bg-[#00D9FF] group-hover:text-[#0B1220] transition-colors">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white mb-2">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-400 font-['Inter'] leading-relaxed mb-4">
                        {step.shortDescription}
                      </p>

                      {/* Deliverables */}
                      <div className="pt-3 border-t border-white/5">
                        <span className="text-[10px] uppercase font-mono text-slate-500 block mb-1.5">
                          Milestones
                        </span>
                        <ul className="space-y-1 text-xs text-slate-300">
                          {step.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-1.5 text-[11px]">
                              <CheckCircle2 className="w-3 h-3 text-[#00D9FF] shrink-0" aria-hidden="true" />
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/5 text-[10px] text-slate-500 font-mono">
                      Phase {step.stepNumber} of 05
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

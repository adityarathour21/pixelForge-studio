import React from 'react';
import {
  Code2,
  Cpu,
  ShoppingBag,
  Palette,
  Rocket,
  RefreshCw,
  ShieldCheck,
  SearchCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';
import { services } from '../../data/services';

const iconMap = {
  Code2,
  Cpu,
  ShoppingBag,
  Palette,
  Rocket,
  RefreshCw,
  ShieldCheck,
  SearchCheck,
};

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 lg:py-28 relative z-10 bg-[#080D18]/60 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="Specialized Capabilities"
          title="Engineered Services For"
          highlight="Modern Digital Growth"
          description="We deliver full-lifecycle web development, from responsive frontend architecture and custom React components to search optimization and ongoing maintenance."
        />

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Code2;

            return (
              <Reveal key={service.id} delay={index * 50}>
                <Card
                  className="p-6 h-full flex flex-col justify-between group transition-all duration-300 border border-white/5 hover:border-[#00D9FF]/40 hover:shadow-[0_0_25px_-5px_rgba(0,217,255,0.2)] hover:-translate-y-1"
                >
                  <div>
                    {/* Icon with hover glow animation */}
                    <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center text-[#00D9FF] mb-5 group-hover:scale-110 group-hover:bg-[#00D9FF] group-hover:text-[#0B1220] group-hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all duration-300">
                      <IconComponent className="w-6 h-6 transition-transform duration-300" aria-hidden="true" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2.5 font-['Space_Grotesk'] group-hover:text-[#00D9FF] transition-colors">
                      {service.title}
                    </h3>

                    {/* 1-2 line description */}
                    <p className="text-sm text-slate-400 font-['Inter'] leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Deliverable Checkmarks */}
                    <ul className="space-y-1.5 pt-3 border-t border-white/5 text-xs text-slate-400">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00D9FF] shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer Link to Contact */}
                  <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-[#00D9FF] transition-colors focus:outline-none focus-visible:underline"
                    >
                      <span>Inquire about this</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

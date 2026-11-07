import React from 'react';
import {
  Sparkles,
  Zap,
  Smartphone,
  Search,
  FileCode,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Modern Design",
      description: "Clean typography, intentional spatial math, and restrained color palettes tailored to your industry without trendy AI clutter.",
      icon: Sparkles,
    },
    {
      title: "Fast Performance",
      description: "Optimized bundle sizes, zero bloated third-party trackers, and asset compression that yields sub-second initial loads.",
      icon: Zap,
    },
    {
      title: "Mobile Responsive",
      description: "Built mobile-first from 360px up to 4K displays. Touch targets, drawer navigation, and fluid layouts that never horizontally scroll.",
      icon: Smartphone,
    },
    {
      title: "SEO Friendly",
      description: "Strict semantic HTML5 tags, proper heading hierarchy, Open Graph social share cards, and Schema.org structured data.",
      icon: Search,
    },
    {
      title: "Clean Code",
      description: "Modular React components, standard CSS, well-documented configuration, and no vendor lock-in. Easy to maintain and expand.",
      icon: FileCode,
    },
    {
      title: "On-Time Delivery",
      description: "Structured project phases with transparent milestones, regular staging previews, and realistic delivery schedules you can depend on.",
      icon: Clock,
    },
  ];

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="py-20 lg:py-28 relative z-10 bg-[#080D18]/50 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="Engineering Standards"
          title="Why Work With"
          highlight="PixelForge Studio"
          description="We prioritize technical discipline, transparent communication, and genuine business utility over hollow agency promises."
        />

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 70}>
                <Card className="p-7 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center text-[#00D9FF] mb-5 group-hover:scale-110 group-hover:bg-[#00D9FF] group-hover:text-[#0B1220] transition-all duration-300">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>

                    <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-400 font-['Inter'] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-[#00D9FF] font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Commitment</span>
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

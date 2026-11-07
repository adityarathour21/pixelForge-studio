import React from 'react';
import { Star, Quote, ShieldAlert } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Reveal } from '../ui/Reveal';
import { testimonials } from '../../data/testimonials';

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 lg:py-28 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with explicit demonstration notice */}
        <SectionHeading
          kicker="Demonstration Showcase"
          title="Sample Client"
          highlight="Feedback Format"
          description="These entries illustrate how client endorsements are presented. PixelForge Studio does not publish unverified or fictional reviews. Replace these placeholders with your verified client reviews upon launch."
        />

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((test, index) => (
            <Reveal key={test.id} delay={index * 100}>
              <Card className="p-8 h-full flex flex-col justify-between group border border-white/5 hover:border-[#00D9FF]/40 transition-all duration-300">
                <div>
                  {/* Card Top: Explicit Demo Content badge + Stars */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <Badge variant="sample" size="xs" icon={ShieldAlert}>
                      Demo Content
                    </Badge>
                    <div className="flex items-center gap-1 text-[#00D9FF]">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#00D9FF]" aria-hidden="true" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Text */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-[#00D9FF]/20 absolute -top-3 -left-2 -z-0" aria-hidden="true" />
                    <p className="relative z-10 text-sm sm:text-base text-slate-300 font-['Inter'] leading-relaxed italic">
                      "{test.quote}"
                    </p>
                  </div>
                </div>

                {/* Author Info with Initials Avatar */}
                <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${test.avatarColor} border border-[#00D9FF]/30 flex items-center justify-center font-bold font-['Space_Grotesk'] text-white text-base shadow-sm shrink-0`}
                    aria-hidden="true"
                  >
                    {test.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold font-['Space_Grotesk'] text-white truncate">
                      {test.authorName}
                    </h3>
                    <p className="text-xs text-slate-400 font-['Inter'] truncate">
                      {test.role} • {test.company}
                    </p>
                    <p className="text-[11px] text-[#00D9FF] font-mono mt-0.5">
                      {test.projectType}
                    </p>
                  </div>
                </div>

              </Card>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

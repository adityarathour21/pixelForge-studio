import React, { useRef, useState, useEffect } from 'react';
import { Lightbulb, Award, Zap, HeartHandshake, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Reveal } from '../ui/Reveal';
import { siteConfig } from '../../config/siteConfig';
import { useInView } from '../../hooks/useInView';

/**
 * Animated number counter component
 */
function StatCounter({ targetValue, suffix = '', inView = false, duration = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * targetValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, targetValue, duration]);

  return (
    <span className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums tracking-tight">
      {count}
      <span className="text-[#00D9FF]">{suffix}</span>
    </span>
  );
}

export function About() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { threshold: 0.2 }, true);

  const pillars = [
    {
      title: "Innovation",
      description: "We adopt contemporary web standards and tools (React 19, modern CSS, micro-interactions) to keep your brand ahead of industry curves.",
      icon: Lightbulb,
    },
    {
      title: "Quality",
      description: "From semantic HTML markup to strict TypeScript architecture, we enforce meticulous craftsmanship in every component we deliver.",
      icon: Award,
    },
    {
      title: "Performance",
      description: "Speed is not an afterthought. We optimize asset delivery, minimize re-renders, and target 95+ Core Web Vitals on every viewport.",
      icon: Zap,
    },
    {
      title: "Client Satisfaction",
      description: "We work with open channels, milestone previews, and transparent pricing—forging long-term partnerships, not just single transactions.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 lg:py-28 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="About PixelForge Studio"
          title="Engineered for Clarity,"
          highlight="Forged for Scale."
          description="We are an independent digital agency specializing in modern web design and bespoke web development. We help ambitious businesses establish authoritative, conversion-driven digital flagships."
        />

        {/* Four Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={index * 100}>
                <Card className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center text-[#00D9FF] mb-5">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-['Space_Grotesk']">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-['Inter']">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#00D9FF] font-mono">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Guaranteed Principle</span>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Agency Statistics Banner with Visible Sample Badge */}
        <div
          ref={statsRef}
          className="relative rounded-2xl bg-[#111827] border border-white/10 p-8 sm:p-10 overflow-hidden shadow-2xl"
        >
          {/* Subtle Top Glowing Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent opacity-60" />

          {/* Sample Stats Transparency Notice Banner */}
          {siteConfig.stats.isPlaceholder && (
            <div className="flex items-center justify-center mb-8">
              <Badge variant="sample" size="sm">
                {siteConfig.stats.noticeText}
              </Badge>
            </div>
          )}

          {/* Counters Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {siteConfig.stats.items.map((stat, i) => (
              <div key={stat.id} className={`${i > 1 ? 'pt-6 lg:pt-0' : ''} px-4 flex flex-col items-center justify-center`}>
                <StatCounter
                  targetValue={stat.value}
                  suffix={stat.suffix}
                  inView={isStatsInView}
                />
                <p className="mt-2 text-xs sm:text-sm font-medium text-slate-400 font-['Inter']">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

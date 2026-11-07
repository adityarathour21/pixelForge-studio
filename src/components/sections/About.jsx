import React, { useRef, useState, useEffect } from 'react';
import { Code2, Palette, Zap, HeartHandshake, ShieldCheck } from 'lucide-react';
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
      title: "Technical Excellence",
      description: "We engineer standards-compliant, modular React and semantic CSS architectures that load rapidly and scale effortlessly without technical debt.",
      icon: Code2,
    },
    {
      title: "Human-Centered Design",
      description: "Interfaces crafted with intentional typography, WCAG AA accessibility, and disciplined visual hierarchy that users instinctively trust.",
      icon: Palette,
    },
    {
      title: "Performance First",
      description: "Speed is a core design criterion. We optimize asset delivery, avoid third-party bloat, and target 95+ Core Web Vitals on every screen size.",
      icon: Zap,
    },
    {
      title: "Transparent Partnership",
      description: "Honest scopes, milestone-based communication, clear revision cycles, and direct access to senior engineers without agency bureaucracy.",
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
        
        {/* Section Heading - Honest, modern digital web development studio */}
        <SectionHeading
          kicker="About PixelForge Studio"
          title="A Modern Digital"
          highlight="Web Development Studio"
          description="PixelForge Studio is a modern digital web development studio. We build bespoke, high-performance websites and React applications with intentional typography, accessible interactions, and clean code tailored to help businesses establish strong, trustworthy digital foundations."
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
                    <span>Core Studio Standard</span>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Agency Statistics Banner - Honest & Clearly Badged as Demo Placeholders */}
        {siteConfig.stats.showStats && (
          <div
            ref={statsRef}
            className="relative rounded-2xl bg-[#111827] border border-white/10 p-8 sm:p-10 overflow-hidden shadow-2xl"
          >
            {/* Subtle Top Glowing Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent opacity-60" />

            {/* Demo Placeholders Transparency Notice Banner */}
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
        )}

      </div>
    </section>
  );
}

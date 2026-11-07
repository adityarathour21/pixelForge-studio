import React from 'react';
import { ArrowRight, Code2, Sparkles, CheckCircle2, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { siteConfig } from '../../config/siteConfig';

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] flex items-center pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Prop, CTAs, Trust markers (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827] border border-[#00D9FF]/30 text-xs text-[#00D9FF] font-medium mb-6 shadow-[0_0_15px_-3px_rgba(0,217,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{siteConfig.brand.tagline}</span>
            </div>

            {/* Main H1 - Single H1 on page */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-['Space_Grotesk'] font-bold text-white tracking-tight leading-[1.1] text-balance mb-6"
            >
              We Build Digital Experiences That{' '}
              <span className="bg-gradient-to-r from-white via-[#00D9FF] to-[#00B4D8] bg-clip-text text-transparent">
                Drive Growth.
              </span>
            </h1>

            {/* Supporting Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 font-['Inter'] leading-relaxed max-w-2xl mb-8">
              PixelForge Studio designs and engineers bespoke, high-performance websites and React web applications. 
              We blend intentional typography, lightning-fast architecture, and responsive precision to turn visitors into long-term clients.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="font-bold text-sm"
              >
                Start a Project
              </Button>
              <Button
                href="#portfolio"
                variant="secondary"
                size="lg"
                className="font-semibold text-sm"
              >
                Explore Our Work
              </Button>
            </div>

            {/* Trust Row - Honest & verifiable */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" aria-hidden="true" />
                <span>Fast Core Web Vitals</span>
              </div>
              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" aria-hidden="true" />
                <span>Fluid Mobile Responsive</span>
              </div>
              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" aria-hidden="true" />
                <span>Semantic & SEO-Ready</span>
              </div>
            </div>

          </div>

          {/* Right Column: Original 3D-Style Geometric SVG/CSS Interface Matrix (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Cyan Backglow */}
            <div
              className="absolute w-72 h-72 rounded-full bg-[#00D9FF]/20 blur-[90px] -z-10"
              aria-hidden="true"
            />

            {/* Original Abstract 3D Geometric Isometric Interface (Offline SVG + CSS layers) */}
            <div className="relative w-full max-w-md aspect-square rounded-2xl p-6 bg-[#111827]/70 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
              
              {/* Mock Window Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 bg-[#0B1220] px-2.5 py-0.5 rounded-md border border-white/5">
                  <Code2 className="w-3 h-3 text-[#00D9FF]" />
                  <span>pixelforge.engine</span>
                </div>
              </div>

              {/* Central Geometric Isometric Visual (Pure SVG Art) */}
              <div className="my-auto py-4 flex items-center justify-center">
                <svg
                  viewBox="0 0 320 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-[280px] drop-shadow-[0_15px_25px_rgba(0,217,255,0.25)]"
                  aria-hidden="true"
                >
                  {/* Isometric Ground Grid Lines */}
                  <g stroke="#00D9FF" strokeWidth="0.75" strokeOpacity="0.25">
                    <line x1="160" y1="20" x2="300" y2="100" />
                    <line x1="160" y1="60" x2="300" y2="140" />
                    <line x1="160" y1="100" x2="300" y2="180" />
                    <line x1="160" y1="20" x2="20" y2="100" />
                    <line x1="160" y1="60" x2="20" y2="140" />
                    <line x1="160" y1="100" x2="20" y2="180" />
                  </g>

                  {/* Isometric Center Forge Block (3D Cube) */}
                  {/* Top Face */}
                  <polygon points="160,50 210,80 160,110 110,80" fill="#1F2937" stroke="#00D9FF" strokeWidth="1.5" />
                  {/* Left Face */}
                  <polygon points="110,80 160,110 160,170 110,140" fill="#111827" stroke="#00D9FF" strokeWidth="1.5" />
                  {/* Right Face */}
                  <polygon points="160,110 210,80 210,140 160,170" fill="#0E1626" stroke="#00D9FF" strokeWidth="1.5" />

                  {/* Layered Floating Accent Diamond (Hovering) */}
                  <polygon points="160,25 185,40 160,55 135,40" fill="#00D9FF" fillOpacity="0.9" stroke="#FFFFFF" strokeWidth="1.2" />

                  {/* Glowing Connection Nodes */}
                  <circle cx="210" cy="80" r="3.5" fill="#00D9FF" />
                  <circle cx="110" cy="80" r="3.5" fill="#00D9FF" />
                  <circle cx="160" cy="170" r="3.5" fill="#FFFFFF" />
                  <circle cx="160" cy="25" r="3" fill="#FFFFFF" />
                </svg>
              </div>

              {/* Floating Status Pill Strip */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                <div className="bg-[#0B1220]/90 rounded-xl p-2.5 border border-white/5 flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#00D9FF]/10 text-[#00D9FF]">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">Performance</div>
                    <div className="text-xs font-bold text-white font-['Space_Grotesk']">99/100</div>
                  </div>
                </div>

                <div className="bg-[#0B1220]/90 rounded-xl p-2.5 border border-white/5 flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">Architecture</div>
                    <div className="text-xs font-bold text-white font-['Space_Grotesk']">Clean & Fast</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

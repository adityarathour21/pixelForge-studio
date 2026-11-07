import React from 'react';
import { ArrowUp, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { siteConfig } from '../../config/siteConfig';
import { navLinks } from '../../data/navLinks';
import { services } from '../../data/services';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Social link rendering map
  const socialEntries = [
    { key: 'linkedin', label: 'LinkedIn', icon: Linkedin, url: siteConfig.socials.linkedin },
    { key: 'github', label: 'GitHub', icon: Github, url: siteConfig.socials.github },
    { key: 'twitter', label: 'Twitter / X', icon: Twitter, url: siteConfig.socials.twitter },
    { key: 'instagram', label: 'Instagram', icon: Instagram, url: siteConfig.socials.instagram },
  ].filter((s) => Boolean(s.url && s.url.trim()));

  return (
    <footer className="relative bg-[#080D18] border-t border-white/5 pt-16 pb-12 overflow-hidden z-10">
      {/* Subtle bottom cyan glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#00D9FF]/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Logo size="md" className="mb-4" />
            <p className="text-sm text-slate-400 font-['Inter'] leading-relaxed max-w-sm mb-6">
              {siteConfig.brand.description}
            </p>
            <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D9FF]/80 inline-block" />
              <span>We Forge Digital Experiences.</span>
            </div>

            {/* Social Icons if provided in siteConfig.js */}
            {socialEntries.length > 0 && (
              <div className="flex items-center gap-3 mt-6">
                {socialEntries.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.key}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`PixelForge Studio on ${item.label}`}
                      className="p-2.5 rounded-xl bg-[#111827] border border-white/10 text-slate-400 hover:text-[#00D9FF] hover:border-[#00D9FF]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF]"
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-['Space_Grotesk']">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#00D9FF] transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-['Space_Grotesk']">
              Core Capabilities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {services.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-[#00D9FF] transition-colors focus:outline-none focus-visible:underline block truncate"
                    title={svc.title}
                  >
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {siteConfig.brand.name}. All rights reserved. Crafted with precision & clean code.
          </p>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111827] border border-white/10 text-slate-400 hover:text-white hover:border-[#00D9FF]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00D9FF]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { Menu, MessageSquare } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';
import { useScrolled } from '../../hooks/useScrolled';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { navLinks } from '../../data/navLinks';

/**
 * Sticky Glassmorphism Navigation Bar
 * Follows 1-row, 3-zone contract:
 * [Brand Logo] — [Nav Links with Scroll Spy] — [Primary CTA]
 */
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrolled(20);

  const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds, 100);

  return (
    <>
      {/* Skip to main content link for keyboard / screen reader accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 rounded-xl bg-[#00D9FF] text-[#0B1220] font-bold text-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1220]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <div className="shrink-0">
              <Logo size="md" />
            </div>

            {/* Zone 2: Navigation Links with Scroll Spy */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-[#111827]/60 border border-white/5 backdrop-blur-md"
            >
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'text-[#00D9FF] bg-[#00D9FF]/10 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#00D9FF] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: 1 Primary Action + Mobile Hamburger */}
            <div className="flex items-center gap-3 shrink-0">
              <Button
                href="#contact"
                variant="primary"
                size="sm"
                icon={MessageSquare}
                className="hidden sm:inline-flex text-xs font-bold"
              >
                Let's Talk
              </Button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
                aria-label="Open navigation menu"
                className="lg:hidden p-2.5 rounded-xl bg-[#111827] border border-white/10 text-slate-300 hover:text-white hover:border-[#00D9FF]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF] transition-colors"
              >
                <Menu className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
      />
    </>
  );
}

import React from 'react';

/**
 * Section Heading component following anti-slop typography rules:
 * - Natural human editorial kicker
 * - Balanced headline
 * - Refined supporting prose
 */
export function SectionHeading({
  kicker,
  title,
  highlight,
  description,
  centered = true,
  className = '',
}) {
  return (
    <div className={`mb-14 md:mb-16 ${centered ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-widest text-[#00D9FF] mb-3">
          {kicker}
        </p>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk'] font-bold text-white tracking-tight leading-[1.15] text-balance mb-4">
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-white via-[#00D9FF] to-[#00B4D8] bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className={`text-base sm:text-lg text-slate-400 font-['Inter'] leading-relaxed text-balance ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}

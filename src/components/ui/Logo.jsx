import React from 'react';

/**
 * PixelForge Studio original SVG logo mark & wordmark
 * Represents a pixel anvil forging digital sparks
 */
export function Logo({ size = 'md', showWordmark = true, className = '' }) {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-base', subtext: 'text-[10px]' },
    md: { icon: 'w-9 h-9', text: 'text-lg', subtext: 'text-xs' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl', subtext: 'text-sm' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <a
      href="#home"
      aria-label="PixelForge Studio Home"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF] rounded-lg p-1 transition-transform ${className}`}
    >
      {/* Original Stylized Pixel Anvil Spark SVG Mark */}
      <div className={`relative ${currentSize.icon} shrink-0 rounded-xl bg-[#111827] border border-[#00D9FF]/40 p-1.5 flex items-center justify-center shadow-[0_0_15px_-3px_rgba(0,217,255,0.3)] group-hover:border-[#00D9FF] group-hover:shadow-[0_0_20px_0_rgba(0,217,255,0.5)] transition-all duration-300`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Base anvil foundation */}
          <path
            d="M6 22H26V25C26 25.55 25.55 26 25 26H7C6.45 26 6 25.55 6 25V22Z"
            fill="#374151"
          />
          {/* Anvil waist */}
          <path d="M10 18H22V22H10V18Z" fill="#1F2937" />
          {/* Anvil forging horn & face */}
          <path
            d="M7 12C7 10.9 7.9 10 9 10H22C23.65 10 25 11.35 25 13V15C25 16.1 24.1 17 23 17H7V12Z"
            fill="#00D9FF"
          />
          {/* Spark pixels */}
          <rect x="18" y="4" width="3.5" height="3.5" rx="0.75" fill="#FFFFFF" />
          <rect x="24" y="6" width="3" height="3" rx="0.5" fill="#00D9FF" />
          <rect x="13" y="5" width="2.5" height="2.5" rx="0.5" fill="#67E8F9" />
        </svg>
      </div>

      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className={`font-['Space_Grotesk'] font-bold text-white tracking-tight ${currentSize.text} whitespace-nowrap`}>
            Pixel<span className="text-[#00D9FF]">Forge</span>
          </span>
          <span className={`font-['Inter'] font-medium text-slate-400 tracking-wider uppercase ${currentSize.subtext}`}>
            Studio
          </span>
        </div>
      )}
    </a>
  );
}

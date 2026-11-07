import React from 'react';

/**
 * Reusable Badge component for transparent status markers and highlights
 */
export function Badge({
  children,
  variant = 'neutral',
  size = 'sm',
  className = '',
  icon: Icon,
}) {
  const sizeClasses = {
    xs: 'px-2 py-0.5 text-[10px]',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-xs',
  };

  const variantClasses = {
    // Transparent warning / informative label for sample or demo items
    sample: 'bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium',
    // Cyan brand highlight
    cyan: 'bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30 font-medium',
    // Recommended pricing badge
    recommended: 'bg-[#00D9FF] text-[#0B1220] font-semibold shadow-[0_0_12px_rgba(0,217,255,0.4)]',
    // Clean neutral tag
    neutral: 'bg-white/5 text-slate-300 border border-white/10 font-medium',
    // Tech tag
    tech: 'bg-[#0B1220] text-slate-300 border border-slate-800 text-[11px] font-mono',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full tracking-wide uppercase select-none ${sizeClasses[size] || sizeClasses.sm} ${variantClasses[variant] || variantClasses.neutral} ${className}`}
    >
      {Icon && <Icon className="w-3 h-3 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
    </span>
  );
}

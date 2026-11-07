import React from 'react';

/**
 * Premium dark surface card component
 */
export function Card({
  children,
  className = '',
  hoverEffect = true,
  glass = false,
  onClick,
  role,
  ...props
}) {
  const baseClasses = "rounded-2xl transition-all duration-300 relative overflow-hidden";
  const surfaceClasses = glass
    ? "bg-[#111827]/80 backdrop-blur-xl border border-white/10"
    : "bg-[#111827] border border-white/5";
  const hoverClasses = hoverEffect
    ? "hover:border-[#00D9FF]/40 hover:shadow-[0_0_25px_-5px_rgba(0,217,255,0.18)] hover:-translate-y-1"
    : "";

  return (
    <div
      className={`${baseClasses} ${surfaceClasses} ${hoverClasses} ${className}`}
      onClick={onClick}
      role={role}
      {...props}
    >
      {children}
    </div>
  );
}

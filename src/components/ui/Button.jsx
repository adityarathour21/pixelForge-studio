import React from 'react';

/**
 * Reusable accessible Button / Link component
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  title,
  ariaLabel,
  ...props
}) {
  const baseClasses = "inline-flex items-center justify-center font-['Inter'] font-semibold transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220] whitespace-nowrap shrink-0 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5",
  };

  const variantClasses = {
    primary: "bg-[#00D9FF] text-[#0B1220] hover:bg-[#38E1FF] active:scale-[0.98] shadow-[0_0_20px_-3px_rgba(0,217,255,0.4)] hover:shadow-[0_0_28px_0_rgba(0,217,255,0.6)]",
    secondary: "bg-[#111827] text-white hover:bg-[#1F2937] border border-white/10 hover:border-[#00D9FF]/40 active:scale-[0.98]",
    outline: "bg-transparent text-[#00D9FF] border border-[#00D9FF]/60 hover:bg-[#00D9FF]/10 active:scale-[0.98]",
    ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-white/5 active:scale-[0.98]",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
    </>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        title={title}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
      title={title}
      {...props}
    >
      {content}
    </button>
  );
}

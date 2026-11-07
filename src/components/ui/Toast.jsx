import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

/**
 * Accessible Toast / Alert notification component
 */
export function Toast({
  isOpen,
  type = 'success', // 'success' | 'error' | 'info'
  title,
  message,
  onClose,
  autoCloseMs = 8000,
}) {
  useEffect(() => {
    if (!isOpen || !autoCloseMs || !onClose) return;

    const timer = setTimeout(() => {
      onClose();
    }, autoCloseMs);

    return () => clearTimeout(timer);
  }, [isOpen, autoCloseMs, onClose]);

  if (!isOpen) return null;

  const typeConfig = {
    success: {
      border: 'border-emerald-500/40',
      bg: 'bg-[#111827]',
      text: 'text-emerald-400',
      icon: CheckCircle2,
      role: 'status',
    },
    error: {
      border: 'border-rose-500/40',
      bg: 'bg-[#111827]',
      text: 'text-rose-400',
      icon: AlertCircle,
      role: 'alert',
    },
    info: {
      border: 'border-[#00D9FF]/40',
      bg: 'bg-[#111827]',
      text: 'text-[#00D9FF]',
      icon: Info,
      role: 'status',
    },
  };

  const config = typeConfig[type] || typeConfig.info;
  const IconComponent = config.icon;

  return (
    <div
      role={config.role}
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 max-w-md w-[calc(100vw-3rem)] rounded-2xl ${config.bg} border ${config.border} p-4 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-bottom-5 duration-300`}
    >
      <div className="flex items-start gap-3">
        <IconComponent className={`w-5 h-5 ${config.text} shrink-0 mt-0.5`} aria-hidden="true" />
        <div className="flex-1 min-w-0 pr-2">
          {title && <h3 className="text-sm font-semibold text-white mb-0.5">{title}</h3>}
          <p className="text-xs text-slate-300 leading-relaxed">{message}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss notification"
          className="text-slate-400 hover:text-white p-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF]"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

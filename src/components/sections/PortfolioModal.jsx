import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, CheckCircle2, Calendar, Tag, ShieldAlert } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

/**
 * Accessible Project Modal
 * - Trap focus / Escape to close
 * - Shows Problem Solved, Key Features, Tech Tags, and optional live link
 */
export function PortfolioModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0B1220]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#111827] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto z-10 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="sample" size="xs">
              Demo Concept
            </Badge>
            <span className="text-xs font-mono text-[#00D9FF]">
              {project.categoryLabel}
            </span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF] transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Project Header */}
        <div className="mt-4 mb-6">
          <h2
            id="modal-project-title"
            className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white mb-2"
          >
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-['Inter'] leading-relaxed">
            {project.fullDescription || project.shortDescription}
          </p>
        </div>

        {/* Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#0B1220] border border-white/5 mb-6 text-xs">
          <div>
            <div className="text-slate-500 font-mono mb-1">Sector</div>
            <div className="font-semibold text-slate-200">{project.clientType}</div>
          </div>
          <div>
            <div className="text-slate-500 font-mono mb-1">Concept Year</div>
            <div className="font-semibold text-slate-200">{project.year}</div>
          </div>
          <div>
            <div className="text-slate-500 font-mono mb-1">Delivery Time</div>
            <div className="font-semibold text-slate-200">2-3 Weeks</div>
          </div>
        </div>

        {/* Problem Solved */}
        {project.problemSolved && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-['Space_Grotesk'] mb-2 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#00D9FF]" />
              <span>Challenge & Solution</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed bg-[#0B1220]/50 p-4 rounded-xl border border-white/5">
              {project.problemSolved}
            </p>
          </div>
        )}

        {/* Key Features */}
        {project.keyFeatures && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-['Space_Grotesk'] mb-3">
              Engineered Capabilities
            </h3>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00D9FF] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-['Space_Grotesk'] mb-2.5">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techTags.map((tag) => (
              <Badge key={tag} variant="tech">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 font-mono">
            Demo project created by PixelForge Studio
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF]"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Request Similar Project
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

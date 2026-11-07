import React from 'react';

/**
 * Ambient background with subtle CSS cyan glow orbs
 * Pure CSS, lightweight, strictly respecting prefers-reduced-motion
 */
export function GlowBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Top subtle cyan aura */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[140px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #00D9FF 0%, rgba(11,18,32,0) 70%)',
        }}
      />

      {/* Mid page floating ambient orb */}
      <div
        className="absolute top-[35%] -left-48 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #00B4D8 0%, rgba(11,18,32,0) 70%)',
        }}
      />

      {/* Lower right cyan orb */}
      <div
        className="absolute top-[70%] -right-48 w-[600px] h-[600px] rounded-full blur-[180px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #00D9FF 0%, rgba(11,18,32,0) 70%)',
        }}
      />

      {/* Delicate grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
}

import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';

/**
 * Scroll reveal container that triggers once when element enters viewport
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }, true);

  const getTransformClasses = () => {
    if (isInView) return 'opacity-100 translate-x-0 translate-y-0';
    switch (direction) {
      case 'up':
        return 'opacity-0 translate-y-6';
      case 'down':
        return 'opacity-0 -translate-y-6';
      case 'left':
        return 'opacity-0 translate-x-6';
      case 'right':
        return 'opacity-0 -translate-x-6';
      case 'none':
      default:
        return 'opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
}

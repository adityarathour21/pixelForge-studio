import { useState, useEffect } from 'react';

/**
 * Custom hook to detect when page has been scrolled beyond a threshold
 * @param {number} threshold - Scroll Y distance in pixels
 * @returns {boolean} - True if window.scrollY > threshold
 */
export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

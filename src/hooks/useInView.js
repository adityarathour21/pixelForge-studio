import { useState, useEffect } from 'react';

/**
 * Custom hook for IntersectionObserver reveal triggers
 * @param {React.RefObject} ref - DOM element reference to observe
 * @param {Object} options - IntersectionObserverInit options
 * @param {boolean} triggerOnce - Whether to stay true once triggered
 * @returns {boolean} - Whether element is currently in view
 */
export function useInView(ref, options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }, triggerOnce = true) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref?.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      // Fallback if IntersectionObserver is not available or ref is empty
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, options.threshold, options.rootMargin, triggerOnce]);

  return isInView;
}

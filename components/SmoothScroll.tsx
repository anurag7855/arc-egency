import React, { useEffect } from 'react';
import Lenis from 'lenis';

export const SmoothScroll: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis for smooth momentum scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Request Animation Frame loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Global interceptor for anchor links to use Lenis scroll
    const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a');
        
        if (anchor) {
            const href = anchor.getAttribute('href');
            // Only intercept internal links
            if (href?.startsWith('#')) {
                e.preventDefault();
                
                if (href === '#') return;
                
                const element = document.querySelector(href);
                if (element) {
                    // Scroll to element with 100px offset for the fixed navbar
                    lenis.scrollTo(element, { offset: -100 }); 
                }
            }
        }
    };

    // Attach global listener
    window.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      lenis.destroy();
      window.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
};
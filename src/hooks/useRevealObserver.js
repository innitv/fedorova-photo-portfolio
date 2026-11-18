import { useEffect } from 'react';

export function useRevealObserver(triggerKey) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal-item'));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -20px 0px' }
    );

    elements.forEach((el) => {
      el.classList.remove('is-visible');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [triggerKey]);
}

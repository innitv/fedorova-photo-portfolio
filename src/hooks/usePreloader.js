import { useEffect, useState } from 'react';

export function usePreloader(durationMs = 900) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let rafId;
    const start = performance.now();

    const step = (now) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setIsDone(true);
        document.body.classList.add('is-ready');
      }
    };

    rafId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafId);
      document.body.classList.remove('is-ready');
    };
  }, [durationMs]);

  return { progress, isDone };
}

import { useEffect } from 'react';

export function useNavAxis(navRef) {
  useEffect(() => {
    const sync = () => {
      if (!navRef.current) return;
      const left = Math.round(navRef.current.getBoundingClientRect().left);
      document.documentElement.style.setProperty('--nav-axis', `${left}px`);
    };

    sync();
    window.addEventListener('resize', sync);
    document.fonts?.ready?.then(sync);

    return () => window.removeEventListener('resize', sync);
  }, [navRef]);
}

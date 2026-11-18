import { Fragment, useRef } from 'react';
import { NAV_ITEMS, SITE_META } from '@/data/portfolio';
import { useClock } from '@/hooks/useClock';
import { useNavAxis } from '@/hooks/useNavAxis';

export function Header({ activeView, onNavigate }) {
  const navRef = useRef(null);
  const clockText = useClock();
  useNavAxis(navRef);

  return (
    <header className="site-header">
      <div className="header-left">
        <a
          href="#collections"
          className="brand-mark"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('collections');
          }}
        >
          {SITE_META.brand}
        </a>
      </div>

      <div className="header-center">
        <nav className="main-nav" ref={navRef} aria-label="Основная навигация">
          {NAV_ITEMS.map((item, idx) => (
            <Fragment key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeView === item.id ? 'is-active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
              >
                {item.label}
              </a>
              {idx < NAV_ITEMS.length - 1 && <span className="nav-comma">,</span>}
            </Fragment>
          ))}
        </nav>
        <div className="header-clock">{clockText}</div>
      </div>

      <div className="header-right">
        <button
          className="text-cta"
          type="button"
          onClick={() => onNavigate('contact')}
        >
          Забронировать
        </button>
      </div>
    </header>
  );
}

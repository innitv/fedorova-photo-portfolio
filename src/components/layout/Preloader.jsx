import { SITE_META } from '@/data/portfolio';

export function Preloader({ progress, isDone }) {
  return (
    <div
      className={`site-preloader ${isDone ? 'is-done' : ''}`}
      aria-hidden="true"
    >
      <div className="preloader-inner">
        <span className="preloader-brand">{SITE_META.brand}</span>
        <span className="preloader-count mono-meta">
          {String(progress).padStart(2, '0')}%
        </span>
      </div>
      <div
        className="preloader-line"
        style={{ '--load-progress': progress / 100 }}
      />
    </div>
  );
}

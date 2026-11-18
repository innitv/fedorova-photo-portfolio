import { SITE_META } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-col">
        <span className="mono-meta">{SITE_META.footerLeft}</span>
      </div>
      <div className="footer-col footer-col--right">
        <span className="mono-meta">{SITE_META.footerRight}</span>
      </div>
    </footer>
  );
}

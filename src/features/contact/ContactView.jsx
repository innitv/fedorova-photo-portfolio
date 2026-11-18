import { useState } from 'react';
import { SITE_META } from '@/data/portfolio';

export function ContactView() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(SITE_META.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="page-view is-active">
      <div className="contact-axis-column">
        <div className="contact-axis-head reveal-item" style={{ '--reveal-delay': '0ms' }}>
          <div className="ocha-word-tl">
            даша
            <br />
            фёдорова
          </div>
          <p className="contact-hero-note">
            фотограф, {SITE_META.city}. открыта к портретным, коммерческим съёмкам и мероприятиям.
          </p>
        </div>

        <div className="contact-email-row reveal-item" style={{ '--reveal-delay': '65ms' }}>
          <span className="mono-label">(почта)</span>
          <div className="contact-email-actions">
            <a href={`mailto:${SITE_META.email}`} className="contact-giant-link">
              {SITE_META.email}
            </a>
            <button
              className="inline-link"
              type="button"
              onClick={handleCopyEmail}
            >
              {copied ? 'скопировано ✓' : 'скопировать адрес'}
            </button>
          </div>
        </div>

        <div className="contact-socials-stack reveal-item" style={{ '--reveal-delay': '130ms' }}>
          <a
            href={SITE_META.telegram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-cell"
          >
            <span className="mono-label">(мессенджер)</span>
            <div className="ocha-srv-slash">/telegram ↗</div>
            <span className="mono-meta">{SITE_META.telegram.handle}</span>
          </a>

          <a
            href={SITE_META.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-cell"
          >
            <span className="mono-label">(лента)</span>
            <div className="ocha-srv-slash">/instagram ↗</div>
            <span className="mono-meta">{SITE_META.instagram.handle}</span>
          </a>
        </div>

        <div className="contact-footer-note reveal-item" style={{ '--reveal-delay': '195ms' }}>
          <p>
            чтобы забронировать дату, просто напиши в telegram или на почту пару слов о задаче и желаемом дне съёмки. отвечаю в течение дня.
          </p>
        </div>
      </div>
    </section>
  );
}

import { SERIES, SERVICES } from '@/data/portfolio';
import { useHorizontalDrag } from '@/hooks/useHorizontalDrag';

const RHYTHM_CLASSES = ['', 'detail-hframe--compact', 'detail-hframe--wide'];

export function DetailView({ detail, onBack, onBook }) {
  const isSeries = detail.type === 'series';
  const item = isSeries
    ? SERIES.find((s) => s.id === detail.id)
    : SERVICES.find((s) => s.id === detail.id);

  const gallery = isSeries
    ? item?.gallery || []
    : item
      ? [item.image]
      : [];

  const {
    trackRef,
    frameRefs,
    progressPct,
    activeFrame,
    isDragging,
    badge,
    jumpToFrame,
  } = useHorizontalDrag(gallery.length);

  if (!item) return null;

  const totalStr = String(gallery.length).padStart(2, '0');
  const backLabel = isSeries ? '← Назад к коллекциям' : '← Назад к услугам';
  const indexLabel = isSeries ? `${item.code} ${item.categoryLabel}` : item.code;

  return (
    <section className="page-view is-active">
      <div className="detail-page-topbar">
        <button className="inline-link" type="button" onClick={onBack}>
          {backLabel}
        </button>
        <span className="mono-meta">{indexLabel}</span>
      </div>

      <div className="detail-page-layout">
        <div className="detail-info-col">
          <h1 className="lowercase-display">{item.title}</h1>
          <p className="body-muted">
            {isSeries ? item.description : item.summary}
          </p>

          <ul className="service-specs">
            {isSeries ? (
              <>
                <li>
                  <span className="mono-label">локация</span>
                  {item.location}
                </li>
                <li>
                  <span className="mono-label">техника</span>
                  {item.camera}
                </li>
                <li>
                  <span className="mono-label">год</span>
                  {item.year}
                </li>
              </>
            ) : (
              <>
                <li>
                  <span className="mono-label">стоимость</span>
                  {item.price}
                </li>
                <li>
                  <span className="mono-label">длительность</span>
                  {item.duration}
                </li>
                <li>
                  <span className="mono-label">результат</span>
                  {item.delivery}
                </li>
                {item.specs.map((sp) => (
                  <li key={sp}>· {sp}</li>
                ))}
              </>
            )}
          </ul>

          <button className="inline-link" type="button" onClick={onBook}>
            {isSeries ? 'Заказать похожую съёмку →' : 'Забронировать этот формат →'}
          </button>
        </div>

        <div className="detail-gallery-col">
          <div
            ref={trackRef}
            className={`detail-hscroll ${isDragging ? 'is-dragging' : ''}`}
          >
            {gallery.map((src, idx) => {
              const numStr = String(idx + 1).padStart(2, '0');
              const rhythm = isSeries ? RHYTHM_CLASSES[idx % RHYTHM_CLASSES.length] : '';
              return (
                <figure
                  key={`${src}-${idx}`}
                  ref={(el) => {
                    frameRefs.current[idx] = el;
                  }}
                  className={`detail-hframe ${rhythm}`}
                >
                  <img src={src} alt={`${item.title} — кадр ${idx + 1}`} />
                  <figcaption className="mono-caption">
                    <span>(f{idx + 1})</span>
                    <span>
                      {isSeries ? `${numStr} / ${totalStr}` : 'пример формата'}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {gallery.length > 1 && (
            <div className="detail-showcase-bar">
              <div className="detail-progress-track">
                <div
                  className="detail-progress-fill"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <div className="detail-frame-jumps">
                {gallery.map((_, idx) => (
                  <button
                    key={idx}
                    className={`detail-jump-btn ${activeFrame === idx ? 'is-active' : ''}`}
                    type="button"
                    onClick={() => jumpToFrame(idx)}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={`drag-cursor-badge ${badge.visible ? 'is-visible' : ''} ${badge.pressed ? 'is-pressed' : ''}`}
        style={{ left: `${badge.x}px`, top: `${badge.y}px` }}
        aria-hidden="true"
      >
        DRAG
      </div>
    </section>
  );
}

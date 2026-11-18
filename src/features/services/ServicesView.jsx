import { SERVICES } from '@/data/portfolio';

export function ServicesView({ onOpenService }) {
  return (
    <section className="page-view is-active">
      <div className="ocha-services-wrap">
        <div className="ocha-services-header">
          <span className="ocha-slash-big">форматы съёмок</span>
          <span className="ocha-paren-top">(услуги)</span>
        </div>

        <div className="ocha-services-list">
          {SERVICES.map((srv, idx) => (
            <article
              key={srv.id}
              className="ocha-srv-item reveal-item"
              style={{ '--reveal-delay': `${idx * 65}ms` }}
              onClick={() => onOpenService(srv.id)}
            >
              <div className="ocha-srv-title-col">
                <div className="ocha-srv-slash">
                  /{srv.title}{' '}
                  <span className="ocha-italic-paren" style={{ fontSize: '0.62em' }}>
                    (0{idx + 1})
                  </span>
                </div>
              </div>
              <div className="ocha-srv-desc-col">
                <p className="ocha-srv-sub">{srv.summary}</p>
                <div className="ocha-srv-specs-inline">
                  {srv.specs.join(' · ')}
                </div>
              </div>
              <div className="ocha-srv-price-col">
                <div className="ocha-srv-price">{srv.price}</div>
                <div className="mono-meta">{srv.duration}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

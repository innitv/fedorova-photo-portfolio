import { useState } from 'react';
import { CATEGORIES, PHOTO_TILES, SERIES } from '@/data/portfolio';
import { useRevealObserver } from '@/hooks/useRevealObserver';

export function CollectionsView({ onOpenSeries }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [mode, setMode] = useState('grid');
  const [hoverPreview, setHoverPreview] = useState({ visible: false, src: '' });
  const [loadedImgs, setLoadedImgs] = useState({});

  useRevealObserver(`${activeFilter}-${mode}`);

  const tiles =
    activeFilter === 'all'
      ? PHOTO_TILES
      : PHOTO_TILES.filter((t) => t.category === activeFilter);

  const seriesList =
    activeFilter === 'all'
      ? SERIES
      : SERIES.filter((s) => s.category === activeFilter);

  const countRange = `01–${String(tiles.length).padStart(2, '0')} [↓]`;

  const markLoaded = (src) => {
    setLoadedImgs((prev) => (prev[src] ? prev : { ...prev, [src]: true }));
  };

  return (
    <section className="page-view is-active">
      <div className="eos-collection-layout">
        <aside className="eos-sidebar" aria-label="Категории съёмок">
          <div className="eos-sidebar-top">
            <button
              className={`eos-all-btn ${activeFilter === 'all' ? 'is-active' : ''}`}
              type="button"
              onClick={() => setActiveFilter('all')}
            >
              Все
            </button>
            <div className="eos-sidebar-controls">
              <span className="mono-meta">{countRange}</span>
              <button
                className={`eos-mode-toggle mono-meta ${mode === 'index' ? 'is-active' : ''}`}
                type="button"
                onClick={() => setMode((m) => (m === 'grid' ? 'index' : 'grid'))}
              >
                {mode === 'grid' ? 'Index' : 'Grid'}
              </button>
            </div>
          </div>

          <div className="eos-accordion">
            {CATEGORIES.map((cat) => {
              const isOpen = activeFilter === cat.id;
              const shoots = cat.seriesIds
                .map((sid) => SERIES.find((s) => s.id === sid))
                .filter(Boolean);

              return (
                <div
                  key={cat.id}
                  className={`eos-cat-item ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    className="eos-cat-trigger"
                    type="button"
                    onClick={() =>
                      setActiveFilter((prev) => (prev === cat.id ? 'all' : cat.id))
                    }
                  >
                    <span>{cat.label}</span>
                    <span className="eos-cat-chevron">{isOpen ? '^' : '⌄'}</span>
                  </button>

                  {isOpen && (
                    <div className="eos-cat-body">
                      <ul className="eos-cat-specs">
                        {cat.specs.map((sp) => (
                          <li key={sp}>
                            <span>{sp}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="eos-cat-shoots">
                        {shoots.map((s) => (
                          <button
                            key={s.id}
                            className="eos-shoot-link"
                            type="button"
                            onClick={() => onOpenSeries(s.id)}
                          >
                            {s.code} {s.title} →
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        <div className="eos-grid-stage">
          {mode === 'grid' ? (
            <div
              className={`eos-scattered-grid ${activeFilter !== 'all' ? 'is-filtered' : ''}`}
            >
              {tiles.map((tile, idx) => (
                <figure
                  key={`${tile.seriesId}-${tile.code}`}
                  className={`eos-tile eos-slot-${idx % 12} reveal-item`}
                  style={{ '--reveal-delay': `${Math.min(idx, 8) * 45}ms` }}
                  onClick={() => onOpenSeries(tile.seriesId)}
                >
                  <div className="eos-tile-media">
                    <img
                      src={tile.img}
                      alt={tile.title}
                      loading={idx < 4 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </div>
                  <figcaption className="eos-tile-caption">
                    <span className="eos-tile-name">{tile.title}</span>
                    <span className="eos-tile-code">{tile.code}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="index-portfolio-wrap">
              <div className="index-table-head mono-label">
                <span>№</span>
                <span>Серия / проект</span>
                <span>Жанр</span>
                <span>Локация</span>
                <span>Год</span>
                <span></span>
              </div>
              <div className="index-table-body">
                {seriesList.map((item) => (
                  <div
                    key={item.id}
                    className="index-row"
                    onClick={() => onOpenSeries(item.id)}
                    onMouseEnter={() =>
                      setHoverPreview({ visible: true, src: item.cover })
                    }
                    onMouseLeave={() =>
                      setHoverPreview((p) => ({ ...p, visible: false }))
                    }
                  >
                    <span className="mono-meta">{item.code}</span>
                    <span className="index-row-title">{item.title}</span>
                    <span className="mono-meta">{item.categoryLabel}</span>
                    <span className="mono-meta">{item.location}</span>
                    <span className="mono-meta">{item.year}</span>
                    <span className="mono-meta">открыть →</span>
                  </div>
                ))}
              </div>
              <div
                className={`index-hover-preview ${hoverPreview.visible ? 'is-visible' : ''}`}
                aria-hidden="true"
              >
                {hoverPreview.src && <img src={hoverPreview.src} alt="" />}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const SERIES = [
  {
    id: 's01',
    code: '[01]',
    title: 'вечерний силуэт',
    category: 'portrait',
    categoryLabel: 'портрет',
    location: 'студия / тюмень',
    year: '2025',
    camera: 'цифра / студийный свет',
    layoutClass: 'p-card--wide',
    description:
      'портретная серия с акцентом на графику силуэта, фактуру бархата и чистый студийный свет.',
    cover: 'photos/photo_2025-02-04_18-21-31.jpg',
    gallery: [
      'photos/photo_2025-02-04_18-21-31.jpg',
      'photos/photo_2025-02-04_18-21-36.jpg',
      'photos/photo_2025-02-04_18-21-50.jpg',
      'photos/photo_2025-07-22_20-19-55.jpg',
    ],
  },
  {
    id: 's02',
    code: '[02]',
    title: 'розовый винил',
    category: 'portrait',
    categoryLabel: 'портрет',
    location: 'студия / тюмень',
    year: '2025',
    camera: 'цифра / 50mm',
    layoutClass: 'p-card--offset-right',
    description:
      'эдиториал-съёмка с контрастом плотного тёмного пальто, живого цветка и глянцевого розового фона.',
    cover: 'photos/photo_2025-03-25_16-48-53.jpg',
    gallery: [
      'photos/photo_2025-03-25_16-48-53.jpg',
      'photos/photo_2025-03-25_16-49-01.jpg',
      'photos/photo_2025-03-25_16-49-21.jpg',
      'photos/photo_2025-03-25_16-49-30.jpg',
    ],
  },
  {
    id: 's03',
    code: '[03]',
    title: 'двадцать шесть',
    category: 'event',
    categoryLabel: 'мероприятие',
    location: 'студия / день рождения',
    year: '2025',
    camera: 'цифра / импульсный свет',
    layoutClass: 'p-card--center-left',
    description:
      'праздничная съёмка дня рождения и камерного вечера: живые эмоции, ирония, глянцевый фон и настроение момента.',
    cover: 'photos/photo_2025-07-06_12-04-45.jpg',
    gallery: [
      'photos/photo_2025-07-06_12-04-45.jpg',
      'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553544260-f87e671974ee?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 's04',
    code: '[04]',
    title: 'циклорама / оранж',
    category: 'commercial',
    categoryLabel: 'коммерция',
    location: 'циклорама / цветной свет',
    year: '2025',
    camera: 'цифра / цветные фильтры',
    layoutClass: 'p-card--large-right',
    description:
      'коммерческий лукбук на цветной циклораме: движение, деним, чистый цветовой акцент и работа с пластикой.',
    cover: 'photos/photo_2025-07-11_13-33-49.jpg',
    gallery: [
      'photos/photo_2025-07-11_13-33-49.jpg',
      'photos/photo_2025-07-11_13-33-55.jpg',
      'photos/photo_2025-07-11_13-33-59.jpg',
      'photos/photo_2025-07-11_13-34-19.jpg',
      'https://images.unsplash.com/photo-1603189343302-e603f7add05a?w=1200&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 's05',
    code: '[05]',
    title: 'белое кружево',
    category: 'lifestyle',
    categoryLabel: 'лайфстайл',
    location: 'студия / мягкий свет',
    year: '2025',
    camera: 'цифра / 35mm + 50mm',
    layoutClass: 'p-card--mid-left',
    description:
      'нежная светлая съёмка в пастельных тонах: фокус на взгляде, позе и мягких тенях.',
    cover: 'photos/photo_2025-07-22_20-19-55.jpg',
    gallery: [
      'photos/photo_2025-07-22_20-19-55.jpg',
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592355591829-aaae33fcff1d?w=1200&q=80&auto=format&fit=crop',
      'photos/photo_2025-02-04_18-21-50.jpg',
    ],
  },
  {
    id: 's06',
    code: '[06]',
    title: 'деним и градиент',
    category: 'commercial',
    categoryLabel: 'коммерция',
    location: 'студия / циклорама',
    year: '2026',
    camera: 'цифра / мягкий свет',
    layoutClass: 'p-card--tall-right',
    description:
      'студийный коммерческий лукбук в дениме на мягком розово-сером градиенте: пластика, очки и чистая геометрия кадра.',
    cover: 'photos/photo_2026-11-18_21-11-37.jpg',
    gallery: [
      'photos/photo_2026-11-18_21-11-37.jpg',
      'photos/photo_2026-11-18_21-11-37 (2).jpg',
      'photos/photo_2026-11-18_21-11-38.jpg',
      'photos/photo_2026-11-18_21-11-39.jpg',
    ],
  },
];

const SERVICES = [
  {
    id: 'srv-01',
    code: '01 / портрет',
    title: 'персональный и editorial-портрет',
    summary: 'камерные съёмки для личного архива, артистов, экспертов и публикаций.',
    price: 'от 18 000 ₽',
    duration: '1.5–2 часа',
    delivery: '40–60 кадров в цветокоррекции + 10 в ретуши',
    specs: ['подбор локации и света', 'помощь с референсами и образом', 'опционально 35mm плёнка', 'отдача за 5–7 дней'],
    image: 'photos/photo_2025-02-04_18-21-31.jpg',
  },
  {
    id: 'srv-02',
    code: '02 / мероприятия',
    title: 'репортаж событий и закрытых ужинов',
    summary: 'выставки, камерные ужины, дни рождения, презентации брендов и частные события.',
    price: 'от 10 000 ₽ / час',
    duration: 'от 2 часов',
    delivery: 'превью 15 кадров в первые 24 часа, вся серия за 3 дня',
    specs: ['деликатное присутствие', 'работа в сложном вечернем свете', 'живые эмоции и атмосфера места', 'закрытая онлайн-галерея'],
    image: 'photos/photo_2025-07-06_12-04-45.jpg',
  },
  {
    id: 'srv-03',
    code: '03 / лайфстайл',
    title: 'лайфстайл и живые истории',
    summary: 'съёмки дома, на прогулке, в студии или в любимом пространстве без постановки.',
    price: 'от 16 000 ₽',
    duration: '1.5–2 часа',
    delivery: '50+ живых кадров через 5 дней',
    specs: ['естественный ритм без заученных поз', 'съёмка для одного человека, пары или семьи', 'возможен выезд за город'],
    image: 'photos/photo_2025-07-22_20-19-55.jpg',
  },
  {
    id: 'srv-04',
    code: '04 / коммерция',
    title: 'кампейны, лукбуки и команды',
    summary: 'визуальные истории для брендов одежды, пространств и команд (без предметной каталожки).',
    price: 'от 35 000 ₽',
    duration: 'полдня / смена',
    delivery: 'согласование мудборда + серия для сайта и соцсетей',
    specs: ['разработка визуальной концепции', 'работа со стилистом и сет-дизайном', 'коммерческая лицензия на использование'],
    image: 'photos/photo_2025-07-11_13-33-49.jpg',
  },
];

const CATEGORIES = [
  {
    id: 'portrait',
    label: '01_ Портреты',
    specs: ['Студия / естественный свет', 'Тюмень / выезд', '40–60 кадров', 'Отдача 5–7 дней'],
    seriesIds: ['s01', 's02'],
  },
  {
    id: 'event',
    label: '02_ Мероприятия',
    specs: ['Репортаж и праздники', 'Живые эмоции', 'Превью за 24 часа', 'Онлайн-галерея'],
    seriesIds: ['s03'],
  },
  {
    id: 'lifestyle',
    label: '03_ Лайфстайл',
    specs: ['Студия / дом / прогулка', 'Мягкий свет', '50+ кадров', 'Отдача 5 дней'],
    seriesIds: ['s05'],
  },
  {
    id: 'commercial',
    label: '04_ Коммерция',
    specs: ['Кампейны и лукбуки', 'Цветной свет и циклорама', 'Без предметки', 'Коммерческая лицензия'],
    seriesIds: ['s04', 's06'],
  },
];

const PHOTO_TILES = [
  { title: 'вечерний силуэт', code: '01/01', category: 'portrait', seriesId: 's01', img: 'photos/photo_2025-02-04_18-21-31.jpg' },
  { title: 'белое кружево', code: '03/01', category: 'lifestyle', seriesId: 's05', img: 'photos/photo_2025-07-22_20-19-55.jpg' },
  { title: 'розовый винил', code: '01/02', category: 'portrait', seriesId: 's02', img: 'photos/photo_2025-03-25_16-48-53.jpg' },
  { title: 'утренний воздух', code: '03/02', category: 'lifestyle', seriesId: 's05', img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1000&q=80&auto=format&fit=crop' },
  { title: 'двадцать шесть', code: '02/01', category: 'event', seriesId: 's03', img: 'photos/photo_2025-07-06_12-04-45.jpg' },
  { title: 'циклорама / 01', code: '04/01', category: 'commercial', seriesId: 's04', img: 'photos/photo_2025-07-11_13-33-49.jpg' },
  { title: 'закрытый ужин', code: '02/02', category: 'event', seriesId: 's03', img: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1000&q=80&auto=format&fit=crop' },
  { title: 'циклорама / 02', code: '04/02', category: 'commercial', seriesId: 's04', img: 'photos/photo_2025-07-11_13-33-55.jpg' },
  { title: 'бархат и свет', code: '01/03', category: 'portrait', seriesId: 's01', img: 'photos/photo_2025-02-04_18-21-36.jpg' },
  { title: 'роза и тренч', code: '01/04', category: 'portrait', seriesId: 's02', img: 'photos/photo_2025-03-25_16-49-21.jpg' },
  { title: 'пауза дня', code: '03/03', category: 'lifestyle', seriesId: 's05', img: 'https://images.unsplash.com/photo-1592355591829-aaae33fcff1d?w=1000&q=80&auto=format&fit=crop' },
  { title: 'деним и градиент', code: '04/03', category: 'commercial', seriesId: 's06', img: 'photos/photo_2026-11-18_21-11-37.jpg' },
];

// ==================== STATE ====================
let activeFilter = 'all';
let portfolioMode = 'grid';

// ==================== LIVE CLOCK ====================
function updateClock() {
  const el = document.getElementById('live-clock');
  if (!el) return;
  const now = new Date();
  const dateStr = now.toLocaleDateString('ru-RU');
  const timeStr = now.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const offsetHours = -now.getTimezoneOffset() / 60;
  const sign = offsetHours >= 0 ? '+' : '';
  el.textContent = `${dateStr} ${timeStr} +GMT${sign}${offsetHours}`;
}
updateClock();
setInterval(updateClock, 1000);

// ==================== NAVIGATION ====================
function navigateTo(viewName) {
  document.querySelectorAll('.page-view').forEach((v) => {
    v.classList.toggle('is-active', v.id === `view-${viewName}`);
  });
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('is-active', link.dataset.nav === viewName);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  requestAnimationFrame(() => observeReveals());
}

document.addEventListener('click', (e) => {
  const navTrigger = e.target.closest('[data-nav]');
  if (navTrigger) {
    e.preventDefault();
    navigateTo(navTrigger.dataset.nav);
    return;
  }

  const seriesTrigger = e.target.closest('[data-series-id]');
  if (seriesTrigger) {
    openSeriesDrawer(seriesTrigger.dataset.seriesId);
    return;
  }

  const serviceTrigger = e.target.closest('[data-service-id]');
  if (serviceTrigger) {
    openServiceDrawer(serviceTrigger.dataset.serviceId);
  }
});

document.getElementById('open-booking-btn').addEventListener('click', () => {
  navigateTo('contact');
});

// ==================== HOME SERVICES PREVIEW ====================
function renderHomeServices() {
  const grid = document.getElementById('home-services-grid');
  if (!grid) return;
  grid.innerHTML = SERVICES.map(
    (s) => `
    <article class="swiss-cell" data-service-id="${s.id}">
      <div>
        <span class="mono-label">${s.code}</span>
        <h3>${s.title}</h3>
        <p>${s.summary}</p>
      </div>
      <div class="swiss-cell-foot">
        <span>${s.price}</span>
        <span>подробнее →</span>
      </div>
    </article>
  `
  ).join('');
}

// ==================== PORTFOLIO RENDER (éos ACCORDION + SCATTERED GRID) ====================
function renderAccordion() {
  const accordion = document.getElementById('eos-accordion');
  const allBtn = document.getElementById('eos-all-btn');
  if (!accordion) return;

  allBtn.classList.toggle('is-active', activeFilter === 'all');

  accordion.innerHTML = CATEGORIES.map((cat) => {
    const isOpen = activeFilter === cat.id;
    const shoots = cat.seriesIds
      .map((sid) => SERIES.find((s) => s.id === sid))
      .filter(Boolean);

    return `
      <div class="eos-cat-item ${isOpen ? 'is-open' : ''}">
        <button class="eos-cat-trigger" type="button" data-cat-id="${cat.id}">
          <span>${cat.label}</span>
          <span class="eos-cat-chevron">${isOpen ? '^' : '⌄'}</span>
        </button>
        <div class="eos-cat-body">
          <ul class="eos-cat-specs">
            ${cat.specs.map((sp) => `<li><span>${sp}</span></li>`).join('')}
          </ul>
          <div class="eos-cat-shoots">
            ${shoots
              .map(
                (s) =>
                  `<button class="eos-shoot-link" type="button" data-series-id="${s.id}">${s.code} ${s.title} →</button>`
              )
              .join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function getFilteredTiles() {
  if (activeFilter === 'all') return PHOTO_TILES;
  return PHOTO_TILES.filter((t) => t.category === activeFilter);
}

function getFilteredSeries() {
  if (activeFilter === 'all') return SERIES;
  return SERIES.filter((item) => item.category === activeFilter);
}

function renderPortfolio() {
  renderAccordion();

  const tiles = getFilteredTiles();
  const seriesList = getFilteredSeries();
  const gridEl = document.getElementById('portfolio-grid-container');
  const indexEl = document.getElementById('portfolio-index-container');
  const rowsEl = document.getElementById('portfolio-index-rows');
  const countEl = document.getElementById('eos-count-range');

  if (countEl) {
    const total = String(tiles.length).padStart(2, '0');
    countEl.textContent = `01–${total} [↓]`;
  }

  if (portfolioMode === 'grid') {
    gridEl.classList.remove('is-hidden');
    indexEl.classList.add('is-hidden');
  } else {
    gridEl.classList.add('is-hidden');
    indexEl.classList.remove('is-hidden');
  }

  gridEl.classList.toggle('is-filtered', activeFilter !== 'all');

  gridEl.innerHTML = tiles
    .map(
      (tile, idx) => `
    <figure class="eos-tile eos-slot-${idx % 12} reveal-item" style="--reveal-delay: ${Math.min(idx, 8) * 45}ms" data-series-id="${tile.seriesId}">
      <div class="eos-tile-media">
        <img src="${tile.img}" alt="${tile.title}" loading="${idx < 4 ? 'eager' : 'lazy'}" decoding="async" />
      </div>
      <figcaption class="eos-tile-caption">
        <span class="eos-tile-name">${tile.title}</span>
        <span class="eos-tile-code">${tile.code}</span>
      </figcaption>
    </figure>
  `
    )
    .join('');

  bindTileImageFade();
  observeReveals();

  rowsEl.innerHTML = seriesList
    .map(
      (item) => `
    <div class="index-row" data-series-id="${item.id}" data-preview="${item.cover}">
      <span class="mono-meta">${item.code}</span>
      <span class="index-row-title">${item.title}</span>
      <span class="mono-meta">${item.categoryLabel}</span>
      <span class="mono-meta">${item.location}</span>
      <span class="mono-meta">${item.year}</span>
      <span class="mono-meta">открыть →</span>
    </div>
  `
    )
    .join('');

  bindIndexHoverPreview();
}

function bindIndexHoverPreview() {
  const preview = document.getElementById('index-hover-preview');
  const previewImg = preview.querySelector('img');
  document.querySelectorAll('.index-row').forEach((row) => {
    row.addEventListener('mouseenter', () => {
      previewImg.src = row.dataset.preview;
      preview.classList.add('is-visible');
    });
    row.addEventListener('mouseleave', () => {
      preview.classList.remove('is-visible');
    });
  });
}

document.getElementById('eos-accordion').addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-cat-id]');
  if (!trigger) return;
  const catId = trigger.dataset.catId;
  activeFilter = activeFilter === catId ? 'all' : catId;
  renderPortfolio();
});

document.getElementById('eos-all-btn').addEventListener('click', () => {
  activeFilter = 'all';
  renderPortfolio();
});

document.getElementById('eos-mode-toggle').addEventListener('click', (e) => {
  portfolioMode = portfolioMode === 'grid' ? 'index' : 'grid';
  e.target.textContent = portfolioMode === 'grid' ? 'Index' : 'Grid';
  e.target.classList.toggle('is-active', portfolioMode === 'index');
  renderPortfolio();
});

// ==================== SERVICES OCHA-STYLE TYPOGRAPHIC LIST ====================
function renderServicesMatrix() {
  const matrix = document.getElementById('services-matrix');
  if (!matrix) return;

  matrix.innerHTML = SERVICES.map(
    (s, idx) => `
    <article class="ocha-srv-item ocha-srv-item--shift-${idx + 1}" data-service-id="${s.id}">
      <div class="ocha-srv-title-col">
        <div class="ocha-srv-slash">
          /${s.title} <span class="ocha-italic-paren" style="font-size: 0.62em;">(0${idx + 1})</span>
        </div>
      </div>
      <div class="ocha-srv-desc-col">
        <p class="ocha-srv-sub">${s.summary}</p>
        <div class="ocha-srv-specs-inline">${s.specs.join(' · ')}</div>
      </div>
      <div class="ocha-srv-price-col">
        <div class="ocha-srv-price">${s.price}</div>
        <div class="mono-meta">${s.duration}</div>
      </div>
    </article>
  `
  ).join('');
}

// ==================== DETAIL PAGE (HORIZONTAL SCROLL + DRAG) ====================
const detailContent = document.getElementById('detail-page-content');
const detailIndex = document.getElementById('detail-page-index');
const detailBackBtn = document.getElementById('detail-back-btn');
let lastViewBeforeDetail = 'portfolio';

let dragBadge = document.querySelector('.drag-cursor-badge');
if (!dragBadge) {
  dragBadge = document.createElement('div');
  dragBadge.className = 'drag-cursor-badge';
  dragBadge.textContent = 'DRAG';
  document.body.appendChild(dragBadge);
}

function bindHorizontalWheel() {
  const track = detailContent.querySelector('.detail-hscroll');
  if (!track) return;

  // Wheel -> horizontal scroll
  track.addEventListener(
    'wheel',
    (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    },
    { passive: false }
  );

  // Drag to scroll + floating DRAG cursor badge
  let isDown = false;
  let startX = 0;
  let scrollStart = 0;

  track.addEventListener('mouseenter', () => {
    if (window.matchMedia('(pointer: fine)').matches) {
      dragBadge.classList.add('is-visible');
    }
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.classList.remove('is-dragging');
    dragBadge.classList.remove('is-visible', 'is-pressed');
  });

  track.addEventListener('mousemove', (e) => {
    dragBadge.style.left = `${e.clientX}px`;
    dragBadge.style.top = `${e.clientY}px`;
    if (!isDown) return;
    e.preventDefault();
    const walk = (e.pageX - startX) * 1.35;
    track.scrollLeft = scrollStart - walk;
  });

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX;
    scrollStart = track.scrollLeft;
    track.classList.add('is-dragging');
    dragBadge.classList.add('is-pressed');
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    track.classList.remove('is-dragging');
    dragBadge.classList.remove('is-pressed');
  });

  // Update showcase progress bar & jump buttons
  const progressFill = detailContent.querySelector('.detail-progress-fill');
  const jumpBtns = detailContent.querySelectorAll('.detail-jump-btn');
  const frames = track.querySelectorAll('.detail-hframe');

  function updateShowcaseProgress() {
    if (!progressFill) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) {
      progressFill.style.width = '100%';
      return;
    }
    const ratio = track.scrollLeft / maxScroll;
    const pct = Math.min(100, Math.max(12, 12 + ratio * 88));
    progressFill.style.width = `${pct}%`;
  }

  track.addEventListener('scroll', updateShowcaseProgress);
  updateShowcaseProgress();

  jumpBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      jumpBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      if (frames[idx]) {
        track.scrollTo({ left: frames[idx].offsetLeft - track.offsetLeft, behavior: 'smooth' });
      }
    });
  });

  // Mobile prev/next removed: native touch swipe handles horizontal scroll
}

function openSeriesDrawer(id) {
  const item = SERIES.find((s) => s.id === id);
  if (!item) return;

  lastViewBeforeDetail = 'portfolio';
  detailBackBtn.textContent = '← Назад к коллекциям';
  detailIndex.textContent = `${item.code} ${item.categoryLabel}`;

  const totalStr = String(item.gallery.length).padStart(2, '0');
  const rhythmClasses = ['', 'detail-hframe--compact', 'detail-hframe--wide'];

  detailContent.innerHTML = `
    <div class="detail-info-col">
      <h1 class="lowercase-display">${item.title}</h1>
      <p class="body-muted">${item.description}</p>
      <ul class="service-specs">
        <li><span class="mono-label">локация</span>${item.location}</li>
        <li><span class="mono-label">техника</span>${item.camera}</li>
        <li><span class="mono-label">год</span>${item.year}</li>
      </ul>
      <button class="inline-link" type="button" onclick="bookFromDrawer('${item.categoryLabel}')">
        Заказать похожую съёмку →
      </button>
    </div>
    <div class="detail-gallery-col">
      <div class="detail-hscroll">
        ${item.gallery
          .map((src, idx) => {
            const numStr = String(idx + 1).padStart(2, '0');
            const rhythm = rhythmClasses[idx % rhythmClasses.length];
            return `
          <figure class="detail-hframe ${rhythm}">
            <img src="${src}" alt="${item.title} — кадр ${idx + 1}" />
            <figcaption class="mono-caption">
              <span>(f${idx + 1})</span>
              <span>${numStr} / ${totalStr}</span>
            </figcaption>
          </figure>
        `;
          })
          .join('')}
      </div>
      <div class="detail-showcase-bar">
        <div class="detail-progress-track">
          <div class="detail-progress-fill"></div>
        </div>
        <div class="detail-frame-jumps">
          ${item.gallery
            .map(
              (_, idx) =>
                `<button class="detail-jump-btn ${idx === 0 ? 'is-active' : ''}" type="button">${String(idx + 1).padStart(2, '0')}</button>`
            )
            .join('')}
        </div>
      </div>
    </div>
  `;

  navigateTo('detail');
  bindHorizontalWheel();
}

function openServiceDrawer(id) {
  const srv = SERVICES.find((s) => s.id === id);
  if (!srv) return;

  lastViewBeforeDetail = 'services';
  detailBackBtn.textContent = '← Назад к услугам';
  detailIndex.textContent = srv.code;

  detailContent.innerHTML = `
    <div class="detail-info-col">
      <h1 class="lowercase-display">${srv.title}</h1>
      <p class="body-muted">${srv.summary}</p>
      <ul class="service-specs">
        <li><span class="mono-label">стоимость</span>${srv.price}</li>
        <li><span class="mono-label">длительность</span>${srv.duration}</li>
        <li><span class="mono-label">результат</span>${srv.delivery}</li>
        ${srv.specs.map((sp) => `<li>· ${sp}</li>`).join('')}
      </ul>
      <button class="inline-link" type="button" onclick="bookFromDrawer('${srv.title}')">
        Забронировать этот формат →
      </button>
    </div>
    <div class="detail-hscroll">
      <figure class="detail-hframe">
        <img src="${srv.image}" alt="${srv.title}" />
        <figcaption class="mono-caption">
          <span>(01)</span>
          <span>пример формата</span>
        </figcaption>
      </figure>
    </div>
  `;

  navigateTo('detail');
  bindHorizontalWheel();
}

detailBackBtn.addEventListener('click', () => {
  navigateTo(lastViewBeforeDetail);
});

window.bookFromDrawer = function () {
  navigateTo('contact');
};

// ==================== COPY EMAIL ====================
const copyEmailBtn = document.getElementById('copy-email-btn');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard?.writeText('hello@fedorova.photo');
    copyEmailBtn.textContent = 'скопировано ✓';
    setTimeout(() => {
      copyEmailBtn.textContent = 'скопировать адрес';
    }, 2000);
  });
}

// ==================== SYNC HEADER NAV AXIS ====================
function syncNavAxis() {
  const nav = document.querySelector('.main-nav');
  if (!nav) return;
  const left = Math.round(nav.getBoundingClientRect().left);
  document.documentElement.style.setProperty('--nav-axis', `${left}px`);
}
syncNavAxis();
window.addEventListener('resize', syncNavAxis);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(syncNavAxis);
}

// ==================== REVEAL & FAST PRELOADER ====================
function bindTileImageFade() {
  document.querySelectorAll('.eos-tile-media img').forEach((img) => {
    if (img.complete) {
      img.classList.add('is-img-loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('is-img-loaded'), { once: true });
      img.addEventListener('error', () => img.classList.add('is-img-loaded'), { once: true });
    }
  });
}

let revealObserver;
function observeReveals() {
  // Tag service rows, contact blocks, and sidebar items for staggered reveal
  document.querySelectorAll('.ocha-srv-item').forEach((el, idx) => {
    el.classList.add('reveal-item');
    el.style.setProperty('--reveal-delay', `${idx * 65}ms`);
  });
  document.querySelectorAll('.contact-axis-column > *').forEach((el, idx) => {
    el.classList.add('reveal-item');
    el.style.setProperty('--reveal-delay', `${idx * 65}ms`);
  });

  const activeView = document.querySelector('.page-view.is-active');
  if (!activeView) return;

  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.06, rootMargin: '0px 0px -20px 0px' }
  );

  activeView.querySelectorAll('.reveal-item').forEach((el) => {
    revealObserver.observe(el);
  });
}

function runPreloader() {
  const preloader = document.getElementById('site-preloader');
  const countEl = document.getElementById('preloader-count');
  const lineEl = document.getElementById('preloader-line');

  if (!preloader || !countEl || !lineEl) {
    document.body.classList.add('is-ready');
    observeReveals();
    return;
  }

  let progress = 0;
  const start = performance.now();
  const duration = 900;

  function step(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    progress = Math.round(eased * 100);
    countEl.textContent = `${String(progress).padStart(2, '0')}%`;
    lineEl.style.setProperty('--load-progress', String(eased));

    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      preloader.classList.add('is-done');
      document.body.classList.add('is-ready');
      observeReveals();
    }
  }

  requestAnimationFrame(step);
}

// ==================== INIT ====================
renderHomeServices();
renderPortfolio();
renderServicesMatrix();
runPreloader();

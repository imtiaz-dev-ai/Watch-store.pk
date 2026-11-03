const ASSETS = {
  "assets/img/cat-luxury.png": "assets/img/cat-luxury.jpg",
  "assets/img/cat-men.png": "assets/img/cat-men.jpg",
  "assets/img/cat-women.png": "assets/img/cat-women.jpg",
  "assets/img/favicon.png": "assets/img/favicon.png",
  "assets/img/hero-1.png": "assets/img/hero-1.jpg",
  "assets/img/hero-2.png": "assets/img/hero-2.jpg",
  "assets/img/hero-3.png": "assets/img/hero-3.jpg",
  "assets/img/logo.png": "assets/img/logo.png",
  "assets/img/products/p1.png": "assets/img/products/p1.jpg",
  "assets/img/products/p10.png": "assets/img/products/p10.jpg",
  "assets/img/products/p11.png": "assets/img/products/p11.jpg",
  "assets/img/products/p12.png": "assets/img/products/p12.jpg",
  "assets/img/products/p13.png": "assets/img/products/p13.jpg",
  "assets/img/products/p14.png": "assets/img/products/p14.jpg",
  "assets/img/products/p15.png": "assets/img/products/p15.jpg",
  "assets/img/products/p16.png": "assets/img/products/p16.jpg",
  "assets/img/products/p17.png": "assets/img/products/p17.jpg",
  "assets/img/products/p18.png": "assets/img/products/p18.jpg",
  "assets/img/products/p19.png": "assets/img/products/p19.jpg",
  "assets/img/products/p2.png": "assets/img/products/p2.jpg",
  "assets/img/products/p20.png": "assets/img/products/p20.jpg",
  "assets/img/products/p3.png": "assets/img/products/p3.jpg",
  "assets/img/products/p4.png": "assets/img/products/p4.jpg",
  "assets/img/products/p5.png": "assets/img/products/p5.jpg",
  "assets/img/products/p6.png": "assets/img/products/p6.jpg",
  "assets/img/products/p7.png": "assets/img/products/p7.jpg",
  "assets/img/products/p8.png": "assets/img/products/p8.jpg",
  "assets/img/products/p9.png": "assets/img/products/p9.jpg",
  "assets/img/sale-banner.png": "assets/img/sale-banner.jpg"
};


/* ============================================================
   WATCH STORE — product catalog & data helpers
   ============================================================ */

const PRODUCTS = [
  { id: 1,  name: 'Casio Edifice Chronograph', brand: 'Casio',        cat: 'men',    price: 24999,  old: 31499,  badge: null, img: ASSETS['assets/img/products/p1.png'],
    desc: 'A striking stainless steel chronograph built for precision. Black dial with luminous hands, stopwatch function and 100-meter water resistance make it a perfect everyday companion.' },
  { id: 2,  name: 'Seiko 5 Automatic',         brand: 'Seiko',        cat: 'men',    price: 27999,  old: null,   badge: 'New', img: ASSETS['assets/img/products/p2.png'],
    desc: 'Powered by the legendary Seiko automatic movement with 21 jewels. Deep blue sunburst dial, day-date window and a polished stainless steel bracelet for timeless style.' },
  { id: 3,  name: 'Rolex Datejust 41',         brand: 'Rolex',        cat: 'luxury', price: 69999,  old: 82899,  badge: null, img: ASSETS['assets/img/products/p3.png'],
    desc: 'The iconic Datejust with a rich green dial and fluted gold bezel. Self-winding movement, Cyclops lens over the date and a jubilee bracelet — pure horological prestige.' },
  { id: 4,  name: 'Tissot Chronograph XL',     brand: 'Tissot',       cat: 'men',    price: 42999,  old: null,   badge: 'Hot', img: ASSETS['assets/img/products/p4.png'],
    desc: 'Swiss precision meets bold design. Black chronograph dial with three sub-dials, tachymeter scale and scratch-resistant sapphire glass on a brushed steel bracelet.' },
  { id: 5,  name: 'Fossil Classic Gold',       brand: 'Fossil',       cat: 'men',    price: 19999,  old: 24999,  badge: null, img: ASSETS['assets/img/products/p5.png'],
    desc: 'A refined gold-tone dress watch with a minimalist black dial. Slim case profile, quartz accuracy and genuine leather comfort — elegance for every occasion.' },
  { id: 6,  name: 'Omega Seamaster',           brand: 'Omega',        cat: 'luxury', price: 89999,  old: null,   badge: 'New', img: ASSETS['assets/img/products/p6.png'],
    desc: 'A legendary dive watch with deep blue wave dial and gold accents. Helium escape valve, 300m water resistance and Master Chronometer certified precision.' },
  { id: 7,  name: 'Casio G-Shock',             brand: 'Casio',        cat: 'men',    price: 22999,  old: 29999,  badge: null, img: ASSETS['assets/img/products/p7.png'],
    desc: 'Shock-resistant digital toughness with a silver resin case and blue accents. World time, stopwatch, countdown timer and 200-meter water resistance.' },
  { id: 8,  name: 'Rado Centrix Gold',         brand: 'Rado',         cat: 'luxury', price: 39999,  old: 50999,  badge: null, img: ASSETS['assets/img/products/p8.png'],
    desc: 'Scratch-resistant high-tech ceramic meets warm gold tones. Dark green dial with slim gold hands on an elegant bracelet — understated luxury.' },
  { id: 9,  name: 'Rolex Submariner',          brand: 'Rolex',        cat: 'luxury', price: 129999, old: null,   badge: 'Hot', img: ASSETS['assets/img/products/p9.png'],
    desc: 'The reference among dive watches. Black dial, unidirectional rotatable bezel, Chromalight display and Oystersteel bracelet — built for the deep.' },
  { id: 10, name: 'Omega Speedmaster',         brand: 'Omega',        cat: 'luxury', price: 98999,  old: 118999, badge: null, img: ASSETS['assets/img/products/p10.png'],
    desc: 'The Moonwatch. Manual-winding chronograph with black dial, tachymeter bezel and the heritage of space flight on a brushed steel bracelet.' },
  { id: 11, name: 'Seiko Presage',             brand: 'Seiko',        cat: 'men',    price: 45999,  old: 51999,  badge: null, img: ASSETS['assets/img/products/p11.png'],
    desc: 'Japanese craftsmanship with a champagne sunburst dial, automatic movement and sapphire crystal. A dress watch with decades of watchmaking heritage.' },
  { id: 12, name: 'Tissot PRX Powermatic',     brand: 'Tissot',       cat: 'men',    price: 38499,  old: null,   badge: 'New', img: ASSETS['assets/img/products/p12.png'],
    desc: 'A 1978 icon reborn. Integrated steel bracelet, blue sunburst dial and the automatic Powermatic 80 movement with 80 hours of power reserve.' },
  { id: 13, name: 'Michael Kors Parker',       brand: 'Michael Kors', cat: 'women',  price: 34999,  old: 42999,  badge: null, img: ASSETS['assets/img/products/p13.png'],
    desc: 'Glamorous rose gold watch with a sparkling crystal-set bezel and clean white dial. The perfect statement piece from day to evening.' },
  { id: 14, name: 'Fossil Jacqueline',         brand: 'Fossil',       cat: 'women',  price: 27499,  old: null,   badge: 'New', img: ASSETS['assets/img/products/p14.png'],
    desc: 'Vintage-inspired elegance with a slim rose gold case and taupe leather strap. Minimal numerals and a delicate profile for effortless style.' },
  { id: 15, name: 'Anne Klein Bracelet Watch', brand: 'Anne Klein',   cat: 'women',  price: 18999,  old: 23499,  badge: null, img: ASSETS['assets/img/products/p15.png'],
    desc: 'A classic gold-tone bracelet watch with iridescent mother-of-pearl dial. Timeless, versatile and made to be layered with your favorite bangles.' },
  { id: 16, name: 'Coach Grand',               brand: 'Coach',        cat: 'women',  price: 31999,  old: null,   badge: 'New', img: ASSETS['assets/img/products/p16.png'],
    desc: 'Refined rose gold case with a warm brown leather strap and a minimal dial. Modern sophistication with signature Coach craftsmanship.' },
  { id: 17, name: 'Casio Vintage Gold',        brand: 'Casio',        cat: 'women',  price: 9999,   old: 12999,  badge: null, img: ASSETS['assets/img/products/p17.png'],
    desc: 'The iconic retro digital in a slim gold-tone finish. LED light, daily alarm and stopwatch — a cult classic back in style.' },
  { id: 18, name: 'Fossil Tailor Mesh',        brand: 'Fossil',       cat: 'women',  price: 24499,  old: 29999,  badge: null, img: ASSETS['assets/img/products/p18.png'],
    desc: 'Delicate rose gold mesh bracelet with a slim case and pearl-white dial. Feminine, lightweight and endlessly wearable.' },
  { id: 19, name: 'Omega De Ville Prestige',   brand: 'Omega',        cat: 'luxury', price: 112999, old: 134999, badge: null, img: ASSETS['assets/img/products/p19.png'],
    desc: 'Understated elegance in gold with a silver lacquered dial and brown leather strap. Co-axial precision for the true connoisseur.' },
  { id: 20, name: 'Rado HyperChrome',          brand: 'Rado',         cat: 'men',    price: 47999,  old: 55999,  badge: null, img: ASSETS['assets/img/products/p20.png'],
    desc: 'Lightweight high-tech titanium case with a matte black dial. Swiss automatic movement in a sporty, modern silhouette.' },
];

// Sample quantities for this static demo; replace with a shared inventory service before launch.
const INVENTORY = {
  1: 2, 2: 8, 3: 1, 4: 5, 5: 7, 6: 3, 7: 9, 8: 2, 9: 4, 10: 6,
  11: 5, 12: 3, 13: 2, 14: 7, 15: 4, 16: 6, 17: 9, 18: 2, 19: 3, 20: 5,
};
const COUPONS = {
  TIME10: { type: 'percent', value: 10, minimum: 0 },
  SAVE500: { type: 'fixed', value: 500, minimum: 5000 },
};

const BRAND_INFO = {
  'Rolex':        'The crown of horology — icons of prestige since 1905.',
  'Casio':        'Innovation and toughness, from G-Shock to Edifice.',
  'Seiko':        'Japanese mastery — automatic movements since 1881.',
  'Fossil':       'Accessible American design with vintage inspiration.',
  'Tissot':       'Swiss precision and value since 1853.',
  'Omega':        'The first watch on the Moon. Precision since 1848.',
  'Rado':         'The master of scratch-resistant high-tech ceramics.',
  'Michael Kors': 'Jet-set glamour and statement style.',
  'Anne Klein':   'Timeless, wearable elegance for every occasion.',
  'Coach':        'Modern sophistication with New York heritage.',
};

/* ---------- helpers ---------- */
function formatPrice(n) { return 'Rs. ' + Number(n).toLocaleString('en-PK'); }
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);
}
function toggleCompare(id) {
  const list = compareList();
  if (list.includes(id)) {
    localStorage.setItem('ws_compare', JSON.stringify(list.filter(item => item !== id)));
    renderCompareDock();
    syncCompareButtons();
    return false;
  }
  if (list.length >= 3) {
    toast('Compare up to 3 watches at a time.');
    return null;
  }
  list.push(id);
  localStorage.setItem('ws_compare', JSON.stringify(list));
  renderCompareDock();
  syncCompareButtons();
  return true;
}
function syncCompareButtons() {
  const selected = compareList();
  document.querySelectorAll('[data-compare], #pd-compare').forEach(button => {
    const id = Number(button.dataset.compare);
    if (!id) return;
    const active = selected.includes(id);
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}
function renderCompareDock() {
  const dock = document.getElementById('compare-dock');
  const count = document.getElementById('compare-count');
  if (!dock || !count) return;
  const total = compareList().length;
  dock.hidden = total === 0;
  count.textContent = `${total} watch${total === 1 ? '' : 'es'} selected`;
}
function renderCompareTable() {
  const content = document.getElementById('compare-content');
  if (!content) return;
  const products = compareList().map(getProduct);
  content.innerHTML = products.length ? `
    <div class="compare-table-wrap"><table class="compare-table">
      <thead><tr><th>Details</th>${products.map(p => `<th><button type="button" class="compare-remove" data-compare-remove="${p.id}" aria-label="Remove ${escapeHtml(p.name)}">&times;</button><img src="${p.img}" alt="${escapeHtml(p.name)}"><a href="#/product?id=${p.id}">${escapeHtml(p.name)}</a></th>`).join('')}</tr></thead>
      <tbody>
        <tr><th>Brand</th>${products.map(p => `<td>${escapeHtml(p.brand)}</td>`).join('')}</tr>
        <tr><th>Price</th>${products.map(p => `<td>${formatPrice(p.price)}</td>`).join('')}</tr>
        <tr><th>Category</th>${products.map(p => `<td>${escapeHtml(CAT_NAME[p.cat])}</td>`).join('')}</tr>
        <tr><th>Availability</th>${products.map(p => `<td>${getStock(p.id) ? `In stock (${getStock(p.id)})` : 'Out of stock'}</td>`).join('')}</tr>
      </tbody>
    </table></div>` : '<p class="compare-empty">Select watches from the catalog to compare them here.</p>';
}
function bindSearchSuggestions() {
  const input = document.querySelector('#header-search input');
  if (!input) return;
  const listId = 'watch-search-suggestions';
  input.setAttribute('list', listId);
  const list = document.createElement('datalist');
  list.id = listId;
  list.innerHTML = PRODUCTS.map(p => `<option value="${escapeHtml(p.name)}">${escapeHtml(p.brand)}</option>`).join('');
  input.parentElement.appendChild(list);
}
function renderProductReviews(id) {
  const reviews = productReviews(id);
  const summary = document.getElementById('review-summary');
  const list = document.getElementById('review-list');
  if (!summary || !list) return;
  const average = reviews.length
    ? reviews.reduce((total, review) => total + Number(review.rating), 0) / reviews.length
    : 0;
  summary.innerHTML = reviews.length
    ? `<div class="review-score"><b>${average.toFixed(1)}</b><span class="review-stars" aria-label="${average.toFixed(1)} out of 5 stars">${'★'.repeat(Math.round(average))}${'☆'.repeat(5 - Math.round(average))}</span><span>${reviews.length} review${reviews.length === 1 ? '' : 's'}</span></div>`
    : '<p class="review-empty">No reviews yet. Be the first to share your experience.</p>';
  list.innerHTML = reviews.map(review => `
    <article class="review-item">
      <div class="review-item-head"><span class="review-stars" aria-label="${Number(review.rating)} out of 5 stars">${'★'.repeat(Number(review.rating))}${'☆'.repeat(5 - Number(review.rating))}</span><time>${escapeHtml(review.date)}</time></div>
      <h4>${escapeHtml(review.title)}</h4><p>${escapeHtml(review.text)}</p>
      <small>By ${escapeHtml(review.name)} · Customer review</small>
    </article>`).join('');
}
function getProduct(id) { return PRODUCTS.find(p => p.id === Number(id)); }
function discountPct(p) { return p.old ? Math.round((1 - p.price / p.old) * 100) : 0; }
function getStock(id) {
  const saved = JSON.parse(localStorage.getItem('ws_inventory') || '{}');
  const key = Number(id);
  if (Object.prototype.hasOwnProperty.call(saved, key)) {
    const quantity = Number(saved[key]);
    return Number.isFinite(quantity) ? Math.max(0, Math.floor(quantity)) : 0;
  }
  return INVENTORY[key] || 0;
}
function getCouponDiscount(code, subtotal) {
  const coupon = COUPONS[String(code || '').trim().toUpperCase()];
  if (!coupon || subtotal < coupon.minimum) return 0;
  return Math.min(subtotal, coupon.type === 'percent'
    ? Math.round(subtotal * coupon.value / 100)
    : coupon.value);
}
function appliedCoupon(subtotal) {
  const code = localStorage.getItem('ws_coupon') || '';
  return { code, discount: getCouponDiscount(code, subtotal) };
}
function productReviews(id) {
  return JSON.parse(localStorage.getItem(`ws_reviews_${Number(id)}`) || '[]');
}
function compareList() {
  return JSON.parse(localStorage.getItem('ws_compare') || '[]')
    .map(Number).filter((id, index, list) => getProduct(id) && list.indexOf(id) === index).slice(0, 3);
}
function badgeLabel(p) {
  if (p.badge) return p.badge;
  if (p.old) return '-' + discountPct(p) + '%';
  return null;
}
function badgeClass(p) {
  const b = p.badge;
  if (b === 'New') return 'b-new';
  if (b === 'Hot') return 'b-hot';
  return 'b-sale';
}
const CAT_NAME = { men: "Men's Watches", women: "Women's Watches", luxury: 'Luxury Watches' };

  


/* ============================================================
   WATCH STORE — shared layout: header, nav, footer
   Injected on every page so the navbar & logo stay consistent.
   ============================================================ */

const ICONS = {
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 3h13v13H1zM14 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="17.5" cy="18.5" r="2"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8.5 11.5l2.5 2.5 4.5-4.5"/></svg>',
  headset: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13a8 8 0 0 1 16 0"/><rect x="2.5" y="13" width="4" height="6" rx="2"/><rect x="17.5" y="13" width="4" height="6" rx="2"/><path d="M20 18v1a3 3 0 0 1-3 3h-4"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4v6h-6M3 20v-6h6"/><path d="M21 10a9 9 0 0 0-15-6.5L3 6M3 14a9 9 0 0 0 15 6.5l3-2.5"/></svg>',
  diamond: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10l4 6-9 12L3 9z"/><path d="M3 9h18M12 3l-3 6 3 12 3-12z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/><path d="M2 3h3l2.6 12.4a1.5 1.5 0 0 0 1.5 1.1h8.6a1.5 1.5 0 0 0 1.5-1.2L21 7H6"/></svg>',
  caret: '<svg class="caret" viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  caretNav: '<svg class="has-caret" viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l1.5 14h-15z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/></svg>',
  chevL: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  chevR: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
  arrowR: '<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M3 7l9 6.5L21 7"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.25a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5l5 5 10-11"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>',
  fb: '<svg viewBox="0 0 24 24"><path d="M14 8.5V6.8c0-.8.5-1 1-1h2.5V2.2H14c-2.8 0-4 2-4 4.4v1.9H7.5v3.6H10V22h4v-9.9h2.8l.4-3.6H14z"/></svg>',
  ig: '<svg viewBox="0 0 24 24"><path d="M12 4.3c2.5 0 2.8 0 3.8.06a5.2 5.2 0 0 1 1.8.33 3.2 3.2 0 0 1 1.8 1.8 5.2 5.2 0 0 1 .33 1.8c.05 1 .06 1.3.06 3.8s0 2.8-.06 3.8a5.2 5.2 0 0 1-.33 1.8 3.2 3.2 0 0 1-1.8 1.8 5.2 5.2 0 0 1-1.8.33c-1 .05-1.3.06-3.8.06s-2.8 0-3.8-.06a5.2 5.2 0 0 1-1.8-.33 3.2 3.2 0 0 1-1.8-1.8 5.2 5.2 0 0 1-.33-1.8c-.05-1-.06-1.3-.06-3.8s0-2.8.06-3.8a5.2 5.2 0 0 1 .33-1.8 3.2 3.2 0 0 1 1.8-1.8 5.2 5.2 0 0 1 1.8-.33c1-.05 1.3-.06 3.8-.06M12 2c-2.7 0-3 0-4.1.07a7.4 7.4 0 0 0-2.4.47A5.4 5.4 0 0 0 2.5 5.5a7.4 7.4 0 0 0-.47 2.4C2 9 2 9.3 2 12s0 3 .07 4.1c.05.9.2 1.7.47 2.4a5.4 5.4 0 0 0 3 3c.7.27 1.5.42 2.4.47C9 22 9.3 22 12 22s3 0 4.1-.07a7.4 7.4 0 0 0 2.4-.47 5.4 5.4 0 0 0 3-3c.27-.7.42-1.5.47-2.4C22 15 22 14.7 22 12s0-3-.07-4.1a7.4 7.4 0 0 0-.47-2.4 5.4 5.4 0 0 0-3-3 7.4 7.4 0 0 0-2.4-.47C15 2 14.7 2 12 2zm0 4.9A5.1 5.1 0 1 0 17.1 12 5.1 5.1 0 0 0 12 6.9zm0 8.4A3.3 3.3 0 1 1 15.3 12 3.3 3.3 0 0 1 12 15.3zM17.3 5.6a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z"/></svg>',
  yt: '<svg viewBox="0 0 24 24"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.2V8.8l5.4 3.2z"/></svg>',
  tk: '<svg viewBox="0 0 24 24"><path d="M16.6 3c.4 2.1 1.8 3.6 3.9 3.9v3c-1.5 0-2.9-.5-3.9-1.3v6.4a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.1a2.9 2.9 0 1 0 2 2.8V3h3z"/></svg>',
  pin_t: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.2 1 .5 1.9 1.6 1.9 1.9 0 3.3-2 3.3-4.9 0-2.5-1.8-4.3-4.4-4.3a4.6 4.6 0 0 0-4.8 4.6c0 .9.4 1.9.8 2.4a.3.3 0 0 1 .1.3l-.3 1.2c0 .2-.2.3-.4.2-1.4-.7-2.3-2.7-2.3-4.4 0-3.6 2.6-6.9 7.5-6.9 3.9 0 7 2.8 7 6.6 0 3.9-2.5 7.1-5.9 7.1-1.2 0-2.3-.6-2.6-1.3l-.7 2.7c-.3 1-1 2.3-1.4 3A10 10 0 1 0 12 2z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  eyesw: '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>',
};

const SOCIALS = [
  ['Instagram', ICONS.ig, 'https://instagram.com/Ai.collection.pk'],
  ['TikTok', ICONS.tk, 'https://tiktok.com/@Awc'],
  ['WhatsApp', ICONS.phone, 'https://wa.me/923006693524'],
];

function socRow(cls) {
  return `<div class="${cls}">` + SOCIALS.map(([n, ic, h]) =>
    `<a class="soc" href="${h}" aria-label="${n}" title="${n}" target="_blank" rel="noopener noreferrer">${ic}</a>`).join('') + `</div>`;
}

/* brand wordmarks used in strip + dropdown + brand cards */
function wordmark(b) {
  const map = {
    'Rolex': '<span class="wordmark wm-rolex">ROLEX</span>',
    'Casio': '<span class="wordmark wm-casio">CASIO</span>',
    'Seiko': '<span class="wordmark wm-seiko">SEIKO</span>',
    'Fossil': '<span class="wordmark wm-fossil">FOSSIL</span>',
    'Tissot': '<span class="wordmark wm-tissot"><span class="tplus">T+</span>TISSOT</span>',
    'Omega': '<span class="wordmark wm-omega"><span class="omega-sym">Ω</span> OMEGA</span>',
    'Rado': '<span class="wordmark wm-rado">RADO</span>',
    'Michael Kors': '<span class="wordmark wm-mk">Michael Kors</span>',
    'Anne Klein': '<span class="wordmark wm-anneklein">ANNE KLEIN</span>',
    'Coach': '<span class="wordmark wm-coach">COACH</span>',
  };
  return map[b] || `<span class="wordmark">${b}</span>`;
}

let PAGE = document.body.dataset.page || 'home';

const NAV = [
  { label: 'Home', href: '#/home', page: 'home' },
  { label: "Men's Watches", href: '#/mens', page: 'mens', dd: [
    ['Casual Watches', '#/mens?style=Casual', ASSETS['assets/img/products/p5.png']],
    ['Sports Watches', '#/mens?style=Sports', ASSETS['assets/img/products/p7.png']],
    ['Digital Watches', '#/mens?style=Digital', ASSETS['assets/img/products/p17.png']],
    ['Formal Watches', '#/mens?style=Formal', ASSETS['assets/img/products/p11.png']],
  ]},
  { label: "Women's Watches", href: '#/womens', page: 'womens', dd: [
    ['Luxury Watches', '#/womens?style=Luxury', ASSETS['assets/img/products/p13.png']],
    ['Fashion Watches', '#/womens?style=Fashion', ASSETS['assets/img/products/p16.png']],
    ['Classic Watches', '#/womens?style=Classic', ASSETS['assets/img/products/p15.png']],
    ['Bracelet Watches', '#/womens?style=Bracelet', ASSETS['assets/img/products/p18.png']],
  ]},
  { label: 'Luxury Watches', href: '#/luxury', page: 'luxury' },
  { label: 'Brands', href: '#/brands', page: 'brands', ddBrands: true },
  { label: 'Sale', href: '#/sale', page: 'sale' },
  { label: 'Contact Us', href: '#/contact', page: 'contact' },
];

function buildHeader() {
  const navHtml = NAV.map(n => {
    const active = n.page === PAGE ? ' active' : '';
    if (n.dd) {
      return `<li><a href="${n.href}" class="nav-link${active}">${n.label} ${ICONS.caretNav}</a>
        <div class="dropdown">${n.dd.map(([t, h, img]) =>
          `<a class="dd-item" href="${h}"><img src="${img}" alt="${t}"><span><b>${t}</b><span>Explore collection</span></span></a>`).join('')}</div></li>`;
    }
    if (n.ddBrands) {
      const bl = ['Rolex', 'Fossil', 'Casio', 'Tissot', 'Seiko', 'Omega'];
      return `<li><a href="#/brands" class="nav-link${active}">${n.label} ${ICONS.caretNav}</a>
        <div class="dropdown"><div class="dd-brands">${bl.map(b =>
          `<a href="#/search?brand=${encodeURIComponent(b)}">${b.toUpperCase()}</a>`).join('')}</div></div></li>`;
    }
    return `<li><a href="${n.href}" class="nav-link${active}">${n.label}</a></li>`;
  }).join('');

  const user = JSON.parse(localStorage.getItem('ws_user') || 'null');

  return `
  <div class="topbar"><div class="container topbar-in">
    <span class="topbar-item">${ICONS.truck} Free Shipping All Over Pakistan</span>
    <span class="topbar-item">${ICONS.shield} 100% Authentic Products</span>
    <span class="topbar-item">${ICONS.headset} 24/7 Customer Support</span>
  </div></div>
  <header class="site-header"><div class="container header-in">
    <a class="logo" href="#/home" aria-label="Watch Store — Time In Style">
      <img src="${ASSETS['assets/img/logo.png']}" alt="Watch Store — Time In Style">
    </a>
    <form class="search-form" id="header-search" action="#/search" method="get">
      <span class="search-leading" aria-hidden="true">${ICONS.search}</span>
      <input type="text" name="q" placeholder="Search for watches..." aria-label="Search for watches">
      <button class="search-btn" type="submit" aria-label="Search">${ICONS.search}</button>
    </form>
    <div class="header-actions">
      <button type="button" class="mobile-search-toggle" id="mobile-search-toggle" aria-label="Focus search">${ICONS.search}</button>
      <div class="account-wrap" id="account-wrap">
        <a href="#/account" class="h-action">${ICONS.user}<span class="h-label">${user ? 'Hi, ' + user.name.split(' ')[0] : 'Account'}</span>${ICONS.caret}</a>
        <div class="account-menu">
          <a href="#/account">${ICONS.user} ${user ? 'My Dashboard' : 'Login / Register'}</a>
          <a href="#/wishlist">${ICONS.heart} My Wishlist</a>
          <a href="#/cart">${ICONS.cart} My Cart</a>
          ${user ? '<a href="#" id="logout-link">' + ICONS.box + ' Logout</a>' : ''}
        </div>
      </div>
      <a href="#/wishlist" class="h-action h-wishlist" aria-label="Wishlist">${ICONS.heart}<span class="h-label">Wishlist</span><span id="wishlist-count" class="cart-badge wishlist-badge">0</span></a>
      <a href="#/cart" class="h-action">${ICONS.cart}<span class="h-label">Cart</span><span id="cart-count" class="cart-badge">0</span></a>
      <button class="hamburger" id="hamburger" aria-label="Open menu"><span></span><span></span><span></span></button>
    </div>
  </div></header>
  <nav class="nav-bar"><div class="container nav-in"><ul class="nav-list">${navHtml}</ul></div></nav>

  <div class="drawer-overlay" id="drawer-overlay"></div>
  <aside class="drawer" id="drawer">
    <div class="drawer-head">
      <img src="${ASSETS['assets/img/logo.png']}" alt="Watch Store">
      <button class="drawer-close" id="drawer-close" aria-label="Close menu">&times;</button>
    </div>
    <nav>
      ${NAV.map(n => `<a href="${n.href}" class="${n.page === PAGE ? 'active' : ''}">${n.label}</a>`).join('')}
      <div class="drawer-sub">
        <a href="#/cart">Cart</a><a href="#/wishlist">Wishlist</a><a href="#/account">Account</a>
        <a href="#/track-order">Track Order</a><a href="#/shipping">Shipping &amp; Returns</a><a href="#/faqs">FAQ</a>
      </div>
    </nav>
    <div class="drawer-foot">
      <a href="tel:+923006693524">${ICONS.phone} +92 300 6693524</a>
      <a href="mailto:muhammadehtashamiqbal275@gmail.com">${ICONS.mail} Email us</a>
    </div>
  </aside>`;
}

function buildFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="site-footer"><div class="container footer-in">
    <div class="f-brand">
      <a href="#/home"><img src="${ASSETS['assets/img/logo.png']}" alt="Watch Store — Time In Style"></a>
      <p>Your one-stop shop for premium watches. Quality. Style. Trust.</p>
      ${socRow('f-socials')}
    </div>
    <div class="footer-link-columns">
    <div>
      <h4>Quick Links</h4>
      <ul class="f-links">
        <li><a href="#/home">Home</a></li>
        <li><a href="#/mens">Men's Watches</a></li>
        <li><a href="#/womens">Women's Watches</a></li>
        <li><a href="#/luxury">Luxury Watches</a></li>
        <li><a href="#/sale">Sale</a></li>
        <li><a href="#/contact">Contact Us</a></li>
        <li><a href="#/track-order">Track Order</a></li>
      </ul>
    </div>
    <div>
      <h4>Customer Care</h4>
      <ul class="f-links">
        <li><a href="#/shipping">Shipping &amp; Returns</a></li>
        <li><a href="#/faqs">FAQ</a></li>
        <li><a href="#/returns">Return Policy</a></li>
        <li><a href="#/privacy">Privacy Policy</a></li>
        <li><a href="#/terms">Terms &amp; Conditions</a></li>
      </ul>
    </div>
    </div>
    <div>
      <h4>Contact Us</h4>
      <ul class="f-contact">
        <li>${ICONS.phone}<a href="tel:+923006693524">+92 300 6693524</a></li>
        <li>${ICONS.mail}<a href="mailto:muhammadehtashamiqbal275@gmail.com">muhammadehtashamiqbal275@gmail.com</a></li>
        <li>${ICONS.pin}<span>Actor Watch House, near Ama Ayesha Masjid, Motor Market, Jhang Road, Faisalabad</span></li>
      </ul>
    </div>
  </div>
  <div class="copy-bar"><div class="container copy-in">
    <span>© ${year} Watch Store. All Rights Reserved.</span>
    <span class="follow">Follow Us: ${socRow('f-socials')}</span>
  </div></div></footer>
  <nav class="mobile-bottom-nav" aria-label="Mobile navigation">
    <a href="#/home" class="mobile-nav-link${PAGE === 'home' ? ' active' : ''}">${ICONS.home}<span>Home</span></a>
    <a href="${PAGE === 'home' ? '#categories' : '#/mens'}" class="mobile-nav-link${['mens', 'womens', 'luxury'].includes(PAGE) ? ' active' : ''}">${ICONS.grid}<span>Categories</span></a>
    <a href="#/cart" class="mobile-nav-link${['cart', 'checkout'].includes(PAGE) ? ' active' : ''}">${ICONS.cart}<span class="mobile-cart-count" id="mobile-cart-count">0</span><span>Cart</span></a>
    <a href="#/wishlist" class="mobile-nav-link${PAGE === 'wishlist' ? ' active' : ''}">${ICONS.heart}<span>Wishlist</span></a>
    <a href="#/account" class="mobile-nav-link${PAGE === 'account' ? ' active' : ''}">${ICONS.user}<span>Account</span></a>
  </nav>
  <div class="toast-zone" id="toast-zone"></div>
  <button class="to-top" id="to-top" aria-label="Back to top">${ICONS.up}</button>
  <a class="whatsapp-float" href="https://wa.me/923006693524?text=${encodeURIComponent('Hi, I need help choosing a watch.')}" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">${ICONS.phone}<span>WhatsApp us</span></a>
  <div class="compare-dock" id="compare-dock" hidden>
    <span id="compare-count"></span>
    <button class="btn" type="button" id="compare-open">Compare now</button>
    <button class="compare-clear" type="button" id="compare-clear">Clear</button>
  </div>
  <dialog class="compare-dialog" id="compare-dialog" aria-labelledby="compare-title">
    <div class="compare-dialog-head"><h2 id="compare-title">Compare Watches</h2><button type="button" id="compare-close" aria-label="Close comparison">&times;</button></div>
    <div id="compare-content"></div>
  </dialog>`;
}

window.WSLayoutInit = () => {
  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.innerHTML = buildHeader();
  if (f) f.innerHTML = buildFooter();

  const pageHero = document.querySelector('.page-hero .container');
  if (pageHero && !pageHero.querySelector('.page-back')) {
    const back = document.createElement('a');
    back.className = 'page-back';
    back.href = '#/home';
    back.setAttribute('aria-label', 'Go back to the previous page');
    back.innerHTML = `${ICONS.chevL}<span>Back</span>`;
    back.addEventListener('click', event => {
      event.preventDefault();
      if (window.history.length > 1) window.history.back();
      else location.href = '#/home';
    });
    pageHero.prepend(back);
  }

  const brandLogos = PAGE === 'home' ? document.querySelector('.brand-logos') : null;
  if (brandLogos && !brandLogos.querySelector('.brand-track')) {
    const track = document.createElement('div');
    const group = document.createElement('div');
    track.className = 'brand-track';
    group.className = 'brand-group';
    [...brandLogos.children].forEach(brand => group.append(brand));
    const duplicate = group.cloneNode(true);
    duplicate.setAttribute('aria-hidden', 'true');
    duplicate.querySelectorAll('a').forEach(link => { link.tabIndex = -1; });
    track.append(group, duplicate);
    brandLogos.replaceChildren(track);
  }

  /* mobile drawer */
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawer-overlay');
  const open = () => { drawer.classList.add('open'); overlay.classList.add('show'); };
  const close = () => { drawer.classList.remove('open'); overlay.classList.remove('show'); };
  document.getElementById('hamburger')?.addEventListener('click', open);
  document.getElementById('drawer-close')?.addEventListener('click', close);
  overlay?.addEventListener('click', close);
  document.getElementById('mobile-search-toggle')?.addEventListener('click', () => {
    const input = document.querySelector('#header-search input');
    input?.focus();
    input?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  /* cart badge */
  updateCartBadge();
  updateWishlistBadge();
  renderCompareDock();
  document.getElementById('compare-open')?.addEventListener('click', () => {
    const dialog = document.getElementById('compare-dialog');
    renderCompareTable();
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  });
  document.getElementById('compare-close')?.addEventListener('click', () => {
    const dialog = document.getElementById('compare-dialog');
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
  });
  document.getElementById('compare-clear')?.addEventListener('click', () => {
    localStorage.removeItem('ws_compare');
    renderCompareDock();
    document.querySelectorAll('[data-compare]').forEach(button => {
      button.classList.remove('active');
      button.setAttribute('aria-pressed', 'false');
    });
  });
  document.getElementById('compare-content')?.addEventListener('click', event => {
    const button = event.target.closest('[data-compare-remove]');
    if (!button) return;
    toggleCompare(Number(button.dataset.compareRemove));
    renderCompareTable();
  });
  bindSearchSuggestions();

  /* logout */
  document.getElementById('logout-link')?.addEventListener('click', e => {
    e.preventDefault();
    localStorage.removeItem('ws_user');
    toast('You have been logged out.');
    setTimeout(() => window.WSReload(), 700);
  });

  /* back to top */
  const tt = document.getElementById('to-top');
  if (!window._wsScrollBound) {
    window._wsScrollBound = true;
    window.addEventListener('scroll', () => document.getElementById('to-top')?.classList.toggle('show', window.scrollY > 500));
  }
  tt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
};

/* ---------- shared helpers ---------- */
function cartItems() { return JSON.parse(localStorage.getItem('ws_cart') || '[]'); }
function saveCart(items) {
  localStorage.setItem('ws_cart', JSON.stringify(items));
  updateCartBadge();
}
function updateCartBadge() {
  const el = document.getElementById('cart-count');
  const n = cartItems().reduce((s, i) => s + i.qty, 0);
  if (el) {
    el.textContent = n;
    el.hidden = n === 0;
    el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
  }
  const mobileCount = document.getElementById('mobile-cart-count');
  if (mobileCount) mobileCount.textContent = n;
}
function wishlistItems() { return JSON.parse(localStorage.getItem('ws_wishlist') || '[]'); }
function updateWishlistBadge() {
  const el = document.getElementById('wishlist-count');
  if (el) {
    const count = wishlistItems().length;
    el.textContent = count;
    el.hidden = count === 0;
  }
}
function toggleWish(id) {
  let w = wishlistItems();
  const has = w.includes(id);
  w = has ? w.filter(x => x !== id) : [...w, id];
  localStorage.setItem('ws_wishlist', JSON.stringify(w));
  updateWishlistBadge();
  return !has;
}
function addToCart(id, qty = 1, silent = false) {
  const stock = getStock(id);
  if (!stock) {
    toast('This watch is currently out of stock.');
    return;
  }
  const items = cartItems();
  const it = items.find(i => i.id === id);
  const currentQty = it ? it.qty : 0;
  const nextQty = Math.min(stock, 9, currentQty + qty);
  if (nextQty <= currentQty) {
    toast(`Only ${stock} unit${stock === 1 ? '' : 's'} available.`);
    return;
  }
  if (it) it.qty = nextQty; else items.push({ id, qty: nextQty });
  saveCart(items);
  if (!silent) toast(`${getProduct(id).name} added to cart!`, 'bag');
}
function toast(msg, icon = 'check') {
  const zone = document.getElementById('toast-zone');
  if (!zone) return;
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = (ICONS[icon] || ICONS.check) + `<span>${msg}</span>`;
  zone.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 320); }, 2600);
}
function productCard(p) {
  const b = badgeLabel(p);
  const wished = wishlistItems().includes(p.id);
  const compared = compareList().includes(p.id);
  const stock = getStock(p.id);
  return `
  <article class="p-card reveal">
    <div class="p-thumb">
      ${b ? `<span class="p-badge ${badgeClass(p)}">${b}</span>` : ''}
      <button class="wish-btn${wished ? ' active' : ''}" data-wish="${p.id}" aria-label="Add to wishlist">${ICONS.heart}</button>
      <a href="#/product?id=${p.id}"><img src="${p.img}" alt="${p.name}" loading="lazy"></a>
      <button class="add-btn" data-add="${p.id}"${stock ? '' : ' disabled'}>${ICONS.bag} ${stock ? 'Add To Cart' : 'Out of Stock'}</button>
    </div>
    <div class="p-body">
      <span class="p-brand">${p.brand}</span>
      <h3 class="p-name"><a href="#/product?id=${p.id}">${p.name}</a></h3>
      <div class="p-price">
        <span class="now">${formatPrice(p.price)}</span>
        ${p.old ? `<span class="old">${formatPrice(p.old)}</span>` : ''}
      </div>
      <div class="p-card-tools">
        <span class="stock-label${stock <= 2 ? ' low' : ''}">${stock === 0 ? 'Out of stock' : stock <= 2 ? `Only ${stock} left` : 'In stock'}</span>
        <button class="compare-toggle${compared ? ' active' : ''}" type="button" data-compare="${p.id}" aria-pressed="${compared}">Compare</button>
      </div>
    </div>
  </article>`;
}
function renderProducts(list, gridEl) {
  gridEl.innerHTML = list.map(productCard).join('');
  bindCardActions(gridEl);
}
function bindCardActions(root) {
  root.querySelectorAll('[data-add]').forEach(btn =>
    btn.addEventListener('click', e => { e.preventDefault(); addToCart(Number(btn.dataset.add)); }));
  root.querySelectorAll('[data-wish]').forEach(btn =>
    btn.addEventListener('click', e => {
      e.preventDefault();
      const on = toggleWish(Number(btn.dataset.wish));
      btn.classList.toggle('active', on);
      toast(on ? 'Added to your wishlist!' : 'Removed from wishlist.', 'heart');
    }));
  root.querySelectorAll('[data-compare]').forEach(btn =>
    btn.addEventListener('click', () => {
      const on = toggleCompare(Number(btn.dataset.compare));
      if (on === null) return;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', String(on));
    }));
}
function revealInit(scope = document) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12 });
  scope.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
}
function qs(name) {
  return new URLSearchParams(location.search).get(name);
}

  


/* ============================================================
   WATCH STORE — page logic (router by <body data-page>)
   ============================================================ */

/* style tags used by the nav dropdown filters */
const TAGS = {
  1: ['Sports', 'Formal'], 2: ['Casual', 'Formal'], 4: ['Sports', 'Formal'],
  5: ['Casual', 'Formal'], 7: ['Sports', 'Digital'], 11: ['Casual', 'Formal'],
  12: ['Casual', 'Sports'], 20: ['Sports'],
  13: ['Luxury', 'Fashion'], 14: ['Fashion', 'Classic'], 15: ['Classic', 'Bracelet'],
  16: ['Fashion'], 17: ['Fashion', 'Digital'], 18: ['Bracelet', 'Fashion'],
};

window.WSPageInit = () => {

  /* ================= HERO SLIDER (home) ================= */
  const hero = document.getElementById('hero-slider');
  if (hero) {
    const slides = [...hero.querySelectorAll('.hero-slide')];
    const dots = [...hero.querySelectorAll('.hero-dots button')];
    let idx = 0, timer;
    const go = i => {
      idx = (i + slides.length) % slides.length;
      slides.forEach((s, k) => {
        s.classList.toggle('active', k === idx);
        s.setAttribute('aria-hidden', String(k !== idx));
      });
      dots.forEach((d, k) => d.classList.toggle('active', k === idx));
    };
    const stop = () => clearInterval(timer);
    const play = () => {
      stop();
      timer = WSInterval(() => go(idx + 1), 4500);
    };
    hero.querySelector('.hero-next').addEventListener('click', () => { go(idx + 1); play(); });
    hero.querySelector('.hero-prev').addEventListener('click', () => { go(idx - 1); play(); });
    dots.forEach((d, k) => d.addEventListener('click', () => { go(k); play(); }));
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else play();
    });
    play();
  }

  /* ================= HOME ================= */
  if (PAGE === 'home') {
    renderProducts(PRODUCTS.slice(0, 8), document.getElementById('featured-grid'));
    bindNewsletter();
  }

  /* ================= SHOP PAGES ================= */
  if (['mens', 'womens', 'luxury', 'sale'].includes(PAGE)) {
    const base =
      PAGE === 'mens'   ? PRODUCTS.filter(p => p.cat === 'men') :
      PAGE === 'womens' ? PRODUCTS.filter(p => p.cat === 'women') :
      PAGE === 'luxury' ? PRODUCTS.filter(p => p.cat === 'luxury') :
                          PRODUCTS.filter(p => p.old);
    let state = {
      brand: qs('brand') || null,
      style: qs('style') || null,
      onSale: PAGE === 'sale',
      sort: 'featured',
    };
    const grid = document.getElementById('products-grid');
    const toolbar = document.getElementById('shop-toolbar');
    const sidebar = document.getElementById('shop-sidebar');

    const brandCounts = {};
    base.forEach(p => brandCounts[p.brand] = (brandCounts[p.brand] || 0) + 1);

    sidebar.innerHTML = `
      <details class="filter-group">
        <summary><h4>Filter</h4></summary>
        <div class="filter-content">
          <a href="${location.pathname}" class="clear-filters">${ICONS.refresh} Clear all filters</a>
        </div>
      </details>
      <details class="filter-group"${state.brand ? ' open' : ''}>
        <summary><h4>Brands</h4></summary>
        <div class="filter-content">
          ${Object.keys(brandCounts).map(b => `
            <label class="check"><input type="checkbox" data-brand="${b}" ${state.brand === b ? 'checked' : ''}>
              ${b}<span class="cnt">(${brandCounts[b]})</span></label>`).join('')}
        </div>
      </details>
      ${PAGE !== 'sale' ? `
      <details class="filter-group"${state.onSale ? ' open' : ''}>
        <summary><h4>Offers</h4></summary>
        <div class="filter-content">
          <label class="check"><input type="checkbox" id="f-onsale" ${state.onSale ? 'checked' : ''}> Discounted only</label>
        </div>
      </details>` : ''}
      <details class="filter-group">
        <summary><h4>Need help?</h4></summary>
        <div class="filter-content">
          <p class="filter-help">Our experts will help you pick the perfect watch.</p>
          <a href="#/contact" class="link-gold filter-contact">Contact Us ${ICONS.arrowR}</a>
        </div>
      </details>`;

    sidebar.querySelectorAll('.filter-group').forEach(group => {
      group.addEventListener('toggle', () => {
        if (group.open) {
          sidebar.querySelectorAll('.filter-group[open]').forEach(other => {
            if (other !== group) other.open = false;
          });
        }
      });
    });

    const apply = () => {
      let list = [...base];
      if (state.brand) list = list.filter(p => p.brand === state.brand);
      if (state.style) list = list.filter(p => (TAGS[p.id] || []).includes(state.style));
      if (state.onSale) list = list.filter(p => p.old);
      switch (state.sort) {
        case 'price-asc': list.sort((a, b) => a.price - b.price); break;
        case 'price-desc': list.sort((a, b) => b.price - a.price); break;
        case 'name': list.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'discount': list.sort((a, b) => discountPct(b) - discountPct(a)); break;
      }
      const chips = [
        state.brand ? `<b>${state.brand}</b>` : null,
        state.style ? `Style: <b>${state.style}</b>` : null,
        state.onSale && PAGE !== 'sale' ? `Discounted only` : null,
      ].filter(Boolean).join(' &nbsp;·&nbsp; ');
      toolbar.innerHTML = `
        <div class="res">Showing <b>${list.length}</b> of ${base.length} watches ${chips ? '— ' + chips : ''}</div>
        <div class="sort-box">Sort by
          <select id="sort-sel">
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount">Biggest Discount</option>
            <option value="name">Name A–Z</option>
          </select>
        </div>`;
      toolbar.querySelector('#sort-sel').value = state.sort;
      toolbar.querySelector('#sort-sel').addEventListener('change', e => { state.sort = e.target.value; apply(); });
      if (list.length) renderProducts(list, grid);
      else grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">${ICONS.search}<h3>No watches found</h3><p>Try removing some filters to see more results.</p><a class="btn" href="${location.pathname}">Reset Filters</a></div>`;
      revealInit(grid);
    };

    sidebar.querySelectorAll('[data-brand]').forEach(cb =>
      cb.addEventListener('change', () => {
        state.brand = cb.checked ? cb.dataset.brand : null;
        sidebar.querySelectorAll('[data-brand]').forEach(o => { if (o !== cb) o.checked = false; });
        apply();
      }));
    document.getElementById('f-onsale')?.addEventListener('change', e => { state.onSale = e.target.checked; apply(); });
    apply();
  }

  /* ================= BRANDS PAGE ================= */
  if (PAGE === 'brands') {
    const counts = {};
    PRODUCTS.forEach(p => counts[p.brand] = (counts[p.brand] || 0) + 1);
    document.getElementById('brands-grid').innerHTML = Object.keys(counts).map(b => `
      <div class="brand-card reveal">
        ${wordmark(b)}
        <p>${BRAND_INFO[b] || 'Fine timepieces for every wrist.'}</p>
        <div class="cnt">${counts[b]} model${counts[b] > 1 ? 's' : ''} available</div>
        <a class="btn-outline" href="#/search?brand=${encodeURIComponent(b)}">Shop ${b} ${ICONS.arrowR}</a>
      </div>`).join('');
  }

  /* ================= PRODUCT DETAIL ================= */
  if (PAGE === 'product') {
    const p = getProduct(qs('id'));
    const wrap = document.getElementById('pd-root');
    if (!p) {
      wrap.innerHTML = `<div class="empty-state">${ICONS.search}<h3>Watch not found</h3><p>The product you are looking for does not exist or was removed.</p><a class="btn" href="#/home">Back to Home</a></div>`;
      return;
    }
    document.title = `${p.name} | Watch Store`;
    const b = badgeLabel(p);
    const wished = wishlistItems().includes(p.id);
    const stock = getStock(p.id);
    const recent = JSON.parse(localStorage.getItem('ws_recently_viewed') || '[]')
      .map(Number).filter(id => id !== p.id && getProduct(id));
    const recentIds = [p.id, ...recent].filter((id, index, list) => list.indexOf(id) === index).slice(0, 7);
    localStorage.setItem('ws_recently_viewed', JSON.stringify(recentIds));
    wrap.innerHTML = `
      <div class="pd-wrap">
        <div class="pd-gallery reveal">
          ${b ? `<span class="p-badge ${badgeClass(p)}">${b}</span>` : ''}
          <img src="${p.img}" alt="${p.name}">
        </div>
        <div class="pd-info">
          <span class="pd-brand">${p.brand}</span>
          <h2>${p.name}</h2>
          <div class="pd-price-row">
            <span class="now">${formatPrice(p.price)}</span>
            ${p.old ? `<span class="old">${formatPrice(p.old)}</span><span class="save-pill">Save ${discountPct(p)}%</span>` : ''}
          </div>
          <p class="pd-desc">${p.desc}</p>
          <div class="pd-meta">
            <div><b>Category:</b> ${CAT_NAME[p.cat]}</div>
            <div><b>Brand:</b> ${p.brand}</div>
            <div><b>Availability:</b> <span class="${stock <= 2 ? 'stock-low' : 'in-stock'}">${stock === 0 ? 'Out of Stock' : stock <= 2 ? `Only ${stock} left` : '✓ In Stock'}</span> — ${stock ? 'ready to ship' : 'currently unavailable'}</div>
          </div>
          <div class="buy-row">
            <div class="qty">
              <button type="button" id="q-minus">−</button>
              <input type="text" id="q-input" value="1" readonly aria-label="Quantity">
              <button type="button" id="q-plus"${stock <= 1 ? ' disabled' : ''}>+</button>
            </div>
            <button class="btn" id="pd-add"${stock ? '' : ' disabled'}>${ICONS.cart} Add To Cart</button>
            <button class="btn btn-dark" id="pd-buy"${stock ? '' : ' disabled'}>Buy Now</button>
            <button class="wish-lg${wished ? ' active' : ''}" id="pd-wish" aria-label="Wishlist">${ICONS.heart}</button>
            <button class="btn-outline pd-compare${compareList().includes(p.id) ? ' active' : ''}" id="pd-compare" data-compare="${p.id}" type="button" aria-pressed="${compareList().includes(p.id)}">Compare</button>
          </div>
          <div class="pd-trust">
            <div>${ICONS.truck}Free delivery across Pakistan</div>
            <div>${ICONS.shield}100% original &amp; authentic</div>
            <div>${ICONS.refresh}7-day easy returns</div>
          </div>
          <ul class="pd-feats">
            <li>${ICONS.check} Premium gift box &amp; original documentation included</li>
            <li>${ICONS.check} 1-year official store warranty on all watches</li>
            <li>${ICONS.check} Cash on delivery available nationwide</li>
          </ul>
        </div>
      </div>
      <section class="product-reviews" id="pd-reviews" aria-labelledby="reviews-title">
        <div class="reviews-heading"><div><span class="eyebrow">Customer feedback</span><h2 id="reviews-title">Reviews</h2></div><p class="reviews-local-note">Reviews are saved on this device.</p></div>
        <div id="review-summary"></div>
        <div id="review-list"></div>
        <form class="review-form" id="review-form">
          <h3>Write a review</h3>
          <div class="review-form-grid">
            <div class="field"><label for="review-name">Your name</label><input id="review-name" name="name" maxlength="60" placeholder="Your name"></div>
            <div class="field"><label for="review-rating">Rating</label><select id="review-rating" name="rating" required><option value="">Select rating</option><option value="5">5 — Excellent</option><option value="4">4 — Very good</option><option value="3">3 — Good</option><option value="2">2 — Fair</option><option value="1">1 — Poor</option></select></div>
            <div class="field full"><label for="review-title">Review title</label><input id="review-title" name="title" maxlength="80" required placeholder="Summarize your experience"></div>
            <div class="field full"><label for="review-text">Your review</label><textarea id="review-text" name="text" maxlength="1000" required placeholder="What did you think of this watch?"></textarea></div>
          </div>
          <button class="btn" type="submit">Submit Review</button>
        </form>
      </section>`;
    let qty = 1;
    wrap.querySelector('#q-plus').onclick = () => {
      qty = Math.min(9, stock, qty + 1);
      wrap.querySelector('#q-input').value = qty;
      wrap.querySelector('#q-plus').disabled = qty >= stock;
      wrap.querySelector('#q-minus').disabled = qty <= 1;
    };
    wrap.querySelector('#q-minus').onclick = () => {
      qty = Math.max(1, qty - 1);
      wrap.querySelector('#q-input').value = qty;
      wrap.querySelector('#q-minus').disabled = qty <= 1;
      wrap.querySelector('#q-plus').disabled = qty >= stock;
    };
    wrap.querySelector('#pd-add').onclick = () => addToCart(p.id, qty);
    wrap.querySelector('#pd-buy').onclick = () => { addToCart(p.id, qty, true); location.href = '#/checkout'; };
    wrap.querySelector('#pd-wish').onclick = e => {
      const on = toggleWish(p.id);
      e.currentTarget.classList.toggle('active', on);
      toast(on ? 'Added to your wishlist!' : 'Removed from wishlist.', 'heart');
    };
    wrap.querySelector('#pd-compare').onclick = e => {
      const on = toggleCompare(p.id);
      if (on === null) return;
      e.currentTarget.classList.toggle('active', on);
      e.currentTarget.setAttribute('aria-pressed', String(on));
    };
    renderProductReviews(p.id);
    wrap.querySelector('#review-form').addEventListener('submit', event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const reviews = productReviews(p.id);
      reviews.unshift({
        name: form.elements.name.value.trim() || 'Customer',
        rating: Number(form.elements.rating.value),
        title: form.elements.title.value.trim(),
        text: form.elements.text.value.trim(),
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      });
      localStorage.setItem(`ws_reviews_${p.id}`, JSON.stringify(reviews.slice(0, 50)));
      form.reset();
      renderProductReviews(p.id);
      toast('Thank you! Your review was saved on this device.');
    });
    const related = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
    renderProducts(related, document.getElementById('related-grid'));
    const recentProducts = recentIds.slice(1).map(getProduct).filter(Boolean).slice(0, 4);
    if (recentProducts.length) {
      const relatedSection = document.getElementById('related-grid').closest('.section');
      relatedSection.insertAdjacentHTML('beforebegin', `
        <section class="section recently-viewed"><div class="container">
          <div class="sec-head"><div><span class="eyebrow">Your browsing</span><h2>Recently <em>Viewed</em></h2></div></div>
          <div class="products-grid" id="recently-viewed-grid"></div>
        </div></section>`);
      renderProducts(recentProducts, document.getElementById('recently-viewed-grid'));
    }
    const crumb = document.getElementById('pd-crumb');
    if (crumb) crumb.textContent = p.name;
    const catLink = document.getElementById('pd-cat-link');
    if (catLink) {
      catLink.href = p.cat === 'men' ? '#/mens' : p.cat === 'women' ? '#/womens' : '#/luxury';
      catLink.textContent = CAT_NAME[p.cat];
    }
  }

  /* ================= CART ================= */
  if (PAGE === 'cart') {
    const root = document.getElementById('cart-root');
    const draw = () => {
      const items = cartItems();
      if (!items.length) {
        root.innerHTML = `<div class="empty-state">${ICONS.cart}<h3>Your cart is empty</h3><p>Looks like you haven't added anything yet. Explore our collections!</p><a class="btn" href="#/home">Start Shopping ${ICONS.arrowR}</a></div>`;
        return;
      }
      const sub = items.reduce((s, i) => s + getProduct(i.id).price * i.qty, 0);
      const coupon = appliedCoupon(sub);
      const total = sub - coupon.discount;
      root.innerHTML = `
        <div class="cart-layout">
          <div class="cart-card" style="overflow-x:auto">
            <table class="cart-table">
              <thead><tr><th>Product</th><th class="hide-m">Price</th><th>Quantity</th><th class="num">Total</th><th></th></tr></thead>
              <tbody>
                ${items.map(i => { const p = getProduct(i.id); return `
                <tr>
                  <td><a class="cart-prod" href="#/product?id=${p.id}"><img src="${p.img}" alt="${p.name}"><span><span>${p.brand}</span><b>${p.name}</b></span></a></td>
                  <td class="cart-price hide-m">${formatPrice(p.price)}</td>
                  <td>
                    <div class="qty" style="height:40px">
                      <button type="button" style="height:38px;width:36px" data-qminus="${p.id}">−</button>
                      <input type="text" value="${i.qty}" readonly aria-label="Quantity" style="width:36px">
                      <button type="button" style="height:38px;width:36px" data-qplus="${p.id}"${i.qty >= getStock(p.id) ? ' disabled' : ''}>+</button>
                    </div>
                  </td>
                  <td class="cart-total num">${formatPrice(p.price * i.qty)}</td>
                  <td class="num"><button class="rm-btn" data-rm="${p.id}" aria-label="Remove">${ICONS.trash}</button></td>
                </tr>`; }).join('')}
              </tbody>
            </table>
          </div>
          <div class="sum-card">
            <h3>Order Summary</h3>
            <div class="sum-row"><span>Subtotal</span><b>${formatPrice(sub)}</b></div>
            <div class="sum-row"><span>Shipping</span><b class="free-tag">FREE</b></div>
            <form class="coupon-form" id="cart-coupon-form">
              <label for="cart-coupon">Promo code</label>
              <div><input id="cart-coupon" name="coupon" autocomplete="off" placeholder="Enter code" value="${coupon.discount ? coupon.code : ''}"><button type="submit">Apply</button>${coupon.discount ? '<button type="button" class="coupon-remove" id="remove-cart-coupon">Remove</button>' : ''}</div>
              <small>Try TIME10 or SAVE500.</small>
              <p class="coupon-feedback" id="cart-coupon-feedback" aria-live="polite"></p>
            </form>
            <div class="sum-row"><span>Discount${coupon.discount ? ` (${coupon.code})` : ''}</span><b>${coupon.discount ? `− ${formatPrice(coupon.discount)}` : '—'}</b></div>
            <div class="sum-row total"><span>Total</span><b>${formatPrice(total)}</b></div>
            <a class="btn" href="#/checkout">Proceed to Checkout ${ICONS.arrowR}</a>
            <a class="continue-link" href="#/home">← Continue shopping</a>
          </div>
        </div>`;
      root.querySelectorAll('[data-qplus]').forEach(b => b.onclick = () => {
        const items = cartItems(); const it = items.find(x => x.id === Number(b.dataset.qplus));
        it.qty = Math.min(9, getStock(it.id), it.qty + 1); saveCart(items); draw();
      });
      root.querySelectorAll('[data-qminus]').forEach(b => b.onclick = () => {
        const items = cartItems(); const it = items.find(x => x.id === Number(b.dataset.qminus));
        it.qty = Math.max(1, it.qty - 1); saveCart(items); draw();
      });
      root.querySelectorAll('[data-rm]').forEach(b => b.onclick = () => {
        saveCart(cartItems().filter(x => x.id !== Number(b.dataset.rm)));
        toast('Item removed from cart.', 'trash'); draw();
      });
      root.querySelector('#cart-coupon-form').addEventListener('submit', event => {
        event.preventDefault();
        const code = event.currentTarget.elements.coupon.value.trim().toUpperCase();
        const feedback = root.querySelector('#cart-coupon-feedback');
        const definition = COUPONS[code];
        if (!definition) {
          feedback.textContent = 'That promo code is not valid.';
          feedback.classList.add('error');
          return;
        }
        if (sub < definition.minimum) {
          feedback.textContent = `This code needs a minimum order of ${formatPrice(definition.minimum)}.`;
          feedback.classList.add('error');
          return;
        }
        localStorage.setItem('ws_coupon', code);
        toast(`Promo code ${code} applied.`);
        draw();
      });
      root.querySelector('#remove-cart-coupon')?.addEventListener('click', () => {
        localStorage.removeItem('ws_coupon');
        draw();
      });
    };
    draw();
  }

  /* ================= CHECKOUT ================= */
  if (PAGE === 'checkout') {
    const root = document.getElementById('checkout-root');
    const items = cartItems();
    if (!items.length) { location.href = '#/cart'; return; }
    const unavailable = items.find(item => item.qty > getStock(item.id));
    if (unavailable) {
      root.innerHTML = `<div class="empty-state"><h3>Cart availability changed</h3><p>Please review the quantities in your cart before placing the order.</p><a class="btn" href="#/cart">Review Cart</a></div>`;
      return;
    }
    const sub = items.reduce((s, i) => s + getProduct(i.id).price * i.qty, 0);
    let coupon = appliedCoupon(sub);
    root.innerHTML = `
      <div class="cart-layout">
        <div class="form-card">
          <h3 style="font-family:var(--serif);font-size:22px;margin-bottom:20px">Shipping &amp; Payment Details</h3>
          <form id="checkout-form" novalidate>
            <div class="form-grid">
              <div class="field"><label>Full Name <i>*</i></label><input name="name" required placeholder="e.g. Ahmed Raza"></div>
              <div class="field"><label>Phone Number <i>*</i></label><input name="phone" required placeholder="03XX XXXXXXX"></div>
              <div class="field full"><label>Email Address <i>*</i></label><input name="email" type="email" required placeholder="you@example.com"></div>
              <div class="field"><label>City <i>*</i></label>
                <select name="city" required>
                  <option value="">Select city</option>
                  <option>Lahore</option><option>Karachi</option><option>Islamabad</option><option>Rawalpindi</option>
                  <option>Faisalabad</option><option>Multan</option><option>Peshawar</option><option>Quetta</option><option>Other</option>
                </select></div>
              <div class="field"><label>Postal Code</label><input name="zip" placeholder="54000"></div>
              <div class="field full"><label>Complete Address <i>*</i></label><textarea name="address" required placeholder="House, street, area..."></textarea></div>
            </div>
            <h4 style="margin:22px 0 12px;font-size:14px;letter-spacing:.5px">Payment Method</h4>
            <div class="pay-cards">
              <label class="pay-card sel"><input type="radio" name="pay" value="Cash on Delivery" checked><span><b>Cash on Delivery</b><span>Pay when your watch arrives</span></span></label>
              <label class="pay-card"><input type="radio" name="pay" value="Bank Transfer"><span><b>Bank Transfer</b><span>Direct deposit / Easypaisa</span></span></label>
            </div>
            <button class="btn" id="place-order-button" style="width:100%;justify-content:center;margin-top:24px" type="submit">Place Order — ${formatPrice(sub - coupon.discount)} ${ICONS.arrowR}</button>
          </form>
        </div>
        <div class="sum-card">
          <h3>Your Order</h3>
          ${items.map(i => { const p = getProduct(i.id); return `
            <div class="mini-item"><img src="${p.img}" alt="${p.name}">
              <span><b>${p.name}</b><span>Qty: ${i.qty}</span></span>
              <span class="m-price">${formatPrice(p.price * i.qty)}</span></div>`; }).join('')}
          <div class="sum-row" style="margin-top:12px"><span>Subtotal</span><b>${formatPrice(sub)}</b></div>
          <div class="sum-row"><span>Shipping</span><b class="free-tag">FREE</b></div>
          <form class="coupon-form" id="checkout-coupon-form">
            <label for="checkout-coupon">Promo code</label>
            <div><input id="checkout-coupon" name="coupon" autocomplete="off" placeholder="Enter code" value="${coupon.discount ? coupon.code : ''}"><button type="submit">Apply</button>${coupon.discount ? '<button type="button" class="coupon-remove" id="remove-checkout-coupon">Remove</button>' : ''}</div>
            <small>Try TIME10 or SAVE500.</small>
            <p class="coupon-feedback" id="checkout-coupon-feedback" aria-live="polite"></p>
          </form>
          <div class="sum-row"><span>Discount${coupon.discount ? ` (${coupon.code})` : ''}</span><b id="checkout-discount">${coupon.discount ? `− ${formatPrice(coupon.discount)}` : '—'}</b></div>
          <div class="sum-row total"><span>Total</span><b id="checkout-total">${formatPrice(sub - coupon.discount)}</b></div>
        </div>
      </div>`;
    const refreshCheckoutTotals = () => {
      coupon = appliedCoupon(sub);
      root.querySelector('#checkout-coupon').value = coupon.discount ? coupon.code : '';
      root.querySelector('#checkout-discount').textContent = coupon.discount ? `− ${formatPrice(coupon.discount)}` : '—';
      root.querySelector('#checkout-total').textContent = formatPrice(sub - coupon.discount);
      root.querySelector('#place-order-button').innerHTML = `Place Order — ${formatPrice(sub - coupon.discount)} ${ICONS.arrowR}`;
      const removeButton = root.querySelector('#remove-checkout-coupon');
      if (coupon.discount && !removeButton) {
        root.querySelector('#checkout-coupon-form > div').insertAdjacentHTML('beforeend', '<button type="button" class="coupon-remove" id="remove-checkout-coupon">Remove</button>');
      } else if (!coupon.discount) {
        removeButton?.remove();
      }
    };
    root.querySelector('#checkout-coupon-form').addEventListener('submit', event => {
      event.preventDefault();
      const code = event.currentTarget.elements.coupon.value.trim().toUpperCase();
      const feedback = root.querySelector('#checkout-coupon-feedback');
      const definition = COUPONS[code];
      if (!definition) {
        feedback.textContent = 'That promo code is not valid.';
        feedback.classList.add('error');
        return;
      }
      if (sub < definition.minimum) {
        feedback.textContent = `This code needs a minimum order of ${formatPrice(definition.minimum)}.`;
        feedback.classList.add('error');
        return;
      }
      localStorage.setItem('ws_coupon', code);
      feedback.classList.remove('error');
      feedback.textContent = `Promo code ${code} applied.`;
      refreshCheckoutTotals();
    });
    root.querySelector('#checkout-coupon-form').addEventListener('click', event => {
      if (event.target.id !== 'remove-checkout-coupon') return;
      localStorage.removeItem('ws_coupon');
      refreshCheckoutTotals();
    });
    root.querySelectorAll('.pay-card input').forEach(r =>
      r.addEventListener('change', () => root.querySelectorAll('.pay-card').forEach(c =>
        c.classList.toggle('sel', c.querySelector('input').checked))));
    document.getElementById('checkout-form').addEventListener('submit', e => {
      e.preventDefault();
      const f = e.target;
      if (!f.checkValidity()) { f.reportValidity(); return; }
      const noLongerAvailable = items.find(item => item.qty > getStock(item.id));
      if (noLongerAvailable) {
        toast(`${getProduct(noLongerAvailable.id).name} is no longer available in that quantity.`);
        location.href = '#/cart';
        return;
      }
      coupon = appliedCoupon(sub);
      const total = sub - coupon.discount;
      const orders = JSON.parse(localStorage.getItem('ws_orders') || '[]');
      const no = 'WS-' + Date.now().toString().slice(-8);
      const orderDate = new Date();
      const orderDateLabel = orderDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
      const customer = {
        name: f.elements.name.value.trim(),
        phone: f.elements.phone.value.trim(),
        email: f.elements.email.value.trim(),
        city: f.elements.city.value,
        zip: f.elements.zip.value.trim(),
        address: f.elements.address.value.trim(),
      };
      const paymentMethod = f.pay.value;
      const receiptItems = items.map(item => {
        const product = getProduct(item.id);
        return { ...item, name: product.name, price: product.price };
      });
      orders.unshift({
        no, date: orderDateLabel, items, subtotal: sub, discount: coupon.discount,
        coupon: coupon.discount ? coupon.code : '', total, pay: paymentMethod,
        status: 'received', ...customer,
      });
      const inventory = JSON.parse(localStorage.getItem('ws_inventory') || '{}');
      items.forEach(item => { inventory[item.id] = getStock(item.id) - item.qty; });
      localStorage.setItem('ws_inventory', JSON.stringify(inventory));
      localStorage.setItem('ws_orders', JSON.stringify(orders));
      saveCart([]);
      localStorage.removeItem('ws_coupon');
      const paymentStatus = paymentMethod === 'Cash on Delivery'
        ? 'Payable on delivery'
        : 'Pending manual verification';
      const itemMessage = receiptItems
        .map(item => `- ${item.name} x${item.qty}: ${formatPrice(item.price * item.qty)}`)
        .join('\n');
      const address = [customer.address, customer.city, customer.zip].filter(Boolean).join(', ');
      const whatsappMessage = [
        'NEW WATCH STORE ORDER',
        `Order: ${no}`,
        `Date: ${orderDateLabel}`,
        `Customer: ${customer.name}`,
        `Phone: ${customer.phone}`,
        `Email: ${customer.email}`,
        `Address: ${address}`,
        `Payment method: ${paymentMethod}`,
        `Payment status: ${paymentStatus}`,
        'Items:',
        itemMessage,
        ...(coupon.discount ? [`Promo code: ${coupon.code}`, `Discount: − ${formatPrice(coupon.discount)}`] : []),
        `Total: ${formatPrice(total)}`,
      ].join('\n');
      const customerReceiptMessage = [
        'WATCH STORE — ORDER RECEIPT',
        `Order: ${no}`,
        `Date: ${orderDateLabel}`,
        ...receiptItems.map(item => `${item.name} x${item.qty}: ${formatPrice(item.price * item.qty)}`),
        ...(coupon.discount ? [`Promo code: ${coupon.code}`, `Discount: − ${formatPrice(coupon.discount)}`] : []),
        `Total: ${formatPrice(total)}`,
        `Payment method: ${paymentMethod}`,
        `Payment status: ${paymentStatus}`,
      ].join('\n');
      const sellerWhatsappUrl = `https://wa.me/923006693524?text=${encodeURIComponent(whatsappMessage)}`;
      const customerPhoneDigits = customer.phone.replace(/\D/g, '');
      const customerWhatsappNumber = customerPhoneDigits.startsWith('00')
        ? customerPhoneDigits.slice(2)
        : customerPhoneDigits.startsWith('0')
          ? `92${customerPhoneDigits.slice(1)}`
          : customerPhoneDigits.length === 10 && customerPhoneDigits.startsWith('3')
            ? `92${customerPhoneDigits}`
            : customerPhoneDigits;
      const customerWhatsappUrl = `https://wa.me/${customerWhatsappNumber}?text=${encodeURIComponent(customerReceiptMessage)}`;
      root.innerHTML = `
        <div class="form-card success-card" style="max-width:760px;margin:0 auto">
          <div class="ok-circle">${ICONS.check}</div>
          <h2>Order Placed Successfully!</h2>
          <p>Thank you, ${escapeHtml(customer.name.split(' ')[0])}! Your order <span class="order-no">${no}</span> has been received.</p>
          <p>We will contact you shortly at <b>${escapeHtml(customer.phone)}</b> to confirm delivery.</p>
          <section class="receipt-sheet" aria-label="Order receipt">
            <div class="receipt-heading"><div><span class="receipt-kicker">WATCH STORE</span><h3>Order Receipt</h3></div><span class="receipt-badge">Order placed</span></div>
            <div class="receipt-meta">
              <div><span>Order number</span><b>${no}</b></div>
              <div><span>Date</span><b>${orderDateLabel}</b></div>
              <div><span>Payment method</span><b>${escapeHtml(paymentMethod)}</b></div>
              <div><span>Payment status</span><b>${paymentStatus}</b></div>
            </div>
            <h4>Items</h4>
            <div class="receipt-items">${receiptItems.map(item => `
              <div class="receipt-item"><span>${escapeHtml(item.name)} <small>Qty: ${item.qty}</small></span><b>${formatPrice(item.price * item.qty)}</b></div>`).join('')}
            </div>
            ${coupon.discount ? `<div class="receipt-total receipt-discount"><span>Promo ${coupon.code}</span><b>− ${formatPrice(coupon.discount)}</b></div>` : ''}
            <div class="receipt-total"><span>Total</span><b>${formatPrice(total)}</b></div>
            <div class="receipt-customer">
              <h4>Customer details</h4>
              <p><b>${escapeHtml(customer.name)}</b> · ${escapeHtml(customer.phone)} · ${escapeHtml(customer.email)}</p>
              <p>${escapeHtml(address)}</p>
            </div>
            <p class="receipt-disclaimer">${paymentMethod === 'Cash on Delivery'
              ? 'Payment is due when your order is delivered.'
              : 'Bank transfer is not verified by this website. Your order will be confirmed after the payment is checked.'}</p>
          </section>
          <p class="whatsapp-consent">WhatsApp opens with a prepared message. Review the details and tap Send to share them.</p>
          <div class="receipt-actions">
            <a class="btn whatsapp-button" href="${sellerWhatsappUrl}" target="_blank" rel="noopener noreferrer">Send Order to Store on WhatsApp</a>
            <a class="btn-outline" href="${customerWhatsappUrl}" target="_blank" rel="noopener noreferrer">WhatsApp Receipt to My Number</a>
            <button class="btn-outline" id="print-receipt" type="button">Print / Save as PDF</button>
          </div>
          <div class="success-links">
            <a href="#/home">Continue Shopping</a>
            <a href="#/account">View My Orders</a>
          </div>
        </div>`;
      root.querySelector('#print-receipt').addEventListener('click', () => window.print());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ================= ACCOUNT ================= */
  if (PAGE === 'account') {
    const root = document.getElementById('account-root');
    const user = JSON.parse(localStorage.getItem('ws_user') || 'null');
    const orders = JSON.parse(localStorage.getItem('ws_orders') || '[]');
    if (user) {
      root.innerHTML = `
        <div class="form-card" style="max-width:640px;margin:0 auto">
          <div style="display:flex;gap:16px;align-items:center;margin-bottom:6px">
            <div class="c-icon" style="border-radius:50%">${ICONS.user}</div>
            <div><h2 style="font-family:var(--serif);font-size:24px">Welcome back, ${user.name}!</h2>
            <p style="color:var(--muted);font-size:13.5px">${user.email}</p></div>
          </div>
          <div class="dash-links">
            <a href="#/wishlist">${ICONS.heart} My Wishlist <span style="font-weight:400;color:var(--muted);font-size:12.5px">${wishlistItems().length} saved</span></a>
            <a href="#/cart">${ICONS.cart} My Cart <span style="font-weight:400;color:var(--muted);font-size:12.5px">${cartItems().length} item(s)</span></a>
          </div>
          <h3 style="font-family:var(--serif);font-size:19px;margin:26px 0 12px">Order History</h3>
          ${orders.length ? orders.map(o => `
            <div class="mini-item" style="border-bottom:1px solid var(--line)">
              ${ICONS.box}<span><b>${o.no}</b><span>${o.date} — ${o.items.reduce((s, i) => s + i.qty, 0)} item(s) — ${o.pay}</span></span>
              <span class="m-price">${formatPrice(o.total)}</span>
            </div>`).join('') : '<p style="color:var(--muted);font-size:14px">No orders yet. <a href="#/home" style="color:var(--gold-deep);font-weight:600">Start shopping →</a></p>'}
          <button class="btn-outline" id="acc-logout" style="margin-top:22px">Log Out</button>
        </div>`;
      root.querySelector('#acc-logout').onclick = () => {
        localStorage.removeItem('ws_user'); toast('You have been logged out.');
        setTimeout(() => window.WSReload(), 700);
      };
    } else {
      root.innerHTML = `
        <div class="auth-wrap form-card">
          <div class="auth-tabs">
            <button class="active" data-tab="login">Login</button>
            <button data-tab="register">Register</button>
          </div>
          <form id="login-form" novalidate>
            <div class="field" style="margin-bottom:16px"><label>Email Address</label><input type="email" name="email" required placeholder="you@example.com"></div>
            <div class="field" style="margin-bottom:20px"><label>Password</label><input type="password" name="pass" required placeholder="••••••••"></div>
            <button class="btn" style="width:100%;justify-content:center" type="submit">Login ${ICONS.arrowR}</button>
            <p class="auth-note">Demo store — any email &amp; password will log you in.</p>
          </form>
          <form id="register-form" style="display:none" novalidate>
            <div class="field" style="margin-bottom:16px"><label>Full Name</label><input name="name" required placeholder="e.g. Ahmed Raza"></div>
            <div class="field" style="margin-bottom:16px"><label>Email Address</label><input type="email" name="email" required placeholder="you@example.com"></div>
            <div class="field" style="margin-bottom:20px"><label>Password</label><input type="password" name="pass" required minlength="4" placeholder="Min 4 characters"></div>
            <button class="btn" style="width:100%;justify-content:center" type="submit">Create Account ${ICONS.arrowR}</button>
            <p class="auth-note">Demo store — your details stay in this browser only.</p>
          </form>
        </div>`;
      const tabs = root.querySelectorAll('.auth-tabs button');
      tabs.forEach(t => t.onclick = () => {
        tabs.forEach(x => x.classList.toggle('active', x === t));
        root.querySelector('#login-form').style.display = t.dataset.tab === 'login' ? '' : 'none';
        root.querySelector('#register-form').style.display = t.dataset.tab === 'register' ? '' : 'none';
      });
      root.querySelector('#login-form').addEventListener('submit', e => {
        e.preventDefault(); const f = e.target;
        if (!f.checkValidity()) { f.reportValidity(); return; }
        const name = f.email.value.split('@')[0].replace(/[^a-zA-Z]/g, ' ') || 'Customer';
        localStorage.setItem('ws_user', JSON.stringify({ name: name.trim(), email: f.email.value }));
        toast('Welcome back!'); setTimeout(() => window.WSReload(), 700);
      });
      root.querySelector('#register-form').addEventListener('submit', e => {
        e.preventDefault(); const f = e.target;
        if (!f.checkValidity()) { f.reportValidity(); return; }
        localStorage.setItem('ws_user', JSON.stringify({ name: f.name.value, email: f.email.value }));
        toast('Account created successfully!'); setTimeout(() => window.WSReload(), 700);
      });
    }
  }

  /* ================= ORDER TRACKING ================= */
  if (PAGE === 'track-order') {
    const form = document.getElementById('track-order-form');
    const result = document.getElementById('track-order-result');
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const orderNo = form.elements.order.value.trim().toUpperCase();
      const orders = JSON.parse(localStorage.getItem('ws_orders') || '[]');
      const order = orders.find(item => item.no.toUpperCase() === orderNo);
      result.replaceChildren();

      const heading = document.createElement('h2');
      heading.textContent = order ? `Order ${order.no}` : 'Order not found';
      result.appendChild(heading);

      if (!order) {
        const message = document.createElement('p');
        message.textContent = 'Orders placed on this device appear here. Check the order number in your confirmation, or contact us for help.';
        result.appendChild(message);
        return;
      }

      const stages = [
        ['received', 'Order received'],
        ['processing', 'Processing'],
        ['shipped', 'Dispatched'],
        ['delivered', 'Delivered'],
      ];
      const currentStatus = stages.some(([status]) => status === order.status) ? order.status : 'received';
      const statusIndex = stages.findIndex(([status]) => status === currentStatus);
      const timeline = document.createElement('ol');
      timeline.className = 'order-timeline';
      timeline.setAttribute('aria-label', 'Order progress');
      stages.forEach(([status, label], index) => {
        const step = document.createElement('li');
        step.className = index < statusIndex ? 'complete' : index === statusIndex ? 'current' : '';
        step.textContent = label;
        timeline.appendChild(step);
      });
      result.appendChild(timeline);

      const details = document.createElement('p');
      details.textContent = `Placed ${order.date} · ${order.items.reduce((sum, item) => sum + item.qty, 0)} item(s) · ${formatPrice(order.total)}`;
      result.appendChild(details);

      const note = document.createElement('p');
      note.textContent = 'This demo saves order details on the device used to place the order. Live courier updates are not connected; message the store for a manual update.';
      result.appendChild(note);

      const contact = document.createElement('a');
      contact.className = 'btn';
      contact.href = `https://wa.me/923006693524?text=${encodeURIComponent(`Hi, please update me about order ${order.no}.`)}`;
      contact.target = '_blank';
      contact.rel = 'noopener noreferrer';
      contact.textContent = 'Ask about this order on WhatsApp';
      result.appendChild(contact);
    });
  }

  /* ================= WISHLIST ================= */
  if (PAGE === 'wishlist') {
    const grid = document.getElementById('wishlist-grid');
    const shared = qs('ids') !== null;
    const ids = shared
      ? [...new Set(qs('ids').split(',').map(Number).filter(id => getProduct(id)))].slice(0, 20)
      : wishlistItems();
    const items = ids.map(getProduct).filter(Boolean);
    if (items.length) {
      grid.insertAdjacentHTML('beforebegin', `
        <div class="wishlist-share">
          <div>${shared ? '<b>Shared wishlist preview</b><small>This preview was shared by another shopper.</small>' : '<b>Your saved watches</b><small>Share your picks with friends and family.</small>'}</div>
          <button class="btn-outline" id="share-wishlist" type="button">Share Wishlist</button>
        </div>`);
      document.getElementById('share-wishlist').addEventListener('click', async () => {
        const url = new URL(location.href);
        url.search = '';
        url.searchParams.set('ids', ids.join(','));
        const shareData = { title: 'My Watch Store wishlist', text: 'Take a look at these watches I saved:', url: url.href };
        if (typeof navigator.share === 'function') {
          try {
            await navigator.share(shareData);
          } catch (error) {
            if (error.name !== 'AbortError') toast('Could not open the share menu. Please try copying the link.');
          }
          return;
        }
        if (navigator.clipboard?.writeText) {
          try {
            await navigator.clipboard.writeText(url.href);
            toast('Wishlist link copied.');
          } catch (error) {
            toast('Could not copy the wishlist link. Please copy it from the address bar.');
          }
          return;
        }
        window.prompt('Copy your wishlist link:', url.href);
      });
    }
    if (!items.length) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">${ICONS.heart}<h3>Your wishlist is empty</h3><p>Tap the heart on any watch to save it here for later.</p><a class="btn" href="#/home">Discover Watches ${ICONS.arrowR}</a></div>`;
    } else {
      renderProducts(items, grid);
    }
  }

  /* ================= SEARCH ================= */
  if (PAGE === 'search') {
    const q = (qs('q') || '').trim();
    const requestedBrand = qs('brand') || '';
    const box = document.getElementById('search-meta');
    if (requestedBrand && !q) {
      box.innerHTML = `Showing all watches by <b>${escapeHtml(requestedBrand)}</b>`;
      const st = document.querySelector('.page-hero h1');
      if (st) st.innerHTML = `${escapeHtml(requestedBrand)} <em>Collection</em>`;
      const input = document.querySelector('#header-search input');
      if (input) input.value = requestedBrand;
    } else if (q) {
      const input = document.querySelector('#header-search input');
      if (input) input.value = q;
    } else {
      box.innerHTML = 'Type something in the search bar above to find your perfect watch.';
    }
    const grid = document.getElementById('search-grid');
    const brandSelect = document.getElementById('search-brand');
    brandSelect.insertAdjacentHTML('beforeend', [...new Set(PRODUCTS.map(p => p.brand))]
      .sort((a, b) => a.localeCompare(b))
      .map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join(''));
    brandSelect.value = [...brandSelect.options].some(option => option.value === requestedBrand) ? requestedBrand : '';
    const applySearch = () => {
      const keyword = q.toLowerCase();
      let list = PRODUCTS.filter(p =>
        (!keyword || `${p.name} ${p.brand} ${p.desc}`.toLowerCase().includes(keyword)) &&
        (!document.getElementById('search-brand').value || p.brand === document.getElementById('search-brand').value) &&
        (!document.getElementById('search-category').value || p.cat === document.getElementById('search-category').value));
      const sort = document.getElementById('search-sort').value;
      if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
      if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
      if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
      box.innerHTML = q
        ? `Found <b>${list.length}</b> result${list.length !== 1 ? 's' : ''} for “<b>${escapeHtml(q)}</b>”`
        : `Showing <b>${list.length}</b> watches${brandSelect.value ? ` by <b>${escapeHtml(brandSelect.value)}</b>` : ''}`;
      if (list.length) renderProducts(list, grid);
      else grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">${ICONS.search}<h3>No matches found</h3><p>Try changing your keyword or filters.</p><a class="btn" href="#/home">Browse All Watches</a></div>`;
    };
    document.getElementById('search-filters').addEventListener('change', applySearch);
    applySearch();
  }

  /* ================= CONTACT ================= */
  if (PAGE === 'contact') {
    document.getElementById('contact-form').addEventListener('submit', e => {
      e.preventDefault();
      const f = e.target;
      if (!f.checkValidity()) { f.reportValidity(); return; }
      toast('Message sent! We will get back to you within 24 hours.');
      f.reset();
    });
  }

  /* ================= FAQ ACCORDION ================= */
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => {
        o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!open) {
        item.classList.add('open');
        const a = item.querySelector('.faq-a');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ================= COUNTDOWN (end of month) ================= */
  const cd = document.getElementById('countdown');
  if (cd) {
    const end = new Date();
    end.setMonth(end.getMonth() + 1, 0); end.setHours(23, 59, 59, 999);
    const tick = () => {
      const d = Math.max(0, end - new Date());
      const set = (sel, v) => { cd.querySelector(sel).textContent = String(v).padStart(2, '0'); };
      set('.cd-d', Math.floor(d / 864e5));
      set('.cd-h', Math.floor(d / 36e5) % 24);
      set('.cd-m', Math.floor(d / 6e4) % 60);
      set('.cd-s', Math.floor(d / 1e3) % 60);
    };
    tick(); WSInterval(tick, 1000);
  }

  /* newsletter (used on index) */
  function bindNewsletter() {
    const form = document.getElementById('news-form');
    if (form) form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      toast('Subscribed! Welcome to the Watch Store family.');
      form.reset();
    });
  }

  /* reveal animations */
  revealInit();
};

  


window.WSInterval = (fn, ms) => {
  const id = setInterval(fn, ms);
  (window._wsTimers = window._wsTimers || []).push(id);
  return id;
};
window.WSReload = () => location.reload();
const ROUTE_FILES = {"home":"index.html","mens":"mens-watches.html","womens":"womens-watches.html","luxury":"luxury-watches.html","sale":"sale.html","brands":"brands.html","contact":"contact.html","track-order":"track-order.html","cart":"cart.html","checkout":"checkout.html","account":"account.html","wishlist":"wishlist.html","product":"product.html","search":"search.html","faqs":"faqs.html","shipping":"shipping-policy.html","returns":"return-policy.html","privacy":"privacy-policy.html","terms":"terms-conditions.html"};
document.addEventListener('submit', e => {
  const form = e.target;
  if (form && form.id === 'header-search') {
    e.preventDefault();
    const q = form.querySelector('input[name="q"]').value.trim();
    location.href = ROUTE_FILES.search + (q ? '?q=' + encodeURIComponent(q) : '');
  }
}, true);
document.addEventListener('click', e => {
  const link = e.target.closest && e.target.closest('a');
  if (!link) return;
  const href = link.getAttribute('href') || '';
  if (!href.startsWith('#/')) return;
  e.preventDefault();
  const [route, query] = href.slice(2).split('?');
  const file = ROUTE_FILES[route] || (route + '.html');
  location.href = file + (query ? '?' + query : '');
});
window.WSLayoutInit();
window.WSPageInit();

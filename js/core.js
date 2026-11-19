/* MUNDUS — nucleo: registro dei dati e funzioni di servizio.
   I file in data/ chiamano MUNDUS.chapter(), MUNDUS.addImages(), MUNDUS.addPlaces(), MUNDUS.addLinks().
   Si usano script classici (non moduli) perché il sito funzioni anche aprendo index.html con un doppio clic. */
(function () {
  'use strict';
  const M = (window.MUNDUS = window.MUNDUS || {});

  M.site = {};
  M.chapters = [];
  M.byId = {};
  M.images = {};
  M.places = {};
  M.links = [];
  M.ui = {};
  M.views = {};
  M.manifest = [];

  /* ---------- registrazione dei dati ---------- */
  M.setSite = (o) => Object.assign(M.site, o);
  M.chapter = (def) => {
    if (M.byId[def.id]) console.warn('Capitolo duplicato:', def.id);
    M.chapters.push(def);
    M.byId[def.id] = def;
  };
  M.addImages = (o) => Object.entries(o).forEach(([k, v]) => { v.key = k; M.images[k] = v; });
  M.addPlaces = (o) => Object.assign(M.places, o);
  M.addLinks = (arr) => M.links.push(...arr);

  /* ---------- testo ---------- */
  const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  M.esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ESC[c]);
  M.slug = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  /* Mini-formattazione usata nei file di dati:
     **grassetto**  *corsivo*  ==evidenziato==  [testo](#/capitolo/comuni)  [[termine]] o [[testo|termine]] */
  M.fmt = (s) => {
    let t = M.esc(s);
    t = t.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, label, key) =>
      `<button type="button" class="term" data-term="${M.slug(key || label)}" aria-expanded="false">${label}</button>`);
    t = t.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    t = t.replace(/(^|[^*\w])\*(?!\s)([^*]+?)\*(?!\*)/g, '$1<em>$2</em>');
    t = t.replace(/==(.+?)==/g, '<mark>$1</mark>');
    t = t.replace(/\[([^\]]+)\]\((#[^)\s]*|https?:\/\/[^)\s]+)\)/g, (m, a, href) =>
      `<a href="${href}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${a}</a>`);
    return t;
  };
  M.plain = (s) => String(s || '').replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, '$1').replace(/\*\*|==|\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  M.paras = (x) => (Array.isArray(x) ? x : [x]).map((p) => `<p>${M.fmt(p)}</p>`).join('');

  const ROM = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
  M.roman = (n) => { let r = ''; for (const [s, v] of ROM) while (n >= v) { r += s; n -= v; } return r; };

  /* ---------- memoria locale (modalità studio) ---------- */
  M.store = {
    key: 'mundus.v1',
    read() { try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch (e) { return {}; } },
    get(k, d) { const o = this.read(); return k in o ? o[k] : d; },
    set(k, v) { const o = this.read(); o[k] = v; try { localStorage.setItem(this.key, JSON.stringify(o)); } catch (e) { /* memoria piena o disattivata */ } },
  };

  /* ---------- immagini ---------- */
  M.img = (key) => M.images[key] || null;
  /* Copie locali in assets/img/ (create da tools/fetch_images.py): <chiave>.webp e <chiave>-s.webp.
     Se una copia manca, l'errore di caricamento fa passare all'originale su Wikimedia (vedi ui.js).
     Con local: false in data/images.js un'immagine usa sempre l'indirizzo remoto. */
  M.imgRemote = (im, w) => {
    if (!im) return '';
    if (w && im.thumb && im.w > w) return im.thumb.replace(/\/\d+px-/, `/${w}px-`);
    return im.src || im.thumb;
  };
  M.imgSrc = (im, w) => {
    if (!im) return '';
    if (im.local === false || !im.key) return M.imgRemote(im, w);
    return `assets/img/${im.key}${w && w <= 480 ? '-s' : ''}.webp`;
  };
  M.imgFallback = (src) => {
    const m = /assets\/img\/([\w-]+?)(-s)?\.webp/.exec(src || '');
    const im = m && M.images[m[1]];
    return im ? M.imgRemote(im, m[2] ? 330 : 1280) : '';
  };
  /* figura con didascalia, ingrandibile con un clic */
  M.figure = (key, opt = {}) => {
    const im = M.img(key);
    if (!im) return '';
    const cap = opt.cap || im.cap;
    const cls = ['fig', opt.size ? `fig--${opt.size}` : '', opt.cls || ''].join(' ');
    const loading = opt.eager ? 'eager' : 'lazy';
    const maxw = opt.size === 'inset' && im.w ? ` style="max-width:${Math.min(460, im.w)}px"` : '';
    return `<figure class="${cls}"${maxw}>
      <button type="button" class="fig__frame" data-zoom="${M.esc(key)}" aria-label="Ingrandisci l'immagine: ${M.esc(M.plain(cap))}">
        <img src="${M.esc(M.imgSrc(im, opt.w || 1280))}" alt="${M.esc(im.alt || M.plain(cap))}" width="${im.w || ''}" height="${im.h || ''}" loading="${loading}" decoding="async" referrerpolicy="no-referrer">
        <span class="fig__fallback"><span>${M.fmt(cap)}<br><small>Immagine non disponibile senza connessione</small></span></span>
        <span class="fig__zoom" aria-hidden="true">Ingrandisci</span>
      </button>
      ${opt.nocap ? '' : `<figcaption class="fig__cap"><span class="fig__t">${M.fmt(cap)}</span><span class="fig__cr">${M.fmt(im.credit || '')}${im.page ? ` · <a href="${M.esc(im.page)}" target="_blank" rel="noopener">Wikimedia Commons</a>` : ''}</span></figcaption>`}
    </figure>`;
  };

  /* ---------- indici costruiti dai capitoli ---------- */
  M.index = function () {
    const blocks = {}; const glossary = {}; const events = []; const sources = []; const compares = []; const chains = [];
    M.chapters.sort((a, b) => a.n - b.n);
    M.chapters.forEach((ch) => {
      (ch.sections || []).forEach((sec) => (sec.blocks || []).forEach((b) => {
        if (b.id) { blocks[b.id] = Object.assign({ chapter: ch.id, section: sec.id }, b); }
        if (b.t === 'source') sources.push(blocks[b.id]);
        if (b.t === 'compare') compares.push(blocks[b.id]);
        if (b.t === 'chain') chains.push(blocks[b.id]);
      }));
      (ch.glossary || []).forEach((g) => { const id = g.id || M.slug(g.term); glossary[id] = Object.assign({ id, chapter: ch.id }, g); });
      (ch.events || []).forEach((e) => events.push(Object.assign({ chapter: ch.id }, e)));
    });
    events.sort((a, b) => a.y - b.y || (a.m || 0) - (b.m || 0));
    Object.assign(M, { blocks, glossary, events, sources, compares, chains });
    M.eventById = {}; events.forEach((e) => { M.eventById[e.id] = e; });
  };

  /* ---------- caricamento dei capitoli elencati in data/manifest.js ---------- */
  M.loadScripts = function (files, done) {
    let left = files.length; const failed = [];
    if (!left) { done(failed); return; }
    files.forEach((f) => {
      const s = document.createElement('script');
      s.src = f; s.async = false;
      s.onload = s.onerror = (e) => { if (e.type === 'error') failed.push(f); if (--left === 0) done(failed); };
      document.head.appendChild(s);
    });
  };

  /* ---------- piccoli aiuti per il DOM ---------- */
  M.qs = (sel, root = document) => root.querySelector(sel);
  M.qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  M.chapterLabel = (id) => { const c = M.byId[id]; return c ? `${c.roman} · ${c.title}` : ''; };
  M.reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
})();

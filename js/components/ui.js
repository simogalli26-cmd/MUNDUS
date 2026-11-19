/* MUNDUS — interfaccia comune: testata e menu, pannello dei capitoli, glossario a comparsa,
   ingrandimento delle immagini, comparsa allo scorrimento, colophon. */
(function () {
  'use strict';
  const M = window.MUNDUS;
  const { esc, fmt, plain } = M;

  M.ui.shell = function () {
    const head = M.qs('#masthead');
    const panel = M.qs('#chapters-panel');
    const nav = M.qs('.mainnav');
    const toggle = M.qs('.nav-toggle');
    const chBtn = M.qs('.nav-chapters');

    panel.innerHTML = `<div class="chapters-panel__grid">${M.chapters.map((c) => `
      <a class="cp-item" href="#/capitolo/${c.id}" data-ch="${c.id}"><span class="cp-item__n">${c.roman}</span>
        <span class="cp-item__t">${esc(c.title)}</span><span class="cp-item__k">${esc(c.kicker)}</span><span class="cp-item__p">${esc(c.period)}</span></a>`).join('')}</div>
      <div class="chapters-panel__foot"><a class="btn btn--sm btn--ghost" href="#/cronologia">Cronologia</a><a class="btn btn--sm btn--ghost" href="#/atlante">Atlante</a><a class="btn btn--sm btn--ghost" href="#/nessi">Nessi</a><a class="btn btn--sm btn--ghost" href="#/studio">Modalità studio</a></div>`;

    const setPanel = (open) => { panel.hidden = !open; chBtn.setAttribute('aria-expanded', String(open)); };
    chBtn.addEventListener('click', () => setPanel(panel.hidden));
    panel.addEventListener('click', (e) => { if (e.target.closest('a')) { setPanel(false); setNav(false); } });
    const setNav = (open) => { nav.classList.toggle('is-open', open); toggle.setAttribute('aria-expanded', String(open)); };
    toggle.addEventListener('click', () => setNav(!nav.classList.contains('is-open')));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setNav(false); });
    document.addEventListener('click', (e) => { if (!panel.hidden && !e.target.closest('#chapters-panel, .nav-chapters')) setPanel(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { setPanel(false); setNav(false); M.ui.closeTerm(); M.ui.closeLightbox(); }
      if ((e.key === 'p' || e.key === 'P') && !e.ctrlKey && !e.metaKey && !e.altKey && !M.present.isOpen() && !e.target.closest('input, textarea')) M.present.open(M.ui.currentChapter);
    });
    M.qs('.btn-present').addEventListener('click', () => M.present.open(M.ui.currentChapter));

    const onScroll = () => {
      head.classList.toggle('is-top', window.scrollY < 40 && document.body.dataset.view === 'home');
      const bar = M.qs('.readbar');
      if (document.body.dataset.view === 'chapter') {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${h > 0 ? Math.min(1, window.scrollY / h) : 0})`;
      } else bar.style.transform = 'scaleX(0)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    M.ui.onScroll = onScroll;

    M.ui.bindTerms();
    M.ui.bindLightbox();
    M.ui.colophon();
  };

  M.ui.setActiveNav = function (view, chId) {
    M.qsa('.mainnav [data-nav]').forEach((a) => a.classList.toggle('is-active', a.dataset.nav === view));
    M.qs('.nav-chapters').classList.toggle('is-active', view === 'chapter');
    M.qsa('.cp-item').forEach((a) => a.classList.toggle('is-active', a.dataset.ch === chId));
  };

  /* ---------- glossario a comparsa ---------- */
  let termBtn = null, hoverTimer = null;
  M.ui.closeTerm = () => { const pop = M.qs('#term-pop'); pop.hidden = true; if (termBtn) termBtn.setAttribute('aria-expanded', 'false'); termBtn = null; };
  function showTerm(btn) {
    const g = M.glossary[btn.dataset.term]; if (!g) return;
    const pop = M.qs('#term-pop');
    if (termBtn && termBtn !== btn) termBtn.setAttribute('aria-expanded', 'false');
    termBtn = btn; btn.setAttribute('aria-expanded', 'true');
    const ch = M.byId[g.chapter];
    pop.innerHTML = `<span class="term-pop__k">${esc(g.term)}</span><p>${fmt(g.def)}</p>${ch ? `<a href="#/studio/${ch.id}">Glossario · Capitolo ${ch.roman}</a>` : ''}`;
    pop.hidden = false;
    const r = btn.getBoundingClientRect(); const pw = pop.offsetWidth;
    let left = r.left + window.scrollX + r.width / 2 - pw / 2;
    left = Math.max(12 + window.scrollX, Math.min(left, window.scrollX + document.documentElement.clientWidth - pw - 12));
    let top = r.bottom + window.scrollY + 10;
    if (r.bottom + pop.offsetHeight + 20 > window.innerHeight) top = r.top + window.scrollY - pop.offsetHeight - 10;
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
  }
  M.ui.bindTerms = function () {
    document.addEventListener('click', (e) => {
      const b = e.target.closest('.term');
      if (b) { e.preventDefault(); if (termBtn === b) M.ui.closeTerm(); else showTerm(b); return; }
      if (!e.target.closest('#term-pop')) M.ui.closeTerm();
    });
    document.addEventListener('mouseover', (e) => {
      const b = e.target.closest && e.target.closest('.term'); if (!b || termBtn === b) return;
      clearTimeout(hoverTimer); hoverTimer = setTimeout(() => showTerm(b), 220);
    });
    document.addEventListener('mouseout', (e) => { if (e.target.closest && e.target.closest('.term')) clearTimeout(hoverTimer); });
    document.addEventListener('focusin', (e) => { const b = e.target.closest && e.target.closest('.term'); if (b && termBtn !== b) showTerm(b); });
  };

  /* ---------- ingrandimento immagini ---------- */
  M.ui.closeLightbox = () => { const lb = M.qs('#lightbox'); if (!lb.hidden) { lb.hidden = true; lb.innerHTML = ''; document.documentElement.style.overflow = ''; } };
  M.ui.bindLightbox = function () {
    document.addEventListener('click', (e) => {
      const f = e.target.closest('[data-zoom]');
      if (f && !f.classList.contains('is-broken')) {
        const im = M.img(f.dataset.zoom); if (!im) return;
        const lb = M.qs('#lightbox');
        lb.innerHTML = `<button type="button" class="btn btn--ghost lightbox__close">Chiudi</button>
          <figure><img src="${esc(M.imgSrc(im, 1920) || M.imgSrc(im))}" alt="${esc(plain(im.cap))}" referrerpolicy="no-referrer"><figcaption>${fmt(im.cap)}<small>${fmt(im.credit || '')}</small></figcaption></figure>`;
        lb.hidden = false; document.documentElement.style.overflow = 'hidden';
        M.qs('.lightbox__close', lb).focus();
        return;
      }
      if (e.target.closest('#lightbox') && (e.target.closest('.lightbox__close') || !e.target.closest('img'))) M.ui.closeLightbox();
    });
    /* immagine non caricata (offline o file rimosso): mostra un riquadro con la didascalia */
    document.addEventListener('error', (e) => {
      const t = e.target; if (t.tagName !== 'IMG') return;
      /* copia locale mancante: si prova una volta l'originale su Wikimedia Commons */
      if (!t.dataset.fallback) {
        const remote = M.imgFallback(t.getAttribute('src'));
        if (remote) { t.dataset.fallback = '1'; t.src = remote; return; }
      }
      const fr = t.closest('.fig__frame'); if (fr) fr.classList.add('is-broken');
      const th = t.closest('.cmp__thumb, .card__img'); if (th) t.style.visibility = 'hidden';
    }, true);
  };

  /* ---------- comparsa allo scorrimento ---------- */
  let io = null;
  M.ui.reveal = function (root) {
    if (io) io.disconnect();
    if (!('IntersectionObserver' in window) || M.reduced()) { M.qsa('.reveal', root).forEach((n) => n.classList.add('is-in')); return; }
    io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    M.qsa('.reveal', root).forEach((n) => io.observe(n));
  };

  /* ---------- colophon ---------- */
  M.ui.colophon = function () {
    const s = M.site;
    M.qs('#colophon').innerHTML = `<div class="wrap">
      <div class="colophon__grid">
        <div><div class="colophon__brand">MUNDUS</div><p>${esc(s.subtitle)}. Un atlante storico interattivo per lo studio della storia medievale${s.author ? `, a cura di ${esc(s.author)}` : ''}.</p><p>${esc(s.classe)} · ${esc(s.anno)}</p></div>
        <div><h4>Capitoli</h4><ul>${M.chapters.map((c) => `<li><a href="#/capitolo/${c.id}">${c.roman} · ${esc(c.title)}</a></li>`).join('')}</ul></div>
        <div><h4>Strumenti</h4><ul><li><a href="#/cronologia">Cronologia</a></li><li><a href="#/atlante">Atlante</a></li><li><a href="#/nessi">Nessi causali</a></li><li><a href="#/confronti">Confronti</a></li><li><a href="#/fonti">Fonti e documenti</a></li><li><a href="#/studio">Modalità studio</a></li><li><a href="#/crediti">Fonti, bibliografia e crediti</a></li></ul></div>
      </div>
      <div class="colophon__base"><span>Immagini da Wikimedia Commons, con autori e licenze nella pagina dei crediti.</span><span><span class="kbd">P</span> presentazione</span></div>
    </div>`;
  };
})();

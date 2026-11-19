/* MUNDUS — avvio e navigazione (router basato sull'hash: funziona anche senza server). */
(function () {
  'use strict';
  const M = window.MUNDUS;
  const main = document.getElementById('view');
  let current = null;

  function parse() { return location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent); }

  function resolve(parts) {
    const [a, b, c] = parts;
    switch (a) {
      case undefined: case '': return M.views.home();
      case 'capitolo': return M.views.chapter(b, c);
      case 'cronologia': return M.views.timeline(b);
      case 'atlante': return M.views.atlas(b);
      case 'nessi': return M.views.nessi();
      case 'confronti': return M.views.compare(b);
      case 'fonti': return M.views.sources(b);
      case 'studio': return M.views.study(b);
      case 'crediti': return M.views.credits();
      case 'presenta': setTimeout(() => M.present.open(b), 50); return M.views.home();
      default: return M.views.notFound();
    }
  }

  function scrollToId(id) {
    const el = id && document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: M.reduced() ? 'auto' : 'smooth', block: 'start' }); return true; }
    return false;
  }

  function route() {
    const parts = parse();
    /* stesso capitolo, cambia solo la sezione: si scorre senza ridisegnare */
    if (current && current.view === 'chapter' && parts[0] === 'capitolo' && parts[1] === current.chapter) {
      if (parts[2]) scrollToId(`sec-${parts[2]}`); else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const v = resolve(parts);
    current = v;
    document.title = v.title;
    document.body.dataset.view = v.view;
    M.ui.currentChapter = v.chapter || null;
    M.ui.setActiveNav(v.view, v.chapter);
    M.ui.closeTerm(); M.ui.closeLightbox();
    main.innerHTML = `<div class="view-root">${v.html}</div>`;
    const root = main.firstElementChild;
    main.classList.remove('is-entering'); void main.offsetWidth; main.classList.add('is-entering');
    if (v.mount) v.mount(root);
    M.ui.reveal(root);
    window.scrollTo({ top: 0, behavior: 'instant' });
    const target = v.section ? `sec-${v.section}` : v.target;
    if (target) setTimeout(() => scrollToId(target), 120);
    main.focus({ preventScroll: true });
    M.ui.onScroll();
  }

  function boot(failed) {
    M.index();
    if (failed.length) console.warn('File di dati non caricati:', failed);
    M.ui.shell();
    M.ui.bindComponents(main);
    window.addEventListener('hashchange', route);
    /* un clic su un collegamento uguale all'indirizzo attuale (es. la stessa sezione) deve comunque funzionare */
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#/"]');
      if (a && a.getAttribute('href') === location.hash) { e.preventDefault(); route(); }
    });
    route();
    document.documentElement.classList.add('is-ready');
  }

  M.loadScripts(M.manifest, boot);
})();

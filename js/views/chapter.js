/* MUNDUS — pagina di un capitolo: apertura, domanda guida, indice laterale, sezioni, cronologia, navigazione. */
(function () {
  'use strict';
  const M = window.MUNDUS;
  const { esc, fmt } = M;

  M.views.chapter = function (id, sectionId) {
    const ch = M.byId[id];
    if (!ch) return M.views.notFound();
    const i = M.chapters.indexOf(ch);
    const prev = M.chapters[i - 1], next = M.chapters[i + 1];
    const evs = M.events.filter((e) => e.chapter === ch.id);
    const places = [...new Set(evs.map((e) => e.place).filter((p) => M.places[p]))];

    const html = `
      <header class="ch-hero theme-dark">
        <div class="ch-hero__num" aria-hidden="true">${ch.roman}</div>
        <div class="wrap ch-hero__grid">
          <div class="ch-hero__text">
            <span class="eyebrow">Capitolo ${ch.roman} · ${esc(ch.axis)}</span>
            <h1>${esc(ch.title)}</h1>
            <div class="ch-hero__kicker">${esc(ch.kicker)}</div>
            <div class="ch-hero__meta"><span><b>Periodo</b>${esc(ch.period)}</span><span><b>Eventi</b>${evs.length}</span><span><b>Luoghi</b>${places.length}</span></div>
            <p class="ch-hero__lead">${fmt(ch.lead)}</p>
            <div class="ch-hero__actions">
              <button type="button" class="btn btn--solid" data-act="present">Presenta il capitolo</button>
              <a class="btn btn--ghost" href="#/studio/${ch.id}">Ripassa</a>
            </div>
          </div>
          <div class="ch-hero__fig">${M.figure(ch.cover, { eager: true, cls: 'fig--hero' })}</div>
        </div>
      </header>
      <section class="guide-q theme-paper"><div class="wrap guide-q__inner"><span class="guide-q__label">Domanda guida</span><p class="guide-q__text">${fmt(ch.question)}</p></div></section>
      <div class="theme-paper">
        <div class="wrap ch-body">
          <nav class="toc" aria-label="Indice del capitolo">
            <div class="toc__label">In questo capitolo</div>
            <ol>${ch.sections.map((s, k) => `<li><a href="#/capitolo/${ch.id}/${s.id}" data-sec="${s.id}"><span>${k + 1}</span>${esc(s.title)}</a></li>`).join('')}
              <li><a href="#/capitolo/${ch.id}/cronologia" data-sec="cronologia"><span>·</span>Cronologia</a></li></ol>
            <div class="toc__extra">
              <a href="#/cronologia/${(evs.find((e) => e.major) || evs[0] || {}).id || ''}">Sulla linea del tempo →</a>
              <a href="#/atlante/${places[0] || ''}">Sull'atlante →</a>
              <a href="#/studio/${ch.id}">Domande di ripasso →</a>
            </div>
          </nav>
          <article class="ch-main prose">
            ${ch.sections.map((s, k) => `
              <section class="ch-sec" id="sec-${s.id}" data-sec="${s.id}">
                <header class="ch-sec__head"><span class="ch-sec__n">${ch.roman}.${k + 1}</span><h2>${esc(s.title)}</h2></header>
                ${s.blocks.map(M.ui.block).join('')}
              </section>`).join('')}
            <section class="ch-sec" id="sec-cronologia" data-sec="cronologia">
              <header class="ch-sec__head"><span class="ch-sec__n">${ch.roman} · Cronologia</span><h2>Le date del capitolo</h2></header>
              <ol class="ch-events">${evs.map((e) => `<li><a href="#/cronologia/${e.id}"><span class="ch-events__y">${e.y}</span><span><span class="ch-events__t">${esc(e.title)}</span><span class="ch-events__d">${esc(e.date)}${M.places[e.place] ? ` · ${esc(M.places[e.place].name)}` : ''}</span></span><span class="ch-events__go">Linea del tempo</span></a></li>`).join('')}</ol>
            </section>
          </article>
        </div>
      </div>
      <nav class="ch-nav" aria-label="Capitoli vicini">
        ${prev ? `<a href="#/capitolo/${prev.id}"><span class="ch-nav__k">← Capitolo ${prev.roman}</span><span class="ch-nav__t">${esc(prev.title)}</span></a>` : `<a href="#/"><span class="ch-nav__k">← Inizio</span><span class="ch-nav__t">MUNDUS</span></a>`}
        ${next ? `<a href="#/capitolo/${next.id}"><span class="ch-nav__k">Capitolo ${next.roman} →</span><span class="ch-nav__t">${esc(next.title)}</span></a>` : `<a href="#/studio"><span class="ch-nav__k">Ripasso →</span><span class="ch-nav__t">Modalità studio</span></a>`}
      </nav>`;

    return {
      title: `${ch.roman}. ${ch.title} — MUNDUS`, view: 'chapter', chapter: ch.id, html, section: sectionId,
      mount(root) {
        M.qs('[data-act="present"]', root).addEventListener('click', () => M.present.open(ch.id));
        /* indice laterale: evidenzia la sezione visibile */
        const links = M.qsa('.toc a[data-sec]', root);
        if ('IntersectionObserver' in window) {
          const spy = new IntersectionObserver((entries) => {
            entries.forEach((en) => { if (en.isIntersecting) links.forEach((a) => a.classList.toggle('is-current', a.dataset.sec === en.target.dataset.sec)); });
          }, { rootMargin: '-30% 0px -60% 0px' });
          M.qsa('.ch-sec', root).forEach((s) => spy.observe(s));
        }
      },
    };
  };
})();

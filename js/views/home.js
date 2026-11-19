/* MUNDUS — home: copertina, percorso, capitoli, fili rossi, strumenti. */
(function () {
  'use strict';
  const M = window.MUNDUS;
  const { esc, fmt, plain } = M;

  M.views.home = function () {
    const s = M.site;
    const map = M.img('mappamundi');
    const ribbon = (s.ribbon || []).map((id) => M.eventById[id]).filter(Boolean);
    const threads = (s.threads || []).map((id) => M.blocks[id]).filter(Boolean);
    const html = `
      <section class="hero theme-dark" aria-labelledby="hero-title">
        <div class="hero__map" aria-hidden="true"><img src="${esc(M.imgSrc(map, 1280))}" alt="" fetchpriority="high" referrerpolicy="no-referrer"></div>
        <div class="hero__inner">
          <span class="eyebrow hero__kicker">Atlante storico interattivo · 910 – 1226</span>
          <h1 class="hero__title" id="hero-title">MUNDUS</h1>
          <p class="hero__sub">${esc(s.subtitle)}</p>
          <p class="hero__tag">${esc(s.tagline)} Otto capitoli, una linea del tempo, un atlante, i documenti originali e i nessi che legano gli eventi tra loro.</p>
          <div class="hero__cta">
            <a class="btn btn--solid" href="#/capitolo/${M.chapters[0].id}">Entra nel percorso</a>
            <button type="button" class="btn" data-act="present">Modalità presentazione</button>
            <a class="btn btn--ghost" href="#/studio">Modalità studio</a>
          </div>
          <div class="hero__rule"></div>
        </div>
        <p class="hero__cap">${fmt(map.cap)}</p>
        <nav class="ribbon" aria-label="Date fondamentali"><div class="ribbon__track">
          ${ribbon.map((e) => `<a href="#/cronologia/${e.id}" title="${esc(e.title)}"><span class="ribbon__y">${e.y}</span><span class="ribbon__t">${esc(e.title)}</span></a>`).join('')}
        </div></nav>
      </section>

      <section class="section theme-dark" aria-labelledby="percorso">
        <div class="wrap">
          <div class="intro">
            <div class="reveal">
              <span class="eyebrow">Il percorso</span>
              <h2 class="sr-only" id="percorso">Il percorso</h2>
              <p class="intro__lead" style="margin-top:22px">Tra il X e il XIII secolo l\'Europa cambia due volte: cambia <em>chi comanda</em>, perché papa e imperatore si contendono il primato; e cambia <em>come si vive</em>, perché tornano le città, il denaro, le scuole e nuove domande di fede.</p>
            </div>
            <div class="intro__body reveal reveal-d1">
              <p>I capitoli di questo atlante non sono riassunti separati. Ognuno risponde a una domanda e si collega agli altri: la lotta per le investiture indebolisce i vescovi e lascia spazio ai Comuni; la crescita economica produce i mercanti, e dai mercanti nascono sia le università sia i movimenti di povertà; il primato affermato da Gregorio VII diventa con Innocenzo III un potere esercitato su tutta la cristianità.</p>
              <p>Per ogni argomento ho cercato di spiegare non solo che cosa è successo, ma <strong>perché</strong> e con quali <strong>conseguenze</strong>, appoggiandomi quando possibile alle fonti dell\'epoca.</p>
            </div>
          </div>
          <div class="axes reveal">${s.axes.map((a) => `
            <div class="axis"><div class="axis__k">${esc(a.k)}</div><p>${esc(a.x)}</p>
              <div class="axis__ch">${a.ch.map((id) => M.byId[id]).filter(Boolean).map((c) => `<a class="chip" href="#/capitolo/${c.id}"><span class="chip__n">${c.roman}</span> ${esc(c.title)}</a>`).join('')}</div></div>`).join('')}
          </div>
        </div>
      </section>

      <section class="section section--tight theme-dark" aria-labelledby="capitoli">
        <div class="wrap">
          <div class="section__head reveal"><div><span class="eyebrow">Indice</span><h2 id="capitoli">Otto capitoli</h2></div><p>Ogni capitolo si apre con una domanda guida e si chiude con la cronologia, i luoghi e le domande di ripasso.</p></div>
          <div class="cards">${M.chapters.map((c, i) => {
            const im = M.img(c.cover);
            return `<a class="card reveal reveal-d${i % 4}" href="#/capitolo/${c.id}">
              <span class="card__img">${im ? `<img src="${esc(M.imgSrc(im, 960))}" alt="" loading="lazy" referrerpolicy="no-referrer">` : ''}</span>
              <span class="card__body"><span class="card__n">${c.roman}</span><span class="card__t">${esc(c.title)}</span><span class="card__k">${esc(c.hook)}</span>
              <span class="card__p"><span>${esc(c.period)}</span><span>Apri →</span></span></span></a>`;
          }).join('')}</div>
        </div>
      </section>

      <section class="section theme-dark" aria-labelledby="fili">
        <div class="wrap">
          <div class="section__head reveal"><div><span class="eyebrow">Fili rossi</span><h2 id="fili">Tre catene di cause ed effetti</h2></div><p>Le tre sequenze che tengono insieme il percorso. Ogni anello si può aprire e spiegare: perché da un fatto ne deriva un altro.</p></div>
          <div class="threads">${threads.map((c) => `
            <a class="thread reveal" href="#/capitolo/${c.chapter}/${c.section}"><span class="thread__k">${fmt(c.title)}</span>
              <span class="thread__nodes">${c.nodes.map((n) => `<span>${esc(plain(n.k))}</span>`).join('<i>→</i>')}</span><span class="thread__go">Apri il nesso</span></a>`).join('')}
          </div>
          <p style="margin-top:26px"><a class="btn btn--ghost" href="#/nessi">Tutti i collegamenti tra i capitoli</a></p>
        </div>
      </section>

      <section class="section section--tight theme-dark" aria-labelledby="strumenti">
        <div class="wrap">
          <div class="section__head reveal"><div><span class="eyebrow">Strumenti</span><h2 id="strumenti">Esplorare, confrontare, ripassare</h2></div><p>Gli stessi dati, guardati da punti di vista diversi.</p></div>
          <div class="tools reveal">
            <a class="tool" href="#/cronologia"><span class="tool__k">${M.events.length} eventi</span><span class="tool__t">Cronologia</span><p>Una linea del tempo proporzionale dal 910 al 1434, filtrabile per capitolo.</p><span class="tool__go">Apri →</span></a>
            <a class="tool" href="#/atlante"><span class="tool__k">Mappa interattiva</span><span class="tool__t">Atlante</span><p>I luoghi degli eventi su una carta dell\'Europa e del Mediterraneo, da Bruges a Damietta.</p><span class="tool__go">Apri →</span></a>
            <a class="tool" href="#/nessi"><span class="tool__k">${M.links.length} collegamenti</span><span class="tool__t">Nessi</span><p>La rete che lega i capitoli: cause, continuità e contrasti.</p><span class="tool__go">Apri →</span></a>
            <a class="tool" href="#/confronti"><span class="tool__k">${M.compares.length} confronti</span><span class="tool__t">Confronti</span><p>Ottone e Gregorio, Cluny e Cîteaux, consoli e podestà, Valdo e Francesco.</p><span class="tool__go">Apri →</span></a>
            <a class="tool" href="#/fonti"><span class="tool__k">${M.sources.length} documenti</span><span class="tool__t">Fonti</span><p>Estratti dal Dictatus Papae, dal Concordato di Worms, dalla Pace di Costanza, da Francesco e da Dante, con il testo originale.</p><span class="tool__go">Apri →</span></a>
            <a class="tool" href="#/studio"><span class="tool__k">Ripasso</span><span class="tool__t">Modalità studio</span><p>Domande da interrogazione, verifiche lampo, flashcard e trappole da evitare.</p><span class="tool__go">Apri →</span></a>
          </div>
        </div>
      </section>`;
    return {
      title: `${s.title} — ${s.subtitle}`, view: 'home', theme: 'dark', html,
      mount(root) { M.qs('[data-act="present"]', root).addEventListener('click', () => M.present.open()); },
    };
  };
})();

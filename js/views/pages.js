/* MUNDUS — pagine strumento: cronologia, atlante, nessi, confronti, fonti, studio, crediti. */
(function () {
  'use strict';
  const M = window.MUNDUS;
  const { esc, fmt } = M;

  const head = (eyebrow, title, text, extra = '') => `
    <header class="pagehead"><div class="wrap pagehead__grid">
      <div><span class="eyebrow">${esc(eyebrow)}</span><h1>${esc(title)}</h1></div>
      <div><p>${fmt(text)}</p>${extra}</div>
    </div></header>`;

  M.views.timeline = function (evId) {
    return {
      title: 'Cronologia — MUNDUS', view: 'cronologia', theme: 'dark',
      html: `<div class="page theme-dark">${head('Cronologia', 'La linea del tempo', `${M.events.length} eventi dal 910 al 1434, in scala: la distanza tra due date è proporzionale agli anni che le separano. Ogni capitolo occupa una fascia; gli eventi fondamentali hanno il punto pieno.`)}
        <div class="wrap pagebody"><div id="tl-host"></div></div></div>`,
      mount(root) { M.ui.timeline(M.qs('#tl-host', root), { select: evId }); },
    };
  };

  M.views.atlas = function (placeId) {
    return {
      title: 'Atlante — MUNDUS', view: 'atlante', theme: 'dark',
      html: `<div class="page theme-dark">${head('Atlante', 'I luoghi della storia', 'Dove sono accaduti gli eventi del percorso. Trascina per spostarti, usa la rotella o i pulsanti per avvicinarti, scegli un\'inquadratura o filtra per capitolo.')}
        <div class="wrap pagebody"><div id="atlas-host"></div></div></div>`,
      mount(root) { M.ui.atlas(M.qs('#atlas-host', root), { place: placeId }); },
    };
  };

  M.views.nessi = function () {
    return {
      title: 'Nessi — MUNDUS', view: 'nessi', theme: 'dark',
      html: `<div class="page theme-dark">${head('Nessi', 'Come si legano i capitoli', 'La storia non procede per argomenti separati. Qui ci sono i collegamenti tra un capitolo e l\'altro e, più sotto, le catene di cause ed effetti di tutto il percorso.')}
        <div class="wrap pagebody"><div id="net-host"></div>
          <div class="section__head" style="margin-top:90px"><div><span class="eyebrow">Catene causali</span><h2>Tutti i nessi causa → effetto</h2></div><p>Seleziona un anello per leggere che cosa accade e perché porta al successivo.</p></div>
          <div class="stack">${M.chains.map((c) => `<div class="stack-head"><h2>${esc(M.byId[c.chapter].roman)} · ${esc(M.byId[c.chapter].title)}</h2><a href="#/capitolo/${c.chapter}/${c.section}">Nel capitolo →</a></div>${M.ui.chainHTML(c)}`).join('')}</div>
        </div></div>`,
      mount(root) { M.ui.network(M.qs('#net-host', root)); },
    };
  };

  M.views.compare = function (id) {
    return {
      title: 'Confronti — MUNDUS', view: 'confronti', theme: 'paper', target: id ? `cmp-${id}` : null,
      html: `<div class="page theme-paper">${head('Confronti', 'Mettere a confronto', 'Personaggi, istituzioni e movimenti messi uno accanto all\'altro, aspetto per aspetto. Si può leggere un aspetto alla volta o tutta la tabella.')}
        <div class="wrap pagebody"><div class="stack">${M.compares.map((c) => `<div id="cmp-${c.id}"><div class="stack-head"><h2>${esc(M.byId[c.chapter].roman)} · ${esc(M.byId[c.chapter].title)}</h2><a href="#/capitolo/${c.chapter}/${c.section}">Nel capitolo →</a></div>${M.ui.compareHTML(c)}</div>`).join('')}</div></div></div>`,
    };
  };

  M.views.sources = function (id) {
    return {
      title: 'Fonti — MUNDUS', view: 'fonti', theme: 'paper', target: id ? `doc-${id}` : null,
      html: `<div class="page theme-paper">${head('Fonti', 'I documenti', `${M.sources.length} estratti da fonti dell\'epoca, con il testo originale e una nota sul perché sono importanti. ${M.site.translationNote}`)}
        <div class="wrap pagebody"><div class="stack">${M.sources.map((d) => `<div id="doc-${d.id}"><div class="stack-head"><h2>${esc(M.byId[d.chapter].roman)} · ${esc(M.byId[d.chapter].title)}</h2><a href="#/capitolo/${d.chapter}/${d.section}">Nel capitolo →</a></div>${M.ui.docHTML(d)}</div>`).join('')}</div></div></div>`,
    };
  };

  /* ---------- modalità studio ---------- */
  M.views.study = function (chId) {
    const ch = M.byId[chId] || M.byId[M.store.get('lastStudy')] || M.chapters[0];
    M.store.set('lastStudy', ch.id);
    const marks = M.store.get('marks', {});
    const qs = ch.study.questions; const quiz = ch.study.quiz;
    const traps = []; ch.sections.forEach((s) => s.blocks.forEach((b) => { if (b.t === 'precise') traps.push(...b.items); }));
    const gl = ch.glossary || [];
    const progress = (c) => { const n = c.study.questions.length; const ok = c.study.questions.filter((q, i) => marks[`${c.id}:${i}`] === 'ok').length; return [ok, n]; };
    const [ok, n] = progress(ch);
    const html = `<div class="page theme-paper">${head('Modalità studio', 'Ripasso per l\'interrogazione', 'Domande aperte con la traccia della risposta, una verifica lampo con correzione immediata, le flashcard dei termini e le confusioni da evitare. I segni «La so» e «Da ripassare» restano salvati su questo computer.')}
      <div class="wrap pagebody">
        <div class="study__bar">
          <div class="filterbar" role="group" aria-label="Scegli il capitolo">${M.chapters.map((c) => { const [o, t] = progress(c); return `<a class="chip${c.id === ch.id ? ' is-on' : ''}" href="#/studio/${c.id}" title="${esc(c.title)}: ${o}/${t}"><span class="chip__n">${c.roman}</span> ${esc(c.title)}</a>`; }).join('')}</div>
          <div class="study__progress"><span>Domande sapute: <b class="study__ok">${ok}</b> / ${n}</span><span class="study__meter"><i style="width:${n ? (ok / n) * 100 : 0}%"></i></span><button type="button" class="btn btn--sm btn--ghost" data-act="reset">Azzera</button></div>
        </div>
        <div class="study__grid">
          <div class="study__col">
            <span class="eyebrow">Capitolo ${ch.roman} · ${esc(ch.title)}</span>
            <h3>Domande da interrogazione</h3>
            ${qs.map((q, i) => { const m = marks[`${ch.id}:${i}`]; return `
              <div class="qa${m === 'ok' ? ' is-ok' : m === 'rev' ? ' is-rev' : ''}" data-q="${ch.id}:${i}">
                <div class="qa__q"><span class="qa__n">${i + 1}</span><p>${fmt(q.q)}</p></div>
                <div class="qa__a" hidden><ul class="list">${q.a.map((x) => `<li>${fmt(x)}</li>`).join('')}</ul></div>
                <div class="qa__row"><button type="button" class="chip" data-act="show" aria-expanded="false">Mostra la traccia</button>
                  <button type="button" class="chip qa__mark" data-m="ok" aria-pressed="${m === 'ok'}">La so</button>
                  <button type="button" class="chip qa__mark" data-m="rev" aria-pressed="${m === 'rev'}">Da ripassare</button></div>
              </div>`; }).join('')}
            <div class="study__sec" style="margin-top:56px"><span class="eyebrow">Attenzione</span><h3 style="font-size:var(--t-h3);margin:12px 0 20px">Da non confondere</h3>
              <ul class="traps">${traps.map((x) => `<li>${fmt(x)}</li>`).join('') || '<li>Nessuna nota per questo capitolo.</li>'}</ul></div>
          </div>
          <div class="study__col">
            <div class="study__sec quiz" data-quiz="${ch.id}"><span class="eyebrow">Verifica lampo</span><h3>${quiz.length} domande a risposta multipla</h3>
              ${quiz.map((q, i) => `<div class="quiz__item" data-i="${i}"><p class="quiz__q">${i + 1}. ${fmt(q.q)}</p>
                <div class="quiz__opts">${q.o.map((o, j) => `<button type="button" data-o="${j}"><span>${'ABCD'[j]}</span>${fmt(o)}</button>`).join('')}</div>
                <p class="quiz__why" hidden></p></div>`).join('')}
              <p class="quiz__score" aria-live="polite"></p>
              <button type="button" class="btn btn--sm btn--ghost" data-act="quiz-reset">Rifai la verifica</button>
            </div>
            <div class="study__sec"><span class="eyebrow">Glossario</span><h3>Flashcard: girale con un clic</h3>
              <div class="flash">${gl.map((g) => `<button type="button" class="flash__card" aria-label="${esc(g.term)}: mostra la definizione"><span class="flash__inner"><span class="flash__face flash__front">${esc(g.term)}<small>Capitolo ${ch.roman}</small></span><span class="flash__face flash__back">${fmt(g.def)}</span></span></button>`).join('')}</div>
            </div>
          </div>
        </div>
        <p style="margin-top:20px"><a class="btn" href="#/capitolo/${ch.id}">Rileggi il capitolo ${ch.roman}</a></p>
      </div></div>`;
    return {
      title: `Studio · ${ch.roman}. ${ch.title} — MUNDUS`, view: 'studio', theme: 'paper', chapter: ch.id, html,
      mount(root) {
        const score = M.qs('.quiz__score', root);
        let answered = 0, right = 0;
        const updateProgress = () => {
          const mk = M.store.get('marks', {}); const o = qs.filter((q, i) => mk[`${ch.id}:${i}`] === 'ok').length;
          M.qs('.study__ok', root).textContent = o; M.qs('.study__meter i', root).style.width = `${(o / qs.length) * 100}%`;
        };
        root.addEventListener('click', (e) => {
          const qa = e.target.closest('.qa');
          if (qa) {
            const show = e.target.closest('[data-act="show"]');
            if (show) { const a = M.qs('.qa__a', qa); a.hidden = !a.hidden; show.setAttribute('aria-expanded', String(!a.hidden)); show.textContent = a.hidden ? 'Mostra la traccia' : 'Nascondi la traccia'; return; }
            const mk = e.target.closest('.qa__mark');
            if (mk) {
              const all = M.store.get('marks', {}); const key = qa.dataset.q; const v = mk.dataset.m;
              all[key] = all[key] === v ? undefined : v; if (!all[key]) delete all[key]; M.store.set('marks', all);
              M.qsa('.qa__mark', qa).forEach((b) => b.setAttribute('aria-pressed', String(all[key] === b.dataset.m)));
              qa.classList.toggle('is-ok', all[key] === 'ok'); qa.classList.toggle('is-rev', all[key] === 'rev');
              updateProgress();
            }
            return;
          }
          const opt = e.target.closest('.quiz__opts button');
          if (opt) {
            const item = opt.closest('.quiz__item'); const q = quiz[+item.dataset.i]; const j = +opt.dataset.o;
            M.qsa('button', item).forEach((b) => { b.disabled = true; if (+b.dataset.o === q.ok) b.classList.add('is-right'); });
            if (j !== q.ok) opt.classList.add('is-wrong'); else right++;
            answered++;
            const why = M.qs('.quiz__why', item); why.hidden = false; why.innerHTML = `${j === q.ok ? '<strong>Esatto.</strong> ' : '<strong>Non è così.</strong> '}${fmt(q.why)}`;
            if (answered === quiz.length) score.textContent = `Risultato: ${right} su ${quiz.length}${right === quiz.length ? '. Perfetto.' : '.'}`;
            return;
          }
          if (e.target.closest('[data-act="quiz-reset"]')) {
            answered = 0; right = 0; score.textContent = '';
            M.qsa('.quiz__opts button', root).forEach((b) => { b.disabled = false; b.classList.remove('is-right', 'is-wrong'); });
            M.qsa('.quiz__why', root).forEach((w) => { w.hidden = true; });
            return;
          }
          if (e.target.closest('[data-act="reset"]')) {
            const all = M.store.get('marks', {}); Object.keys(all).forEach((k) => { if (k.startsWith(ch.id + ':')) delete all[k]; }); M.store.set('marks', all);
            M.qsa('.qa', root).forEach((qa2) => { qa2.classList.remove('is-ok', 'is-rev'); M.qsa('.qa__mark', qa2).forEach((b) => b.setAttribute('aria-pressed', 'false')); });
            updateProgress(); return;
          }
          const card = e.target.closest('.flash__card'); if (card) card.classList.toggle('is-flipped');
        });
      },
    };
  };

  /* ---------- crediti ---------- */
  M.views.credits = function () {
    const imgs = Object.entries(M.images);
    return {
      title: 'Fonti e crediti — MUNDUS', view: 'crediti', theme: 'paper',
      html: `<div class="page theme-paper">${head('Crediti', 'Fonti, bibliografia, immagini', 'Da dove vengono testi, traduzioni, dati e immagini di questo atlante.')}
        <div class="wrap pagebody">
          <div class="section__head"><div><span class="eyebrow">Fonti primarie</span><h2 style="color:var(--ink)">Le edizioni dei documenti</h2></div><p>${esc(M.site.translationNote)}</p></div>
          <ul class="biblio">${M.site.primarySources.map((x) => `<li>${fmt(x)}</li>`).join('')}</ul>
          <div class="section__head" style="margin-top:70px"><div><span class="eyebrow">Bibliografia</span><h2 style="color:var(--ink)">Studi consultati</h2></div><p>Opere di riferimento per le interpretazioni citate (per esempio quella di Jacques Le Goff sul Purgatorio).</p></div>
          <ul class="biblio">${M.site.bibliography.map((x) => `<li>${fmt(x)}</li>`).join('')}</ul>
          <div class="section__head" style="margin-top:70px"><div><span class="eyebrow">Immagini</span><h2 style="color:var(--ink)">${imgs.length} immagini da Wikimedia Commons</h2></div><p>Autore, data e licenza come risultano dalla pagina di ciascun file. Le opere in pubblico dominio non hanno restrizioni; per le fotografie con licenza CC BY-SA vanno citati autore e licenza, come qui.</p></div>
          <div style="overflow-x:auto"><table class="credits-table"><thead><tr><th></th><th>Soggetto</th><th>Autore, data, licenza</th><th>File</th></tr></thead><tbody>
            ${imgs.map(([k, im]) => `<tr><td><img src="${esc(M.imgSrc(im, 330))}" alt="" loading="lazy" referrerpolicy="no-referrer"></td><td>${fmt(im.cap)}</td><td>${fmt(im.credit)}</td><td><a href="${esc(im.page)}" target="_blank" rel="noopener">Commons</a></td></tr>`).join('')}
          </tbody></table></div>
          <div class="section__head" style="margin-top:70px"><div><span class="eyebrow">Dati</span><h2 style="color:var(--ink)">Mappa e caratteri</h2></div><p>Coste da Natural Earth tramite il pacchetto <em>world-atlas</em> (pubblico dominio); caratteri Cormorant Garamond, Source Serif 4 e Inter (SIL Open Font License) da Google Fonts.</p></div>
        </div></div>`,
    };
  };

  M.views.notFound = function () {
    return {
      title: 'Pagina non trovata — MUNDUS', view: 'none', theme: 'dark',
      html: `<div class="notfound theme-dark"><span class="eyebrow" style="justify-content:center">Terra incognita</span><h1>Questa pagina non esiste</h1><p style="color:var(--on-dark-2)">Forse il collegamento è sbagliato. Si può ripartire dall'indice.</p><p><a class="btn" href="#/">Torna all'inizio</a></p></div>`,
    };
  };
})();

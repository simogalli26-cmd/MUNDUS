/* MUNDUS — componenti dei capitoli: nessi, confronti, documenti, fasi, lettura guidata
   e la funzione che trasforma ogni blocco dei dati in HTML. Le interazioni usano la delega degli eventi. */
(function () {
  'use strict';
  const M = window.MUNDUS;
  const { esc, fmt, plain, roman } = M;

  /* ---------- nesso causa-effetto ---------- */
  function chainPanel(c, i) {
    const nd = c.nodes[i]; const next = c.nodes[i + 1];
    const right = nd.why && next
      ? `<span class="chain__lbl">Perché porta a: ${esc(plain(next.k))}</span><p>${fmt(nd.why)}</p>`
      : `<span class="chain__lbl">Punto di arrivo</span><p>${fmt(c.end || 'Qui la catena si chiude. Ripercorrila dall\'inizio: ogni passaggio è la causa del successivo.')}</p>`;
    return `<div><span class="chain__lbl">${roman(i + 1)} · ${esc(plain(nd.k))}${nd.y ? ` · ${esc(nd.y)}` : ''}</span><p>${fmt(nd.x)}</p></div><div>${right}</div>`;
  }
  M.ui.chainHTML = (c) => `
    <div class="chain" data-chain="${esc(c.id)}" data-i="0">
      <div class="chain__head"><span class="eyebrow">Nesso causa → effetto</span><h3>${fmt(c.title)}</h3>${c.intro ? `<p class="chain__intro">${fmt(c.intro)}</p>` : ''}</div>
      <ol class="chain__track">${c.nodes.map((nd, i) => `
        <li class="chain__step${i === 0 ? ' is-active' : ''}"><button type="button" class="chain__node" data-i="${i}" aria-pressed="${i === 0}">
          <span class="chain__i">${roman(i + 1)}</span><span class="chain__k">${fmt(nd.k)}</span>${nd.y ? `<span class="chain__y">${esc(nd.y)}</span>` : ''}
        </button></li>`).join('')}
      </ol>
      <div class="chain__panel" aria-live="polite">${chainPanel(c, 0)}</div>
      <div class="chain__ctrl">
        <button type="button" class="btn btn--sm btn--ghost" data-act="prev" disabled>Indietro</button>
        <span class="chain__count">1 / ${c.nodes.length}</span>
        <button type="button" class="btn btn--sm" data-act="next">Avanti</button>
      </div>
    </div>`;
  function chainGo(el, i) {
    const c = M.blocks[el.dataset.chain]; if (!c) return;
    const n = c.nodes.length; i = (i + n) % n;
    el.dataset.i = i;
    M.qsa('.chain__step', el).forEach((s, j) => {
      s.classList.toggle('is-active', j === i); s.classList.toggle('is-past', j < i);
      s.firstElementChild.setAttribute('aria-pressed', j === i);
    });
    const panel = M.qs('.chain__panel', el);
    panel.innerHTML = chainPanel(c, i);
    panel.classList.remove('is-swapping'); void panel.offsetWidth; panel.classList.add('is-swapping');
    M.qs('.chain__count', el).textContent = `${i + 1} / ${n}`;
    M.qs('[data-act="prev"]', el).disabled = i === 0;
    M.qs('[data-act="next"]', el).textContent = i === n - 1 ? 'Ricomincia' : 'Avanti';
    const step = M.qsa('.chain__step', el)[i];
    const track = M.qs('.chain__track', el);
    if (track.scrollWidth > track.clientWidth) track.scrollTo({ left: step.offsetLeft - 20, behavior: M.reduced() ? 'auto' : 'smooth' });
  }

  /* ---------- confronto ---------- */
  const side = (s, k) => {
    const im = s.img ? M.img(s.img) : null;
    return `<div class="cmp__side cmp__side--${k}">${im ? `<span class="cmp__thumb"><img src="${esc(M.imgSrc(im, 330))}" alt="" loading="lazy" referrerpolicy="no-referrer"></span>` : ''}<span class="cmp__name">${esc(s.name)}</span><span class="cmp__sub">${fmt(s.sub || '')}</span></div>`;
  };
  M.ui.compareHTML = (c) => `
    <div class="cmp is-single" data-cmp="${esc(c.id)}">
      <div class="cmp__head"><span class="eyebrow">Confronto</span><h3>${fmt(c.title)}</h3></div>
      <div class="cmp__sides">${side(c.a, 'a')}<div class="cmp__vs" aria-hidden="true">vs</div>${side(c.b, 'b')}</div>
      <div class="cmp__tabs" role="tablist" aria-label="Aspetti del confronto">
        ${c.rows.map((r, i) => `<button type="button" role="tab" aria-selected="${i === 0}" data-i="${i}">${esc(r.k)}</button>`).join('')}
        <button type="button" class="cmp__all" data-act="all" aria-pressed="false">Vedi tutti gli aspetti</button>
      </div>
      <div class="cmp__rows">${c.rows.map((r, i) => `
        <div class="cmp__row${i === 0 ? ' is-shown' : ''}" data-i="${i}" role="tabpanel">
          <div class="cmp__aspect">${esc(r.k)}</div>
          <div class="cmp__cell cmp__cell--a"><span class="sr-only">${esc(c.a.name)}: </span>${fmt(r.a)}</div>
          <div class="cmp__cell cmp__cell--b"><span class="sr-only">${esc(c.b.name)}: </span>${fmt(r.b)}</div>
        </div>`).join('')}
      </div>
      ${c.end ? `<div class="cmp__end"><span class="cmp__lbl">In sintesi</span><p>${fmt(c.end)}</p></div>` : ''}
    </div>`;
  function cmpTab(el, i) {
    el.classList.remove('is-all'); el.classList.add('is-single');
    const all = M.qs('.cmp__all', el); all.setAttribute('aria-pressed', 'false'); all.textContent = 'Vedi tutti gli aspetti';
    M.qsa('[role="tab"]', el).forEach((b) => b.setAttribute('aria-selected', String(+b.dataset.i === i)));
    M.qsa('.cmp__row', el).forEach((r) => r.classList.toggle('is-shown', +r.dataset.i === i));
  }
  function cmpAll(el) {
    const on = !el.classList.contains('is-all');
    const all = M.qs('.cmp__all', el);
    if (on) {
      el.classList.add('is-all'); el.classList.remove('is-single');
      M.qsa('[role="tab"]', el).forEach((b) => b.setAttribute('aria-selected', 'false'));
      all.setAttribute('aria-pressed', 'true'); all.textContent = 'Un aspetto alla volta';
    } else cmpTab(el, 0);
  }

  /* ---------- documento ---------- */
  const numbered = (arr) => arr.map(([n, t, key]) => `<div class="dp${key ? ' is-key' : ''}"><b>${n}</b><span>${fmt(t)}</span></div>`).join('');
  const verses = (v) => v.lines.map((l, i) => {
    const n = v.start + i; const tercet = (n - 1) % 3 === 0;
    return `<div class="doc__verse${tercet && i ? ' is-tercet' : ''}"><span>${tercet ? n : ''}</span><div>${fmt(l)}</div></div>`;
  }).join('');
  M.ui.docHTML = (d) => {
    const hasOrig = !!(d.orig || d.verses);
    const first = d.first || 'it';
    const lab = { it: d.itLabel || 'Traduzione', orig: d.origLabel || 'Latino' };
    const bodyIt = d.numbered ? numbered(d.it) : M.paras(d.it);
    const bodyOrig = d.verses ? verses(d.verses) : (d.numbered ? numbered(d.orig || []) : M.paras(d.orig || []));
    const order = first === 'orig' ? ['orig', 'it'] : ['it', 'orig'];
    return `
    <article class="doc" data-doc="${esc(d.id)}">
      <div class="doc__head"><span class="eyebrow">Documento</span><h3>${fmt(d.title)}</h3><p class="doc__meta">${fmt([d.author, d.date].filter(Boolean).join(' · '))}</p></div>
      ${hasOrig ? `<div class="doc__switch" role="tablist" aria-label="Lingua del testo">${order.map((v, i) => `<button type="button" role="tab" data-v="${v}" aria-selected="${i === 0}">${lab[v]}</button>`).join('')}</div>` : ''}
      <div class="doc__text" data-v="it"${first === 'orig' ? ' hidden' : ''}>${bodyIt}</div>
      ${hasOrig ? `<div class="doc__text" data-v="orig" lang="${d.lang === 'it' ? 'it' : 'la'}"${first === 'orig' ? '' : ' hidden'}>${bodyOrig}</div>` : ''}
      ${d.ref ? `<p class="doc__ref">${fmt(d.ref)}</p>` : ''}
      ${d.note ? `<div class="doc__note"><span class="doc__lbl">Perché conta</span><p>${fmt(d.note)}</p></div>` : ''}
    </article>`;
  };
  function docSwitch(el, v) {
    M.qsa('.doc__switch button', el).forEach((b) => b.setAttribute('aria-selected', String(b.dataset.v === v)));
    M.qsa('.doc__text', el).forEach((t) => { t.hidden = t.dataset.v !== v; });
  }

  /* ---------- fasi ---------- */
  function stagePanel(s, items, i) {
    const nx = items[i + 1];
    return `
      <dl class="stages__facts">
        <div><dt>Chi governa</dt><dd>${fmt(s.who)}</dd></div>
        <div><dt>Organi e strumenti</dt><dd>${fmt(s.organs)}</dd></div>
        <div><dt>Punto di forza</dt><dd>${fmt(s.strength)}</dd></div>
      </dl>
      <div class="stages__crisis">
        <span class="stages__lbl">${nx ? 'Perché entra in crisi' : 'Come va a finire'}</span>
        <p>${fmt(s.crisis)}</p>
        ${nx ? `<div class="stages__out"><span class="stages__lbl">La soluzione</span><p>${fmt(s.out)}</p></div>
        <button type="button" class="btn btn--sm" data-act="next">Passa a: ${esc(nx.name)} →</button>`
        : `<button type="button" class="btn btn--sm" data-act="first">Torna all'inizio</button>`}
      </div>`;
  }
  M.ui.stagesHTML = (b) => `
    <div class="stages" data-stages="${esc(b.id)}">
      <div class="stages__head"><span class="eyebrow">Evoluzione delle istituzioni</span><h3>${fmt(b.title)}</h3>${b.intro ? `<p>${fmt(b.intro)}</p>` : ''}</div>
      <ol class="stages__rail" role="tablist" aria-label="Fasi">${b.items.map((s, i) => `
        <li><button type="button" role="tab" data-i="${i}" aria-selected="${i === 0}"><span class="stages__n">${esc(s.n)}</span><span class="stages__t">${esc(s.name)}</span><span class="stages__p">${esc(s.period)}</span></button></li>`).join('')}
      </ol>
      <div class="stages__panel" role="tabpanel">${stagePanel(b.items[0], b.items, 0)}</div>
    </div>`;
  function stageGo(el, i) {
    const b = M.blocks[el.dataset.stages]; if (!b) return;
    M.qsa('[role="tab"]', el).forEach((t) => t.setAttribute('aria-selected', String(+t.dataset.i === i)));
    const p = M.qs('.stages__panel', el);
    p.innerHTML = stagePanel(b.items[i], b.items, i);
    p.classList.remove('is-swapping'); void p.offsetWidth; p.classList.add('is-swapping');
    el.dataset.i = i;
  }

  /* ---------- lettura guidata (Dante) ---------- */
  function readingPanel(p) {
    return `
      <div class="reading__verses" lang="it">${verses({ start: p.start, lines: p.lines })}</div>
      <div class="reading__comm">
        <span class="doc__lbl">Parafrasi</span><p>${fmt(p.para)}</p>
        <span class="doc__lbl">Il collegamento con la storia</span><p>${fmt(p.note)}</p>
      </div>`;
  }
  M.ui.readingHTML = (b) => `
    <div class="reading" data-reading="${esc(b.id)}">
      <div class="reading__head"><span class="eyebrow">Lettura guidata</span><h3>${fmt(b.title)}</h3></div>
      <div class="reading__tabs" role="tablist" aria-label="Passi del canto">${b.parts.map((p, i) => `<button type="button" role="tab" data-i="${i}" aria-selected="${i === 0}"><b>${roman(i + 1)}</b> ${esc(p.k)}</button>`).join('')}</div>
      <div class="reading__panel" role="tabpanel">${readingPanel(b.parts[0])}</div>
      <p class="doc__ref">${fmt(b.source)}</p>
    </div>`;
  function readingGo(el, i) {
    const b = M.blocks[el.dataset.reading]; if (!b) return;
    M.qsa('[role="tab"]', el).forEach((t) => t.setAttribute('aria-selected', String(+t.dataset.i === i)));
    const p = M.qs('.reading__panel', el);
    p.innerHTML = readingPanel(b.parts[i]);
    p.classList.remove('is-swapping'); void p.offsetWidth; p.classList.add('is-swapping');
  }

  /* ---------- da blocco di dati a HTML ---------- */
  const row = (main, sideNote, wide) => `<div class="row${wide ? ' row--wide' : ''}"><div class="row__main">${main}</div>${sideNote ? `<aside class="gloss"><span class="gloss__k">${esc(sideNote.k)}</span>${fmt(sideNote.x)}</aside>` : ''}</div>`;
  const R = {
    p: (b) => row(`<p${b.drop ? ' class="drop"' : ''}>${fmt(b.x)}</p>`, b.side),
    list: (b) => row(`<ul class="list">${b.items.map((x) => `<li>${fmt(x)}</li>`).join('')}</ul>`, b.side),
    quote: (b) => row(`<blockquote class="pullq"><p>${fmt(b.x)}</p>${b.by ? `<cite>${esc(b.by)}</cite>` : ''}</blockquote>`),
    focus: (b) => row(`<aside class="focus reveal"><span class="eyebrow">Approfondimento</span><h3>${fmt(b.title)}</h3>
      ${b.x ? M.paras(b.x) : ''}${b.reasons ? `<ol class="focus__reasons">${b.reasons.map((r) => `<li><span>${fmt(r)}</span></li>`).join('')}</ol>` : ''}${b.end ? `<p style="margin-top:1.2em">${fmt(b.end)}</p>` : ''}</aside>`),
    precise: (b) => row(`<div class="precise"><div class="precise__label">Nota di precisione</div><ul>${b.items.map((x) => `<li>${fmt(x)}</li>`).join('')}</ul></div>`),
    concepts: (b) => row(`<div class="concepts">${b.items.map((c) => `<div class="concept"><div class="concept__k">${fmt(c.k)}</div>${c.s ? `<span class="concept__s">${esc(c.s)}</span>` : ''}<p>${fmt(c.x)}</p></div>`).join('')}</div>`, null, true),
    cmp2: (b) => row(`<div class="concepts concepts--2">${[b.a, b.b].map((c) => `<div class="concept"><div class="concept__k">${fmt(c.k)}</div><ul class="list">${c.items.map((x) => `<li>${fmt(x)}</li>`).join('')}</ul></div>`).join('')}</div>`, null, true),
    figure: (b) => row(M.figure(b.img, { size: b.size, cap: b.cap }), null, b.size === 'wide'),
    figpair: (b) => row(`<div class="figpair">${b.imgs.map((k) => M.figure(k)).join('')}</div>`, null, true),
    chain: (b) => row(`<div class="block reveal">${M.ui.chainHTML(b)}</div>`, null, true),
    compare: (b) => row(`<div class="block reveal">${M.ui.compareHTML(b)}</div>`, null, true),
    source: (b) => row(`<div class="block reveal">${M.ui.docHTML(b)}</div>`, null, true),
    stages: (b) => row(`<div class="block reveal">${M.ui.stagesHTML(b)}</div>`, null, true),
    reading: (b) => row(`<div class="block reveal">${M.ui.readingHTML(b)}</div>`, null, true),
  };
  M.ui.block = (b) => (R[b.t] ? R[b.t](b) : `<!-- blocco sconosciuto: ${esc(b.t)} -->`);

  /* ---------- delega degli eventi per tutti i componenti ---------- */
  M.ui.bindComponents = function (root) {
    root.addEventListener('click', (e) => {
      const t = e.target;
      let el;
      if ((el = t.closest('[data-chain]'))) {
        const node = t.closest('.chain__node');
        const act = t.closest('[data-act]');
        const cur = +el.dataset.i || 0;
        if (node) chainGo(el, +node.dataset.i);
        else if (act) chainGo(el, act.dataset.act === 'prev' ? cur - 1 : cur + 1);
        return;
      }
      if ((el = t.closest('[data-cmp]'))) {
        const tab = t.closest('[role="tab"]');
        if (tab) cmpTab(el, +tab.dataset.i);
        else if (t.closest('[data-act="all"]')) cmpAll(el);
        return;
      }
      if ((el = t.closest('[data-doc]'))) {
        const b = t.closest('.doc__switch button');
        if (b) docSwitch(el, b.dataset.v);
        return;
      }
      if ((el = t.closest('[data-stages]'))) {
        const tab = t.closest('[role="tab"]');
        if (tab) stageGo(el, +tab.dataset.i);
        else if (t.closest('[data-act="next"]')) stageGo(el, (+el.dataset.i || 0) + 1);
        else if (t.closest('[data-act="first"]')) stageGo(el, 0);
        return;
      }
      if ((el = t.closest('[data-reading]'))) {
        const tab = t.closest('[role="tab"]');
        if (tab) readingGo(el, +tab.dataset.i);
      }
    });
    /* frecce sinistra/destra sulle schede (accessibilità dei tablist) */
    root.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const tab = e.target.closest('[role="tab"]'); if (!tab) return;
      const list = M.qsa('[role="tab"]', tab.parentElement.closest('[role="tablist"]'));
      const i = list.indexOf(tab); if (i < 0) return;
      const nx = list[(i + (e.key === 'ArrowRight' ? 1 : -1) + list.length) % list.length];
      nx.focus(); nx.click(); e.preventDefault();
    });
  };
})();

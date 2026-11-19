/* MUNDUS — linea del tempo interattiva.
   Scala proporzionale (anni → pixel), eventi disposti su più corsie per non sovrapporsi,
   filtro per capitolo, zoom, trascinamento, frecce della tastiera. */
(function () {
  'use strict';
  const M = window.MUNDUS;
  const { esc, fmt } = M;
  const MIN = 900, MAX = 1450, PAD = 60, LANE = 36, ZOOMS = [4, 6, 8, 11, 15, 20];

  M.ui.timeline = function (host, opt = {}) {
    const st = { z: 2, filter: opt.filter || 'all', cur: null };
    const evs = M.events;

    host.innerHTML = `
      <div class="tl">
        <div class="tl__bar">
          <div class="filterbar" role="group" aria-label="Filtra per capitolo">
            <span class="filterbar__label">Capitoli</span>
            <button type="button" class="chip" data-f="all" aria-pressed="true">Tutti</button>
            ${M.chapters.map((c) => `<button type="button" class="chip" data-f="${c.id}" aria-pressed="false" title="${esc(c.title)}"><span class="chip__n">${c.roman}</span> ${esc(c.title)}</button>`).join('')}
          </div>
          <div class="tl__tools">
            <button type="button" class="btn btn--ghost" data-z="-1" aria-label="Riduci lo zoom">−</button>
            <button type="button" class="btn btn--ghost" data-z="1" aria-label="Aumenta lo zoom">+</button>
            <button type="button" class="btn btn--ghost" data-nav="-1" aria-label="Evento precedente">←</button>
            <button type="button" class="btn" data-nav="1" aria-label="Evento successivo">→</button>
          </div>
        </div>
        <div class="tl__viewport" tabindex="0" aria-label="Linea del tempo: trascina o usa le frecce per spostarti tra gli eventi">
          <div class="tl__canvas"></div>
        </div>
        <p class="tl__hint">Trascina la linea o usa la rotella per scorrere · ← → per passare da un evento all'altro · ● evento fondamentale</p>
        <div class="tl__detail" aria-live="polite"></div>
      </div>`;
    const vp = M.qs('.tl__viewport', host);
    const canvas = M.qs('.tl__canvas', host);
    const detail = M.qs('.tl__detail', host);

    const visible = () => evs.filter((e) => st.filter === 'all' || e.chapter === st.filter);
    const xOf = (e, s) => PAD + ((e.y + (e.m ? (e.m - 0.5) / 12 : 0.5)) - MIN) * s;

    function draw() {
      const s = ZOOMS[st.z];
      const width = PAD * 2 + (MAX - MIN) * s;
      /* etichetta visibile per gli eventi fondamentali, per tutti quelli del capitolo filtrato
         e per tutti a zoom alto; gli altri sono punti sull'asse con etichetta al passaggio del mouse */
      const labeled = (e) => s >= 15 || e.major || (st.filter !== 'all' && e.chapter === st.filter);
      const ends = []; const pos = {};
      evs.forEach((e) => {
        const x = xOf(e, s);
        if (!labeled(e)) { pos[e.id] = { x, lane: -1 }; return; }
        const w = 46 + (String(e.y).length + e.title.length) * 6.7;
        let lane = ends.findIndex((end) => end < x - 8);
        if (lane < 0) { lane = ends.length; ends.push(0); }
        ends[lane] = x + w; pos[e.id] = { x, lane };
      });
      /* fasce dei capitoli */
      const eraEnds = []; const eraPos = M.chapters.map((c) => {
        const x1 = PAD + (c.span[0] - MIN) * s, x2 = PAD + (c.span[1] - MIN) * s;
        let r = eraEnds.findIndex((end) => end < x1 - 4); if (r < 0) { r = eraEnds.length; eraEnds.push(0); }
        eraEnds[r] = Math.max(x2, x1 + c.title.length * 6.5 + 30); return { c, x1, x2, r };
      });
      const eraH = eraEnds.length * 18 + 14;
      const lanes = Math.max(1, ends.length);
      const height = 24 + lanes * LANE + 34 + eraH + 46;
      canvas.style.width = width + 'px';
      vp.style.height = height + 'px';
      const axisTop = height - 46;
      let ticks = '';
      for (let y = MIN; y <= MAX; y += 10) {
        const major = y % 50 === 0;
        ticks += `<span class="tl__tick${major ? ' is-major' : ''}" style="left:${PAD + (y - MIN) * s}px">${major ? `<b>${y}</b>` : ''}</span>`;
      }
      canvas.innerHTML = `
        <div class="tl__eras" style="bottom:${46 + 16}px">${eraPos.map(({ c, x1, x2, r }) => `<span class="tl__era" data-ch="${c.id}" style="left:${x1}px;width:${Math.max(4, x2 - x1)}px;bottom:${r * 18}px"><span>${c.roman} · ${esc(c.title)}</span></span>`).join('')}</div>
        <div class="tl__axis">${ticks}</div>
        ${evs.map((e) => {
          const p = pos[e.id];
          const lbl = `<span class="tl__dot"></span><span class="tl__lbl"><b>${e.y}</b> ${esc(e.title)}</span>`;
          if (p.lane < 0) return `<button type="button" class="tl__ev is-dot${e.major ? ' is-major' : ''}" data-id="${e.id}" data-ch="${e.chapter}" style="left:${p.x}px;top:${axisTop - 8}px" aria-label="${esc(e.date + ': ' + e.title)}">${lbl}</button>`;
          const top = 20 + (lanes - 1 - p.lane) * LANE;
          const stem = axisTop - top - 30;
          return `<button type="button" class="tl__ev${e.major ? ' is-major' : ''}" data-id="${e.id}" data-ch="${e.chapter}" style="left:${p.x}px;top:${top}px;--stem:${stem}px" aria-label="${esc(e.date + ': ' + e.title)}">${lbl}</button>`;
        }).join('')}`;
      applyFilter();
      if (st.cur) mark(st.cur, false);
    }

    function applyFilter() {
      M.qsa('.chip[data-f]', host).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.f === st.filter)));
      M.qsa('.tl__ev', canvas).forEach((b) => b.classList.toggle('is-dim', st.filter !== 'all' && b.dataset.ch !== st.filter));
      M.qsa('.tl__era', canvas).forEach((b) => { b.style.opacity = st.filter === 'all' || b.dataset.ch === st.filter ? 1 : 0.25; });
    }

    function mark(id, scroll = true) {
      M.qsa('.tl__ev.is-active', canvas).forEach((b) => b.classList.remove('is-active'));
      const btn = M.qs(`.tl__ev[data-id="${id}"]`, canvas);
      if (!btn) return;
      btn.classList.add('is-active');
      if (scroll) {
        const left = btn.offsetLeft - vp.clientWidth / 2;
        vp.scrollTo({ left: Math.max(0, left), behavior: M.reduced() ? 'auto' : 'smooth' });
      }
    }

    function select(id, scroll = true) {
      const e = M.eventById[id]; if (!e) return;
      st.cur = id; mark(id, scroll);
      const ch = M.byId[e.chapter]; const pl = M.places[e.place];
      const list = visible(); const i = list.findIndex((x) => x.id === id);
      detail.innerHTML = `
        <div><div class="tl__year">${e.y}</div><div class="tl__date">${esc(e.date || '')}</div></div>
        <div>
          <h2 class="tl__title">${fmt(e.title)}</h2>
          <p class="tl__text">${fmt(e.x)}</p>
          <div class="hero__cta" style="margin-top:22px">
            ${ch ? `<a class="btn btn--sm" href="#/capitolo/${ch.id}">Vai al capitolo ${ch.roman}</a>` : ''}
            ${pl ? `<a class="btn btn--sm btn--ghost" href="#/atlante/${e.place}">Vedi sull'atlante</a>` : ''}
          </div>
        </div>
        <dl class="tl__side">
          ${ch ? `<div><dt>Capitolo</dt><dd><a href="#/capitolo/${ch.id}">${ch.roman} · ${esc(ch.title)}</a></dd></div>` : ''}
          ${pl ? `<div><dt>Luogo</dt><dd>${esc(pl.name)}</dd></div>` : ''}
          ${e.people && e.people.length ? `<div><dt>Protagonisti</dt><dd>${e.people.map(esc).join(', ')}</dd></div>` : ''}
          <div><dt>Posizione</dt><dd>${i >= 0 ? `${i + 1} di ${list.length} eventi${st.filter !== 'all' ? ' del capitolo' : ''}` : 'fuori dal filtro'}</dd></div>
        </dl>`;
      detail.classList.remove('is-swapping'); void detail.offsetWidth; detail.classList.add('is-swapping');
      if (history.replaceState) history.replaceState(null, '', `#/cronologia/${id}`);
    }

    function step(d) {
      const list = visible(); if (!list.length) return;
      let i = list.findIndex((x) => x.id === st.cur);
      i = i < 0 ? 0 : Math.min(list.length - 1, Math.max(0, i + d));
      select(list[i].id);
    }

    /* eventi */
    host.addEventListener('click', (e) => {
      const ev = e.target.closest('.tl__ev'); if (ev) { select(ev.dataset.id); return; }
      const f = e.target.closest('.chip[data-f]');
      if (f) {
        st.filter = f.dataset.f; draw();
        const list = visible();
        if (list.length && !list.some((x) => x.id === st.cur)) select(list[0].id); else if (st.cur) select(st.cur);
        return;
      }
      const z = e.target.closest('[data-z]');
      if (z) {
        const centerYear = MIN + (vp.scrollLeft + vp.clientWidth / 2 - PAD) / ZOOMS[st.z];
        st.z = Math.max(0, Math.min(ZOOMS.length - 1, st.z + +z.dataset.z)); draw();
        vp.scrollLeft = PAD + (centerYear - MIN) * ZOOMS[st.z] - vp.clientWidth / 2;
        return;
      }
      const n = e.target.closest('[data-nav]'); if (n) step(+n.dataset.nav);
    });
    const onKey = (e) => {
      if (!document.body.contains(host)) { document.removeEventListener('keydown', onKey); return; }
      if (e.target.closest && e.target.closest('input, textarea, select, [role="tab"]')) return;
      if (M.present && M.present.isOpen()) return;
      if (e.key === 'ArrowRight') { step(1); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { step(-1); e.preventDefault(); }
    };
    document.addEventListener('keydown', onKey);

    /* trascinamento e rotella */
    let drag = null;
    vp.addEventListener('pointerdown', (e) => { if (e.button !== 0) return; drag = { x: e.clientX, l: vp.scrollLeft, moved: false }; });
    window.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      if (Math.abs(dx) > 5) { drag.moved = true; vp.classList.add('is-dragging'); }
      if (drag.moved) vp.scrollLeft = drag.l - dx;
    });
    window.addEventListener('pointerup', () => { if (drag && drag.moved) setTimeout(() => vp.classList.remove('is-dragging'), 0); drag = null; });
    vp.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { vp.scrollLeft += e.deltaY; e.preventDefault(); }
    }, { passive: false });

    draw();
    const first = (opt.select && M.eventById[opt.select]) ? opt.select : (visible().find((e) => e.major) || visible()[0] || {}).id;
    if (first) setTimeout(() => select(first, true), 0);
    return { select };
  };
})();

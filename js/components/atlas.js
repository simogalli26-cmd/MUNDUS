/* MUNDUS — atlante storico.
   Coste reali da Natural Earth (pacchetto world-atlas, caricato da CDN) disegnate in SVG
   con una proiezione di Mercatore scritta qui; luoghi e regioni storiche dai dati del sito.
   Senza connessione la mappa mostra comunque i luoghi su un reticolo geografico. */
(function () {
  'use strict';
  const M = window.MUNDUS;
  const { esc, fmt } = M;
  const LAND_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json';
  const K = 10, D2R = Math.PI / 180;
  const px = (lon) => lon * K;
  const py = (lat) => -Math.log(Math.tan(Math.PI / 4 + (lat * D2R) / 2)) * K / D2R;

  const PRESETS = {
    europa: { label: 'Europa', b: [-10.5, 35, 32, 57] },
    mediterraneo: { label: 'Mediterraneo', b: [-7, 29.5, 37, 52] },
    italia: { label: 'Italia', b: [6.4, 37.6, 18.8, 47.3] },
    padania: { label: 'Pianura padana', b: [7.6, 44.25, 12.6, 46.35] },
    francia: { label: 'Francia e Linguadoca', b: [-0.8, 42.4, 7.4, 49.9] },
    nord: { label: 'Fiandre e Champagne', b: [-1.8, 47.2, 7.6, 52.4] },
    umbria: { label: 'Umbria', b: [11.0, 42.3, 13.6, 43.95] },
  };
  const CH_PRESET = { investiture: 'europa', rinascita: 'europa', comuni: 'italia', barbarossa: 'padania', innocenzo: 'europa', cultura: 'europa', eresie: 'francia', francesco: 'umbria' };
  const REGIONS = [
    { t: 'Regno di Francia', lon: 1.8, lat: 46.9, s: 1 },
    { t: 'Regno di Germania', lon: 11.2, lat: 51.2, s: 1 },
    { t: 'Regno d\'Inghilterra', lon: -2.6, lat: 52.9, s: .8 },
    { t: 'Regni iberici', lon: -4.2, lat: 40.6, s: .9 },
    { t: 'Regno d\'Italia', lon: 8.9, lat: 44.75, s: .75 },
    { t: 'Patrimonio di S. Pietro', lon: 12.2, lat: 42.35, s: .55 },
    { t: 'Regno di Sicilia', lon: 15.9, lat: 39.7, s: .75 },
    { t: 'Impero bizantino', lon: 24.5, lat: 39.4, s: .9 },
    { t: 'Regno d\'Ungheria', lon: 19.6, lat: 47.3, s: .8 },
  ];
  const SEAS = [
    { t: 'Mare Mediterraneum', lon: 5.5, lat: 38.4, s: 1 },
    { t: 'Mare Adriaticum', lon: 15.4, lat: 42.9, s: .6 },
    { t: 'Mare Tyrrhenum', lon: 11.2, lat: 40.0, s: .6 },
    { t: 'Oceanus', lon: -8.5, lat: 47.5, s: .8 },
  ];

  /* decodifica TopoJSON (formato del pacchetto world-atlas) */
  function topoRings(topo) {
    const tf = topo.transform; const arcs = topo.arcs.map((a) => {
      let x = 0, y = 0; return a.map((p) => { x += p[0]; y += p[1]; return tf ? [x * tf.scale[0] + tf.translate[0], y * tf.scale[1] + tf.translate[1]] : p; });
    });
    const arc = (i) => (i >= 0 ? arcs[i] : arcs[~i].slice().reverse());
    const ring = (idx) => { const out = []; idx.forEach((i, k) => { const a = arc(i); out.push(...(k ? a.slice(1) : a)); }); return out; };
    const rings = [];
    const geom = (g) => {
      if (g.type === 'GeometryCollection') g.geometries.forEach(geom);
      else if (g.type === 'Polygon') g.arcs.forEach((r) => rings.push(ring(r)));
      else if (g.type === 'MultiPolygon') g.arcs.forEach((poly) => poly.forEach((r) => rings.push(ring(r))));
    };
    Object.values(topo.objects).forEach(geom);
    return rings;
  }
  function landPath(rings) {
    let d = '';
    rings.forEach((r) => {
      if (!r.some(([lon, lat]) => lon > -25 && lon < 50 && lat > 22 && lat < 66)) return;
      let last = null, s = '';
      r.forEach(([lon, lat]) => {
        const la = Math.max(-80, Math.min(80, lat));
        const x = px(lon), y = py(la);
        if (last && Math.abs(x - last[0]) < 0.35 && Math.abs(y - last[1]) < 0.35) return;
        s += (s ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1); last = [x, y];
      });
      if (s) d += s + 'Z';
    });
    return d;
  }
  /* prima la copia locale (data/land.js, creata da tools/build_land.js), poi la rete come riserva */
  function loadLand() {
    if (M._land) return Promise.resolve(M._land);
    const local = M.landPath ? Promise.resolve() : new Promise((res, rej) => M.loadScripts(['data/land.js'], (failed) => (failed.length || !M.landPath ? rej() : res())));
    return local.then(() => (M._land = M.landPath))
      .catch(() => fetch(LAND_URL).then((r) => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
        .then((topo) => { M._land = landPath(topoRings(topo)); return M._land; }));
  }
  function graticule() {
    let d = '';
    for (let lon = -30; lon <= 45; lon += 5) d += `M${px(lon)} ${py(25)}L${px(lon)} ${py(66)}`;
    for (let lat = 25; lat <= 65; lat += 5) d += `M${px(-30)} ${py(lat)}L${px(45)} ${py(lat)}`;
    return d;
  }

  M.ui.atlas = function (host, opt = {}) {
    const usedPlaces = {};
    M.events.forEach((e) => { if (e.place && M.places[e.place]) (usedPlaces[e.place] = usedPlaces[e.place] || []).push(e); });
    const ids = Object.keys(usedPlaces).sort((a, b) => M.places[a].name.localeCompare(M.places[b].name, 'it'));
    const st = { filter: opt.filter || 'all', cur: null, vb: null };

    host.innerHTML = `
      <div class="atlas">
        <div class="atlas__map">
          <svg class="atlas__svg" role="img" aria-label="Mappa dei luoghi del percorso">
            <rect class="atlas__sea" x="-2000" y="-2000" width="5000" height="5000"/>
            <path class="atlas__grat" d="${graticule()}"/>
            <path class="atlas__land" d=""/>
            <g class="atlas__regions">${REGIONS.map((r) => `<text class="atlas__region" x="${px(r.lon)}" y="${py(r.lat)}" data-s="${r.s}">${esc(r.t)}</text>`).join('')}
              ${SEAS.map((r) => `<text class="atlas__sealbl" x="${px(r.lon)}" y="${py(r.lat)}" data-s="${r.s}">${esc(r.t)}</text>`).join('')}</g>
            <g class="atlas__pts">${ids.map((id) => {
              const p = M.places[id]; const chs = [...new Set(usedPlaces[id].map((e) => e.chapter))].join(' ');
              return `<g class="atlas__pt${p.major ? '' : ' is-minor'}" data-id="${id}" data-ch="${chs}" tabindex="0" role="button" aria-label="${esc(p.name)}" transform="translate(${px(p.lon).toFixed(2)} ${py(p.lat).toFixed(2)})">
                <circle class="ring" r="1"/><circle class="core" r="1"/><text x="1" y="0" dy=".35em">${esc(p.name)}</text></g>`;
            }).join('')}</g>
          </svg>
          <div class="atlas__ctrl">
            <button type="button" data-zoom="in" aria-label="Avvicina">+</button>
            <button type="button" data-zoom="out" aria-label="Allontana">−</button>
          </div>
          <div class="atlas__presets" role="group" aria-label="Inquadrature">${Object.entries(PRESETS).map(([k, p]) => `<button type="button" class="chip" data-preset="${k}">${esc(p.label)}</button>`).join('')}</div>
          <svg class="atlas__rose" viewBox="-50 -50 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1"><circle r="30"/><circle r="22"/></g><path d="M0-46L6-6 0 0-6-6Z" fill="currentColor"/><path d="M0 46L6 6 0 0-6 6Z" fill="currentColor" opacity=".45"/><path d="M46 0L6 6 0 0 6-6Z" fill="currentColor" opacity=".45"/><path d="M-46 0L-6 6 0 0-6-6Z" fill="currentColor" opacity=".45"/><text y="-36" text-anchor="middle" font-size="9" fill="currentColor" font-family="serif" dy="-14">N</text></svg>
          <p class="atlas__note">Coste: Natural Earth (world-atlas), proiezione di Mercatore. I nomi delle regioni indicano in modo approssimativo la situazione intorno al 1200, senza confini precisi.</p>
          <p class="atlas__msg" hidden></p>
        </div>
        <aside class="atlas__panel">
          <div class="atlas__filters filterbar" role="group" aria-label="Filtra per capitolo">
            <button type="button" class="chip" data-f="all" aria-pressed="true">Tutti</button>
            ${M.chapters.map((c) => `<button type="button" class="chip" data-f="${c.id}" aria-pressed="false" title="${esc(c.title)}"><span class="chip__n">${c.roman}</span></button>`).join('')}
          </div>
          <div class="atlas__detail" aria-live="polite"></div>
        </aside>
      </div>`;

    const root = M.qs('.atlas', host);
    const svg = M.qs('.atlas__svg', host);
    const land = M.qs('.atlas__land', host);
    const detail = M.qs('.atlas__detail', host);
    const msg = M.qs('.atlas__msg', host);

    /* ---------- inquadratura (viewBox) ---------- */
    const fit = (b) => {
      const x1 = px(b[0]), x2 = px(b[2]), y1 = py(b[3]), y2 = py(b[1]);
      const w = svg.clientWidth || 800, h = svg.clientHeight || 600;
      let vw = x2 - x1, vh = y2 - y1; const ar = w / h;
      if (vw / vh > ar) { const nh = vw / ar; return [x1, y1 - (nh - vh) / 2, vw, nh]; }
      const nw = vh * ar; return [x1 - (nw - vw) / 2, y1, nw, vh];
    };
    function setVB(vb) {
      st.vb = vb; svg.setAttribute('viewBox', vb.map((n) => n.toFixed(2)).join(' '));
      const k = vb[2] / (svg.clientWidth || 800); /* unità per pixel */
      M.qsa('.atlas__pt', svg).forEach((g) => {
        g.querySelector('.core').setAttribute('r', (4.6 * k).toFixed(3));
        g.querySelector('.ring').setAttribute('r', (6 * k).toFixed(3));
        const t = g.querySelector('text'); t.setAttribute('x', (9 * k).toFixed(3)); t.setAttribute('font-size', (12.5 * k).toFixed(3)); t.setAttribute('stroke-width', (3.2 * k).toFixed(3));
      });
      M.qsa('.atlas__region, .atlas__sealbl', svg).forEach((t) => t.setAttribute('font-size', (15 * k * +t.dataset.s).toFixed(3)));
      const degW = vb[2] / K;
      root.classList.toggle('zoom-out', degW > 16);
      root.classList.toggle('zoom-in', degW < 9);
    }
    let anim = null;
    function animateTo(target, ms = 750) {
      cancelAnimationFrame(anim);
      if (!st.vb || M.reduced() || document.hidden) { setVB(target); return; }
      const from = st.vb.slice(); const t0 = performance.now();
      const ease = (t) => 1 - Math.pow(1 - t, 3);
      const tick = (now) => {
        const t = Math.min(1, (now - t0) / ms); const e = ease(t);
        setVB(from.map((v, i) => v + (target[i] - v) * e));
        if (t < 1) anim = requestAnimationFrame(tick);
      };
      anim = requestAnimationFrame(tick);
    }
    const goPreset = (k) => { M.qsa('[data-preset]', host).forEach((b) => b.classList.toggle('is-on', b.dataset.preset === k)); animateTo(fit(PRESETS[k].b)); };
    function zoomAt(f, cx, cy) {
      const [x, y, w, h] = st.vb; const nw = Math.max(18, Math.min(700, w * f)); const r = nw / w;
      const ux = x + w * cx, uy = y + h * cy;
      setVB([ux - (ux - x) * r, uy - (uy - y) * r, nw, h * r]);
      M.qsa('[data-preset]', host).forEach((b) => b.classList.remove('is-on'));
    }

    /* ---------- luoghi ---------- */
    function applyFilter() {
      M.qsa('.chip[data-f]', host).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.f === st.filter)));
      M.qsa('.atlas__pt', svg).forEach((g) => g.classList.toggle('is-dim', st.filter !== 'all' && !g.dataset.ch.split(' ').includes(st.filter)));
    }
    function indexHTML() {
      const list = ids.filter((id) => st.filter === 'all' || usedPlaces[id].some((e) => e.chapter === st.filter));
      const ch = M.byId[st.filter];
      return `<span class="eyebrow">${ch ? `Capitolo ${ch.roman}` : 'Atlante'}</span>
        <h3 style="margin-top:12px">${ch ? esc(ch.title) : 'I luoghi del percorso'}</h3>
        <p class="atlas__about">${ch ? `${list.length} luoghi legati a questo capitolo.` : `${list.length} luoghi, dalla Borgogna di Cluny all\'Egitto di Damietta.`} Seleziona un punto sulla mappa o un nome dall'elenco.</p>
        <ul class="atlas__index">${list.map((id) => `<li><button type="button" data-place="${id}">${esc(M.places[id].name)}</button></li>`).join('')}</ul>`;
    }
    function select(id, move = true) {
      const p = M.places[id]; if (!p) return;
      st.cur = id;
      M.qsa('.atlas__pt', svg).forEach((g) => g.classList.toggle('is-active', g.dataset.id === id));
      const evs = usedPlaces[id] || [];
      detail.innerHTML = `
        <button type="button" class="btn btn--sm btn--ghost" data-act="index" style="margin-bottom:18px">← Tutti i luoghi</button>
        <h3>${esc(p.name)}</h3>${p.la ? `<div class="atlas__latin">${esc(p.la)}</div>` : ''}
        <p class="atlas__about">${fmt(p.about || '')}</p>
        <ul class="atlas__evs">${evs.map((e) => `<li><b>${e.y}</b><span>${esc(e.title)}</span><p>${fmt(e.x)}</p>
          <div><a href="#/cronologia/${e.id}">Cronologia</a> · <a href="#/capitolo/${e.chapter}">Cap. ${M.byId[e.chapter].roman}</a></div></li>`).join('')}</ul>`;
      if (move && st.vb) {
        const [x, y, w, h] = st.vb; const cx = px(p.lon), cy = py(p.lat);
        if (cx < x + w * 0.1 || cx > x + w * 0.9 || cy < y + h * 0.1 || cy > y + h * 0.9) animateTo([cx - w / 2, cy - h / 2, w, h]);
      }
      if (history.replaceState) history.replaceState(null, '', `#/atlante/${id}`);
    }
    function showIndex() {
      st.cur = null; M.qsa('.atlas__pt', svg).forEach((g) => g.classList.remove('is-active'));
      detail.innerHTML = indexHTML();
    }

    /* ---------- eventi ---------- */
    host.addEventListener('click', (e) => {
      const pt = e.target.closest('.atlas__pt'); if (pt) { if (!st.dragged) select(pt.dataset.id); return; }
      const pl = e.target.closest('[data-place]'); if (pl) { select(pl.dataset.place); return; }
      const pr = e.target.closest('[data-preset]'); if (pr) { goPreset(pr.dataset.preset); return; }
      const z = e.target.closest('[data-zoom]'); if (z) { zoomAt(z.dataset.zoom === 'in' ? 0.7 : 1.4, 0.5, 0.5); return; }
      const f = e.target.closest('.chip[data-f]');
      if (f) { st.filter = f.dataset.f; applyFilter(); if (st.filter !== 'all') goPreset(CH_PRESET[st.filter] || 'europa'); showIndex(); return; }
      if (e.target.closest('[data-act="index"]')) showIndex();
    });
    svg.addEventListener('keydown', (e) => {
      const pt = e.target.closest('.atlas__pt'); if (pt && (e.key === 'Enter' || e.key === ' ')) { select(pt.dataset.id); e.preventDefault(); }
    });
    svg.addEventListener('wheel', (e) => {
      e.preventDefault(); const r = svg.getBoundingClientRect();
      zoomAt(e.deltaY > 0 ? 1.15 : 0.87, (e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
    }, { passive: false });
    let drag = null;
    svg.addEventListener('pointerdown', (e) => { if (e.button !== 0) return; drag = { x: e.clientX, y: e.clientY, vb: st.vb.slice(), moved: false }; st.dragged = false; });
    window.addEventListener('pointermove', (e) => {
      if (!drag) return; const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.moved && Math.hypot(dx, dy) < 5) return;
      drag.moved = true; st.dragged = true; svg.classList.add('is-dragging');
      const k = drag.vb[2] / svg.clientWidth; setVB([drag.vb[0] - dx * k, drag.vb[1] - dy * k, drag.vb[2], drag.vb[3]]);
    });
    window.addEventListener('pointerup', () => { if (drag) { svg.classList.remove('is-dragging'); setTimeout(() => { st.dragged = false; }, 0); } drag = null; });
    const ro = new ResizeObserver(() => {
      if (!st.vb || !svg.clientWidth || !svg.clientHeight) return;
      /* mantiene centro e ampiezza orizzontale, adatta l'altezza alle nuove proporzioni */
      const [x, y, w, h] = st.vb; const nh = w / (svg.clientWidth / svg.clientHeight);
      setVB([x, y + h / 2 - nh / 2, w, nh]);
    });
    ro.observe(svg);

    /* ---------- avvio ---------- */
    applyFilter();
    const startPreset = opt.place && M.places[opt.place]
      ? (['milano', 'lodi', 'como', 'pavia', 'cremona', 'crema', 'roncaglia', 'legnano', 'pontida', 'alessandria', 'tortona', 'brescia', 'chiaravalle', 'canossa'].includes(opt.place) ? 'padania' : 'europa')
      : (st.filter !== 'all' ? CH_PRESET[st.filter] : 'europa');
    setVB(fit(PRESETS[startPreset].b));
    M.qsa('[data-preset]', host).forEach((b) => b.classList.toggle('is-on', b.dataset.preset === startPreset));
    if (opt.place && M.places[opt.place]) select(opt.place, true); else showIndex();
    loadLand().then((d) => { land.setAttribute('d', d); }).catch(() => {
      msg.hidden = false; msg.textContent = 'Mappa di base non disponibile senza connessione: i luoghi restano consultabili sul reticolo geografico.';
    });
  };
})();

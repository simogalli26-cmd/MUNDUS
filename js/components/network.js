/* MUNDUS — rete dei collegamenti tra i capitoli (pagina «Nessi»).
   I capitoli sono disposti su tre fasce (Potere, Economia e società, Fede e cultura) in ordine cronologico. */
(function () {
  'use strict';
  const M = window.MUNDUS;
  const { esc, fmt } = M;
  const W = 1000, H = 470, NW = 168, NH = 58;
  const POS = {
    investiture: [130, 95], barbarossa: [500, 95], innocenzo: [830, 95],
    rinascita: [250, 245], comuni: [610, 245],
    cultura: [400, 395], eresie: [660, 395], francesco: [880, 395],
  };
  const SHORT = { investiture: 'Investiture', rinascita: 'Rinascita', comuni: 'Comuni', barbarossa: 'Barbarossa', innocenzo: 'Innocenzo III', cultura: 'Cultura', eresie: 'Eresie', francesco: 'Francesco' };
  const LANES = [['Potere', 95], ['Economia e società', 245], ['Fede e cultura', 395]];

  function edge(a, b, i) {
    const [x1, y1] = POS[a], [x2, y2] = POS[b];
    /* punto di partenza e di arrivo sul bordo dei riquadri */
    const clip = (x, y, tx, ty) => {
      const dx = tx - x, dy = ty - y; const sx = (NW / 2 + 4) / Math.abs(dx || 1e-6), sy = (NH / 2 + 4) / Math.abs(dy || 1e-6);
      const s = Math.min(sx, sy); return [x + dx * s, y + dy * s];
    };
    const [ax, ay] = clip(x1, y1, x2, y2); const [bx, by] = clip(x2, y2, x1, y1);
    const mx = (ax + bx) / 2, my = (ay + by) / 2;
    const len = Math.hypot(bx - ax, by - ay) || 1;
    const bend = (i % 2 ? -1 : 1) * Math.min(60, len * 0.18);
    const cx = mx + (-(by - ay) / len) * bend, cy = my + ((bx - ax) / len) * bend;
    return `M${ax.toFixed(1)} ${ay.toFixed(1)}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${bx.toFixed(1)} ${by.toFixed(1)}`;
  }

  M.ui.network = function (host) {
    const links = M.links.filter((l) => POS[l.from] && POS[l.to]);
    host.innerHTML = `
      <div class="net">
        <svg class="net__svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Mappa dei collegamenti tra i capitoli">
          <defs><marker id="net-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#cdab68"/></marker></defs>
          ${LANES.map(([t, y]) => `<rect class="net__lane" x="8" y="${y - 62}" width="${W - 16}" height="124" rx="2"/><text class="net__lanelbl" x="22" y="${y - 44}">${esc(t)}</text>`).join('')}
          ${links.map((l, i) => `<g data-link="${i}"><path class="net__link" style="--d:${(0.3 + i * 0.09).toFixed(2)}s" d="${edge(l.from, l.to, i)}" marker-end="url(#net-arrow)"/><path class="net__hit" d="${edge(l.from, l.to, i)}"><title>${esc(l.title)}</title></path></g>`).join('')}
          ${M.chapters.filter((c) => POS[c.id]).map((c) => {
            const [x, y] = POS[c.id];
            return `<g class="net__node" data-node="${c.id}" tabindex="0" role="button" aria-label="Capitolo ${c.roman}: ${esc(c.title)}" transform="translate(${x - NW / 2} ${y - NH / 2})">
              <rect width="${NW}" height="${NH}" rx="2"/><text class="n" x="14" y="37">${c.roman}</text><text x="${c.roman.length * 12 + 26}" y="35">${esc(SHORT[c.id] || c.title)}</text></g>`;
          }).join('')}
        </svg>
        <div class="net__panel" aria-live="polite"></div>
      </div>
      <div class="net-list">${links.map((l, i) => `
        <article class="net-card" id="link-${i}"><span class="net__route">${M.byId[l.from].roman} → ${M.byId[l.to].roman} · ${esc(M.byId[l.from].title)} → ${esc(M.byId[l.to].title)}</span>
          <h4>${esc(l.title)}</h4><p>${fmt(l.x)}</p><a href="#/capitolo/${l.from}">Capitolo ${M.byId[l.from].roman}</a><a href="#/capitolo/${l.to}">Capitolo ${M.byId[l.to].roman}</a></article>`).join('')}
      </div>`;
    const net = M.qs('.net', host);
    const panel = M.qs('.net__panel', host);
    const intro = () => {
      net.classList.remove('has-focus');
      M.qsa('.is-on, .is-near', net).forEach((n) => n.classList.remove('is-on', 'is-near'));
      panel.innerHTML = `<span class="eyebrow">Come leggere la mappa</span><h3>Otto capitoli, ${links.length} collegamenti</h3>
        <p>Ogni freccia è un rapporto di causa, di continuità o di contrasto tra due capitoli. Seleziona un capitolo per vedere tutti i suoi legami, oppure una freccia per leggere la spiegazione.</p>
        <p>Le tre fasce corrispondono ai tre assi del percorso; da sinistra a destra il tempo scorre, a grandi linee, dal X al XIII secolo.</p>`;
    };
    function focusNode(id) {
      const c = M.byId[id]; net.classList.add('has-focus');
      M.qsa('.net__node', net).forEach((n) => { n.classList.toggle('is-on', n.dataset.node === id); n.classList.remove('is-near'); });
      const mine = [];
      links.forEach((l, i) => {
        const on = l.from === id || l.to === id;
        M.qs(`[data-link="${i}"] .net__link`, net).classList.toggle('is-on', on);
        if (on) { mine.push(i); M.qs(`[data-node="${l.from === id ? l.to : l.from}"]`, net).classList.add('is-near'); }
      });
      panel.innerHTML = `<span class="eyebrow">Capitolo ${c.roman}</span><h3>${esc(c.title)}</h3><p>${fmt(c.hook)}</p>
        <ul class="net__mini">${mine.map((i) => { const l = links[i]; const other = M.byId[l.from === id ? l.to : l.from]; return `<li><button type="button" data-showlink="${i}">${l.from === id ? '→' : '←'} ${other.roman} · ${esc(l.title)}</button></li>`; }).join('')}</ul>
        <a class="btn btn--sm" href="#/capitolo/${c.id}">Apri il capitolo</a> <button type="button" class="btn btn--sm btn--ghost" data-act="reset">Mostra tutto</button>`;
    }
    function focusLink(i) {
      const l = links[i]; net.classList.add('has-focus');
      M.qsa('.net__link', net).forEach((p, j) => p.classList.toggle('is-on', j === i));
      M.qsa('.net__node', net).forEach((n) => { n.classList.toggle('is-on', n.dataset.node === l.from || n.dataset.node === l.to); n.classList.remove('is-near'); });
      panel.innerHTML = `<span class="net__route">${M.byId[l.from].roman} ${esc(M.byId[l.from].title)} → ${M.byId[l.to].roman} ${esc(M.byId[l.to].title)}</span>
        <h3>${esc(l.title)}</h3><p>${fmt(l.x)}</p>
        <div><a class="btn btn--sm" href="#/capitolo/${l.from}">Cap. ${M.byId[l.from].roman}</a> <a class="btn btn--sm" href="#/capitolo/${l.to}">Cap. ${M.byId[l.to].roman}</a></div>
        <button type="button" class="btn btn--sm btn--ghost" data-act="reset">Mostra tutto</button>`;
    }
    host.addEventListener('click', (e) => {
      const n = e.target.closest('[data-node]'); if (n) { focusNode(n.dataset.node); return; }
      const l = e.target.closest('[data-link]'); if (l) { focusLink(+l.dataset.link); return; }
      const s = e.target.closest('[data-showlink]'); if (s) { focusLink(+s.dataset.showlink); return; }
      if (e.target.closest('[data-act="reset"]')) intro();
    });
    host.addEventListener('keydown', (e) => {
      const n = e.target.closest('[data-node]'); if (n && (e.key === 'Enter' || e.key === ' ')) { focusNode(n.dataset.node); e.preventDefault(); }
    });
    intro();
  };
})();

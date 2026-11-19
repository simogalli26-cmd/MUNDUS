/* MUNDUS — modalità presentazione.
   Le diapositive si costruiscono dal campo "slides" di ogni capitolo. Alcune hanno «passi»:
   la freccia → mostra prima gli elementi uno alla volta, poi passa alla diapositiva successiva. */
(function () {
  'use strict';
  const M = window.MUNDUS;
  const { esc, fmt, plain } = M;
  let deck = [], idx = 0, step = 0, el = null, lastFocus = null;

  const img = (key, w = 1280) => { const im = M.img(key); return im ? M.imgSrc(im, w) : ''; };

  function build() {
    const out = [];
    out.push({ kind: 'cover', ch: null, steps: 0 });
    M.chapters.forEach((ch) => (ch.slides || [{ t: 'chapter' }]).forEach((s) => {
      const sl = Object.assign({ ch }, s); sl.kind = s.t;
      if (s.t === 'points') sl.steps = s.pts.length - 1;
      else if (s.t === 'dates') sl.steps = s.items.length - 1;
      else if (s.t === 'chain') { sl.data = M.blocks[s.ref]; sl.steps = sl.data ? sl.data.nodes.length - 1 : 0; }
      else if (s.t === 'compare') { sl.data = M.blocks[s.ref]; sl.steps = (s.rows || [0]).length - 1; }
      else sl.steps = 0;
      if ((s.t === 'chain' || s.t === 'compare') && !sl.data) return;
      out.push(sl);
    }));
    out.push({ kind: 'end', ch: null, steps: M.site.axes.length - 1 });
    return out;
  }

  function slideHTML(s, i) {
    const ch = s.ch;
    switch (s.kind) {
      case 'cover': return `<section class="slide s-cover" data-i="${i}"><div class="slide__bg"><img src="${img('mappamundi')}" alt="" referrerpolicy="no-referrer"></div>
        <div><div class="s-eyebrow" style="justify-content:center">Atlante storico interattivo</div><div class="s-mega">MUNDUS</div>
        <div class="s-sub">${esc(M.site.subtitle)}</div><p class="s-text">${esc(M.site.tagline)}</p></div></section>`;
      case 'chapter': return `<section class="slide s-chapter" data-i="${i}">
        <div><div class="s-num" aria-hidden="true">${ch.roman}</div><div class="s-eyebrow" style="margin-top:3vh">Capitolo ${ch.roman}</div>
        <h2 class="s-title">${esc(ch.title)}</h2><div class="s-sub">${esc(ch.kicker)}</div><div class="s-period">${esc(ch.period)}</div>
        <p class="s-text">${fmt(ch.question)}</p></div>
        <figure class="s-figure"><img src="${img(ch.cover)}" alt="${esc(plain((M.img(ch.cover) || {}).cap || ''))}" referrerpolicy="no-referrer"><figcaption>${fmt((M.img(ch.cover) || {}).cap || '')}</figcaption></figure></section>`;
      case 'points': return `<section class="slide s-points${s.img ? ' has-img' : ''}" data-i="${i}" style="--n:${s.pts.length}">
        <div><div class="s-eyebrow">${ch.roman} · ${esc(ch.title)}</div><h2 class="s-title">${fmt(s.title)}</h2>
        <ol class="s-points__list">${s.pts.map((p, j) => `<li class="s-point" data-step="${j}" data-n="${j + 1}"><b>${fmt(p[0])}</b><span>${fmt(p[1])}</span></li>`).join('')}</ol></div>
        ${s.img ? `<figure class="s-figure"><img src="${img(s.img)}" alt="" referrerpolicy="no-referrer"></figure>` : ''}</section>`;
      case 'chain': { const c = s.data; return `<section class="slide s-chain" data-i="${i}">
        <div><div class="s-eyebrow">Nesso causa → effetto · ${ch.roman}</div><h2 class="s-title">${fmt(c.title)}</h2>
        <ol class="s-chain__track">${c.nodes.map((n, j) => `<li class="s-chain__node" data-step="${j}"><div class="s-chain__box"><div class="s-chain__k">${fmt(n.k)}</div>${n.y ? `<div class="s-chain__y">${esc(n.y)}</div>` : ''}</div><p class="s-chain__x">${fmt(n.x)}</p></li>`).join('')}</ol></div></section>`; }
      case 'quote': return `<section class="slide s-quote" data-i="${i}"><div><div class="s-eyebrow">Fonte · ${ch.roman} ${esc(ch.title)}</div>
        <blockquote>${fmt(s.x)}</blockquote>${s.o ? `<p class="s-orig" lang="la">${esc(s.o)}</p>` : ''}<cite>${esc(s.cite)}</cite></div></section>`;
      case 'dates': return `<section class="slide s-dates" data-i="${i}" style="--n:${s.items.length}"><div>
        <div class="s-eyebrow">Le date · ${ch.roman} ${esc(ch.title)}</div><h2 class="s-title">Le date da ricordare</h2>
        <ol class="s-dates__row">${s.items.map((d, j) => `<li class="s-date" data-step="${j}"><b>${esc(d[0])}</b><span>${esc(d[1])}</span>${d[2] ? `<small>${esc(d[2])}</small>` : ''}</li>`).join('')}</ol></div></section>`;
      case 'compare': { const c = s.data; const rows = (s.rows || [0, 1, 2]).map((r) => c.rows[r]).filter(Boolean); return `<section class="slide s-compare" data-i="${i}"><div>
        <div class="s-eyebrow">Confronto · ${ch.roman}</div><h2 class="s-title">${fmt(c.title)}</h2>
        <div class="s-compare__grid"><div></div><div class="s-compare__h">${esc(c.a.name)}</div><div class="s-compare__h">${esc(c.b.name)}</div>
        ${rows.map((r, j) => `<div class="s-compare__k">${esc(r.k)}</div><div class="s-compare__c" data-step="${j}">${fmt(r.a)}</div><div class="s-compare__c" data-step="${j}">${fmt(r.b)}</div>`).join('')}</div></div></section>`; }
      case 'end': return `<section class="slide s-points" data-i="${i}" style="--n:3"><div>
        <div class="s-eyebrow">Conclusione</div><h2 class="s-title">Tre fili che si intrecciano</h2>
        <ol class="s-points__list">${M.site.axes.map((a, j) => `<li class="s-point" data-step="${j}"><b>${esc(a.k)}</b><span>${esc(a.x)}</span></li>`).join('')}</ol></div></section>`;
      default: return '';
    }
  }

  function render() {
    const s = deck[idx];
    M.qsa('.slide', el).forEach((n) => {
      const j = +n.dataset.i;
      n.classList.toggle('is-current', j === idx); n.classList.toggle('is-before', j < idx);
      n.setAttribute('aria-hidden', String(j !== idx));
    });
    const cur = M.qs(`.slide[data-i="${idx}"]`, el);
    if (cur) {
      M.qsa('[data-step]', cur).forEach((n) => n.classList.toggle('is-shown', +n.dataset.step <= step));
      const shown = M.qsa('.s-chain__node.is-shown', cur); M.qsa('.s-chain__node', cur).forEach((n) => n.classList.remove('is-last-shown'));
      if (shown.length) shown[shown.length - 1].classList.add('is-last-shown');
    }
    M.qs('.present__count', el).textContent = `${idx + 1} / ${deck.length}`;
    M.qs('.present__where', el).innerHTML = `<b>MUNDUS</b>${s.ch ? `Capitolo ${s.ch.roman} · ${esc(s.ch.title)}` : esc(M.site.subtitle)}`;
    M.qs('.present__progress i', el).style.width = `${((idx + 1) / deck.length) * 100}%`;
    M.qsa('.present__index button', el).forEach((b) => b.classList.toggle('is-current', s.ch && b.dataset.ch === s.ch.id));
  }
  function go(i, atEnd) { idx = Math.max(0, Math.min(deck.length - 1, i)); step = atEnd ? deck[idx].steps : 0; render(); }
  function next() { if (step < deck[idx].steps) { step++; render(); } else if (idx < deck.length - 1) go(idx + 1); }
  function prev() { if (step > 0) { step--; render(); } else if (idx > 0) go(idx - 1, true); }
  const toggleIndex = (show) => { const ix = M.qs('.present__index', el); ix.hidden = show === undefined ? !ix.hidden : !show; };
  function fullscreen() {
    if (!document.fullscreenElement) { (el.requestFullscreen ? el.requestFullscreen() : Promise.reject()).catch(() => {}); }
    else document.exitFullscreen();
  }

  function onKey(e) {
    if (!el) return;
    const k = e.key;
    if (k === 'Escape') { if (!M.qs('.present__index', el).hidden) toggleIndex(false); else if (!document.fullscreenElement) close(); return; }
    if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(k)) { if (k === 'Enter' && e.target.closest('button')) return; next(); e.preventDefault(); }
    else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(k)) { prev(); e.preventDefault(); }
    else if (k === 'Home') go(0); else if (k === 'End') go(deck.length - 1);
    else if (k === 'f' || k === 'F') fullscreen();
    else if (k === 'i' || k === 'I' || k === 'g' || k === 'G') toggleIndex();
  }

  function open(chapterId) {
    if (el) return;
    deck = build();
    lastFocus = document.activeElement;
    el = document.getElementById('present');
    el.innerHTML = `
      <div class="present__top">
        <div class="present__where"></div>
        <span class="present__count"></span>
        <button type="button" class="btn btn--ghost" data-p="index">Indice</button>
        <button type="button" class="btn btn--ghost" data-p="fs">Schermo intero</button>
        <button type="button" class="btn" data-p="close">Esci</button>
      </div>
      <div class="present__stage" aria-live="polite">${deck.map(slideHTML).join('')}</div>
      <div class="present__bottom">
        <span class="present__hint"><span class="kbd">←</span><span class="kbd">→</span> avanti e indietro · <span class="kbd">F</span> schermo intero · <span class="kbd">I</span> indice · <span class="kbd">Esc</span> esci</span>
        <div class="present__nav"><button type="button" data-p="prev" aria-label="Indietro"><svg viewBox="0 0 16 16"><path d="M10 2L4 8l6 6" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></button><button type="button" data-p="next" aria-label="Avanti"><svg viewBox="0 0 16 16"><path d="M6 2l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></button></div>
        <div class="present__progress"><i></i></div>
      </div>
      <div class="present__index" hidden>
        <button type="button" class="btn btn--ghost" data-p="index">Chiudi</button>
        <h2>Vai al capitolo</h2>
        <ol>${M.chapters.map((c) => `<li><button type="button" data-ch="${c.id}"><b>${c.roman}</b><span>${esc(c.title)}</span><small>${esc(c.period)}</small></button></li>`).join('')}</ol>
      </div>`;
    el.hidden = false; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', 'Modalità presentazione');
    document.documentElement.style.overflow = 'hidden';
    const start = chapterId ? deck.findIndex((s) => s.ch && s.ch.id === chapterId) : 0;
    go(start < 0 ? 0 : start);
    el.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    M.qs('[data-p="next"]', el).focus();
  }
  function onClick(e) {
    const b = e.target.closest('[data-p], [data-ch]');
    if (b) {
      const p = b.dataset.p;
      if (p === 'close') close(); else if (p === 'fs') fullscreen(); else if (p === 'index') toggleIndex();
      else if (p === 'next') next(); else if (p === 'prev') prev();
      else if (b.dataset.ch) { go(deck.findIndex((s) => s.ch && s.ch.id === b.dataset.ch)); toggleIndex(false); }
      return;
    }
    if (e.target.closest('.present__stage') && !e.target.closest('a')) next();
  }
  function close() {
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    document.removeEventListener('keydown', onKey);
    el.removeEventListener('click', onClick);
    el.hidden = true; el.innerHTML = ''; el = null;
    document.documentElement.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  M.present = { open, close, isOpen: () => !!el };
})();

/* Controllo dei dati: esegui con  node tools/check-data.js  dalla cartella del progetto. */
const fs = require('fs'); const path = require('path'); const vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = { window: {}, console }; ctx.window = ctx; vm.createContext(ctx);
const run = (f) => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
['js/core.js', 'data/site.js', 'data/images.js', 'data/places.js', 'data/manifest.js'].forEach(run);
const M = ctx.MUNDUS; M.manifest.forEach(run); M.index();
const errors = []; const warn = (m) => errors.push(m);
const seen = {};
M.events.forEach((e) => { if (seen[e.id]) warn(`evento duplicato: ${e.id}`); seen[e.id] = 1; if (e.place && !M.places[e.place]) warn(`luogo mancante: ${e.place} (${e.id})`); });
const imgUse = (k, where) => { if (k && !M.images[k]) warn(`immagine mancante: ${k} (${where})`); };
const termRe = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
const checkText = (s, where) => { if (typeof s !== 'string') return; let m; while ((m = termRe.exec(s))) { const id = M.slug(m[2] || m[1]); if (!M.glossary[id]) warn(`termine di glossario mancante: ${id} (${where})`); } };
const walk = (o, where) => { if (typeof o === 'string') checkText(o, where); else if (Array.isArray(o)) o.forEach((x) => walk(x, where)); else if (o && typeof o === 'object') Object.values(o).forEach((x) => walk(x, where)); };
M.chapters.forEach((ch) => {
  imgUse(ch.cover, ch.id + ' cover');
  ['study', 'slides', 'events', 'glossary'].forEach((k) => { if (!ch[k]) warn(`${ch.id}: manca ${k}`); });
  walk(ch, ch.id);
  ch.sections.forEach((s) => s.blocks.forEach((b) => {
    if (b.t === 'figure') imgUse(b.img, ch.id + '/' + s.id);
    if (b.t === 'figpair') b.imgs.forEach((k) => imgUse(k, ch.id + '/' + s.id));
    if (b.t === 'compare') { imgUse(b.a.img, b.id); imgUse(b.b.img, b.id); }
    if (['chain', 'compare', 'source', 'stages', 'reading'].includes(b.t) && !b.id) warn(`${ch.id}/${s.id}: blocco ${b.t} senza id`);
  }));
  (ch.slides || []).forEach((sl, i) => { if (sl.ref && !M.blocks[sl.ref]) warn(`${ch.id} slide ${i}: ref mancante ${sl.ref}`); imgUse(sl.img, ch.id + ' slide ' + i); });
  (ch.study.quiz || []).forEach((q, i) => { if (q.ok >= q.o.length) warn(`${ch.id} quiz ${i}: risposta fuori range`); });
});
(M.site.ribbon || []).forEach((id) => { if (!M.eventById[id]) warn(`ribbon: evento mancante ${id}`); });
(M.site.threads || []).forEach((id) => { if (!M.blocks[id]) warn(`threads: nesso mancante ${id}`); });
M.links.forEach((l) => { if (!M.byId[l.from] || !M.byId[l.to]) warn(`link con capitolo mancante: ${l.from} → ${l.to}`); });
// link interni del tipo #/capitolo/id/sezione
const linkRe = /#\/capitolo\/([a-z]+)(?:\/([a-z]+))?/g;
const allText = JSON.stringify(M.chapters) + JSON.stringify(M.links);
let m; while ((m = linkRe.exec(allText))) { const ch = M.byId[m[1]]; if (!ch) warn(`link a capitolo inesistente: ${m[0]}`); else if (m[2] && !ch.sections.some((s) => s.id === m[2]) && m[2] !== 'cronologia') warn(`link a sezione inesistente: ${m[0]}`); }
console.log(`Capitoli: ${M.chapters.length} · eventi: ${M.events.length} · luoghi: ${Object.keys(M.places).length} · immagini: ${Object.keys(M.images).length} · fonti: ${M.sources.length} · confronti: ${M.compares.length} · nessi: ${M.chains.length} · glossario: ${Object.keys(M.glossary).length}`);
console.log(errors.length ? errors.join('\n') : 'Nessun problema trovato.');
process.exitCode = errors.length ? 1 : 0;

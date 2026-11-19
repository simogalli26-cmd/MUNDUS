/* Prepara le coste dell'atlante per l'uso senza Internet.
   Scarica (o legge) land-50m.json del pacchetto world-atlas (Natural Earth, pubblico dominio),
   lo proietta con la stessa proiezione di Mercatore di js/components/atlas.js (K = 10)
   e scrive data/land.js con il tracciato SVG già pronto.

   Uso:  node tools/build_land.js                  (scarica da jsDelivr)
         node tools/build_land.js percorso.json    (usa un file già scaricato) */
const fs = require('fs');
const path = require('path');

const URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json';
const OUT = path.join(__dirname, '..', 'data', 'land.js');
const K = 10, D2R = Math.PI / 180;               // deve coincidere con atlas.js
const px = (lon) => lon * K;
const py = (lat) => -Math.log(Math.tan(Math.PI / 4 + (lat * D2R) / 2)) * K / D2R;
const BOX = { lon: [-40, 75], lat: [10, 75] };   // fuori da qui i punti vengono portati sul bordo

function rings(topo) {
  const tf = topo.transform;
  const arcs = topo.arcs.map((a) => { let x = 0, y = 0; return a.map((p) => { x += p[0]; y += p[1]; return tf ? [x * tf.scale[0] + tf.translate[0], y * tf.scale[1] + tf.translate[1]] : p; }); });
  const arc = (i) => (i >= 0 ? arcs[i] : arcs[~i].slice().reverse());
  const ring = (idx) => { const out = []; idx.forEach((i, k) => { const a = arc(i); out.push(...(k ? a.slice(1) : a)); }); return out; };
  const res = [];
  const geom = (g) => {
    if (g.type === 'GeometryCollection') g.geometries.forEach(geom);
    else if (g.type === 'Polygon') g.arcs.forEach((r) => res.push(ring(r)));
    else if (g.type === 'MultiPolygon') g.arcs.forEach((poly) => poly.forEach((r) => res.push(ring(r))));
  };
  Object.values(topo.objects).forEach(geom);
  return res;
}

function toPath(rs) {
  const clamp = (v, [a, b]) => Math.max(a, Math.min(b, v));
  let d = '', kept = 0;
  rs.forEach((r) => {
    if (!r.some(([lon, lat]) => lon > -25 && lon < 50 && lat > 22 && lat < 66)) return;
    let last = null, s = '';
    r.forEach(([lon, lat]) => {
      const x = px(clamp(lon, BOX.lon)), y = py(clamp(lat, BOX.lat));
      if (last && Math.abs(x - last[0]) < 0.35 && Math.abs(y - last[1]) < 0.35) return;
      s += (s ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1); last = [x, y];
    });
    if (s) { d += s + 'Z'; kept++; }
  });
  return { d, kept };
}

(async () => {
  const src = process.argv[2];
  const topo = src ? JSON.parse(fs.readFileSync(src, 'utf8')) : await (await fetch(URL)).json();
  const { d, kept } = toPath(rings(topo));
  fs.writeFileSync(OUT, `/* Coste per l'atlante: Natural Earth 1:50m (pubblico dominio) dal pacchetto world-atlas,
   già proiettate (Mercatore, K = 10). Generato da tools/build_land.js: non modificare a mano. */
MUNDUS.landPath = '${d}';
`);
  console.log(`data/land.js: ${kept} poligoni, ${(fs.statSync(OUT).size / 1024).toFixed(0)} KB`);
})().catch((e) => { console.error(e); process.exit(1); });

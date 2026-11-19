"""Scarica in assets/img/ le immagini elencate in data/images.js, per usare il sito anche senza Internet.

Uso (dalla cartella del progetto):
    python tools/fetch_images.py            # scarica solo le immagini che mancano
    python tools/fetch_images.py --force    # riscarica tutto

Per ogni immagine crea due file WebP: <chiave>.webp (fino a 1600 px di larghezza)
e <chiave>-s.webp (480 px, per miniature e schede). Richiede Pillow (pip install pillow).
Se un file locale manca, il sito usa automaticamente l'originale su Wikimedia Commons.
"""
import io
import re
import sys
import tempfile
import time
import urllib.error
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data" / "images.js"
OUT = ROOT / "assets" / "img"
UA = "MundusSchoolSite/1.0 (static educational site; image cache)"
FULL_W, SMALL_W = 1600, 480


def entries():
    """Coppie (chiave, url) lette da data/images.js: usa la miniatura 1280 px o l'originale."""
    text = DATA.read_text(encoding="utf-8")
    for m in re.finditer(r"^\s{2}(\w+):\s*\{(.*?)^\s{2}\},", text, re.S | re.M):
        key, body = m.group(1), m.group(2)
        url = re.search(r"(?:thumb|src):\s*'([^']+)'", body)
        if url:
            yield key, url.group(1)


def download(url, tries=6):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code == 429 and i < tries - 1:
                time.sleep(5 * (i + 1))
                continue
            raise


def save(img, width, path):
    im = img.copy()
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    im.save(path, "WEBP", quality=82, method=6)


def main():
    force = "--force" in sys.argv
    OUT.mkdir(parents=True, exist_ok=True)
    done, skipped, failed = 0, 0, []
    with tempfile.TemporaryDirectory() as tmp:
        for key, url in entries():
            full, small = OUT / f"{key}.webp", OUT / f"{key}-s.webp"
            if full.exists() and small.exists() and not force:
                skipped += 1
                continue
            try:
                raw = download(url)
                (Path(tmp) / key).write_bytes(raw)  # copia grezza separata dal progetto
                img = Image.open(io.BytesIO(raw))
                img.load()
                img = img.convert("RGB")
                save(img, FULL_W, full)
                save(img, SMALL_W, small)
                done += 1
                print(f"ok   {key:16} {img.width}x{img.height} -> {full.stat().st_size // 1024} KB + {small.stat().st_size // 1024} KB")
            except Exception as e:  # noqa: BLE001 - si continua con le altre immagini
                failed.append(key)
                print(f"ERR  {key:16} {e}")
            time.sleep(1.2)
    total = sum(p.stat().st_size for p in OUT.glob("*.webp"))
    print(f"\nScaricate: {done} · già presenti: {skipped} · errori: {len(failed)} {failed or ''}")
    print(f"Spazio occupato da assets/img: {total / 1024 / 1024:.1f} MB")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())

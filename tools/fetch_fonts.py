"""Scarica in assets/fonts/ i caratteri del sito (licenza SIL Open Font License) e scrive css/fonts.css.

Uso (dalla cartella del progetto):
    python tools/fetch_fonts.py

Si tengono solo i sottoinsiemi «latin» e «latin-ext», che bastano per l'italiano e il latino.
"""
import re
import sys
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "fonts"
CSS_OUT = ROOT / "css" / "fonts.css"
CSS_URL = ("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600"
           "&family=Inter:wght@400;500;600"
           "&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap")
# un browser moderno riceve i file WOFF2
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"
KEEP = {"latin", "latin-ext"}


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    css = get(CSS_URL).decode("utf-8")
    blocks = re.findall(r"/\*\s*([\w-]+)\s*\*/\s*(@font-face\s*\{.*?\})", css, re.S)
    out, n = [], 0
    for subset, block in blocks:
        if subset not in KEEP:
            continue
        fam = re.search(r"font-family:\s*'([^']+)'", block).group(1)
        style = re.search(r"font-style:\s*(\w+)", block).group(1)
        weight = re.search(r"font-weight:\s*([\d ]+);", block).group(1).strip().replace(" ", "-")
        url = re.search(r"url\((https://[^)]+\.woff2)\)", block).group(1)
        name = f"{fam.lower().replace(' ', '-')}-{style}-{weight}-{subset}.woff2"
        (OUT / name).write_bytes(get(url))
        out.append(f"/* {fam} {style} {weight} · {subset} */\n" + block.replace(url, f"../assets/fonts/{name}"))
        n += 1
        time.sleep(0.2)
    header = ("/* Caratteri del sito, salvati in assets/fonts/ da tools/fetch_fonts.py.\n"
              "   Cormorant Garamond, Inter, Source Serif 4: SIL Open Font License 1.1. */\n")
    CSS_OUT.write_text(header + "\n".join(out) + "\n", encoding="utf-8")
    total = sum(p.stat().st_size for p in OUT.glob("*.woff2"))
    print(f"{n} file di caratteri salvati, {total / 1024:.0f} KB · scritto {CSS_OUT.relative_to(ROOT)}")
    return 0 if n else 1


if __name__ == "__main__":
    sys.exit(main())

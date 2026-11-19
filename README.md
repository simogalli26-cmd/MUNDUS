# MUNDUS — Potere, fede e società nel Medioevo

Atlante storico interattivo per lo studio della storia medievale: dalla lotta per le investiture alla trasformazione dell'Europa medievale.

Otto capitoli, una linea del tempo proporzionale, un atlante con le coste reali, i nessi causa-effetto, i confronti, i documenti originali con traduzione, una modalità presentazione a schermo intero e una modalità studio per il ripasso.

## Come aprirlo

- **Online**: l'indirizzo Vercel collegato a questo repository (vedi sotto).
- **Sul computer, con un server locale** (consigliato): dalla cartella del progetto

  ```
  python -m http.server 8790
  ```

  poi apri `http://localhost:8790` in Chrome o Edge.
- **Doppio clic su `index.html`**: funziona anche così, perché il sito non usa moduli né compilazione.

Il sito funziona **anche senza Internet**: immagini (`assets/img/`, WebP), caratteri (`assets/fonts/`) e coste dell'atlante (`data/land.js`) sono salvati nel progetto. Servono solo per aggiornarli:

| Comando | Che cosa fa |
|---|---|
| `python tools/fetch_images.py` | salva le immagini nuove di `data/images.js` (serve Pillow) |
| `python tools/fetch_fonts.py` | riscarica i caratteri e riscrive `css/fonts.css` |
| `node tools/build_land.js` | ricrea le coste dell'atlante |

Se una copia locale manca, il sito ripiega da solo sulla versione online.

## Come presentarlo

Pulsante **Presenta** in alto a destra, oppure il tasto **P** (da un capitolo parte da quel capitolo).

| Tasto | Che cosa fa |
|---|---|
| `→` `Spazio` `PagGiù` | passo successivo (gli elenchi e i nessi compaiono un elemento alla volta) |
| `←` `PagSu` | passo precedente |
| `F` | schermo intero |
| `I` | indice dei capitoli |
| `Esc` | esci |

## Struttura

```
index.html                 guscio della pagina (testata, area principale, script)
css/                       stile: base, layout, capitolo, componenti, presentazione
js/core.js                 registro dei dati e funzioni comuni (formattazione, immagini)
js/components/             componenti riutilizzabili: blocchi dei capitoli, linea del tempo,
                           atlante, rete dei nessi, presentazione, interfaccia
js/views/                  pagine: home, capitolo, cronologia, atlante, nessi, confronti, fonti, studio, crediti
js/app.js                  avvio e navigazione (indirizzi del tipo #/capitolo/comuni)
data/site.js               titolo, assi, date in evidenza, bibliografia
data/images.js             immagini con didascalia, autore e licenza
data/places.js             luoghi dell'atlante con coordinate
data/links.js              collegamenti tra i capitoli
data/manifest.js           elenco dei file dei capitoli
data/chapters/*.js         un file per capitolo: testi, eventi, glossario, domande, diapositive
tools/check-data.js        controllo automatico dei dati
```

## Come modificare i contenuti

I testi stanno solo nei file di `data/`. Non serve ricompilare nulla: si salva e si ricarica la pagina.

Nei testi si può usare una formattazione minima:

| Scrivi | Ottieni |
|---|---|
| `**parola**` | **grassetto** |
| `*parola*` | *corsivo* |
| `==1077==` | data o concetto evidenziato |
| `[[simonia]]` | termine del glossario con definizione a comparsa |
| `[[vescovi-conti\|vescovo-conte]]` | testo diverso dalla voce del glossario |
| `[testo](#/capitolo/comuni/podestarile)` | collegamento interno |

Ogni capitolo è fatto di sezioni, e ogni sezione di blocchi (`t` è il tipo):
`p` paragrafo (con `side` per la nota a margine), `list`, `focus` (approfondimento), `precise` (nota di precisione),
`concepts` (schede), `figure`, `figpair`, `quote`, `chain` (nesso causa-effetto), `compare` (confronto),
`source` (documento con originale e traduzione), `stages` (fasi), `reading` (lettura guidata di un testo).

### Aggiungere un capitolo

1. Copia un file di `data/chapters/` e cambia `id`, `n`, `roman` e i contenuti.
2. Aggiungi il percorso del file in `data/manifest.js`.
3. Se ti servono immagini o luoghi nuovi, aggiungili in `data/images.js` e `data/places.js`.
4. Controlla i dati: `node tools/check-data.js` (segnala eventi duplicati, immagini, luoghi o termini mancanti).

## Pubblicazione (GitHub + Vercel)

Il sito è statico: Vercel lo pubblica così com'è, senza comandi di build.

1. Crea un repository vuoto su GitHub (per esempio `mundus`).
2. Dalla cartella del progetto:
   ```
   git remote add origin https://github.com/UTENTE/mundus.git
   git push -u origin main
   ```
3. Su [vercel.com](https://vercel.com) → *Add New… → Project* → importa il repository. *Framework preset*: **Other**; nessun comando di build; *Output directory*: lasciare vuoto (la radice).
4. Ogni `git push` sul ramo `main` pubblica automaticamente la nuova versione sullo stesso indirizzo.

## Fonti

Testi originali, bibliografia e licenze delle immagini sono nella pagina **Crediti** del sito (`#/crediti`). Le traduzioni dal latino sono nostre.

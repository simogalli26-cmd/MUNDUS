/* Dati generali del sito. Inserire qui nome e classe dello studente quando si pubblica. */
MUNDUS.setSite({
  title: 'MUNDUS',
  subtitle: 'Potere, fede e società nel Medioevo',
  tagline: 'Dalla lotta per le investiture alla trasformazione dell\'Europa medievale.',
  author: '',            // es. 'Nome Cognome'
  classe: 'Classe III · Liceo scientifico',
  anno: 'a.s. 2026/2027',

  /* Date in evidenza nella fascia della home: id degli eventi definiti nei capitoli */
  ribbon: ['ev-962', 'ev-1059', 'ev-1075', 'ev-1077', 'ev-1122', 'ev-1158', 'ev-1167', 'ev-1176', 'ev-1183', 'ev-1194', 'ev-1209', 'ev-1215', 'ev-1226'],

  /* I tre assi del percorso */
  axes: [
    { k: 'Potere', x: 'Papato e impero si contendono la guida della cristianità: dalle investiture alla teocrazia di Innocenzo III.', ch: ['investiture', 'barbarossa', 'innocenzo'] },
    { k: 'Economia e società', x: 'Più cibo, più persone, più scambi: le città rinascono e si governano da sé.', ch: ['rinascita', 'comuni'] },
    { k: 'Fede e cultura', x: 'Scuole, università, nuove idee sull\'aldilà; e la domanda di un Vangelo vissuto, dentro o fuori la Chiesa.', ch: ['cultura', 'eresie', 'francesco'] },
  ],

  /* I tre nessi principali mostrati in home (id dei blocchi "chain") */
  threads: ['chain-investiture', 'chain-rinascita', 'chain-barbarossa'],

  bibliography: [
    'Bloch, M., *La società feudale*, Einaudi, Torino 1949 (ed. orig. 1939-1940).',
    'Cardini, F., *Il Barbarossa. Vita, trionfi e illusioni di Federico I imperatore*, Mondadori, Milano 1985.',
    'Frugoni, C., *Vita di un uomo: Francesco d\'Assisi*, Einaudi, Torino 1995.',
    'Le Goff, J., *La nascita del Purgatorio*, Einaudi, Torino 1982 (ed. orig. 1981).',
    'Le Goff, J., *La borsa e la vita. Dall\'usuraio al banchiere*, Laterza, Roma-Bari 1987.',
    'Lopez, R. S., *La rivoluzione commerciale del Medioevo*, Einaudi, Torino 1975.',
    'Maire Vigueur, J.-C., *Cavalieri e cittadini. Guerra, conflitti e società nell\'Italia comunale*, il Mulino, Bologna 2004.',
    'Merlo, G. G., *Eretici ed eresie medievali*, il Mulino, Bologna 1989.',
    'Tabacco, G., *Le ideologie politiche del Medioevo*, Einaudi, Torino 2000.',
  ],
  primarySources: [
    'Gregorio VII, *Registrum*, ed. E. Caspar, MGH, Epistolae selectae II, Berlino 1920-1923 (Dictatus Papae: II, 55a; scomunica di Enrico IV: III, 10a).',
    'Concordato di Worms (1122), in MGH, *Constitutiones et acta publica imperatorum et regum*, I.',
    'Ottone di Frisinga e Rahewino, *Gesta Friderici I imperatoris*, MGH, SS rer. Germ. 46.',
    'Innocenzo III, *Registrum*, I, 401 (lettera *Sicut universitatis conditor*, 1198).',
    'Rodolfo il Glabro, *Historiarum libri quinque*, III, 4.',
    'Francesco d\'Assisi, *Testamento*, *Regola bollata*, *De vera et perfecta laetitia*, *Cantico di frate Sole*, nell\'edizione critica di C. Paolazzi, *Francisci Assisiensis Scripta*, Grottaferrata 2009.',
    'Tommaso da Celano, *Vita prima sancti Francisci*.',
    'Dante Alighieri, *Commedia*, ed. G. Petrocchi (*Paradiso* XI; *Inferno* XI).',
  ],
  translationNote: 'Le traduzioni dei testi latini sono nostre, condotte sugli originali e volutamente vicine alla lettera.',
});

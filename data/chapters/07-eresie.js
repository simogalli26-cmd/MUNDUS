/* Capitolo VII — Le eresie e la risposta della Chiesa. */
MUNDUS.chapter({
  id: 'eresie', n: 7, roman: 'VII',
  title: 'Le eresie',
  kicker: 'Valdesi, catari e la risposta della Chiesa',
  period: '1173 – 1252', span: [1173, 1252],
  axis: 'Fede e cultura',
  cover: 'catari',
  hook: 'Il desiderio di un Vangelo vissuto può portare alla santità o all\'eresia: dipende dal rapporto con l\'autorità.',
  question: 'Perché Pietro Valdo diventa un eretico e Francesco d\'Assisi un santo?',
  lead: 'Nel XII secolo molti laici chiedono una Chiesa povera e un Vangelo vissuto alla lettera. Alcuni movimenti restano dentro la Chiesa, altri ne escono, come i valdesi; altri ancora, come i catari, professano una fede diversa. La risposta della Chiesa va dalla crociata all\'Inquisizione, ma comprende anche la capacità di accogliere: è la differenza tra Valdo e Francesco.',

  sections: [
    {
      id: 'eresia', title: 'Che cos\'è un\'eresia',
      blocks: [
        { t: 'p', drop: true, x: 'La parola [[eresia]] viene dal greco *háiresis*, che significa «scelta». Per la Chiesa medievale è eretico il battezzato che sceglie di sostenere una dottrina contraria all\'insegnamento della Chiesa e vi persiste anche dopo essere stato corretto. Conta proprio l\'ostinazione: chi sbaglia e accetta la correzione non è un eretico.' },
        { t: 'p', x: 'Perché le eresie si diffondono proprio nel XII secolo? Le ragioni si intrecciano.' },
        { t: 'list', items: [
          '**La ricchezza del clero**, che contrasta con il Vangelo, proprio mentre la riforma gregoriana aveva insegnato ai laici a giudicare i preti indegni (lo aveva fatto la Pataria, con l\'appoggio del papa).',
          '**Le città**, dove i laici sono più istruiti, discutono, leggono, e vogliono vivere la fede in prima persona, non solo attraverso i chierici.',
          '**L\'economia del denaro**, che rende la povertà volontaria un gesto fortissimo, quasi una protesta.',
          '**L\'ideale della vita apostolica**: vivere come gli apostoli, poveri e itineranti, predicando.',
        ] },
        { t: 'p', x: 'Il confine tra riforma ed eresia, all\'inizio, era sottile. Lo stesso desiderio poteva portare dentro o fuori la Chiesa: lo dimostra il caso di [Arnaldo da Brescia](#/capitolo/barbarossa/discesa), e lo dimostrerà il confronto tra Valdo e Francesco.' },
      ],
    },
    {
      id: 'valdesi', title: 'Pietro Valdo e i Poveri di Lione',
      blocks: [
        { t: 'p', x: 'Verso il ==1173== **Valdo** (o Valdès), un ricco mercante di Lione, rimane colpito dalla storia di sant\'Alessio, che aveva lasciato tutto per vivere in povertà, ascoltata da un giullare. Consulta un maestro di teologia, che gli risponde con le parole di Gesù al giovane ricco: «Se vuoi essere perfetto, va\', vendi ciò che hai e dallo ai poveri» (Matteo 19, 21). Valdo provvede alla moglie e alle figlie, distribuisce il resto ai poveri, fa tradurre in lingua volgare parti della Bibbia e comincia a predicare per le strade. Intorno a lui si raccoglie un gruppo di seguaci: i **Poveri di Lione**.', side: { k: '1173', x: 'Conversione di Valdo a Lione' } },
        { t: 'figure', img: 'valdo', size: 'inset' },
        { t: 'p', x: 'Valdo non voleva separarsi dalla Chiesa. Nel 1179 i suoi seguaci si presentarono al **III Concilio Lateranense**: papa Alessandro III approvò la loro scelta di povertà, ma stabilì che potessero predicare solo con il permesso del clero locale. Nel 1180 Valdo sottoscrisse anche una professione di fede perfettamente ortodossa. Ma quando l\'arcivescovo di Lione gli vietò di predicare, Valdo rifiutò di obbedire, citando gli Atti degli apostoli: «Bisogna obbedire a Dio piuttosto che agli uomini» (Atti 5, 29).' },
        { t: 'p', x: 'Nel ==1184==, a Verona, papa Lucio III, alla presenza del Barbarossa, emanò la decretale **Ad abolendam**, che condannava insieme catari, Poveri di Lione, Umiliati, arnaldisti e altri gruppi. Da quel momento i valdesi sono eretici. Col tempo la loro dottrina si allontanò davvero da quella cattolica: predicazione dei laici, comprese le donne; rifiuto del giuramento, della pena di morte, del Purgatorio e delle preghiere per i morti. Perseguitati, sopravvissero nelle valli alpine del Piemonte e nel 1532 aderirono alla Riforma protestante. Esistono ancora oggi.', side: { k: '1184', x: 'Decretale Ad abolendam: i valdesi condannati' } },
        { t: 'precise', items: [
          'Valdo all\'inizio **non era un eretico** nella dottrina: lo diventa per la **disobbedienza** sul divieto di predicare. Le differenze dottrinali dei valdesi si sviluppano soprattutto dopo la condanna del 1184.',
        ] },
      ],
    },
    {
      id: 'catari', title: 'I catari e il dualismo',
      blocks: [
        { t: 'p', x: 'I **catari** (dal greco *katharói*, «i puri») sono un caso diverso: non chiedevano solo una Chiesa più povera, ma credevano in qualcosa di profondamente diverso dal cristianesimo cattolico. Le loro idee, arrivate dall\'Oriente attraverso i bogomili dei Balcani, si diffusero dalla metà del XII secolo soprattutto in **Linguadoca** (la regione di Albi e Tolosa, da cui il nome di **albigesi**) e nell\'**Italia settentrionale**.' },
        { t: 'concepts', items: [
          { k: 'Dualismo', s: 'il principio', x: 'Esistono due principi: un Dio buono, creatore degli spiriti, e un principio del male, creatore del mondo materiale. La materia e il corpo sono una prigione dell\'anima.' },
          { k: 'Conseguenze', s: 'la dottrina', x: 'Cristo non avrebbe avuto un vero corpo; si rifiutano i sacramenti, la Chiesa e i suoi beni, il giuramento, il matrimonio e la procreazione, che imprigionano altre anime nella carne.' },
          { k: 'Perfetti e credenti', s: 'la comunità', x: 'I **perfetti** vivono in castità e povertà, non mangiano carne, uova e formaggio. I **credenti** vivono una vita normale e sperano di ricevere il consolamentum prima di morire.' },
          { k: 'Consolamentum', s: 'l\'unico rito', x: 'Imposizione delle mani e del Vangelo di Giovanni sul capo: cancella i peccati e rende «perfetti». Si riceve una sola volta; peccare dopo significa perderlo.' },
          { k: 'Endura', s: 'una pratica estrema', x: 'Alcuni, ricevuto il consolamentum sul letto di morte, rifiutavano il cibo fino alla fine per non ricadere nel peccato. È attestata soprattutto nella fase tarda del catarismo, non era una regola per tutti.' },
        ] },
        { t: 'p', x: 'Il catarismo attirava perché i perfetti offrivano un esempio di vita coerente, e perché in Linguadoca era protetto da signori potenti, come il conte di Tolosa, che vedevano anche il vantaggio di sottrarsi all\'influenza dei vescovi.' },
      ],
    },
    {
      id: 'albigesi', title: 'La crociata contro gli Albigesi',
      blocks: [
        { t: 'p', x: 'Innocenzo III tentò prima la via della predicazione, inviando legati e monaci cistercensi; tra i predicatori c\'era anche un canonico spagnolo, **Domenico di Guzmán**. Nel 1208 il legato papale Pietro di Castelnau fu ucciso presso Saint-Gilles da un uomo del seguito del conte di Tolosa, Raimondo VI. Il papa bandì allora una **crociata**: per la prima volta una crociata era diretta contro cristiani, in Europa, con le stesse indulgenze di quella per la Terra Santa.', side: { k: '1209', x: 'Inizia la crociata contro gli Albigesi' } },
        { t: 'p', x: 'Nel luglio ==1209== i crociati, in gran parte cavalieri del Nord della Francia, presero **Béziers** e ne massacrarono gli abitanti, cattolici e catari insieme. Ad agosto si arrese **Carcassonne**, i cui abitanti furono costretti ad andarsene. La guerra, guidata da **Simone di Montfort**, durò vent\'anni: nel 1213 a Muret morì il re d\'Aragona, accorso in aiuto del conte di Tolosa. Con il trattato di Parigi del 1229 gran parte della Linguadoca passò sotto il controllo della corona francese. L\'ultima roccaforte catara, **Montségur**, cadde nel 1244.' },
        { t: 'figure', img: 'catari', size: 'inset' },
        { t: 'precise', items: [
          'La frase «Uccideteli tutti, Dio riconoscerà i suoi», attribuita al legato Arnaldo Amalrico durante il sacco di Béziers, è riportata da un monaco tedesco, Cesario di Heisterbach, una decina d\'anni dopo: non è certo che sia stata pronunciata. Il massacro invece è certo.',
          'La crociata ebbe anche un esito **politico**: i baroni del Nord e la monarchia francese estesero il loro potere sul Sud.',
        ] },
      ],
    },
    {
      id: 'laterano', title: 'Il IV Concilio Lateranense (1215)',
      blocks: [
        { t: 'p', x: 'Nel novembre ==1215== Innocenzo III riunì a Roma il **IV Concilio Lateranense**, con oltre quattrocento vescovi e centinaia di abati e rappresentanti dei sovrani. Le sue decisioni definiscono la vita della Chiesa per secoli.', side: { k: '1215', x: 'IV Concilio Lateranense' } },
        { t: 'list', items: [
          '**La fede**: una professione di fede contro i catari, con la dottrina della transustanziazione (nell\'eucaristia il pane e il vino diventano corpo e sangue di Cristo).',
          '**Gli eretici**: i vescovi devono cercarli nelle loro diocesi; i signori laici devono espellerli, pena la perdita delle terre.',
          '**I fedeli**: ogni cristiano deve confessarsi e comunicarsi almeno una volta all\'anno, a Pasqua.',
          '**Gli ordini religiosi**: è vietato fondarne di nuovi; chi vuole farlo deve adottare una regola già approvata.',
          '**Gli ebrei e i musulmani** devono portare segni di riconoscimento sulle vesti.',
          '**I chierici** non possono più partecipare alle ordalie, i «giudizi di Dio».',
        ] },
        { t: 'p', x: 'Il concilio colpisce gli eretici, ma cerca anche di togliere loro argomenti: un clero più istruito, una predicazione migliore, una vita sacramentale regolare per tutti. Il divieto di nuovi ordini spiega perché l\'approvazione dei frati minori, data a voce nel 1209, sarà così preziosa.' },
      ],
    },
    {
      id: 'inquisizione', title: 'La nascita dell\'Inquisizione',
      blocks: [
        { t: 'p', x: 'Già la decretale *Ad abolendam* (1184) ordinava ai vescovi di «inquisire», cioè di indagare sugli eretici nelle loro diocesi: è l\'**Inquisizione episcopale**. Ma i vescovi spesso non avevano i mezzi o la volontà di farlo. Tra il 1231 e il 1233 papa **Gregorio IX** affidò il compito a giudici speciali che dipendevano direttamente da lui, scelti soprattutto tra i **domenicani**, l\'Ordine dei Predicatori fondato da Domenico e approvato nel 1216, e più tardi anche tra i francescani. Nasce l\'**Inquisizione pontificia**, o medievale.', side: { k: '1231', x: 'Gregorio IX: inizia l\'Inquisizione pontificia' } },
        { t: 'p', x: 'Il procedimento era *inquisitorio*: non c\'era bisogno di un accusatore, era il giudice a indagare d\'ufficio, e i nomi dei testimoni potevano restare segreti. A chi abiurava si imponevano penitenze (preghiere, pellegrinaggi, croci cucite sulle vesti, a volte il carcere). Gli eretici ostinati o ricaduti venivano consegnati al **braccio secolare**, cioè all\'autorità civile, che li condannava al rogo. Nel 1252, con la bolla *Ad extirpanda*, Innocenzo IV autorizzò anche l\'uso della tortura.' },
        { t: 'precise', items: [
          'L\'Inquisizione **medievale** (dal 1231-1233) non va confusa con l\'Inquisizione **spagnola**, istituita nel 1478 e controllata dai sovrani di Spagna, né con il Sant\'Uffizio romano del 1542.',
        ] },
      ],
    },
    {
      id: 'confronto', title: 'Pietro Valdo e Francesco d\'Assisi',
      blocks: [
        { t: 'p', x: 'Il confronto più istruttivo del capitolo. Valdo e Francesco hanno tantissimo in comune: vengono dal mondo dei mercanti, scelgono la povertà dopo aver ascoltato il Vangelo, predicano da laici, raccolgono seguaci. Eppure uno finisce condannato come eretico, l\'altro canonizzato due anni dopo la morte. La differenza non sta nell\'ideale, ma nel **rapporto con l\'autorità della Chiesa**.' },
        { t: 'compare', id: 'cmp-valdo-francesco', title: 'Stessa povertà, due strade',
          a: { name: 'Pietro Valdo', sub: 'Lione, conversione verso il 1173', img: 'valdo' },
          b: { name: 'Francesco d\'Assisi', sub: 'Assisi, conversione 1205-1206', img: 'f_regola' },
          rows: [
            { k: 'Origine', a: 'Ricco mercante di Lione.', b: 'Figlio di un ricco mercante di stoffe di Assisi.' },
            { k: 'La scelta', a: 'Ascolta la storia di sant\'Alessio e Matteo 19, 21; dà i beni ai poveri, dopo aver provveduto alla famiglia.', b: 'L\'incontro con il lebbroso, il crocifisso di San Damiano; rinuncia all\'eredità davanti al vescovo.' },
            { k: 'Predicazione', a: 'Rivendica il diritto dei laici di predicare il Vangelo, anche senza permesso.', b: 'Predica la penitenza, un\'esortazione morale consentita ai laici, con il permesso del papa.' },
            { k: 'Davanti al divieto', a: 'Quando l\'arcivescovo glielo vieta, disobbedisce: «Bisogna obbedire a Dio piuttosto che agli uomini».', b: 'Nel Testamento scrive che non vuole predicare in una parrocchia contro la volontà del sacerdote, nemmeno se povero e peccatore.' },
            { k: 'Il papa', a: 'Alessandro III approva la povertà ma limita la predicazione (1179); Lucio III lo condanna (1184).', b: 'Innocenzo III approva a voce la forma di vita (1209); Onorio III la Regola con una bolla (1223).' },
            { k: 'Esito', a: 'Condanna, persecuzione, sopravvivenza nelle valli alpine; adesione alla Riforma nel 1532.', b: 'Un ordine diffuso in tutta Europa; Francesco è canonizzato nel 1228.' },
          ],
          end: 'Valdo mette la propria coscienza e il Vangelo **al di sopra** dell\'autorità dei vescovi; Francesco cerca nella Chiesa **la conferma** della propria scelta e le promette obbedienza. Ma è cambiata anche la Chiesa: Innocenzo III capì che respingere tutti i movimenti di povertà li avrebbe spinti verso l\'eresia, e preferì accoglierli e guidarli, come fece con gli Umiliati nel 1201 e con i frati di Francesco nel 1209.' },
        { t: 'chain', id: 'chain-eresie', title: 'Dentro o fuori la Chiesa', intro: 'Lo stesso punto di partenza, due esiti opposti.',
          nodes: [
            { k: 'Chiesa ricca', y: 'XII secolo', x: 'Vescovi e abati signori, potenti e spesso lontani dal Vangelo.', why: 'Molti laici cercano una fede più coerente.' },
            { k: 'Vita apostolica', y: '', x: 'Povertà volontaria, predicazione itinerante, Vangelo preso alla lettera.', why: 'Chi predica senza essere chierico entra in un terreno riservato al clero.' },
            { k: 'La richiesta di approvazione', y: '1179 / 1209', x: 'Valdo al Laterano III, Francesco da Innocenzo III: entrambi chiedono il permesso.', why: 'La risposta dipende dall\'obbedienza del movimento e dalla politica del papa.' },
            { k: 'Obbedienza o disobbedienza', y: '', x: 'Valdo predica nonostante il divieto; Francesco si sottomette ai vescovi e al papa.', why: 'La disobbedienza trasforma una scelta di vita in un\'eresia.' },
            { k: 'Eresia o ordine', y: '1184 / 1223', x: 'Valdesi condannati con Ad abolendam; frati minori approvati con la Regola bollata.', why: '' },
          ] },
        { t: 'source', id: 'src-atti', title: 'Due frasi a confronto', author: 'Atti degli apostoli e Testamento di Francesco', date: 'I secolo / 1226',
          it: ['I valdesi giustificavano la loro disobbedienza con le parole di Pietro davanti al sinedrio: «Bisogna obbedire a Dio piuttosto che agli uomini» (Atti 5, 29).', 'Francesco, nel Testamento: «E se avessi tanta sapienza quanta ne ebbe Salomone e trovassi dei poverelli sacerdoti di questo mondo, nelle parrocchie dove dimorano non voglio predicare contro la loro volontà».'],
          orig: ['Oboedire oportet Deo magis quam hominibus.', 'Et si haberem tantam sapientiam, quantam Salomon habuit, et invenirem pauperculos sacerdotes huius saeculi, in parochiis quibus morantur, nolo praedicare ultra voluntatem ipsorum.'],
          ref: 'Atti 5, 29 (Vulgata); Francesco d\'Assisi, *Testamento*, 7.',
          note: 'Due citazioni, due atteggiamenti verso l\'autorità. Francesco non nega che i preti possano essere indegni: sceglie comunque di non predicare contro di loro. È la scelta che lo tiene dentro la Chiesa.' },
      ],
    },
  ],

  events: [
    { id: 'ev-1173', y: 1173, date: '1173 ca.', title: 'La conversione di Valdo', place: 'lione', people: ['Pietro Valdo'], x: 'Il mercante lionese lascia i suoi beni, fa tradurre il Vangelo in volgare e comincia a predicare.' },
    { id: 'ev-1179v', y: 1179, m: 3, date: 'marzo 1179', title: 'Valdo al Laterano III', place: 'roma', people: ['Alessandro III', 'Pietro Valdo'], x: 'Il papa approva la povertà dei Poveri di Lione ma permette la predicazione solo con il consenso del clero.' },
    { id: 'ev-1184', y: 1184, date: '4 novembre 1184', title: 'Decretale Ad abolendam', place: 'verona', people: ['Lucio III', 'Federico I'], major: true, x: 'Papa e imperatore condannano insieme catari, valdesi, Umiliati e altri movimenti; i vescovi devono indagare sugli eretici.' },
    { id: 'ev-1201', y: 1201, date: '1201', title: 'Gli Umiliati riconosciuti', place: 'milano', people: ['Innocenzo III'], x: 'Il movimento di laici lavoratori della lana, condannato nel 1184, viene riaccolto nella Chiesa: la nuova politica di Innocenzo III.' },
    { id: 'ev-1208', y: 1208, date: '14 gennaio 1208', title: 'Ucciso il legato papale', place: 'saintgilles', people: ['Pietro di Castelnau', 'Raimondo VI di Tolosa'], x: 'L\'assassinio del legato spinge Innocenzo III a bandire la crociata.' },
    { id: 'ev-1209b', y: 1209, m: 7, date: '22 luglio 1209', title: 'Il massacro di Béziers', place: 'beziers', people: ['Arnaldo Amalrico'], major: true, x: 'I crociati prendono la città e ne uccidono gli abitanti, cattolici e catari.' },
    { id: 'ev-1209c', y: 1209, m: 8, date: '15 agosto 1209', title: 'Resa di Carcassonne', place: 'carcassonne', people: ['Simone di Montfort'], x: 'Gli abitanti sono costretti ad andarsene; Simone di Montfort riceve il comando e le terre conquistate.' },
    { id: 'ev-1213', y: 1213, date: '12 settembre 1213', title: 'Battaglia di Muret', place: 'muret', people: ['Simone di Montfort', 'Pietro II d\'Aragona'], x: 'Muore il re d\'Aragona, alleato del conte di Tolosa: la crociata vince sul campo.' },
    { id: 'ev-1215', y: 1215, date: 'novembre 1215', title: 'IV Concilio Lateranense', place: 'roma', people: ['Innocenzo III'], major: true, x: 'Transustanziazione, confessione annuale, lotta agli eretici, divieto di nuovi ordini religiosi.' },
    { id: 'ev-1216d', y: 1216, date: '22 dicembre 1216', title: 'L\'Ordine dei Predicatori', place: 'tolosa', people: ['Domenico di Guzmán', 'Onorio III'], x: 'Approvato l\'ordine di Domenico, nato dalla predicazione contro i catari: i domenicani saranno gli inquisitori.' },
    { id: 'ev-1229', y: 1229, date: 'aprile 1229', title: 'Trattato di Parigi', place: 'parigi', people: ['Raimondo VII di Tolosa'], x: 'Fine della crociata: la Linguadoca entra nell\'orbita della corona francese.' },
    { id: 'ev-1231i', y: 1231, m: 2, date: '1231-1233', title: 'L\'Inquisizione pontificia', place: 'roma', people: ['Gregorio IX'], major: true, x: 'Il papa affida la lotta all\'eresia a giudici che dipendono da lui, soprattutto domenicani.' },
    { id: 'ev-1244', y: 1244, date: 'marzo 1244', title: 'Caduta di Montségur', place: 'montsegur', people: [], x: 'L\'ultima roccaforte catara si arrende; circa duecento perfetti vengono bruciati.' },
    { id: 'ev-1252x', y: 1252, m: 5, date: '15 maggio 1252', title: 'Ad extirpanda', place: 'roma', people: ['Innocenzo IV'], x: 'La bolla autorizza l\'uso della tortura nei processi per eresia.' },
  ],

  glossary: [
    { term: 'Eresia', def: 'Dal greco «scelta»: dottrina contraria all\'insegnamento della Chiesa, sostenuta con ostinazione da un battezzato.' },
    { term: 'Valdesi', def: 'Seguaci di Pietro Valdo, i «Poveri di Lione»: povertà e predicazione laica; condannati nel 1184.' },
    { term: 'Catari', def: 'Dal greco «puri»: eretici dualisti, diffusi in Linguadoca (albigesi) e nell\'Italia settentrionale.' },
    { term: 'Dualismo', def: 'Dottrina secondo cui esistono due principi opposti, il bene (spirito) e il male (materia).' },
    { term: 'Consolamentum', def: 'L\'unico rito dei catari: imposizione delle mani e del Vangelo di Giovanni, che rende «perfetti».' },
    { term: 'Endura', def: 'Digiuno fino alla morte praticato da alcuni catari dopo aver ricevuto il consolamentum, soprattutto nella fase tarda del movimento.' },
    { term: 'Perfetti', def: 'Catari che avevano ricevuto il consolamentum e vivevano in totale ascesi; guidavano la comunità.' },
    { term: 'Crociata', def: 'Spedizione armata indetta dal papa con indulgenze spirituali; nel 1209 per la prima volta contro cristiani in Europa.' },
    { term: 'Inquisizione', def: 'Tribunale ecclesiastico contro l\'eresia; quella pontificia nasce tra il 1231 e il 1233.' },
    { term: 'Braccio secolare', def: 'L\'autorità civile, a cui l\'Inquisizione consegnava gli eretici ostinati per la condanna a morte.' },
  ],

  study: {
    questions: [
      { q: 'Che cos\'è un\'eresia e perché si diffondono nel XII secolo?', a: ['Dottrina contraria all\'insegnamento della Chiesa, sostenuta con ostinazione.', 'Ricchezza del clero, città e laici istruiti, economia del denaro, ideale della vita apostolica.'] },
      { q: 'Racconta la vicenda di Pietro Valdo.', a: ['Mercante di Lione, conversione verso il 1173.', 'Laterano III (1179): povertà approvata, predicazione solo con permesso.', 'Disobbedisce (Atti 5, 29); condannato con Ad abolendam (1184).', 'Valli alpine; Riforma nel 1532.'] },
      { q: 'Quali sono le idee principali dei catari?', a: ['Dualismo: Dio buono degli spiriti, principio malvagio della materia.', 'Rifiuto di sacramenti, Chiesa, giuramento, matrimonio.', 'Perfetti e credenti; consolamentum; endura (fase tarda).'] },
      { q: 'Come si svolge la crociata contro gli Albigesi e che conseguenze ha?', a: ['1208 uccisione del legato; 1209 Béziers e Carcassonne.', 'Simone di Montfort; Muret 1213; Parigi 1229; Montségur 1244.', 'Esito politico: la corona francese nel Sud.'] },
      { q: 'Quali decisioni prende il IV Concilio Lateranense?', a: ['Transustanziazione.', 'Confessione e comunione annuale.', 'Lotta agli eretici; divieto di nuovi ordini.', 'Segni distintivi per ebrei e musulmani; no alle ordalie per i chierici.'] },
      { q: 'Confronta Pietro Valdo e Francesco d\'Assisi.', a: ['Simili: mercanti, povertà, predicazione laica, seguaci.', 'Diversi: Valdo disobbedisce al divieto; Francesco si sottomette (Testamento).', 'Esiti: eresia (1184) / ordine approvato (1209, 1223).', 'Anche la Chiesa cambia: Innocenzo III accoglie.'] },
    ],
    quiz: [
      { q: 'Perché Valdo viene condannato?', o: ['Perché era un cataro dualista', 'Perché continua a predicare nonostante il divieto', 'Perché si rifiuta di donare i beni', 'Perché uccide un legato papale'], ok: 1, why: 'La condanna nasce dalla disobbedienza sul divieto di predicare senza permesso.' },
      { q: 'Che cos\'è il consolamentum?', o: ['Il giuramento dei valdesi', 'L\'unico rito dei catari, che rende perfetti', 'Una pena dell\'Inquisizione', 'Un canone del Laterano IV'], ok: 1, why: 'Imposizione delle mani e del Vangelo di Giovanni: cancella i peccati e rende perfetti.' },
      { q: 'Quando nasce l\'Inquisizione pontificia?', o: ['1184', '1209', '1231-1233', '1478'], ok: 2, why: 'Con Gregorio IX. Nel 1184 c\'è quella episcopale; nel 1478 nasce l\'Inquisizione spagnola.' },
      { q: 'Il IV Concilio Lateranense (1215) stabilisce tra l\'altro:', o: ['L\'elezione del papa da parte dei cardinali', 'La confessione almeno annuale per tutti i fedeli', 'L\'approvazione della Regola francescana', 'La fine della lotta per le investiture'], ok: 1, why: 'Il canone Omnis utriusque sexus impone confessione e comunione pasquale annuali.' },
    ],
  },

  slides: [
    { t: 'chapter' },
    { t: 'points', title: 'Valdesi e catari', img: 'catari', pts: [
      ['Valdesi', 'povertà e predicazione laica; eretici per disobbedienza (1184).'],
      ['Catari', 'dualismo: la materia è male; consolamentum, perfetti e credenti.'],
      ['Risposta', 'crociata (1209), Laterano IV (1215), Inquisizione (1231).'],
    ] },
    { t: 'compare', ref: 'cmp-valdo-francesco', rows: [2, 3, 5] },
    { t: 'chain', ref: 'chain-eresie' },
    { t: 'quote', x: 'Nelle parrocchie dove dimorano non voglio predicare contro la loro volontà.', o: 'In parochiis quibus morantur, nolo praedicare ultra voluntatem ipsorum.', cite: 'Francesco d\'Assisi, Testamento · 1226' },
  ],
});

/* Capitolo VI — Cultura e mentalità medievale. */
MUNDUS.chapter({
  id: 'cultura', n: 6, roman: 'VI',
  title: 'Cultura e mentalità',
  kicker: 'Scuole, università, Purgatorio, usura',
  period: 'XI – XIII secolo', span: [998, 1303],
  axis: 'Fede e cultura',
  cover: 'universita',
  hook: 'Le città hanno bisogno di chi sa leggere, contare e giudicare; i mercanti, di una speranza per l\'aldilà.',
  question: 'Che cosa hanno in comune un\'aula di Bologna, il Purgatorio di Dante e un banco di cambiavalute?',
  lead: 'La rinascita economica e urbana cambia anche il modo di studiare e di pensare. Si moltiplicano le scuole, nascono le università, si trasforma perfino l\'immagine dell\'aldilà. Al centro di molti di questi cambiamenti c\'è una figura nuova: il mercante, che ha bisogno di sapere e che, maneggiando denaro, si pone il problema della propria salvezza.',

  sections: [
    {
      id: 'scuole', title: 'Dalle scuole dei monasteri alle scuole cittadine',
      blocks: [
        { t: 'p', drop: true, x: 'Nell\'alto Medioevo l\'istruzione era quasi solo nei **monasteri**, che formavano i futuri monaci. Dall\'XI secolo diventano più importanti le **scuole episcopali**, presso le cattedrali delle città (Chartres, Laon, Parigi, Reims), che formano il clero ma accolgono anche altri studenti. Nel XII secolo, accanto ad esse, compaiono maestri privati che insegnano dietro compenso a chi vuole ascoltarli: il più famoso è Pietro Abelardo, a Parigi, che riempiva le sue lezioni di studenti venuti da tutta Europa.' },
        { t: 'p', x: 'Nelle città italiane la richiesta di istruzione è anche pratica e laica. Il Comune ha bisogno di giudici e soprattutto di **notai**, che redigono contratti, testamenti, atti pubblici; il mercante deve scrivere lettere, tenere i conti, calcolare cambi e interessi. Nel ==1202== il pisano **Leonardo Fibonacci** scrive il *Liber abaci*, che spiega ai mercanti l\'uso delle cifre indo-arabiche e dello zero, imparate da ragazzo a Bugia, in Nord Africa, dove il padre lavorava per la dogana di Pisa. Da qui nascono le **scuole d\'abaco**, dove i figli dei mercanti imparano l\'aritmetica commerciale.', side: { k: '1202', x: 'Fibonacci, Liber abaci' } },
        { t: 'precise', items: [
          'Le cifre «arabe» sono in realtà di origine **indiana**: gli Arabi le adottarono e le trasmisero all\'Europa. Fibonacci le chiama infatti *figurae Indorum*, le cifre degli Indiani.',
        ] },
      ],
    },
    {
      id: 'arti', title: 'Il trivio e il quadrivio',
      blocks: [
        { t: 'p', x: 'Il programma di base di ogni scuola erano le sette [[arti liberali]], cioè le discipline degne di un uomo libero, contrapposte alle arti «meccaniche» dei mestieri manuali. L\'ordine viene dalla tarda antichità (Marziano Capella, Boezio, Cassiodoro). Si dividevano in due gruppi: le arti della parola, il **trivio**, e le arti del numero, il **quadrivio**. Erano la preparazione necessaria per gli studi superiori di teologia, diritto e medicina.' },
        { t: 'concepts', items: [
          { k: 'Grammatica', s: 'trivio', x: 'Il latino, letto sui classici e sui grammatici antichi (Donato, Prisciano). Senza grammatica non si accede a nessun testo.' },
          { k: 'Retorica', s: 'trivio', x: 'L\'arte di parlare e scrivere. A Bologna diventa *ars dictandi*, la tecnica di scrivere lettere e atti: fondamentale per i notai.' },
          { k: 'Dialettica', s: 'trivio', x: 'La logica: come si costruisce un ragionamento corretto e come si confuta quello dell\'avversario. Base del metodo scolastico.' },
          { k: 'Aritmetica', s: 'quadrivio', x: 'La teoria dei numeri e il calcolo, compreso il *computus* per stabilire la data della Pasqua.' },
          { k: 'Geometria', s: 'quadrivio', x: 'Euclide, le misure, ma anche la descrizione della terra.' },
          { k: 'Musica', s: 'quadrivio', x: 'Non il canto, ma la teoria matematica dei rapporti tra i suoni: l\'armonia come proporzione numerica.' },
          { k: 'Astronomia', s: 'quadrivio', x: 'Il moto degli astri, il calendario, la misura del tempo.' },
        ] },
        { t: 'p', x: 'Visto da un liceo scientifico, il quadrivio è sorprendente: per l\'uomo medievale la musica e l\'astronomia stavano accanto all\'aritmetica e alla geometria perché erano tutte scienze dei **numeri e delle proporzioni**. L\'universo stesso era pensato come un ordine misurabile.' },
      ],
    },
    {
      id: 'universita', title: 'La nascita delle università',
      blocks: [
        { t: 'p', x: 'Tra la fine del XII e l\'inizio del XIII secolo, in alcune città, maestri e studenti si organizzano in [[corporazioni|universitas]], proprio come gli artigiani nelle Arti. La parola *universitas* significava all\'inizio questo: l\'insieme, la comunità di chi studia o insegna, con propri statuti, propri capi e il diritto di difendere i propri membri. Il luogo degli studi si chiamava *studium generale*.' },
        { t: 'figure', img: 'universita', size: 'wide' },
        { t: 'list', items: [
          '**Bologna**: la più antica, specializzata nel diritto. È un\'università di **studenti**: sono loro, riuniti per provenienza in «nazioni», a scegliere e pagare i maestri. Qui insegnano i glossatori del diritto romano, da Irnerio ai quattro dottori di [Roncaglia](#/capitolo/barbarossa/roncaglia); qui verso il 1140 Graziano raccoglie il diritto della Chiesa nel *Decretum*.',
          '**Parigi**: università di **maestri**, celebre per la teologia. Riceve privilegi dal re Filippo Augusto (1200) e la protezione del papa con la bolla *Parens scientiarum* (1231).',
          '**Oxford** nasce alla fine del XII secolo sul modello di Parigi; **Padova** nel 1222, quando un gruppo di maestri e studenti lascia Bologna.',
          '**Napoli** nel 1224 è fondata da **Federico II** per formare i funzionari del suo Regno: la prima università voluta da un sovrano. A **Salerno** e a Montpellier si studia soprattutto la medicina.',
        ] },
        { t: 'focus', title: 'Perché proprio adesso?', reasons: [
          '**Le città** concentrano studenti, denaro, libri e chi ha bisogno di professionisti istruiti.',
          '**La riscoperta del diritto romano** (il *Corpus iuris civilis* di Giustiniano) serve ai Comuni, all\'impero e alla Chiesa, che sviluppa un suo diritto canonico.',
          '**Le traduzioni** dall\'arabo e dal greco, fatte a Toledo e in Sicilia, portano in Occidente Aristotele, Euclide, Tolomeo, la medicina araba: c\'è molto di nuovo da studiare.',
          '**I poteri universali** proteggono gli studenti: il Barbarossa, con la costituzione *Habita* (1155-1158), garantisce sicurezza a chi viaggia per motivi di studio; i papi danno alle università privilegi e una giurisdizione propria.',
        ] },
        { t: 'p', x: 'Il metodo di insegnamento era quello della [[scolastica]]. Il maestro faceva la *lectio*, cioè leggeva e commentava un testo autorevole; poi si ponevano *quaestiones*, problemi aperti; infine si svolgeva la *disputatio*, un dibattito pubblico con argomenti a favore e contro, concluso dalla soluzione del maestro. Dopo il baccalaureato, lo studente poteva ottenere la *licentia docendi*, il permesso di insegnare, e diventare dottore. La lingua era il latino, ovunque: per questo uno studente inglese poteva studiare a Bologna e un italiano a Parigi.' },
        { t: 'precise', items: [
          'La data del **1088** per la fondazione dell\'Università di Bologna è **convenzionale**: fu fissata nel 1888 da una commissione presieduta da Giosuè Carducci per celebrarne l\'ottavo centenario. Le università non hanno un atto di nascita: si formano gradualmente.',
        ] },
      ],
    },
    {
      id: 'purgatorio', title: 'La nascita del Purgatorio',
      blocks: [
        { t: 'p', x: 'L\'idea che alcune anime, prima del Paradiso, debbano purificarsi è antica: se ne trovano tracce in sant\'Agostino e in Gregorio Magno, e la preghiera per i defunti era pratica comune (fu Odilone di Cluny, verso il 998, a fissare la commemorazione dei morti il 2 novembre). Ma secondo lo storico francese **Jacques Le Goff** solo tra il 1170 e il 1180, negli ambienti delle scuole di Parigi, compare il sostantivo *purgatorium*: il Purgatorio diventa un **luogo**, il terzo dell\'aldilà, accanto all\'Inferno e al Paradiso.', side: { k: '1170-1180', x: 'compare il sostantivo purgatorium (Le Goff)' } },
        { t: 'focus', title: 'Perché nasce un terzo luogo', reasons: [
          '**Ragione religiosa.** Tra i santi e i dannati c\'è la grande maggioranza dei cristiani, che muoiono pentiti ma con colpe non ancora espiate. Il Purgatorio dà loro un destino: soffrire per un tempo, poi salire al cielo.',
          '**Ragione sociale.** Una società che non è più divisa solo tra chi prega, chi combatte e chi lavora, ma piena di figure intermedie, immagina anche un aldilà con una posizione intermedia.',
          '**Ragione mentale ed economica.** Il Purgatorio è un aldilà che si può **misurare**: la pena è proporzionata alla colpa, dura un tempo, può essere abbreviata dai *suffragi* dei vivi (preghiere, messe, elemosine, più tardi indulgenze). È una logica di conti, di tempo e di proporzione, la stessa del mercante.',
          '**Una speranza per il mercante.** Chi ha guadagnato con il denaro, persino l\'usuraio che si pente e restituisce il mal tolto, può sperare di non finire all\'Inferno. Le Goff arriva a sostenere che il Purgatorio, rendendo salvabile anche chi viveva di denaro, abbia favorito lo sviluppo dell\'economia mercantile.',
        ] },
        { t: 'p', x: 'La Chiesa definì ufficialmente la dottrina al secondo Concilio di Lione (1274). Pochi decenni dopo **Dante** ne diede l\'immagine più potente: una montagna nell\'emisfero australe, con sette cornici in cui si espiano i sette vizi capitali, dove il tempo passa e le preghiere dei vivi aiutano davvero. Lo dice Manfredi, che chiede alla figlia di pregare per lui, perché qui «per quei di là molto s\'avanza» (*Purgatorio* III, 145).' },
        { t: 'figure', img: 'dante', size: 'wide' },
      ],
    },
    {
      id: 'usura', title: 'La condanna dell\'usura',
      blocks: [
        { t: 'p', x: 'Per la Chiesa medievale l\'[[usura]] non era un interesse eccessivo, come per noi: era **qualsiasi interesse** chiesto su un prestito di denaro. Chi prestava 100 e chiedeva indietro 101 era un usuraio. Il secondo Concilio Lateranense (1139) dichiarò gli usurai infami; il terzo (1179) stabilì che gli usurai manifesti non potessero ricevere la comunione né la sepoltura cristiana.', side: { k: '1179', x: 'Lateranense III: niente sepoltura cristiana agli usurai' } },
        { t: 'concepts', items: [
          { k: 'Ragione biblica', s: 'la Scrittura', x: '«Prestate senza sperarne nulla» (*Mutuum date, nihil inde sperantes*, Luca 6, 35); l\'Antico Testamento vietava di prestare a interesse al proprio fratello.' },
          { k: 'Ragione filosofica', s: 'Aristotele', x: 'Il denaro è un mezzo di scambio, per natura sterile: farlo «partorire» altro denaro è contro natura.' },
          { k: 'Ragione teologica', s: 'il tempo', x: 'L\'usuraio guadagna anche mentre dorme, senza lavorare: vende il tempo che passa tra prestito e restituzione. Ma il tempo appartiene a Dio.' },
          { k: 'Ragione economica', s: 'la fame', x: 'In una società agricola si chiedeva un prestito soprattutto per sopravvivere a una carestia: l\'interesse sfruttava la miseria di chi era in difficoltà.' },
        ] },
        { t: 'source', id: 'src-chobham', title: 'Il tempo è di Dio', author: 'Tommaso di Chobham, Summa confessorum', date: '1215 ca.',
          it: ['L\'usuraio non vende al debitore ciò che è suo, ma soltanto il tempo, che è di Dio.'],
          orig: ['Usurarius non vendit debitori quod suum est, sed tantum tempus, quod Dei est.'],
          ref: 'Tommaso di Chobham, *Summa confessorum*, citato da J. Le Goff, *La borsa e la vita*, Laterza 1987.',
          note: 'Il manuale per confessori di un teologo inglese formato a Parigi: in una riga, il motivo per cui l\'interesse è un furto ai danni di Dio.' },
        { t: 'chain', id: 'chain-usura', title: 'Il mercante, il denaro e la salvezza', intro: 'Come l\'economia monetaria entra nella religione e la religione nell\'economia.',
          nodes: [
            { k: 'Economia monetaria', y: 'XII-XIII secolo', x: 'Commerci, fiere e città richiedono credito: senza prestiti non si finanziano viaggi e imprese.', why: 'Il credito si scontra con un divieto religioso assoluto.' },
            { k: 'Divieto dell\'usura', y: '1139, 1179', x: 'Ogni interesse è usura; l\'usuraio è escluso dai sacramenti e dalla sepoltura cristiana.', why: 'Il mercante rischia di vivere nel peccato e di perdere l\'anima.' },
            { k: 'Soluzioni pratiche', y: 'XIII secolo', x: 'Commenda (si divide il rischio), lettera di cambio (il guadagno sta nel cambio), teorie del danno e del mancato guadagno.', why: 'Resta però il timore per la salvezza dell\'anima.' },
            { k: 'Purgatorio', y: 'dal 1170-1180', x: 'Un luogo di espiazione temporanea: chi si pente e restituisce può salvarsi.', why: 'Lasciti, restituzioni, cappelle e opere pie diventano un modo di «saldare il conto».' },
            { k: 'Opere di riparazione', y: '1303-1305', x: 'Enrico Scrovegni fa affrescare a Giotto la cappella di Padova; il padre Reginaldo è tra gli usurai dell\'Inferno di Dante.', why: '' },
          ] },
        { t: 'source', id: 'src-dante-usura', title: 'L\'usuraio disprezza la natura e il lavoro', author: 'Dante, Inferno XI', date: 'primo Trecento', lang: 'it', origLabel: 'Testo', itLabel: 'Parafrasi',
          first: 'orig', verses: { start: 106, lines: ['Da queste due, se tu ti rechi a mente', 'lo Genesì dal principio, convene', 'prender sua vita e avanzar la gente;', 'e perché l\'usuriere altra via tene,', 'per sé natura e per la sua seguace', 'dispregia, poi ch\'in altro pon la spene.'] },
          it: ['Da queste due cose, cioè dalla natura e dal lavoro umano che la imita, se ricordi l\'inizio della Genesi, gli uomini devono trarre il sostentamento e il progresso. E poiché l\'usuraio segue un\'altra strada, disprezza la natura in sé stessa e nel lavoro che la segue, perché ripone la sua speranza in altro, cioè nel guadagno del denaro.'],
          ref: 'Dante Alighieri, *Inferno*, XI, 106-111, ed. Petrocchi.',
          note: 'Virgilio spiega perché gli usurai stanno nel settimo cerchio, tra i violenti contro Dio: guadagnano senza lavorare, contro l\'ordine voluto da Dio («col sudore del tuo volto mangerai il pane», Genesi 3, 19). Nel canto XVII Dante li riconosce dagli stemmi sulle borse appese al collo.' },
        { t: 'p', x: 'Questo collegamento porta fino alla storia dell\'arte. Nel canto XVII dell\'*Inferno* uno degli usurai porta sulla borsa lo stemma degli **Scrovegni** di Padova. Il figlio, Enrico, fece costruire e affrescare da **Giotto** tra il 1303 e il 1305 la cappella che porta il suo nome: secondo un\'interpretazione diffusa, anche per riscattare la memoria del padre e la propria ricchezza. Nell\'affresco del Giudizio universale Enrico si fa ritrarre mentre offre la cappella alla Vergine.', side: { k: '1303', x: 'Giotto alla cappella degli Scrovegni' } },
        { t: 'precise', items: [
          'Usura nel Medioevo = **qualsiasi interesse** su un prestito, non solo un interesse eccessivo. Il significato moderno nasce molto più tardi.',
          'La Chiesa non vietava il **guadagno commerciale** né ogni forma di profitto: vietava il guadagno sul **prestito** in quanto tale. Per questo commenda e cambio erano considerati leciti.',
        ] },
      ],
    },
  ],

  events: [
    { id: 'ev-998', y: 998, date: '998 ca.', title: 'La commemorazione dei defunti', place: 'cluny', people: ['Odilone di Cluny'], x: 'L\'abate di Cluny fissa al 2 novembre la preghiera per tutti i morti: una premessa dell\'idea di Purgatorio.' },
    { id: 'ev-1088', y: 1088, date: '1088 (data convenzionale)', title: 'Lo Studio di Bologna', place: 'bologna', people: ['Irnerio'], x: 'Data fissata nel 1888 per l\'ottavo centenario: la scuola di diritto si sviluppa tra XI e XII secolo.' },
    { id: 'ev-1139', y: 1139, date: '1139', title: 'Lateranense II', place: 'roma', people: ['Innocenzo II'], x: 'Il concilio dichiara infami gli usurai.' },
    { id: 'ev-1140', y: 1140, date: '1140 ca.', title: 'Il Decreto di Graziano', place: 'bologna', people: ['Graziano'], x: 'Il monaco giurista raccoglie e ordina il diritto della Chiesa: nasce il diritto canonico come disciplina.' },
    { id: 'ev-habita', y: 1158, m: 11.5, date: '1155-1158', title: 'La costituzione Habita', place: 'bologna', people: ['Federico I'], x: 'L\'imperatore protegge gli studenti che viaggiano per studiare: un privilegio decisivo per lo Studio bolognese.' },
    { id: 'ev-1179', y: 1179, date: '1179', title: 'Lateranense III', place: 'roma', people: ['Alessandro III'], x: 'Gli usurai manifesti sono esclusi dalla comunione e dalla sepoltura cristiana.' },
    { id: 'ev-1175p', y: 1175, date: '1170-1180 ca.', title: 'Nasce la parola purgatorium', place: 'parigi', people: ['maestri parigini'], x: 'Secondo Le Goff, il Purgatorio diventa un luogo dell\'aldilà nei testi delle scuole di Parigi.' },
    { id: 'ev-1200', y: 1200, date: '1200', title: 'Privilegio agli studenti di Parigi', place: 'parigi', people: ['Filippo Augusto'], x: 'Il re di Francia sottrae maestri e studenti alla giustizia ordinaria: l\'università è una corporazione protetta.' },
    { id: 'ev-1202', y: 1202, date: '1202', title: 'Il Liber abaci', place: 'pisa', people: ['Leonardo Fibonacci'], major: true, x: 'Le cifre indo-arabiche e lo zero entrano nella pratica dei mercanti europei.' },
    { id: 'ev-1222', y: 1222, date: '1222', title: 'Lo Studio di Padova', place: 'padova', people: [], x: 'Maestri e studenti in fuga da Bologna fondano una nuova università.' },
    { id: 'ev-1224n', y: 1224, m: 6, date: '5 giugno 1224', title: 'L\'università di Napoli', place: 'napoli', people: ['Federico II'], x: 'Prima università fondata da un sovrano, per formare i funzionari del Regno.' },
    { id: 'ev-1231', y: 1231, m: 4, date: '13 aprile 1231', title: 'Parens scientiarum', place: 'parigi', people: ['Gregorio IX'], x: 'La bolla papale riconosce l\'autonomia dell\'università di Parigi: è la sua «magna charta».' },
    { id: 'ev-1274', y: 1274, date: '1274', title: 'Lione II e il Purgatorio', place: 'lione', people: ['Gregorio X'], major: true, x: 'Il concilio definisce ufficialmente la dottrina del Purgatorio.' },
    { id: 'ev-1303', y: 1303, date: '1303-1305', title: 'La cappella degli Scrovegni', place: 'padova', people: ['Enrico Scrovegni', 'Giotto'], x: 'Il figlio di un usuraio citato da Dante fa affrescare a Giotto la sua cappella privata.' },
  ],

  glossary: [
    { term: 'Arti liberali', def: 'Le sette discipline di base, degne di un uomo libero: grammatica, retorica, dialettica (trivio); aritmetica, geometria, musica, astronomia (quadrivio).' },
    { term: 'Trivio', def: 'Le tre arti della parola: grammatica, retorica, dialettica.' },
    { term: 'Quadrivio', def: 'Le quattro arti del numero: aritmetica, geometria, musica, astronomia.' },
    { term: 'Universitas', def: 'Corporazione di studenti o di maestri con propri statuti e privilegi; da qui la parola «università».' },
    { term: 'Scolastica', def: 'Metodo di insegnamento e di ricerca delle scuole medievali: lettura commentata dei testi, questioni, dispute con argomenti a favore e contro.' },
    { term: 'Licentia docendi', def: 'Il permesso di insegnare, conferito al termine degli studi: è l\'antenato della laurea.' },
    { term: 'Purgatorio', def: 'Luogo dell\'aldilà dove le anime di chi è morto pentito espiano le colpe prima di salire in Paradiso. Definito dal concilio di Lione II (1274).' },
    { term: 'Suffragi', def: 'Preghiere, messe ed elemosine dei vivi che abbreviano la pena delle anime del Purgatorio.' },
    { term: 'Usura', def: 'Nel Medioevo, qualsiasi interesse richiesto su un prestito di denaro, condannato dalla Chiesa.' },
    { term: 'Abaco', def: 'Aritmetica pratica per il commercio; le scuole d\'abaco formavano i figli dei mercanti.' },
  ],

  study: {
    questions: [
      { q: 'Perché nelle città si diffondono nuove scuole?', a: ['Il Comune ha bisogno di giudici e notai.', 'I mercanti devono scrivere, contare, calcolare cambi.', 'Scuole cittadine e d\'abaco; Fibonacci, Liber abaci (1202).'] },
      { q: 'Che cosa sono il trivio e il quadrivio?', a: ['Le sette arti liberali, preparazione agli studi superiori.', 'Trivio: grammatica, retorica, dialettica (parola).', 'Quadrivio: aritmetica, geometria, musica, astronomia (numero).'] },
      { q: 'Che cos\'è un\'università medievale e perché nasce tra XII e XIII secolo?', a: ['Universitas = corporazione di studenti (Bologna) o di maestri (Parigi).', 'Città, diritto romano, traduzioni di Aristotele, protezione di papi e imperatori.', 'Metodo scolastico: lectio, quaestio, disputatio.'] },
      { q: 'Quali ragioni spiegano la nascita del Purgatorio?', a: ['Religiosa: un destino per chi muore pentito ma non purificato.', 'Sociale: una società più articolata immagina un aldilà intermedio.', 'Economica e mentale: pena misurabile, suffragi, speranza per il mercante (Le Goff).', 'Definito a Lione II (1274); Dante.'] },
      { q: 'Perché la Chiesa condannava l\'usura?', a: ['Usura = qualsiasi interesse.', 'Bibbia (Lc 6, 35), Aristotele (denaro sterile), vendita del tempo che è di Dio.', 'Prestiti di consumo che sfruttavano la miseria.', 'Lateranensi II (1139) e III (1179).'] },
    ],
    quiz: [
      { q: 'Quale di queste NON è un\'arte del quadrivio?', o: ['Aritmetica', 'Musica', 'Retorica', 'Astronomia'], ok: 2, why: 'La retorica appartiene al trivio, con grammatica e dialettica.' },
      { q: 'Nell\'università di Bologna chi sceglieva e pagava i maestri?', o: ['Il vescovo', 'Gli studenti', 'Il Comune', 'L\'imperatore'], ok: 1, why: 'Bologna era un\'università di studenti, organizzati in nazioni.' },
      { q: 'Per la Chiesa medievale era usura:', o: ['Solo un interesse superiore al 20%', 'Qualsiasi interesse su un prestito di denaro', 'Il guadagno di un mercante su una vendita', 'Il profitto della commenda'], ok: 1, why: 'Qualsiasi interesse sul prestito. Il guadagno commerciale e la commenda (rischio condiviso) erano invece leciti.' },
      { q: 'Chi fonda l\'università di Napoli nel 1224?', o: ['Innocenzo III', 'Federico II', 'Federico Barbarossa', 'Il Comune di Napoli'], ok: 1, why: 'Federico II, per formare i funzionari del suo Regno.' },
    ],
  },

  slides: [
    { t: 'chapter' },
    { t: 'points', title: 'Studiare nel Medioevo', img: 'universita', pts: [
      ['Trivio e quadrivio', 'le arti della parola e del numero.'],
      ['Universitas', 'una corporazione di studenti o di maestri.'],
      ['Bologna, Parigi, Napoli', 'diritto, teologia, funzionari del Regno.'],
    ] },
    { t: 'chain', ref: 'chain-usura' },
    { t: 'quote', x: 'L\'usuraio non vende al debitore ciò che è suo, ma soltanto il tempo, che è di Dio.', o: 'Usurarius non vendit debitori quod suum est, sed tantum tempus, quod Dei est.', cite: 'Tommaso di Chobham, Summa confessorum · 1215 ca.' },
    { t: 'points', title: 'Perché nasce il Purgatorio', img: 'dante', pts: [
      ['Religione', 'un destino per chi muore pentito.'],
      ['Società', 'un aldilà intermedio per una società più articolata.'],
      ['Mentalità', 'pena misurabile e suffragi: la speranza del mercante.'],
    ] },
  ],
});

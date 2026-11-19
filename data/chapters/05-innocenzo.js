/* Capitolo V — La successione imperiale e Innocenzo III. */
MUNDUS.chapter({
  id: 'innocenzo', n: 5, roman: 'V',
  title: 'Enrico VI e Innocenzo III',
  kicker: 'La successione imperiale e il papato teocratico',
  period: '1186 – 1216', span: [1186, 1220],
  axis: 'Potere',
  cover: 'innocenzo',
  hook: 'Un matrimonio unisce l\'impero e la Sicilia; una morte improvvisa consegna l\'Europa all\'arbitrato del papa.',
  question: 'Come fa un papa a diventare l\'arbitro dell\'Europa?',
  lead: 'Con il matrimonio tra Enrico VI, figlio del Barbarossa, e Costanza d\'Altavilla, erede del Regno di Sicilia, il papato rischia di trovarsi stretto tra due territori dello stesso sovrano. Ma nel 1197 Enrico muore giovane, lasciando un figlio di tre anni. In quel vuoto si inserisce Innocenzo III, il papa che porta all\'apice l\'idea della superiorità del potere spirituale.',

  sections: [
    {
      id: 'enrico', title: 'Enrico VI e Costanza d\'Altavilla',
      blocks: [
        { t: 'p', drop: true, x: 'Il 27 gennaio ==1186==, nella basilica di Sant\'Ambrogio a Milano, la città che il padre aveva distrutto ventiquattro anni prima, **Enrico**, figlio di Federico Barbarossa, sposa **Costanza d\'Altavilla**. Costanza era figlia di Ruggero II, il primo re normanno di Sicilia, e zia del re Guglielmo II. Quando nel 1189 Guglielmo muore senza figli, Costanza diventa l\'erede del Regno.', side: { k: '1186', x: 'Nozze di Enrico e Costanza a Milano' } },
        { t: 'figure', img: 'barbarossa', size: 'wide', cap: 'Federico Barbarossa in trono tra i figli Enrico VI, il re che unirà l\'impero e la Sicilia, e Filippo di Svevia.' },
        { t: 'p', x: 'I baroni siciliani però non volevano un re tedesco e incoronarono **Tancredi di Lecce**, nipote illegittimo di Ruggero II. Enrico, diventato imperatore nel 1191, dovette conquistare il Regno con la forza. Lo finanziò anche con un riscatto famoso: quello pagato dall\'Inghilterra per liberare Riccardo Cuor di Leone, catturato al ritorno dalla crociata e consegnato a Enrico. Morto Tancredi, Enrico entrò a Palermo e fu incoronato re di Sicilia il giorno di Natale del ==1194==. Il giorno dopo, a **Jesi**, Costanza, che aveva quarant\'anni, diede alla luce **Federico**, il futuro Federico II; la tradizione racconta che partorì in una tenda nella piazza, davanti a tutti, perché nessuno potesse dubitare che il bambino fosse suo.', side: { k: '1194', x: '25 dic.: Enrico re di Sicilia; 26 dic.: nasce Federico II a Jesi' } },
        { t: 'figure', img: 'incoronazione', size: 'inset' },
        { t: 'precise', items: [
          '**Enrico VI** (1165-1197) è il **figlio di Federico Barbarossa**. Non va confuso con **Enrico IV** (1050-1106), il re di Canossa, vissuto un secolo prima. In mezzo c\'è Enrico V, quello del Concordato di Worms.',
        ] },
      ],
    },
    {
      id: 'unio', title: 'L\'unione del Regno all\'impero',
      blocks: [
        { t: 'p', x: 'Per il papato la nascita di Federico era una minaccia. Il Regno di Sicilia era un feudo della Chiesa fin dall\'accordo di [Melfi del 1059](#/capitolo/investiture/riforma): i Normanni erano stati per un secolo i protettori armati dei papi contro gli imperatori. Ora quel Regno apparteneva alla stessa famiglia che governava la Germania e l\'Italia del Nord. Lo Stato della Chiesa si trovava stretto in una tenaglia, con l\'imperatore a nord e a sud. È quella che gli storici chiamano *unio regni ad imperium*, l\'unione del Regno all\'impero.' },
        { t: 'chain', id: 'chain-unio', title: 'Un matrimonio che cambia gli equilibri', intro: 'Dalla politica matrimoniale degli Svevi alle fazioni delle città italiane.',
          nodes: [
            { k: 'Il matrimonio', y: '1186', x: 'Enrico, erede dell\'impero, sposa Costanza, erede del Regno normanno di Sicilia.', why: 'Alla morte di Guglielmo II (1189) Costanza eredita il Regno: Enrico lo conquista nel 1194.' },
            { k: 'Due corone', y: '1194', x: 'Nasce Federico II, erede insieme dell\'impero e del Regno di Sicilia.', why: 'Lo Stato della Chiesa rischia di essere circondato da un unico sovrano.' },
            { k: 'Il papato accerchiato', y: '1194-1197', x: 'Il papa perde il suo tradizionale alleato meridionale e teme per la propria indipendenza.', why: 'La morte improvvisa di Enrico VI ribalta la situazione.' },
            { k: 'Il vuoto', y: '1197-1198', x: 'Enrico muore a 32 anni; Federico ha tre anni. Costanza lo affida alla tutela del papa. In Germania due re rivali.', why: 'Il papa diventa l\'arbitro della successione; le parti si schierano.' },
            { k: 'Guelfi e ghibellini', y: 'dal 1198', x: 'Lo scontro tra le famiglie Welf e Staufen diventa, in Italia, la divisione tra filopapali e filoimperiali.', why: '' },
          ] },
      ],
    },
    {
      id: 'morte', title: 'La morte di Enrico VI e la doppia elezione',
      blocks: [
        { t: 'p', x: 'Enrico VI morì a Messina il 28 settembre ==1197==, a soli trentadue anni, mentre preparava una crociata. Il figlio aveva meno di tre anni. Costanza fece incoronare Federico re di Sicilia, rinunciando per lui alla corona tedesca, e prima di morire, nel novembre 1198, lo affidò alla tutela del papa: il signore feudale del Regno diventava anche il protettore del suo piccolo re.', side: { k: '1197', x: 'Morte di Enrico VI a Messina' } },
        { t: 'p', x: 'In Germania, intanto, nel 1198 i principi si divisero ed elessero due re: **Filippo di Svevia**, fratello di Enrico VI, della famiglia degli Staufen, e **Ottone di Brunswick**, figlio di Enrico il Leone, della famiglia dei Welf. La decisione su chi fosse il re legittimo, e quindi chi potesse essere incoronato imperatore, finì nelle mani del papa appena eletto: Innocenzo III.' },
      ],
    },
    {
      id: 'guelfi', title: 'Guelfi e ghibellini',
      blocks: [
        { t: 'p', x: 'I nomi vengono dalla Germania. **Guelfi** deriva da *Welf*, la famiglia di Ottone di Brunswick; **ghibellini** da *Waiblingen*, un castello degli Staufen, da cui veniva il grido di battaglia dei loro sostenitori. Nella contesa del 1198 il papa sostenne il guelfo Ottone contro lo svevo Filippo: per questo, in Italia, «guelfo» finì per significare sostenitore del papa e «ghibellino» sostenitore dell\'imperatore.' },
        { t: 'p', x: 'Nelle città italiane però le due parole diventarono soprattutto le etichette di fazioni cittadine, con interessi propri. A Firenze la tradizione fa iniziare la divisione con l\'uccisione di Buondelmonte dei Buondelmonti, nel 1216, per una promessa di matrimonio non mantenuta: una lite tra famiglie che prese i nomi della grande politica. Dalla metà del Duecento, con lo scontro tra Federico II e i papi, guelfi e ghibellini attraversano tutta l\'Italia comunale, come si vede nel [capitolo III](#/capitolo/comuni/popolo).', side: { k: 'Welf / Waiblingen', x: 'nomi tedeschi, significati italiani' } },
        { t: 'precise', items: [
          'In Germania guelfi e ghibellini indicano **due famiglie** in lotta per la corona; in Italia diventano **due schieramenti** (filopapale e filoimperiale) che servono soprattutto a dare un nome alle rivalità cittadine. Non sempre un guelfo era un convinto difensore del papa.',
        ] },
      ],
    },
    {
      id: 'innocenzo', title: 'Innocenzo III e il sole e la luna',
      blocks: [
        { t: 'p', x: 'Lotario dei conti di Segni fu eletto papa l\'8 gennaio ==1198==, a trentasette anni, con il nome di **Innocenzo III**. Aveva studiato teologia a Parigi e diritto a Bologna, e mise entrambe le competenze al servizio di un\'idea: il papa non è solo il vicario di Pietro, ma il [[vicario di Cristo|vicarius Christi]], e possiede la [[pienezza del potere|plenitudo potestatis]]. I re governano legittimamente, ma il loro potere è subordinato a quello spirituale, come la luna al sole. Si parla per questo di **teocrazia** papale.', side: { k: '1198', x: 'Innocenzo III papa' } },
        { t: 'source', id: 'src-sole', title: 'La metafora del sole e della luna', author: 'Innocenzo III, lettera Sicut universitatis conditor', date: 'ottobre 1198',
          it: ['Come Dio, creatore dell\'universo, pose nel firmamento del cielo due grandi luminari, il maggiore perché presiedesse al giorno e il minore perché presiedesse alla notte, così nel firmamento della Chiesa universale, che è chiamata con il nome di cielo, istituì due grandi dignità: la maggiore, che presiedesse alle anime come ai giorni, e la minore, che presiedesse ai corpi come alle notti. Queste sono l\'autorità pontificia e il potere regale. E come la luna riceve la sua luce dal sole, […] così il potere regale riceve dall\'autorità pontificia lo splendore della sua dignità.'],
          orig: ['Sicut universitatis conditor Deus duo magna luminaria in firmamento caeli constituit, luminare maius ut praeesset diei et luminare minus ut praeesset nocti, sic ad firmamentum universalis Ecclesiae, quae caeli nomine nuncupatur, duas magnas instituit dignitates, maiorem quae quasi diebus animabus praeesset et minorem quae quasi noctibus praeesset corporibus; quae sunt pontificalis auctoritas et regalis potestas. Porro sicut luna lucem suam a sole sortitur, […] sic regalis potestas ab auctoritate pontificali suae sortitur dignitatis splendorem.'],
          ref: 'Innocenzo III, *Registrum*, I, 401 (30 ottobre 1198), estratto. L\'immagine viene dal racconto della creazione (Genesi 1, 16).',
          note: 'Notare le parole: il papa ha l\'*auctoritas*, il re la *potestas*. La luna ha una luce vera, ma non sua: il potere dei re è legittimo, ma deriva il suo splendore da quello del papa. Non è una teoria astratta: Innocenzo la applicherà alla scelta dell\'imperatore.' },
        { t: 'p', x: 'Nella decretale *Venerabilem* (1202) Innocenzo afferma che, poiché è il papa a incoronare l\'imperatore, spetta a lui esaminare se l\'eletto ne sia degno. E agisce di conseguenza. Sostiene Ottone IV, che incorona imperatore nel 1209; ma quando Ottone invade il Regno di Sicilia, lo scomunica (1210) e appoggia il giovane **Federico II**, eletto re di Germania. La sconfitta di Ottone a **Bouvines** (1214) per mano del re di Francia chiude la contesa.' },
        { t: 'list', items: [
          '**Sui regni**: costringe il re d\'Inghilterra Giovanni Senzaterra a dichiararsi suo vassallo (1213); è signore feudale del Regno di Sicilia e tutore del suo re.',
          '**Sulle crociate**: bandisce la quarta crociata, che contro la sua volontà saccheggia Costantinopoli (1204), e la [crociata contro gli Albigesi](#/capitolo/eresie/albigesi) (1209).',
          '**Sulla Chiesa**: convoca il [IV Concilio Lateranense](#/capitolo/eresie/laterano) (1215), il più importante del Medioevo.',
          '**Sui movimenti religiosi**: riconosce gli Umiliati (1201) e approva oralmente la forma di vita di [Francesco d\'Assisi](#/capitolo/francesco/approvazione) (1209).',
        ] },
        { t: 'figure', img: 'innocenzo', size: 'inset' },
      ],
    },
    {
      id: 'gregorio', title: 'Da Gregorio VII a Innocenzo III',
      blocks: [
        { t: 'p', x: 'Innocenzo III non nasce dal nulla. Il [Dictatus Papae](#/capitolo/investiture/gregorio) del 1075 aveva già affermato che il papa è il solo vescovo universale, che può deporre gli imperatori e sciogliere i sudditi dalla fedeltà. Ma tra i due papi c\'è una differenza di obiettivo e di mezzi, oltre che di risultati.' },
        { t: 'compare', id: 'cmp-gregorio-innocenzo', title: 'Gregorio VII e Innocenzo III',
          a: { name: 'Gregorio VII', sub: 'papa 1073-1085', img: 'gregorio' },
          b: { name: 'Innocenzo III', sub: 'papa 1198-1216', img: 'innocenzo' },
          rows: [
            { k: 'Obiettivo', a: 'Liberare la Chiesa dal controllo dei laici: la *libertas Ecclesiae*.', b: 'Guidare l\'intera cristianità come arbitro supremo: la *plenitudo potestatis*.' },
            { k: 'Immagine del papa', a: 'Il successore di Pietro, unico vescovo universale (Dictatus Papae).', b: 'Il vicario di Cristo; il sole da cui la luna dei re riceve la luce.' },
            { k: 'Rapporto con l\'impero', a: 'Scomunica e depone Enrico IV, che reagisce con un antipapa.', b: 'Sceglie e giudica l\'imperatore (*Venerabilem*): sostiene Ottone IV, poi lo scomunica e appoggia Federico II.' },
            { k: 'Strumenti', a: 'Scomunica, sinodi, legati, alleanza con i Normanni e con Matilde.', b: 'Scomunica e interdetto, vincoli feudali con i regni, crociate, un grande concilio, il diritto canonico.' },
            { k: 'Risultato', a: 'Muore in esilio a Salerno; il principio vince più tardi a Worms (1122).', b: 'Muore all\'apice del potere (1216): nessun sovrano può ignorarlo.' },
          ],
          end: 'Gregorio VII **afferma** il primato del papa in una situazione di lotta; Innocenzo III lo **esercita** in modo sistematico, dopo un secolo in cui la Chiesa si è data una struttura, un diritto e un prestigio enormi. Dalla libertà della Chiesa si è passati alla sua superiorità.' },
        { t: 'focus', title: 'Continuità e differenze', x: [
          'C\'è una linea che va dal Dictatus Papae alla lettera sul sole e la luna: in entrambi il potere spirituale è superiore a quello temporale, e il papa può giudicare i re. Innocenzo però aggiunge una giustificazione precisa: il papa interviene nelle questioni politiche **«a causa del peccato»** (*ratione peccati*), cioè quando un sovrano commette un\'ingiustizia che riguarda la salvezza delle anime. Così non pretende di governare direttamente i regni, ma si riserva il diritto di intervenire ovunque.',
          'Questa idea raggiungerà il punto più alto e insieme la sua crisi un secolo dopo, con la bolla *Unam Sanctam* di Bonifacio VIII (1302) e lo schiaffo di Anagni (1303). Ma questo è un altro capitolo.',
        ] },
      ],
    },
  ],

  events: [
    { id: 'ev-1186', y: 1186, date: '27 gennaio 1186', title: 'Nozze di Enrico e Costanza', place: 'milano', people: ['Enrico VI', 'Costanza d\'Altavilla'], x: 'Il figlio del Barbarossa sposa l\'erede del Regno normanno di Sicilia, nella Milano ormai riconciliata con l\'impero.' },
    { id: 'ev-1191', y: 1191, date: '15 aprile 1191', title: 'Enrico VI imperatore', place: 'roma', people: ['Enrico VI', 'Celestino III'], x: 'Incoronato a Roma da Celestino III; la prima spedizione contro Tancredi, re di Sicilia, fallisce.' },
    { id: 'ev-1194p', y: 1194, m: 12, date: '25 dicembre 1194', title: 'Enrico VI re di Sicilia', place: 'palermo', people: ['Enrico VI'], x: 'Morto Tancredi, Enrico entra a Palermo e viene incoronato re: impero e Regno sono nelle stesse mani.' },
    { id: 'ev-1194', y: 1194, m: 12.5, date: '26 dicembre 1194', title: 'Nasce Federico II', place: 'jesi', people: ['Costanza d\'Altavilla', 'Federico II'], major: true, x: 'L\'erede di due corone nasce a Jesi; la tradizione dice in una tenda nella piazza, davanti a tutti.' },
    { id: 'ev-1197', y: 1197, date: '28 settembre 1197', title: 'Morte di Enrico VI', place: 'messina', people: ['Enrico VI'], major: true, x: 'L\'imperatore muore a 32 anni; il figlio ha meno di tre anni. Si apre la crisi della successione.' },
    { id: 'ev-1198', y: 1198, date: '8 gennaio 1198', title: 'Innocenzo III papa', place: 'roma', people: ['Innocenzo III'], major: true, x: 'Eletto a 37 anni, nello stesso anno scrive la lettera del sole e della luna e diventa tutore di Federico II.' },
    { id: 'ev-1198d', y: 1198, m: 6, date: '1198', title: 'Doppia elezione in Germania', place: 'aquisgrana', people: ['Filippo di Svevia', 'Ottone IV'], x: 'Lo svevo Filippo e il guelfo Ottone si contendono la corona: il papa diventa arbitro.' },
    { id: 'ev-1202v', y: 1202, date: 'marzo 1202', title: 'La decretale Venerabilem', place: 'roma', people: ['Innocenzo III'], x: 'Il papa rivendica il diritto di esaminare il re eletto, perché è lui a incoronarlo imperatore.' },
    { id: 'ev-1204', y: 1204, date: '13 aprile 1204', title: 'Sacco di Costantinopoli', place: 'costantinopoli', people: ['Innocenzo III', 'Enrico Dandolo'], x: 'La quarta crociata, deviata dai Veneziani, saccheggia la capitale bizantina contro la volontà del papa.' },
    { id: 'ev-1210', y: 1210, date: 'novembre 1210', title: 'Scomunica di Ottone IV', place: 'roma', people: ['Innocenzo III', 'Ottone IV'], x: 'Incoronato nel 1209, Ottone invade il Regno di Sicilia: il papa lo scomunica e sostiene Federico II.' },
    { id: 'ev-1214', y: 1214, date: '27 luglio 1214', title: 'Bouvines', place: 'bouvines', people: ['Filippo Augusto', 'Ottone IV'], x: 'Il re di Francia sconfigge Ottone IV: la strada dell\'impero è aperta per Federico II.' },
    { id: 'ev-1216', y: 1216, date: '16 luglio 1216', title: 'Morte di Innocenzo III', place: 'perugia', people: ['Innocenzo III'], x: 'Il papa muore a Perugia, pochi mesi dopo il IV Concilio Lateranense.' },
    { id: 'ev-1220', y: 1220, date: '22 novembre 1220', title: 'Federico II imperatore', place: 'roma', people: ['Federico II', 'Onorio III'], x: 'Il pupillo di Innocenzo III è incoronato imperatore: il conflitto con i papi si riaprirà presto.' },
  ],

  glossary: [
    { term: 'Unio regni ad imperium', def: 'L\'unione del Regno di Sicilia all\'impero nelle mani della stessa dinastia sveva, temuta dal papato perché ne circondava lo Stato.' },
    { term: 'Guelfi', def: 'Da Welf, la famiglia di Ottone IV. In Italia: la parte che sostiene il papato.' },
    { term: 'Ghibellini', def: 'Da Waiblingen, castello degli Staufen. In Italia: la parte che sostiene l\'imperatore.' },
    { term: 'Teocrazia', def: 'Concezione secondo cui il potere politico deriva da Dio attraverso l\'autorità religiosa, che quindi gli è superiore.' },
    { term: 'Plenitudo potestatis', def: 'La «pienezza del potere» del papa sulla Chiesa e, in ultima istanza, sulla cristianità.' },
    { term: 'Vicarius Christi', def: 'Titolo che Innocenzo III valorizza: il papa non è solo il successore di Pietro, ma il rappresentante di Cristo in terra.' },
    { term: 'Decretale', def: 'Lettera papale che stabilisce una norma di diritto canonico.' },
  ],

  study: {
    questions: [
      { q: 'Perché il matrimonio tra Enrico VI e Costanza d\'Altavilla preoccupava il papato?', a: ['Costanza era erede del Regno di Sicilia, feudo della Chiesa.', 'Il loro figlio avrebbe avuto impero e Regno: unio regni ad imperium.', 'Lo Stato della Chiesa si sarebbe trovato circondato.'] },
      { q: 'Che cosa succede alla morte di Enrico VI?', a: ['1197, Messina; Federico ha meno di tre anni.', 'Costanza lo fa re di Sicilia e lo affida alla tutela di Innocenzo III.', 'In Germania doppia elezione: Filippo di Svevia e Ottone di Brunswick.'] },
      { q: 'Da dove vengono i nomi guelfi e ghibellini e che cosa significano in Italia?', a: ['Welf (Ottone IV) e Waiblingen (castello degli Staufen).', 'In Italia: filopapali e filoimperiali.', 'Ma soprattutto etichette di fazioni cittadine (Firenze, 1216).'] },
      { q: 'Spiega la metafora del sole e della luna.', a: ['Due luminari: sole (autorità pontificia, anime) e luna (potere regale, corpi).', 'La luna riceve la luce dal sole: il potere dei re deriva il suo splendore da quello del papa.', 'Lettera Sicut universitatis conditor, 1198.'] },
      { q: 'In che cosa Innocenzo III continua e in che cosa supera Gregorio VII?', a: ['Continuità: superiorità dello spirituale, il papa giudica i re.', 'Gregorio: libertas Ecclesiae, in lotta; Innocenzo: plenitudo potestatis, esercitata.', 'Innocenzo sceglie l\'imperatore, rende vassalli i re, convoca il Laterano IV.'] },
    ],
    quiz: [
      { q: 'Enrico VI è:', o: ['Il re di Canossa', 'Il figlio di Federico Barbarossa', 'Il padre di Federico Barbarossa', 'L\'imperatore del Concordato di Worms'], ok: 1, why: 'Enrico VI è figlio del Barbarossa e padre di Federico II. Il re di Canossa è Enrico IV; quello di Worms Enrico V.' },
      { q: 'Dove e quando nasce Federico II?', o: ['Palermo, 1186', 'Jesi, 1194', 'Messina, 1197', 'Milano, 1186'], ok: 1, why: 'A Jesi il 26 dicembre 1194, il giorno dopo l\'incoronazione del padre a Palermo.' },
      { q: 'Nella metafora di Innocenzo III la luna rappresenta:', o: ['Il papa', 'Il potere regale', 'La Chiesa', 'I vescovi'], ok: 1, why: 'Il sole è l\'autorità pontificia, la luna il potere regale che riceve da essa lo splendore.' },
      { q: 'Il nome «ghibellini» deriva da:', o: ['Una famiglia guelfa', 'Waiblingen, castello degli Staufen', 'Un quartiere di Firenze', 'Un papa'], ok: 1, why: 'Ghibellini da Waiblingen (Staufen), guelfi da Welf.' },
    ],
  },

  slides: [
    { t: 'chapter' },
    { t: 'chain', ref: 'chain-unio' },
    { t: 'quote', x: 'Come la luna riceve la sua luce dal sole, così il potere regale riceve dall\'autorità pontificia lo splendore della sua dignità.', o: 'Sicut luna lucem suam a sole sortitur, sic regalis potestas ab auctoritate pontificali suae sortitur dignitatis splendorem.', cite: 'Innocenzo III, Sicut universitatis conditor · 1198' },
    { t: 'compare', ref: 'cmp-gregorio-innocenzo', rows: [0, 1, 2] },
    { t: 'dates', items: [['1186', 'Nozze a Milano', 'Enrico VI e Costanza'], ['1194', 'Federico II', 'nasce a Jesi'], ['1197', 'Morte di Enrico VI', 'Messina'], ['1198', 'Innocenzo III', 'il papa arbitro']] },
  ],
});

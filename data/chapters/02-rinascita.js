/* Capitolo II — La rinascita dell'Europa dopo l'Anno Mille. */
MUNDUS.chapter({
  id: 'rinascita', n: 2, roman: 'II',
  title: 'La rinascita dopo il Mille',
  kicker: 'Campi, mercati, monete: l\'Europa che cresce',
  period: 'XI – XIII secolo', span: [1000, 1284],
  axis: 'Economia e società',
  cover: 'marzo',
  hook: 'Più cibo, più persone, più scambi: dai campi nascono i mercati, dai mercati le città.',
  question: 'Come fa un aratro a cambiare la società?',
  lead: 'Tra l\'XI e il XIII secolo l\'Europa cambia faccia. Le invasioni finiscono, si coltivano terre nuove, si mangia di più e si vive più a lungo. Le eccedenze dei campi arrivano ai mercati, i mercanti inventano strumenti nuovi per muovere merci e denaro, le città tornano a riempirsi. È la base materiale di tutto quello che viene dopo, Comuni compresi.',

  sections: [
    {
      id: 'mille', title: 'Un mondo che si rinnova',
      blocks: [
        { t: 'p', drop: true, x: 'Dopo il Mille l\'Europa smette di essere una terra assediata. I Vichinghi si sono insediati e convertiti, gli Ungari sono stati fermati (955) e sono diventati un regno cristiano, le incursioni saracene sulle coste diminuiscono. Insieme alla sicurezza arriva un periodo di **clima più mite**, che allunga le stagioni di crescita. Il risultato più evidente è demografico: secondo le stime più diffuse la popolazione europea passa da circa **40 milioni** di abitanti intorno al 1000 a **oltre 70 milioni** all\'inizio del Trecento.', side: { k: '× 2', x: 'La popolazione europea quasi raddoppia tra 1000 e 1300 (stime)' } },
        { t: 'p', x: 'Crescita della popolazione e crescita della produzione si alimentano a vicenda: più persone significano più braccia per lavorare, ma anche più bocche da sfamare, quindi la necessità di coltivare nuove terre. I contemporanei se ne accorgevano. Il monaco Rodolfo il Glabro, che scriveva negli anni Trenta dell\'XI secolo, descrive così il fervore di costruzioni subito dopo il Mille.' },
        { t: 'source', id: 'src-glabro', title: 'Il «candido manto di chiese»', author: 'Rodolfo il Glabro, Historiae', date: '1030-1040 ca.',
          it: ['Quando ormai si avvicinava il terzo anno dopo il Mille, accadde in quasi tutta la terra, ma soprattutto in Italia e nelle Gallie, che si rinnovassero le basiliche delle chiese, anche se la maggior parte, ben costruite, non ne aveva alcun bisogno. Ogni popolo cristiano gareggiava con l\'altro per averne una più bella. Era come se il mondo stesso, scuotendosi e liberandosi della vecchiaia, si rivestisse ovunque di un candido manto di chiese.'],
          orig: ['Infra supradictum millesimum tertio iam fere imminente anno, contigit in universo pene terrarum orbe, praecipue tamen in Italia et in Galliis, innovari ecclesiarum basilicas, licet pleraeque decenter locatae minime indiguissent. Aemulabatur tamen quaeque gens christicolarum adversus alteram decentiore frui. Erat enim instar ac si mundus ipse excutiendo semet, reiecta vetustate, passim candidam ecclesiarum vestem indueret.'],
          ref: 'Rodolfo il Glabro, *Historiarum libri quinque*, III, 4 (13).',
          note: 'Costruire chiese nuove quando le vecchie sono ancora in piedi richiede pietre, muratori, denaro e cibo per chi lavora: è un indizio indiretto, ma chiarissimo, di un\'economia che produce più del necessario. E il soggetto della frase è proprio il *mundus* che si rinnova.' },
        { t: 'precise', items: [
          'I famosi **«terrori dell\'anno Mille»** sono in gran parte un\'invenzione degli storici dell\'Ottocento: le fonti dell\'epoca non mostrano un panico generale per la fine del mondo. La rinascita non è un «sollievo» dopo il 1000, ma un processo lento che comincia già nel X secolo.',
        ] },
      ],
    },
    {
      id: 'campagne', title: 'Nuove terre e nuovi strumenti',
      blocks: [
        { t: 'p', x: 'La prima risposta alla fame di terra è il [[dissodamento]]: si tagliano boschi, si prosciugano paludi, si mettono a coltura terre abbandonate. Signori laici, vescovi e monasteri fondano villaggi nuovi (le «villenove», i «borghi franchi») e attirano coloni promettendo condizioni migliori: canoni più bassi, meno obblighi, a volte la libertà personale. Il paesaggio europeo che conosciamo, fatto di campi aperti e villaggi, prende forma in questi secoli.' },
        { t: 'figure', img: 'marzo', size: 'inset' },
        { t: 'p', x: 'La seconda risposta è tecnica. Nessuna delle innovazioni di questi secoli era del tutto nuova, ma ora si diffondono insieme, e insieme fanno la differenza.' },
        { t: 'concepts', items: [
          { k: 'Aratro pesante', s: 'carruca', x: 'Ha le ruote, un coltro che taglia la zolla e un versoio che la rovescia. Lavora i terreni pesanti e umidi delle pianure del Nord, che l\'aratro leggero romano scalfiva appena.' },
          { k: 'Collare rigido', s: 'e ferratura', x: 'Il collare appoggia sulle spalle del cavallo invece che sul collo: l\'animale tira senza soffocare. Con i ferri agli zoccoli il cavallo diventa più veloce e resistente del bue.' },
          { k: 'Rotazione triennale', s: 'tre campi', x: 'Un campo a cereali invernali (grano, segale), uno a cereali primaverili o legumi (avena, orzo, fave), uno a riposo. Ogni anno si coltivano due terzi della terra invece della metà.' },
          { k: 'Mulini', s: 'ad acqua e a vento', x: 'Macinano il grano, follano i panni, azionano mantici. Il *Domesday Book* del 1086 ne conta oltre 5.600 nella sola Inghilterra.' },
        ] },
        { t: 'focus', title: 'Facciamo i conti della rotazione triennale', x: [
          'Prendiamo un villaggio con **90 ettari** di terra. Con la rotazione biennale ogni anno se ne coltivano 45 e 45 restano a [[maggese]]. Con la rotazione triennale se ne coltivano **60** (30 a cereali invernali, 30 a colture primaverili) e solo 30 riposano. La superficie coltivata cresce di un terzo, senza un solo ettaro in più.',
          'I vantaggi però non sono solo quantitativi. Due semine in stagioni diverse riducono il rischio: se una gela, l\'altra può salvarsi. I **legumi** arricchiscono il terreno di azoto e la dieta di proteine. L\'**avena** sfama i cavalli, che a loro volta tirano l\'aratro più in fretta. Le innovazioni funzionano come un sistema: una rende possibile l\'altra.',
        ] },
        { t: 'p', x: 'C\'è anche una conseguenza sociale. L\'aratro pesante richiede quattro, a volte otto buoi: quasi nessun contadino li possiede da solo. Così le famiglie del villaggio devono mettere insieme gli animali e organizzare i lavori in comune. La comunità di villaggio si rafforza, e con essa la capacità dei contadini di trattare con il signore.' },
        { t: 'precise', items: [
          'La rotazione triennale **non triplica** la produzione: porta la parte coltivata della terra da **metà a due terzi**. Il guadagno è di circa un terzo, a cui si aggiungono i benefici dei legumi e della minore esposizione ai cattivi raccolti.',
        ] },
      ],
    },
    {
      id: 'cistercensi', title: 'I Cistercensi: pregare e lavorare',
      blocks: [
        { t: 'p', x: 'Tra i protagonisti dei dissodamenti ci sono i monaci. Nel ==1098== Roberto di Molesme fonda a **Cîteaux** (in latino *Cistercium*), in Borgogna, un monastero che vuole tornare alla Regola di san Benedetto presa alla lettera: povertà, silenzio, lavoro manuale. Il movimento esplode con **Bernardo**, che nel 1115 fonda Clairvaux. Alla sua morte, nel 1153, le abbazie cistercensi sono circa 350, sparse dalla Scandinavia alla Sicilia.', side: { k: '1098', x: 'Fondazione di Cîteaux' } },
        { t: 'p', x: 'I Cistercensi scelgono di proposito luoghi isolati e difficili, valli paludose, boschi, terre incolte. Lì costruiscono le [[grange]], grandi aziende agricole lavorate dai monaci e soprattutto dai [[conversi]], fratelli laici che vivono nel monastero. Bonificano, scavano canali, allevano pecore per la lana. Vicino a Milano l\'abbazia di **Chiaravalle** (1135) trasformò la campagna con l\'irrigazione e i prati che si possono falciare anche d\'inverno, le marcite.' },
        { t: 'figure', img: 'chiaravalle', size: 'wide' },
        { t: 'compare', id: 'cmp-cluny-citeaux', title: 'Cluny e Cîteaux: due modi di essere monaci',
          a: { name: 'Cluny', sub: 'fondata nel 910', img: 'cluny' },
          b: { name: 'Cistercensi', sub: 'Cîteaux, 1098', img: 'chiaravalle' },
          rows: [
            { k: 'Ideale', a: 'La preghiera liturgica solenne, quasi ininterrotta, e la preghiera per i defunti.', b: 'Il ritorno alla Regola alla lettera: povertà, semplicità, silenzio, *ora et labora*.' },
            { k: 'Lavoro', a: 'I monaci si dedicano alla liturgia; le terre sono lavorate da servi e coloni.', b: 'Monaci e conversi lavorano con le proprie mani; grange, bonifiche, allevamento.' },
            { k: 'Organizzazione', a: 'Centralizzata: centinaia di priorati dipendono dall\'abate di Cluny, che dipende solo dal papa.', b: 'Federazione di abbazie autonome legate dalla *Carta caritatis* (1119) e da un capitolo generale annuale.' },
            { k: 'Arte', a: 'Grandiosa e ricca: Cluny III è stata la chiesa più grande della cristianità fino al nuovo San Pietro.', b: 'Spoglia: niente sculture figurate, niente vetrate colorate, luce e proporzione.' },
            { k: 'Ruolo storico', a: 'Prepara la riforma della Chiesa e l\'idea di libertà dai laici.', b: 'Partecipa alla rinascita agricola e diffonde un modello di lavoro e di disciplina.' },
          ],
          end: 'I Cistercensi nascono anche come **critica a Cluny**, diventata troppo ricca. Ma le due esperienze rispondono alla stessa esigenza di riforma, in tempi diversi: Cluny libera la Chiesa dai signori, Cîteaux la libera dalla ricchezza.' },
        { t: 'source', id: 'src-bernardo', title: 'Bernardo contro il lusso dei monasteri', author: 'Bernardo di Chiaravalle, Apologia ad Guillelmum', date: '1125 ca.',
          it: ['Nei chiostri, davanti ai frati che leggono, che cosa ci fa quella ridicola mostruosità, quella strana bellezza deforme e deformità bella? […] Per Dio! Se non ci si vergogna di queste sciocchezze, perché almeno non ci si rammarica della spesa?'],
          orig: ['Ceterum in claustris, coram legentibus fratribus, quid facit illa ridicula monstruositas, mira quaedam deformis formositas ac formosa deformitas? […] Pro Deo! Si non pudet ineptiarum, cur vel non piget expensarum?'],
          ref: 'Bernardo di Chiaravalle, *Apologia ad Guillelmum abbatem*, XII, 29 (estratto).',
          note: 'L\'obiezione di Bernardo è insieme spirituale ed economica: i capitelli scolpiti distraggono dalla lettura e costano. È lo stesso spirito che produce l\'architettura cistercense, spoglia e luminosa.' },
      ],
    },
    {
      id: 'mercati', title: 'Dalle eccedenze alle città',
      blocks: [
        { t: 'p', x: 'Quando un villaggio produce più di quanto consuma, l\'avanzo, l\'[[eccedenza]], si può vendere. Chi vende al mercato ottiene denaro, e con il denaro compra ciò che non produce: attrezzi di ferro, sale, stoffe. Così si diffonde l\'uso della moneta, cresce la domanda di artigiani, e gli artigiani si concentrano dove c\'è il mercato: nelle città, che tornano a popolarsi dopo secoli di declino.' },
        { t: 'chain', id: 'chain-rinascita', title: 'Dai campi ai Comuni', intro: 'Il secondo nesso fondamentale: ogni anello rende possibile il successivo.',
          nodes: [
            { k: 'Rinascita agricola', y: 'XI secolo', x: 'Dissodamenti, aratro pesante, rotazione triennale, mulini: si produce di più.', why: 'La produzione supera il fabbisogno delle famiglie contadine e dei signori.' },
            { k: 'Eccedenze', y: 'XI-XII secolo', x: 'Grano, vino, lana e bestiame in più rispetto al consumo.', why: 'Ciò che avanza si porta al mercato e si scambia con denaro o altri beni.' },
            { k: 'Commerci', y: 'XI-XIII secolo', x: 'Mercati settimanali, fiere, traffici marittimi; la moneta torna a circolare.', why: 'Mercanti e artigiani si stabiliscono dove si scambia: le città crescono.' },
            { k: 'Città', y: 'XII secolo', x: 'Nuovi quartieri e borghi fuori dalle mura; immigrazione dalle campagne.', why: 'Gli abitanti, ricchi e organizzati, vogliono governarsi senza dipendere dal vescovo o dal signore.' },
            { k: 'Comuni', y: 'fine XI-XII secolo', x: 'Associazioni giurate di cittadini che eleggono i propri magistrati.', why: '' },
          ] },
        { t: 'p', x: 'La città medievale è un luogo diverso dalla campagna. Chi vi abita da un certo tempo spesso non dipende più da un signore: il principio, riassunto più tardi nel proverbio tedesco «l\'aria della città rende liberi», spinge molti contadini a trasferirsi. Nascono nuovi gruppi sociali, mercanti, banchieri, notai, artigiani, la cui ricchezza non è la terra ma il denaro, le merci, il lavoro qualificato: i [[borghesi|borghesia]], cioè gli abitanti dei borghi.' },
      ],
    },
    {
      id: 'fiandre', title: 'Le Fiandre e le fiere della Champagne',
      blocks: [
        { t: 'p', x: 'Due regioni diventano i poli dell\'economia europea: l\'Italia del Nord, di cui parleremo, e le **Fiandre**. Qui città come **Bruges**, Gand e Ypres lavorano la lana importata dall\'Inghilterra e producono panni di qualità, tinti e rifiniti, venduti in tutta Europa. **Bruges** ha un vantaggio in più: dopo una mareggiata del 1134 il canale dello Zwin la collega direttamente al mare. Diventa il porto dove si incontrano i mercanti del Baltico, gli inglesi e gli italiani; in una sua piazza, davanti alla casa della famiglia Van der Beurse, nel Trecento si riunivano i mercanti per i loro affari: da qui la parola **borsa**.' },
        { t: 'figpair', imgs: ['bruges', 'provins'] },
        { t: 'p', x: 'Tra le Fiandre e l\'Italia, a metà strada, ci sono le **fiere della Champagne**. Quattro città, **Troyes**, **Provins**, **Lagny** e **Bar-sur-Aube**, ospitano a turno sei fiere che coprono l\'intero anno, ciascuna di circa sei settimane. I conti di Champagne capirono che conveniva attirare i mercanti: garantivano scorte armate lungo le strade, guardie e tribunali speciali per le fiere, cambiavalute autorizzati. I fiamminghi portavano i panni, gli italiani spezie, seta, allume e soprattutto capitali.', side: { k: '6', x: 'fiere all\'anno in 4 città: un mercato permanente' } },
        { t: 'p', x: 'Le fiere erano anche una specie di grande stanza di compensazione: nell\'ultima fase di ogni fiera i mercanti saldavano debiti e crediti, spesso senza muovere monete. Declinarono alla fine del Duecento, quando la Champagne passò alla corona francese, le guerre con le Fiandre resero insicure le strade e, dal 1277, le galee genovesi cominciarono a raggiungere Bruges direttamente per mare, passando da Gibilterra.' },
      ],
    },
    {
      id: 'mare', title: 'Le Repubbliche marinare',
      blocks: [
        { t: 'p', x: 'Nel Mediterraneo la rinascita passa per le città di mare italiane. **Amalfi** è la più antica: commercia con Bisanzio e con l\'Egitto già nel X secolo, ma decade dopo la conquista normanna e i saccheggi pisani del 1135 e del 1137. **Pisa** e **Genova** cacciano i Saraceni dalla Sardegna (1015-1016) e prendono il controllo del Tirreno. **Venezia**, formalmente legata a Bisanzio, ottiene nel 1082 dall\'imperatore Alessio I una crisobolla che la esenta dai dazi in tutto l\'impero, in cambio dell\'aiuto della sua flotta contro i Normanni.', side: { k: '1082', x: 'Crisobolla di Alessio I a Venezia' } },
        { t: 'p', x: 'Le **crociate** (la prima è del 1096-1099) aprono i porti del Levante: le flotte italiane trasportano uomini e rifornimenti e in cambio ottengono quartieri, magazzini e privilegi nelle città conquistate, i [[fondaci|fondaco]]. Dall\'Oriente arrivano spezie, seta, cotone, allume; verso l\'Oriente partono panni, legname, metalli. Le Repubbliche sono alleate quando conviene e rivali sempre: Genova distrugge la flotta pisana alla Meloria nel 1284.' },
      ],
    },
    {
      id: 'strumenti', title: 'Commenda, lettera di cambio, fiorino',
      blocks: [
        { t: 'p', x: 'Per commerciare su grandi distanze non bastano le navi. Servono capitali, fiducia, modi per dividere i rischi e per spostare il denaro senza trasportare sacchi di monete. I mercanti italiani inventano o perfezionano gli strumenti che rendono possibile tutto questo.' },
        { t: 'concepts', items: [
          { k: 'Commenda', s: 'dividere il rischio', x: 'Un socio che resta in città (il *commendator*) affida il capitale a un mercante che viaggia. Di solito il primo prende tre quarti del guadagno, il secondo un quarto. Se la nave affonda, uno perde il capitale, l\'altro il lavoro.' },
          { k: 'Lettera di cambio', s: 'muovere denaro senza monete', x: 'Il mercante versa denaro a un banchiere nella sua città e riceve una lettera con cui un corrispondente del banchiere, in un\'altra città, gli pagherà la somma nella moneta locale.' },
          { k: 'Fiorino d\'oro', s: 'una moneta di cui fidarsi', x: 'Coniato da Firenze nel 1252, circa 3,5 grammi d\'oro a 24 carati. Peso e lega restano stabili per secoli: diventa la moneta di riferimento dei commerci internazionali.' },
        ] },
        { t: 'chain', id: 'chain-cambio', title: 'Come funziona una lettera di cambio', intro: 'Un mercante fiorentino deve pagare dei panni a Bruges. Segui i passaggi.',
          nodes: [
            { k: 'Firenze: il versamento', y: 'passo 1', x: 'Il mercante consegna 100 fiorini al banco di un banchiere fiorentino.', why: 'Il banchiere non spedisce le monete: si affida a un suo corrispondente che lavora a Bruges.' },
            { k: 'La lettera', y: 'passo 2', x: 'Il banchiere scrive una lettera al corrispondente: «pagate a tale persona la somma equivalente».', why: 'La lettera viaggia leggera: se viene rubata, non serve a nessuno che non sia il beneficiario.' },
            { k: 'Bruges: il pagamento', y: 'passo 3', x: 'A Bruges il corrispondente paga nella moneta locale, al cambio stabilito.', why: 'Tra il versamento e il pagamento passano settimane e il cambio può includere un guadagno.' },
            { k: 'Il credito nascosto', y: 'conseguenza', x: 'Nel tasso di cambio il banchiere inserisce un compenso per il tempo e il rischio: è un prestito con interesse che non si presenta come tale.', why: '' },
          ] },
        { t: 'figure', img: 'fiorino', size: 'wide' },
        { t: 'p', x: 'L\'ultimo passaggio della catena è importante. La Chiesa condannava come [usura](#/capitolo/cultura/usura) qualsiasi interesse su un prestito; la lettera di cambio permetteva di guadagnare sul tempo senza fare formalmente un prestito. Il fiorino, poi, dice qualcosa sulla potenza di Firenze: nel 1252 anche Genova conia la sua moneta d\'oro, il genovino, e Venezia lo farà nel 1284 con il ducato. Dopo secoli in cui in Occidente circolava quasi solo l\'argento, l\'oro torna in Europa con i mercanti italiani.', side: { k: '1252', x: 'Firenze conia il fiorino d\'oro' } },
      ],
    },
    {
      id: 'societa', title: 'Una società che cambia',
      blocks: [
        { t: 'p', x: 'Lo sviluppo economico non resta chiuso nei magazzini. Trasforma il modo di pensare. Il mercante deve saper leggere, scrivere e fare di conto: nascono le scuole cittadine e le [scuole d\'abaco](#/capitolo/cultura). Deve misurare il tempo, calcolare rischi e profitti, fidarsi di contratti scritti: cresce il peso dei notai e del diritto. Deve conciliare il guadagno con la salvezza dell\'anima: la Chiesa ripensa l\'[usura e l\'aldilà](#/capitolo/cultura/purgatorio).' },
        { t: 'p', x: 'Ma la ricchezza produce anche la sua critica. Non è un caso che i due grandi protagonisti dei movimenti di povertà di questo periodo vengano proprio dal mondo dei mercanti: [Pietro Valdo](#/capitolo/eresie) era un ricco mercante di Lione, [Francesco d\'Assisi](#/capitolo/francesco) il figlio di un mercante di stoffe che commerciava con la Francia. La loro scelta di non toccare il denaro si capisce solo dentro questa economia che lo mette al centro di tutto.' },
        { t: 'quote', x: 'La rinascita economica è la condizione di tutto il resto: senza eccedenze non ci sarebbero state né le città, né le scuole, né la domanda di una Chiesa più povera.', by: 'Il filo che lega questo capitolo ai successivi' },
      ],
    },
  ],

  events: [
    { id: 'ev-1082', y: 1082, date: 'maggio 1082', title: 'Crisobolla di Alessio I', place: 'costantinopoli', people: ['Alessio I Comneno'], x: 'Venezia ottiene l\'esenzione dai dazi in tutto l\'impero bizantino in cambio dell\'aiuto navale contro i Normanni.' },
    { id: 'ev-1086', y: 1086, date: '1086', title: 'Il Domesday Book', place: '', people: ['Guglielmo il Conquistatore'], x: 'Il censimento ordinato dal re d\'Inghilterra registra oltre 5.600 mulini: la diffusione di una tecnologia misurata dalle fonti.' },
    { id: 'ev-1096', y: 1096, date: '1096-1099', title: 'Prima crociata', place: 'gerusalemme', people: ['Urbano II'], x: 'Le flotte di Genova, Pisa e Venezia ottengono quartieri e privilegi nei porti del Levante.' },
    { id: 'ev-1098', y: 1098, date: '21 marzo 1098', title: 'Fondazione di Cîteaux', place: 'citeaux', people: ['Roberto di Molesme'], x: 'Nasce il monastero da cui prende nome l\'ordine cistercense: ritorno alla Regola, povertà, lavoro manuale.' },
    { id: 'ev-1115', y: 1115, date: '1115', title: 'Bernardo fonda Clairvaux', place: 'clairvaux', people: ['Bernardo di Chiaravalle'], x: 'Inizia l\'espansione cistercense: alla morte di Bernardo (1153) le abbazie sono circa 350.' },
    { id: 'ev-1134', y: 1134, date: '1134', title: 'Bruges si apre al mare', place: 'bruges', people: [], x: 'Una mareggiata scava il canale dello Zwin: Bruges diventa il grande porto delle Fiandre.' },
    { id: 'ev-1135', y: 1135, date: '1135', title: 'Fondazione di Chiaravalle', place: 'chiaravalle', people: ['Bernardo di Chiaravalle'], x: 'L\'abbazia cistercense alle porte di Milano bonifica e irriga le campagne circostanti.' },
    { id: 'ev-1180', y: 1180, date: 'fine XII secolo', title: 'Le fiere della Champagne al culmine', place: 'troyes', people: ['conti di Champagne'], x: 'Sei fiere all\'anno a Troyes, Provins, Lagny e Bar-sur-Aube: qui si incontrano i panni fiamminghi e i capitali italiani.' },
    { id: 'ev-1252', y: 1252, date: '1252', title: 'Il fiorino d\'oro', place: 'firenze', people: [], major: true, x: 'Firenze conia una moneta d\'oro puro di peso costante; lo stesso anno Genova conia il genovino.' },
    { id: 'ev-1277', y: 1277, date: '1277', title: 'Galee genovesi a Bruges', place: 'genova', people: [], x: 'Prima rotta marittima regolare dal Mediterraneo al Mare del Nord: inizia il declino delle fiere della Champagne.' },
    { id: 'ev-1284', y: 1284, date: '1284', title: 'Il ducato di Venezia', place: 'venezia', people: [], x: 'Anche Venezia conia una moneta d\'oro. Lo stesso anno Genova sconfigge Pisa alla Meloria.' },
  ],

  glossary: [
    { term: 'Dissodamento', def: 'Messa a coltura di terre incolte: disboscamento, bonifica di paludi, recupero di campi abbandonati.' },
    { term: 'Maggese', def: 'Terreno lasciato a riposo per un anno, perché recuperi fertilità. Spesso vi pascolavano gli animali, che lo concimavano.' },
    { term: 'Rotazione triennale', def: 'Sistema che divide la terra in tre parti: cereali invernali, cereali primaverili o legumi, maggese. Ogni anno si coltivano due terzi della superficie.' },
    { term: 'Aratro pesante', def: 'Aratro a ruote con coltro e versoio, adatto ai terreni pesanti del Nord Europa; richiede molti animali da tiro.' },
    { term: 'Grange', def: 'Aziende agricole dei monasteri cistercensi, lavorate soprattutto dai conversi.' },
    { term: 'Conversi', def: 'Fratelli laici dei monasteri cistercensi, spesso contadini, che si occupavano del lavoro nei campi e nelle grange.' },
    { term: 'Eccedenza', def: 'La parte della produzione che supera il consumo e può essere venduta o scambiata.' },
    { term: 'Borghesia', def: 'Gli abitanti dei borghi e delle città che vivono di commercio, artigianato e professioni, non della terra.' },
    { term: 'Fondaco', def: 'Edificio con magazzini e alloggi che una città mercantile possiede in un porto straniero.' },
    { term: 'Commenda', def: 'Contratto tra un socio che fornisce il capitale e un mercante che viaggia; profitti e rischi sono divisi.' },
    { term: 'Lettera di cambio', def: 'Ordine scritto di pagare una somma in un\'altra città e in un\'altra moneta. Evita il trasporto di contanti e permette un credito mascherato.' },
    { term: 'Fiera', def: 'Grande mercato periodico, di durata più lunga del mercato settimanale, che richiama mercanti da regioni lontane.' },
  ],

  study: {
    questions: [
      { q: 'Quali cause spiegano la crescita demografica dopo il Mille?', a: ['Fine delle invasioni (Vichinghi, Ungari, Saraceni) e maggiore sicurezza.', 'Clima più mite.', 'Innovazioni agricole e dissodamenti: più cibo.', 'Cibo e popolazione si alimentano a vicenda.'] },
      { q: 'Spiega la rotazione triennale e i suoi vantaggi.', a: ['Tre parti: cereali invernali, primaverili o legumi, maggese.', 'Si coltivano 2/3 della terra invece di 1/2.', 'Meno rischio, legumi che arricchiscono il suolo e la dieta, avena per i cavalli.'] },
      { q: 'Perché i Cistercensi sono importanti per la rinascita agricola?', a: ['Cîteaux 1098, Bernardo e Clairvaux 1115.', 'Luoghi isolati, lavoro manuale, grange e conversi.', 'Bonifiche e irrigazione (Chiaravalle, 1135).'] },
      { q: 'Ricostruisci il nesso tra rinascita agricola e Comuni.', a: ['Più produzione → eccedenze.', 'Eccedenze al mercato → moneta e commerci.', 'Mercanti e artigiani nelle città → nuovi gruppi sociali.', 'I cittadini si organizzano per governarsi: i Comuni.'] },
      { q: 'Perché le fiere della Champagne ebbero tanto successo e perché declinarono?', a: ['Posizione tra Fiandre e Italia; sei fiere a rotazione in quattro città.', 'Protezione dei conti: scorte, guardie, tribunali, cambiavalute.', 'Declino: passaggio alla corona francese, guerre, rotta marittima Genova-Bruges dal 1277.'] },
      { q: 'Come funzionano commenda e lettera di cambio, e che rapporto hanno con l\'usura?', a: ['Commenda: capitale di chi resta, lavoro di chi viaggia; profitti e rischi divisi.', 'Lettera di cambio: pagamento in un\'altra città e moneta, senza trasportare contanti.', 'Il guadagno sul cambio è un interesse nascosto: aggira il divieto di usura.'] },
    ],
    quiz: [
      { q: 'Con la rotazione triennale, quale parte della terra si coltiva ogni anno?', o: ['Un terzo', 'La metà', 'Due terzi', 'Tutta'], ok: 2, why: 'Due campi su tre sono coltivati (in stagioni diverse), uno resta a maggese.' },
      { q: 'In quale anno Firenze conia il fiorino d\'oro?', o: ['1082', '1176', '1252', '1284'], ok: 2, why: '1252. Il 1284 è l\'anno del ducato veneziano.' },
      { q: 'Nella commenda chi sopporta la perdita del capitale se la nave affonda?', o: ['Il mercante che viaggia', 'Il socio che ha fornito il capitale', 'Il comune', 'Il banchiere'], ok: 1, why: 'Il socio finanziatore perde il capitale, il viaggiatore perde il suo lavoro.' },
      { q: 'Quale di queste città NON ospitava le fiere della Champagne?', o: ['Troyes', 'Provins', 'Bruges', 'Lagny'], ok: 2, why: 'Bruges è nelle Fiandre; le città delle fiere erano Troyes, Provins, Lagny e Bar-sur-Aube.' },
    ],
  },

  slides: [
    { t: 'chapter' },
    { t: 'points', title: 'Perché l\'Europa cresce', img: 'marzo', pts: [
      ['Sicurezza', 'Finiscono le invasioni; il clima è più mite.'],
      ['Tecnica', 'Aratro pesante, collare rigido, rotazione triennale, mulini.'],
      ['Terra nuova', 'Dissodamenti, bonifiche, villaggi nuovi. I Cistercensi in prima linea.'],
    ] },
    { t: 'chain', ref: 'chain-rinascita' },
    { t: 'points', title: 'Gli strumenti dei mercanti', img: 'fiorino', pts: [
      ['Commenda', 'chi resta mette il capitale, chi viaggia il lavoro.'],
      ['Lettera di cambio', 'il denaro viaggia senza monete.'],
      ['Fiorino d\'oro, 1252', 'una moneta stabile per tutta Europa.'],
    ] },
    { t: 'quote', x: 'Era come se il mondo stesso, scuotendosi e liberandosi della vecchiaia, si rivestisse ovunque di un candido manto di chiese.', o: 'Erat enim instar ac si mundus ipse excutiendo semet, reiecta vetustate, passim candidam ecclesiarum vestem indueret.', cite: 'Rodolfo il Glabro, Historiae, III, 4' },
    { t: 'compare', ref: 'cmp-cluny-citeaux', rows: [0, 1, 3] },
  ],
});

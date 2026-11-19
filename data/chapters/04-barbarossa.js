/* Capitolo IV — Federico Barbarossa e lo scontro con i Comuni. */
MUNDUS.chapter({
  id: 'barbarossa', n: 4, roman: 'IV',
  title: 'Barbarossa e i Comuni',
  kicker: 'Lo scontro tra l\'impero e le città lombarde',
  period: '1152 – 1183', span: [1152, 1190],
  axis: 'Potere',
  cover: 'barbarossa',
  hook: 'L\'imperatore rivendica i suoi diritti, le città la loro libertà: trent\'anni di guerra finiscono con un compromesso.',
  question: 'Che cosa ottengono davvero i Comuni con la Pace di Costanza?',
  lead: 'Federico I di Svevia, detto il Barbarossa, voleva restaurare l\'autorità imperiale in Italia, dove da decenni le città si governavano da sole e si erano prese diritti che spettavano al sovrano. Lo scontro con i Comuni lombardi dura trent\'anni: passa per la dieta di Roncaglia, la distruzione di Milano, la nascita della Lega Lombarda e la battaglia di Legnano, e finisce nel 1183 con la Pace di Costanza.',

  sections: [
    {
      id: 'federico', title: 'Federico I e l\'onore dell\'impero',
      blocks: [
        { t: 'p', drop: true, x: 'Nel 1152 i principi tedeschi eleggono re **Federico di Svevia**, della famiglia degli Hohenstaufen. La scelta ha una logica: suo padre era uno Svevo, sua madre una Welf, cioè apparteneva alla famiglia rivale. Federico sembrava l\'uomo capace di riappacificare la Germania. Il suo programma si riassume in un\'espressione che ricorre nei documenti della cancelleria: l\'[[honor Imperii]], l\'onore dell\'impero, cioè il recupero di tutti i diritti che spettavano all\'imperatore e che altri si erano presi.', side: { k: '1152', x: 'Federico I eletto re di Germania' } },
        { t: 'p', x: 'In Italia quei diritti li avevano presi soprattutto i Comuni. Nel 1153, a Costanza, due cittadini di Lodi si presentarono al re per denunciare le violenze di **Milano**, che aveva distrutto la loro città nel 1111. Federico scrisse ai Milanesi ordinando di lasciare in pace Lodi; secondo il cronista lodigiano Ottone Morena, i consoli di Milano strapparono la lettera. Per un imperatore che parlava di onore, era un\'offesa da non lasciare impunita.' },
      ],
    },
    {
      id: 'discesa', title: 'La prima discesa e Arnaldo da Brescia',
      blocks: [
        { t: 'p', x: 'Nell\'autunno del ==1154== Federico scende in Italia. Riunisce una prima dieta a Roncaglia, sul Po vicino a Piacenza, e punisce le città alleate di Milano: nell\'aprile 1155 distrugge **Tortona**. Poi si dirige a Roma, dove deve essere incoronato imperatore dal papa.', side: { k: '1154', x: 'Prima discesa in Italia' } },
        { t: 'p', x: 'A Roma la situazione era esplosiva. Dal 1143 la città aveva un proprio Comune, con un Senato che contestava il potere temporale del papa. A guidarlo c\'era **Arnaldo da Brescia**, un canonico che era stato allievo di Abelardo a Parigi e predicava che il clero dovesse rinunciare alle ricchezze e al potere politico. Papa Adriano IV aveva colpito Roma con l\'interdetto e chiedeva la consegna di Arnaldo. Federico lo fece catturare e lo consegnò alla Curia: Arnaldo fu impiccato, il corpo bruciato e le ceneri disperse nel Tevere. Il 18 giugno 1155 Adriano IV incoronò Federico imperatore.' },
        { t: 'focus', title: 'Perché papa e imperatore si alleano contro Arnaldo', x: [
          'Papa e imperatore erano rivali, ma in questo caso avevano lo stesso nemico. Il Comune di Roma toglieva al papa il governo della sua città; e un Comune che si dava un Senato e pretendeva di disporre della corona imperiale (i Romani offrirono a Federico di incoronarlo loro, e lui rifiutò sdegnato) negava anche il fondamento del potere dell\'imperatore.',
          'Arnaldo univa due minacce: la critica religiosa a una Chiesa ricca, che tornerà nei [movimenti ereticali](#/capitolo/eresie), e l\'autonomia cittadina, che è la stessa dei Comuni lombardi. Consegnandolo, Federico mostrava al papa di essere il protettore della Chiesa e a tutti di non tollerare città ribelli.',
        ] },
      ],
    },
    {
      id: 'rivali', title: 'Milano e le città rivali',
      blocks: [
        { t: 'p', x: 'I Comuni lombardi non erano un fronte unito. **Milano** era di gran lunga la città più forte e cercava di dominare le vicine: aveva distrutto Lodi nel 1111 e sottomesso Como dopo una guerra di dieci anni (1118-1127). Le città minacciate, cioè **Lodi**, **Como**, **Pavia**, **Cremona**, vedevano nell\'imperatore un protettore. Milano poteva contare su alleate come **Crema** e **Tortona**.' },
        { t: 'p', x: 'Questa rete di rivalità spiega molto. Federico non combatte «i Comuni» contro «l\'impero»: combatte Milano con l\'aiuto di metà delle città lombarde. E quando quelle stesse città, più tardi, passeranno dalla parte di Milano, non sarà per un improvviso amore della libertà comune, ma perché il governo imperiale si era rivelato più pesante della minaccia milanese. Sull\'[atlante](#/atlante/milano) si vede quanto fossero vicine tra loro.' },
      ],
    },
    {
      id: 'roncaglia', title: 'La dieta di Roncaglia (1158)',
      blocks: [
        { t: 'p', x: 'Nel 1158 Federico torna in Italia con un grande esercito, assedia Milano e la costringe alla resa. A novembre convoca la seconda dieta di **Roncaglia**. Al suo fianco ci sono quattro grandi maestri di diritto dello Studio di Bologna (Bulgaro, Martino Gosia, Iacopo e Ugo di Porta Ravegnana), che sulla base del diritto romano di Giustiniano definiscono quali sono le [[regalie]], cioè i diritti che spettano solo al sovrano.', side: { k: '1158', x: 'Dieta di Roncaglia: le regalie' } },
        { t: 'source', id: 'src-regalie', title: 'Che cosa sono le regalie', author: 'Constitutio de regalibus, Roncaglia', date: 'novembre 1158',
          it: ['Le regalie sono queste: le arimannie, le strade pubbliche, i fiumi navigabili […], i porti, i diritti di approdo, i dazi che volgarmente si chiamano telonei, le monete, i proventi delle multe e delle pene, i beni rimasti senza erede […], le prestazioni con carri e navi e il contributo straordinario per la spedizione del re, il potere di nominare i magistrati per amministrare la giustizia, le miniere d\'argento e i palazzi nelle città, i redditi della pesca e delle saline […].'],
          orig: ['Regalia sunt hec: armandie, vie publice, flumina navigabilia […], portus, ripatica, vectigalia que vulgo dicuntur tholonea, monete, mulctarum penarumque compendia, bona vacantia […], angariarum et parangariarum et plaustrorum et navium prestationes et extraordinaria collatio ad felicissimam regalis numinis expeditionem, potestas constituendorum magistratuum ad iustitiam expediendam, argentarie et palatia in civitatibus consuetis, piscationum redditus et salinarum […].'],
          ref: '*Constitutio de regalibus* (1158), in MGH, *Diplomata Friderici I*, n. 237 (estratto).',
          note: 'Quasi ogni voce dell\'elenco era nelle mani dei Comuni: battevano moneta, riscuotevano pedaggi, giudicavano, eleggevano i consoli. Applicata alla lettera, la costituzione toglieva alle città tutto ciò che le rendeva Comuni.' },
        { t: 'p', x: 'Le città avrebbero potuto conservare una regalia solo dimostrando di averla ricevuta per concessione imperiale, cosa che quasi nessuna poteva fare. Le altre costituzioni di Roncaglia stabilivano che ogni potere di giurisdizione deriva dall\'imperatore e che i magistrati devono ricevere da lui l\'investitura, e che l\'imperatore può costruire un palazzo in ogni città. Qui sta il punto: Federico non voleva solo denaro, voleva che **i magistrati cittadini dipendessero da lui**.' },
        { t: 'precise', items: [
          'Le diete di Roncaglia sono **due**: nel **1154**, durante la prima discesa, e nel **1158**, quella delle regalie. Quando si parla della dieta di Roncaglia senza altre indicazioni si intende quella del 1158.',
        ] },
      ],
    },
    {
      id: 'podesta', title: 'Due podestà: quello del Comune e quello dell\'imperatore',
      blocks: [
        { t: 'p', x: 'Per controllare le città, dopo Roncaglia Federico vi invia dei funzionari, chiamati nelle fonti *potestates*, podestà. Erano spesso tedeschi o italiani di sua fiducia, riscuotevano le regalie e il [[fodro]], esercitavano la giustizia in nome dell\'imperatore. La parola è la stessa che pochi decenni dopo indicherà il magistrato dei [Comuni podestarili](#/capitolo/comuni/podestarile). Ma il significato è opposto.' },
        { t: 'compare', id: 'cmp-podesta', title: 'Podestà comunale e funzionario imperiale',
          a: { name: 'Podestà del Comune', sub: 'dalla fine del XII secolo' },
          b: { name: 'Podestà imperiale', sub: 'dopo Roncaglia, 1158-1167' },
          rows: [
            { k: 'Chi lo sceglie', a: 'Il Comune stesso, attraverso i suoi consigli.', b: 'L\'imperatore o i suoi rappresentanti.' },
            { k: 'Da dove viene', a: 'Da un\'altra città, perché sia estraneo alle fazioni locali.', b: 'Spesso dalla Germania o dalla cerchia imperiale: estraneo per controllare la città.' },
            { k: 'Durata', a: 'Sei mesi o un anno, poi se ne va.', b: 'Quanto vuole l\'imperatore.' },
            { k: 'A chi risponde', a: 'Alla città: giura sugli statuti ed è sottoposto al sindacato.', b: 'All\'imperatore: la città non può né controllarlo né rimuoverlo.' },
            { k: 'Scopo', a: 'Pacificare le famiglie in lotta e amministrare la giustizia per conto del Comune.', b: 'Riscuotere le regalie e il fodro, sottomettere il Comune all\'autorità imperiale.' },
            { k: 'Significato politico', a: 'Uno strumento dell\'**autonomia** comunale.', b: 'La **negazione** dell\'autonomia comunale.' },
          ],
          end: 'Stesso nome, funzione rovesciata. Quando un Comune sceglie da sé il proprio podestà sta esercitando proprio quella libertà che il Barbarossa voleva togliergli. È significativo che le città abbiano ripreso il nome della magistratura imposta dall\'imperatore, cambiandone del tutto il senso.' },
        { t: 'p', x: 'Il governo dei funzionari imperiali fu durissimo: tasse raddoppiate, requisizioni, arbitrî. Fu proprio questa esperienza a convincere anche le città alleate di Federico, come Cremona, che la sua «protezione» costava più della minaccia di Milano.' },
      ],
    },
    {
      id: 'milano', title: 'La distruzione di Milano',
      blocks: [
        { t: 'p', x: 'Milano rifiutò di accogliere i funzionari imperiali e la guerra riprese. Prima toccò a **Crema**, alleata di Milano, assediata per sei mesi e rasa al suolo nel gennaio 1160: le cronache raccontano che gli assedianti legarono prigionieri, anche bambini, alle macchine da guerra. Poi a Milano: dopo un lungo assedio la città si arrese il 1° marzo ==1162==. Federico ordinò di distruggerla e di disperderne gli abitanti in quattro borghi; all\'opera parteciparono volentieri i soldati di Lodi, Cremona, Pavia, Como e Novara. Nel 1164 l\'arcivescovo di Colonia, cancelliere dell\'imperatore, portò in Germania le reliquie dei Magi, che sono ancora oggi nel duomo di Colonia.', side: { k: '1162', x: 'Resa e distruzione di Milano' } },
        { t: 'p', x: 'Intanto si era riaperto anche il conflitto con la Chiesa. Nel 1159, alla morte di Adriano IV, la maggioranza dei cardinali elesse **Alessandro III**, che come legato aveva già contestato Federico (a Besançon, nel 1157, aveva lasciato intendere che l\'impero fosse un «beneficio» concesso dal papa). Una minoranza filoimperiale elesse un antipapa, Vittore IV. Lo [[scisma]] durò diciotto anni e fece del papa legittimo l\'alleato naturale dei Comuni.' },
      ],
    },
    {
      id: 'lega', title: 'Dalla Lega Veronese alla Lega Lombarda',
      blocks: [
        { t: 'p', x: 'La reazione partì dal Veneto. Nel ==1164== **Verona**, Vicenza, Padova e Treviso, con l\'appoggio di Venezia, formarono la **Lega Veronese** per resistere ai funzionari imperiali. Tre anni dopo, nel ==1167==, anche le città lombarde si unirono: Cremona, Bergamo, Brescia, Mantova e i Milanesi dispersi giurarono di aiutarsi; il 27 aprile 1167 i Milanesi rientrarono nella loro città e cominciarono a ricostruirla con l\'aiuto dei nuovi alleati. Alla fine dell\'anno la lega lombarda e quella veronese si fusero nella **Societas Lombardiae**, la Lega Lombarda, che arrivò a comprendere una ventina di città.', side: { k: '1167', x: 'Nasce la Lega Lombarda; Milano risorge' } },
        { t: 'p', x: 'Nello stesso 1167 l\'esercito di Federico, che aveva appena occupato Roma, fu decimato da un\'epidemia; l\'anno dopo l\'imperatore dovette ripassare le Alpi quasi in fuga, travestito, da Susa. Nel 1168 la Lega fondò una città nuova, una fortezza contro l\'impero, e la chiamò **Alessandria**, in onore del papa alleato. Nel 1174-1175 resistette all\'assedio di Federico.' },
        { t: 'precise', items: [
          'La **Lega Veronese** è del **1164**; la **Lega Lombarda** del **1167**. Le due si fondono alla fine del 1167.',
          'Il **giuramento di Pontida** (7 aprile 1167) è una tradizione: ne parla una fonte molto più tarda, e gli storici lo considerano poco attendibile. È certo invece che la Lega nasce nel 1167.',
        ] },
      ],
    },
    {
      id: 'legnano', title: 'Legnano (1176)',
      blocks: [
        { t: 'p', x: 'Il 29 maggio ==1176==, vicino a **Legnano**, l\'esercito della Lega incontra quello del Barbarossa, rinforzato da cavalieri tedeschi. La cavalleria lombarda viene respinta, ma la fanteria milanese resiste intorno al [[Carroccio]], il carro con le insegne e l\'altare della città; il ritorno della cavalleria, con i Bresciani, rovescia la battaglia. Federico è disarcionato e per qualche giorno lo si crede morto; ricompare a Pavia.', side: { k: '1176', x: '29 maggio: battaglia di Legnano' } },
        { t: 'figure', img: 'legnano', size: 'wide' },
        { t: 'p', x: 'Legnano non distrusse l\'impero, ma convinse Federico che la guerra non si poteva vincere. Nel 1177, con la **pace di Venezia**, si riconciliò con Alessandro III, mettendo fine allo scisma, e firmò una tregua di sei anni con i Comuni. Il quadro di Amos Cassioli qui sopra è del 1870: per il Risorgimento Legnano era diventata il simbolo degli Italiani uniti contro lo straniero (ancora oggi l\'inno nazionale dice «dovunque è Legnano»). È una lettura ottocentesca: nel 1176 metà delle città lombarde aveva combattuto dalla parte dell\'imperatore.' },
        { t: 'precise', items: [
          '**Alberto da Giussano**, il condottiero che guida la Compagnia della Morte, compare solo in un cronista milanese del Trecento (Galvano Fiamma): non ci sono prove che sia esistito.',
        ] },
      ],
    },
    {
      id: 'costanza', title: 'La Pace di Costanza (1183)',
      blocks: [
        { t: 'p', x: 'Scaduta la tregua, il 25 giugno ==1183== Federico e il figlio Enrico firmano a **Costanza** la pace con le città della Lega. È un compromesso, e va letto nelle sue due metà.', side: { k: '1183', x: '25 giugno: Pace di Costanza' } },
        { t: 'cmp2', a: { k: 'Che cosa ottengono i Comuni', items: ['Le **regalie** che già esercitavano, dentro e fuori le mura, e le loro consuetudini.', 'Il diritto di **eleggere i propri consoli**.', 'Il diritto di fortificarsi e di mantenere la **Lega**.'] },
          b: { k: 'Che cosa riconoscono all\'imperatore', items: ['La sua **sovranità**: i consoli ricevono da lui (o dal suo rappresentante) l\'investitura.', 'Un **giuramento di fedeltà** dei cittadini, da rinnovare ogni dieci anni.', 'L\'**appello** alla giustizia imperiale per le cause più importanti e il fodro quando l\'imperatore scende in Italia.'] } },
        { t: 'source', id: 'src-costanza', title: 'La concessione delle regalie', author: 'Pace di Costanza', date: '25 giugno 1183',
          it: ['Noi Federico, imperatore dei Romani, e nostro figlio Enrico, re dei Romani, concediamo a voi, città, luoghi e persone della Lega, le regalie e le vostre consuetudini, tanto in città quanto fuori della città […], in perpetuo.'],
          orig: ['Nos Romanorum imperator Fridericus et filius noster Heinricus Romanorum rex concedimus vobis civitatibus, locis et personis societatis regalia et consuetudines vestras tam in civitate quam extra civitatem […] in perpetuum.'],
          ref: 'Pace di Costanza (1183), MGH, *Constitutiones*, I (estratto).',
          note: 'Il verbo decisivo è *concedimus*: le regalie non sono riconosciute come un diritto proprio delle città, ma concesse dall\'imperatore. Le città ottengono ciò che volevano in pratica, l\'imperatore salva il principio da cui tutto deriva.' },
        { t: 'chain', id: 'chain-barbarossa', title: 'Dall\'autonomia comunale alla Pace di Costanza', intro: 'Il terzo nesso fondamentale del percorso.',
          nodes: [
            { k: 'Autonomia comunale', y: 'XII secolo', x: 'Le città eleggono i consoli, battono moneta, riscuotono pedaggi: esercitano di fatto le regalie.', why: 'Per Federico è un\'usurpazione: l\'honor Imperii richiede che quei diritti tornino al sovrano.' },
            { k: 'Scontro con il Barbarossa', y: '1154-1162', x: 'Roncaglia (1158) rivendica le regalie e impone funzionari imperiali; Milano è distrutta (1162).', why: 'Il governo imperiale è così pesante che anche le città nemiche di Milano cambiano campo.' },
            { k: 'Lega Lombarda', y: '1167', x: 'Le città lombarde si alleano, ricostruiscono Milano, si uniscono alla Lega Veronese (1164) e al papa Alessandro III.', why: 'Unite e alleate al papa, le città possono affrontare l\'imperatore in campo aperto.' },
            { k: 'Legnano', y: '29 maggio 1176', x: 'La fanteria della Lega, intorno al Carroccio, resiste e sconfigge l\'esercito imperiale.', why: 'Federico capisce di non poter vincere militarmente: pace con il papa (Venezia, 1177) e tregua con i Comuni.' },
            { k: 'Pace di Costanza', y: '1183', x: 'Ai Comuni le regalie e l\'elezione dei consoli; all\'imperatore il riconoscimento della sovranità.', why: '' },
          ] },
        { t: 'p', x: 'La Pace di Costanza è dunque una vittoria dei Comuni, ma non un\'indipendenza: le città restano formalmente parte del Regno d\'Italia e dell\'impero. Pochi anni dopo i rapporti erano così cambiati che, nel 1186, il figlio di Federico, **Enrico**, sposò Costanza d\'Altavilla proprio a Milano, nella basilica di Sant\'Ambrogio. È il matrimonio da cui parte il [capitolo V](#/capitolo/innocenzo). Federico morì nel 1190, annegato nel fiume Saleph in Anatolia durante la terza crociata.' },
        { t: 'figure', img: 'salef', size: 'inset' },
        { t: 'precise', items: [
          'Con la Pace di Costanza i Comuni ottengono **ampie autonomie** ma **riconoscono formalmente l\'autorità imperiale**: i consoli ricevono l\'investitura dall\'imperatore e i cittadini gli giurano fedeltà.',
        ] },
      ],
    },
  ],

  events: [
    { id: 'ev-1152', y: 1152, date: 'marzo 1152', title: 'Federico I re di Germania', place: 'aquisgrana', people: ['Federico I'], x: 'Eletto a Francoforte e incoronato ad Aquisgrana, Federico, figlio di uno Svevo e di una Welf, promette di restaurare l\'onore dell\'impero.' },
    { id: 'ev-1153', y: 1153, date: 'marzo 1153', title: 'I Lodigiani a Costanza', place: 'costanza', people: ['Federico I'], x: 'Due cittadini di Lodi chiedono giustizia contro Milano: la lettera imperiale viene strappata dai consoli milanesi.' },
    { id: 'ev-1154', y: 1154, date: 'autunno 1154', title: 'Prima discesa in Italia', place: 'roncaglia', people: ['Federico I'], x: 'Prima dieta di Roncaglia; nell\'aprile 1155 Tortona, alleata di Milano, è distrutta.' },
    { id: 'ev-1155', y: 1155, date: '18 giugno 1155', title: 'Arnaldo e l\'incoronazione', place: 'roma', people: ['Federico I', 'Adriano IV', 'Arnaldo da Brescia'], x: 'Federico consegna Arnaldo da Brescia, che viene giustiziato, e riceve la corona imperiale da Adriano IV.' },
    { id: 'ev-1158', y: 1158, date: 'novembre 1158', title: 'Dieta di Roncaglia', place: 'roncaglia', people: ['Federico I', 'i quattro dottori di Bologna'], major: true, x: 'Con i giuristi bolognesi l\'imperatore definisce le regalie e pretende che i magistrati delle città dipendano da lui.' },
    { id: 'ev-1159', y: 1159, date: 'settembre 1159', title: 'Lo scisma', place: 'roma', people: ['Alessandro III', 'Vittore IV'], x: 'Due papi: Alessandro III, eletto dalla maggioranza, e l\'antipapa filoimperiale Vittore IV. Il papa legittimo si allea con i Comuni.' },
    { id: 'ev-1160', y: 1160, date: 'gennaio 1160', title: 'Distruzione di Crema', place: 'crema', people: ['Federico I'], x: 'Dopo sei mesi di assedio la città alleata di Milano viene rasa al suolo.' },
    { id: 'ev-1162', y: 1162, date: '1° marzo 1162', title: 'Milano distrutta', place: 'milano', people: ['Federico I'], major: true, x: 'La città si arrende e viene distrutta con l\'aiuto delle città rivali; gli abitanti sono dispersi in quattro borghi.' },
    { id: 'ev-1164', y: 1164, date: '1164', title: 'Lega Veronese', place: 'verona', people: [], x: 'Verona, Vicenza, Padova e Treviso, sostenute da Venezia, si uniscono contro i funzionari imperiali.' },
    { id: 'ev-1167', y: 1167, date: '1167', title: 'Lega Lombarda', place: 'pontida', people: [], major: true, x: 'Le città lombarde si alleano e ricostruiscono Milano (27 aprile); a fine anno si fondono con la Lega Veronese.' },
    { id: 'ev-1168', y: 1168, date: '1168', title: 'Fondazione di Alessandria', place: 'alessandria', people: ['Alessandro III'], x: 'La Lega fonda una città-fortezza e la intitola al papa alleato; resisterà all\'assedio del 1174-1175.' },
    { id: 'ev-1176', y: 1176, date: '29 maggio 1176', title: 'Battaglia di Legnano', place: 'legnano', people: ['Federico I'], major: true, x: 'La fanteria della Lega resiste intorno al Carroccio e sconfigge l\'esercito imperiale.' },
    { id: 'ev-1177', y: 1177, date: 'luglio 1177', title: 'Pace di Venezia', place: 'venezia', people: ['Federico I', 'Alessandro III'], x: 'Fine dello scisma e tregua di sei anni con i Comuni.' },
    { id: 'ev-1183', y: 1183, date: '25 giugno 1183', title: 'Pace di Costanza', place: 'costanza', people: ['Federico I', 'Enrico VI'], major: true, x: 'Regalie ed elezione dei consoli ai Comuni; riconoscimento della sovranità imperiale.' },
    { id: 'ev-1190', y: 1190, date: '10 giugno 1190', title: 'Morte del Barbarossa', place: 'saleph', people: ['Federico I'], x: 'L\'imperatore annega nel fiume Saleph, in Anatolia, durante la terza crociata.' },
  ],

  glossary: [
    { term: 'Honor Imperii', def: 'L\'«onore dell\'impero»: il complesso dei diritti e del prestigio dell\'imperatore, che Federico I vuole restaurare.' },
    { term: 'Regalie', def: 'I diritti che spettano al sovrano: nomina dei magistrati, moneta, pedaggi, dazi, giustizia, miniere, tributi straordinari.' },
    { term: 'Dieta', def: 'Assemblea dei grandi del regno convocata dal re o dall\'imperatore.' },
    { term: 'Fodro', def: 'Tributo in natura o in denaro per il mantenimento dell\'esercito imperiale quando scendeva in Italia.' },
    { term: 'Scisma', def: 'Divisione della Chiesa: in questo caso, la presenza contemporanea di due papi (1159-1177).' },
    { term: 'Carroccio', def: 'Grande carro con le insegne del Comune e un altare, trainato da buoi: simbolo della città in battaglia e punto di raccolta della fanteria.' },
    { term: 'Lega Lombarda', def: 'Alleanza giurata delle città dell\'Italia settentrionale contro Federico I, nata nel 1167.' },
  ],

  study: {
    questions: [
      { q: 'Che cosa intendeva Federico I per honor Imperii e perché lo portò in Italia?', a: ['Il recupero dei diritti imperiali usurpati.', 'In Italia i Comuni esercitavano di fatto le regalie.', 'L\'appello dei Lodigiani (1153) e lo sgarbo di Milano.'] },
      { q: 'Perché papa e imperatore si alleano contro Arnaldo da Brescia?', a: ['Il Comune di Roma toglieva al papa il governo della città.', 'Rivendicava anche il diritto di disporre della corona imperiale.', 'Arnaldo univa critica alla Chiesa ricca e autonomia cittadina.', '1155: Arnaldo giustiziato, Federico incoronato.'] },
      { q: 'Che cosa stabilisce la dieta di Roncaglia del 1158?', a: ['Con i quattro dottori di Bologna e il diritto romano definisce le regalie.', 'Le città possono tenerle solo con una concessione imperiale.', 'Ogni giurisdizione deriva dall\'imperatore; magistrati investiti da lui; funzionari imperiali nelle città.'] },
      { q: 'Spiega la differenza tra il podestà scelto dal Comune e il funzionario imperiale.', a: ['Chi lo sceglie: la città / l\'imperatore.', 'A chi risponde: alla città, con il sindacato / all\'imperatore.', 'Scopo: pacificare e amministrare / riscuotere e sottomettere.', 'Strumento dell\'autonomia / negazione dell\'autonomia.'] },
      { q: 'Ricostruisci la sequenza Lega Veronese, Lega Lombarda, Legnano.', a: ['1164 Lega Veronese (Verona, Vicenza, Padova, Treviso).', '1167 Lega Lombarda; Milano ricostruita; fusione con la Veronese.', '1168 Alessandria.', '29 maggio 1176 Legnano; 1177 pace di Venezia.'] },
      { q: 'Che cosa ottengono e che cosa concedono i Comuni con la Pace di Costanza?', a: ['Ottengono regalie, consuetudini, elezione dei consoli, la Lega.', 'Riconoscono la sovranità imperiale: investitura dei consoli, giuramento di fedeltà, appello.', 'Autonomia di fatto, non indipendenza.'] },
    ],
    quiz: [
      { q: 'In che anno nasce la Lega Lombarda?', o: ['1158', '1164', '1167', '1176'], ok: 2, why: '1167. Nel 1164 nasce la Lega Veronese; nel 1176 si combatte a Legnano.' },
      { q: 'Con la Pace di Costanza (1183) i Comuni:', o: ['Diventano stati indipendenti dall\'impero', 'Ottengono le regalie ma riconoscono la sovranità imperiale', 'Perdono il diritto di eleggere i consoli', 'Si sottomettono al papa'], ok: 1, why: 'Ampie autonomie, ma i consoli ricevono l\'investitura imperiale e i cittadini giurano fedeltà.' },
      { q: 'Chi aiutò Federico a definire le regalie a Roncaglia?', o: ['I monaci di Cluny', 'Quattro maestri di diritto di Bologna', 'I consoli di Milano', 'Il papa Adriano IV'], ok: 1, why: 'Bulgaro, Martino Gosia, Iacopo e Ugo di Porta Ravegnana, sulla base del diritto romano.' },
      { q: 'Quale città fu distrutta nel 1162?', o: ['Lodi', 'Crema', 'Milano', 'Tortona'], ok: 2, why: 'Milano si arrese il 1° marzo 1162. Crema era stata distrutta nel 1160, Tortona nel 1155.' },
      { q: 'Il funzionario imperiale inviato nelle città dopo Roncaglia:', o: ['Era scelto dai consigli cittadini', 'Rispondeva all\'imperatore e riscuoteva le regalie', 'Era sottoposto al sindacato', 'Restava in carica sei mesi'], ok: 1, why: 'Era nominato dall\'imperatore e serviva a controllare la città, il contrario del podestà comunale.' },
    ],
  },

  slides: [
    { t: 'chapter' },
    { t: 'points', title: 'Che cosa vuole il Barbarossa', img: 'barbarossa', pts: [
      ['Honor Imperii', 'recuperare i diritti dell\'impero.'],
      ['Regalie', 'Roncaglia 1158: moneta, pedaggi, giustizia, magistrati.'],
      ['Controllo', 'funzionari imperiali nelle città.'],
    ] },
    { t: 'compare', ref: 'cmp-podesta', rows: [0, 3, 5] },
    { t: 'chain', ref: 'chain-barbarossa' },
    { t: 'dates', items: [['1158', 'Roncaglia', 'le regalie'], ['1162', 'Milano distrutta', ''], ['1167', 'Lega Lombarda', 'dopo la Veronese del 1164'], ['1176', 'Legnano', ''], ['1183', 'Costanza', 'autonomia e sovranità']] },
    { t: 'quote', x: 'Concediamo a voi, città, luoghi e persone della Lega, le regalie e le vostre consuetudini.', o: 'Concedimus vobis civitatibus, locis et personis societatis regalia et consuetudines vestras.', cite: 'Pace di Costanza · 1183' },
  ],
});

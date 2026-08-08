/* ============================================================
   TF1+ — Étude de cas · données extraites du fichier Figma
   Format des nœuds :
     ["T", x, y, largeur, "Famille|Graisse", corps, interligne, interlettrage, align, couleur, texte]
     ["R", x, y, largeur, hauteur, couleur, opacité]
   ============================================================ */

const LOGO_PATH = "M-41648.488-6016.584H-41805.5v-61h157.016v-149.057l63.309-13.94v163h156.68v61h-156.68v147.8l-63.309,15.292Zm-468.281,163.094v-340.647l177.207-50.19v390.837Zm-472.812,0v-390.837h313.246v98.1h-144.57v70.5H-42317v98.088h-103.906v124.151Zm-414.832,0v-255.958h-87.09v-134.879h342.367v134.879h-87.09v255.958Z";

/* Halos du mesh — reproduits en dégradés radiaux */
const HALOS = [
  { x: -300, y: -340, w: 1000, h: 700,  c: "74,32,230",  a: 0.88 },
  { x: -428, y:  580, w:  760, h: 1000, c: "10,31,232",  a: 0.90 },
  { x: 1690, y:  390, w:  600, h:  620, c: "42,24,216",  a: 0.34 },
  { x:  960, y:  220, w: 1583, h: 1320, c: "16,36,240",  a: 0.92 }
];

const SLIDES = [

/* 01 — Couverture */
{ bg:"#000a64", mesh:true, logo:"grand", notes:
"- Cadrer en une phrase : **étude de cas produit et modèle économique**, construite uniquement sur des sources publiques. Pas de données internes, pas d'entretien.\n- Annoncer la structure : le terrain, le chiffre qu'on ne publie pas, les trois modèles de paiement, ce que le public en dit, ce que le cas enseigne — et une prise de position pour finir.\n- **Poser la question et la laisser respirer.** Elle tient tout le deck : si le catalogue est intégralement accessible sans payer, que reste-t-il à vendre ?\n- *Compter environ 25 minutes sur 15 slides. Les slides 8 et 11 sont des pauses : ne pas les précipiter.*",
n:[
["T",140,120,185,"SG|Medium",22,0,11,"L","#00c8ff","ÉTUDE DE CAS"],
["T",140,590,1200,"SG|Medium",62,78,0,"L","#edf1ff","Que vaut une offre payante quand tout est déjà gratuit ?"],
["R",140,962,1640,1,"#ffffff",1],
["T",140,1000,1276,"PM|Regular",20,0,11,"L","#ffffff","PRODUIT & MODÈLE ÉCONOMIQUE     ·     STREAMING FRANCE     ·     DONNÉES PUBLIQUES S1 2026"]
]},

/* 02 — Le terrain */
{ bg:"#f4f6fb", mesh:false, logo:"petit", notes:
"- Ne pas lire les cinq chiffres. En commenter deux : **42 millions** pour l'échelle, **39 % de part de marché sur les 15-34 ans** pour la vraie valeur de l'actif.\n- Le point qui surprend en général : cette audience jeune a été gagnée **en gratuit**, pas en achetant du contenu premium.\n- Le 70 % sur téléviseur revient plus tard dans les tensions de conception — le poser ici sans l'expliquer.\n- *Si on demande la source : résultats S1 2026 et S1 2025 du groupe, et communication TF1 Pro pour le bilan 2025.*",
n:[
["T",140,121,295,"PM|Medium",22,0,11,"L","#0032ff","§ 01  ·  LE TERRAIN"],
["T",140,200,1260,"SG|Bold",62,70,0,"L","#000a64","Un modèle financé par la publicité, pas par l'abonnement"],
["T",140,390,1369,"SG|Regular",28,44,0,"L","#55608a","La croissance est réelle et rapide. Mais la force du dossier n'est pas le volume brut : c'est sa composition, et le fait qu'elle a été gagnée en gratuit."],
["R",140,600,300,3,"#0032ff",1],
["T",140,628,300,"SG|Bold",72,78,0,"L","#000a64","42 M"],
["T",140,728,290,"SG|Regular",21,30,0,"L","#55608a","streamers mensuels au S1 2026"],
["R",475,600,300,1,"#d5dcf0",1],
["T",475,628,300,"SG|Bold",72,78,0,"L","#000a64","+20 %"],
["T",475,728,290,"SG|Regular",21,30,0,"L","#55608a","vs 35 M au S1 2025"],
["R",810,600,300,1,"#d5dcf0",1],
["T",810,628,300,"SG|Bold",72,78,0,"L","#000a64","14 M"],
["T",810,728,290,"SG|Regular",21,30,0,"L","#55608a","de 15-34 ans chaque mois — 2025"],
["R",1145,600,300,1,"#d5dcf0",1],
["T",1145,628,300,"SG|Bold",72,78,0,"L","#000a64","39 %"],
["T",1145,728,290,"SG|Regular",21,30,0,"L","#55608a","de part de marché sur les jeunes — 2025"],
["R",1480,600,300,1,"#d5dcf0",1],
["T",1480,628,300,"SG|Bold",72,78,0,"L","#000a64","70 %"],
["T",1480,728,290,"SG|Regular",21,30,0,"L","#55608a","de la consommation sur téléviseur — 2025"],
["T",140,1000,1640,"PM|Regular",15,22,10,"L","#7a84a8","SOURCES  —  RÉSULTATS TF1 S1 2026 ET S1 2025  ·  TF1 PRO, BILAN TF1+ 2025"]
]},

/* 03 — Le paradoxe */
{ bg:"#00073f", mesh:false, logo:"petit", notes:
"- Le paradoxe est le seul élément à faire retenir de l'ouverture : **une audience massive, une conversion marginale, et c'est délibéré**.\n- Insister sur le fait que ce n'est pas un échec commercial — TF1+ n'a jamais cherché à être un service d'abonnement. La question est de savoir ce que vaut le payant dans ce contexte.\n- Énumérer les bénéfices Premium sans les survendre : ils existent, mais la perception dominante reste le retrait de la publicité.\n- **Transition** : « pour comprendre ce que vaut cet abonnement, il faut d'abord regarder d'où vient l'argent. »",
n:[
["T",140,120,170,"PM|Medium",22,0,11,"L","#00c8ff","LE PARADOXE"],
["T",140,306,1300,"SG|Bold",104,116,0,"L","#edf1ff","42 millions d'utilisateurs, et un catalogue déjà intégralement gratuit."],
["T",140,717,1550,"SG|Regular",30,46,0,"L","#ffffff","TF1+ vend malgré tout un abonnement à 5,99 € : sans publicité, mais aussi avant-premières, Full HD, téléchargement, contrôle du direct et chaînes exclusives. Reste à savoir ce qui, dans ce paquet, déclenche réellement l'achat."],
["T",140,1000,1640,"PM|Regular",15,22,10,"L","#5a67a8","SOURCES  —  RÉSULTATS TF1 S1 2026  ·  OFFRE PREMIUM TELLE QUE PUBLIÉE PAR TF1+"]
]},

/* 04 — Figure 1 */
{ bg:"#f4f6fb", mesh:false, logo:"petit", notes:
"- Le graphique dit tout : **81 % du chiffre d'affaires numérique vient de la publicité**. Laisser deux secondes de silence avant de commenter.\n- Le solde de 25 M€ n'est pas l'abonnement seul — il agrège aussi TF1info, la TV segmentée, le transactionnel et le micropaiement. C'est cette imprécision qui interdit d'en déduire un nombre d'abonnés.\n- La citation sur YouTube est le meilleur raccourci pour faire comprendre la nature du modèle : **une bataille d'attention gratuite, pas une bataille d'abonnement**.\n- **Source à donner si on challenge** : Rodolphe Belmer, PDG du groupe TF1, entretien au *Monde*, **janvier 2025**. C'est la désignation de TF1 elle-même, pas une analyse personnelle.\n- **Pourquoi c'est logique** : l'objectif affiché est 10 % du marché de la publicité vidéo digitale d'ici 2027 contre 7 % — trois points qui ne se prennent pas à Netflix.\n- **L'argument est aussi réglementaire** : TF1 est soumis à des obligations que YouTube contourne en tant qu'hébergeur. La phrase a une fonction de lobbying autant que de constat.\n- *Réserve : la citation date de janvier 2025, avant l'accord Netflix. Donner la date plutôt que de laisser croire qu'elle est de cette année.*",
n:[
["T",140,120,466,"PM|Medium",22,0,11,"L","#0032ff","FIGURE 1  ·  RÉSULTATS S1 2026"],
["T",140,244,580,"SG|Bold",62,70,0,"L","#000a64","D'où vient l'argent du numérique"],
["T",140,500,500,"SG|Regular",24,38,0,"L","#55608a","Le linéaire recule, le numérique porte la croissance. Dans ce numérique, la publicité fait l'essentiel du travail."],
["R",140,700,4,130,"#0032ff",1],
["T",176,700,470,"SG|Medium",30,42,0,"L","#000a64","Le concurrent que TF1 désigne n'est pas Netflix, c'est YouTube."],
["T",176,800,500,"PM|Regular",15,22,10,"L","#7a84a8","R. BELMER, PDG DU GROUPE TF1  ·  LE MONDE, JANVIER 2025"],
["T",760,392,300,"SG|Bold",52,58,0,"L","#0032ff","109 M€"],
["T",1591,392,300,"SG|Bold",52,58,0,"L","#5a6488","≈ 25 M€"],
["R",760,470,825,132,"#0032ff",1],
["R",1591,470,189,132,"#a8b0cc",1],
["T",760,626,325,"PM|Regular",20,0,11,"L","#55608a","PUBLICITÉ TF1+  ·  81 %"],
["T",1591,626,197,"PM|Regular",20,0,11,"L","#55608a","RESTE  ·  19 %"],
["R",760,700,1020,1,"#d5dcf0",1],
["T",760,726,1020,"SG|Light",21,32,0,"L","#55608a","Total CA numérique S1 2026 : 134 M€, en hausse de 17 %. Le solde de 25 M€ agrège l'abonnement, le transactionnel et la distribution — TF1 n'en publie pas le détail."],
["T",140,1000,1640,"PM|Regular",15,22,10,"L","#7a84a8","SOURCE  —  RÉSULTATS TF1 S1 2026  ·  LA VENTILATION DU SOLDE DE 25 M€ N'EST PAS PUBLIÉE"]
]},

/* 05 — Le dispositif */
{ bg:"#00073f", mesh:false, logo:"petit", notes:
"- Le point central de la présentation pour un public design : **trois logiques de paiement dans une seule interface**, avec trois rapports au temps, au prix et à l'engagement.\n- Passer vite sur les piliers 1 et 2, s'arrêter sur le troisième. Le micropaiement est ce qu'il y a de plus neuf sur le marché européen.\n- Bien dire **à partir de 0,69 €** : le prix varie selon l'avantage acheté, et 0,69 € n'est que le point d'entrée.\n- La dernière ligne est la plus importante : 800 000 opérations au S1 2026. **Ce n'est plus une expérimentation, c'est un levier à optimiser.**",
n:[
["T",140,120,342,"PM|Medium",22,0,11,"L","#00c8ff","§ 02  ·  LE DISPOSITIF"],
["T",140,196,1160,"SG|Bold",62,70,0,"L","#edf1ff","Trois modèles économiques dans un seul parcours"],
["R",140,430,520,3,"#ffffff",1],
["T",140,462,520,"PM|Regular",17,0,9,"L","#ffffff","PILIER 1  ·  DEPUIS JANV. 2024"],
["T",140,508,400,"SG|Bold",84,92,0,"L","#edf1ff","0 €"],
["T",140,636,500,"SG|Regular",22,34,0,"L","#ffffff","Gratuit financé par la publicité. Environ 80 % du CA numérique — le cœur du modèle, et le premier motif de plainte relevé dans les avis."],
["R",700,430,520,3,"#00c8ff",1],
["T",700,462,520,"PM|Regular",17,0,9,"L","#ffffff","PILIER 2  ·  DEPUIS JANV. 2024"],
["T",700,508,400,"SG|Bold",84,92,0,"L","#00c8ff","5,99 €"],
["T",700,636,500,"SG|Regular",22,34,0,"L","#ffffff","Sans publicité, mais aussi avant-premières, Full HD, téléchargement, contrôle du direct et chaînes exclusives."],
["R",1260,430,520,3,"#ff2882",1],
["T",1260,462,520,"PM|Regular",17,0,9,"L","#ffffff","PILIER 3  ·  DEPUIS SEPT. 2025"],
["T",1260,484,300,"PM|Medium",14,0,12,"L","#ff2882","À PARTIR DE"],
["T",1260,508,400,"SG|Bold",84,92,0,"L","#ff2882","0,69 €"],
["T",1260,636,520,"SG|Regular",22,34,0,"L","#ffffff","Micropaiement à l'acte, à partir de 0,69 € selon l'avantage acheté. Présenté par TF1 comme une première mondiale. Plus de 800 000 opérations au S1 2026."],
["R",140,880,1640,1,"#ffffff",0.35],
["T",140,910,1500,"SG|Medium",30,42,0,"L","#edf1ff","800 000 opérations au premier semestre : le geste à partir de 0,69 € n'est plus une expérimentation, c'est un levier à optimiser."],
["T",140,1000,1640,"PM|Regular",15,22,10,"L","#5a67a8","SOURCES  —  TARIFS ET OFFRE PUBLIÉS PAR TF1+  ·  VOLUME DE MICROPAIEMENTS : RÉSULTATS TF1 S1 2026"]
]},

/* 06 — Figure 2 */
{ bg:"#f4f6fb", mesh:false, logo:"petit", notes:
"- Ne pas commenter les notes en elles-mêmes, commenter **l'écart**. Même produit, même offre, même prix.\n- Ce sont des **relevés directs et datés** sur les fiches des deux stores, en août 2026 — pas des agrégateurs. Le préciser, c'est ce qui rend la comparaison défendable.\n- L'écart pointe vers l'exécution sur la fragmentation Android et vers un biais de notation propre à la plateforme.\n- *Question probable : « et sur les box opérateurs ? » Aucune donnée publique — le dire.*",
n:[
["T",140,120,451,"PM|Medium",22,0,11,"L","#0032ff","FIGURE 2  ·  NOTES DES STORES"],
["T",140,196,1180,"SG|Bold",62,70,0,"L","#000a64","1,4 point d'écart entre les deux stores"],
["R",360,380,1,330,"#d5dcf0",1],["T",300,728,120,"PM|Regular",18,0,0,"C","#55608a","0"],
["R",632,380,1,330,"#d5dcf0",1],["T",572,728,120,"PM|Regular",18,0,0,"C","#55608a","1"],
["R",904,380,1,330,"#d5dcf0",1],["T",844,728,120,"PM|Regular",18,0,0,"C","#55608a","2"],
["R",1176,380,1,330,"#d5dcf0",1],["T",1116,728,120,"PM|Regular",18,0,0,"C","#55608a","3"],
["R",1448,380,1,330,"#d5dcf0",1],["T",1388,728,120,"PM|Regular",18,0,0,"C","#55608a","4"],
["R",1720,380,1,330,"#d5dcf0",1],["T",1660,728,120,"PM|Regular",18,0,0,"C","#55608a","5"],
["T",80,418,250,"SG|Medium",26,0,0,"R","#000a64","App Store"],
["T",80,454,250,"PM|Regular",17,0,0,"R","#55608a","80 000 évaluations"],
["R",360,412,1224,64,"#0032ff",1],
["T",1608,424,200,"SG|Bold",40,0,0,"L","#0032ff","4,5"],
["T",80,558,250,"SG|Medium",26,0,0,"R","#000a64","Google Play"],
["T",80,594,250,"PM|Regular",17,0,0,"R","#55608a","172 000 avis"],
["R",360,552,843,64,"#ff2882",1],
["T",1227,564,200,"SG|Bold",40,0,0,"L","#ff2882","3,1"],
["R",140,782,1640,1,"#d5dcf0",1],
["T",140,814,1200,"SG|Light",24,32,0,"L","#55608a","Relevés directs sur les fiches des deux stores. L'écart ne s'explique pas par le catalogue : il pointe vers la qualité d'exécution sur la fragmentation Android et vers un biais de notation propre à la plateforme."],
["T",140,1000,1640,"PM|Regular",15,22,10,"L","#7a84a8","SOURCES  —  RELEVÉS DIRECTS SUR LES FICHES APP STORE ET GOOGLE PLAY, AOÛT 2026"]
]},

/* 07 — Perception */
{ bg:"#0032ff", mesh:false, logo:"petit", notes:
"- Trois motifs seulement, choisis parmi une lecture d'échantillon. Préciser que ce sont des **thèmes, pas des proportions**.\n- Le premier est attendu. Le deuxième — l'accessibilité — est celui qui fait réagir : c'est un sujet de conformité autant que d'expérience.\n- Garder le troisième pour la fin. La formulation est prudente : la suppression de la publicité est **la promesse cardinale perçue**, ce qui reconnaît les autres bénéfices de l'offre.\n- **Transition** : « ce dernier point n'est pas un bug isolé. Il découle de la façon dont l'offre est perçue. »",
n:[
["T",140,120,295,"PM|Medium",22,0,11,"L","#7fe3ff","§ 03  ·  PERCEPTION"],
["T",140,196,1300,"SG|Bold",62,70,0,"L","#edf1ff","Le déficit n'est pas dans le catalogue"],
["T",140,398,60,"PM|Medium",22,0,11,"L","#7fe3ff","01"],
["T",250,390,460,"SG|Medium",34,42,0,"L","#edf1ff","La pression publicitaire"],
["T",760,392,1020,"SG|Regular",22,34,0,"L","#ffffff","Dans l'échantillon reviennent des coupures déclenchées par certaines interactions, des variations de volume ou de luminosité et des ratios publicité/contenu jugés excessifs."],
["R",140,548,1640,1,"#ffffff",0.3],
["T",140,598,60,"PM|Medium",22,0,11,"L","#7fe3ff","02"],
["T",250,590,460,"SG|Medium",34,42,0,"L","#edf1ff","L'accessibilité"],
["T",760,592,1020,"SG|Regular",22,34,0,"L","#ffffff","Des utilisateurs sourds signalent l'absence de sous-titres en direct, alors qu'ils fonctionnent en replay. Sujet d'expérience autant que de conformité."],
["R",140,748,1640,1,"#ffffff",0.3],
["T",140,798,60,"PM|Medium",22,0,11,"L","#7fe3ff","03"],
["T",250,790,460,"SG|Medium",34,42,0,"L","#edf1ff","Des pré-rolls en Premium"],
["T",760,792,1020,"SG|Regular",22,34,0,"L","#ffffff","Des abonnés payants rapportent voir encore des publicités de 15 à 20 secondes. La suppression de la publicité reste la promesse cardinale perçue de Premium."],
["T",140,1000,1640,"PM|Regular",15,22,10,"L","#c3d6ff","SOURCES  —  APP STORE, GOOGLE PLAY, TRUSTPILOT  ·  LECTURE D'ÉCHANTILLON : DES THÈMES, PAS DES PROPORTIONS"]
]},

/* 08 — Hypothèse */
{ bg:"#0032ff", mesh:false, logo:"petit", notes:
"- Slide de bascule. **La lire, puis s'arrêter.** C'est la phrase que l'auditoire doit retenir de toute la présentation.\n- La formulation est volontairement constructive : elle ne dit pas que Premium ne vaut rien, elle dit qu'il doit aller **au-delà du retrait d'une friction**.\n- Enchaîner sur le fait que la demande existe — 74 % des foyers français paient déjà au moins un service de streaming. **C'est la proposition qui est à travailler, pas le marché.**\n- Rappeler que c'est une hypothèse, à confronter aux données internes. C'est ce qui rend le reste crédible.\n- **Transition** : « d'où cinq tensions que le design doit piloter, sans jamais pouvoir les résoudre. »",
n:[
["T",140,120,279,"PM|Medium",22,0,11,"L","#7fe3ff","§ 04  ·  HYPOTHÈSE"],
["T",140,322,1549,"SG|Medium",78,94,0,"L","#f4f6fb","Le compte Premium ne doit pas seulement supprimer une friction. Il doit rendre l'expérience sensiblement meilleure."],
["R",140,736,120,2,"#a8c4ff",1],
["T",140,776,1549,"SG|Regular",26,40,0,"L","#ffffff","À partir des données publiques et des verbatims observés, mon hypothèse est que la valeur de Premium reste surtout perçue comme la suppression d'une friction, alors que l'offre contient aussi avant-premières, Full HD, téléchargement et chaînes exclusives. À valider avec les données internes."],
["T",140,1000,1640,"PM|Regular",15,22,10,"L","#c3d6ff","HYPOTHÈSE  —  LECTURE DE L'AUTEUR, À CONFRONTER AUX DONNÉES INTERNES"]
]},

/* 09 — Cinq tensions */
{ bg:"#f4f6fb", mesh:false, logo:"petit", notes:
"- Slide dense : ne pas la lire ligne à ligne. **Annoncer les cinq, en développer deux.**\n- Recommandé : la tension 1 (revenu contre expérience) parce que c'est la plus politique, et la tension 4 (distribution contre contrôle) parce qu'elle est inédite — TF1+ vit désormais à l'intérieur de Netflix.\n- Le mot clé est *piloter* : aucune de ces tensions n'a de solution définitive, elles se réarbitrent en permanence.\n- Laisser la slide affichée pendant les questions, elle sert de carte.",
n:[
["T",140,120,248,"PM|Medium",22,0,11,"L","#0032ff","§ 05  ·  ANALYSE"],
["T",140,172,1100,"SG|Bold",62,70,0,"L","#000a64","Cinq tensions de conception"],
["T",140,268,1361,"SG|Regular",32,36,0,"L","#55608a","Aucune ne se résout par un arbitrage définitif. Elles se pilotent et c'est ce qui les rend intéressantes à étudier."],
["R",140,380,1640,1,"#d5dcf0",1],
["T",140,414,60,"PM|Medium",19,0,11,"L","#0032ff","01"],
["T",210,406,560,"SG|Medium",30,38,0,"L","#000a64","Le revenu contre l'expérience"],
["T",820,414,440,"PM|Regular",19,26,0,"L","#3a4470","La publicité finance 80 % du modèle"],
["R",1284,423,32,1,"#d5dcf0",1],
["T",1340,414,440,"PM|Regular",19,26,0,"R","#3a4470","Elle est le premier motif de plainte"],
["R",140,500,1640,1,"#d5dcf0",1],
["T",140,534,60,"PM|Medium",19,0,11,"L","#0032ff","02"],
["T",210,526,560,"SG|Medium",30,38,0,"L","#000a64","Trois prix, un seul parcours"],
["T",820,534,440,"PM|Regular",19,26,0,"L","#3a4470","Gratuit · 5,99 €/mois · 0,69 €/acte"],
["R",1284,543,32,1,"#d5dcf0",1],
["T",1340,534,440,"PM|Regular",19,26,0,"R","#3a4470","Comprendre l'offre en une seconde"],
["R",140,620,1640,1,"#d5dcf0",1],
["T",140,654,60,"PM|Medium",19,0,11,"L","#0032ff","03"],
["T",210,646,560,"SG|Medium",30,38,0,"L","#000a64","Le téléviseur contre le mobile"],
["T",820,654,440,"PM|Regular",19,26,0,"L","#3a4470","70 % de la consommation est sur TV"],
["R",1284,663,32,1,"#d5dcf0",1],
["T",1340,654,440,"PM|Regular",19,26,0,"R","#3a4470","Les outils restent mobile-first"],
["R",140,740,1640,1,"#d5dcf0",1],
["T",140,774,60,"PM|Medium",19,0,11,"L","#0032ff","04"],
["T",210,766,560,"SG|Medium",30,38,0,"L","#000a64","La distribution contre le contrôle"],
["T",820,774,440,"PM|Regular",19,26,0,"L","#3a4470","TF1+ est distribué dans Netflix"],
["R",1284,783,32,1,"#d5dcf0",1],
["T",1340,774,440,"PM|Regular",19,26,0,"R","#3a4470","On ne possède plus le point d'entrée"],
["R",140,860,1640,1,"#d5dcf0",1],
["T",140,894,60,"PM|Medium",19,0,11,"L","#0032ff","05"],
["T",210,886,560,"SG|Medium",30,38,0,"L","#000a64","L'algorithme contre l'événement"],
["T",820,894,440,"PM|Regular",19,26,0,"L","#3a4470","La personnalisation est attendue"],
["R",1284,903,32,1,"#d5dcf0",1],
["T",1340,894,440,"PM|Regular",19,26,0,"R","#3a4470","La valeur vient des rendez-vous"],
["R",140,962,1640,1,"#d5dcf0",1],
["T",140,1000,1640,"PM|Regular",15,22,10,"L","#7a84a8","ANALYSE  —  DÉRIVÉE DES CONSTATS DES § 01 À § 04"]
]},

/* 10 — Ce que le cas enseigne */
{ bg:"#0032ff", mesh:false, logo:"petit", notes:
"- La sortie du cas. Ces quatre points valent au-delà de TF1+ : **toute plateforme qui monétise une audience acquise en gratuit** rencontre les mêmes.\n- Le troisième est le plus intéressant pour un public design : à 0,69 €, la décision n'est plus économique mais contextuelle. **La performance commerciale se déplace du pricing vers la conception d'interaction.**\n- Le quatrième est le plus opérationnel : croissance et qualité racontent deux histoires opposées, et les tableaux de bord ne montrent en général que la première.\n- *Si le temps manque, ne garder que 01 et 03.*",
n:[
["T",140,120,295,"PM|Medium",22,0,11,"L","#7fe3ff","§ 06  ·  CONCLUSION"],
["T",140,196,1000,"SG|Bold",62,70,0,"L","#edf1ff","Ce que le cas enseigne"],
["T",140,300,1385,"SG|Regular",36,36,0,"L","#ffffff","Quatre enseignements transposables à toute plateforme qui monétise une audience acquise en gratuit."],
["R",140,430,60,3,"#00c8ff",1],
["T",140,452,60,"PM|Medium",19,0,11,"L","#7fe3ff","01"],
["T",140,492,780,"SG|Medium",32,42,0,"L","#edf1ff","Retirer un défaut ne se vend pas comme apporter une valeur"],
["T",140,598,760,"SG|Regular",21,32,0,"L","#ffffff","La valeur perçue s'érode avec l'habitude si le bénéfice se limite au retrait d'une gêne."],
["R",1000,430,60,3,"#00c8ff",1],
["T",1000,452,60,"PM|Medium",19,0,11,"L","#7fe3ff","02"],
["T",1000,492,780,"SG|Medium",32,42,0,"L","#edf1ff","Le modèle crée des incitations que le design doit contrer"],
["T",1000,598,760,"SG|Regular",21,32,0,"L","#ffffff","Si le payant se vend d'abord sur le retrait d'une gêne, le niveau de publicité devient un sujet de design autant que de régie."],
["R",140,710,60,3,"#00c8ff",1],
["T",140,732,60,"PM|Medium",19,0,11,"L","#7fe3ff","03"],
["T",140,772,780,"SG|Medium",32,42,0,"L","#edf1ff","Le micropaiement déplace le prix vers le moment"],
["T",140,836,760,"SG|Regular",21,32,0,"L","#ffffff","À 0,69 €, la performance commerciale passe du pricing à la conception d'interaction."],
["R",1000,710,60,3,"#00c8ff",1],
["T",1000,732,60,"PM|Medium",19,0,11,"L","#7fe3ff","04"],
["T",1000,772,780,"SG|Medium",32,42,0,"L","#edf1ff","Un écart de notes est un diagnostic, pas un bruit de fond"],
["T",1000,878,760,"SG|Regular",21,32,0,"L","#ffffff","Croissance et qualité racontent deux histoires opposées. C'est la seconde qui prédit la suite."],
["T",140,1000,1640,"PM|Regular",15,22,10,"L","#c3d6ff","ANALYSE  —  GÉNÉRALISATION DU CAS, NON SOURCÉE"]
]},

/* 11 — Ce que cette étude propose */
{ bg:"#00073f", mesh:true, logo:"petit", notes:
"- **Slide de promesse, à passer vite** — trente secondes, pas plus. Elle existe pour que l'auditoire sache dès le début où on va.\n- La formuler comme un engagement de structure : « je vais d'abord vous montrer ce que les données publiques disent, puis ce que j'en ferais. »\n- Le mot important est *dans cet ordre* : la valeur n'est pas la liste des chantiers, c'est la hiérarchie et ce qu'elle exclut.\n- Ne pas détailler les trois chantiers ici. **Ils arrivent en fin de deck**, et les annoncer deux fois affaiblit les deux passages.",
n:[
["T",140,120,404,"PM|Medium",22,0,11,"L","#00c8ff","CE QUE CETTE ÉTUDE PROPOSE"],
["T",140,366,1467,"SG|Bold",96,108,0,"L","#edf1ff","Si j'avais le rôle, voici ce que je prioriserais."],
["T",140,700,1310,"SG|Regular",30,46,0,"L","#ffffff","Trois chantiers, dans cet ordre, et une liste de ce que je ne ferais pas la première année. Ce qui suit est ce qui m'y conduit ; le détail est en fin de document."],
["T",140,1000,1640,"PM|Regular",15,22,10,"L","#ffffff","PRISE DE POSITION EN TANT QUE HEAD OF DESIGN - NON PRESCRITE PAR TF1"]
]},

/* 12 — Arbitrages */
{ bg:"#f4f6fb", mesh:false, logo:"petit", notes:
"- **La slide qui différencie.** La plupart des candidats listent ce qu'ils feraient ; très peu disent ce qu'ils sacrifient. C'est là qu'on démontre un arbitrage, pas un enthousiasme.\n- Point 2, attention au malentendu : on ne renonce pas à défendre l'utilisateur, on renonce à la **bataille frontale sur le volume**. Le formuler ainsi, sinon on passe pour complaisant avec la régie.\n- Point 3 est formulé comme une question de **séquence**, pas de valeur : le système existe et il est utile, il s'agit d'en évaluer la couverture CTV avant d'investir dans une refonte.\n- **Transition** : « et pour que tout ça soit vérifiable, voilà ce sur quoi j'accepte d'être jugé. »",
n:[
["T",140,120,295,"PM|Medium",22,0,11,"L","#0032ff","§ 07  ·  ARBITRAGES"],
["T",140,172,1100,"SG|Bold",62,70,0,"L","#000a64","Ce que je ne ferais pas"],
["T",140,268,1049,"SG|Regular",32,36,0,"L","#55608a","Une priorité qui n'exclut rien n'est pas une priorité."],
["R",140,330,1640,1,"#d5dcf0",1],
["R",140,420,28,3,"#55608a",1],
["T",210,406,700,"SG|Medium",34,42,0,"L","#000a64","Pas de refonte globale de l'application la première année"],
["T",980,410,800,"SG|Regular",24,32,0,"L","#55608a","D'après les signaux publics, le sujet semble moins la structure de l'app que son exécution et sa monétisation. Une refonte consommerait douze mois sans garantie sur la note des stores ni sur la conversion."],
["R",140,576,1640,1,"#d5dcf0",1],
["R",140,616,28,3,"#55608a",1],
["T",210,602,700,"SG|Medium",34,42,0,"L","#000a64","Pas de bataille frontale sur le volume publicitaire"],
["T",980,606,800,"SG|Regular",24,32,0,"L","#55608a","Elle est perdue d'avance et grille le capital politique dès le premier trimestre. Le levier n'est pas le volume, c'est la prévisibilité et la suppression des déclenchements subis."],
["R",140,772,1640,1,"#d5dcf0",1],
["R",140,812,28,3,"#55608a",1],
["T",210,798,700,"SG|Medium",34,42,0,"L","#000a64","Ne pas lancer de refonte du Design System avant d'en avoir évalué la couverture CTV"],
["T",980,802,800,"SG|Regular",24,32,0,"L","#55608a","Avant d'investir, mesurer ce que le système couvre déjà sur les surfaces télé. La contrainte télécommande doit précéder les composants, pas les suivre."],
["R",140,962,1640,1,"#d5dcf0",1],
["T",140,1000,1640,"PM|Regular",15,22,10,"L","#000a64","PRISE DE POSITION EN TANT QUE HEAD OF DESIGN - NON PRESCRITE PAR TF1"]
]},

/* 13 — Priorités */
{ bg:"#f4f6fb", mesh:false, logo:"petit", notes:
"- Ne pas lire les trois. **Développer la 01 et la 02**, mentionner la 03 en une phrase — la CTV a déjà été argumentée au § 05.\n- La colonne de droite n'est pas une description, c'est **l'argument de l'ordre**. C'est là que se joue la crédibilité de la slide.\n- Sur la 01 : insister sur le fait que c'est peu coûteux et vérifiable en quelques semaines. Un quick win achète la crédibilité nécessaire pour les deux autres.\n- Sur la 02 : les parcours de paiement **existent déjà** — QR code sur TV, facturation SFR et Bouygues. Il ne s'agit pas de les inventer mais d'en mesurer et d'en optimiser la conversion.\n- *Question probable : « pourquoi pas la personnalisation ? » — répondre que c'est un investissement long dont le retour dépend d'abord de la qualité d'exécution.*",
n:[
["T",140,120,279,"PM|Medium",22,0,11,"L","#0032ff","§ 07  ·  PRIORITÉS"],
["T",140,172,1100,"SG|Bold",62,70,0,"L","#000a64","Trois chantiers, dans cet ordre"],
["R",140,320,1640,1,"#d5dcf0",1],
["R",140,320,60,3,"#0032ff",1],
["T",140,354,60,"PM|Medium",19,0,11,"L","#0032ff","01"],
["T",240,346,620,"SG|Medium",34,42,0,"L","#000a64","Tenir la promesse du payant"],
["T",240,404,620,"SG|Regular",21,31,0,"L","#55608a","Vérifier et corriger les publicités résiduelles signalées en Premium, ainsi que les déclenchements accidentels."],
["T",940,350,400,"PM|Regular",17,0,10,"L","#55608a","POURQUOI CELUI-CI D'ABORD"],
["T",940,382,840,"SG|Regular",21,31,0,"L","#55608a","En premier parce que c'est peu coûteux, immédiatement mesurable, et que sans ça aucun discours sur la conversion n'est crédible."],
["R",140,528,1640,1,"#d5dcf0",1],
["R",140,528,60,3,"#ff2882",1],
["T",140,562,60,"PM|Medium",19,0,11,"L","#ff2882","02"],
["T",240,554,620,"SG|Medium",34,42,0,"L","#000a64","Optimiser le moment du micropaiement"],
["T",240,654,620,"SG|Regular",21,31,0,"L","#55608a","Les parcours existent déjà : QR code sur TV, facturation SFR et Bouygues. L'enjeu est leur taux de conversion."],
["T",940,558,400,"PM|Regular",17,0,10,"L","#55608a","POURQUOI CELUI-CI D'ABORD"],
["T",940,590,840,"SG|Regular",21,31,0,"L","#55608a","800 000 opérations au S1 2026 et aucune convention d'usage établie : chaque point de conversion gagné est directement du revenu."],
["R",140,736,1640,1,"#d5dcf0",1],
["R",140,736,60,3,"#000a64",1],
["T",140,770,60,"PM|Medium",19,0,11,"L","#000a64","03"],
["T",240,762,620,"SG|Medium",34,42,0,"L","#000a64","Refaire de la CTV la surface de référence"],
["T",240,862,620,"SG|Regular",21,31,0,"L","#55608a","Design system pensé pour la télécommande, couverture réelle du parc Android TV et box."],
["T",940,766,400,"PM|Regular",17,0,10,"L","#55608a","POURQUOI CELUI-CI D'ABORD"],
["T",940,798,840,"SG|Regular",21,31,0,"L","#55608a","70 % de la consommation se fait sur CTV : c'est sur cette surface que la qualité d'exécution doit être la plus robuste."],
["T",140,1000,1640,"PM|Regular",15,22,10,"L","#000a64","PRISE DE POSITION EN TANT QUE HEAD OF DESIGN - NON PRESCRITE PAR TF1"]
]},

/* 14 — Les cent premiers jours */
{ bg:"#0032ff", mesh:false, logo:"petit", notes:
"- **La slide qui répond à la question « pourquoi toi comme Head of Design et pas comme Principal Designer ».** Les deux fils sont volontairement de même poids : le produit et l'équipe.\n- Insister sur le fil du bas. **Écouter avant de prioriser** : huit entretiens individuels, plus les partenaires Produit, Tech, Data et Régie, avant toute feuille de route.\n- Phase 2 de l'équipe : l'interface Design–Produit–Tech–Data. Le sujet n'est pas l'organigramme, c'est **qui décide quoi, à quel moment, sur quelle donnée**.\n- Phase 3 : *Décider et embarquer*. Construire avec l'équipe, mais expliciter les arbitrages et clarifier l'ownership — ce n'est pas une recherche de consensus permanent.\n- Le fil produit est volontairement modeste : objectiver, réparer, mesurer. **Aucune promesse de résultat à 100 jours.**",
n:[
["T",140,120,263,"PM|Medium",22,0,11,"L","#7fe3ff","§ 07  ·  SÉQUENCE"],
["T",140,158,1100,"SG|Bold",62,70,0,"L","#edf1ff","Les cent premiers jours"],
["T",140,246,1339,"SG|Regular",32,38,0,"L","#ffffff","Deux fils menés en parallèle. Le produit ne se redresse pas sans l'équipe, et l'équipe ne s'aligne pas sans un diagnostic partagé."],
["T",140,360,500,"PM|Medium",17,0,10,"L","#edf1ff","J+0  →  J+30"],["R",140,392,500,1,"#00c8ff",1],
["T",710,360,500,"PM|Medium",17,0,10,"L","#edf1ff","J+30  →  J+60"],["R",710,392,500,1,"#00c8ff",1],
["T",1280,360,500,"PM|Medium",17,0,10,"L","#edf1ff","J+60  →  J+100"],["R",1280,392,500,1,"#00c8ff",1],
["R",140,426,26,3,"#00c8ff",1],
["T",180,418,400,"PM|Medium",16,0,12,"L","#7fe3ff","LE PRODUIT"],
["T",140,456,500,"SG|Bold",30,38,0,"L","#edf1ff","Objectiver"],
["T",140,508,490,"SG|Regular",24,30,0,"L","#ffffff","Catégoriser les avis Android et les corréler aux taux de crash par appareil. Auditer le parcours Premium de bout en bout sur les six surfaces."],
["T",140,642,490,"PM|Regular",14,20,9,"L","#edf1ff","LIVRABLE  —  UN DIAGNOSTIC CHIFFRÉ"],
["T",710,456,500,"SG|Bold",30,38,0,"L","#edf1ff","Réparer"],
["T",710,508,490,"SG|Regular",24,30,0,"L","#ffffff","Vérifier et corriger les publicités résiduelles signalées en Premium, ainsi que les déclenchements accidentels."],
["T",710,642,490,"PM|Regular",14,20,9,"L","#edf1ff","LIVRABLE  —  LA PROMESSE PREMIUM VÉRIFIÉE"],
["T",1280,456,500,"SG|Bold",30,38,0,"L","#edf1ff","Mesurer"],
["T",1280,508,490,"SG|Regular",24,30,0,"L","#ffffff","Instrumenter la conversion des parcours de micropaiement existants, puis tester trois variantes de déclenchement sur téléviseur."],
["T",1280,642,490,"PM|Regular",14,20,9,"L","#edf1ff","LIVRABLE  —  UNE BASELINE DE CONVERSION"],
["R",140,716,26,3,"#7fe3ff",1],
["T",180,708,400,"PM|Medium",16,0,12,"L","#c3d6ff","L'ÉQUIPE"],
["T",140,746,500,"SG|Medium",30,38,0,"L","#edf1ff","Écouter"],
["T",140,798,490,"SG|Regular",24,30,0,"L","#ffffff","Entretiens individuels avec chacun des huit designers et avec les principaux partenaires Produit, Tech, Data et Régie. Cartographier les forces, les dépendances et les irritants."],
["T",140,962,490,"PM|Regular",14,20,9,"L","#edf1ff","LIVRABLE  —  UNE CARTE DES COMPÉTENCES"],
["T",710,746,500,"SG|Medium",30,38,0,"L","#edf1ff","Aligner"],
["T",710,798,490,"SG|Regular",24,30,0,"L","#ffffff","Clarifier l'interface Design–Produit–Tech–Data : qui décide quoi, à quel moment, et sur quelle donnée."],
["T",710,962,490,"PM|Regular",14,20,9,"L","#edf1ff","LIVRABLE  —  UN CADRE DE DÉCISION PARTAGÉ"],
["T",1280,746,500,"SG|Medium",30,38,0,"L","#edf1ff","Décider et embarquer"],
["T",1280,798,490,"SG|Regular",24,30,0,"L","#ffffff","Construire les priorités avec l'équipe, expliciter les arbitrages et clarifier leur ownership."],
["T",1280,962,490,"PM|Regular",14,20,9,"L","#edf1ff","LIVRABLE  —  UNE FEUILLE DE ROUTE CO-CONSTRUITE"],
["T",140,1000,1640,"PM|Regular",15,22,10,"L","#ffffff","PRISE DE POSITION EN TANT QUE HEAD OF DESIGN - NON PRESCRITE PAR TF1"]
]},

/* 15 — Mesure */
{ bg:"#0032ff", mesh:false, logo:"petit", notes:
"- Registre volontairement au conditionnel : ce sont **des indicateurs proposés, pas des promesses tenues d'avance**.\n- Si on trouve les valeurs ambitieuses, le dire simplement : elles sont indicatives et se recalibrent une fois les données internes accessibles. **C'est le principe qui compte, pas le chiffre.**\n- Chacun est défini précisément — fenêtre glissante de 90 jours, incident confirmé hors exceptions contractuelles, combinaisons prioritaires, partage par surface. C'est ce qui les rend pilotables.\n- La dernière ligne est le point d'arrivée : **ce sont des indicateurs d'impact Produit et Business**, pas des indicateurs de production Design. C'est ce qui les rend audibles en comité de direction.\n- Fin du récit. Laisser la slide affichée pendant les questions.",
n:[
["T",140,120,232,"PM|Medium",22,0,11,"L","#7fe3ff","§ 07  ·  MESURE"],
["T",140,192,1100,"SG|Bold",62,70,0,"L","#edf1ff","Ce sur quoi je pourrais être jugé"],
["T",140,338,400,"SG|Bold",88,96,0,"L","#ffffff","≥ 4,0"],
["T",140,450,740,"SG|Regular",24,34,0,"L","#ffffff","Note moyenne des avis Android récents, mesurée sur une fenêtre glissante de 90 jours."],
["T",1000,338,400,"SG|Bold",88,96,0,"L","#ffffff","0"],
["T",1000,450,740,"SG|Regular",24,34,0,"L","#ffffff","Incident publicitaire confirmé en Premium, hors exceptions contractuelles."],
["R",140,550,780,1,"#ffffff",0.34],
["T",140,578,400,"SG|Bold",88,96,0,"L","#ffffff","100 %"],
["T",140,690,740,"SG|Regular",24,34,0,"L","#ffffff","Combinaisons CTV prioritaires couvertes par un test sur environnement réel."],
["R",1000,550,780,1,"#ffffff",0.34],
["T",1000,578,400,"SG|Bold",88,96,0,"L","#ffffff","T+1"],
["T",1000,690,740,"SG|Regular",24,34,0,"L","#ffffff","Avant la fin du premier trimestre, taux de conversion du micropaiement instrumenté et partagé par surface."],
["R",140,818,1640,1,"#ffffff",0.34],
["T",140,850,1400,"SG|Medium",28,40,0,"L","#edf1ff","Ce sont des indicateurs d'impact Produit et Business, pas des indicateurs de production Design. C'est volontaire."],
["T",140,1000,1640,"PM|Regular",15,22,10,"L","#ffffff","PRISE DE POSITION EN TANT QUE HEAD OF DESIGN - NON PRESCRITE PAR TF1"]
]},

/* 16 — Merci */
{ bg:"#04050f", mesh:true, logo:"petit", notes:
"- Slide de clôture. **Ne rien ajouter à l'oral** au-delà du remerciement — le deck a dit ce qu'il avait à dire.\n- La phrase est volontairement une invitation : *confronter ces hypothèses à vos données internes*. Elle rappelle que l'étude est faite de l'extérieur et qu'elle demande à être corrigée.\n- Laisser la slide affichée pendant les questions : les coordonnées restent visibles.",
n:[
["T",140,250,482,"PM|Medium",22,0,11,"L","#00c8ff","TF1+  ·  ÉTUDE DE CAS PERSONNEL"],
["T",140,449,1200,"SG|Bold",150,162,0,"L","#edf1ff","Merci."],
["T",140,659,1080,"SG|Regular",30,44,0,"L","#ffffff","Je reste disponible pour en discuter, et pour confronter ces hypothèses à vos données internes."],
["R",140,836,1640,1,"#1a2480",1],
["T",140,880,900,"SG|Medium",34,44,0,"L","#edf1ff","Josselin Guerrache"],
["T",140,936,900,"PM|Regular",22,30,4,"L","#ffffff","josselin.guerrache@gmail.com\n+33 6 70 51 54 34"]
]},

/* 17 — Annexe A */
{ bg:"#000a64", mesh:false, logo:"petit", annexe:true, notes:
"- Moment méthodologique, **à ne présenter que si on interroge le nombre d'abonnés**. Assumer l'absence de donnée plutôt que de la contourner.\n- Le point clé : les seuls pourcentages publiés portent sur la publicité et sur le digital. **Les prendre pour de la croissance d'abonnements est l'erreur la plus facile à commettre sur ce dossier.**\n- Question fréquente : « pourquoi ne communiquent-ils pas ? » Réponse honnête : on ne peut pas le savoir de l'extérieur, et spéculer dessus n'apporte rien.",
n:[
["T",140,336,498,"PM|Medium",22,0,11,"L","#00c8ff","ANNEXE A  ·  LE CHIFFRE MANQUANT"],
["T",140,400,1160,"SG|Bold",88,100,0,"L","#edf1ff","Le nombre d'abonnés Premium n'est pas publié"],
["R",1340,392,1,200,"#1a2480",1],
["T",1320,404,460,"SG|Bold",88,96,0,"R","#ff2882","+18,6 %"],
["T",1400,540,380,"PM|Regular",17,26,10,"R","#ffffff","REVENUS PUBLICITAIRES TF1+, S1 2026 — PAS DES ABONNEMENTS","wrap"],
["T",140,680,1060,"SG|Regular",28,44,0,"L","#ffffff","Ni dans les communiqués trimestriels, ni dans les présentations investisseurs, ni dans les earnings calls du S1 2026. Les seuls pourcentages publiés portent sur la publicité (+18,6 %) et sur le digital (+17,1 %) : les prendre pour de la croissance d'abonnements est l'erreur la plus facile à commettre sur ce dossier."],
["T",140,1000,1640,"PM|Regular",15,22,10,"L","#959bb9","SOURCE  —  RÉSULTATS TF1 S1 2026  ·  AUCUN VOLUME NI TAUX D'ABONNEMENT PUBLIÉ À CE JOUR"]
]},

/* 18 — Annexe B */
{ bg:"#000a64", mesh:false, logo:"petit", annexe:true, notes:
"- Slide de référence, **à ne pas présenter** sauf demande. Elle existe pour être consultée, pas commentée.\n- Si on interroge la solidité de l'étude, l'afficher et laisser lire la colonne de droite : **c'est elle qui donne sa crédibilité au reste**.\n- Le message à formuler à l'oral : « tout ce qui est ici vient de sources publiques, et voilà exactement ce que ces sources ne permettent pas de dire ».",
n:[
["T",140,110,482,"PM|Medium",22,0,11,"L","#00c8ff","ANNEXE B  ·  SOURCES ET MÉTHODE"],
["T",140,158,1100,"SG|Bold",62,70,0,"L","#edf1ff","Sources et méthode"],
["R",140,280,1640,1,"#1a2480",1],
["T",140,316,700,"PM|Medium",20,0,12,"L","#00c8ff","CE QUE L'ÉTUDE UTILISE"],
["T",140,366,702,"SG|Regular",24,28,0,"L","#ffffff","Résultats et communication financière du groupe TF1, S1 2026 et S1 2025"],
["T",140,456,702,"SG|Regular",24,28,0,"L","#ffffff","TF1 Pro — bilan des deux ans de TF1+"],
["T",140,518,702,"SG|Regular",24,28,0,"L","#ffffff","Offre et tarifs Premium publiés par TF1+"],
["T",140,580,702,"SG|Regular",24,28,0,"L","#ffffff","Étude de cas Stripe — infrastructure de paiement"],
["T",140,642,702,"SG|Regular",24,28,0,"L","#ffffff","Fiches App Store et Google Play, relevés directs d'août 2026 · Trustpilot"],
["T",140,732,702,"SG|Regular",24,28,0,"L","#ffffff","Presse professionnelle — Minted, Stratégies, Puremédias, CB News, Influencia, Broadband TV News"],
["T",1020,316,760,"PM|Medium",20,0,12,"L","#ff2882","CE QU'ELLE NE PEUT PAS ÉTABLIR"],
["T",1020,366,760,"SG|Regular",24,28,0,"L","#ffffff","Le nombre d'abonnés Premium n'est pas publié, et le solde non publicitaire ne permet pas de l'isoler."],
["T",1020,454,760,"SG|Regular",24,28,0,"L","#ffffff","La ventilation du solde non publicitaire n'est pas publiée : TF1info, TV segmentée, abonnement et micropaiement y sont agrégés."],
["T",1020,542,760,"SG|Regular",24,28,0,"L","#ffffff","Les notes de stores sont des relevés à date, en août 2026 : elles évoluent dans le temps et ne sont pas rétro-consultables."],
["T",1020,630,760,"SG|Regular",24,28,0,"L","#ffffff","Les verbatims d'avis sont une lecture d'échantillon : des thèmes, pas des proportions."],
["T",1020,718,760,"SG|Regular",24,28,0,"L","#ffffff","Les taux de conversion BVOD européens sont des ordres de grandeur de marché, non publiés par les concurrents."],
["R",140,962,1640,1,"#1a2480",1],
["T",140,1000,1640,"PM|Regular",15,0,10,"L","#959bb9","ÉTUDE INDÉPENDANTE  ·  AUCUNE DONNÉE INTERNE  ·  AUCUN ENTRETIEN  ·  DONNÉES ARRÊTÉES AU 06.08.2026"]
]}

];

const coinData = [
  {
    emperorId: 1,
    period: "Julio-Claudian",
    emperorName: "Caesar Augustus",
    wikiLink: "https://en.wikipedia.org/wiki/Augustus",
    fullName: "Imperator Caesar Augustus",
    birthName: "Gaius Octavius",
    bornDied: "63 BC - AD 14",
    reigned: "27 BC - AD 14",
    yearsReigned: 40,
    howDied: "natural causes / old age",
    notableFor: [
      "First emperor",
      "Ended Roman civil war when he defeated his rival Marcus Antony and his ally and lover Cleopatra",
      "Funded numerous major building projects around Rome",
    ],
    coinFile: ["assets/01-Aug37A.jpg", "assets/01-Aug37A_rev.jpg"],
    coinLink: "http://numismatics.org/ocre/id/ric.1(2).aug.31",
  },
  {
    emperorId: 2,
    period: "Julio-Claudian",
    emperorName: "Tiberius",
    wikiLink: "https://en.wikipedia.org/wiki/Tiberius",
    fullName: "Tiberius Caesar Augustus",
    birthName: "Tiberius Claudius Nero",
    bornDied: "42 BC - AD 37",
    reigned: "AD 14 - 37",
    yearsReigned: 22,
    howDied: "natural causes / old age",
    notableFor: [
      "Accomplished general",
      "Luxurious retreat on island of Capri",
      "Manipulated by Sejanus, captain of the praetorian guard",
    ],
    coinFile: ["assets/02-Tiberius27.jpg", "assets/02-Tiberius27_rev.jpg"],
    coinLink: "http://numismatics.org/ocre/id/ric.1(2).tib.18",
  },
  {
    emperorId: 3,
    period: "Julio-Claudian",
    emperorName: "Caligula",
    wikiLink: "https://en.wikipedia.org/wiki/Caligula",
    fullName: "Gaius Caesar Augustus Germanicus",
    birthName: "Gaius Julius Caesar",
    bornDied: "AD 12 - 41",
    reigned: "AD 37 - 41",
    yearsReigned: 3.5,
    howDied: "stabbed by his soldiers",
    notableFor: [
      "Known for his extravagance and cruelty",
      "Really loved chariot racing",
      "Rumored to have incestuous relationship with his sister",
    ],
    coinFile: ["assets/03-Caligula32.jpg", "assets/03-Caligula32_rev.jpg"],
    coinLink: "http://numismatics.org/ocre/id/ric.1(2).gai.32",
  },
  {
    emperorId: 4,
    period: "Julio-Claudian",
    emperorName: "Claudius",
    wikiLink: "https://en.wikipedia.org/wiki/Claudius",
    fullName: "Tiberius Claudius Caesar Augustus Germanicus",
    birthName: "Tiberius Claudius Nero Germanicus",
    bornDied: "10 BC - AD 54",
    reigned: "AD 41 - 54",
    yearsReigned: 13,
    howDied: "poisoned by his wife",
    notableFor: [
      "Accepted non-Italians into the Senate",
      "Launched invasion of Britain",
      "Wrote histories of Carthage and the Etruscans",
    ],
    coinFile: ["assets/04-Claudius25.jpg", "assets/04-Claudius25_rev.jpg"],
    coinLink: "http://numismatics.org/ocre/id/ric.1(2).cl.25",
  },
  {
    emperorId: 5,
    period: "Julio-Claudian",
    emperorName: "Nero",
    wikiLink: "https://en.wikipedia.org/wiki/Nero",
    fullName: "Nero Claudius Caesar Augustus Germanicus",
    birthName: "Lucius Domitius Ahenobarbus",
    bornDied: "AD 37 - 68",
    reigned: "AD 54 - 68",
    yearsReigned: 13,
    howDied: "suicide / ordered his secretary to stab him",
    notableFor: [
      "Famous for singing and performing on stage",
      "Kicked his pregnant mistress to death",
      "Last of the Julio-Claudian dyansty",
    ],
    coinFile: ["assets/05-Nero137.jpg", "assets/05-Nero137_rev.jpg"],
    coinLink: "http://numismatics.org/ocre/id/ric.1(2).ner.137",
  },
  {
    emperorId: 6,
    period: "Year of Four Emperors",
    emperorName: "Galba",
    wikiLink: "https://en.wikipedia.org/wiki/Galba",
    fullName: "Servius Galba Caesar Augustus",
    birthName: "Servius Sulpicius Galba",
    bornDied: "3 BC - AD 69",
    reigned: "AD 68 - 69",
    yearsReigned: 0.5,
    howDied: "assassinated by unloyal soldiers during civil war",
    notableFor: [
      "First emperor not related to Augustus",
      "Hailed emperor during unrest at end of Nero's reign",
      "Was bald and suffered from gout",
    ],
    coinFile: ["assets/06-Galba132.jpg", "assets/06-Galba132_rev.jpg"],
    coinLink: "http://numismatics.org/ocre/id/ric.1(2).gal.132",
  },
  {
    emperorId: 7,
    period: "Year of Four Emperors",
    emperorName: "Otho",
    wikiLink: "https://en.wikipedia.org/wiki/Otho",
    fullName: "Imperator Marcus Otho Caesar Augustus",
    birthName: "Marcus Salvius Otho",
    bornDied: "AD 32 - 69",
    reigned: "AD 69",
    yearsReigned: 0.3,
    howDied: "suicide / stabbed himself during civil war",
    notableFor: [
      "Of Etruscan heritage",
      "Lost at the Battle of Bedriacum to Vitellius",
      "Regularly had his body hair plucked and wore a wig",
    ],
    coinFile: ["assets/07-Otho14.jpg", "assets/07-Otho14_rev.jpg"],
    coinLink: "http://numismatics.org/ocre/id/ric.1(2).ot.14",
  },
  {
    emperorId: 8,
    period: "Year of Four Emperors",
    emperorName: "Vitellius",
    wikiLink: "https://en.wikipedia.org/wiki/Vitellius",
    fullName: "Aulus Vitellius Germanicus Imperator Augustus",
    birthName: "Aulus Vitellius",
    bornDied: "AD 15 - 69",
    reigned: "AD 69",
    yearsReigned: 0.6,
    howDied: "executed by Vespasian's soldiers during civil war",
    notableFor: [
      "First emperor to take a different title than Caesar, choosing Germanicus instead",
      "Known for being obese and a glutton",
      "Banned all astrologers from Rome",
    ],
    coinFile: ["assets/08-Vitellius17.jpg", "assets/08-Vitellius17_rev.jpg"],
    coinLink: "http://numismatics.org/ocre/id/ric.1(2).vit.17",
  },
  {
    emperorId: 9,
    period: "(Year of 4) Flavian",
    emperorName: "Vespasian",
    wikiLink: "https://en.wikipedia.org/wiki/Vespasian",
    fullName: "Imperator Caesar Vespasianus Augustus",
    birthName: "Titus Flavius Vespasianus",
    bornDied: "AD 9 - 79",
    reigned: "AD 69 - 79",
    yearsReigned: 10,
    howDied: "natural causes / illness and diarrheoia",
    notableFor: [
      "Rose to emperor during civil war",
      "Subdued the rebellious province of Judea",
      "Placed a tax on the common practice of urine collecting",
    ],
    coinFile: ["assets/09-Vespasian25.jpg", "assets/09-Vespasian25_rev.jpg"],
    coinLink: "http://numismatics.org/ocre/id/ric.2_1(2).ves.25",
  },
  {
    emperorId: 10,
    period: "Flavian",
    emperorName: "Titus",
    wikiLink: "https://en.wikipedia.org/wiki/Titus",
    fullName: "Imperator Titus Caesar Vespasianus Augustus",
    birthName: "Titus Flavius Vespasianus",
    bornDied: "AD 39 - 81",
    reigned: "AD 79 - 81",
    yearsReigned: 2,
    howDied: "fever",
    notableFor: [
      "As general led the sack of Jerusalem in AD 70",
      "Finished construction of the Colosseum",
      "Organized help for the survivors of the Vesuvius eruption",
    ],
    coinFile: ["assets/10-Titus13.jpg", "assets/10-Titus13_rev.jpg"],
    coinLink: "http://numismatics.org/ocre/id/ric.2_1(2).tit.13",
  },
  {
    emperorId: 11,
    period: "Flavian",
    emperorName: "Domitian",
    wikiLink: "https://en.wikipedia.org/wiki/Domitian",
    fullName: "Imperator Caesar Domitianus Augustus",
    birthName: "Titus Flavius Domitianus",
    bornDied: "AD 51 - 96",
    reigned: "AD 81 - 96",
    yearsReigned: 15,
    howDied: "stabbed to death by his attendants",
    notableFor: [
      "Highly autocratic style of rule",
      "Completed the Arch of Titus and rebuilt Temple of Jupiter",
      "Senate officially assigned his memory to oblivion after death",
    ],
    coinFile: ["assets/11-Domitian76.jpg", "assets/11-Domitian76_rev.jpg"],
    coinLink: "http://numismatics.org/ocre/id/ric.2_1(2).dom.76",
  },
  {
    emperorId: 12,
    period: "Five 'Good' Emperors",
    emperorName: "Nerva",
    wikiLink: "https://en.wikipedia.org/wiki/Nerva",
    fullName: "Imperator Nerva Caesar Augustus",
    birthName: "Marcus Cocceius Nerva",
    bornDied: "AD 30 - 98",
    reigned: "AD 96 - 98",
    yearsReigned: 1.5,
    howDied: "stroke and fever / old age",
    notableFor: [
      "First emperor to be chosen by the Senate",
      "Childless; forced by army to adopt a general as his heir",
      "Last emperor to be buried in Mausoleum of Augustus",
    ],
    coinFile: ["assets/12-Nerva60.jpg", "assets/12-Nerva60_rev.jpg"],
    coinLink: "http://numismatics.org/ocre/id/ric.2.ner.60_sestertius",
  },
];

export default coinData;

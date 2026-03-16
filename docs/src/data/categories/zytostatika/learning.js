(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var referenceItem = shared.referenceItem;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("zytostatika");

  parts.overgroups.learning = {
    id: "lernuebersichten",
    kind: "links",
    includeInLearningLookup: false,
    theme: themes.neutral,
    title: "Links",
    sections: [
      {
        id: "quick-reference",
        type: "quickReference",
        title: "Anhand Tumorentitäten",
        layout: "wide",
        description: "",
        cards: [
          {
            title: "Solide Tumoren",
            items: [
              fact("Mammakarzinom", "z.B. Taxane, Anthracycline, Cyclophosphamid"),
              referenceItem("Taxane", "Taxane", "Docetaxel, Paclitaxel"),
              referenceItem("Anthracycline", "Anthracycline", "Doxorubicin, Epirubicin, Daunorubicin"),
              referenceItem("Cyclophosphamid", "Alkylanzien", "Oxazaphosphorine"),
              referenceItem("Carboplatin", "Platin-Derivate"),
              referenceItem("Capecitabin", "Pyrimidin-Analoga", "Thymidylatsynthase-Hemmer"),
              referenceItem("Methotrexat", "Folsäure-Antagonisten"),
            ],
            focusLabel: "Besonders häufig",
            focusItems: [referenceItem("Taxane", "Taxane"), referenceItem("Anthracycline", "Anthracycline")],
          },
          {
            title: "Ovarialkarzinom",
            items: [
              referenceItem("Carboplatin", "Platin-Derivate"),
              referenceItem("Paclitaxel", "Taxane"),
              referenceItem("Gemcitabin", "Pyrimidin-Analoga", "DNA-Polymerase-Hemmer"),
              referenceItem("Topotecan", "Topoisomerase-I-Hemmer"),
              referenceItem("Liposomales Doxorubicin", "Anthracycline", "Anthracycline"),
            ],
            focusLabel: "Standard",
            focusItems: [fact("Carboplatin + Paclitaxel", "Standard-Kombination")],
          },
          {
            title: "Kolorektales Karzinom",
            items: [
              referenceItem("5-FU", "Pyrimidin-Analoga", "5-Fluoruracil, Thymidylatsynthase-Hemmer"),
              referenceItem("Capecitabin", "Pyrimidin-Analoga", "Thymidylatsynthase-Hemmer"),
              referenceItem("Irinotecan", "Topoisomerase-I-Hemmer"),
              referenceItem("Oxaliplatin", "Platin-Derivate"),
            ],
            focusLabel: "Standard",
            focusItems: [fact("FOLFOX-Schema", "5-FU + Oxaliplatin")],
          },
          {
            title: "Lungenkarzinom",
            items: [
              referenceItem("Cisplatin", "Platin-Derivate"),
              referenceItem("Carboplatin", "Platin-Derivate"),
              referenceItem("Paclitaxel", "Taxane"),
              referenceItem("Docetaxel", "Taxane"),
              referenceItem("Gemcitabin", "Pyrimidin-Analoga", "DNA-Polymerase-Hemmer"),
              referenceItem("Etoposid", "Topoisomerase-II-Hemmer"),
              referenceItem("Pemetrexed", "Folsäure-Antagonisten"),
            ],
            focusLabel: "Standard",
            focusItems: [fact("Cisplatin/Karboplatin", "in Kombination")],
          },
          {
            title: "Urothelkarzinom",
            items: [
              referenceItem("Cisplatin", "Platin-Derivate"),
              referenceItem("Gemcitabin", "Pyrimidin-Analoga", "DNA-Polymerase-Hemmer"),
              referenceItem("Methotrexat", "Folsäure-Antagonisten"),
              referenceItem("Vinblastin", "Vinca-Alkaloide"),
            ],
            focusLabel: "Standard",
            focusItems: [fact("MVAC", "Methotrexat, Vinblastin, Doxorubicin, Cisplatin")],
          },
          {
            title: "Pankreaskarzinom",
            items: [
              referenceItem("Gemcitabin", "Pyrimidin-Analoga", "DNA-Polymerase-Hemmer"),
              referenceItem("5-FU", "Pyrimidin-Analoga", "5-Fluoruracil, Thymidylatsynthase-Hemmer"),
              referenceItem("Nab-Paclitaxel", "Taxane", "Nanopartikel-Paclitaxel"),
            ],
          },
          {
            title: "Magenkarzinom",
            items: [
              referenceItem("5-FU", "Pyrimidin-Analoga", "5-Fluoruracil, Thymidylatsynthase-Hemmer"),
              referenceItem("Capecitabin", "Pyrimidin-Analoga", "Thymidylatsynthase-Hemmer"),
              referenceItem("Cisplatin", "Platin-Derivate"),
              referenceItem("Oxaliplatin", "Platin-Derivate"),
              referenceItem("Docetaxel", "Taxane"),
            ],
          },
          {
            title: "Glioblastom",
            items: [
              referenceItem("Temozolomid", "Alkylanzien", "Hydrazine-Gruppe"),
            ],
            focusLabel: "Standard",
            focusItems: [fact("Temozolomid", "in Kombination mit Radiotherapie")],
          },
          {
            title: "Hodenkarzinom",
            items: [
              referenceItem("Cisplatin", "Platin-Derivate"),
              referenceItem("Etoposid", "Topoisomerase-II-Hemmer"),
              referenceItem("Bleomycin", "Zytostatische Antibiotika"),
            ],
            focusLabel: "Standard",
            focusItems: [fact("PEB", "Platin, Etoposid, Bleomycin")],
          },
          {
            title: "Harnblasenkarzinom",
            items: [
              referenceItem("Mitomycin", "Zytostatische Antibiotika", "intravesikal"),
            ],
          },
        ],
      },
      {
        id: "haematologische-tumoren",
        type: "quickReference",
        title: "Anhand hämatologischer Tumoren",
        layout: "wide",
        description: "",
        cards: [
          {
            title: "Akute Leukämien (AML/ALL)",
            items: [
              referenceItem("Cytarabin", "Pyrimidin-Analoga", "DNA-Polymerase-Hemmer"),
              referenceItem("Anthracycline", "Anthracycline", "Daunorubicin, Idarubicin"),
              referenceItem("6-Mercaptopurin", "Purin-Analoga", "HGPRT-Hemmer"),
              referenceItem("Methotrexat", "Folsäure-Antagonisten"),
              referenceItem("Cyclophosphamid", "Alkylanzien", "Oxazaphosphorine"),
              referenceItem("Vincristin", "Vinca-Alkaloide"),
              referenceItem("L-Asparaginase", "Enzyme"),
              referenceItem("Hydroxyurea", "Ribonukleotidreduktase-Hemmer"),
            ],
            focusLabel: "Standard",
            focusItems: [referenceItem("Vincristin", "Vinca-Alkaloide"), referenceItem("L-Asparaginase", "Enzyme"), fact("Steroide", "zusätzlich")],
          },
          {
            title: "Chronische Leukämien",
            items: [
              fact("CML", referenceItem("Hydroxyurea", "Ribonukleotidreduktase-Hemmer", "Busulfan alternativ")),
              fact("CLL", referenceItem("Fludarabin", "Purin-Analoga", "DNA-Polymerase-Hemmer"), referenceItem("Chlorambucil", "Alkylanzien", "N-Lost-Derivate")),
            ],
          },
          {
            title: "Lymphome",
            items: [
              referenceItem("Cyclophosphamid", "Alkylanzien", "Oxazaphosphorine"),
              referenceItem("Doxorubicin", "Anthracycline"),
              referenceItem("Vincristin", "Vinca-Alkaloide"),
              referenceItem("Etoposid", "Topoisomerase-II-Hemmer"),
              referenceItem("Cytarabin", "Pyrimidin-Analoga", "DNA-Polymerase-Hemmer"),
              referenceItem("Cisplatin", "Platin-Derivate"),
              referenceItem("Bleomycin", "Zytostatische Antibiotika"),
            ],
            focusLabel: "Standard",
            focusItems: [fact("CHOP", "Cyclophosphamid, Doxorubicin, Vincristin, Prednison")],
          },
          {
            title: "Multiples Myelom",
            items: [
              referenceItem("Melphalan", "Alkylanzien", "N-Lost-Derivate"),
              referenceItem("Cyclophosphamid", "Alkylanzien", "Oxazaphosphorine"),
              referenceItem("Doxorubicin", "Anthracycline"),
            ],
          },
        ],
      },
      {
        id: "nebenwirkungen-uebersicht",
        type: "quickReference",
        title: "Nebenwirkungen im Überblick",
        layout: "wide",
        description: "",
        cards: [
          {
            title: "Myelotoxizität",
            items: [
              fact("Fast alle Zytostatika", "dosislimitierend"),
              fact("Besonders", referenceItem("Carboplatin", "Platin-Derivate"), referenceItem("Taxane", "Taxane"), referenceItem("Anthracycline", "Anthracycline")),
            ],
            focusLabel: "Monitoring",
            focusItems: ["Regelmäßige BB-Kontrolle", "G-CSF bei Bedarf"],
          },
          {
            title: "Kardiotoxizität",
            items: [
              referenceItem("Anthracycline", "Anthracycline", "kumulativ!"),
              referenceItem("Cyclophosphamid", "Alkylanzien", "hochdosiert"),
              referenceItem("5-FU", "Pyrimidin-Analoga", "5-Fluoruracil"),
              referenceItem("Cisplatin", "Platin-Derivate"),
            ],
            focusLabel: "Cave",
            focusItems: [fact("Doxorubicin", "max. kumulative Dosis beachten!")],
          },
          {
            title: "Nephrotoxizität",
            items: [
              referenceItem("Cisplatin", "Platin-Derivate"),
              referenceItem("Ifosfamid", "Alkylanzien", "Oxazaphosphorine"),
              referenceItem("Methotrexat", "Folsäure-Antagonisten"),
              referenceItem("Mitomycin", "Zytostatische Antibiotika"),
            ],
            focusLabel: "Prophylaxe",
            focusItems: [fact("Hydrierung", "bei Platinen und MTX")],
          },
          {
            title: "Neurotoxizität",
            items: [
              referenceItem("Vincristin", "Vinca-Alkaloide", "periphere Neuropathie"),
              referenceItem("Paclitaxel", "Taxane", "periphere Neuropathie"),
              referenceItem("Cisplatin", "Platin-Derivate", "zentrale/periphere"),
              referenceItem("Oxaliplatin", "Platin-Derivate", "akute/chronische"),
            ],
          },
          {
            title: "Hämorrhagische Zystitis",
            items: [
              referenceItem("Cyclophosphamid", "Alkylanzien", "Oxazaphosphorine"),
              referenceItem("Ifosfamid", "Alkylanzien", "Oxazaphosphorine"),
            ],
            focusLabel: "Prophylaxe",
            focusItems: [fact("Mesna", "plus ausreichende Hydrierung")],
          },
          {
            title: "Lungenfibrose",
            items: [
              referenceItem("Bleomycin", "Zytostatische Antibiotika"),
              referenceItem("Busulfan", "Alkylanzien", "Alkylsulfonate"),
              referenceItem("Cyclophosphamid", "Alkylanzien", "Oxazaphosphorine"),
              referenceItem("Methotrexat", "Folsäure-Antagonisten"),
            ],
            focusLabel: "Besonders",
            focusItems: [fact("Bleomycin", "pulmonale Toxizität limitierend")],
          },
          {
            title: "Emetogenese",
            items: [
              fact("Hochemetogen", referenceItem("Cisplatin", "Platin-Derivate"), referenceItem("Cyclophosphamid", "Alkylanzien"), referenceItem("Dacarbazin", "Alkylanzien", "Hydrazine")),
              fact("Mittel-emetogen", referenceItem("Anthracycline", "Anthracycline"), referenceItem("Ifosfamid", "Alkylanzien", "Oxazaphosphorine")),
              fact("Niedrig-emetogen", referenceItem("Taxane", "Taxane"), referenceItem("5-FU", "Pyrimidin-Analoga"), referenceItem("Gemcitabin", "Pyrimidin-Analoga")),
            ],
          },
        ],
      },
    ],
  };
})();

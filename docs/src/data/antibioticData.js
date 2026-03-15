(function () {
  function fact(main, detail, options) {
    var item = {
      main: main,
    };

    if (!detail) {
      if (options && options.muted) {
        item.muted = true;
      }

      return item;
    }

    item.detail = detail;

    if (options && options.muted) {
      item.muted = true;
    }

    return item;
  }

  var renderer = {
    labels: {
      librarySwitcher: "Thema",
      pageControls: "Seitensteuerung",
      autoExpand: "Automatisch ausklappen",
      expandAll: "Alles ausklappen",
      collapseAll: "Alles einklappen",
      entryEyebrow: "Wirkstoffgruppe",
      pearlEyebrow: "Merksatz",
      quickReferencePrimary: "Typische Optionen",
      learningFocusFallback: "Fokus",
      learningWarningFallback: "Grenzen",
    },
    infoBuckets: [
      {
        kind: "substances",
        label: "Substanzen",
        title: "Substanzen",
        tone: "substances",
        source: "substances",
        listType: "plain",
      },
      {
        kind: "effectiveness",
        label: "Wirksamkeit",
        title: "Wirksamkeit",
        tone: "positive",
        source: "effectiveAgainst",
        subsections: [
          {
            source: "cautions",
            title: "Grenzen",
            tone: "warning",
            description: "Grenzen innerhalb der Wirksamkeit",
          },
        ],
      },
      {
        kind: "side-effects",
        label: "Nebenwirkungen",
        title: "Nebenwirkungen",
        tone: "side-effects",
        source: "sideEffects",
      },
      {
        kind: "mechanism",
        label: "Wirkmechanismus",
        title: "Wirkmechanismus",
        tone: "mechanism",
        source: "mechanism",
      },
      {
        kind: "notes",
        label: "Merke",
        title: "Merke",
        tone: "note",
        source: "notes",
      },
      {
        kind: "other",
        label: "Sonstiges",
        title: "Sonstiges",
        tone: "other",
        source: "otherInfo",
      },
    ],
    learningLinkAliases: [
      { sourceText: "glycylcycline", aliasText: "tigecyclin" },
      {
        sourceText: "fluorchinolone",
        aliasText: "neuere fluorchinolone",
        context: "Gruppe III-IV",
      },
      {
        sourceText: "fluorchinolone",
        aliasText: "fluorchinolone gruppe iii iv",
        context: "Gruppe III-IV",
      },
      {
        sourceText: "fluorchinolone",
        aliasText: "fluorchinolone gruppe i ii",
        context: "Gruppe I-II",
      },
      {
        sourceText: "cephalosporine",
        aliasText: "cephalosporine 3 4",
        context: "3.-4. Generation",
      },
      {
        sourceText: "cephalosporine",
        aliasText: "cephalosporine 1 4",
        context: "1.-4. Generation",
      },
      {
        sourceText: "cephalosporine",
        aliasText: "cephalosporine 5 generation",
        context: "5. Generation",
      },
      {
        sourceText: "cotrimoxazol",
        aliasText: "sulfonamide cotrimoxazol",
        context: "Cotrimoxazol",
      },
      {
        sourceText: "aminopenicilline + β-lactamase-inhibitor",
        aliasText: "aminopenicilline β lactamase inhibitor",
      },
      {
        sourceText: "acylaminopenicilline + β-lactamase-inhibitor",
        aliasText: "acylaminopenicilline β lactamase inhibitor",
      },
    ],
    semanticTags: [
      { label: "Grampositiv", tone: "grampositive", match: /grampositiv/ },
      { label: "Gramnegativ", tone: "gramnegative", match: /gramnegativ/ },
      { label: "Anaerobier", tone: "anaerobic", match: /\banaerob/ },
      { label: "Aerobier", tone: "aerobic", match: /\baerob/ },
      { label: "Intrazellulär", tone: "intracellular", match: /intrazellul/ },
      { label: "Atypiker", tone: "atypical", match: /atypik/ },
      { label: "Pseudomonas", tone: "pseudomonas", match: /pseudomonas/ },
      { label: "MRSA", tone: "mrsa", match: /mrsa/ },
      { label: "VRE", tone: "vre", match: /\bvre\b/ },
      { label: "Enterokokken", tone: "enterococci", match: /enterokokk/ },
      { label: "Mykobakterien", tone: "mycobacteria", match: /mykobakter/ },
      {
        label: "Protozoen",
        tone: "protozoa",
        match: /protozo|giardi|lamblia|entamoeba|am[oö]b|trichomon/,
      },
      { label: "Hefen", tone: "yeasts", match: /\bhefen?\b|candida/ },
      { label: "Schimmel", tone: "molds", match: /schimmel|aspergill/ },
      { label: "Dermatophyten", tone: "dermatophytes", match: /dermatophyt/ },
      { label: "Kryptokokken", tone: "cryptococci", match: /kryptokokk/ },
      { label: "Onychomykose", tone: "onychomycosis", match: /onychomykos/ },
      {
        label: "Nematoden",
        tone: "nematodes",
        match: /nematod|ascari|trichin|enterob|oxyuriasis|ancylostomat|strongyloid/,
      },
      {
        label: "Cestoden",
        tone: "cestodes",
        match: /cestod|taenia|echinokokk|diphylloboth/,
      },
      { label: "Trematoden", tone: "trematodes", match: /trematod|schistosom/ },
      { label: "Skabies", tone: "scabies", match: /skabie|scabie/ },
      { label: "Läuse", tone: "lice", match: /laus|lause|pedicul|filzlaus/ },
      { label: "Malaria", tone: "malaria", match: /malaria/ },
      { label: "Leishmaniose", tone: "leishmanio", match: /leishmanio/ },
      {
        label: "Herpes",
        tone: "herpes",
        match: /herpes simplex|herpesvir|aciclovir|valaciclovir/,
      },
      { label: "Varizella zoster", tone: "vzv", match: /varizella|zoster/ },
      { label: "CMV", tone: "cmv", match: /\bcmv\b|zytomegal/ },
      {
        label: "Influenza",
        tone: "influenza",
        match: /influenza|oseltamivir|amantadin/,
      },
      {
        label: "Hepatitis B",
        tone: "hepatitisb",
        match: /hepatitis b|entecavir|lamivudin|telbivudin|tenofovir|adefovir/,
      },
      {
        label: "Hepatitis C",
        tone: "hepatitisc",
        match: /hepatitis c|sofosbuvir|glecaprevir|grazoprevir|voxilaprevir|paritaprevir|ledipasvir|elbasvir|velpatasvir|pibrentasvir|ribavirin/,
      },
      { label: "HIV", tone: "hiv", match: /\bhiv\b|aids/ },
    ],
  };

  var themes = {
    neutral: {
      accent: "#475569",
      accentSoft: "#eef2f7",
      accentStrong: "#334155",
    },
    teal: {
      accent: "#0f766e",
      accentSoft: "#e9f6f2",
      accentStrong: "#115e59",
    },
    amber: {
      accent: "#b7791f",
      accentSoft: "#fff5db",
      accentStrong: "#9a670f",
    },
    orange: {
      accent: "#b45309",
      accentSoft: "#fff3e4",
      accentStrong: "#92400e",
    },
    blue: {
      accent: "#1d4ed8",
      accentSoft: "#ebf2ff",
      accentStrong: "#1d4ed8",
    },
    magenta: {
      accent: "#8b1e54",
      accentSoft: "#fde7f1",
      accentStrong: "#9d174d",
    },
    navy: {
      accent: "#0f4c81",
      accentSoft: "#e6f0fa",
      accentStrong: "#0b3b63",
    },
    clay: {
      accent: "#9a3412",
      accentSoft: "#ffefe8",
      accentStrong: "#7c2d12",
    },
    rose: {
      accent: "#8b1e3f",
      accentSoft: "#fde8ef",
      accentStrong: "#7a1637",
    },
    violet: {
      accent: "#7c3aed",
      accentSoft: "#f5efff",
      accentStrong: "#6d28d9",
    },
  };

  var libraries = [
    {
      id: "antibiotika",
      label: "Antibiotika",
      theme: themes.teal,
      page: {
        title: "Antibiotika Atlas",
        subtitle: "",
        intro: "",
        description:
          "Lernübersicht zu Antibiotika nach Wirkorten, Erregerschwerpunkten und klinischen Merksätzen.",
        navIntro:
          "Antibiotika nach Wirkorten, Erregerschwerpunkten und kompakten Merksätzen.",
      },
      overgroups: [
        {
          id: "lernuebersichten",
          kind: "learning",
          includeInLearningLookup: false,
          preferTitleInNav: true,
          theme: themes.neutral,
          title: "Lernübersichten",
          kicker: "Schneller Zugriff",
          description: "",
          sections: [
          {
            id: "quick-reference",
            type: "quickReference",
            title: "Anhand Erreger",
            description: "",
            cards: [
              {
                title: "Grampositive Erreger",
                items: [
                  "Penicilline",
                  fact("Cephalosporine", "alle Generationen"),
                  "Carbapeneme",
                  "Makrolide",
                  "Tetracycline",
                  "Glycylcycline",
                  "Lincosamide",
                  fact("Fluorchinolone", "v.a. Gruppe III-IV"),
                  "Sulfonamide / Cotrimoxazol",
                  "Rifampicin",
                  "Fosfomycin",
                  fact("Aminoglykoside", "v.a. in Kombination"),
                ],
                focusLabel: "Besonders / ausschließlich grampositiv",
                focusItems: ["Glykopeptide", "Oxazolidinone", "Lipopeptide"],
              },
              {
                title: "Gramnegative Erreger",
                items: [
                  "Aminopenicilline + β-Lactamase-Inhibitor",
                  "Acylaminopenicilline ± β-Lactamase-Inhibitor",
                  fact("Cephalosporine", "v.a. 2.-4. Generation"),
                  "Carbapeneme",
                  fact("Fluorchinolone", "v.a. Gruppe I-II"),
                  "Aminoglykoside",
                  "Cotrimoxazol",
                  "Fosfomycin",
                  "Tetracycline / Tigecyclin",
                ],
                focusLabel: "Besonders starke gramnegative Wirkung",
                focusItems: [
                  fact("Cephalosporine", "3.-4. Generation"),
                  "Carbapeneme",
                  fact("Fluorchinolone", "Gruppe I-II"),
                  "Aminoglykoside",
                  fact("Cefiderocol", "inkl. MRGN"),
                ],
              },
              {
                title: "Pseudomonas aeruginosa",
                items: [
                  "Piperacillin/Tazobactam",
                  "Acylaminopenicilline",
                  fact("Ceftazidim", "Cephalosporin 3b"),
                  fact("Cefepim", "Cephalosporin 4"),
                  "Ceftolozan/Tazobactam",
                  "Carbapeneme",
                  "Ciprofloxacin",
                  "Aminoglykoside",
                  "Cefiderocol",
                ],
              },
              {
                title: "Anaerobier",
                items: [
                  "Metronidazol",
                  "Clindamycin",
                  "Aminopenicilline + β-Lactamase-Inhibitor",
                  "Piperacillin/Tazobactam",
                  "Carbapeneme",
                  "Tigecyclin",
                  "Moxifloxacin",
                ],
              },
              {
                title:
                  "Atypische / intrazelluläre Erreger (Chlamydien, Mykoplasmen, Legionellen)",
                items: [
                  "Makrolide",
                  "Tetracycline",
                  fact("Fluorchinolone", "Gruppe III-IV"),
                  "Tigecyclin",
                ],
              },
              {
                title: "MRSA",
                items: [
                  "Glykopeptide",
                  "Linezolid",
                  "Daptomycin",
                  "Tigecyclin",
                  fact("Cephalosporine", "5. Generation"),
                ],
              },
              {
                title: "VRE (Vancomycin-resistente Enterokokken)",
                items: ["Linezolid", "Daptomycin"],
              },
              {
                title: "Enterokokken",
                items: [
                  "Aminopenicilline",
                  "Piperacillin/Tazobactam",
                  "Carbapeneme",
                  "Glykopeptide",
                  "Linezolid",
                  "Daptomycin",
                ],
                warningLabel: "Nicht wirksam",
                warningItems: [fact("Cephalosporine", "1.-4. Generation")],
              },
              {
                title:
                  "Protozoen / opportunistische Erreger (Pneumocystis jirovecii und Toxoplasma gondii)",
                items: ["Cotrimoxazol"],
              },
              {
                title: "Mykobakterien",
                items: ["Rifampicin"],
              },
            ],
          },
          {
            id: "clinical-pearls",
            type: "pearls",
            title: "Prägemuster",
            description: "",
            cards: [
              {
                label: "Grampositiv-only",
                items: ["Vancomycin", "Linezolid", "Daptomycin"],
              },
              {
                label: "Gramnegativ-stark",
                items: ["Cephalosporine 3-4", "Carbapeneme", "Aminoglykoside"],
              },
              {
                label: "Pseudomonas",
                items: [
                  "Piperacillin/Tazobactam",
                  "Ceftazidim",
                  "Cefepim",
                  "Carbapeneme",
                  "Ciprofloxacin",
                  "Aminoglykoside",
                ],
              },
              {
                label: "Anaerobier",
                items: ["Metronidazol", "Clindamycin", "Carbapeneme"],
              },
              {
                label: "Atypiker / Intrazellulär",
                items: ["Makrolide", "Tetracycline", "neuere Fluorchinolone"],
              },
              {
                label: "MRSA",
                items: ["Vancomycin", "Linezolid", "Daptomycin"],
              },
            ],
          },
        ],
      },
      {
        id: "aeussere-begrenzungen",
        kind: "antibiotic",
        theme: themes.teal,
        title: "Äußere Begrenzungen",
        kicker: "Zellwand und Membran",
        description: "",
        sections: [
          {
            id: "beta-lactam-antibiotika",
            type: "entries",
            layout: "wide",
            title: "β-Lactam-Antibiotika",
            description: "",
            entries: [
              {
                name: "Penicilline",
                layout: "wide",
                overview: "",
                mechanism: [
                  fact(
                    "β-Lactam-Antibiotika: Hemmung der Zellwandsynthese",
                    "Bindung an Penicillin-bindende Proteine mit gestörter Peptidoglykan-Quervernetzung",
                  ),
                  fact(
                    "β-Lactamase-Inhibitoren hemmen zusätzlich β-Lactamasen",
                    "nur in Kombination mit β-Lactam-Antibiotika wirksam",
                  ),
                ],
                variants: [
                  {
                    name: "Klassische Penicilline",
                    substances: ["Penicillin G", "Penicillin V"],
                    effectiveAgainst: [
                      fact(
                        "Vor allem grampositive Bakterien",
                        "insb. Streptokokken",
                      ),
                      fact(
                        "Einzelne gramnegative Bakterien",
                        "insb. Meningokokken",
                      ),
                    ],
                  },
                  {
                    name: "Isoxazolylpenicilline / Staphylokokkenpenicilline",
                    substances: ["Flucloxacillin", "Oxacillin"],
                    effectiveAgainst: [
                      fact(
                        "Vor allem grampositive Bakterien",
                        "insb. Staphylokokken",
                      ),
                    ],
                  },
                  {
                    name: "Aminopenicilline",
                    substances: ["Ampicillin", "Amoxicillin"],
                    effectiveAgainst: [
                      "Grampositive Bakterien",
                      fact(
                        "Gute Wirkung gegen Listerien und Enterococcus faecalis",
                      ),
                      fact(
                        "Einige gramnegative Bakterien",
                        "v.a. Proteus mirabilis, Neisseria meningitidis, Haemophilus influenzae; besonders Amoxicillin",
                      ),
                    ],
                  },
                  {
                    name: "Aminopenicilline + β-Lactamase-Inhibitor",
                    substances: [
                      "Ampicillin/Sulbactam",
                      "Amoxicillin/Clavulansäure",
                    ],
                    effectiveAgainst: [
                      "Grampositive Bakterien",
                      "Zahlreiche gramnegative Bakterien",
                      fact("Anaerobier", "z.B. Bacteroides"),
                    ],
                  },
                  {
                    name: "Amidinopenicilline",
                    substances: ["Mecillinam", "Pivmecillinam"],
                    effectiveAgainst: [
                      "Vor allem urogenitale gramnegative Erreger",
                    ],
                  },
                  {
                    name: "Acylaminopenicilline",
                    substances: ["Piperacillin"],
                    effectiveAgainst: [
                      fact(
                        "Grampositive Bakterien",
                        "insb. Streptokokken, Enterokokken",
                      ),
                      fact(
                        "Zahlreiche gramnegative Bakterien",
                        "inkl. Pseudomonas aeruginosa; insb. Enterobacterales",
                      ),
                    ],
                  },
                  {
                    name: "Acylaminopenicilline + β-Lactamase-Inhibitor",
                    substances: ["Piperacillin/Tazobactam"],
                    effectiveAgainst: [
                      "Grampositive Bakterien",
                      fact(
                        "Fast alle gramnegativen Bakterien",
                        "inkl. Pseudomonas aeruginosa",
                      ),
                      fact("Anaerobier", "z.B. Bacteroides, Gardnerella"),
                    ],
                  },
                ],
              },
              {
                name: "Cephalosporine",
                layout: "wide",
                overview: "",
                mechanism: [
                  fact(
                    "β-Lactam-Antibiotika: Hemmung der Zellwandsynthese",
                    "Bindung an Penicillin-bindende Proteine mit gestörter Zellwand-Quervernetzung",
                  ),
                  fact("Teilweise unempfindlich gegen einige β-Lactamasen"),
                  fact("Kombinationen mit β-Lactamase-Inhibitoren erweitern das Spektrum"),
                  fact(
                    "Cefiderocol mit Siderophor-Funktion",
                    "besonders stabil und erleichterte Aufnahme in gramnegative Bakterien",
                  ),
                ],
                cautions: [
                  fact(
                    "Cephalosporine der 1.-4. Generation wirken nicht gegen Enterokokken",
                  ),
                ],
                variants: [
                  {
                    name: "1. Generation",
                    substances: ["Cefazolin", "Cephalexin"],
                    effectiveAgainst: [
                      fact(
                        "Vor allem grampositive Bakterien",
                        "insb. Staphylococcus aureus und Streptokokken",
                      ),
                    ],
                    cautions: [
                      "Nur schwache Wirkung gegen gramnegative Bakterien",
                    ],
                  },
                  {
                    name: "2. Generation",
                    substances: ["Cefuroxim", "Cefoxitin"],
                    effectiveAgainst: [
                      "Gute Wirkung gegen grampositive Bakterien",
                      fact(
                        "Gute Wirkung gegen einige gramnegative Bakterien",
                        "insb. Enterobacterales",
                      ),
                    ],
                  },
                  {
                    name: "3. Generation",
                    substances: ["Ceftriaxon", "Cefotaxim", "Ceftazidim"],
                    effectiveAgainst: [
                      fact(
                        "Gute Wirkung gegen grampositive Bakterien",
                        "inkl. Staphylokokken",
                      ),
                      fact(
                        "Sehr gute Wirkung gegen gramnegative Bakterien",
                        "z.B. Enterobacterales wie Proteus spp.",
                      ),
                    ],
                    notes: [
                      fact("3a-Gruppe mit breiter gramnegativer Wirkung"),
                      fact(
                        "3b-Gruppe ist gegen Pseudomonas aeruginosa aktiv",
                        "Ceftazidim; schwächer gegen grampositive Bakterien",
                      ),
                    ],
                  },
                  {
                    name: "4. Generation",
                    substances: ["Cefepim"],
                    effectiveAgainst: [
                      fact(
                        "Gute Wirkung gegen grampositive Bakterien",
                        "gute Streptokokken- und Staphylokokkenwirksamkeit",
                      ),
                      fact(
                        "Zahlreiche gramnegative Bakterien",
                        "inkl. Pseudomonas aeruginosa",
                      ),
                    ],
                    cautions: [fact("Keine MRSA-Wirksamkeit")],
                  },
                  {
                    name: "5. Generation",
                    substances: ["Ceftarolin", "Ceftobiprol"],
                    effectiveAgainst: [
                      "Gute Wirkung gegen grampositive Bakterien",
                      "Gute Wirkung gegen gramnegative Bakterien",
                      "Wirksam gegen MRSA",
                    ],
                    cautions: [
                      fact(
                        "Nicht ausreichend wirksam gegen Pseudomonas aeruginosa",
                      ),
                    ],
                  },
                  {
                    name: "Cephalosporine + β-Lactamase-Inhibitor",
                    substances: [
                      "Ceftazidim/Avibactam",
                      "Ceftolozan/Tazobactam",
                    ],
                    effectiveAgainst: [
                      fact(
                        "Ceftazidim/Avibactam gegen einige gramnegative MRE",
                      ),
                      fact(
                        "Ceftolozan/Tazobactam gegen einige gramnegative Bakterien",
                        "inkl. Pseudomonas aeruginosa und Enterobacterales",
                      ),
                    ],
                  },
                  {
                    name: "Cefiderocol",
                    substances: ["Cefiderocol"],
                    effectiveAgainst: [
                      fact(
                        "Gute Wirkung gegen aerobe gramnegative Bakterien",
                        "inkl. MRGN",
                      ),
                    ],
                  },
                ],
              },
              {
                name: "Carbapeneme",
                layout: "wide",
                substances: ["Imipenem", "Meropenem", "Ertapenem"],
                mechanism: [
                  fact(
                    "β-Lactam-Antibiotika: Hemmung der Zellwandsynthese",
                    "Bindung an Penicillin-bindende Proteine mit gestörter Peptidoglykan-Synthese",
                  ),
                  fact("β-Lactamase-fest"),
                ],
                effectiveAgainst: [
                  fact(
                    "Wirksam gegen grampositive Bakterien",
                    "z.B. Streptokokken, Staphylococcus aureus",
                  ),
                  fact(
                    "Wirksam gegen zahlreiche gramnegative Bakterien",
                    "teils auch ESBL-Bildner und 3-MRGN",
                  ),
                  "Wirksam gegen Pseudomonas aeruginosa",
                  "Wirksam gegen Nonfermenter",
                  "Wirksam gegen Anaerobier",
                ],
                otherInfo: [
                  fact(
                    "Meropenem wirkt etwas schwächer gegen grampositive Bakterien",
                  ),
                ],
              },
            ],
          },
          {
            id: "zellwand-und-membranwirksame-antibiotika",
            type: "entries",
            layout: "wide",
            title: "Zellwand- und Membranwirksame Antibiotika",
            description: "",
            entries: [
              {
                name: "Glykopeptide (Vancomycin, Teicoplanin)",
                substances: ["Vancomycin", "Teicoplanin"],
                mechanism: [
                  fact(
                    "Hemmung der Zellwandsynthese",
                    "Bindung an Zellwandbausteine grampositiver Bakterien und Blockade der Peptidoglykan-Synthese",
                  ),
                ],
                effectiveAgainst: [
                  fact(
                    "Ausschließlich grampositive Erreger",
                    "inkl. koagulasenegative Staphylokokken, MRSA, Enterococcus faecium",
                  ),
                  fact("Orales Vancomycin gegen Clostridioides difficile"),
                ],
              },
              {
                name: "Lipopeptide (Daptomycin)",
                substances: ["Daptomycin"],
                mechanism: [
                  fact(
                    "Irreversible Bindung an die bakterielle Zellmembran",
                    "Einbau von Ionenkanälen mit Depolarisation der Zelle",
                  ),
                ],
                effectiveAgainst: [
                  fact(
                    "Ausschließlich grampositive Erreger",
                    "inkl. koagulasenegative Staphylokokken, MRSA, VRE",
                  ),
                ],
              },
              {
                name: "Epoxide (Fosfomycin)",
                substances: ["Fosfomycin"],
                mechanism: [
                  fact(
                    "Hemmung der Zellwandsynthese",
                    "Blockade eines frühen Syntheseschritts der bakteriellen Zellwand",
                  ),
                ],
                effectiveAgainst: [
                  fact(
                    "Einige grampositive Erreger",
                    "z.B. Staphylokokken inkl. MRSA, Enterokokken inkl. VRE",
                  ),
                  fact(
                    "Einige gramnegative Erreger",
                    "z.B. E. coli, Enterobacter spp., Klebsiella spp., Pseudomonas aeruginosa",
                  ),
                ],
              },
            ],
          },
        ],
      },
      {
        id: "nukleinsaeure-und-enzym",
        kind: "antibiotic",
        theme: themes.orange,
        title: "Nukleinsäure und zugehörige Enzyme",
        kicker: "DNA, RNA und Enzymziele",
        description: "",
        sections: [
          {
            id: "dna-rna-wirksame-antibiotika",
            type: "entries",
            title: "DNA-/RNA-wirksame Antibiotika",
            description: "",
            entries: [
              {
                name: "Fluorchinolone",
                overview: "",
                mechanism: [
                  fact(
                    "Hemmung bakterieller Topoisomerasen",
                    "v.a. DNA-Gyrase (Topoisomerase II), teils auch Topoisomerase IV",
                  ),
                ],
                variants: [
                  {
                    name: "Gruppe I",
                    substances: ["Norfloxacin"],
                    effectiveAgainst: [
                      fact(
                        "Vor allem gramnegative Stäbchen",
                        "inkl. Pseudomonas aeruginosa",
                      ),
                    ],
                  },
                  {
                    name: "Gruppe II",
                    substances: ["Ciprofloxacin", "Ofloxacin"],
                    effectiveAgainst: [
                      fact(
                        "Gut wirksam gegen gramnegative Bakterien",
                        "inkl. Enterobacterales und Pseudomonas aeruginosa",
                      ),
                      "Wirksam gegen Atypiker",
                    ],
                  },
                  {
                    name: "Gruppe III",
                    substances: ["Levofloxacin"],
                    effectiveAgainst: [
                      "Bessere Wirkung gegen grampositive Kokken",
                      fact(
                        "Gute Wirkung gegen atypische Pneumonie-Erreger",
                        "Chlamydien, Mykoplasmen, Legionellen",
                      ),
                    ],
                    cautions: [
                      fact("Nur mäßig wirksam gegen Pseudomonas aeruginosa"),
                    ],
                  },
                  {
                    name: "Gruppe IV",
                    substances: ["Moxifloxacin"],
                    effectiveAgainst: [
                      "Noch bessere Wirkung gegen grampositive Kokken",
                      fact(
                        "Gute Wirkung gegen atypische Pneumonie-Erreger",
                        "Chlamydien, Mykoplasmen, Legionellen",
                      ),
                      "Gute Wirkung gegen Anaerobier",
                    ],
                    cautions: [
                      fact("Keine Wirkung gegen Pseudomonas aeruginosa"),
                    ],
                  },
                ],
              },
              {
                name: "Nitroimidazole (Metronidazol)",
                substances: ["Metronidazol"],
                mechanism: [
                  fact(
                    "DNA-Strangbrüche nach intrazellulärer Aktivierung",
                    "v.a. in anaeroben Erregern",
                  ),
                ],
                effectiveAgainst: [
                  fact(
                    "Anaerobier",
                    "z.B. Bacteroides, Clostridioides difficile",
                  ),
                  fact(
                    "Wenige andere fakultativ anaerobe Bakterien",
                    "z.B. Gardnerella vaginalis, Helicobacter pylori",
                  ),
                  fact(
                    "Auch gegen Protozoen",
                    "z.B. Giardia lamblia, Entamoeba histolytica, Trichomonas vaginalis",
                  ),
                ],
              },
              {
                name: "Ansamycine (Rifampicin)",
                substances: ["Rifampicin", "Rifabutin"],
                mechanism: [
                  fact(
                    "Hemmung der bakteriellen RNA-Polymerase",
                    "Hemmung der Transkription",
                  ),
                ],
                effectiveAgainst: [
                  "Grampositive Bakterien",
                  "Wenige gramnegative Bakterien",
                  "Mykobakterien",
                ],
                notes: [fact("Starker CYP-Induktor")],
              },
            ],
          },
        ],
      },
      {
        id: "bakterielle-ribosomen",
        kind: "antibiotic",
        theme: themes.blue,
        title: "Bakterielle Ribosomen",
        kicker: "Proteinsynthesehemmung",
        description: "",
        sections: [
          {
            id: "proteinsynthesehemmer",
            type: "entries",
            title: "Proteinsynthesehemmer",
            description: "",
            entries: [
              {
                name: "Makrolide",
                substances: ["Azithromycin", "Clarithromycin", "Erythromycin"],
                mechanism: [
                  fact(
                    "Hemmung der bakteriellen Proteinsynthese",
                    "Bindung an die 50S-Untereinheit des Ribosoms",
                  ),
                ],
                effectiveAgainst: [
                  fact(
                    "Besonders wirksam gegen intrazelluläre Erreger und Atypiker",
                    "Chlamydien, Mykoplasmen, Legionellen",
                  ),
                  fact("Einige grampositive Bakterien", "z.B. Streptokokken"),
                  fact(
                    "Einige gramnegative Bakterien",
                    "z.B. Neisserien, Helicobacter pylori",
                  ),
                ],
                notes: [
                  fact(
                    "Azithromycin zusätzlich gegen Campylobacter spp.",
                    "auch einige Enterobacterales wie Shigella spp. und Salmonella spp.",
                  ),
                ],
              },
              {
                name: "Tetracycline",
                substances: ["Doxycyclin", "Minocyclin"],
                mechanism: [
                  fact(
                    "Hemmung der bakteriellen Proteinsynthese",
                    "Bindung an die 30S-Untereinheit des Ribosoms",
                  ),
                ],
                effectiveAgainst: [
                  "Einige grampositive Bakterien",
                  "Einzelne gramnegative Bakterien",
                  fact(
                    "Gute Wirkung gegen intrazelluläre Erreger und Atypiker",
                    "Chlamydien, Mykoplasmen, Rickettsien",
                  ),
                ],
              },
              {
                name: "Glycylcycline (z.B. Tigecyclin)",
                substances: ["Tigecyclin"],
                mechanism: [
                  fact(
                    "Hemmung der bakteriellen Proteinsynthese",
                    "Bindung an die 30S-Untereinheit des Ribosoms",
                  ),
                ],
                effectiveAgainst: [
                  fact(
                    "Viele grampositive Bakterien",
                    "inkl. MRE, Staphylokokken inkl. MRSA, Enterokokken inkl. VRE",
                  ),
                  fact(
                    "Einige gramnegative Bakterien",
                    "z.B. Enterobacterales",
                  ),
                  "Atypiker",
                  "Anaerobier",
                ],
              },
              {
                name: "Aminoglykoside",
                substances: ["Gentamicin", "Tobramycin", "Amikacin"],
                mechanism: [
                  fact(
                    "Hemmung der bakteriellen Proteinsynthese",
                    "Bindung an die 30S-Untereinheit des Ribosoms",
                  ),
                ],
                effectiveAgainst: [
                  fact(
                    "Einige gramnegative Bakterien",
                    "insb. Pseudomonas aeruginosa",
                  ),
                ],
                notes: [
                  fact(
                    "Gegen einige grampositive Erreger synergistisch in Kombination mit β-Lactamen",
                    "z.B. Enterococcus faecalis, E. faecium, Listeria monocytogenes",
                  ),
                ],
              },
              {
                name: "Lincosamide (Clindamycin)",
                substances: ["Clindamycin"],
                mechanism: [
                  fact(
                    "Hemmung der bakteriellen Proteinsynthese",
                    "Bindung an die 50S-Untereinheit des Ribosoms",
                  ),
                ],
                effectiveAgainst: ["Grampositive Bakterien", "Anaerobier"],
                cautions: [fact("Keine Wirkung gegen Enterokokken")],
              },
              {
                name: "Oxazolidinone (Linezolid)",
                substances: ["Linezolid", "Tedizolid"],
                mechanism: [
                  fact(
                    "Hemmung der bakteriellen Proteinsynthese",
                    "Blockade der Initiation an der 50S-Untereinheit des Ribosoms",
                  ),
                ],
                effectiveAgainst: [
                  fact(
                    "Ausschließlich grampositive Erreger",
                    "insb. Streptokokken, Staphylokokken inkl. MRSA, Enterokokken inkl. VRE",
                  ),
                ],
              },
            ],
          },
        ],
      },
      {
        id: "folsaeuremetabolismus",
        kind: "antibiotic",
        theme: themes.magenta,
        title: "Folsäuremetabolismus",
        kicker: "Stoffwechselblockade",
        preferTitleInNav: true,
        description: "",
        sections: [
          {
            id: "folsaeurestoffwechsel-hemmer",
            type: "entries",
            title: "Folsäurestoffwechsel-Hemmer",
            description: "",
            entries: [
              {
                name: "Sulfonamide",
                substances: ["Sulfamethoxazol"],
                mechanism: [
                  fact(
                    "Hemmung der bakteriellen Folsäuresynthese",
                    "Blockade der Dihydropteroatsynthase",
                  ),
                ],
                effectiveAgainst: [
                  "Einige grampositive Bakterien",
                  "Einige gramnegative Bakterien",
                ],
              },
              {
                name: "Trimethoprim",
                substances: ["Trimethoprim"],
                mechanism: [
                  fact(
                    "Hemmung der bakteriellen Folsäuresynthese",
                    "Blockade der Dihydrofolatreduktase",
                  ),
                ],
                otherInfo: [
                  fact(
                    "Allein klinisch untergeordnet; vor allem als Kombinationspartner relevant",
                    null,
                    {
                      muted: true,
                    },
                  ),
                ],
              },
              {
                name: "Cotrimoxazol",
                substances: ["Trimethoprim/Sulfamethoxazol"],
                mechanism: [
                  fact(
                    "Kombinierte Hemmung der bakteriellen Folsäuresynthese",
                    "Sulfamethoxazol hemmt die Dihydropteroatsynthase, Trimethoprim die Dihydrofolatreduktase",
                  ),
                ],
                effectiveAgainst: [
                  "Zahlreiche grampositive Bakterien",
                  "Zahlreiche gramnegative Bakterien",
                  fact(
                    "Wirksam gegen Pneumocystis jirovecii und Toxoplasma gondii",
                  ),
                ],
                cautions: [
                  fact("Nicht wirksam gegen Pseudomonas"),
                  fact("Nicht wirksam gegen Anaerobier"),
                ],
              },
            ],
          },
        ],
      },
      ],
    },
    {
      id: "antimykotika",
      label: "Antimykotika",
      theme: themes.amber,
      page: {
        title: "Antimykotika Atlas",
        subtitle: "",
        intro: "",
        description:
          "Fokussierte Lernübersicht zu Antimykotika nach Gruppen, Wirkstoffen und Wirkorten.",
        navIntro:
          "Antimykotika nach Gruppen, Wirkstoffen und Wirkorten.",
      },
      overgroups: [
        {
          id: "antimykotika-lernuebersichten",
          kind: "learning",
          includeInLearningLookup: false,
          preferTitleInNav: true,
          theme: themes.neutral,
          title: "Lernübersichten",
          kicker: "Schneller Zugriff",
          description: "",
          sections: [
            {
              id: "antimykotika-anhand-erreger",
              type: "quickReference",
              title: "Anhand Erreger",
              description: "",
              cards: [
                {
                  title: "Hefen / Candida",
                  items: [
                    "Clotrimazol",
                    "Fluconazol",
                    "Voriconazol",
                    "Amphotericin B",
                    "Nystatin",
                    "Caspofungin",
                    "Anidulafungin",
                    "Micafungin",
                    "Ciclopirox",
                  ],
                },
                {
                  title: "Schimmelpilze / Aspergillus",
                  items: [
                    fact("Voriconazol", "Mittel 1. Wahl"),
                    "Posaconazol",
                    "Amphotericin B",
                    "Caspofungin",
                    "Anidulafungin",
                    "Micafungin",
                  ],
                  warningLabel: "Nicht wirksam",
                  warningItems: [fact("Fluconazol", "bei Aspergillose unwirksam")],
                },
                {
                  title: "Kryptokokken",
                  items: ["Fluconazol", "Voriconazol", "Amphotericin B"],
                },
                {
                  title: "Dermatophyten",
                  items: [
                    "Bifonazol",
                    "Itraconazol",
                    "Ciclopirox",
                    "Terbinafin",
                  ],
                },
                {
                  title: "Onychomykosen",
                  items: ["Itraconazol", "Ciclopirox", "Terbinafin"],
                },
              ],
            },
          ],
        },
        {
          id: "azol-antimykotika",
          kind: "antifungal",
          theme: themes.amber,
          title: "Azol-Antimykotika",
          kicker: "Ergosterol-Synthese",
          preferTitleInNav: true,
          description: "Wirkort: Hemmung der Ergosterol-Synthese in der Pilzmembran.",
          sections: [
            {
              id: "imidazole",
              type: "entries",
              title: "Imidazole",
              description: "Vor allem lokal angewendete Azole.",
              entries: [
                {
                  name: "Imidazole",
                  mechanism: [fact("Azole: Hemmung der Ergosterol-Synthese")],
                  variants: [
                    {
                      name: "Clotrimazol",
                      effectiveAgainst: [fact("Hefen", "v.a. Candidose")],
                      notes: [fact("Lokale Anwendung")],
                    },
                    {
                      name: "Ketoconazol",
                      notes: [
                        fact("Vor allem lokal angewendet"),
                        fact("Orale Anwendung ist heute untergeordnet"),
                      ],
                    },
                    {
                      name: "Bifonazol",
                      effectiveAgainst: [fact("Dermatophytosen")],
                      notes: [fact("Lokale Anwendung")],
                    },
                  ],
                },
              ],
            },
            {
              id: "triazole",
              type: "entries",
              title: "Triazole",
              description: "Systemisch nutzbare Azole.",
              entries: [
                {
                  name: "Triazole",
                  mechanism: [fact("Azole: Hemmung der Ergosterol-Synthese")],
                  variants: [
                    {
                      name: "Fluconazol",
                      effectiveAgainst: [
                        fact("Hefen", "Candidose"),
                        "Kryptokokkose",
                        "Dermatophytosen",
                      ],
                      notes: [fact("Per os oder intravenös")],
                      otherInfo: [fact("Nicht wirksam gegen Aspergillose")],
                    },
                    {
                      name: "Voriconazol",
                      effectiveAgainst: [
                        fact("Hefen", "Candidose"),
                        "Kryptokokkose",
                        fact("Aspergillose", "Mittel 1. Wahl"),
                      ],
                      notes: [fact("Systemische Anwendung")],
                    },
                    {
                      name: "Itraconazol",
                      effectiveAgainst: [
                        fact("Besonders gut wirksam bei Dermatophytosen"),
                        "Candida-Onychomykose",
                        "Pityriasis versicolor",
                      ],
                      notes: [fact("Per os")],
                    },
                    {
                      name: "Posaconazol",
                      effectiveAgainst: [
                        fact("Nahezu alle Pilze", "inkl. Candida und Aspergillus"),
                        "Prophylaxe invasiver Mykosen bei schwerer Immunsuppression",
                        "Therapierefraktäre Mykosen",
                      ],
                      notes: [fact("Per os")],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "polyen-antimykotika",
          kind: "antifungal",
          theme: themes.teal,
          title: "Polyen-Antimykotika",
          kicker: "Ergosterol-Bindung",
          preferTitleInNav: true,
          description:
            "Wirkort: Bindung an Ergosterol mit Porenbildung in der Pilzmembran.",
          sections: [
            {
              id: "polyen-wirkstoffe",
              type: "entries",
              title: "Polyen-Antimykotika",
              description: "",
              entries: [
                {
                  name: "Polyen-Antimykotika",
                  mechanism: [
                    fact("Polyen: Bindung an Ergosterol"),
                    fact("Membrandurchlässigkeit steigt", "fungizide Wirkung"),
                  ],
                  variants: [
                    {
                      name: "Amphotericin B",
                      effectiveAgainst: [
                        fact("Hefen", "invasive Candidose"),
                        "Kryptokokkose",
                        fact("Schimmelpilze", "Aspergillose"),
                      ],
                      notes: [
                        fact("Lokal oder intravenös"),
                        fact("Nur lipidformulierte Präparate verwenden"),
                      ],
                    },
                    {
                      name: "Nystatin",
                      effectiveAgainst: [fact("Hefen", "Candidose")],
                      notes: [
                        fact("Nur lokale Anwendung möglich"),
                        fact(
                          "Prophylaktische perorale Gabe",
                          "bei Immunsuppression"
                        ),
                        fact("Lokal an Haut und Schleimhaut"),
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "echinocandine",
          kind: "antifungal",
          theme: themes.blue,
          title: "Echinocandine",
          kicker: "Zellwand-Synthese",
          preferTitleInNav: true,
          description:
            "Wirkort: Hemmung der Beta-(1,3)-Glucan-Synthese in der Pilzzellwand.",
          sections: [
            {
              id: "echinocandine-wirkstoffe",
              type: "entries",
              title: "Echinocandine",
              description: "",
              entries: [
                {
                  name: "Echinocandine",
                  substances: ["Caspofungin", "Anidulafungin", "Micafungin"],
                  mechanism: [
                    fact("Echinocandine: Hemmung der Beta-(1,3)-Glucan-Synthese")
                  ],
                  effectiveAgainst: [
                    fact("Hefen", "invasive Candidose"),
                    fact("Schimmelpilze", "Aspergillose"),
                    fact(
                      "Empirische Therapie",
                      "bei V.a. systemische Pilzinfektion unter Neutropenie"
                    ),
                  ],
                  notes: [
                    fact("Intravenös"),
                    fact("Caspofungin ist das klinisch wichtigste Leitsubstanz-Beispiel"),
                    fact("Anidulafungin und Micafungin haben ein ähnliches Wirkspektrum"),
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "weitere-antimykotika",
          kind: "antifungal",
          theme: themes.magenta,
          title: "Weitere Antimykotika",
          kicker: "Spezielle Optionen",
          preferTitleInNav: true,
          description: "Weitere Gruppen mit eigenständigen Angriffspunkten.",
          sections: [
            {
              id: "hydroxypyridonderivate",
              type: "entries",
              title: "Hydroxypyridonderivate",
              description: "",
              entries: [
                {
                  name: "Hydroxypyridonderivate",
                  substances: ["Ciclopirox"],
                  mechanism: [
                    fact(
                      "Störung zellulärer Enzyme",
                      "durch Chelatbildung mit mehrwertigen Kationen"
                    ),
                  ],
                  effectiveAgainst: [
                    fact("Hefen", "Candidose"),
                    "Dermatophytosen",
                    fact("Besonders verbreitet bei Onychomykosen"),
                  ],
                  notes: [fact("Lokal")],
                },
              ],
            },
            {
              id: "allylamine",
              type: "entries",
              title: "Allylamine",
              description: "",
              entries: [
                {
                  name: "Allylamine",
                  substances: ["Terbinafin"],
                  mechanism: [
                    fact(
                      "Hemmung der Squalenepoxidase",
                      "dadurch gestörte Ergosterol-Synthese"
                    ),
                  ],
                  effectiveAgainst: ["Dermatophytosen"],
                  notes: [fact("Per os oder lokal")],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "antiparasitika",
      label: "Antiparasitika",
      theme: themes.navy,
      page: {
        title: "Antiparasitika Atlas",
        subtitle: "",
        intro: "",
        description:
          "Fokussierte Lernübersicht zu Antiparasitika nach Gruppen, Substanzen und wichtigsten Anwendungsgebieten.",
        navIntro:
          "Antiparasitika nach Gruppen, Substanzen und wichtigen Zielerregern.",
      },
      overgroups: [
        {
          id: "antiparasitika-lernuebersichten",
          kind: "learning",
          includeInLearningLookup: false,
          preferTitleInNav: true,
          theme: themes.neutral,
          title: "Lernübersichten",
          kicker: "Schneller Zugriff",
          description: "",
          sections: [
            {
              id: "antiparasitika-anhand-erreger",
              type: "quickReference",
              title: "Anhand Erreger",
              description: "",
              cards: [
                {
                  title: "Protozoen / Einzeller",
                  items: [
                    "Atovaquon/Proguanil",
                    "Artemeter/Lumefantrin",
                    "Amphotericin B",
                    "Ketoconazol",
                    "Itraconazol",
                    "Metronidazol",
                  ],
                },
                {
                  title: "Nematoden",
                  items: ["Ivermectin", "Albendazol", "Mebendazol"],
                },
                {
                  title: "Cestoden",
                  items: ["Praziquantel", "Albendazol", "Mebendazol"],
                },
                {
                  title: "Trematoden",
                  items: ["Praziquantel"],
                },
                {
                  title: "Skabies",
                  items: ["Permethrin", "Ivermectin"],
                },
                {
                  title: "Kopf- und Filzläuse",
                  items: ["Dimeticon", "Ivermectin"],
                  warningLabel: "Nicht mehr empfohlen",
                  warningItems: ["Permethrin"],
                },
              ],
            },
          ],
        },
        {
          id: "antiprotozoika",
          kind: "antiparasitic",
          theme: themes.navy,
          title: "Antiprotozoika",
          kicker: "Einzeller",
          preferTitleInNav: true,
          description:
            "Protozoentherapie nutzt teils auch Arzneimittel aus der Antiinfektiva-Therapie anderer Domänen.",
          sections: [
            {
              id: "malariatherapeutika",
              type: "entries",
              title: "Malariatherapeutika",
              description: "",
              entries: [
                {
                  name: "Malariatherapeutika",
                  substances: ["Atovaquon/Proguanil", "Artemeter/Lumefantrin"],
                  effectiveAgainst: [fact("Malaria")],
                  notes: [fact("Wichtige Beispiele aus der Malariatherapie")],
                },
              ],
            },
            {
              id: "antimykotika-bei-protozoen",
              type: "entries",
              title: "Antimykotika bei Protozoen",
              description: "",
              entries: [
                {
                  name: "Antimykotika bei Protozoen",
                  substances: ["Amphotericin B", "Ketoconazol", "Itraconazol"],
                  effectiveAgainst: [fact("Leishmaniose")],
                  notes: [fact("Eigentlich aus der Antimykotikatherapie bekannt")],
                },
              ],
            },
            {
              id: "nitroimidazole-bei-protozoen",
              type: "entries",
              title: "Nitroimidazole bei Protozoen",
              description: "",
              entries: [
                {
                  name: "Nitroimidazole bei Protozoen",
                  substances: ["Metronidazol"],
                  effectiveAgainst: [
                    fact("Giardia lamblia", "Giardiasis"),
                    fact("Entamoeba histolytica", "Amöbiasis"),
                    fact("Trichomonas vaginalis", "Trichomoniasis"),
                  ],
                  notes: [fact("Eigentlich als Antibiotikum bekannt")],
                },
              ],
            },
          ],
        },
        {
          id: "anthelminthika",
          kind: "antiparasitic",
          theme: themes.amber,
          title: "Anthelminthika",
          kicker: "Wurmerkrankungen",
          preferTitleInNav: true,
          description:
            "Vermizid wirkende Gruppe; in der Schwangerschaft kontraindiziert.",
          sections: [
            {
              id: "praziquantel",
              type: "entries",
              title: "Praziquantel",
              description: "",
              entries: [
                {
                  name: "Praziquantel",
                  mechanism: [
                    fact(
                      "Vermehrter Calciumeinstrom durch die Wurmoberfläche"
                    ),
                  ],
                  effectiveAgainst: [
                    fact("Trematoden", "z.B. Schistosomiasis"),
                    fact("Cestoden", "z.B. Taenia-Infektionen, Diphyllobothriasis"),
                  ],
                  notes: [fact("Bei den meisten Würmern reicht eine Einmalgabe aus")],
                },
              ],
            },
            {
              id: "gabaar-aktivatoren",
              type: "entries",
              title: "GABAAR-Aktivatoren",
              description: "",
              entries: [
                {
                  name: "GABAAR-Aktivatoren",
                  substances: ["Ivermectin"],
                  mechanism: [
                    fact(
                      "Bindung an glutamatgesteuerte Chloridkanäle",
                      "vermehrter Chlorideinstrom in Nerven- und Muskelzellen von Mikrofilarien"
                    ),
                    fact(
                      "GABA-Agonist",
                      "Unterbrechung der synaptischen Weiterleitung im ZNS"
                    ),
                  ],
                  effectiveAgainst: [
                    "Skabies",
                    "Kopf- und Filzläuse",
                    fact("Nematoden", "z.B. Strongyloidiasis, Ascariasis"),
                  ],
                },
              ],
            },
            {
              id: "mikrotubuli-inhibitoren",
              type: "entries",
              title: "Mikrotubuli-Inhibitoren",
              description: "",
              entries: [
                {
                  name: "Mikrotubuli-Inhibitoren",
                  substances: ["Albendazol", "Mebendazol"],
                  mechanism: [
                    fact("Hemmung der Polymerisation von Mikrotubuli"),
                  ],
                  variants: [
                    {
                      name: "Albendazol",
                      effectiveAgainst: [
                        fact(
                          "Nematoden",
                          "z.B. Ascariasis, Strongyloidiasis, Trichinose, Ancylostomatidose"
                        ),
                        fact(
                          "Cestoden",
                          "z.B. Taenia-Infektionen, Echinokokkose"
                        ),
                      ],
                    },
                    {
                      name: "Mebendazol",
                      effectiveAgainst: [
                        fact(
                          "Nematoden",
                          "z.B. Enterobiose, Ascariasis, Ancylostomatidose, Trichuriasis, Trichinose, Strongyloidiasis"
                        ),
                        fact("Cestoden", "z.B. Taenia-Infektionen"),
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "ektoparasitizide",
          kind: "antiparasitic",
          theme: themes.clay,
          title: "Ektoparasitizide",
          kicker: "Milben und Läuse",
          preferTitleInNav: true,
          description:
            "Topische Medikamente gegen Laus- und Milbenerkrankungen; Expositionsprophylaxe bleibt zentral.",
          sections: [
            {
              id: "natriumkanalaktivatoren",
              type: "entries",
              title: "Natriumkanalaktivatoren",
              description: "",
              entries: [
                {
                  name: "Natriumkanalaktivatoren",
                  substances: ["Permethrin"],
                  mechanism: [
                    fact(
                      "Toxische Wirkung durch Anreicherung im Nervengewebe des Arthropoden"
                    ),
                  ],
                  effectiveAgainst: [
                    fact("Skabies", "1. Wahl"),
                  ],
                  cautions: [fact("Pediculosis capitis", "nicht mehr empfohlen")],
                  notes: [fact("Topische Anwendung")],
                },
              ],
            },
            {
              id: "reduktoren-der-oberflaechenspannung",
              type: "entries",
              title: "Reduktoren der Oberflächenspannung",
              description: "",
              entries: [
                {
                  name: "Reduktoren der Oberflächenspannung",
                  substances: ["Dimeticon"],
                  mechanism: [
                    fact(
                      "Dringt in Atemöffnungen von Läusen ein",
                      "blockiert die Atmung"
                    ),
                  ],
                  effectiveAgainst: [fact("Pediculosis capitis", "1. Wahl")],
                  notes: [fact("Topische Anwendung bei Kopflausbefall")],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "virostatika",
      label: "Virostatika",
      theme: themes.rose,
      page: {
        title: "Virostatika Atlas",
        subtitle: "",
        intro: "",
        description:
          "Fokussierte Lernübersicht zu Virostatika nach Virusgruppen, Wirkstoffgruppen und wichtigsten Substanzen.",
        navIntro:
          "Virostatika nach Virusgruppen, Wirkstoffen und typischen Zielviren.",
      },
      overgroups: [
        {
          id: "virostatika-lernuebersichten",
          kind: "learning",
          includeInLearningLookup: false,
          preferTitleInNav: true,
          theme: themes.neutral,
          title: "Lernübersichten",
          kicker: "Schneller Zugriff",
          description: "",
          sections: [
            {
              id: "virostatika-anhand-erreger",
              type: "quickReference",
              title: "Anhand Erreger",
              description: "",
              cards: [
                {
                  title: "Herpes simplex / Varizella-zoster",
                  items: ["Aciclovir"],
                },
                {
                  title: "CMV",
                  items: ["Ganciclovir", "Foscarnet", "Fomivirsen"],
                },
                {
                  title: "Influenza A",
                  items: ["Oseltamivir", "Amantadin"],
                },
                {
                  title: "Influenza B",
                  items: ["Oseltamivir"],
                },
                {
                  title: "HIV",
                  items: [
                    "NRTI",
                    "NNRTI",
                    "Protease-Inhibitoren",
                    "Integrase-Inhibitoren",
                  ],
                },
                {
                  title: "Hepatitis B",
                  items: [
                    "Tenofovir",
                    "Adefovir",
                    "Entecavir",
                    "Lamivudin",
                    "Telbivudin",
                    "(PEG-)Interferon-α",
                  ],
                },
                {
                  title: "Hepatitis C",
                  items: [
                    "Glecaprevir",
                    "Velpatasvir",
                    "Sofosbuvir",
                    "Ribavirin",
                    "(PEG-)Interferon-α",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "herpesviridae",
          kind: "antiviral",
          theme: themes.rose,
          title: "Antivirale Pharmaka gegen Herpesviridae",
          kicker: "DNA-Viren",
          preferTitleInNav: true,
          description:
            "Wichtige Medikamente gegen Herpes-simplex-, Varizella-zoster- und CMV-Infektionen.",
          sections: [
            {
              id: "dna-polymerase-inhibitoren-herpes",
              type: "entries",
              title: "DNA-Polymerase-Inhibitoren",
              description: "",
              entries: [
                {
                  name: "DNA-Polymerase-Inhibitoren",
                  mechanism: [
                    fact("Hemmung der viralen DNA-Polymerase"),
                  ],
                  variants: [
                    {
                      name: "Aciclovir",
                      substances: ["Valaciclovir"],
                      effectiveAgainst: [
                        fact("Herpes simplex"),
                        fact("Varizella zoster"),
                      ],
                      notes: [fact("Einzige auch parenteral anwendbare Substanz dieser Gruppe")],
                    },
                    {
                      name: "Ganciclovir",
                      effectiveAgainst: [fact("Zytomegalie-Virus", "CMV")],
                      notes: [fact("Für schwere CMV-Infektionen")],
                    },
                    {
                      name: "Foscarnet",
                      effectiveAgainst: [fact("CMV"), fact("Herpesviridae")],
                      notes: [fact("Benötigt keine Aktivierung")],
                    },
                  ],
                },
              ],
            },
            {
              id: "antisense-oligonukleotide",
              type: "entries",
              title: "Antisense-Oligonukleotide",
              description: "",
              entries: [
                {
                  name: "Antisense-Oligonukleotide",
                  substances: ["Fomivirsen"],
                  mechanism: [fact("Antisense-Medikament")],
                  effectiveAgainst: [fact("CMV-Retinitis", "bei AIDS")],
                  notes: [fact("Lokale Therapie am Auge")],
                },
              ],
            },
          ],
        },
        {
          id: "influenzaviren",
          kind: "antiviral",
          theme: themes.navy,
          title: "Antivirale Pharmaka gegen Influenzaviren",
          kicker: "Influenzatherapie",
          preferTitleInNav: true,
          description:
            "Wichtige Medikamente gegen Influenza A und B.",
          sections: [
            {
              id: "ionenkanalblocker",
              type: "entries",
              title: "Ionenkanalblocker",
              description: "",
              entries: [
                {
                  name: "Ionenkanalblocker",
                  substances: ["Amantadin"],
                  mechanism: [fact("Blockade viraler Ionenkanäle")],
                  effectiveAgainst: [fact("Influenza A")],
                  notes: [fact("Zusätzliche Anwendung als Parkinson-Medikament")],
                },
              ],
            },
            {
              id: "neuraminidase-hemmer",
              type: "entries",
              title: "Neuraminidase-Hemmer",
              description: "",
              entries: [
                {
                  name: "Neuraminidase-Hemmer",
                  substances: ["Oseltamivir"],
                  mechanism: [
                    fact(
                      "Hemmen die Ausknospung des Virus",
                      "verhindern die Aussaat in die Blutbahn"
                    ),
                  ],
                  effectiveAgainst: [fact("Influenza A und B")],
                },
              ],
            },
          ],
        },
        {
          id: "hiv-therapie",
          kind: "antiviral",
          theme: themes.violet,
          title: "Antiretrovirale Therapie bei HIV",
          kicker: "ART",
          preferTitleInNav: true,
          description:
            "ART: Kombination mehrerer Substanzen zur Resistenzvermeidung; klassisch 2 NRTI plus Integrase-Inhibitor, NNRTI oder Protease-Inhibitor, heute teils auch duale Therapie oder Depot.",
          sections: [
            {
              id: "nrti",
              type: "entries",
              title: "NRTI",
              description: "Nukleosidische und nukleotidische Reverse-Transkriptase-Inhibitoren.",
              entries: [
                {
                  name: "NRTI",
                  mechanism: [
                    fact(
                      "Kompetitive Hemmung der reversen Transkription",
                      "Kettenabbruch nach Einbau in neu synthetisierte DNA-Stränge"
                    ),
                  ],
                  notes: [fact("Enden meist auf -in")],
                  variants: [
                    {
                      name: "NsRTI",
                      substances: ["Emtricitabin", "Lamivudin", "Abacavir", "Zidovudin"],
                    },
                    {
                      name: "NtRTI",
                      substances: ["Tenofovir"],
                    },
                  ],
                },
              ],
            },
            {
              id: "nnrti",
              type: "entries",
              title: "NNRTI",
              description: "Nicht-nukleosidische Reverse-Transkriptase-Inhibitoren.",
              entries: [
                {
                  name: "NNRTI",
                  substances: [
                    "Rilpivirin",
                    "Efavirenz",
                    "Nevirapin",
                    "Etravirin",
                    "Doravirin",
                  ],
                  mechanism: [
                    fact(
                      "Nicht-kompetitive Hemmung der viruseigenen reversen Transkriptase"
                    ),
                  ],
                  notes: [fact("Tragen oft die Silbe -vir- in der Mitte")],
                },
              ],
            },
            {
              id: "protease-inhibitoren-hiv",
              type: "entries",
              title: "Protease-Inhibitoren",
              description: "",
              entries: [
                {
                  name: "Protease-Inhibitoren",
                  substances: ["Darunavir", "Atazanavir", "Lopinavir", "Tipranavir"],
                  mechanism: [
                    fact(
                      "Hemmung der katalytischen Protease-Aktivität",
                      "verhindert die Bildung reifer infektiöser Viruspartikel"
                    ),
                  ],
                  notes: [fact("Enden meist auf -navir")],
                },
              ],
            },
            {
              id: "integrase-inhibitoren-hiv",
              type: "entries",
              title: "Integrase-Inhibitoren",
              description: "",
              entries: [
                {
                  name: "Integrase-Inhibitoren",
                  substances: [
                    "Elvitegravir",
                    "Raltegravir",
                    "Dolutegravir",
                    "Bictegravir",
                    "Cabotegravir",
                  ],
                  mechanism: [
                    fact(
                      "Integrationshemmung der HIV-DNA",
                      "in die genomische DNA der Wirtszelle"
                    ),
                  ],
                  notes: [fact("Enden meist auf -gravir")],
                },
              ],
            },
          ],
        },
        {
          id: "hepatitis-b-und-c",
          kind: "antiviral",
          theme: themes.amber,
          title: "Antivirale Pharmaka gegen Hepatitis B und C",
          kicker: "Hepatitisviren",
          preferTitleInNav: true,
          description:
            "Wichtige Wirkstoffgruppen gegen Hepatitis B und C.",
          sections: [
            {
              id: "hepatitis-b",
              type: "entries",
              title: "Hepatitis B",
              description: "",
              entries: [
                {
                  name: "Nukleotidanaloga",
                  substances: ["Tenofovir", "Adefovir"],
                  mechanism: [fact("Nukleotidanaloga")],
                  effectiveAgainst: [fact("Hepatitis B")],
                  notes: [fact("Auch relevant in Kombinationstherapien bei Hepatitis B und HIV")],
                },
                {
                  name: "Nukleosidanaloga",
                  substances: ["Entecavir", "Lamivudin", "Telbivudin"],
                  mechanism: [fact("Hemmung der reversen Transkriptase")],
                  effectiveAgainst: [fact("Hepatitis B")],
                  notes: [fact("Auch relevant in Kombinationstherapien bei Hepatitis B und HIV")],
                },
              ],
            },
            {
              id: "interferon-alpha",
              type: "entries",
              title: "(PEG-)Interferon-α",
              description: "",
              entries: [
                {
                  name: "(PEG-)Interferon-α",
                  mechanism: [
                    fact(
                      "Antiviral und immunmodulatorisch",
                      "über inter- und intrazelluläre Mechanismen"
                    ),
                  ],
                  effectiveAgainst: [
                    fact("Akute Hepatitis C"),
                    fact("Chronische Hepatitis B"),
                  ],
                  notes: [fact("Heute nur noch selten oder bei speziellen Indikationen")],
                },
              ],
            },
            {
              id: "hepatitis-c",
              type: "entries",
              title: "Hepatitis C",
              description: "",
              entries: [
                {
                  name: "NS3-Protease-Inhibitoren",
                  substances: [
                    "Glecaprevir",
                    "Grazoprevir",
                    "Voxilaprevir",
                    "Paritaprevir",
                  ],
                  effectiveAgainst: [fact("Hepatitis C", "Kombinationstherapie")],
                  notes: [fact("Wichtige direkt antiviral wirkende Substanzen")],
                },
                {
                  name: "NS5A-Inhibitoren",
                  substances: [
                    "Ledipasvir",
                    "Elbasvir",
                    "Velpatasvir",
                    "Pibrentasvir",
                  ],
                  effectiveAgainst: [fact("Hepatitis C", "Kombinationstherapie")],
                },
                {
                  name: "NS5B-Inhibitoren",
                  substances: ["Sofosbuvir"],
                  effectiveAgainst: [fact("Hepatitis C", "Kombinationstherapie")],
                  notes: [fact("Sofosbuvir ist pangenotypisch einsetzbar")],
                },
                {
                  name: "Ribavirin",
                  mechanism: [fact("Nukleosidanalogon", "RNA-Polymerase-Inhibitor")],
                  effectiveAgainst: [fact("Hepatitis C", "nur in Kombination mit DAA")],
                  notes: [fact("Ribavirin-freie Regime werden bevorzugt")],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  window.medicationLibraryCollection = {
    defaultLibraryId: "antibiotika",
    renderer: renderer,
    libraries: libraries,
  };
  window.antibioticLibrary = Object.assign({}, libraries[0], {
    renderer: renderer,
  });
})();

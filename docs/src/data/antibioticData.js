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

  window.antibioticLibrary = {
    page: {
      title: "Antibiotika Atlas",
      subtitle: "",
      intro: "",
    },
    overgroups: [
      {
        id: "lernuebersichten",
        kind: "learning",
        title: "Lernübersichten",
        kicker: "Schneller Zugriff",
        description: "",
        sections: [
          {
            id: "quick-reference",
            type: "quickReference",
            title: "Schnellübersicht",
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
            title: "Merksätze",
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
        title: "Folsäuremetabolismus",
        kicker: "Stoffwechselblockade",
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
  };
})();

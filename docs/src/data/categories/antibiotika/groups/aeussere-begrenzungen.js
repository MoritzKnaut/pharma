(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antibiotika");

  parts.overgroups.aeussereBegrenzungen = {
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
                "Bindung an Penicillin-bindende Proteine mit gestörter Peptidoglykan-Quervernetzung"
              ),
              fact(
                "β-Lactamase-Inhibitoren hemmen zusätzlich β-Lactamasen",
                "nur in Kombination mit β-Lactam-Antibiotika wirksam"
              ),
            ],
            variants: [
              {
                name: "Klassische Penicilline",
                substances: ["Penicillin G", "Penicillin V"],
                effectiveAgainst: [
                  fact("Vor allem grampositive Bakterien", "insb. Streptokokken"),
                  fact("Einzelne gramnegative Bakterien", "insb. Meningokokken"),
                ],
              },
              {
                name: "Isoxazolylpenicilline / Staphylokokkenpenicilline",
                substances: ["Flucloxacillin", "Oxacillin"],
                effectiveAgainst: [
                  fact("Vor allem grampositive Bakterien", "insb. Staphylokokken"),
                ],
              },
              {
                name: "Aminopenicilline",
                substances: ["Ampicillin", "Amoxicillin"],
                effectiveAgainst: [
                  "Grampositive Bakterien",
                  fact("Gute Wirkung gegen Listerien und Enterococcus faecalis"),
                  fact(
                    "Einige gramnegative Bakterien",
                    "v.a. Proteus mirabilis, Neisseria meningitidis, Haemophilus influenzae; besonders Amoxicillin"
                  ),
                ],
              },
              {
                name: "Aminopenicilline + β-Lactamase-Inhibitor",
                substances: ["Ampicillin/Sulbactam", "Amoxicillin/Clavulansäure"],
                effectiveAgainst: [
                  "Grampositive Bakterien",
                  "Zahlreiche gramnegative Bakterien",
                  fact("Anaerobier", "z.B. Bacteroides"),
                ],
              },
              {
                name: "Amidinopenicilline",
                substances: ["Mecillinam", "Pivmecillinam"],
                effectiveAgainst: ["Vor allem urogenitale gramnegative Erreger"],
              },
              {
                name: "Acylaminopenicilline",
                substances: ["Piperacillin"],
                effectiveAgainst: [
                  fact("Grampositive Bakterien", "insb. Streptokokken, Enterokokken"),
                  fact(
                    "Zahlreiche gramnegative Bakterien",
                    "inkl. Pseudomonas aeruginosa; insb. Enterobacterales"
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
                    "inkl. Pseudomonas aeruginosa"
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
                "Bindung an Penicillin-bindende Proteine mit gestörter Zellwand-Quervernetzung"
              ),
              fact("Teilweise unempfindlich gegen einige β-Lactamasen"),
              fact("Kombinationen mit β-Lactamase-Inhibitoren erweitern das Spektrum"),
              fact(
                "Cefiderocol mit Siderophor-Funktion",
                "besonders stabil und erleichterte Aufnahme in gramnegative Bakterien"
              ),
            ],
            cautions: [
              fact("Cephalosporine der 1.-4. Generation wirken nicht gegen Enterokokken"),
            ],
            variants: [
              {
                name: "1. Generation",
                substances: ["Cefazolin", "Cephalexin"],
                effectiveAgainst: [
                  fact(
                    "Vor allem grampositive Bakterien",
                    "insb. Staphylococcus aureus und Streptokokken"
                  ),
                ],
                cautions: ["Nur schwache Wirkung gegen gramnegative Bakterien"],
              },
              {
                name: "2. Generation",
                substances: ["Cefuroxim", "Cefoxitin"],
                effectiveAgainst: [
                  "Gute Wirkung gegen grampositive Bakterien",
                  fact(
                    "Gute Wirkung gegen einige gramnegative Bakterien",
                    "insb. Enterobacterales"
                  ),
                ],
              },
              {
                name: "3. Generation",
                substances: ["Ceftriaxon", "Cefotaxim", "Ceftazidim"],
                effectiveAgainst: [
                  fact(
                    "Gute Wirkung gegen grampositive Bakterien",
                    "inkl. Staphylokokken"
                  ),
                  fact(
                    "Sehr gute Wirkung gegen gramnegative Bakterien",
                    "z.B. Enterobacterales wie Proteus spp."
                  ),
                ],
                notes: [
                  fact("3a-Gruppe mit breiter gramnegativer Wirkung"),
                  fact(
                    "3b-Gruppe ist gegen Pseudomonas aeruginosa aktiv",
                    "Ceftazidim; schwächer gegen grampositive Bakterien"
                  ),
                ],
              },
              {
                name: "4. Generation",
                substances: ["Cefepim"],
                effectiveAgainst: [
                  fact(
                    "Gute Wirkung gegen grampositive Bakterien",
                    "gute Streptokokken- und Staphylokokkenwirksamkeit"
                  ),
                  fact(
                    "Zahlreiche gramnegative Bakterien",
                    "inkl. Pseudomonas aeruginosa"
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
                cautions: [fact("Nicht ausreichend wirksam gegen Pseudomonas aeruginosa")],
              },
              {
                name: "Cephalosporine + β-Lactamase-Inhibitor",
                substances: ["Ceftazidim/Avibactam", "Ceftolozan/Tazobactam"],
                effectiveAgainst: [
                  fact("Ceftazidim/Avibactam gegen einige gramnegative MRE"),
                  fact(
                    "Ceftolozan/Tazobactam gegen einige gramnegative Bakterien",
                    "inkl. Pseudomonas aeruginosa und Enterobacterales"
                  ),
                ],
              },
              {
                name: "Cefiderocol",
                substances: ["Cefiderocol"],
                effectiveAgainst: [
                  fact("Gute Wirkung gegen aerobe gramnegative Bakterien", "inkl. MRGN"),
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
                "Bindung an Penicillin-bindende Proteine mit gestörter Peptidoglykan-Synthese"
              ),
              fact("β-Lactamase-fest"),
            ],
            effectiveAgainst: [
              fact(
                "Wirksam gegen grampositive Bakterien",
                "z.B. Streptokokken, Staphylococcus aureus"
              ),
              fact(
                "Wirksam gegen zahlreiche gramnegative Bakterien",
                "teils auch ESBL-Bildner und 3-MRGN"
              ),
              "Wirksam gegen Pseudomonas aeruginosa",
              "Wirksam gegen Nonfermenter",
              "Wirksam gegen Anaerobier",
            ],
            otherInfo: [fact("Meropenem wirkt etwas schwächer gegen grampositive Bakterien")],
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
            name: "Glykopeptide",
            substances: ["Vancomycin", "Teicoplanin"],
            mechanism: [
              fact(
                "Hemmung der Zellwandsynthese",
                "Bindung an Zellwandbausteine grampositiver Bakterien und Blockade der Peptidoglykan-Synthese"
              ),
            ],
            effectiveAgainst: [
              fact(
                "Ausschließlich grampositive Erreger",
                "inkl. koagulasenegative Staphylokokken, MRSA, Enterococcus faecium"
              ),
              fact("Orales Vancomycin gegen Clostridioides difficile"),
            ],
          },
          {
            name: "Lipopeptide",
            substances: ["Daptomycin"],
            mechanism: [
              fact(
                "Irreversible Bindung an die bakterielle Zellmembran",
                "Einbau von Ionenkanälen mit Depolarisation der Zelle"
              ),
            ],
            effectiveAgainst: [
              fact(
                "Ausschließlich grampositive Erreger",
                "inkl. koagulasenegative Staphylokokken, MRSA, VRE"
              ),
            ],
          },
          {
            name: "Epoxide",
            substances: ["Fosfomycin"],
            mechanism: [
              fact(
                "Hemmung der Zellwandsynthese",
                "Blockade eines frühen Syntheseschritts der bakteriellen Zellwand"
              ),
            ],
            effectiveAgainst: [
              fact(
                "Einige grampositive Erreger",
                "z.B. Staphylokokken inkl. MRSA, Enterokokken inkl. VRE"
              ),
              fact(
                "Einige gramnegative Erreger",
                "z.B. E. coli, Enterobacter spp., Klebsiella spp., Pseudomonas aeruginosa"
              ),
            ],
          },
        ],
      },
    ],
  };
})();

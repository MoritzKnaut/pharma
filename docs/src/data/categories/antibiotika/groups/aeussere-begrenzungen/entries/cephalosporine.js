(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.cephalosporine = entry("Cephalosporine", {
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
  });
})();

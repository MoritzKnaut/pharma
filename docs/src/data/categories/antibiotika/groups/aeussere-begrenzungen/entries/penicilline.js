(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.penicilline = entry("Penicilline", {
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
  });
})();

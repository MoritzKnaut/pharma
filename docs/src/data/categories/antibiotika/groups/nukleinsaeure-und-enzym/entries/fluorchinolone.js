(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.fluorchinolone = entry("Fluorchinolone", {
    layout: "wide",
    overview: "",
    mechanism: [
      fact(
        "Hemmung bakterieller Topoisomerasen",
        "v.a. DNA-Gyrase (Topoisomerase II), teils auch Topoisomerase IV"
      ),
    ],
    variants: [
      {
        name: "Gruppe I",
        substances: ["Norfloxacin"],
        effectiveAgainst: [
          fact("Vor allem gramnegative Stäbchen", "inkl. Pseudomonas aeruginosa"),
        ],
      },
      {
        name: "Gruppe II",
        substances: ["Ciprofloxacin", "Ofloxacin"],
        effectiveAgainst: [
          fact(
            "Gut wirksam gegen gramnegative Bakterien",
            "inkl. Enterobacterales und Pseudomonas aeruginosa"
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
            "Chlamydien, Mykoplasmen, Legionellen"
          ),
        ],
        cautions: [fact("Nur mäßig wirksam gegen Pseudomonas aeruginosa")],
      },
      {
        name: "Gruppe IV",
        substances: ["Moxifloxacin"],
        effectiveAgainst: [
          "Noch bessere Wirkung gegen grampositive Kokken",
          fact(
            "Gute Wirkung gegen atypische Pneumonie-Erreger",
            "Chlamydien, Mykoplasmen, Legionellen"
          ),
          "Gute Wirkung gegen Anaerobier",
        ],
        cautions: [fact("Keine Wirkung gegen Pseudomonas aeruginosa")],
      },
    ],
  });
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.calcineurinInhibitoren = entry("Calcineurin-Inhibitoren", {
    layout: "wide",
    variantsKind: "substances",
    variants: [
      {
        name: "Ciclosporin A",
        mechanism: [
          fact("Bindung an Cyclophilin"),
          fact("Calcineurin-Hemmung", "IL2-Produktion und T-Zell-Aktivierung sinken")
        ],
        indications: [
          fact("Prophylaxe einer Transplantatabstoßung"),
          fact("Colitis ulcerosa"),
          fact("Schwere Psoriasis")
        ],
        sideEffects: [
          fact("Nephrotoxizität"),
          fact("Hypertonie"),
          fact("Neurotoxizität"),
          fact("Fibröse Gingivahyperplasie"),
          fact("Hirsutismus oder Hypertrichose"),
          fact("Hyperurikämie und Hyperlipidämie"),
          fact("Mehr Malignome und Infektionen")
        ]
      },
      {
        name: "Tacrolimus",
        mechanism: [
          fact("Bindung an FKBP-12"),
          fact("Calcineurin-Hemmung", "IL2-Produktion und T-Zell-Aktivierung sinken")
        ],
        indications: [
          fact("Prophylaxe einer Transplantatabstoßung"),
          fact("Atopische Dermatitis"),
          fact("Schwere refraktäre Uveitis")
        ],
        sideEffects: [
          fact("Ähnliche Nebenwirkungen wie Ciclosporin A"),
          fact("Haarausfall")
        ],
        remember: [
          fact("Nicht mit Ciclosporin kombinieren"),
          fact("CYP450-abhängiger Abbau", "Geringe therapeutische Breite")
        ]
      }
    ]
  });
})();

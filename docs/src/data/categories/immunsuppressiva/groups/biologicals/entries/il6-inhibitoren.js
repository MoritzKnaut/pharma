(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.il6Inhibitoren = entry("IL6-Inhibitoren", {
    layout: "wide",
    variantsKind: "substances",
    mechanism: [
      fact("Bindung an IL6-Rezeptoren auf T- und B-Lymphozyten"),
      fact("Reduzierte Signaltransduktion"),
      fact("Hemmung der T-Zell-Aktivierung und Immunglobulinsekretion"),
      fact("Reduzierte Synthese hepatischer Akute-Phase-Proteine")
    ],
    indications: [
      fact("Mittelschwere bis schwere rheumatoide Arthritis")
    ],
    cautions: [
      fact("Aktive Infektion", "absolute Kontraindikation")
    ],
    variants: [
      {
        name: "Tocilizumab",
        indications: [
          fact("Riesenzellarteriitis", "bei refraktärem oder rezidivierendem Verlauf")
        ]
      },
      {
        name: "Sarilumab",
        indications: [
          fact("Polymyalgia rheumatica")
        ]
      }
    ]
  });
})();

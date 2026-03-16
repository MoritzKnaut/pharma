(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.aminoSalicylate = entry("Aminosalicylate", {
    layout: "wide",
    variantsKind: "substances",
    mechanism: [
      fact("Verminderte Leukotrien- und Prostaglandin-Synthese"),
      fact("Verminderter Arachidonsäurestoffwechsel"),
      fact("Reduzierte Lipoxygenierung", "nur Sulfasalazin")
    ],
    indications: [
      fact("Chronisch-entzündliche Darmerkrankungen")
    ],
    variants: [
      {
        name: "Mesalazin",
        mechanism: [fact("5-Aminosalicylsäure"), fact("Wirkung auf den Darm beschränkt")],
        sideEffects: [
          fact("Gastrointestinale Beschwerden"),
          fact("Erhöhte UV-Empfindlichkeit")
        ]
      },
      {
        name: "Sulfasalazin",
        mechanism: [
          fact("Prodrug", "Metabolisierung zu Sulfapyridin und 5-ASA"),
          fact("Wirkung überwiegend auf den Dickdarm beschränkt")
        ],
        indications: [
          fact("Rheumatoide Arthritis")
        ],
        sideEffects: [
          fact("Gastrointestinale Beschwerden"),
          fact("Kopfschmerzen"),
          fact("Müdigkeit")
        ]
      }
    ]
  });
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;
  var variant = shared.variant;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  var mesalazin = variant("Mesalazin (5-ASA)", {
    mechanism: [
      fact("5-Aminosalicylsäure (aktive Form)"),
      fact("Wirkung primär auf den Darm beschränkt")
    ],
    indications: [
      fact("Colitis ulcerosa"),
      fact("Morbus Crohn", "leichte bis mittelschwere Verläufe")
    ],
    sideEffects: [
      fact("Gastrointestinale Beschwerden"),
      fact("Erhöhte UV-Empfindlichkeit")
    ]
  });

  var sulfasalazin = variant("Sulfasalazin", {
    mechanism: [
      fact("Prodrug", "Metabolisierung zu Sulfapyridin + 5-ASA durch Darmflora"),
      fact("Wirkung überwiegend auf den Dickdarm beschränkt")
    ],
    indications: [
      fact("Colitis ulcerosa"),
      fact("Morbus Crohn"),
      fact("Rheumatoide Arthritis")
    ],
    sideEffects: [
      fact("Gastrointestinale Beschwerden"),
      fact("Kopfschmerzen"),
      fact("Müdigkeit"),
      fact("Sulfapyridin-bedingte NW", "Allergie, Agranulozytose")
    ]
  });

  var aminosalicylate = variant("Aminosalicylate", {
    mechanism: [
      fact("Verminderter Arachidonsäurestoffwechsel"),
      fact("Antiinflammatorische Wirkung im Gastrointestinaltrakt")
    ],
    indications: [
      fact("Chronisch-entzündliche Darmerkrankungen")
    ],
    variantsKind: "substances",
    variants: [
      mesalazin,
      sulfasalazin
    ]
  });

  parts.entries.leukotrienUndProstaglandinHemmer = entry("Leukotrien- und Prostaglandin-Synthese-Hemmer", {
    layout: "wide",
    mechanism: [
      fact("Hemmung der Leukotrien- und Prostaglandin-Synthese")
    ],
    variantsKind: "subgroups",
    variants: [
      aminosalicylate
    ]
  });
})();

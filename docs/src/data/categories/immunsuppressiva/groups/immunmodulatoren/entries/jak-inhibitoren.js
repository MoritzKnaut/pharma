(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.jakInhibitoren = entry("Januskinase-Inhibitoren", {
    layout: "wide",
    variantsKind: "substances",
    mechanism: [
      fact("Hemmung der JAK-Kinasen"),
      fact("Reduzierte Bindungsstellen für STAT-Proteine"),
      fact("Reduzierte Wirkung als Transkriptionsfaktor", "für JAK-STAT-regulierte Gene des adaptiven Immunsystems")
    ],
    indications: [
      fact("Mittelschwere bis schwere rheumatoide Arthritis"),
      fact("Psoriasis-Arthritis"),
      fact("Colitis ulcerosa"),
      fact("Atopische Dermatitis")
    ],
    sideEffects: [
      fact("Myelosuppression"),
      fact("Infektionen"),
      fact("Hypercholesterinämie"),
      fact("Rote-Hand-Brief", "Erhöhtes Risiko für schwerwiegende Nebenwirkungen bei bestimmten Patientengruppen, Empfehlungen zur Risikominimierung beachten")
    ],
    variants: [
      {
        name: "Tofacitinib"
      },
      {
        name: "Baricitinib"
      }
    ]
  });
})();

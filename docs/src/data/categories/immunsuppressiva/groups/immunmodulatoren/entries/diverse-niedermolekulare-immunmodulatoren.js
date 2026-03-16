(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;
  var variant = shared.variant;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  var fumarate = variant("Fumarate", {
    substances: ["Dimethylfumarat"],
    mechanism: [
      fact("Wirkmechanismus nicht vollständig geklärt"),
      fact("Blockiert über HCA2-Rezeptor auf neutrophilen Granulozyten deren Einwanderung ins ZNS")
    ],
    indications: [
      fact("Multiple Sklerose"),
      fact("Psoriasis vulgaris")
    ],
    sideEffects: [
      fact("Flush"),
      fact("Gastrointestinale Beschwerden")
    ]
  });

  var chinoline = variant("Chinoline", {
    substances: ["Hydroxychloroquin"],
    mechanism: [
      fact("Wirkmechanismus nicht vollständig geklärt"),
      fact("Vermutlich Inhibition von Toll-like-Rezeptoren", "auf dendritischen Zellen unter Entzündung"),
      fact("Verminderte Produktion von Interferon"),
      fact("Verminderte Reifung dendritischer Zellen")
    ],
    indications: [
      fact("Malaria"),
      fact("Systemischer Lupus erythematodes"),
      fact("Diskoider Lupus erythematodes"),
      fact("Rheumatoide Arthritis")
    ],
    sideEffects: [
      fact("Gastrointestinale Beschwerden"),
      fact("Hornhauttrübung, Gesichtsfeldeinschränkung", "insb. nach langjähriger Nutzung"),
      fact("Regelmäßige ophthalmologische Kontrollen notwendig")
    ]
  });

  var glatirameracetat = variant("Glatirameracetat", {
    substances: ["Glatirameracetat"],
    mechanism: [
      fact("Modulation der T-Zell-Aktivierung"),
      fact("Shift von pro-inflammatorischen zu anti-inflammatorischen T-Zellen")
    ],
    indications: [
      fact("Multiple Sklerose", "grundimmunmodulatorisch")
    ],
    sideEffects: [
      fact("Injektionsreaktionen"),
      fact("Flush, Brustschmerz")
    ],
    remember: [
      fact("Kein Lebermonitoring notwendig", "im Gegensatz zu Interferon und Fingolimod")
    ]
  });

  parts.entries.diverseNiedermolekulareImmunmodulatoren = entry("Diverse niedermolekulare Immunmodulatoren", {
    layout: "wide",
    mechanism: [
      fact("Verschiedene nicht-klassifizierbare Wirkmechanismen")
    ],
    variantsKind: "subgroups",
    variants: [
      fumarate,
      chinoline,
      glatirameracetat
    ]
  });
})();

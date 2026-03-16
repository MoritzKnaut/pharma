(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.weitereIlInhibitoren = entry("Weitere IL-Inhibitoren", {
    layout: "wide",
    variantsKind: "substances",
    variants: [
      {
        name: "Mepolizumab",
        mechanism: [
          fact("IL5-Inhibitor"),
          fact("Hemmung der Bindung von IL5 an IL5-Rezeptor auf Eosinophilen"),
          fact("Reduzierte Eosinophilenzahl in Blut, Gewebe und Sputum")
        ],
        indications: [
          fact("Schweres eosinophiles Asthma"),
          fact("Eosinophile Granulomatose mit Polyangiitis"),
          fact("Hypereosinophiles Syndrom"),
          fact("Chronische Rhinosinusitis mit Nasenpolypen")
        ]
      },
      {
        name: "Ustekinumab",
        mechanism: [
          fact("Anti-IL12/23-Antikörper"),
          fact("Hemmung des IL12- und IL23-Signalwegs"),
          fact("Verhindert T-Zell-Differenzierung und Zytokinausschüttung")
        ],
        indications: [
          fact("Therapierefraktäre Plaque-Psoriasis und Psoriasisarthritis"),
          fact("Morbus Crohn"),
          fact("Colitis ulcerosa")
        ]
      }
    ]
  });
})();

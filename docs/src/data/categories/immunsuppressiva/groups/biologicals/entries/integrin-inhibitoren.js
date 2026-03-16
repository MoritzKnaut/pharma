(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.integrinInhibitoren = entry("Integrin-Inhibitoren", {
    layout: "wide",
    variantsKind: "substances",
    variants: [
      {
        name: "Natalizumab",
        mechanism: [
          fact("Anti-Integrin-α4-Antikörper"),
          fact("Inhibition der α4-Integrin-vermittelten Leukozytenmigration ins ZNS")
        ],
        indications: [
          fact("Multiple Sklerose", "Eskalationstherapie")
        ]
      }
    ]
  });
})();

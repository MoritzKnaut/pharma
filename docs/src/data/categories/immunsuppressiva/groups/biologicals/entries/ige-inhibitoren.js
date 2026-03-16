(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.igeInhibitoren = entry("IgE-Inhibitoren", {
    layout: "wide",
    variantsKind: "substances",
    variants: [
      {
        name: "Omalizumab",
        mechanism: [
          fact("IgE-Inhibitor"),
          fact("Bindung an freies IgE"),
          fact("Reduktion freies IgE")
        ],
        indications: [
          fact("Schweres Asthma bronchiale"),
          fact("Chronische spontane Urtikaria")
        ]
      }
    ]
  });
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.zytostatischeAlkylanzien = entry("Alkylanzien", {
    layout: "wide",
    variantsKind: "substances",
    variants: [
      {
        name: "Cyclophosphamid",
        mechanism: [
          fact("Alkylierung von DNA und RNA"),
          fact("Vernetzung mit Strangbrüchen", "Transkription und Zellproliferation werden gestört")
        ],
        indications: [
          fact("Schwere Verläufe von SLE"),
          fact("Sklerodermie"),
          fact("Granulomatose mit Polyangiitis"),
          fact("Multiple Sklerose"),
          fact("Graft-versus-Host-Reaktion", "nach Stammzelltransplantation"),
          fact("Onkologische Erkrankungen")
        ],
        sideEffects: [
          fact("Hämorrhagische Zystitis"),
          fact("Myelosuppression")
        ]
      }
    ]
  });
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.pyrimidinsynthesehemmung = entry("Pyrimidinsynthesehemmung (Antimetabolite)", {
    layout: "wide",
    variantsKind: "substances",
    variants: [
      {
        name: "Leflunomid",
        mechanism: [
          fact("Aktiver Metabolit hemmt die Dihydroorotatdehydrogenase"),
          fact("De-novo-Pyrimidinsynthese sinkt", "Aktivierte Lymphozyten proliferieren schlechter"),
          fact("Zusätzlich reduzierte Entzündungsreaktion", "über Hemmung zellulärer Tyrosinkinasen und NFκB")
        ],
        indications: [
          fact("Rheumatoide Arthritis"),
          fact("Psoriasis-Arthritis")
        ],
        sideEffects: [
          fact("Diarrhö"),
          fact("Übelkeit und Erbrechen"),
          fact("Leichter Blutdruckanstieg"),
          fact("Allergische Hautreaktionen"),
          fact("Transaminasenanstieg"),
          fact("Leukopenie")
        ]
      }
    ]
  });
})();

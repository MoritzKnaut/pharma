(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("antimykotika");
  parts.entries = parts.entries || {};
  parts.entries.triazole = entry("Triazole", {
    variantsKind: "substances",
    mechanism: [fact("Azole: Hemmung der Ergosterol-Synthese")],
    remember: [fact("Systemisch nutzbare Azole")],
    variants: [
      {
        name: "Fluconazol",
        effectiveAgainst: [
          fact("Hefen", "Candidose"),
          "Kryptokokkose",
          "Dermatophytosen",
        ],
        remember: [fact("Per os oder intravenös")],
        additional: [fact("Nicht wirksam gegen Aspergillose")],
      },
      {
        name: "Voriconazol",
        effectiveAgainst: [
          fact("Hefen", "Candidose"),
          "Kryptokokkose",
          fact("Aspergillose", "Standardtherapie"),
        ],
        remember: [fact("Systemische Anwendung")],
      },
      {
        name: "Itraconazol",
        effectiveAgainst: [
          fact("Besonders gut wirksam bei Dermatophytosen"),
          "Candida-Onychomykose",
          "Pityriasis versicolor",
        ],
        remember: [fact("Per os")],
      },
      {
        name: "Posaconazol",
        effectiveAgainst: [
          fact("Nahezu alle Pilze", "inkl. Candida und Aspergillus"),
          "Prophylaxe invasiver Mykosen bei schwerer Immunsuppression",
          "Therapierefraktäre Mykosen",
        ],
        remember: [fact("Per os")],
      },
    ],
  });
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antimykotika");

  parts.overgroups.azolAntimykotika = {
    id: "azol-antimykotika",
    kind: "antifungal",
    theme: themes.amber,
    title: "Azol-Antimykotika",
    kicker: "Ergosterol-Synthese",
    sections: [
      {
        id: "azol-wirkstoffgruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          {
            name: "Imidazole",
            mechanism: [fact("Azole: Hemmung der Ergosterol-Synthese")],
            notes: [fact("Vor allem lokal angewendete Azole")],
            variants: [
              {
                name: "Clotrimazol",
                effectiveAgainst: [fact("Hefen", "v.a. Candidose")],
                notes: [fact("Lokale Anwendung")],
              },
              {
                name: "Ketoconazol",
                notes: [
                  fact("Vor allem lokal angewendet"),
                  fact("Orale Anwendung wird wegen der Nebenwirkungen heute kaum noch genutzt"),
                ],
              },
              {
                name: "Bifonazol",
                effectiveAgainst: [fact("Dermatophytosen")],
                notes: [fact("Lokale Anwendung")],
              },
            ],
          },
          {
            name: "Triazole",
            mechanism: [fact("Azole: Hemmung der Ergosterol-Synthese")],
            notes: [fact("Systemisch nutzbare Azole")],
            variants: [
              {
                name: "Fluconazol",
                effectiveAgainst: [
                  fact("Hefen", "Candidose"),
                  "Kryptokokkose",
                  "Dermatophytosen",
                ],
                notes: [fact("Per os oder intravenös")],
                otherInfo: [fact("Nicht wirksam gegen Aspergillose")],
              },
              {
                name: "Voriconazol",
                effectiveAgainst: [
                  fact("Hefen", "Candidose"),
                  "Kryptokokkose",
                  fact("Aspergillose", "Standardtherapie"),
                ],
                notes: [fact("Systemische Anwendung")],
              },
              {
                name: "Itraconazol",
                effectiveAgainst: [
                  fact("Besonders gut wirksam bei Dermatophytosen"),
                  "Candida-Onychomykose",
                  "Pityriasis versicolor",
                ],
                notes: [fact("Per os")],
              },
              {
                name: "Posaconazol",
                effectiveAgainst: [
                  fact("Nahezu alle Pilze", "inkl. Candida und Aspergillus"),
                  "Prophylaxe invasiver Mykosen bei schwerer Immunsuppression",
                  "Therapierefraktäre Mykosen",
                ],
                notes: [fact("Per os")],
              },
            ],
          },
        ],
      },
    ],
  };
})();

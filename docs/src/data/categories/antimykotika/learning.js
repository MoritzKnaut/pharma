(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antimykotika");

  parts.overgroups.learning = {
    id: "antimykotika-lernuebersichten",
    kind: "links",
    includeInLearningLookup: false,
    theme: themes.neutral,
    title: "Links",
    sections: [
      {
        id: "antimykotika-anhand-erreger",
        type: "quickReference",
        title: "Anhand Erregergruppen",
        layout: "wide",
        description: "",
        cards: [
          {
            title: "Hefen / Candida",
            items: [
              "Clotrimazol",
              "Fluconazol",
              "Voriconazol",
              "Amphotericin B",
              "Nystatin",
              "Caspofungin",
              "Anidulafungin",
              "Micafungin",
              "Ciclopirox",
            ],
          },
          {
            title: "Schimmelpilze / Aspergillus",
            items: [
              fact("Voriconazol", "Standardtherapie bei Aspergillose"),
              "Posaconazol",
              "Amphotericin B",
              "Caspofungin",
              "Anidulafungin",
              "Micafungin",
            ],
            warningLabel: "Nicht wirksam",
            warningItems: [fact("Fluconazol", "bei Aspergillose unwirksam")],
          },
          {
            title: "Kryptokokken",
            items: ["Fluconazol", "Voriconazol", "Amphotericin B"],
          },
          {
            title: "Dermatophyten",
            items: ["Bifonazol", "Itraconazol", "Ciclopirox", "Terbinafin"],
          },
          {
            title: "Onychomykosen",
            items: ["Itraconazol", "Ciclopirox", "Terbinafin"],
          },
        ],
      },
      {
        id: "antimykotika-anhang-erkrankung",
        type: "referenceIndex",
        source: "diseaseLinks",
        title: "Anhang Erkrankung",
        description: "",
        emptyState: "Noch keine Inhalte vorhanden.",
      },
    ],
  };
})();

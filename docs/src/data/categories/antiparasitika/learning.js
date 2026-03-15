(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antiparasitika");

  parts.overgroups.learning = {
    id: "antiparasitika-lernuebersichten",
    kind: "learning",
    includeInLearningLookup: false,
    theme: themes.neutral,
    title: "Lernübersichten",
    kicker: "Schneller Zugriff",
    description: "",
    sections: [
      {
        id: "antiparasitika-anhand-erreger",
        type: "quickReference",
        title: "Anhand Erreger",
        description: "",
        cards: [
          {
            title: "Protozoen / Einzeller",
            items: [
              "Atovaquon/Proguanil",
              "Artemeter/Lumefantrin",
              "Amphotericin B",
              "Ketoconazol",
              "Itraconazol",
              "Metronidazol",
            ],
          },
          {
            title: "Nematoden",
            items: ["Ivermectin", "Albendazol", "Mebendazol"],
          },
          {
            title: "Cestoden",
            items: ["Praziquantel", "Albendazol", "Mebendazol"],
          },
          {
            title: "Trematoden",
            items: ["Praziquantel"],
          },
          {
            title: "Skabies",
            items: ["Permethrin", "Ivermectin"],
          },
          {
            title: "Kopf- und Filzläuse",
            items: ["Dimeticon", "Ivermectin"],
            warningLabel: "Nicht mehr empfohlen",
            warningItems: ["Permethrin"],
          },
        ],
      },
    ],
  };
})();

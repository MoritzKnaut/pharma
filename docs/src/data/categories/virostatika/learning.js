(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("virostatika");

  parts.overgroups.learning = {
    id: "virostatika-lernuebersichten",
    kind: "learning",
    includeInLearningLookup: false,
    theme: themes.neutral,
    title: "Lernübersichten",
    kicker: "Schneller Zugriff",
    description: "",
    sections: [
      {
        id: "virostatika-anhand-erreger",
        type: "quickReference",
        title: "Anhand Erreger",
        description: "",
        cards: [
          {
            title: "Herpes simplex / Varizella-zoster",
            items: ["Aciclovir"],
          },
          {
            title: "CMV",
            items: ["Ganciclovir", "Foscarnet", "Fomivirsen"],
          },
          {
            title: "Influenza A",
            items: ["Oseltamivir", "Amantadin"],
          },
          {
            title: "Influenza B",
            items: ["Oseltamivir"],
          },
          {
            title: "HIV",
            items: ["NRTI", "NNRTI", "Protease-Inhibitoren", "Integrase-Inhibitoren"],
          },
          {
            title: "Hepatitis B",
            items: [
              "Tenofovir",
              "Adefovir",
              "Entecavir",
              "Lamivudin",
              "Telbivudin",
              "(PEG-)Interferon-α",
            ],
          },
          {
            title: "Hepatitis C",
            items: [
              "Glecaprevir",
              "Velpatasvir",
              "Sofosbuvir",
              "Ribavirin",
              "(PEG-)Interferon-α",
            ],
          },
        ],
      },
    ],
  };
})();

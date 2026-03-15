(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antimykotika");

  window.pharmaAtlasCategories = window.pharmaAtlasCategories || {};
  window.pharmaAtlasCategories.antimykotika = {
    id: "antimykotika",
    label: "Antimykotika",
    theme: themes.amber,
    page: {
      title: "Antimykotika",
      subtitle: "",
      intro: "",
      description:
        "Fokussierte Lernübersicht zu Antimykotika nach Gruppen, Wirkstoffen und Wirkorten.",
      navIntro: "Antimykotika nach Gruppen, Wirkstoffen und Wirkorten.",
    },
    renderer: {
      semanticTags: parts.semanticTags,
    },
    overgroups: [
      parts.overgroups.learning,
      parts.overgroups.azolAntimykotika,
      parts.overgroups.polyenAntimykotika,
      parts.overgroups.echinocandine,
      parts.overgroups.weitereAntimykotika,
    ],
  };
})();

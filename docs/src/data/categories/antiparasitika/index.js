(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antiparasitika");

  window.pharmaAtlasCategories = window.pharmaAtlasCategories || {};
  window.pharmaAtlasCategories.antiparasitika = {
    id: "antiparasitika",
    label: "Antiparasitika",
    theme: themes.navy,
    page: {
      title: "Antiparasitika",
      subtitle: "",
      intro: "",
      description:
        "Fokussierte Lernübersicht zu Antiparasitika nach Gruppen, Substanzen und wichtigsten Anwendungsgebieten.",
      navIntro: "Antiparasitika nach Gruppen, Substanzen und wichtigen Zielerregern.",
    },
    renderer: {
      semanticTags: parts.semanticTags,
    },
    overgroups: [
      parts.overgroups.learning,
      parts.overgroups.antiprotozoika,
      parts.overgroups.anthelminthika,
      parts.overgroups.ektoparasitizide,
    ],
  };
})();

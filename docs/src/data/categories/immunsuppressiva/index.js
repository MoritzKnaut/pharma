(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("immunsuppressiva");

  window.pharmaAtlasCategories = window.pharmaAtlasCategories || {};
  window.pharmaAtlasCategories.immunsuppressiva = {
    id: "immunsuppressiva",
    label: "Immunsuppressiva",
    theme: themes.clay,
    page: {
      title: "Immunsuppressiva",
      subtitle: "",
      intro: "",
      description:
        "Struktur für Immunsuppressiva im Pharma-Atlas. Inhalte folgen in den separaten Datenfeldern.",
      navIntro:
        "Immunsuppressiva werden künftig nach Indikationen und Wirkstoffgruppen gepflegt.",
    },
    renderer: {
      semanticTags: parts.semanticTags,
    },
    overgroups: [parts.overgroups.learning],
  };
})();

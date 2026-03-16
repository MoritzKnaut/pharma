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
      subtitle: "Biologicals, Immunmodulatoren und Zytokininhibitoren",
      intro: "",
      description:
        "Lernübersicht zu Immunsuppressiva: Von TNF-Inhibitoren über IL-gezielte Therapien bis zu klassischen Immunmodulatoren.",
      navIntro:
        "Biologicals, Immunmodulatoren und Zytokininhibitoren nach Wirkmechanismen und Indikationen.",
    },
    renderer: {
      semanticTags: parts.semanticTags,
    },
    overgroups: [
      parts.overgroups.learning,
      parts.overgroups.biologicals,
      parts.overgroups.immunmodulatoren,
    ],
  };
})();

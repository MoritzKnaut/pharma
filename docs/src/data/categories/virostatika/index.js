(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("virostatika");

  window.pharmaAtlasCategories = window.pharmaAtlasCategories || {};
  window.pharmaAtlasCategories.virostatika = {
    id: "virostatika",
    label: "Virostatika",
    theme: themes.rose,
    page: {
      title: "Virostatika",
      subtitle: "",
      intro: "",
      description:
        "Fokussierte Lernübersicht zu Virostatika nach Virusgruppen, Wirkstoffgruppen und wichtigsten Substanzen.",
      navIntro: "Virostatika nach Virusgruppen, Wirkstoffen und typischen Zielviren.",
    },
    renderer: {
      semanticTags: parts.semanticTags,
    },
    overgroups: [
      parts.overgroups.learning,
      parts.overgroups.herpesviridae,
      parts.overgroups.influenzaviren,
      parts.overgroups.hivTherapie,
      parts.overgroups.hepatitisBundC,
    ],
  };
})();

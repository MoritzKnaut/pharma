(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("zytostatika");

  window.pharmaAtlasCategories = window.pharmaAtlasCategories || {};
  window.pharmaAtlasCategories.zytostatika = {
    id: "zytostatika",
    label: "Zytostatika",
    theme: themes.magenta,
    page: {
      title: "Zytostatika",
      subtitle: "",
      intro: "",
      description:
        "Lernübersicht zu klassischen Zytostatika nach Wirkmechanismus und chemischer Struktur.",
      navIntro:
        "Klassische Zytostatika nach Wirkmechanismus und chemischer Struktur.",
    },
    renderer: {
      semanticTags: parts.semanticTags,
    },
    overgroups: [
      parts.overgroups.learning,
      parts.overgroups.dnaCrossLinking,
      parts.overgroups.topoisomeraseUndInterkalatoren,
      parts.overgroups.mitosehemmstoffe,
      parts.overgroups.antimetabolite,
      parts.overgroups.andereZytostatika,
    ],
  };
})();

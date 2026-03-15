(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antibiotika");

  window.pharmaAtlasCategories = window.pharmaAtlasCategories || {};
  window.pharmaAtlasCategories.antibiotika = {
    id: "antibiotika",
    label: "Antibiotika",
    theme: themes.teal,
    page: {
      title: "Antibiotika",
      subtitle: "",
      intro: "",
      description:
        "Lernübersicht zu Antibiotika nach Wirkorten, Erregerschwerpunkten und klinischen Merksätzen.",
      navIntro:
        "Antibiotika nach Wirkorten, Erregerschwerpunkten und kompakten Merksätzen.",
    },
    renderer: {
      semanticTags: parts.semanticTags,
    },
    overgroups: [
      parts.overgroups.learning,
      parts.overgroups.aeussereBegrenzungen,
      parts.overgroups.nukleinsaeureUndEnzym,
      parts.overgroups.bakterielleRibosomen,
      parts.overgroups.folsaeuremetabolismus,
    ],
  };
})();

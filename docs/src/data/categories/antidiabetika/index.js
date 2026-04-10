(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antidiabetika");

  window.pharmaAtlasCategories = window.pharmaAtlasCategories || {};
  window.pharmaAtlasCategories.antidiabetika = {
    id: "antidiabetika",
    label: "Antidiabetika",
    theme: themes.teal,
    page: {
      title: "Antidiabetika",
      subtitle: "Nicht-Insulin-Antidiabetika nach Wirkmechanismus",
      intro: "",
      description:
        "Lernübersicht zu Antidiabetika mit Fokus auf Insulinsensitivität, Insulinsekretion, Inkretinwirkung und Glukoseausscheidung.",
      navIntro:
        "Nicht-Insulin-Antidiabetika nach Wirkmechanismus, Leiteffekt und typischen Cave-Punkten.",
    },
    renderer: {
      semanticTags: parts.semanticTags,
    },
    overgroups: [
      parts.overgroups.learning,
      parts.overgroups.sensitivitaet,
      parts.overgroups.hypoglykaemie,
      parts.overgroups.abnehmen,
      parts.overgroups.darmUndUrin,
    ],
  };
})();

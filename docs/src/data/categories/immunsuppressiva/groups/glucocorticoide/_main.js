(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("immunsuppressiva");

  parts.overgroups.glucocorticoide = {
    id: "glucocorticoide",
    kind: "section",
    theme: themes.orange,
    title: "Glucocorticoide",
    kicker: "Rudimentäre Basisgruppe für breit eingesetzte Steroid-Immunsuppression",
    sections: [
      {
        id: "glucocorticoide-gruppe",
        type: "entries",
        hideTitle: true,
        entries: [
          parts.entries.glucocorticoide
        ].filter(Boolean)
      }
    ]
  };
})();

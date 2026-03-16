(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("zytostatika");

  parts.overgroups.mitosehemmstoffe = {
    id: "mitosehemmstoffe",
    kind: "section",
    theme: themes.teal,
    title: "Mitosehemmstoffe (Spindelgifte)",
    sections: [
      {
        id: "spindelgifte",
        type: "entries",
        hideTitle: true,
        title: "Mitosehemmstoffe",
        description: "Beeinträchtigung des Spindelapparats → Stillstand der Mitose",
        entries: [
          parts.entries.vincaAlkaloide,
          parts.entries.taxane,
        ],
      },
    ],
  };
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("zytostatika");

  parts.overgroups.andereZytostatika = {
    id: "andere-zytostatika",
    kind: "section",
    theme: themes.rose,
    title: "Andere Zytostatika",
    sections: [
      {
        id: "andere",
        type: "entries",
        hideTitle: true,
        title: "Andere Zytostatika",
        description: "Verschiedene Wirkmechanismen",
        entries: [
          parts.entries.zytostatischeAntibiotika,
          parts.entries.enzyme,
        ],
      },
    ],
  };
})();

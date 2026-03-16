(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("zytostatika");

  parts.overgroups.antimetabolite = {
    id: "antimetabolite",
    kind: "section",
    theme: themes.amber,
    title: "Antimetabolite",
    sections: [
      {
        id: "antimetabolite",
        type: "entries",
        hideTitle: true,
        title: "Antimetabolite",
        description: "Störung des Nukleotidstoffwechsels",
        entries: [
          parts.entries.folsaeureAntagonisten,
          parts.entries.pyrimidinAnaloga,
          parts.entries.purinAnaloga,
          parts.entries.ribonukleotidreduktaseHemmer,
        ],
      },
    ],
  };
})();

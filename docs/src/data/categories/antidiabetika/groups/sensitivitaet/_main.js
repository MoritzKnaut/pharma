(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antidiabetika");

  parts.overgroups.sensitivitaet = {
    id: "sensitivitaet",
    kind: "section",
    theme: themes.teal,
    title: "Sensitivität",
    kicker: "Biguanide und Glitazone",
    sections: [
      {
        id: "sensitivitaet-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [parts.entries.biguanide, parts.entries.glitazone].filter(Boolean),
      },
    ],
  };
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antiparasitika");

  parts.overgroups.antiprotozoika = {
    id: "antiprotozoika",
    kind: "antiparasitic",
    theme: themes.navy,
    title: "Antiprotozoika",
    kicker: "Einzeller",
    description: "",
    sections: [
      {
        id: "antiprotozoika-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          parts.entries.malariatherapeutika,
          parts.entries.antimykotikaBeiProtozoen,
          parts.entries.nitroimidazoleBeiProtozoen,
        ],
      },
    ],
  };
})();

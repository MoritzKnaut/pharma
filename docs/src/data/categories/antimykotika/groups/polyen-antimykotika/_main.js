(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antimykotika");
  var polyenAntimykotikaEntry = parts.entries.polyenAntimykotikaEntry;

  parts.overgroups.polyenAntimykotika = {
    id: "polyen-antimykotika",
    kind: "section",
    theme: themes.teal,
    title: "Polyen-Antimykotika",
    sections: [
      {
        id: "polyen-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [polyenAntimykotikaEntry],
      },
    ],
  };
})();

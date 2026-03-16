(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antimykotika");
  var polyenAntimykotikaEntry = parts.entries.polyenAntimykotikaEntry;

  parts.overgroups.polyenAntimykotika = {
    id: "polyen-antimykotika",
    kind: "antifungal",
    theme: themes.teal,
    title: "Polyen-Antimykotika",
    kicker: "Ergosterol-Bindung",
    description: "",
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

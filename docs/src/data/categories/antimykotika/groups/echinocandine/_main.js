(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antimykotika");
  var echinocandineEntry = parts.entries.echinocandineEntry;

  parts.overgroups.echinocandine = {
    id: "echinocandine",
    kind: "section",
    theme: themes.blue,
    title: "Echinocandine",
    sections: [
      {
        id: "echinocandine-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [echinocandineEntry],
      },
    ],
  };
})();

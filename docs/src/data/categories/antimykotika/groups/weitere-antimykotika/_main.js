(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antimykotika");
  var hydroxypyridonderivate = parts.entries.hydroxypyridonderivate;
  var allylamine = parts.entries.allylamine;

  parts.overgroups.weitereAntimykotika = {
    id: "weitere-antimykotika",
    kind: "section",
    theme: themes.magenta,
    title: "Weitere Antimykotika",
    sections: [
      {
        id: "weitere-antimykotika-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [hydroxypyridonderivate, allylamine],
      },
    ],
  };
})();

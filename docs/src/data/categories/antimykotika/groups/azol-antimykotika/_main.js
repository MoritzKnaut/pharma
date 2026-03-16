(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antimykotika");
  var imidazole = parts.entries.imidazole;
  var triazole = parts.entries.triazole;

  parts.overgroups.azolAntimykotika = {
    id: "azol-antimykotika",
    kind: "antifungal",
    theme: themes.amber,
    title: "Azol-Antimykotika",
    kicker: "Ergosterol-Synthese",
    sections: [
      {
        id: "azol-wirkstoffgruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [imidazole, triazole],
      },
    ],
  };
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antiparasitika");

  parts.overgroups.anthelminthika = {
    id: "anthelminthika",
    kind: "section",
    theme: themes.amber,
    title: "Anthelminthika",
    sections: [
      {
        id: "anthelminthika-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          parts.entries.calciumkanalModulatoren,
          parts.entries.gabaarAktivatoren,
          parts.entries.mikrotubuliInhibitoren,
        ],
      },
    ],
  };
})();

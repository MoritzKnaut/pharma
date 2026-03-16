(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antiparasitika");

  parts.overgroups.anthelminthika = {
    id: "anthelminthika",
    kind: "antiparasitic",
    theme: themes.amber,
    title: "Anthelminthika",
    kicker: "Wurmerkrankungen",
    description: "",
    sections: [
      {
        id: "anthelminthika-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          parts.entries.praziquantel,
          parts.entries.gabaarAktivatoren,
          parts.entries.mikrotubuliInhibitoren,
        ],
      },
    ],
  };
})();

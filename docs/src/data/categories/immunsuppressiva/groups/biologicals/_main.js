(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("immunsuppressiva");

  var tnfInhibitoren = parts.entries.tnfInhibitoren;
  var il1Inhibitoren = parts.entries.il1Inhibitoren;
  var il6Inhibitoren = parts.entries.il6Inhibitoren;
  var weitereIlInhibitoren = parts.entries.weitereIlInhibitoren;
  var cdGezielteAntikoerper = parts.entries.cdGezielteAntikoerper;
  var integrinInhibitoren = parts.entries.integrinInhibitoren;
  var igeInhibitoren = parts.entries.igeInhibitoren;

  parts.overgroups.biologicals = {
    id: "biologicals",
    kind: "section",
    theme: themes.clay,
    title: "Biologicals / Antikörper",
    kicker: "Monoklonale Antikörper und Fusionsproteine zur Immunmodulation",
    sections: [
      {
        id: "biologicals-zytokininhibitoren",
        type: "entries",
        title: "Zytokininhibitoren",
        hideTitle: false,
        description: "Biologicals mit Hemmung proinflammatorischer Zytokine",
        entries: [
          tnfInhibitoren,
          il1Inhibitoren,
          il6Inhibitoren,
          weitereIlInhibitoren
        ].filter(Boolean)
      },
      {
        id: "biologicals-zelloberflaechen",
        type: "entries",
        title: "Zelloberflächen-gezielte Antikörper",
        hideTitle: false,
        description: "Antikörper gegen Zelloberflächenmarker",
        entries: [
          cdGezielteAntikoerper
        ].filter(Boolean)
      },
      {
        id: "biologicals-sonstige",
        type: "entries",
        title: "Sonstige Biologicals",
        hideTitle: false,
        description: "Weitere monoklonale Antikörper und Fusionsproteine",
        entries: [
          integrinInhibitoren,
          igeInhibitoren
        ].filter(Boolean)
      }
    ]
  };
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antidiabetika");

  parts.overgroups.darmUndUrin = {
    id: "darm-und-urin",
    kind: "section",
    theme: themes.blue,
    title: "Darm und Urin",
    kicker: "SGLT2-Hemmer und α-Glukosidase-Hemmer",
    sections: [
      {
        id: "darm-und-urin-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [parts.entries.sglt2Hemmer, parts.entries.alphaGlukosidaseHemmer].filter(Boolean),
      },
    ],
  };
})();

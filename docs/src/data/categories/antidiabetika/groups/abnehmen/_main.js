(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antidiabetika");

  parts.overgroups.abnehmen = {
    id: "abnehmen",
    kind: "section",
    theme: themes.magenta,
    title: "Abnehmen",
    kicker: "DPP-4-Hemmer und GLP-1-Rezeptoragonisten",
    sections: [
      {
        id: "abnehmen-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [parts.entries.dpp4Hemmer, parts.entries.glp1Rezeptoragonisten].filter(Boolean),
      },
    ],
  };
})();

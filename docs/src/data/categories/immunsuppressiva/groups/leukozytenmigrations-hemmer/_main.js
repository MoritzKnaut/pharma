(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("immunsuppressiva");

  parts.overgroups.leukozytenmigrationsHemmer = {
    id: "leukozytenmigrations-hemmer",
    kind: "section",
    theme: themes.teal,
    title: "Leukozytenmigrations-Hemmer",
    kicker: "Reduzierte Einwanderung von Lymphozyten in Entzündungsgebiete",
    sections: [
      {
        id: "leukozytenmigrations-hemmer-gruppen",
        type: "entries",
        hideTitle: true,
        entries: [
          parts.entries.s1pRezeptorModulatoren
        ].filter(Boolean)
      }
    ]
  };
})();

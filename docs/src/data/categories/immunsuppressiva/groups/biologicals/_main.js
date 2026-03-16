(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("immunsuppressiva");

  var tnfInhibitoren = parts.entries.tnfInhibitoren;
  var il1Inhibitoren = parts.entries.il1Inhibitoren;
  var il6Inhibitoren = parts.entries.il6Inhibitoren;
  var weitereIlInhibitoren = parts.entries.weitereIlInhibitoren;
  var cdGezielteAntikoerper = parts.entries.cdGezielteAntikoerper;
  var integrinUndIgeInhibitoren = parts.entries.integrinUndIgeInhibitoren;

  parts.overgroups.biologicals = {
    id: "biologicals",
    kind: "section",
    theme: themes.clay,
    title: "Biologicals / Antikörper",
    kicker: "Monoklonale Antikörper und Fusionsproteine zur Immunmodulation",
    sections: [
      {
        id: "biologicals-wirkstoffgruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          tnfInhibitoren,
          il1Inhibitoren,
          il6Inhibitoren,
          weitereIlInhibitoren,
          cdGezielteAntikoerper,
          integrinUndIgeInhibitoren
        ].filter(Boolean)
      }
    ]
  };
})();

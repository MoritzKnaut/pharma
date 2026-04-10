(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("immunsuppressiva");

  var leukotrienUndProstaglandinHemmer = parts.entries.leukotrienUndProstaglandinHemmer;
  var diverseNiedermolekulareImmunmodulatoren = parts.entries.diverseNiedermolekulareImmunmodulatoren;
  var jakInhibitoren = parts.entries.jakInhibitoren;

  parts.overgroups.immunmodulatoren = {
    id: "immunmodulatoren",
    kind: "section",
    theme: themes.violet,
    title: "Pleiotrope Immunmodulatoren",
    kicker: "Breit wirkende niedermolekulare Immunmodulation außerhalb der klassischen Hauptgruppen",
    sections: [
      {
        id: "immunmodulatoren-kinase",
        type: "entries",
        title: "Kinase-Inhibitoren",
        hideTitle: false,
        description: "Hemmung intrazellulärer Signalkaskaden",
        entries: [
          jakInhibitoren
        ].filter(Boolean)
      },
      {
        id: "immunmodulatoren-niedermolekular",
        type: "entries",
        title: "Niedermolekulare Immunmodulatoren",
        hideTitle: false,
        description: "Diverse Wirkmechanismen der Immunmodulation",
        entries: [
          diverseNiedermolekulareImmunmodulatoren,
          leukotrienUndProstaglandinHemmer
        ].filter(Boolean)
      }
    ]
  };
})();

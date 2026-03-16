(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("immunsuppressiva");

  var aminoSalicylate = parts.entries.aminoSalicylate;
  var dimethylfumarat = parts.entries.dimethylfumarat;
  var glatirameracetat = parts.entries.glatirameracetat;
  var hydroxychloroquin = parts.entries.hydroxychloroquin;
  var jakInhibitoren = parts.entries.jakInhibitoren;

  parts.overgroups.immunmodulatoren = {
    id: "immunmodulatoren",
    kind: "section",
    theme: themes.clay,
    title: "Immunmodulatoren",
    kicker: "Niedermolekulare Wirkstoffe zur Immunmodulation",
    sections: [
      {
        id: "immunmodulatoren-wirkstoffgruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          aminoSalicylate,
          dimethylfumarat,
          glatirameracetat,
          hydroxychloroquin,
          jakInhibitoren
        ].filter(Boolean)
      }
    ]
  };
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antibiotika");

  parts.overgroups.aeussereBegrenzungen = {
    id: "aeussere-begrenzungen",
    kind: "antibiotic",
    theme: themes.teal,
    title: "Äußere Begrenzungen",
    kicker: "Zellwand und Membran",
    description: "",
    sections: [
      {
        id: "beta-lactam-antibiotika",
        type: "entries",
        layout: "wide",
        title: "β-Lactam-Antibiotika",
        description: "",
        entries: [
          parts.entries.penicilline,
          parts.entries.cephalosporine,
          parts.entries.carbapeneme,
        ],
      },
      {
        id: "zellwand-und-membranwirksame-antibiotika",
        type: "entries",
        layout: "wide",
        title: "Zellwand- und Membranwirksame Antibiotika",
        description: "",
        entries: [
          parts.entries.glykopeptide,
          parts.entries.lipopeptide,
          parts.entries.epoxide,
        ],
      },
    ],
  };
})();

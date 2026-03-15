(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antiparasitika");

  parts.overgroups.ektoparasitizide = {
    id: "ektoparasitizide",
    kind: "antiparasitic",
    theme: themes.clay,
    title: "Ektoparasitizide",
    kicker: "Milben und Läuse",
    description: "",
    sections: [
      {
        id: "ektoparasitizide-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          {
            name: "Natriumkanalaktivatoren",
            substances: ["Permethrin"],
            mechanism: [fact("Toxische Wirkung durch Anreicherung im Nervengewebe des Arthropoden")],
            effectiveAgainst: [fact("Skabies", "1. Wahl")],
            cautions: [fact("Pediculosis capitis", "nicht mehr empfohlen")],
            notes: [fact("Topische Anwendung")],
          },
          {
            name: "Reduktoren der Oberflächenspannung",
            substances: ["Dimeticon"],
            mechanism: [fact("Dringt in Atemöffnungen von Läusen ein", "blockiert die Atmung")],
            effectiveAgainst: [fact("Pediculosis capitis", "1. Wahl")],
            notes: [fact("Topische Anwendung bei Kopflausbefall")],
          },
        ],
      },
    ],
  };
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
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
          parts.entries.natriumkanalaktivatoren,
          parts.entries.reduktorenDerOberflaechenspannung,
        ],
      },
    ],
  };
})();

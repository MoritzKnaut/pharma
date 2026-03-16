(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antiparasitika");

  parts.entries = parts.entries || {};
  parts.entries.natriumkanalaktivatoren = entry("Natriumkanalaktivatoren", {
    substances: ["Permethrin"],
    mechanism: [fact("Toxische Wirkung durch Anreicherung im Nervengewebe des Arthropoden")],
    effectiveAgainst: [fact("Skabies", "1. Wahl")],
    cautions: [fact("Pediculosis capitis", "nicht mehr empfohlen")],
    remember: [fact("Topische Anwendung")],
  });
})();

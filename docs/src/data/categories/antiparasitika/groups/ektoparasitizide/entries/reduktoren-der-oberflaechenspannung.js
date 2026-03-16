(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antiparasitika");

  parts.entries = parts.entries || {};
  parts.entries.reduktorenDerOberflaechenspannung = entry("Reduktoren der Oberflächenspannung", {
    substances: ["Dimeticon"],
    mechanism: [fact("Dringt in Atemöffnungen von Läusen ein", "blockiert die Atmung")],
    effectiveAgainst: [fact("Pediculosis capitis", "1. Wahl")],
    notes: [fact("Topische Anwendung bei Kopflausbefall")],
  });
})();

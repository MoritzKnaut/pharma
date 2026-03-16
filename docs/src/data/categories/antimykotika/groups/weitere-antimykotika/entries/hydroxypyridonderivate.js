(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("antimykotika");
  parts.entries = parts.entries || {};
  parts.entries.hydroxypyridonderivate = entry("Hydroxypyridonderivate", {
    substances: ["Ciclopirox"],
    mechanism: [
      fact(
        "Störung zellulärer Enzyme",
        "durch Chelatbildung mit mehrwertigen Kationen"
      ),
    ],
    effectiveAgainst: [
      fact("Hefen", "Candidose"),
      "Dermatophytosen",
      fact("Besonders verbreitet bei Onychomykosen"),
    ],
    notes: [fact("Lokal")],
  });
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("virostatika");

  parts.entries = parts.entries || {};

  parts.entries.ionenkanalblocker = entry("Ionenkanalblocker", {
    substances: ["Amantadin"],
    mechanism: [fact("Blockade viraler Ionenkanäle")],
    effectiveAgainst: [fact("Influenza A")],
    remember: [fact("Zusätzliche Anwendung als Parkinson-Medikament")],
  });
})();

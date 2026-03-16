(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("virostatika");

  parts.entries = parts.entries || {};

  parts.entries.antisenseOligonukleotide = entry("Antisense-Oligonukleotide", {
    substances: ["Fomivirsen"],
    mechanism: [fact("Antisense-Medikament")],
    effectiveAgainst: [fact("CMV-Retinitis", "bei AIDS")],
    remember: [fact("Lokale Therapie am Auge")],
  });
})();

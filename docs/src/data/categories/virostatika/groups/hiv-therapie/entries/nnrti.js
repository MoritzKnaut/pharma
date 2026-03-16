(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("virostatika");

  parts.entries = parts.entries || {};

  parts.entries.nnrti = entry("NNRTI", {
    substances: ["Rilpivirin", "Efavirenz", "Nevirapin", "Etravirin", "Doravirin"],
    mechanism: [fact("Nicht-kompetitive Hemmung der viruseigenen reversen Transkriptase")],
    notes: [
      fact("Nicht-nukleosidische Reverse-Transkriptase-Inhibitoren"),
      fact("Tragen oft die Silbe -vir- in der Mitte"),
    ],
  });
})();

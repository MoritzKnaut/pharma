(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;
  var parts = shared.getCategoryParts("antidiabetika");

  parts.entries = parts.entries || {};
  parts.entries.alphaGlukosidaseHemmer = entry("α-Glukosidase-Hemmer", {
    substances: ["Acarbose"],
    mechanism: [
      fact("Hemmung der α-Glukosidase im Darm"),
      fact("↓ Kohlenhydratspaltung"),
      fact("↓ postprandiale Glukose"),
    ],
    sideEffects: [
      fact("Meteorismus / Flatulenz"),
      fact("Völlegefühl"),
    ],
    cave: [
      fact("Vorbestehende Verdauungsstörungen", "z.B. CED"),
      fact("Schwere Nierenfunktionsstörung"),
    ],
    remember: [fact("Acarbose wirkt im Darm")],
  });
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("virostatika");

  parts.entries = parts.entries || {};

  parts.entries.neuraminidaseHemmer = entry("Neuraminidase-Hemmer", {
    substances: ["Oseltamivir"],
    mechanism: [
      fact(
        "Hemmen die Ausknospung des Virus",
        "verhindern die Aussaat in die Blutbahn"
      ),
    ],
    effectiveAgainst: [fact("Influenza A und B")],
  });
})();

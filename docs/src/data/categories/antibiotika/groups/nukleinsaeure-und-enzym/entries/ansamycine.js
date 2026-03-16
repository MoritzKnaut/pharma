(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.ansamycine = entry("Ansamycine", {
    substances: ["Rifampicin", "Rifabutin"],
    mechanism: [
      fact("Hemmung der bakteriellen RNA-Polymerase", "Hemmung der Transkription"),
    ],
    effectiveAgainst: [
      "Grampositive Bakterien",
      "Wenige gramnegative Bakterien",
      "Mykobakterien",
    ],
    notes: [fact("Starker CYP-Induktor")],
  });
})();

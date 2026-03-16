(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.lincosamide = entry("Lincosamide", {
    substances: ["Clindamycin"],
    mechanism: [
      fact(
        "Hemmung der bakteriellen Proteinsynthese",
        "Bindung an die 50S-Untereinheit des Ribosoms"
      ),
    ],
    effectiveAgainst: ["Grampositive Bakterien", "Anaerobier"],
    cautions: [fact("Keine Wirkung gegen Enterokokken")],
  });
})();

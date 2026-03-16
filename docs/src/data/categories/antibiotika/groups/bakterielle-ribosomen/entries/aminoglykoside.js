(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.aminoglykoside = entry("Aminoglykoside", {
    substances: ["Gentamicin", "Tobramycin", "Amikacin"],
    mechanism: [
      fact(
        "Hemmung der bakteriellen Proteinsynthese",
        "Bindung an die 30S-Untereinheit des Ribosoms"
      ),
    ],
    effectiveAgainst: [
      fact("Einige gramnegative Bakterien", "insb. Pseudomonas aeruginosa"),
    ],
    remember: [
      fact(
        "Gegen einige grampositive Erreger synergistisch in Kombination mit β-Lactamen",
        "z.B. Enterococcus faecalis, E. faecium, Listeria monocytogenes"
      ),
    ],
  });
})();

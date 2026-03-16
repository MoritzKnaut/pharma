(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.makrolide = entry("Makrolide", {
    substances: ["Azithromycin", "Clarithromycin", "Erythromycin"],
    mechanism: [
      fact(
        "Hemmung der bakteriellen Proteinsynthese",
        "Bindung an die 50S-Untereinheit des Ribosoms"
      ),
    ],
    effectiveAgainst: [
      fact(
        "Besonders wirksam gegen intrazelluläre Erreger und Atypiker",
        "Chlamydien, Mykoplasmen, Legionellen"
      ),
      fact("Einige grampositive Bakterien", "z.B. Streptokokken"),
      fact(
        "Einige gramnegative Bakterien",
        "z.B. Neisserien, Helicobacter pylori"
      ),
    ],
    remember: [
      fact(
        "Azithromycin zusätzlich gegen Campylobacter spp.",
        "auch einige Enterobacterales wie Shigella spp. und Salmonella spp."
      ),
    ],
  });
})();

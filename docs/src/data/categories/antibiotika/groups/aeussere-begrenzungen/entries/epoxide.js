(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.epoxide = entry("Epoxide", {
    substances: ["Fosfomycin"],
    mechanism: [
      fact(
        "Hemmung der Zellwandsynthese",
        "Blockade eines frühen Syntheseschritts der bakteriellen Zellwand"
      ),
    ],
    effectiveAgainst: [
      fact(
        "Einige grampositive Erreger",
        "z.B. Staphylokokken inkl. MRSA, Enterokokken inkl. VRE"
      ),
      fact(
        "Einige gramnegative Erreger",
        "z.B. E. coli, Enterobacter spp., Klebsiella spp., Pseudomonas aeruginosa"
      ),
    ],
  });
})();

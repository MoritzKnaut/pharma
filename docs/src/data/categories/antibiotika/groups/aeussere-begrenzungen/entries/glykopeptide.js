(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.glykopeptide = entry("Glykopeptide", {
    substances: ["Vancomycin", "Teicoplanin"],
    mechanism: [
      fact(
        "Hemmung der Zellwandsynthese",
        "Bindung an Zellwandbausteine grampositiver Bakterien und Blockade der Peptidoglykan-Synthese"
      ),
    ],
    effectiveAgainst: [
      fact(
        "Ausschließlich grampositive Erreger",
        "inkl. koagulasenegative Staphylokokken, MRSA, Enterococcus faecium"
      ),
      fact("Orales Vancomycin gegen Clostridioides difficile"),
    ],
  });
})();

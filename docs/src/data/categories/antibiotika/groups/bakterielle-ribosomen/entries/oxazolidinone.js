(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.oxazolidinone = entry("Oxazolidinone", {
    substances: ["Linezolid", "Tedizolid"],
    mechanism: [
      fact(
        "Hemmung der bakteriellen Proteinsynthese",
        "Blockade der Initiation an der 50S-Untereinheit des Ribosoms"
      ),
    ],
    effectiveAgainst: [
      fact(
        "Ausschließlich grampositive Erreger",
        "insb. Streptokokken, Staphylokokken inkl. MRSA, Enterokokken inkl. VRE"
      ),
    ],
  });
})();

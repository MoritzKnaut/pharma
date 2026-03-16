(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.glycylcycline = entry("Glycylcycline", {
    substances: ["Tigecyclin"],
    mechanism: [
      fact(
        "Hemmung der bakteriellen Proteinsynthese",
        "Bindung an die 30S-Untereinheit des Ribosoms"
      ),
    ],
    effectiveAgainst: [
      fact(
        "Viele grampositive Bakterien",
        "inkl. MRE, Staphylokokken inkl. MRSA, Enterokokken inkl. VRE"
      ),
      fact("Einige gramnegative Bakterien", "z.B. Enterobacterales"),
      "Atypiker",
      "Anaerobier",
    ],
  });
})();

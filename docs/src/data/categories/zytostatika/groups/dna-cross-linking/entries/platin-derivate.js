(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("zytostatika");

  parts.entries = parts.entries || {};
  parts.entries.platinDerivate = entry("Platin-Derivate", {
    layout: "wide",
    substances: ["Cisplatin", "Carboplatin", "Oxaliplatin"],
    mechanism: [
      fact(
        "Cross-Links zwischen beiden DNA-Strängen",
        "DNA-Replikation↓"
      ),
    ],
    indications: [
      fact("Urothelkarzinom"),
      fact("Lungenkarzinom"),
      fact("Ovarialkarzinom"),
    ],
    sideEffects: [
      fact("Emetogen"),
      fact("Nephrotoxisch"),
      fact("Ototoxisch"),
      fact("Neurotoxisch", "zentrale und periphere Neuropathien"),
    ],
  });
})();

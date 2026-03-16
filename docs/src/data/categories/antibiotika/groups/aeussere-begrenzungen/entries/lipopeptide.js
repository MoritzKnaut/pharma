(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.lipopeptide = entry("Lipopeptide", {
    substances: ["Daptomycin"],
    mechanism: [
      fact(
        "Irreversible Bindung an die bakterielle Zellmembran",
        "Einbau von Ionenkanälen mit Depolarisation der Zelle"
      ),
    ],
    effectiveAgainst: [
      fact(
        "Ausschließlich grampositive Erreger",
        "inkl. koagulasenegative Staphylokokken, MRSA, VRE"
      ),
    ],
  });
})();

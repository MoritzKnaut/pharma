(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("virostatika");

  parts.entries = parts.entries || {};

  parts.entries.ribavirin = entry("Ribavirin", {
    mechanism: [fact("Nukleosidanalogon", "RNA-Polymerase-Inhibitor")],
    effectiveAgainst: [fact("Hepatitis C", "nur in Kombination mit DAA")],
    remember: [fact("Ribavirin-freie Regime werden bevorzugt")],
  });
})();

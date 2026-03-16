(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("virostatika");

  parts.entries = parts.entries || {};

  parts.entries.ns5bInhibitoren = entry("NS5B-Inhibitoren", {
    substances: ["Sofosbuvir"],
    effectiveAgainst: [fact("Hepatitis C", "Kombinationstherapie")],
    remember: [fact("Sofosbuvir ist pangenotypisch einsetzbar")],
  });
})();

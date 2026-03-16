(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("zytostatika");

  parts.entries = parts.entries || {};
  parts.entries.ribonukleotidreduktaseHemmer = entry("Ribonukleotidreduktase-Hemmer", {
    layout: "wide",
    substances: ["Hydroxyurea (Hydroxycarbamid)"],
    mechanism: [
      fact(
        "Hemmung der Ribonukleotidreduktase",
        "DNA-Replikation↓ → Massive Zytoreduktion"
      ),
    ],
    indications: [
      fact("CML"),
      fact("Essenzielle Thrombozythämie"),
      fact("Polycythämia vera"),
    ],
    sideEffects: [
      fact("Myelotoxizität"),
      fact("Hyperurikämie"),
    ],
  });
})();

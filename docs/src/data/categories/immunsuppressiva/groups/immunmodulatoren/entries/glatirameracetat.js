(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.glatirameracetat = entry("Glatirameracetat", {
    mechanism: [
      fact("Wirkmechanismus nicht vollständig geklärt"),
      fact("Bindung an MHC-II auf antigenpräsentierenden Zellen"),
      fact("Induktion regulatorisch wirkender T-Suppressorzellen", "MBP-spezifisch")
    ],
    indications: [
      fact("Multiple Sklerose")
    ],
    sideEffects: [
      fact("Lokale Entzündungsreaktion an der Einstichstelle")
    ]
  });
})();

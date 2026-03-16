(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.dimethylfumarat = entry("Dimethylfumarat", {
    mechanism: [
      fact("Wirkmechanismus nicht vollständig geklärt"),
      fact("Blockiert über HCA2-Rezeptor auf neutrophilen Granulozyten deren Einwanderung ins ZNS")
    ],
    indications: [
      fact("Multiple Sklerose"),
      fact("Psoriasis vulgaris")
    ],
    sideEffects: [
      fact("Flush"),
      fact("Gastrointestinale Beschwerden")
    ]
  });
})();

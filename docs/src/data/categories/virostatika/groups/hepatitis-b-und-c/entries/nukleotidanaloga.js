(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("virostatika");

  parts.entries = parts.entries || {};

  parts.entries.nukleotidanalogaHepatitis = entry("Nukleotidanaloga", {
    substances: ["Tenofovir", "Adefovir"],
    mechanism: [fact("Nukleotidanaloga")],
    effectiveAgainst: [fact("Hepatitis B")],
    remember: [fact("Tenofovir ist auch aus der HIV-Therapie bekannt")],
  });
})();

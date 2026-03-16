(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("virostatika");

  parts.entries = parts.entries || {};

  parts.entries.nukleosidanalogaHepatitis = entry("Nukleosidanaloga", {
    substances: ["Entecavir", "Lamivudin", "Telbivudin"],
    mechanism: [fact("Hemmung der reversen Transkriptase")],
    effectiveAgainst: [fact("Hepatitis B")],
    notes: [fact("Lamivudin ist auch aus der HIV-Therapie bekannt")],
  });
})();

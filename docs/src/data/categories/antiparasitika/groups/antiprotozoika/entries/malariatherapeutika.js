(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antiparasitika");

  parts.entries = parts.entries || {};
  parts.entries.malariatherapeutika = entry("Malariatherapeutika", {
    substances: ["Atovaquon/Proguanil", "Artemeter/Lumefantrin"],
    effectiveAgainst: [fact("Malaria")],
    notes: [fact("Typische Kombinationen zur Behandlung der Malaria")],
  });
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("virostatika");

  parts.entries = parts.entries || {};

  parts.entries.integraseInhibitoren = entry("Integrase-Inhibitoren", {
    substances: [
      "Elvitegravir",
      "Raltegravir",
      "Dolutegravir",
      "Bictegravir",
      "Cabotegravir",
    ],
    mechanism: [
      fact("Integrationshemmung der HIV-DNA", "in die genomische DNA der Wirtszelle"),
    ],
    notes: [fact("Enden meist auf -gravir")],
  });
})();

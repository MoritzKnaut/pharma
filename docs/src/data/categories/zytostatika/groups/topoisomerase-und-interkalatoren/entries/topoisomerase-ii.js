(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("zytostatika");

  parts.entries = parts.entries || {};
  parts.entries.topoisomeraseII = entry("Topoisomerase-II-Hemmer", {
    layout: "wide",
    substances: ["Etoposid"],
    mechanism: [
      fact(
        "Hemmung der Topoisomerase II",
        "Definitive Doppelstrangbrüche der DNA → DNA-Replikation↓"
      ),
    ],
    indications: [
      fact("Lungenkarzinom"),
      fact("Ovarialkarzinom"),
      fact("Hodenkarzinom"),
      fact("Lymphome"),
    ],
    sideEffects: [
      fact("Myelotoxizität"),
      fact(
        "Rote-Hand-Brief zu Etoposid",
        "Erhöhtes Risiko für infusionsbedingte Überempfindlichkeitsreaktionen bei der Verwendung von Inline-Filtern"
      ),
    ],
  });
})();

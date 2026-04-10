(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;
  var parts = shared.getCategoryParts("antidiabetika");

  parts.entries = parts.entries || {};
  parts.entries.dpp4Hemmer = entry("DPP-4-Hemmer", {
    substances: ["Sitagliptin", "Saxagliptin", "Linagliptin"],
    mechanism: [
      fact("Hemmung der DPP-4"),
      fact("↑ endogene Inkretine", "GLP-1 und GIP"),
      fact("↑ Insulin / ↓ Glukagon", "glukoseabhängig"),
    ],
    sideEffects: [
      fact("GI-Beschwerden"),
      fact("Pankreatitis"),
      fact("Kopfschmerzen / Schwindel"),
      fact("Leberfunktionsstörungen"),
    ],
    cave: [
      fact("Schwere Nierenfunktionsstörung", "relative Kontraindikation"),
      fact("Chronische Pankreatitis"),
      fact("Pankreasraumforderungen in der Familienanamnese"),
    ],
    remember: [fact("Endung: -gliptin")],
  });
})();

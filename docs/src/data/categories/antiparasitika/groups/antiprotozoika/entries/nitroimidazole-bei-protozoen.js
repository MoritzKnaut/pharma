(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antiparasitika");

  parts.entries = parts.entries || {};
  parts.entries.nitroimidazoleBeiProtozoen = entry("Nitroimidazole bei Protozoen", {
    substances: ["Metronidazol"],
    effectiveAgainst: [
      fact("Giardia lamblia", "Giardiasis"),
      fact("Entamoeba histolytica", "Amöbiasis"),
      fact("Trichomonas vaginalis", "Trichomoniasis"),
    ],
    remember: [
      fact(
        "Metronidazol ist vor allem als Antibiotikum bekannt, wird aber auch gegen bestimmte Protozoen eingesetzt"
      ),
    ],
  });
})();

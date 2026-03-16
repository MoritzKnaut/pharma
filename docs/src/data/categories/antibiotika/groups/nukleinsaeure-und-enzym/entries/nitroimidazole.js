(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.nitroimidazole = entry("Nitroimidazole", {
    substances: ["Metronidazol"],
    mechanism: [
      fact(
        "DNA-Strangbrüche nach intrazellulärer Aktivierung",
        "v.a. in anaeroben Erregern"
      ),
    ],
    effectiveAgainst: [
      fact("Anaerobier", "z.B. Bacteroides, Clostridioides difficile"),
      fact(
        "Wenige andere fakultativ anaerobe Bakterien",
        "z.B. Gardnerella vaginalis, Helicobacter pylori"
      ),
      fact(
        "Auch gegen Protozoen",
        "z.B. Giardia lamblia, Entamoeba histolytica, Trichomonas vaginalis"
      ),
    ],
  });
})();

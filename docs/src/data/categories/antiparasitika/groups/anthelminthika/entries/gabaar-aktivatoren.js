(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antiparasitika");

  parts.entries = parts.entries || {};
  parts.entries.gabaarAktivatoren = entry("GABAAR-Aktivatoren", {
    substances: ["Ivermectin"],
    mechanism: [
      fact(
        "Bindung an glutamatgesteuerte Chloridkanäle",
        "vermehrter Chlorideinstrom in Nerven- und Muskelzellen von Mikrofilarien"
      ),
      fact("GABA-Agonist", "Unterbrechung der synaptischen Weiterleitung im ZNS"),
    ],
    effectiveAgainst: [
      "Skabies",
      "Kopf- und Filzläuse",
      fact("Nematoden", "z.B. Strongyloidiasis, Ascariasis"),
    ],
  });
})();

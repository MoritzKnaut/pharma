(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antiparasitika");

  parts.entries = parts.entries || {};
  parts.entries.mikrotubuliInhibitoren = entry("Mikrotubuli-Inhibitoren", {
    substances: ["Albendazol", "Mebendazol"],
    variantsKind: "substances",
    mechanism: [fact("Hemmung der Polymerisation von Mikrotubuli")],
    variants: [
      {
        name: "Albendazol",
        effectiveAgainst: [
          fact(
            "Nematoden",
            "z.B. Ascariasis, Strongyloidiasis, Trichinose, Ancylostomatidose"
          ),
          fact("Cestoden", "z.B. Taenia-Infektionen, Echinokokkose"),
        ],
      },
      {
        name: "Mebendazol",
        effectiveAgainst: [
          fact(
            "Nematoden",
            "z.B. Enterobiose, Ascariasis, Ancylostomatidose, Trichuriasis, Trichinose, Strongyloidiasis"
          ),
          fact("Cestoden", "z.B. Taenia-Infektionen"),
        ],
      },
    ],
  });
})();

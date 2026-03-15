(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antiparasitika");

  parts.overgroups.anthelminthika = {
    id: "anthelminthika",
    kind: "antiparasitic",
    theme: themes.amber,
    title: "Anthelminthika",
    kicker: "Wurmerkrankungen",
    description: "",
    sections: [
      {
        id: "anthelminthika-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          {
            name: "Praziquantel",
            mechanism: [fact("Vermehrter Calciumeinstrom durch die Wurmoberfläche")],
            effectiveAgainst: [
              fact("Trematoden", "z.B. Schistosomiasis"),
              fact("Cestoden", "z.B. Taenia-Infektionen, Diphyllobothriasis"),
            ],
            notes: [fact("Bei den meisten Würmern reicht eine Einmalgabe aus")],
          },
          {
            name: "GABAAR-Aktivatoren",
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
          },
          {
            name: "Mikrotubuli-Inhibitoren",
            substances: ["Albendazol", "Mebendazol"],
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
          },
        ],
      },
    ],
  };
})();

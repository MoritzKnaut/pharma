(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antiparasitika");

  parts.overgroups.antiprotozoika = {
    id: "antiprotozoika",
    kind: "antiparasitic",
    theme: themes.navy,
    title: "Antiprotozoika",
    kicker: "Einzeller",
    description: "",
    sections: [
      {
        id: "antiprotozoika-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          {
            name: "Malariatherapeutika",
            substances: ["Atovaquon/Proguanil", "Artemeter/Lumefantrin"],
            effectiveAgainst: [fact("Malaria")],
            notes: [fact("Typische Kombinationen zur Behandlung der Malaria")],
          },
          {
            name: "Antimykotika bei Protozoen",
            substances: ["Amphotericin B", "Ketoconazol", "Itraconazol"],
            effectiveAgainst: [fact("Leishmaniose")],
            notes: [
              fact(
                "Diese Wirkstoffe sind eigentlich Antimykotika, werden hier aber wegen ihrer Anwendung bei Leishmaniose mitgeführt"
              ),
            ],
          },
          {
            name: "Nitroimidazole bei Protozoen",
            substances: ["Metronidazol"],
            effectiveAgainst: [
              fact("Giardia lamblia", "Giardiasis"),
              fact("Entamoeba histolytica", "Amöbiasis"),
              fact("Trichomonas vaginalis", "Trichomoniasis"),
            ],
            notes: [
              fact(
                "Metronidazol ist vor allem als Antibiotikum bekannt, wird aber auch gegen bestimmte Protozoen eingesetzt"
              ),
            ],
          },
        ],
      },
    ],
  };
})();

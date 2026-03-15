(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("virostatika");

  parts.overgroups.hivTherapie = {
    id: "hiv-therapie",
    kind: "antiviral",
    theme: themes.violet,
    title: "Antiretrovirale Therapie bei HIV",
    kicker: "ART",
    description: "",
    sections: [
      {
        id: "hiv-wirkstoffgruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          {
            name: "NRTI",
            mechanism: [
              fact(
                "Kompetitive Hemmung der reversen Transkription",
                "Kettenabbruch nach Einbau in neu synthetisierte DNA-Stränge"
              ),
            ],
            notes: [
              fact("Nukleosidische und nukleotidische Reverse-Transkriptase-Inhibitoren"),
              fact("Enden meist auf -in"),
            ],
            variants: [
              {
                name: "NsRTI",
                substances: ["Emtricitabin", "Lamivudin", "Abacavir", "Zidovudin"],
              },
              {
                name: "NtRTI",
                substances: ["Tenofovir"],
              },
            ],
          },
          {
            name: "NNRTI",
            substances: ["Rilpivirin", "Efavirenz", "Nevirapin", "Etravirin", "Doravirin"],
            mechanism: [fact("Nicht-kompetitive Hemmung der viruseigenen reversen Transkriptase")],
            notes: [
              fact("Nicht-nukleosidische Reverse-Transkriptase-Inhibitoren"),
              fact("Tragen oft die Silbe -vir- in der Mitte"),
            ],
          },
          {
            name: "Protease-Inhibitoren",
            substances: ["Darunavir", "Atazanavir", "Lopinavir", "Tipranavir"],
            mechanism: [
              fact(
                "Hemmung der katalytischen Protease-Aktivität",
                "verhindert die Bildung reifer infektiöser Viruspartikel"
              ),
            ],
            notes: [fact("Enden meist auf -navir")],
          },
          {
            name: "Integrase-Inhibitoren",
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
          },
        ],
      },
    ],
  };
})();

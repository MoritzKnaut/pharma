(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("virostatika");

  parts.overgroups.herpesviridae = {
    id: "herpesviridae",
    kind: "antiviral",
    theme: themes.rose,
    title: "Antivirale Pharmaka gegen Herpesviridae",
    kicker: "DNA-Viren",
    description: "",
    sections: [
      {
        id: "herpesviridae-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          {
            name: "DNA-Polymerase-Inhibitoren",
            mechanism: [fact("Hemmung der viralen DNA-Polymerase")],
            variants: [
              {
                name: "Aciclovir",
                substances: ["Valaciclovir"],
                effectiveAgainst: [fact("Herpes simplex"), fact("Varizella zoster")],
                notes: [
                  fact(
                    "Auch intravenös anwendbar und deshalb wichtig bei schweren Herpesinfektionen"
                  ),
                ],
              },
              {
                name: "Ganciclovir",
                effectiveAgainst: [fact("Zytomegalie-Virus", "CMV")],
                notes: [fact("Für schwere CMV-Infektionen")],
              },
              {
                name: "Foscarnet",
                effectiveAgainst: [fact("CMV"), fact("Herpesviridae")],
                notes: [
                  fact(
                    "Wirkt direkt an der viralen DNA-Polymerase und muss nicht erst in der Zelle aktiviert werden"
                  ),
                ],
              },
            ],
          },
          {
            name: "Antisense-Oligonukleotide",
            substances: ["Fomivirsen"],
            mechanism: [fact("Antisense-Medikament")],
            effectiveAgainst: [fact("CMV-Retinitis", "bei AIDS")],
            notes: [fact("Lokale Therapie am Auge")],
          },
        ],
      },
    ],
  };
})();

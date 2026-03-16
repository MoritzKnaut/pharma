(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("virostatika");

  parts.entries = parts.entries || {};

  parts.entries.dnaPolymeraseInhibitorenHerpes = entry("DNA-Polymerase-Inhibitoren", {
    variantsKind: "substances",
    mechanism: [fact("Hemmung der viralen DNA-Polymerase")],
    variants: [
      {
        name: "Aciclovir",
        substances: ["Valaciclovir"],
        effectiveAgainst: [fact("Herpes simplex"), fact("Varizella zoster")],
        remember: [
          fact(
            "Auch intravenös anwendbar und deshalb wichtig bei schweren Herpesinfektionen"
          ),
        ],
      },
      {
        name: "Ganciclovir",
        effectiveAgainst: [fact("Zytomegalie-Virus", "CMV")],
        remember: [fact("Für schwere CMV-Infektionen")],
      },
      {
        name: "Foscarnet",
        effectiveAgainst: [fact("CMV"), fact("Herpesviridae")],
        remember: [
          fact(
            "Wirkt direkt an der viralen DNA-Polymerase und muss nicht erst in der Zelle aktiviert werden"
          ),
        ],
      },
    ],
  });
})();

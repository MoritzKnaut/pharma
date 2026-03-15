(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antibiotika");

  parts.overgroups.folsaeuremetabolismus = {
    id: "folsaeuremetabolismus",
    kind: "antibiotic",
    theme: themes.magenta,
    title: "Folsäuremetabolismus",
    kicker: "Stoffwechselblockade",
    description: "",
    sections: [
      {
        id: "folsaeurestoffwechsel-hemmer",
        type: "entries",
        title: "Folsäurestoffwechsel-Hemmer",
        description: "",
        entries: [
          {
            name: "Sulfonamide",
            substances: ["Sulfamethoxazol"],
            mechanism: [
              fact(
                "Hemmung der bakteriellen Folsäuresynthese",
                "Blockade der Dihydropteroatsynthase"
              ),
            ],
            effectiveAgainst: [
              "Einige grampositive Bakterien",
              "Einige gramnegative Bakterien",
            ],
          },
          {
            name: "Trimethoprim",
            substances: ["Trimethoprim"],
            mechanism: [
              fact(
                "Hemmung der bakteriellen Folsäuresynthese",
                "Blockade der Dihydrofolatreduktase"
              ),
            ],
            otherInfo: [
              fact(
                "Trimethoprim wird meist nicht allein, sondern zusammen mit Sulfamethoxazol als Cotrimoxazol eingesetzt",
                null,
                {
                  muted: true,
                }
              ),
            ],
          },
          {
            name: "Cotrimoxazol",
            substances: ["Trimethoprim/Sulfamethoxazol"],
            mechanism: [
              fact(
                "Kombinierte Hemmung der bakteriellen Folsäuresynthese",
                "Sulfamethoxazol hemmt die Dihydropteroatsynthase, Trimethoprim die Dihydrofolatreduktase"
              ),
            ],
            effectiveAgainst: [
              "Zahlreiche grampositive Bakterien",
              "Zahlreiche gramnegative Bakterien",
              fact("Wirksam gegen Pneumocystis jirovecii und Toxoplasma gondii"),
            ],
            cautions: [
              fact("Nicht wirksam gegen Pseudomonas"),
              fact("Nicht wirksam gegen Anaerobier"),
            ],
          },
        ],
      },
    ],
  };
})();

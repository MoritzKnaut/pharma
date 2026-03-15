(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antimykotika");

  parts.overgroups.weitereAntimykotika = {
    id: "weitere-antimykotika",
    kind: "antifungal",
    theme: themes.magenta,
    title: "Weitere Antimykotika",
    kicker: "Spezielle Optionen",
    description: "",
    sections: [
      {
        id: "weitere-antimykotika-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          {
            name: "Hydroxypyridonderivate",
            substances: ["Ciclopirox"],
            mechanism: [
              fact(
                "Störung zellulärer Enzyme",
                "durch Chelatbildung mit mehrwertigen Kationen"
              ),
            ],
            effectiveAgainst: [
              fact("Hefen", "Candidose"),
              "Dermatophytosen",
              fact("Besonders verbreitet bei Onychomykosen"),
            ],
            notes: [fact("Lokal")],
          },
          {
            name: "Allylamine",
            substances: ["Terbinafin"],
            mechanism: [
              fact(
                "Hemmung der Squalenepoxidase",
                "dadurch gestörte Ergosterol-Synthese"
              ),
            ],
            effectiveAgainst: ["Dermatophytosen"],
            notes: [fact("Per os oder lokal")],
          },
        ],
      },
    ],
  };
})();

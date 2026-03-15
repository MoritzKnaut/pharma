(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antimykotika");

  parts.overgroups.echinocandine = {
    id: "echinocandine",
    kind: "antifungal",
    theme: themes.blue,
    title: "Echinocandine",
    kicker: "Zellwand-Synthese",
    description: "",
    sections: [
      {
        id: "echinocandine-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          {
            name: "Echinocandine",
            substances: ["Caspofungin", "Anidulafungin", "Micafungin"],
            mechanism: [fact("Echinocandine: Hemmung der Beta-(1,3)-Glucan-Synthese")],
            effectiveAgainst: [
              fact("Hefen", "invasive Candidose"),
              fact("Schimmelpilze", "Aspergillose"),
              fact(
                "Empirische Therapie",
                "bei V.a. systemische Pilzinfektion unter Neutropenie"
              ),
            ],
            notes: [
              fact("Intravenös"),
              fact("Caspofungin ist ein typischer Vertreter dieser Gruppe"),
              fact("Anidulafungin und Micafungin haben ein ähnliches Wirkspektrum"),
            ],
          },
        ],
      },
    ],
  };
})();

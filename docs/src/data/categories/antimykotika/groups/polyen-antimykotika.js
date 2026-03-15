(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antimykotika");

  parts.overgroups.polyenAntimykotika = {
    id: "polyen-antimykotika",
    kind: "antifungal",
    theme: themes.teal,
    title: "Polyen-Antimykotika",
    kicker: "Ergosterol-Bindung",
    description: "",
    sections: [
      {
        id: "polyen-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          {
            name: "Polyen-Antimykotika",
            variantsKind: "substances",
            mechanism: [
              fact("Polyen: Bindung an Ergosterol"),
              fact("Membrandurchlässigkeit steigt", "fungizide Wirkung"),
            ],
            variants: [
              {
                name: "Amphotericin B",
                effectiveAgainst: [
                  fact("Hefen", "invasive Candidose"),
                  "Kryptokokkose",
                  fact("Schimmelpilze", "Aspergillose"),
                ],
                notes: [
                  fact("Lokal oder intravenös"),
                  fact("Nur lipidformulierte Präparate verwenden"),
                ],
              },
              {
                name: "Nystatin",
                effectiveAgainst: [fact("Hefen", "Candidose")],
                notes: [
                  fact("Nur lokale Anwendung möglich"),
                  fact("Kann bei Immunsuppression prophylaktisch peroral gegeben werden"),
                  fact("Lokal an Haut und Schleimhaut"),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
})();

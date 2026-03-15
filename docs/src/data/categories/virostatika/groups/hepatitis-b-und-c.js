(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("virostatika");

  parts.overgroups.hepatitisBundC = {
    id: "hepatitis-b-und-c",
    kind: "antiviral",
    theme: themes.amber,
    title: "Antivirale Pharmaka gegen Hepatitis B und C",
    kicker: "Hepatitisviren",
    description: "",
    sections: [
      {
        id: "hepatitis-b",
        type: "entries",
        title: "Hepatitis B",
        description: "",
        entries: [
          {
            name: "Nukleotidanaloga",
            substances: ["Tenofovir", "Adefovir"],
            mechanism: [fact("Nukleotidanaloga")],
            effectiveAgainst: [fact("Hepatitis B")],
            notes: [fact("Tenofovir ist auch aus der HIV-Therapie bekannt")],
          },
          {
            name: "Nukleosidanaloga",
            substances: ["Entecavir", "Lamivudin", "Telbivudin"],
            mechanism: [fact("Hemmung der reversen Transkriptase")],
            effectiveAgainst: [fact("Hepatitis B")],
            notes: [fact("Lamivudin ist auch aus der HIV-Therapie bekannt")],
          },
        ],
      },
      {
        id: "interferon-alpha",
        type: "entries",
        title: "(PEG-)Interferon-α",
        description: "",
        entries: [
          {
            name: "Interferon-α",
            mechanism: [
              fact(
                "Antiviral und immunmodulatorisch",
                "über inter- und intrazelluläre Mechanismen"
              ),
            ],
            effectiveAgainst: [fact("Akute Hepatitis C"), fact("Chronische Hepatitis B")],
            notes: [fact("Heute nur noch selten oder bei speziellen Indikationen")],
          },
        ],
      },
      {
        id: "hepatitis-c",
        type: "entries",
        title: "Hepatitis C",
        description: "",
        entries: [
          {
            name: "NS3-Protease-Inhibitoren",
            substances: ["Glecaprevir", "Grazoprevir", "Voxilaprevir", "Paritaprevir"],
            effectiveAgainst: [fact("Hepatitis C", "Kombinationstherapie")],
            notes: [fact("Wichtige direkt antiviral wirkende Substanzen")],
          },
          {
            name: "NS5A-Inhibitoren",
            substances: ["Ledipasvir", "Elbasvir", "Velpatasvir", "Pibrentasvir"],
            effectiveAgainst: [fact("Hepatitis C", "Kombinationstherapie")],
          },
          {
            name: "NS5B-Inhibitoren",
            substances: ["Sofosbuvir"],
            effectiveAgainst: [fact("Hepatitis C", "Kombinationstherapie")],
            notes: [fact("Sofosbuvir ist pangenotypisch einsetzbar")],
          },
          {
            name: "Ribavirin",
            mechanism: [fact("Nukleosidanalogon", "RNA-Polymerase-Inhibitor")],
            effectiveAgainst: [fact("Hepatitis C", "nur in Kombination mit DAA")],
            notes: [fact("Ribavirin-freie Regime werden bevorzugt")],
          },
        ],
      },
    ],
  };
})();

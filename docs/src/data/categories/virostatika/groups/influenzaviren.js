(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("virostatika");

  parts.overgroups.influenzaviren = {
    id: "influenzaviren",
    kind: "antiviral",
    theme: themes.navy,
    title: "Antivirale Pharmaka gegen Influenzaviren",
    kicker: "Influenzatherapie",
    description: "",
    sections: [
      {
        id: "influenza-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          {
            name: "Ionenkanalblocker",
            substances: ["Amantadin"],
            mechanism: [fact("Blockade viraler Ionenkanäle")],
            effectiveAgainst: [fact("Influenza A")],
            notes: [fact("Zusätzliche Anwendung als Parkinson-Medikament")],
          },
          {
            name: "Neuraminidase-Hemmer",
            substances: ["Oseltamivir"],
            mechanism: [
              fact(
                "Hemmen die Ausknospung des Virus",
                "verhindern die Aussaat in die Blutbahn"
              ),
            ],
            effectiveAgainst: [fact("Influenza A und B")],
          },
        ],
      },
    ],
  };
})();

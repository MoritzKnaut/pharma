(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var variant = shared.variant;
  var parts = shared.getCategoryParts("zytostatika");

  parts.entries = parts.entries || {};
  parts.entries.pyrimidinAnaloga = entry("Pyrimidin-Analoga", {
    layout: "wide",
    variantsKind: "subgroups",
    remember: [
      fact("Pyrimidin-Antagonisten = Pyrimidin-Analoga", "Synonyme Begriffe"),
    ],
    variants: [
      {
        name: "Thymidylatsynthase-Hemmer",
        substances: ["5-FU (5-Fluoruracil)", "Capecitabin"],
        mechanism: [
          fact(
            "Hemmung der Thymidylatsynthase",
            "Störung der DNA-Synthese → DNA-Replikation↓",
          ),
        ],
        indications: [
          fact("Mammakarzinom"),
          fact("Kolorektales Karzinom"),
          fact("Magenkarzinom"),
        ],
        sideEffects: [
          fact("Wirkungsverstärkung durch Folinsäure"),
          fact("Myelotoxizität"),
        ],
      },
      {
        name: "DNA-Polymerase-Hemmer",
        substances: ["Cytarabin", "Gemcitabin"],
        mechanism: [
          fact(
            "Hemmung der DNA-Polymerase",
            "Einbau einer falschen Base → DNA-Replikation↓",
          ),
        ],
        indications: [
          fact("Akute Leukämien", "Cytarabin"),
          fact("Pankreaskarzinom", "Gemcitabin"),
          fact("Urothelkarzinom", "Gemcitabin"),
          fact("Ovarialkarzinom", "Gemcitabin"),
        ],
        sideEffects: [fact("Myelotoxizität")],
      },
    ],
  });
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antibiotika");

  parts.overgroups.nukleinsaeureUndEnzym = {
    id: "nukleinsaeure-und-enzym",
    kind: "antibiotic",
    theme: themes.orange,
    title: "Nukleinsäure und zugehörige Enzyme",
    kicker: "DNA, RNA und Enzymziele",
    description: "",
    sections: [
      {
        id: "dna-rna-wirksame-antibiotika",
        type: "entries",
        title: "DNA-/RNA-wirksame Antibiotika",
        description: "",
        entries: [
          {
            name: "Fluorchinolone",
            overview: "",
            mechanism: [
              fact(
                "Hemmung bakterieller Topoisomerasen",
                "v.a. DNA-Gyrase (Topoisomerase II), teils auch Topoisomerase IV"
              ),
            ],
            variants: [
              {
                name: "Gruppe I",
                substances: ["Norfloxacin"],
                effectiveAgainst: [
                  fact("Vor allem gramnegative Stäbchen", "inkl. Pseudomonas aeruginosa"),
                ],
              },
              {
                name: "Gruppe II",
                substances: ["Ciprofloxacin", "Ofloxacin"],
                effectiveAgainst: [
                  fact(
                    "Gut wirksam gegen gramnegative Bakterien",
                    "inkl. Enterobacterales und Pseudomonas aeruginosa"
                  ),
                  "Wirksam gegen Atypiker",
                ],
              },
              {
                name: "Gruppe III",
                substances: ["Levofloxacin"],
                effectiveAgainst: [
                  "Bessere Wirkung gegen grampositive Kokken",
                  fact(
                    "Gute Wirkung gegen atypische Pneumonie-Erreger",
                    "Chlamydien, Mykoplasmen, Legionellen"
                  ),
                ],
                cautions: [fact("Nur mäßig wirksam gegen Pseudomonas aeruginosa")],
              },
              {
                name: "Gruppe IV",
                substances: ["Moxifloxacin"],
                effectiveAgainst: [
                  "Noch bessere Wirkung gegen grampositive Kokken",
                  fact(
                    "Gute Wirkung gegen atypische Pneumonie-Erreger",
                    "Chlamydien, Mykoplasmen, Legionellen"
                  ),
                  "Gute Wirkung gegen Anaerobier",
                ],
                cautions: [fact("Keine Wirkung gegen Pseudomonas aeruginosa")],
              },
            ],
          },
          {
            name: "Nitroimidazole",
            substances: ["Metronidazol"],
            mechanism: [
              fact(
                "DNA-Strangbrüche nach intrazellulärer Aktivierung",
                "v.a. in anaeroben Erregern"
              ),
            ],
            effectiveAgainst: [
              fact("Anaerobier", "z.B. Bacteroides, Clostridioides difficile"),
              fact(
                "Wenige andere fakultativ anaerobe Bakterien",
                "z.B. Gardnerella vaginalis, Helicobacter pylori"
              ),
              fact(
                "Auch gegen Protozoen",
                "z.B. Giardia lamblia, Entamoeba histolytica, Trichomonas vaginalis"
              ),
            ],
          },
          {
            name: "Ansamycine",
            substances: ["Rifampicin", "Rifabutin"],
            mechanism: [
              fact("Hemmung der bakteriellen RNA-Polymerase", "Hemmung der Transkription"),
            ],
            effectiveAgainst: [
              "Grampositive Bakterien",
              "Wenige gramnegative Bakterien",
              "Mykobakterien",
            ],
            notes: [fact("Starker CYP-Induktor")],
          },
        ],
      },
    ],
  };
})();

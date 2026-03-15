(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var referenceItem = shared.referenceItem;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antibiotika");

  parts.overgroups.learning = {
    id: "lernuebersichten",
    kind: "learning",
    includeInLearningLookup: false,
    theme: themes.neutral,
    title: "Links",
    kicker: "Schneller Zugriff",
    description: "",
    sections: [
      {
        id: "quick-reference",
        type: "quickReference",
        title: "Anhand Erreger",
        description: "",
        cards: [
          {
            title: "Grampositive Erreger",
            items: [
              "Penicilline",
              fact("Cephalosporine", "alle Generationen"),
              "Carbapeneme",
              "Makrolide",
              "Tetracycline",
              referenceItem("Tigecyclin", "Glycylcycline (z.B. Tigecyclin)"),
              "Lincosamide",
              fact("Fluorchinolone", "v.a. Gruppe III-IV"),
              referenceItem("Sulfonamide / Cotrimoxazol", "Cotrimoxazol"),
              "Rifampicin",
              "Fosfomycin",
              fact("Aminoglykoside", "v.a. in Kombination"),
            ],
            focusLabel: "Besonders / ausschließlich grampositiv",
            focusItems: ["Glykopeptide", "Oxazolidinone", "Lipopeptide"],
          },
          {
            title: "Gramnegative Erreger",
            items: [
              "Aminopenicilline + β-Lactamase-Inhibitor",
              referenceItem(
                "Acylaminopenicilline ± β-Lactamase-Inhibitor",
                "Acylaminopenicilline + β-Lactamase-Inhibitor",
              ),
              fact("Cephalosporine", "v.a. 2.-4. Generation"),
              "Carbapeneme",
              fact("Fluorchinolone", "v.a. Gruppe I-II"),
              "Aminoglykoside",
              "Cotrimoxazol",
              "Fosfomycin",
              "Tetracycline",
              referenceItem("Tigecyclin", "Glycylcycline (z.B. Tigecyclin)"),
            ],
            focusLabel: "Besonders starke gramnegative Wirkung",
            focusItems: [
              fact("Cephalosporine", "3.-4. Generation"),
              "Carbapeneme",
              fact("Fluorchinolone", "Gruppe I-II"),
              "Aminoglykoside",
              fact("Cefiderocol", "inkl. MRGN"),
            ],
          },
          {
            title: "Pseudomonas aeruginosa",
            items: [
              "Piperacillin/Tazobactam",
              "Acylaminopenicilline",
              fact("Ceftazidim", "Cephalosporin 3b"),
              fact("Cefepim", "Cephalosporin 4"),
              "Ceftolozan/Tazobactam",
              "Carbapeneme",
              "Ciprofloxacin",
              "Aminoglykoside",
              "Cefiderocol",
            ],
          },
          {
            title: "Anaerobier",
            items: [
              "Metronidazol",
              "Clindamycin",
              "Aminopenicilline + β-Lactamase-Inhibitor",
              "Piperacillin/Tazobactam",
              "Carbapeneme",
              referenceItem("Tigecyclin", "Glycylcycline (z.B. Tigecyclin)"),
              "Moxifloxacin",
            ],
          },
          {
            title:
              "Atypische / intrazelluläre Erreger (Chlamydien, Mykoplasmen, Legionellen)",
            items: [
              "Makrolide",
              "Tetracycline",
              fact("Fluorchinolone", "Gruppe III-IV"),
              referenceItem("Tigecyclin", "Glycylcycline (z.B. Tigecyclin)"),
            ],
          },
          {
            title: "MRSA",
            items: [
              "Glykopeptide",
              "Linezolid",
              "Daptomycin",
              referenceItem("Tigecyclin", "Glycylcycline (z.B. Tigecyclin)"),
              fact("Cephalosporine", "5. Generation"),
            ],
          },
          {
            title: "VRE",
            items: ["Linezolid", "Daptomycin"],
          },
          {
            title: "Enterokokken",
            items: [
              "Aminopenicilline",
              "Piperacillin/Tazobactam",
              "Carbapeneme",
              "Glykopeptide",
              "Linezolid",
              "Daptomycin",
            ],
            warningLabel: "Nicht wirksam",
            warningItems: [fact("Cephalosporine", "1.-4. Generation")],
          },
          {
            title:
              "Protozoen / opportunistische Erreger (Pneumocystis jirovecii, Toxoplasma gondii)",
            items: ["Cotrimoxazol"],
          },
          {
            title: "Mykobakterien",
            items: ["Rifampicin"],
          },
        ],
      },
      {
        id: "anhang-erkrankung",
        type: "referenceIndex",
        source: "diseaseLinks",
        title: "Anhang Erkrankung",
        description: "",
        emptyState: "Noch keine Inhalte vorhanden.",
      },
    ],
  };
})();

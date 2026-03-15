(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antibiotika");

  parts.overgroups.bakterielleRibosomen = {
    id: "bakterielle-ribosomen",
    kind: "antibiotic",
    theme: themes.blue,
    title: "Bakterielle Ribosomen",
    kicker: "Proteinsynthesehemmung",
    description: "",
    sections: [
      {
        id: "proteinsynthesehemmer",
        type: "entries",
        title: "Proteinsynthesehemmer",
        description: "",
        entries: [
          {
            name: "Makrolide",
            substances: ["Azithromycin", "Clarithromycin", "Erythromycin"],
            mechanism: [
              fact(
                "Hemmung der bakteriellen Proteinsynthese",
                "Bindung an die 50S-Untereinheit des Ribosoms"
              ),
            ],
            effectiveAgainst: [
              fact(
                "Besonders wirksam gegen intrazelluläre Erreger und Atypiker",
                "Chlamydien, Mykoplasmen, Legionellen"
              ),
              fact("Einige grampositive Bakterien", "z.B. Streptokokken"),
              fact(
                "Einige gramnegative Bakterien",
                "z.B. Neisserien, Helicobacter pylori"
              ),
            ],
            notes: [
              fact(
                "Azithromycin zusätzlich gegen Campylobacter spp.",
                "auch einige Enterobacterales wie Shigella spp. und Salmonella spp."
              ),
            ],
          },
          {
            name: "Tetracycline",
            substances: ["Doxycyclin", "Minocyclin"],
            mechanism: [
              fact(
                "Hemmung der bakteriellen Proteinsynthese",
                "Bindung an die 30S-Untereinheit des Ribosoms"
              ),
            ],
            effectiveAgainst: [
              "Einige grampositive Bakterien",
              "Einzelne gramnegative Bakterien",
              fact(
                "Gute Wirkung gegen intrazelluläre Erreger und Atypiker",
                "Chlamydien, Mykoplasmen, Rickettsien"
              ),
            ],
          },
          {
            name: "Glycylcycline",
            substances: ["Tigecyclin"],
            mechanism: [
              fact(
                "Hemmung der bakteriellen Proteinsynthese",
                "Bindung an die 30S-Untereinheit des Ribosoms"
              ),
            ],
            effectiveAgainst: [
              fact(
                "Viele grampositive Bakterien",
                "inkl. MRE, Staphylokokken inkl. MRSA, Enterokokken inkl. VRE"
              ),
              fact("Einige gramnegative Bakterien", "z.B. Enterobacterales"),
              "Atypiker",
              "Anaerobier",
            ],
          },
          {
            name: "Aminoglykoside",
            substances: ["Gentamicin", "Tobramycin", "Amikacin"],
            mechanism: [
              fact(
                "Hemmung der bakteriellen Proteinsynthese",
                "Bindung an die 30S-Untereinheit des Ribosoms"
              ),
            ],
            effectiveAgainst: [
              fact("Einige gramnegative Bakterien", "insb. Pseudomonas aeruginosa"),
            ],
            notes: [
              fact(
                "Gegen einige grampositive Erreger synergistisch in Kombination mit β-Lactamen",
                "z.B. Enterococcus faecalis, E. faecium, Listeria monocytogenes"
              ),
            ],
          },
          {
            name: "Lincosamide",
            substances: ["Clindamycin"],
            mechanism: [
              fact(
                "Hemmung der bakteriellen Proteinsynthese",
                "Bindung an die 50S-Untereinheit des Ribosoms"
              ),
            ],
            effectiveAgainst: ["Grampositive Bakterien", "Anaerobier"],
            cautions: [fact("Keine Wirkung gegen Enterokokken")],
          },
          {
            name: "Oxazolidinone",
            substances: ["Linezolid", "Tedizolid"],
            mechanism: [
              fact(
                "Hemmung der bakteriellen Proteinsynthese",
                "Blockade der Initiation an der 50S-Untereinheit des Ribosoms"
              ),
            ],
            effectiveAgainst: [
              fact(
                "Ausschließlich grampositive Erreger",
                "insb. Streptokokken, Staphylokokken inkl. MRSA, Enterokokken inkl. VRE"
              ),
            ],
          },
        ],
      },
    ],
  };
})();

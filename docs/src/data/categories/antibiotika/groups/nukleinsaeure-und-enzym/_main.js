(function () {
  var shared = window.pharmaAtlasShared || {};
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
        hideTitle: true,
        title: "DNA-/RNA-wirksame Antibiotika",
        description: "",
        entries: [
          parts.entries.fluorchinolone,
          parts.entries.nitroimidazole,
          parts.entries.ansamycine,
        ],
      },
    ],
  };
})();

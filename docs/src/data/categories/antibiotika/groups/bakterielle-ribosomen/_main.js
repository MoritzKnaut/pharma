(function () {
  var shared = window.pharmaAtlasShared || {};
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
        hideTitle: true,
        title: "Proteinsynthesehemmer",
        description: "",
        entries: [
          parts.entries.makrolide,
          parts.entries.tetracycline,
          parts.entries.glycylcycline,
          parts.entries.aminoglykoside,
          parts.entries.lincosamide,
          parts.entries.oxazolidinone,
        ],
      },
    ],
  };
})();

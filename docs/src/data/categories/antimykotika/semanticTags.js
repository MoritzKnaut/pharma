(function () {
  var shared = window.pharmaAtlasShared || {};
  var parts = shared.getCategoryParts("antimykotika");

  parts.semanticTags = [
    { label: "Hefen", tone: "yeasts", match: /\bhefen?\b|candida/ },
    { label: "Schimmel", tone: "molds", match: /schimmel|aspergill/ },
    { label: "Dermatophyten", tone: "dermatophytes", match: /dermatophyt/ },
    { label: "Kryptokokken", tone: "cryptococci", match: /kryptokokk/ },
    { label: "Onychomykose", tone: "onychomycosis", match: /onychomykos/ },
  ];
})();

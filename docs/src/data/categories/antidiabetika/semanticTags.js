(function () {
  var shared = window.pharmaAtlasShared || {};
  var parts = shared.getCategoryParts("antidiabetika");

  parts.semanticTags = [
    {
      label: "Pankreatitis-Risiko",
      tone: "pancreatitis",
      match: /pankreatitis|pankreas/i,
    },
    {
      label: "Ketoazidose",
      tone: "cave-risk",
      match: /ketoazidose/i,
    },
  ];
})();

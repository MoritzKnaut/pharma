(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antibiotika");

  parts.overgroups.folsaeuremetabolismus = {
    id: "folsaeuremetabolismus",
    kind: "antibiotic",
    theme: themes.magenta,
    title: "Folsäuremetabolismus",
    kicker: "Stoffwechselblockade",
    description: "",
    sections: [
      {
        id: "folsaeurestoffwechsel-hemmer",
        type: "entries",
        hideTitle: true,
        title: "Folsäurestoffwechsel-Hemmer",
        description: "",
        entries: [
          parts.entries.sulfonamide,
          parts.entries.trimethoprim,
          parts.entries.cotrimoxazol,
        ],
      },
    ],
  };
})();

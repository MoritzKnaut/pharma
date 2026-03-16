(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("virostatika");

  parts.overgroups.hivTherapie = {
    id: "hiv-therapie",
    kind: "section",
    theme: themes.violet,
    title: "Antiretrovirale Therapie bei HIV",
    sections: [
      {
        id: "hiv-wirkstoffgruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          parts.entries.nrti,
          parts.entries.nnrti,
          parts.entries.proteaseInhibitoren,
          parts.entries.integraseInhibitoren,
        ],
      },
    ],
  };
})();

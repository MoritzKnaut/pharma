(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("virostatika");

  parts.overgroups.herpesviridae = {
    id: "herpesviridae",
    kind: "antiviral",
    theme: themes.rose,
    title: "Antivirale Pharmaka gegen Herpesviridae",
    kicker: "DNA-Viren",
    description: "",
    sections: [
      {
        id: "herpesviridae-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          parts.entries.dnaPolymeraseInhibitorenHerpes,
          parts.entries.antisenseOligonukleotide,
        ],
      },
    ],
  };
})();

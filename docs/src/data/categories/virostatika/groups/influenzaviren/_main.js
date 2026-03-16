(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("virostatika");

  parts.overgroups.influenzaviren = {
    id: "influenzaviren",
    kind: "section",
    theme: themes.navy,
    title: "Antivirale Pharmaka gegen Influenzaviren",
    sections: [
      {
        id: "influenza-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [
          parts.entries.ionenkanalblocker,
          parts.entries.neuraminidaseHemmer,
        ],
      },
    ],
  };
})();

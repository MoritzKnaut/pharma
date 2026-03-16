(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("virostatika");

  parts.overgroups.hepatitisBundC = {
    id: "hepatitis-b-und-c",
    kind: "section",
    theme: themes.amber,
    title: "Antivirale Pharmaka gegen Hepatitis B und C",
    sections: [
      {
        id: "hepatitis-b",
        type: "entries",
        title: "Hepatitis B",
        description: "",
        entries: [
          parts.entries.nukleotidanalogaHepatitis,
          parts.entries.nukleosidanalogaHepatitis,
        ],
      },
      {
        id: "interferon-alpha",
        type: "entries",
        title: "(PEG-)Interferon-α",
        description: "",
        entries: [
          parts.entries.interferonAlpha,
        ],
      },
      {
        id: "hepatitis-c",
        type: "entries",
        title: "Hepatitis C",
        description: "",
        entries: [
          parts.entries.ns3ProteaseInhibitoren,
          parts.entries.ns5aInhibitoren,
          parts.entries.ns5bInhibitoren,
          parts.entries.ribavirin,
        ],
      },
    ],
  };
})();

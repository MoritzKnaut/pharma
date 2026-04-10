(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antidiabetika");

  parts.overgroups.hypoglykaemie = {
    id: "hypoglykaemie",
    kind: "section",
    theme: themes.rose,
    title: "Hypoglykämie",
    kicker: "Sulfonylharnstoffe und Glinide",
    sections: [
      {
        id: "hypoglykaemie-gruppen",
        type: "entries",
        title: "Wirkstoffgruppen",
        hideTitle: true,
        description: "",
        entries: [parts.entries.sulfonylharnstoffe, parts.entries.glinide].filter(Boolean),
      },
    ],
  };
})();

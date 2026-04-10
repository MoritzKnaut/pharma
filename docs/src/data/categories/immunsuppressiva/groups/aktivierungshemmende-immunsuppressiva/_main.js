(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("immunsuppressiva");

  parts.overgroups.aktivierungshemmendeImmunsuppressiva = {
    id: "aktivierungshemmende-immunsuppressiva",
    kind: "section",
    theme: themes.blue,
    title: "Aktivierungshemmende Immunsuppressiva",
    kicker: "Blockade zentraler Aktivierungs- und Wachstumssignale von Lymphozyten",
    sections: [
      {
        id: "aktivierungshemmende-immunsuppressiva-gruppen",
        type: "entries",
        hideTitle: true,
        entries: [
          parts.entries.calcineurinInhibitoren,
          parts.entries.mtorInhibitoren
        ].filter(Boolean)
      }
    ]
  };
})();

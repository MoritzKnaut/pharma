(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("immunsuppressiva");

  parts.overgroups.zytostatischeZytotoxischeImmunsuppressiva = {
    id: "zytostatische-zytotoxische-immunsuppressiva",
    kind: "section",
    theme: themes.navy,
    title: "Zytostatische / zytotoxische Immunsuppressiva",
    kicker: "Klassische Proliferationshemmung aktivierter Lymphozyten",
    sections: [
      {
        id: "zytostatische-zytotoxische-immunsuppressiva-gruppen",
        type: "entries",
        hideTitle: true,
        entries: [
          parts.entries.antimetaboliteDerNukleotidsynthese,
          parts.entries.pyrimidinsynthesehemmung,
          parts.entries.zytostatischeAlkylanzien
        ].filter(Boolean)
      }
    ]
  };
})();

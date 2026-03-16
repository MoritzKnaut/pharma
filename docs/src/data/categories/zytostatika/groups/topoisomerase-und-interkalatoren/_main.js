(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("zytostatika");

  parts.overgroups.topoisomeraseUndInterkalatoren = {
    id: "topoisomerase-und-interkalatoren",
    kind: "section",
    theme: themes.blue,
    title: "Topoisomerase-Hemmstoffe & Interkalatoren",
    sections: [
      {
        id: "topoisomerase-hemmstoffe",
        type: "entries",
        hideTitle: true,
        title: "Topoisomerase-Hemmstoffe & Interkalatoren",
        description: "Hemmung der Topoisomerasen und/oder Interkalation in die DNA",
        entries: [
          parts.entries.anthracycline,
          parts.entries.topoisomeraseI,
          parts.entries.topoisomeraseII,
        ],
      },
    ],
  };
})();

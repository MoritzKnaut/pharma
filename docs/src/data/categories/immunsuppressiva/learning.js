(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var fact = shared.fact;
  var referenceItem = shared.referenceItem;
  var parts = shared.getCategoryParts("immunsuppressiva");

  parts.overgroups.learning = {
    id: "immunsuppressiva-lernuebersichten",
    kind: "links",
    includeInLearningLookup: false,
    theme: themes.neutral,
    title: "Lernübersichten",
    sections: [
      {
        id: "immunsuppressiva-anhand-indikationen",
        type: "quickReference",
        title: "Anhand Indikationen",
        description: "Schnelle Orientierung nach Erkrankungen",
        cards: [
          {
            title: "Rheumatoide Arthritis",
            items: [
              referenceItem("TNF-Inhibitoren", "TNF-Inhibitoren"),
              referenceItem("IL1-Inhibitoren", "IL1-Inhibitoren"),
              referenceItem("IL6-Inhibitoren", "IL6-Inhibitoren"),
              referenceItem("CD-gezielte Antikörper", "CD-gezielte Antikörper", "Rituximab"),
              referenceItem("Aminosalicylate", "Aminosalicylate", "Sulfasalazin"),
              referenceItem("Januskinase-Inhibitoren", "Januskinase-Inhibitoren"),
              referenceItem("Hydroxychloroquin", "Hydroxychloroquin")
            ]
          },
          {
            title: "Multiple Sklerose",
            items: [
              referenceItem("Integrin-Inhibitoren", "Integrin- und IgE-Inhibitoren", "Natalizumab"),
              referenceItem("CD52-Inhibitoren", "CD-gezielte Antikörper", "Alemtuzumab"),
              referenceItem("Dimethylfumarat", "Dimethylfumarat"),
              referenceItem("Glatirameracetat", "Glatirameracetat")
            ]
          },
          {
            title: "Chronisch-entzündliche Darmerkrankungen",
            items: [
              referenceItem("TNF-Inhibitoren", "TNF-Inhibitoren"),
              referenceItem("Aminosalicylate", "Aminosalicylate"),
              referenceItem("IL12/23-Inhibitoren", "Weitere IL-Inhibitoren", "Ustekinumab"),
              referenceItem("Januskinase-Inhibitoren", "Januskinase-Inhibitoren", "Tofacitinib")
            ]
          },
          {
            title: "Transplantation",
            items: [
              referenceItem("CD3-Inhibitoren", "CD-gezielte Antikörper", "Muromonab"),
              referenceItem("CD25-Inhibitoren", "CD-gezielte Antikörper", "Basiliximab")
            ]
          },
          {
            title: "Asthma",
            items: [
              referenceItem("IgE-Inhibitoren", "Integrin- und IgE-Inhibitoren", "Omalizumab"),
              referenceItem("IL5-Inhibitoren", "Weitere IL-Inhibitoren", "Mepolizumab")
            ]
          },
          {
            title: "Onkologie/Hämatologie",
            items: [
              referenceItem("CD20-Inhibitoren", "CD-gezielte Antikörper", "Rituximab"),
              referenceItem("CD52-Inhibitoren", "CD-gezielte Antikörper", "Alemtuzumab")
            ]
          }
        ]
      }
    ]
  };
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var referenceItem = shared.referenceItem;
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("antidiabetika");

  parts.overgroups.learning = {
    id: "antidiabetika-lernuebersichten",
    kind: "links",
    includeInLearningLookup: false,
    theme: themes.neutral,
    title: "Links",
    sections: [
      {
        id: "antidiabetika-merkhilfen",
        type: "quickReference",
        title: "Merkhilfen",
        layout: "wide",
        description: "",
        cards: [
          {
            title: "Sensitivität",
            items: [
              referenceItem("Biguanide", "Biguanide", "Metformin"),
              referenceItem("Glitazone", "Glitazone", "Pioglitazon"),
            ],
            focusLabel: "Merke",
            focusItems: [fact("Spüre die riesige Big-Glitterexplosion", "Biguanide + Glitazone")],
          },
          {
            title: "Hypoglykämie",
            items: [
              referenceItem("Sulfonylharnstoffe", "Sulfonylharnstoffe"),
              referenceItem("Glinide", "Glinide"),
            ],
            focusLabel: "Merke",
            focusItems: [fact("Super-Klinik", "Sulfonylharnstoffe + Glinide")],
            warningLabel: "Cave",
            warningItems: [fact("Viel Insulin", "relevante Hypoglykämiegefahr")],
          },
          {
            title: "Abnehmen",
            items: [
              referenceItem("DPP-4-Hemmer", "DPP-4-Hemmer"),
              referenceItem("GLP-1-Rezeptoragonisten", "GLP-1-Rezeptoragonisten"),
            ],
            focusLabel: "Merke",
            focusItems: [fact("Glibber-Glut", "Gliptine + Glutide")],
          },
          {
            title: "Darm und Urin",
            items: [
              referenceItem("SGLT2-Hemmer", "SGLT2-Hemmer"),
              referenceItem("α-Glukosidase-Hemmer", "α-Glukosidase-Hemmer", "Acarbose"),
            ],
            focusLabel: "Merke",
            focusItems: [fact("PipiKacka-Glitzerfrosch-Hose", "Gliflozine + Acarbose")],
          },
        ],
      },
    ],
  };
})();

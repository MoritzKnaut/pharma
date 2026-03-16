(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;
  var referenceItem = shared.referenceItem;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.tnfInhibitoren = entry("TNF-Inhibitoren", {
    layout: "wide",
    variantsKind: "substances",
    mechanism: [
      fact("Hemmung von TNF-α"),
      fact("Verminderte Produktion proinflammatorischer Zytokine und Akute-Phase-Proteine"),
      fact("Reduzierte Zellmigration von Lymphozyten zu Entzündungsherden")
    ],
    indications: [
      fact("Rheumatoide Arthritis", "therapierefraktär"),
      fact("Morbus Crohn"),
      fact("Colitis ulcerosa"),
      fact("Spondylitis ankylosans"),
      fact("Psoriasis-Arthritis")
    ],
    cautions: [
      fact("Vor Therapie: Ausschluss schwerer Herzinsuffizienz", "NYHA-Klasse III/IV"),
      fact("Während Therapie: Beachten von B-Symptomatik und Lymphknotenstatus"),
      fact("Achtung auf Zeichen eines SLE")
    ],
    variants: [
      {
        name: "Infliximab",
        mechanism: [fact("Chimärer monoklonaler Antikörper")]
      },
      {
        name: "Adalimumab",
        mechanism: [fact("Humaner monoklonaler Antikörper")]
      },
      {
        name: "Etanercept",
        mechanism: [fact("TNF-Rezeptor-Fusionsprotein")]
      }
    ]
  });
})();

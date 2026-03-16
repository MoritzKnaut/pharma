(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.il1Inhibitoren = entry("IL1-Inhibitoren", {
    layout: "wide",
    variantsKind: "substances",
    mechanism: [
      fact("Bindung an IL1-Rezeptor oder IL1β"),
      fact("Reduktion proinflammatorischer Wirkung")
    ],
    indications: [
      fact("Rheumatoide Arthritis"),
      fact("Periodische Fiebersyndrome", "Still-Syndrom, familiäres Mittelmeerfieber, CAPS"),
      fact("Systemische juvenile idiopathische Arthritis")
    ],
    variants: [
      {
        name: "Anakinra",
        mechanism: [fact("IL1R-Antagonist", "Bindung an IL1-Rezeptor Typ 1, Hemmung von IL1α und IL1β")],
        indications: [
          fact("Schwere COVID-19", "unter Steroid- und Sauerstofftherapie")
        ]
      },
      {
        name: "Canakinumab",
        mechanism: [fact("Spezifisch für IL1β"), fact("Bindung an IL1-Subtyp IL1β")],
        indications: [
          fact("Gicht"),
          fact("Atherosklerose", "off-label bei chronisch-entzündlicher Komponente")
        ]
      }
    ]
  });
})();

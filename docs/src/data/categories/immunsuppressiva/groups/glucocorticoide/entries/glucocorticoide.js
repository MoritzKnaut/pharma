(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.glucocorticoide = entry("Glucocorticoide", {
    layout: "wide",
    substances: ["Prednisolon", "Methylprednisolon", "Budesonid"],
    mechanism: [
      fact("Hemmung proinflammatorischer Zytokinexpression"),
      fact("Reduzierte Aktivierung und Funktion von Lymphozyten")
    ],
    indications: [
      fact("Akute Autoimmun-Schübe"),
      fact("Transplantation"),
      fact("Chronisch-entzündliche Darmerkrankungen")
    ],
    sideEffects: [
      fact("Infektanfälligkeit"),
      fact("Hyperglykämie"),
      fact("Osteoporose"),
      fact("Cushing-ähnliche Effekte")
    ]
  });
})();

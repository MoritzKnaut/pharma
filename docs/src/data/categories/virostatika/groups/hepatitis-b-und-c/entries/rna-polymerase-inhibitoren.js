(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("virostatika");
  parts.entries = parts.entries || {};

  parts.entries.rnaPolymeraseInhibitoren = entry("RNA-Polymerase-Inhibitoren", {
    substances: ["Ribavirin"],
    mechanism: [
      fact("Guanosinanalogon"),
      fact("Hemmung der RNA-abhängigen RNA-Polymerase"),
      fact("Induktion von Fehlern in der viralen RNA-Synthese")
    ],
    indications: [
      fact("Hepatitis C", "nur in Kombination mit direkt antiviral wirkenden Substanzen")
    ],
    sideEffects: [
      fact("Hämolytische Anämie"),
      fact("Teratogenität", "strikt kontraindiziert in der Schwangerschaft")
    ],
    remember: [
      fact("Ribavirin-freie Regime werden bevorzugt", "aufgrund der NW-Profil")
    ]
  });
})();

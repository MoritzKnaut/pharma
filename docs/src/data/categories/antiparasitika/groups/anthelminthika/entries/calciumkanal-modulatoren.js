(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("antiparasitika");
  parts.entries = parts.entries || {};

  parts.entries.calciumkanalModulatoren = entry("Calciumkanal-Modulatoren", {
    substances: ["Praziquantel"],
    mechanism: [
      fact("Erhöhte Aufnahme von Calcium durch Muskelkontraktion"),
      fact("Kontraktur und Lähmung der Parasitenmuskulatur")
    ],
    indications: [
      fact("Trematodenerkrankungen"),
      fact("Cestodenerkrankungen")
    ],
    sideEffects: [
      fact("Müdigkeit"),
      fact("Schwindel"),
      fact("Gastrointestinale Beschwerden")
    ]
  });
})();

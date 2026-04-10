(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.s1pRezeptorModulatoren = entry("S1P-Rezeptor-Modulatoren", {
    layout: "wide",
    variantsKind: "substances",
    variants: [
      {
        name: "Fingolimod",
        mechanism: [
          fact("Sphingosin-1-phosphat-Rezeptor-Agonist"),
          fact("Lymphozyten werden in lymphatischen Organen zurückgehalten"),
          fact("Migration in Entzündungsgebiete sinkt")
        ],
        indications: [
          fact("Multiple Sklerose")
        ],
        sideEffects: [
          fact("Infektionen", "vor allem Sinusitis und Influenza"),
          fact("Husten"),
          fact("Diarrhö"),
          fact("Rückenschmerzen"),
          fact("Erhöhte Leberenzyme")
        ]
      }
    ]
  });
})();

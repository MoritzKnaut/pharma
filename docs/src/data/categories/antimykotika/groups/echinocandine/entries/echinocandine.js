(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("antimykotika");
  parts.entries = parts.entries || {};
  parts.entries.echinocandineEntry = entry("Echinocandine", {
    substances: ["Caspofungin", "Anidulafungin", "Micafungin"],
    mechanism: [fact("Echinocandine: Hemmung der Beta-(1,3)-Glucan-Synthese")],
    effectiveAgainst: [
      fact("Hefen", "invasive Candidose"),
      fact("Schimmelpilze", "Aspergillose"),
      fact(
        "Empirische Therapie",
        "bei V.a. systemische Pilzinfektion unter Neutropenie"
      ),
    ],
    remember: [
      fact("Intravenös"),
      fact("Caspofungin ist ein typischer Vertreter dieser Gruppe"),
      fact("Anidulafungin und Micafungin haben ein ähnliches Wirkspektrum"),
    ],
  });
})();

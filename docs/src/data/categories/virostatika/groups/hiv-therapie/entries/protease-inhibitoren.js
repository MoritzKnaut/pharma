(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("virostatika");

  parts.entries = parts.entries || {};

  parts.entries.proteaseInhibitoren = entry("Protease-Inhibitoren", {
    substances: ["Darunavir", "Atazanavir", "Lopinavir", "Tipranavir"],
    mechanism: [
      fact(
        "Hemmung der katalytischen Protease-Aktivität",
        "verhindert die Bildung reifer infektiöser Viruspartikel"
      ),
    ],
    remember: [fact("Enden meist auf -navir")],
  });
})();

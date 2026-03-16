(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antiparasitika");

  parts.entries = parts.entries || {};
  parts.entries.antimykotikaBeiProtozoen = entry("Antimykotika bei Protozoen", {
    substances: ["Amphotericin B", "Ketoconazol", "Itraconazol"],
    effectiveAgainst: [fact("Leishmaniose")],
    notes: [
      fact(
        "Diese Wirkstoffe sind eigentlich Antimykotika, werden hier aber wegen ihrer Anwendung bei Leishmaniose mitgeführt"
      ),
    ],
  });
})();

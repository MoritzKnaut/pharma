(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.trimethoprim = entry("Trimethoprim", {
    substances: ["Trimethoprim"],
    mechanism: [
      fact(
        "Hemmung der bakteriellen Folsäuresynthese",
        "Blockade der Dihydrofolatreduktase"
      ),
    ],
    otherInfo: [
      fact(
        "Trimethoprim wird meist nicht allein, sondern zusammen mit Sulfamethoxazol als Cotrimoxazol eingesetzt",
        null,
        {
          muted: true,
        }
      ),
    ],
  });
})();

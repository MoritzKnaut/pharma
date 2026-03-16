(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("zytostatika");

  parts.entries = parts.entries || {};
  parts.entries.taxane = entry("Taxane", {
    layout: "wide",
    substances: ["Docetaxel", "Paclitaxel", "Nab-Paclitaxel"],
    mechanism: [
      fact(
        "Mikrotubuli-Stabilisierung",
        "Spindelapparat↓ → Stillstand der Mitose in der Metaphase"
      ),
    ],
    indications: [
      fact("Mammakarzinom"),
      fact("Ovarialkarzinom"),
      fact("Prostatakarzinom"),
      fact("Magenkarzinom"),
      fact("Lungenkarzinom"),
    ],
    sideEffects: [
      fact("Myelotoxizität"),
      fact("Lungenfibrose"),
      fact("Periphere Neuropathie"),
    ],
    additional: [
      fact("Docetaxel", "1. Wahl bei kastrationsresistentem Prostatakarzinom"),
      fact("Cabazitaxel", "2. Wahl bei kastrationsresistentem Prostatakarzinom nach Docetaxel"),
    ],
  });
})();

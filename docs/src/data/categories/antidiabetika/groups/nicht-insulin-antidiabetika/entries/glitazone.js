(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;
  var parts = shared.getCategoryParts("antidiabetika");

  parts.entries = parts.entries || {};
  parts.entries.glitazone = entry("Glitazone", {
    substances: ["Pioglitazon"],
    mechanism: [
      fact("PPAR-γ-Aktivierung"),
      fact("↑ Insulinsensitivität", "v.a. in Fett- und Muskelgewebe"),
    ],
    sideEffects: [
      fact("Gewichtszunahme"),
      fact("Ödeme / kardiale Dekompensation"),
      fact("Frakturrisiko↑"),
    ],
    cave: [
      fact("Herzinsuffizienz"),
      fact("Schwere Leberinsuffizienz"),
      fact("Harnblasenkarzinom oder Makrohämaturie"),
    ],
    remember: [fact("Endung: -glitazon")],
  });
})();

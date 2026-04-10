(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;
  var parts = shared.getCategoryParts("antidiabetika");

  parts.entries = parts.entries || {};
  parts.entries.sulfonylharnstoffe = entry("Sulfonylharnstoffe", {
    substances: ["Glibenclamid", "Glimepirid"],
    mechanism: [
      fact("Blockade des KATP-Kanals der β-Zelle"),
      fact("↑ Insulinfreisetzung"),
    ],
    sideEffects: [
      fact("Hypoglykämie", "höchstes Risiko unter den oralen Antidiabetika"),
      fact("Gewichtszunahme"),
      fact("Blutbildveränderungen", "selten bis schwer"),
    ],
    cave: [
      fact("Schwere Nieren- oder Leberinsuffizienz"),
      fact("Schwere kardiovaskuläre Komorbidität"),
      fact("Adipositas"),
    ],
    remember: [fact("Endungen oft auf -clamid oder -pirid")],
  });
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;
  var parts = shared.getCategoryParts("antidiabetika");

  parts.entries = parts.entries || {};
  parts.entries.biguanide = entry("Biguanide", {
    substances: ["Metformin"],
    mechanism: [
      fact("↓ hepatische Glukoneogenese"),
      fact("↑ Insulinsensitivität"),
      fact("Keine Insulinsekretionssteigerung"),
    ],
    sideEffects: [
      fact("GI-Beschwerden", "v.a. Diarrhö und Bauchkrämpfe"),
      fact("Laktatazidose", "selten, aber gefährlich"),
      fact("Gewichtsabnahme", "oft eher günstig"),
    ],
    cave: [
      fact("Akute Nierenfunktionsstörung oder GFR <30 mL/min"),
      fact("Hypoxämische oder azidotische Stoffwechsellage"),
      fact("Herzinsuffizienz NYHA III-IV / respiratorische Insuffizienz"),
      fact("Alkoholismus"),
    ],
    remember: [fact("Endung: -formin")],
  });
})();

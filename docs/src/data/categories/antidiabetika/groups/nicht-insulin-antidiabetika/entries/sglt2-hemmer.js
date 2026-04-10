(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;
  var parts = shared.getCategoryParts("antidiabetika");

  parts.entries = parts.entries || {};
  parts.entries.sglt2Hemmer = entry("SGLT2-Hemmer", {
    substances: ["Dapagliflozin", "Empagliflozin", "Ertugliflozin"],
    mechanism: [
      fact("Hemmung des SGLT2 im proximalen Tubulus"),
      fact("↑ renale Glukoseausscheidung"),
    ],
    sideEffects: [
      fact("Genitalmykosen / Harnwegsinfektionen"),
      fact("Polyurie / Exsikkose"),
      fact("Diabetische Ketoazidose", "auch bei Typ-2-Diabetes möglich"),
    ],
    cave: [
      fact("Fortgeschrittene chronische Nierenkrankheit"),
      fact("Diabetes mellitus Typ 1"),
      fact("Rezidivierende Harnwegsinfektionen"),
      fact("Schwangerschaft und Stillzeit"),
    ],
    additional: [
      fact("Kardioprotektiv", "bei Herzinsuffizienz"),
      fact("Nephroprotektiv", "bei chronischer Nierenkrankheit"),
    ],
    remember: [fact("Endung: -gliflozin")],
  });
})();

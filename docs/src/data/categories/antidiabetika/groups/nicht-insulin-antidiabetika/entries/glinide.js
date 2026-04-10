(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;
  var parts = shared.getCategoryParts("antidiabetika");

  parts.entries = parts.entries || {};
  parts.entries.glinide = entry("Glinide", {
    substances: ["Repaglinid", "Nateglinid"],
    mechanism: [
      fact("↑ Insulinfreisetzung"),
      fact("Kurz wirksam", "v.a. postprandial"),
    ],
    sideEffects: [
      fact("Hypoglykämie"),
      fact("Gewichtszunahme"),
      fact("Hepatotoxizität", "selten"),
    ],
    remember: [fact("Endung: -glinid")],
  });
})();

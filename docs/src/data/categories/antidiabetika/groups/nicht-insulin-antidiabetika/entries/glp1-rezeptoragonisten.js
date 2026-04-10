(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;
  var parts = shared.getCategoryParts("antidiabetika");

  parts.entries = parts.entries || {};
  parts.entries.glp1Rezeptoragonisten = entry("GLP-1-Rezeptoragonisten", {
    substances: ["Exenatid", "Liraglutid", "Semaglutid", "Dulaglutid"],
    mechanism: [
      fact("GLP-1-Rezeptoragonismus"),
      fact("↑ Insulin / ↓ Glukagon", "glukoseabhängig"),
      fact("↓ Magenentleerung"),
      fact("↑ Sättigung"),
    ],
    sideEffects: [
      fact("GI-Beschwerden", "v.a. verzögerte Magenentleerung"),
      fact("Gewichtsabnahme"),
      fact("Pankreatitisrisiko"),
      fact("Warnhinweis", "medulläres Schilddrüsenkarzinom"),
    ],
    cave: [
      fact("Schwere Nierenfunktionsstörung"),
      fact("Chronische Pankreatitis oder positive Familienanamnese"),
      fact("Symptomatische gastrointestinale Motilitätsstörung"),
    ],
    remember: [fact("Endung: -glutid")],
  });
})();

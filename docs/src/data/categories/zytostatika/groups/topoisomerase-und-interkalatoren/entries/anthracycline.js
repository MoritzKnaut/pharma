(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("zytostatika");

  parts.entries = parts.entries || {};
  parts.entries.anthracycline = entry("Anthracycline", {
    layout: "wide",
    substances: ["Doxorubicin", "Daunorubicin", "Idarubicin", "Epirubicin"],
    mechanism: [
      fact(
        "Interkalation in die DNA → Hemmung der Topoisomerase II",
        "DNA-Replikation↓"
      ),
    ],
    indications: [
      fact("Akute Leukämien"),
      fact("Ovarialkarzinom"),
    ],
    sideEffects: [
      fact("Kardiotoxizität"),
    ],
  });
})();

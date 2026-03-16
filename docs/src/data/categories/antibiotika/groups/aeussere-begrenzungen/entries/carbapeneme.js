(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antibiotika");

  parts.entries = parts.entries || {};
  parts.entries.carbapeneme = entry("Carbapeneme", {
    layout: "wide",
    substances: ["Imipenem", "Meropenem", "Ertapenem"],
    mechanism: [
      fact(
        "β-Lactam-Antibiotika: Hemmung der Zellwandsynthese",
        "Bindung an Penicillin-bindende Proteine mit gestörter Peptidoglykan-Synthese"
      ),
      fact("β-Lactamase-fest"),
    ],
    effectiveAgainst: [
      fact(
        "Wirksam gegen grampositive Bakterien",
        "z.B. Streptokokken, Staphylococcus aureus"
      ),
      fact(
        "Wirksam gegen zahlreiche gramnegative Bakterien",
        "teils auch ESBL-Bildner und 3-MRGN"
      ),
      "Wirksam gegen Pseudomonas aeruginosa",
      "Wirksam gegen Nonfermenter",
      "Wirksam gegen Anaerobier",
    ],
    additional: [fact("Meropenem wirkt etwas schwächer gegen grampositive Bakterien")],
  });
})();

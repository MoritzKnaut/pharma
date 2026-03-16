(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("virostatika");

  parts.entries = parts.entries || {};

  parts.entries.interferonAlpha = entry("Interferon-α", {
    mechanism: [
      fact(
        "Antiviral und immunmodulatorisch",
        "über inter- und intrazelluläre Mechanismen"
      ),
    ],
    effectiveAgainst: [fact("Akute Hepatitis C"), fact("Chronische Hepatitis B")],
    remember: [fact("Heute nur noch selten oder bei speziellen Indikationen")],
  });
})();

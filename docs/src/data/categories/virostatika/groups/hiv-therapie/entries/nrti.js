(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("virostatika");

  parts.entries = parts.entries || {};

  parts.entries.nrti = entry("NRTI", {
    mechanism: [
      fact(
        "Kompetitive Hemmung der reversen Transkription",
        "Kettenabbruch nach Einbau in neu synthetisierte DNA-Stränge"
      ),
    ],
    notes: [
      fact("Nukleosidische und nukleotidische Reverse-Transkriptase-Inhibitoren"),
      fact("Enden meist auf -in"),
    ],
    variants: [
      {
        name: "NsRTI",
        substances: ["Emtricitabin", "Lamivudin", "Abacavir", "Zidovudin"],
      },
      {
        name: "NtRTI",
        substances: ["Tenofovir"],
      },
    ],
  });
})();

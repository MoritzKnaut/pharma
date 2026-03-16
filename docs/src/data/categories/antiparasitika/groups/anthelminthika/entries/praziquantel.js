(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("antiparasitika");

  parts.entries = parts.entries || {};
  parts.entries.praziquantel = entry("Praziquantel", {
    mechanism: [fact("Vermehrter Calciumeinstrom durch die Wurmoberfläche")],
    effectiveAgainst: [
      fact("Trematoden", "z.B. Schistosomiasis"),
      fact("Cestoden", "z.B. Taenia-Infektionen, Diphyllobothriasis"),
    ],
    remember: [fact("Bei den meisten Würmern reicht eine Einmalgabe aus")],
  });
})();

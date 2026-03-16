(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.hydroxychloroquin = entry("Hydroxychloroquin", {
    mechanism: [
      fact("Wirkmechanismus nicht vollständig geklärt"),
      fact("Vermutlich Inhibition von Toll-like-Rezeptoren", "auf dendritischen Zellen unter Entzündung"),
      fact("Verminderte Produktion von Interferon"),
      fact("Verminderte Reifung dendritischer Zellen")
    ],
    indications: [
      fact("Malaria"),
      fact("Systemischer Lupus erythematodes"),
      fact("Diskoider Lupus erythematodes"),
      fact("Rheumatoide Arthritis")
    ],
    sideEffects: [
      fact("Gastrointestinale Beschwerden"),
      fact("Hornhauttrübung, Gesichtsfeldeinschränkung", "insb. nach langjähriger Nutzung"),
      fact("Regelmäßige ophthalmologische Kontrollen notwendig")
    ]
  });
})();

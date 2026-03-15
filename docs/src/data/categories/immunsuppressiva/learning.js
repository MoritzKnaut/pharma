(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("immunsuppressiva");

  parts.overgroups.learning = {
    id: "immunsuppressiva-lernuebersichten",
    kind: "learning",
    includeInLearningLookup: false,
    theme: themes.neutral,
    title: "Lernübersichten",
    kicker: "Schneller Zugriff",
    description:
      "Die Struktur für indikationsbasierte Übersichten ist vorbereitet. Fachinhalte folgen später.",
    sections: [
      {
        id: "immunsuppressiva-anhand-indikationen",
        type: "referenceIndex",
        source: "indications",
        title: "Anhand Indikationen",
        description:
          "Sobald Wirkstoffgruppen gepflegt sind, erscheint hier automatisch die gedrehte Sicht nach Indikationen.",
        emptyState:
          "Noch keine Immunsuppressiva eingetragen. Pflege die Daten direkt in dieser Kategorie-Datei.",
      },
    ],
  };
})();

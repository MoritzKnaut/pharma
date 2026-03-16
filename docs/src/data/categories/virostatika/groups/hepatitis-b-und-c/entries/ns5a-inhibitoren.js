(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("virostatika");

  parts.entries = parts.entries || {};

  parts.entries.ns5aInhibitoren = entry("NS5A-Inhibitoren", {
    substances: ["Ledipasvir", "Elbasvir", "Velpatasvir", "Pibrentasvir"],
    effectiveAgainst: [fact("Hepatitis C", "Kombinationstherapie")],
  });
})();

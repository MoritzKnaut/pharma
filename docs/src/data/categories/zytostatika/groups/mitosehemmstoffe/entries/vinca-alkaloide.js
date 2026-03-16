(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var parts = shared.getCategoryParts("zytostatika");

  parts.entries = parts.entries || {};
  parts.entries.vincaAlkaloide = entry("Vinca-Alkaloide", {
    layout: "wide",
    substances: ["Vincristin", "Vinblastin"],
    mechanism: [
      fact(
        "Bindung und Zerstörung von Tubulin der Mikrotubuli",
        "Stillstand der Mitose in der Metaphase"
      ),
    ],
    indications: [
      fact("Lymphome"),
      fact("Wilms-Tumor"),
    ],
    sideEffects: [
      fact("Neurotoxizität", "vor allem Vincristin führt zur (peripheren) Neuropathie"),
    ],
  });
})();

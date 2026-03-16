(function () {
  var shared = window.pharmaAtlasShared || {};
  var fact = shared.fact;
  var entry = shared.entry;
  var variant = shared.variant;
  var parts = shared.getCategoryParts("zytostatika");

  parts.entries = parts.entries || {};
  parts.entries.alkylanzien = entry("Alkylanzien", {
    layout: "wide",
    variantsKind: "subgroups",
    variants: [
      variant("Oxazaphosphorine", {
        substances: ["Cyclophosphamid", "Ifosfamid"],
        mechanism: [
          fact(
            "Alkylierung von DNA/RNA",
            "Vernetzung und Strangbrüche → DNA-Synthese gestört"
          ),
        ],
        indications: [
          fact("Leukämien"),
          fact("Multiples Myelom"),
          fact("Gynäkologische Tumoren", "bei Ifosfamid"),
          fact("Lungenkarzinom", "bei Ifosfamid"),
        ],
        sideEffects: [
          fact(
            "Hämorrhagische Zystitis",
            "Prophylaktische Gabe von Mesna (2-Mercaptoethansulfonat-Natrium) und Flüssigkeit"
          ),
          fact("Myelosuppression"),
        ],
      }),
      variant("N-Lost-Derivate", {
        substances: ["Chlorambucil", "Melphalan"],
        mechanism: [
          fact(
            "Alkylierung von DNA/RNA",
            "Vernetzung und Strangbrüche → DNA-Synthese gestört"
          ),
        ],
        indications: [
          fact("Multiples Myelom"),
          fact("CLL, CML"),
        ],
        sideEffects: [
          fact("Selten Lungenfibrose"),
        ],
      }),
      variant("Alkylsulfonate", {
        substances: ["Busulfan"],
        mechanism: [
          fact(
            "Alkylierung von DNA/RNA",
            "Vernetzung und Strangbrüche → DNA-Synthese gestört"
          ),
        ],
      }),
      variant("Hydrazine", {
        substances: ["Temozolomid", "Dacarbazin", "Procarbazin"],
        mechanism: [
          fact(
            "Alkylierung von DNA/RNA",
            "Vernetzung und Strangbrüche → DNA-Synthese gestört"
          ),
        ],
        indications: [
          fact("Glioblastom", "bei Temozolomid"),
        ],
        sideEffects: [
          fact("Emetogen"),
          fact("Myelotoxisch"),
        ],
      }),
    ],
  });
})();

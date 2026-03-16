(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.cdGezielteAntikoerper = entry("CD-gezielte Antikörper", {
    layout: "wide",
    variantsKind: "substances",
    variants: [
      {
        name: "Rituximab",
        mechanism: [
          fact("CD20-Inhibitor"),
          fact("Bindung an CD20-positive Zellen", "Tumorzellen, reife B-Zellen"),
          fact("Zytotoxische Wirkung auf Zielzellen")
        ],
        indications: [
          fact("B-Zell-NHL"),
          fact("CLL"),
          fact("Morbus Waldenström", "symptomatisch"),
          fact("Rheumatoide Arthritis", "therapierefraktär")
        ]
      },
      {
        name: "Muromonab",
        mechanism: [
          fact("CD3-Inhibitor"),
          fact("Bindung an CD3 auf T-Lymphozyten"),
          fact("Zytotoxische Wirkung → Apoptose der T-Zellen")
        ],
        indications: [
          fact("Steroidresistente akute Abstoßungsreaktion", "nach Transplantation")
        ]
      },
      {
        name: "Basiliximab",
        mechanism: [
          fact("CD25-Inhibitor"),
          fact("Bindung an α-Kette des IL2-Rezeptors", "CD25-Antigen auf T-Lymphozyten"),
          fact("Reduzierte Aktivität von T-Lymphozyten")
        ],
        indications: [
          fact("Prophylaxe von Nierenabstoßung", "nach Transplantation, in Kombination mit anderen Immunsuppressiva")
        ]
      },
      {
        name: "Alemtuzumab",
        mechanism: [
          fact("CD52-Inhibitor"),
          fact("Bindung an CD52 auf T- und B-Lymphozyten"),
          fact("Autolyse der Zellen")
        ],
        indications: [
          fact("CLL", "off-label"),
          fact("Multiple Sklerose", "Eskalationstherapie")
        ]
      },
      {
        name: "Abatacept",
        mechanism: [
          fact("CD80/86-CD28-Interaktions-Inhibitor"),
          fact("Inhibition der Costimulation von T-Zellen durch antigenpräsentierende Zellen")
        ],
        indications: [
          fact("Rheumatoide Arthritis", "therapierefraktär")
        ]
      }
    ]
  });
})();

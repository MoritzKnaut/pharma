(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.mtorInhibitoren = entry("mTOR-Inhibitoren", {
    layout: "wide",
    variantsKind: "substances",
    variants: [
      {
        name: "Sirolimus",
        mechanism: [
          fact("Bindung an FKBP-12"),
          fact("Hemmung der mTOR-Kinase", "IL2-vermittelter Zellzyklus und T-Zell-Proliferation sinken")
        ],
        indications: [
          fact("Prophylaxe einer Transplantatabstoßung", "mit Ciclosporin und Glucocorticoiden")
        ],
        sideEffects: [
          fact("Blutbildveränderungen"),
          fact("Elektrolytverluste"),
          fact("Hypertonie"),
          fact("Gastrointestinale Beschwerden")
        ]
      },
      {
        name: "Everolimus",
        mechanism: [
          fact("Bindung an FKBP-12"),
          fact("Hemmung der mTOR-Kinase", "IL2-vermittelter Zellzyklus und T-Zell-Proliferation sinken")
        ],
        indications: [
          fact("Verhinderung einer Transplantatabstoßung"),
          fact("Tumortherapie")
        ],
        sideEffects: [
          fact("Blutbildveränderungen"),
          fact("Elektrolytverluste"),
          fact("Hypercholesterinämie"),
          fact("Hyperglykämie"),
          fact("Gastrointestinale Beschwerden")
        ]
      }
    ]
  });
})();

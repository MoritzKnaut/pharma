(function () {
  var shared = window.pharmaAtlasShared || {};
  var entry = shared.entry;
  var fact = shared.fact;

  var parts = shared.getCategoryParts("immunsuppressiva");
  parts.entries = parts.entries || {};

  parts.entries.antimetaboliteDerNukleotidsynthese = entry("Purinsynthesehemmung (Antimetabolite)", {
    layout: "wide",
    variantsKind: "substances",
    mechanism: [
      fact("Hemmung der De-novo-Nukleotidsynthese"),
      fact("Aktivierte Lymphozyten sind besonders abhängig von dieser Synthese")
    ],
    variants: [
      {
        name: "Methotrexat",
        mechanism: [
          fact("Folsäureantagonist", "Kompetitive Hemmung der Dihydrofolatreduktase"),
          fact("Tetrahydrofolsäure sinkt", "Purinnukleotidsynthese und DNA-Synthese werden gehemmt"),
          fact("Zusätzlich Hemmung der Thymidylat-Synthase", "Auch Pyrimidinsynthese wird reduziert")
        ],
        indications: [
          fact("Aktive rheumatoide Arthritis", "DMARD der 1. Wahl"),
          fact("Juvenile idiopathische Arthritis"),
          fact("Psoriasis vulgaris", "insbesondere Psoriasis en plaque"),
          fact("Onkologische Erkrankungen", "in deutlich höherer Dosierung")
        ],
        sideEffects: [
          fact("Myelosuppression"),
          fact("Mukositis", "vor allem Stomatitis und Enteritis"),
          fact("Infektanfälligkeit"),
          fact("Hepatotoxizität und Nephrotoxizität"),
          fact("Haarausfall"),
          fact("Lungenfibrose")
        ],
        remember: [
          fact("Applikation", "Subkutan oder per os"),
          fact("Bei Autoimmunerkrankungen nur einmal wöchentlich"),
          fact("Rescue-Therapie", "Folsäure oder Folinsäure 24 Stunden nach MTX")
        ]
      },
      {
        name: "Azathioprin",
        mechanism: [
          fact("Prodrug", "Hepatische Metabolisierung zu 6-Mercaptopurin"),
          fact("Einbau als falsches Nukleosid", "Purin-Nukleotid-Synthese und Lymphozytenproliferation werden gehemmt")
        ],
        indications: [
          fact("Organtransplantation", "in Kombination mit anderen Immunsuppressiva"),
          fact("Rheumatoide Arthritis"),
          fact("Autoimmunhepatitis"),
          fact("Myasthenia gravis")
        ],
        sideEffects: [
          fact("Pankreatitis"),
          fact("Hepatitis"),
          fact("Myelosuppression"),
          fact("Erhöhtes Risiko für nicht-melanozytäre Hauttumoren")
        ],
        remember: [
          fact("Allopurinol hemmt die Xanthinoxidase", "Azathioprin-Dosis muss stark reduziert werden"),
          fact("TPMT-Polymorphismus", "Verminderter Abbau erhöht das Toxizitätsrisiko")
        ]
      },
      {
        name: "Mycophenolatmofetil",
        mechanism: [
          fact("Reversible Hemmung der Inosinmonophosphatdehydrogenase"),
          fact("Guanosin-Nukleotidsynthese sinkt", "T- und B-Lymphozyten proliferieren schlechter")
        ],
        indications: [
          fact("Prophylaxe der akuten Transplantatabstoßung", "mit Ciclosporin und Glucocorticoiden"),
          fact("Morbus Behçet"),
          fact("Pemphigus vulgaris"),
          fact("Psoriasis")
        ],
        sideEffects: [
          fact("Übelkeit und Erbrechen"),
          fact("Anämie"),
          fact("Thrombozytopenie")
        ]
      }
    ]
  });
})();

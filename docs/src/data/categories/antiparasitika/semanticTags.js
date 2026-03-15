(function () {
  var shared = window.pharmaAtlasShared || {};
  var parts = shared.getCategoryParts("antiparasitika");

  parts.semanticTags = [
    {
      label: "Protozoen",
      tone: "protozoa",
      match: /protozo|giardi|lamblia|entamoeba|am[oö]b|trichomon/,
    },
    {
      label: "Nematoden",
      tone: "nematodes",
      match: /nematod|ascari|trichin|enterob|oxyuriasis|ancylostomat|strongyloid/,
    },
    {
      label: "Cestoden",
      tone: "cestodes",
      match: /cestod|taenia|echinokokk|diphylloboth/,
    },
    { label: "Trematoden", tone: "trematodes", match: /trematod|schistosom/ },
    { label: "Skabies", tone: "scabies", match: /skabie|scabie/ },
    { label: "Läuse", tone: "lice", match: /laus|lause|pedicul|filzlaus/ },
    { label: "Malaria", tone: "malaria", match: /malaria/ },
    { label: "Leishmaniose", tone: "leishmanio", match: /leishmanio/ },
  ];
})();

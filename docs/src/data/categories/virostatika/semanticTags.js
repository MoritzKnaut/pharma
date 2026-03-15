(function () {
  var shared = window.pharmaAtlasShared || {};
  var parts = shared.getCategoryParts("virostatika");

  parts.semanticTags = [
    {
      label: "Herpes",
      tone: "herpes",
      match: /herpes simplex|herpesvir|aciclovir|valaciclovir/,
    },
    { label: "Varizella zoster", tone: "vzv", match: /varizella|zoster/ },
    { label: "CMV", tone: "cmv", match: /\bcmv\b|zytomegal/ },
    { label: "Influenza", tone: "influenza", match: /influenza|oseltamivir|amantadin/ },
    {
      label: "Hepatitis B",
      tone: "hepatitisb",
      match: /hepatitis b|entecavir|lamivudin|telbivudin|tenofovir|adefovir/,
    },
    {
      label: "Hepatitis C",
      tone: "hepatitisc",
      match: /hepatitis c|sofosbuvir|glecaprevir|grazoprevir|voxilaprevir|paritaprevir|ledipasvir|elbasvir|velpatasvir|pibrentasvir|ribavirin/,
    },
    { label: "HIV", tone: "hiv", match: /\bhiv\b|aids/ },
  ];
})();

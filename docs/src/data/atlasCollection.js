(function () {
  var shared = window.pharmaAtlasShared || {};
  var categories = window.pharmaAtlasCategories || {};

  window.pharmaAtlasCollection = {
    defaultCategoryId: "antibiotika",
    renderer: shared.rendererConfig || {},
    categories: [
      categories.antibiotika,
      categories.antidiabetika,
      categories.antimykotika,
      categories.antiparasitika,
      categories.virostatika,
      categories.immunsuppressiva,
      categories.zytostatika,
    ].filter(Boolean),
  };
})();

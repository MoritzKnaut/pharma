(function () {
  var shared = window.pharmaAtlasShared || {};
  var themes = shared.themes || {};
  var parts = shared.getCategoryParts("immunsuppressiva");

  window.pharmaAtlasCategories = window.pharmaAtlasCategories || {};
  window.pharmaAtlasCategories.immunsuppressiva = {
    id: "immunsuppressiva",
    label: "Immunsuppressiva",
    theme: themes.clay,
    page: {
      title: "Immunsuppressiva",
      subtitle: "Klassische Immunsuppressiva, Biologicals und pleiotrope Immunmodulation",
      intro: "",
      description:
        "Lernübersicht zu Immunsuppressiva: Von zytostatischen und aktivierungshemmenden Wirkstoffen über Migrationshemmer und Glucocorticoide bis zu Biologicals und pleiotropen Immunmodulatoren.",
      navIntro:
        "Klassische Immunsuppressiva, Biologicals und pleiotrope Immunmodulation nach Wirkmechanismen und Indikationen.",
    },
    renderer: {
      semanticTags: parts.semanticTags,
    },
    overgroups: [
      parts.overgroups.learning,
      parts.overgroups.zytostatischeZytotoxischeImmunsuppressiva,
      parts.overgroups.aktivierungshemmendeImmunsuppressiva,
      parts.overgroups.leukozytenmigrationsHemmer,
      parts.overgroups.glucocorticoide,
      parts.overgroups.biologicals,
      parts.overgroups.immunmodulatoren,
    ],
  };
})();

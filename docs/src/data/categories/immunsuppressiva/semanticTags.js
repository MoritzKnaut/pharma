(function () {
  var shared = window.pharmaAtlasShared || {};
  var parts = shared.getCategoryParts("immunsuppressiva");

  parts.semanticTags = [
    { label: "Biological", tone: "biological", match: /biological|antikörper|mab$/i },
    { label: "TNF", tone: "tnf", match: /tnf|infliximab|adalimumab|etanercept/i },
    { label: "IL", tone: "interleukin", match: /interleukin|il-?\d|anakinra|canakinumab|tocilizumab|mepolizumab|ustekinumab/i },
    { label: "Antimetabolit", tone: "antimetabolite", match: /antimetabolit|methotrexat|azathioprin|mycophenolat|leflunomid/i },
    { label: "Calcineurin", tone: "calcineurin", match: /calcineurin|ciclosporin|tacrolimus/i },
    { label: "JAK", tone: "jak", match: /jak|janus|tofacitinib|baricitinib/i },
    { label: "Migration", tone: "migration", match: /migration|s1p|fingolimod|integrin/i },
    { label: "Glucocorticoid", tone: "glucocorticoid", match: /glucocorticoid|prednisolon|methylprednisolon|budesonid/i }
  ];
})();

(function () {
  var shared = window.pharmaAtlasShared || {};
  var parts = shared.getCategoryParts("immunsuppressiva");

  parts.semanticTags = [
    { label: "Biological", tone: "neutral", match: /biological|antikörper|mab$/i },
    { label: "TNF-Inhibitor", tone: "blue", match: /tnf|infliximab|adalimumab|etanercept/i },
    { label: "IL-Inhibitor", tone: "teal", match: /interleukin|il-?\d|anakinra|canakinumab|tocilizumab|mepolizumab|ustekinumab/i },
    { label: "CD-gezielt", tone: "amber", match: /cd\d|rituximab|muromonab|basiliximab|alemtuzumab/i },
    { label: "JAK-Inhibitor", tone: "magenta", match: /jak|janus|tofacitinib|baricitinib/i },
    { label: "Transplantation", tone: "navy", match: /transplantation|abstoßung/i },
    { label: "Autoimmun", tone: "rose", match: /autoimmun|rheumat|lupus|sklerose|psoriasis/i },
    { label: "Kontraindikation", tone: "danger", match: /kontraindikation|absolute|aktive infektion/i }
  ];
})();

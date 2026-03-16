(function () {
  var shared = window.pharmaAtlasShared || {};
  var parts = shared.getCategoryParts("antibiotika");

  parts.semanticTags = [
    { label: "Grampositiv", tone: "grampositive", match: /grampositiv/ },
    { label: "Gramnegativ", tone: "gramnegative", match: /gramnegativ/ },
    { label: "Anaerobier", tone: "anaerobic", match: /\banaerob/ },
    { label: "Aerobier", tone: "aerobic", match: /\baerob/ },
    { label: "Intrazellulär", tone: "intracellular", match: /intrazellul/ },
    { label: "Atypiker", tone: "atypical", match: /atyp/ },
    { label: "Pseudomonas", tone: "pseudomonas", match: /pseudomonas/ },
    { label: "MRSA", tone: "mrsa", match: /mrsa/ },
    { label: "VRE", tone: "vre", match: /\bvre\b/ },
    { label: "Enterokokken", tone: "enterococci", match: /enterokokk/ },
    { label: "Mykobakterien", tone: "mycobacteria", match: /mykobakter/ },
    { label: "Protozoen", tone: "protozoa", match: /protozo/ },
    { label: "Opportunistisch", tone: "opportunistic", match: /opportunist/ },
  ];
})();

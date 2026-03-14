(function () {
  var collection = getLibraryCollection();
  var library = resolveCurrentLibrary(collection);

  if (!library) {
    return;
  }

  var librarySwitcher = document.getElementById("library-switcher");
  var sidePanelIntro = document.querySelector(".side-panel__intro");
  var heroCopy = document.getElementById("hero-copy");
  var pageNav = document.getElementById("page-nav");
  var groupLibrary = document.getElementById("group-library");
  var wirkstoffLookup = buildWirkstoffLookup(library.overgroups);
  var infoBucketNavigationItems = [
    { kind: "substances", label: "Substanzen" },
    { kind: "effectiveness", label: "Wirksamkeit" },
    { kind: "side-effects", label: "Nebenwirkungen" },
    { kind: "mechanism", label: "Wirkmechanismus" },
    { kind: "notes", label: "Merke" },
    { kind: "other", label: "Sonstiges" },
  ];

  updateDocumentMetadata(library);

  if (librarySwitcher) {
    librarySwitcher.innerHTML = renderLibrarySwitcher(collection, library);
  }

  if (sidePanelIntro) {
    sidePanelIntro.textContent = library.page.navIntro || library.page.description || "";
  }

  heroCopy.innerHTML = [
    '<div class="hero__header-row">',
    '<div class="hero__heading-group">',
    "<h2>" + escapeHtml(library.page.title) + "</h2>",
    library.page.subtitle
      ? '<p class="hero__subtitle">' + escapeHtml(library.page.subtitle) + "</p>"
      : "",
    library.page.intro ? "<p>" + escapeHtml(library.page.intro) + "</p>" : "",
    "</div>",
    "</div>",
  ].join("");

  pageNav.innerHTML = renderPageNav(library.overgroups);
  groupLibrary.innerHTML = library.overgroups.map(renderOvergroupPanel).join("");

  setupCollapsibleSections();
  setupGlobalCollapseButtons();
  setupInfoBucketButtons();
  setupOvergroupActionButtons();
  setupActiveNavigation(library.overgroups);

  function getLibraryCollection() {
    if (
      window.medicationLibraryCollection &&
      window.medicationLibraryCollection.libraries &&
      window.medicationLibraryCollection.libraries.length
    ) {
      return window.medicationLibraryCollection;
    }

    if (window.antibioticLibrary) {
      return {
        defaultLibraryId: "antibiotika",
        libraries: [
          Object.assign(
            {
              id: "antibiotika",
              label: "Antibiotika",
            },
            window.antibioticLibrary
          ),
        ],
      };
    }

    return { defaultLibraryId: "", libraries: [] };
  }

  function resolveCurrentLibrary(currentCollection) {
    var libraries = currentCollection.libraries || [];
    var params = new URLSearchParams(window.location.search);
    var requestedLibraryId = params.get("thema");
    var matchedLibrary = libraries.find(function (item) {
      return item.id === requestedLibraryId;
    });

    if (matchedLibrary) {
      return matchedLibrary;
    }

    return (
      libraries.find(function (item) {
        return item.id === currentCollection.defaultLibraryId;
      }) || libraries[0]
    );
  }

  function updateDocumentMetadata(currentLibrary) {
    document.title = currentLibrary.page.title;

    var descriptionMeta = document.querySelector('meta[name="description"]');

    if (descriptionMeta && currentLibrary.page.description) {
      descriptionMeta.setAttribute("content", currentLibrary.page.description);
    }

    document.body.setAttribute("data-library", currentLibrary.id);
  }

  function renderLibrarySwitcher(currentCollection, currentLibrary) {
    return [
      '<section class="library-switcher" aria-label="Thema auswählen">',
      '<p class="page-nav__bucket-label">Thema</p>',
      '<div class="library-switcher__list">',
      currentCollection.libraries
        .map(function (item) {
          return [
            '<a class="library-switcher__link' +
              (item.id === currentLibrary.id ? " is-active" : "") +
              '" href="' +
              escapeHtml(buildLibraryHref(item.id)) +
              '">',
            escapeHtml(item.label),
            "</a>",
          ].join("");
        })
        .join(""),
      "</div>",
      "</section>",
    ].join("");
  }

  function buildLibraryHref(libraryId) {
    var params = new URLSearchParams(window.location.search);

    params.set("thema", libraryId);

    return (
      window.location.pathname +
      "?" +
      params.toString() +
      "#top"
    );
  }

  function renderPageNav(overgroups) {
    return [
      overgroups
        .map(function (overgroup) {
          var overgroupHeading = getOvergroupHeading(overgroup);

          return [
            '<section class="page-nav__group" data-group="' +
              escapeHtml(overgroup.id) +
              '">',
            '<a class="page-nav__top" href="#' +
              escapeHtml(overgroup.id) +
              '" data-nav-target="' +
              escapeHtml(overgroup.id) +
              '">',
            '<span class="page-nav__label">' + escapeHtml(overgroupHeading) + "</span>",
            "</a>",
            '<div class="page-nav__subnav">',
            overgroup.sections
              .map(function (section) {
                return [
                  '<a class="page-nav__sub-link" href="#' +
                    escapeHtml(section.id) +
                    '" data-nav-target="' +
                    escapeHtml(section.id) +
                    '">',
                  escapeHtml(section.title),
                  "</a>",
                ].join("");
              })
              .join(""),
            "</div>",
            "</section>",
          ].join("");
        })
        .join(""),
      renderInfoBucketNavigation(),
    ].join("");
  }

  function renderInfoBucketNavigation() {
    return [
      '<section class="page-nav__bucket-panel">',
      '<p class="page-nav__bucket-label">Seitensteuerung</p>',
      '<div class="page-nav__global-actions">',
      '<button class="header-action-button" id="expand-all-button" type="button">',
      "Alles ausklappen",
      "</button>",
      '<button class="header-action-button" id="reset-collapse-button" type="button">',
      "Alles einklappen",
      "</button>",
      "</div>",
      "</section>",
      '<section class="page-nav__bucket-panel">',
      '<p class="page-nav__bucket-label">Automatisch ausklappen</p>',
      '<div class="page-nav__bucket-list">',
      infoBucketNavigationItems
        .map(function (item) {
          return [
            '<button class="page-nav__bucket" type="button" data-info-bucket="' +
              escapeHtml(item.kind) +
              '" aria-pressed="false">',
            escapeHtml(item.label),
            "</button>",
          ].join("");
        })
        .join(""),
      "</div>",
      "</section>",
    ].join("");
  }

  function renderQuickReferenceCard(card) {
    return [
      '<article class="reference-card" data-collapsible="reference" data-collapsed="true">',
      '<div class="reference-card__header">',
      renderCollapseToggleStart(card.title, "reference", "reference-card__toggle"),
      '<span class="reference-card__heading-copy">',
      renderSemanticTags(card.title),
      renderHeading("h4", card.title, { splitDetail: true }),
      card.description ? "<p>" + escapeHtml(card.description) + "</p>" : "",
      "</span>",
      renderCollapseChevron(),
      "</button>",
      "</div>",
      '<div class="reference-card__body">',
      renderLearningLinkBlock("Typische Optionen", card.items, { tone: "primary" }),
      card.focusItems
        ? renderLearningLinkBlock(card.focusLabel || "Fokus", card.focusItems, {
            tone: "focus",
          })
        : "",
      card.warningItems
        ? renderLearningLinkBlock(card.warningLabel || "Grenzen", card.warningItems, {
            tone: "warning",
          })
        : "",
      "</div>",
      "</article>",
    ].join("");
  }

  function renderClinicalPearl(pearl) {
    var pearlText = pearl.items ? pearl.items.join(" ") : pearl.text;

    return [
      '<article class="pearl-card">',
      renderSemanticTags(pearl.label + " " + pearlText),
      '<div class="pearl-card__header">',
      '<p class="eyebrow">Merksatz</p>',
      renderHeading("h4", pearl.label),
      "</div>",
      pearl.items
        ? renderLearningLinkBlock(null, pearl.items, { compact: true, tone: "primary" })
        : "<p>" + escapeHtml(pearl.text) + "</p>",
      "</article>",
    ].join("");
  }

  function renderOvergroupPanel(overgroup) {
    var overgroupHeading = getOvergroupHeading(overgroup);
    var sectionLinks = overgroup.sections
      .map(function (section) {
        return (
          '<a class="section-link" href="#' +
          escapeHtml(section.id) +
          '">' +
          escapeHtml(section.title) +
          "</a>"
        );
      })
      .join("");

    return [
      '<section class="overgroup panel" id="' +
        escapeHtml(overgroup.id) +
        '" data-group="' +
        escapeHtml(overgroup.id) +
        '"',
      '>',
      '<div class="overgroup__header">',
      '<div class="overgroup__heading">',
      '<div class="overgroup__heading-copy">',
      renderHeading("h2", overgroupHeading),
      overgroup.description ? "<p>" + escapeHtml(overgroup.description) + "</p>" : "",
      "</div>",
      '<div class="overgroup__action-row">',
      '<button class="section-action-button" type="button" data-overgroup-action="expand" data-overgroup-id="' +
        escapeHtml(overgroup.id) +
        '">',
      "Alles ausklappen",
      "</button>",
      '<button class="section-action-button" type="button" data-overgroup-action="collapse" data-overgroup-id="' +
        escapeHtml(overgroup.id) +
        '">',
      "Alles einklappen",
      "</button>",
      "</div>",
      "</div>",
      '</div><div class="overgroup__content">',
      '<div class="section-links">' + sectionLinks + "</div>",
      '<div class="overgroup__sections">',
      overgroup.sections
        .map(function (section) {
          return renderSectionBlock(overgroup, section);
        })
        .join(""),
      "</div>",
      "</div>",
      "</section>",
    ].join("");
  }

  function renderCollapseToggleStart(title, level, className) {
    return [
      '<button class="collapse-toggle collapse-toggle--' +
        escapeHtml(level) +
        " " +
        escapeHtml(className) +
        '" type="button" aria-expanded="true" aria-label="' +
        escapeHtml(title + " ein- oder ausklappen") +
        '">',
    ].join("");
  }

  function renderCollapseChevron() {
    return '<span class="collapse-toggle__icon" aria-hidden="true"></span>';
  }

  function renderSectionBlock(overgroup, section) {
    var sectionClasses = ["content-section", "content-section--" + section.type];
    var sectionBody = "";

    if (section.layout === "wide") {
      sectionClasses.push("content-section--wide");
    }

    if (section.type === "entries") {
      sectionBody =
        '<div class="entry-grid">' +
        section.entries.map(renderEntryCard).join("") +
        "</div>";
    } else if (section.type === "quickReference") {
      sectionBody =
        '<div class="reference-grid">' +
        section.cards.map(renderQuickReferenceCard).join("") +
        "</div>";
    } else if (section.type === "pearls") {
      sectionBody =
        '<div class="pearl-grid">' +
        section.cards.map(renderClinicalPearl).join("") +
        "</div>";
    }

    return [
      '<section class="' +
        sectionClasses.map(escapeHtml).join(" ") +
        '" id="' +
        escapeHtml(section.id) +
        '" data-parent-group="' +
        escapeHtml(overgroup.id) +
        '" data-nav-anchor data-collapsible="section" data-collapsed="true">',
      '<div class="content-section__header">',
      renderCollapseToggleStart(section.title, "section", "content-section__heading"),
      '<span class="content-section__heading-copy">',
      renderHeading("h3", section.title),
      section.description ? "<p>" + escapeHtml(section.description) + "</p>" : "",
      "</span>",
      renderCollapseChevron(),
      "</button>",
      "</div>",
      '<div class="content-section__body">',
      sectionBody,
      "</div>",
      "</section>",
    ].join("");
  }

  function setupCollapsibleSections() {
    var collapsibles = Array.prototype.slice.call(
      document.querySelectorAll("[data-collapsible]")
    );
    var anchorLinks = Array.prototype.slice.call(
      document.querySelectorAll('a[href^="#"]')
    );

    collapsibles.forEach(function (container) {
      var toggle = container.querySelector(".collapse-toggle");

      if (!toggle) {
        return;
      }

      setCollapsed(container, container.getAttribute("data-collapsed") === "true");

      toggle.addEventListener("click", function () {
        var nextCollapsed = container.getAttribute("data-collapsed") !== "true";

        setCollapsed(container, nextCollapsed);

        if (!nextCollapsed) {
          applySelectedInfoBucketState(container);
        }
      });
    });

    anchorLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        handleAnchorNavigationClick(event, link);
      });
    });

    window.addEventListener("hashchange", expandForCurrentHash);
    expandForCurrentHash();
  }

  function expandForCurrentHash() {
    var hash = window.location.hash;

    if (!hash || hash === "#top") {
      return;
    }

    var target = document.getElementById(hash.slice(1));

    if (!target) {
      return;
    }

    collapseAllSections();
    expandAncestors(target);
  }

  function handleAnchorNavigationClick(event, link) {
    var href = link.getAttribute("href");

    if (!href || href === "#top" || href.charAt(0) !== "#") {
      return;
    }

    var target = document.getElementById(href.slice(1));

    if (!target) {
      return;
    }

    event.preventDefault();

    if (target.getAttribute("data-collapsible") === "section") {
      if (target.getAttribute("data-collapsed") !== "true" && window.location.hash === href) {
        setCollapsed(target, true);
        scrollToTarget(target);
        return;
      }

      collapseAllSections();
      expandAncestors(target);
      applySelectedInfoBucketState(target);
      history.replaceState(null, "", href);
      scrollToTarget(target);
      return;
    }

    expandAncestors(target);
    applySelectedInfoBucketState(target);
    history.replaceState(null, "", href);
    scrollToTarget(target);
  }

  function scrollToTarget(target) {
    window.requestAnimationFrame(function () {
      target.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  }

  function collapseAllSections() {
    var sections = Array.prototype.slice.call(
      document.querySelectorAll('[data-collapsible="section"]')
    );

    sections.forEach(function (section) {
      setCollapsed(section, true);
    });
  }

  function collapseAllEntries() {
    var entries = Array.prototype.slice.call(
      document.querySelectorAll('[data-collapsible="entry"]')
    );

    entries.forEach(function (entry) {
      setCollapsed(entry, true);
    });
  }

  function collapseAllInfoBlocks() {
    var infoBlocks = Array.prototype.slice.call(
      document.querySelectorAll('[data-collapsible="info-block"]')
    );

    infoBlocks.forEach(function (infoBlock) {
      setCollapsed(infoBlock, true);
    });
  }

  function resetCollapseState() {
    collapseAllSections();
    collapseAllEntries();
    collapseAllInfoBlocks();
    history.replaceState(null, "", "#top");
  }

  function expandAllCollapsibleContent() {
    var collapsibles = Array.prototype.slice.call(
      document.querySelectorAll("[data-collapsible]")
    );

    collapsibles.forEach(function (collapsible) {
      setCollapsed(collapsible, false);
    });

    applySelectedInfoBucketState(document);
    history.replaceState(null, "", "#top");
  }

  function setupGlobalCollapseButtons() {
    var resetButton = document.getElementById("reset-collapse-button");
    var expandAllButton = document.getElementById("expand-all-button");

    if (resetButton) {
      resetButton.addEventListener("click", function () {
        resetCollapseState();
      });
    }

    if (expandAllButton) {
      expandAllButton.addEventListener("click", function () {
        expandAllCollapsibleContent();
      });
    }
  }

  function setupInfoBucketButtons() {
    var buttons = Array.prototype.slice.call(
      document.querySelectorAll("[data-info-bucket]")
    );

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var isActive = button.getAttribute("aria-pressed") === "true";

        button.setAttribute("aria-pressed", isActive ? "false" : "true");
        button.classList.toggle("is-active", !isActive);

        if (isActive) {
          collapseAllInfoBlocks();
        }

        applySelectedInfoBucketState(document);
      });
    });
  }

  function setupOvergroupActionButtons() {
    var buttons = Array.prototype.slice.call(
      document.querySelectorAll("[data-overgroup-action][data-overgroup-id]")
    );

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var overgroupId = button.getAttribute("data-overgroup-id");
        var action = button.getAttribute("data-overgroup-action");
        var overgroup = document.getElementById(overgroupId);

        if (!overgroup) {
          return;
        }

        setOvergroupCollapsedState(overgroup, action === "collapse");

        if (action === "expand") {
          applySelectedInfoBucketState(overgroup);
        }
      });
    });
  }

  function setOvergroupCollapsedState(overgroup, collapsed) {
    var collapsibles = Array.prototype.slice.call(
      overgroup.querySelectorAll("[data-collapsible]")
    );

    collapsibles.forEach(function (collapsible) {
      setCollapsed(collapsible, collapsed);
    });
  }

  function applySelectedInfoBucketState(root) {
    var activeKinds = getActiveInfoBucketKinds();

    if (!activeKinds.length) {
      return;
    }

    Array.prototype.slice
      .call((root || document).querySelectorAll("[data-info-block-kind]"))
      .forEach(function (infoBlock) {
        if (activeKinds.indexOf(infoBlock.getAttribute("data-info-block-kind")) !== -1) {
          setCollapsed(infoBlock, false);
        }
      });
  }

  function getActiveInfoBucketKinds() {
    return Array.prototype.slice
      .call(document.querySelectorAll("[data-info-bucket][aria-pressed='true']"))
      .map(function (button) {
        return button.getAttribute("data-info-bucket");
      });
  }

  function expandAncestors(target) {
    var current = target;

    while (current && current !== document.body) {
      if (current.hasAttribute && current.hasAttribute("data-collapsible")) {
        setCollapsed(current, false);
      }

      current = current.parentElement;
    }
  }

  function setCollapsed(container, collapsed) {
    var toggle = container.querySelector(".collapse-toggle");

    container.setAttribute("data-collapsed", collapsed ? "true" : "false");

    if (!toggle) {
      return;
    }

    toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
  }

  function renderEntryCard(entry) {
    var cardClasses = ["entry-card"];
    var entryAnchorId = getEntryAnchorId(entry);

    if (entry.layout === "wide" || (entry.variants && entry.variants.length > 2)) {
      cardClasses.push("entry-card--variant-family");
    }

    return [
      '<article class="' +
        cardClasses.join(" ") +
        '" id="' +
        escapeHtml(entryAnchorId) +
        '" data-collapsible="entry" data-collapsed="true">',
      '<div class="entry-card__header">',
      renderCollapseToggleStart(entry.name, "entry", "entry-card__heading"),
      '<span class="entry-card__heading-copy">',
      '<p class="entry-card__eyebrow">Wirkstoffgruppe</p>',
      renderHeading("h4", entry.name),
      entry.overview ? "<p>" + escapeHtml(entry.overview) + "</p>" : "",
      "</span>",
      renderCollapseChevron(),
      "</button>",
      "</div>",
      '<div class="entry-card__body">',
      entry.variants
        ? '<div class="variant-stack">' +
          entry.variants
            .map(function (variant) {
              return renderVariantCard(entry, variant);
            })
            .join("") +
          "</div>"
        : renderInformationBlocks(entry),
      entry.variants
        ? renderInformationBlocks(entry, {
            hideSubstances: true,
          })
        : "",
      "</div>",
      "</article>",
    ].join("");
  }

  function renderVariantCard(parentEntry, variant) {
    var variantAnchorId = getVariantAnchorId(parentEntry, variant);

    return [
      '<section class="variant-card"' +
        (variantAnchorId ? ' id="' + escapeHtml(variantAnchorId) + '"' : "") +
        ">",
      renderHeading("h5", variant.name),
      renderInformationBlocks(variant),
      "</section>",
    ].join("");
  }

  function renderInformationBlocks(item) {
    var options = arguments.length > 1 && arguments[1] ? arguments[1] : {};

    return [
      options.hideSubstances ? "" : renderSubstanceBlock(item.substances),
      renderEffectivenessBlock(item.effectiveAgainst, item.cautions),
      renderListBlock("Nebenwirkungen", item.sideEffects, "side-effects", "side-effects"),
      renderListBlock("Wirkmechanismus", item.mechanism, "mechanism", "mechanism"),
      renderListBlock("Merke", item.notes, "note", "notes"),
      renderListBlock("Sonstiges", item.otherInfo, "other", "other"),
    ].join("");
  }

  function renderListBlock(title, items, tone, kind) {
    if (!items || !items.length) {
      return "";
    }

    return renderInfoBlock(
      title,
      tone,
      '<ul class="fact-list">' + items.map(renderFactItem).join("") + "</ul>",
      kind
    );
  }

  function renderEffectivenessBlock(items, cautions) {
    if ((!items || !items.length) && (!cautions || !cautions.length)) {
      return "";
    }

    return [
      renderInfoBlock(
        "Wirksamkeit",
        "positive",
        [
          items && items.length
            ? '<ul class="fact-list">' + items.map(renderFactItem).join("") + "</ul>"
            : "",
          cautions && cautions.length
            ? renderInfoSubsection(
                "Grenzen",
                cautions,
                "warning",
                "Grenzen innerhalb der Wirksamkeit"
              )
            : "",
        ].join(""),
        "effectiveness"
      ),
    ].join("");
  }

  function renderInfoBlock(title, tone, body, kind) {
    if (!body) {
      return "";
    }

    return [
      '<section class="info-block info-block--' +
        escapeHtml(tone) +
        '" data-collapsible="info-block" data-collapsed="true"' +
        (kind ? ' data-info-block-kind="' + escapeHtml(kind) + '"' : "") +
        ">",
      '<div class="info-block__header">',
      renderCollapseToggleStart(title, "info-block", "info-block__toggle"),
      '<span class="info-block__heading-copy">',
      '<p class="info-block__title">' + escapeHtml(title) + "</p>",
      "</span>",
      renderCollapseChevron(),
      "</button>",
      "</div>",
      '<div class="info-block__body">',
      body,
      "</div>",
      "</section>",
    ].join("");
  }

  function renderInfoSubsection(title, items, tone, description) {
    return [
      '<section class="info-subsection info-subsection--' + escapeHtml(tone) + '">',
      '<div class="info-subsection__header">',
      '<p class="info-subsection__title">' + escapeHtml(title) + "</p>",
      description
        ? '<p class="info-subsection__description">' + escapeHtml(description) + "</p>"
        : "",
      "</div>",
      '<ul class="fact-list">',
      items.map(renderFactItem).join(""),
      "</ul>",
      "</section>",
    ].join("");
  }

  function renderSubstanceBlock(items) {
    if (!items || !items.length) {
      return "";
    }

    return renderInfoBlock(
      "Substanzen",
      "substances",
      '<ul class="substance-list">' +
        items
          .map(function (item) {
            return '<li class="substance-list__item">' + escapeHtml(item) + "</li>";
          })
          .join("") +
        "</ul>",
      "substances"
    );
  }

  function renderLearningLinkBlock(title, items, options) {
    if (!items || !items.length) {
      return "";
    }

    return [
      '<section class="learning-link-block' +
        (options && options.tone
          ? " learning-link-block--" + escapeHtml(options.tone)
          : "") +
        (options && options.compact ? " learning-link-block--compact" : "") +
        '">',
      title ? '<p class="info-block__title">' + escapeHtml(title) + "</p>" : "",
      '<ul class="learning-link-list">',
      items
        .map(function (item) {
          return renderLearningLinkItem(item);
        })
        .join(""),
      "</ul>",
      "</section>",
    ].join("");
  }

  function renderLearningLinkItem(item) {
    var normalizedItem = normalizeFact(item);
    var targets = resolveLearningTargets(normalizedItem.main);

    return [
      '<li class="learning-link-item">',
      targets.length
        ? targets
            .map(function (target) {
              return renderWirkstoffLink(target, normalizedItem.main, normalizedItem.detail);
            })
            .join("")
        : '<span class="learning-link-fallback">' +
          escapeHtml(normalizedItem.main) +
          (normalizedItem.detail
            ? ' <span class="learning-link-detail">(' +
              escapeHtml(normalizedItem.detail) +
              ")</span>"
            : "") +
          "</span>",
      "</li>",
    ].join("");
  }

  function renderWirkstoffLink(target, sourceText, itemDetail) {
    var splitLabel = splitHeading(target.label);
    var detailText = "";

    if (target.context && target.context !== splitLabel.main) {
      detailText = target.context;
    } else if (splitLabel.detail) {
      detailText = splitLabel.detail;
    } else if (itemDetail) {
      detailText = itemDetail;
    } else if (
      target.sourceLabel &&
      normalizeLookupKey(sourceText) !== normalizeLookupKey(splitLabel.main) &&
      normalizeLookupKey(target.sourceLabel) !== normalizeLookupKey(splitLabel.main)
    ) {
      detailText = target.sourceLabel;
    }

    return [
      '<a class="wirkstoff-link" href="#' +
        escapeHtml(target.href) +
        '" data-tone="' +
        escapeHtml(target.groupId) +
        '">',
      '<span class="wirkstoff-link__label">' + escapeHtml(splitLabel.main) + "</span>",
      '<span class="wirkstoff-link__detail">' +
        (detailText ? escapeHtml(detailText) : "&nbsp;") +
        "</span>",
      "</a>",
    ].join("");
  }

  function renderFactItem(item) {
    var normalizedItem = normalizeFact(item);
    var factClasses = ["fact-row"];

    if (normalizedItem.muted) {
      factClasses.push("fact-row--muted");
    }

    return [
      '<li class="' + factClasses.join(" ") + '">',
      renderSemanticTags(normalizedItem.main + " " + (normalizedItem.detail || "")),
      '<span class="fact__main">' + renderFactMain(normalizedItem.main) + "</span>",
      normalizedItem.detail
        ? '<span class="fact__detail">(' +
          escapeHtml(normalizedItem.detail) +
          ")</span>"
        : "",
      "</li>",
    ].join("");
  }

  function renderSemanticTags(text) {
    var tags = extractSemanticTags(text);

    if (!tags.length) {
      return "";
    }

    return [
      '<div class="semantic-tags">',
      tags
        .map(function (tag) {
          return [
            '<span class="semantic-tag semantic-tag--' +
              escapeHtml(tag.tone) +
              '">',
            escapeHtml(tag.label),
            "</span>",
          ].join("");
        })
        .join(""),
      "</div>",
    ].join("");
  }

  function normalizeFact(item) {
    if (typeof item === "string") {
      return { main: item };
    }

    return item;
  }

  function renderFactMain(text) {
    var factText = String(text);
    var emphasizedPrefixes = [
      "Ausschließlich",
      "Keine",
      "Nicht",
    ];

    for (var i = 0; i < emphasizedPrefixes.length; i += 1) {
      var prefix = emphasizedPrefixes[i];

      if (factText.indexOf(prefix) === 0) {
        return (
          '<span class="fact__lead-emphasis">' +
          escapeHtml(prefix) +
          "</span>" +
          escapeHtml(factText.slice(prefix.length))
        );
      }
    }

    return escapeHtml(factText);
  }

  function getOvergroupHeading(overgroup) {
    if (overgroup.kind === "learning" || overgroup.preferTitleInNav) {
      return overgroup.title;
    }

    return overgroup.kicker || overgroup.title;
  }

  function buildWirkstoffLookup(overgroups) {
    var lookup = {};

    overgroups.forEach(function (overgroup) {
      if (overgroup.kind === "learning") {
        return;
      }

      overgroup.sections.forEach(function (section) {
        if (!section.entries) {
          return;
        }

        section.entries.forEach(function (entry) {
          registerLookup(lookup, entry.name, {
            label: entry.name,
            href: getEntryAnchorId(entry),
            groupId: overgroup.id,
          });

          registerEntryAliases(lookup, entry, overgroup.id);

          if (!entry.variants) {
            return;
          }

          entry.variants.forEach(function (variant) {
            var variantTarget = {
              label: entry.name,
              href: getVariantAnchorId(entry, variant),
              groupId: overgroup.id,
              context: variant.name,
            };

            registerLookup(lookup, variant.name, variantTarget);

            if (variant.substances) {
              variant.substances.forEach(function (substance) {
                registerLookup(lookup, substance, {
                  label: entry.name,
                  href: getVariantAnchorId(entry, variant),
                  groupId: overgroup.id,
                  context: variant.name,
                  sourceLabel: substance,
                });
              });
            }
          });
        });
      });
    });

    registerManualAliases(lookup);

    return lookup;
  }

  function registerEntryAliases(lookup, entry, groupId) {
    var target = {
      label: entry.name,
      href: getEntryAnchorId(entry),
      groupId: groupId,
    };

    if (entry.substances) {
      entry.substances.forEach(function (substance) {
        registerLookup(lookup, substance, {
          label: entry.name,
          href: getEntryAnchorId(entry),
          groupId: groupId,
          sourceLabel: substance,
        });
      });
    }

    registerLookup(lookup, stripHeadingDetail(entry.name), target);
  }

  function registerManualAliases(lookup) {
    registerAliasFromLookup(lookup, "glycylcycline", "tigecyclin");
    registerAliasFromLookup(lookup, "fluorchinolone", "neuere fluorchinolone", "Gruppe III-IV");
    registerAliasFromLookup(lookup, "fluorchinolone", "fluorchinolone gruppe iii iv", "Gruppe III-IV");
    registerAliasFromLookup(lookup, "fluorchinolone", "fluorchinolone gruppe i ii", "Gruppe I-II");
    registerAliasFromLookup(lookup, "cephalosporine", "cephalosporine 3 4", "3.-4. Generation");
    registerAliasFromLookup(lookup, "cephalosporine", "cephalosporine 1 4", "1.-4. Generation");
    registerAliasFromLookup(lookup, "cephalosporine", "cephalosporine 5 generation", "5. Generation");
    registerAliasFromLookup(lookup, "cotrimoxazol", "sulfonamide cotrimoxazol", "Cotrimoxazol");
    registerAliasFromLookup(
      lookup,
      "aminopenicilline + β-lactamase-inhibitor",
      "aminopenicilline β lactamase inhibitor"
    );
    registerAliasFromLookup(
      lookup,
      "acylaminopenicilline + β-lactamase-inhibitor",
      "acylaminopenicilline β lactamase inhibitor"
    );
  }

  function registerAliasFromLookup(lookup, sourceKey, aliasText, context) {
    var target = lookup[normalizeLookupKey(sourceKey)];

    if (!target) {
      return;
    }

    registerLookup(lookup, aliasText, {
      label: target.label,
      href: target.href,
      groupId: target.groupId,
      context: context || target.context,
      sourceLabel: aliasText,
    });
  }

  function registerLookup(lookup, text, target) {
    lookup[normalizeLookupKey(text)] = target;
  }

  function resolveLearningTargets(text) {
    var normalized = normalizeLookupKey(text);
    var directMatch = wirkstoffLookup[normalized];

    if (directMatch) {
      return [directMatch];
    }

    if (String(text).indexOf(" / ") !== -1) {
      return String(text)
        .split(" / ")
        .map(function (part) {
          return wirkstoffLookup[normalizeLookupKey(part)];
        })
        .filter(Boolean);
    }

    return [];
  }

  function getEntryAnchorId(entry) {
    return "entry-" + slugify(stripHeadingDetail(entry.name));
  }

  function getVariantAnchorId(entry, variant) {
    return (
      "variant-" +
      slugify(stripHeadingDetail(entry.name)) +
      "-" +
      slugify(stripHeadingDetail(variant.name))
    );
  }

  function stripHeadingDetail(text) {
    return splitHeading(text).main;
  }

  function normalizeLookupKey(text) {
    return String(text)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/β/g, "beta")
      .replace(/[^a-z0-9+]+/g, " ")
      .trim();
  }

  function slugify(text) {
    return normalizeLookupKey(text).replace(/[ +]+/g, "-");
  }

  function extractSemanticTags(text) {
    var normalizedText = String(text).toLowerCase();
    var definitions = [
      { label: "Grampositiv", tone: "grampositive", match: /grampositiv/ },
      { label: "Gramnegativ", tone: "gramnegative", match: /gramnegativ/ },
      { label: "Anaerobier", tone: "anaerobic", match: /\banaerob/ },
      { label: "Aerobier", tone: "aerobic", match: /\baerob/ },
      { label: "Intrazellulär", tone: "intracellular", match: /intrazellul/ },
      { label: "Atypiker", tone: "atypical", match: /atypik/ },
      { label: "Pseudomonas", tone: "pseudomonas", match: /pseudomonas/ },
      { label: "MRSA", tone: "mrsa", match: /mrsa/ },
      { label: "VRE", tone: "vre", match: /\bvre\b/ },
      { label: "Enterokokken", tone: "enterococci", match: /enterokokk/ },
      { label: "Mykobakterien", tone: "mycobacteria", match: /mykobakter/ },
      {
        label: "Protozoen",
        tone: "protozoa",
        match: /protozo|giardi|lamblia|entamoeba|am[oö]b|trichomon/,
      },
      { label: "Hefen", tone: "yeasts", match: /\bhefen?\b|candida/ },
      { label: "Schimmel", tone: "molds", match: /schimmel|aspergill/ },
      { label: "Dermatophyten", tone: "dermatophytes", match: /dermatophyt/ },
      { label: "Kryptokokken", tone: "cryptococci", match: /kryptokokk/ },
      { label: "Onychomykose", tone: "onychomycosis", match: /onychomykos/ },
      { label: "Nematoden", tone: "nematodes", match: /nematod|ascari|trichin|enterob|oxyuriasis|ancylostomat|strongyloid/ },
      { label: "Cestoden", tone: "cestodes", match: /cestod|taenia|echinokokk|diphylloboth/ },
      { label: "Trematoden", tone: "trematodes", match: /trematod|schistosom/ },
      { label: "Skabies", tone: "scabies", match: /skabie|scabie/ },
      { label: "Läuse", tone: "lice", match: /laus|lause|pedicul|filzlaus/ },
      { label: "Malaria", tone: "malaria", match: /malaria/ },
      { label: "Leishmaniose", tone: "leishmanio", match: /leishmanio/ },
      { label: "Herpes", tone: "herpes", match: /herpes simplex|herpesvir|aciclovir|valaciclovir/ },
      { label: "Varizella zoster", tone: "vzv", match: /varizella|zoster/ },
      { label: "CMV", tone: "cmv", match: /\bcmv\b|zytomegal/ },
      { label: "Influenza", tone: "influenza", match: /influenza|oseltamivir|amantadin/ },
      { label: "Hepatitis B", tone: "hepatitisb", match: /hepatitis b|entecavir|lamivudin|telbivudin|tenofovir|adefovir/ },
      { label: "Hepatitis C", tone: "hepatitisc", match: /hepatitis c|sofosbuvir|glecaprevir|grazoprevir|voxilaprevir|paritaprevir|ledipasvir|elbasvir|velpatasvir|pibrentasvir|ribavirin/ },
      { label: "HIV", tone: "hiv", match: /\bhiv\b|aids/ },
    ];

    return definitions.filter(function (definition) {
      return definition.match.test(normalizedText);
    });
  }

  function renderHeading(tagName, text, options) {
    var titleParts =
      options && options.splitDetail ? splitHeading(text) : { main: String(text) };

    return [
      "<" + tagName + ">",
      '<span class="heading-main">' + escapeHtml(titleParts.main) + "</span>",
      titleParts.detail
        ? '<span class="heading-meta">(' +
          escapeHtml(titleParts.detail) +
          ")</span>"
        : "",
      "</" + tagName + ">",
    ].join("");
  }

  function splitHeading(text) {
    var match = String(text).match(/^(.*)\s\(([^()]+)\)$/);

    if (!match) {
      return { main: String(text) };
    }

    return {
      main: match[1],
      detail: match[2],
    };
  }

  function setupActiveNavigation(overgroups) {
    var topLinks = Array.prototype.slice.call(
      document.querySelectorAll(".page-nav__top")
    );
    var subLinks = Array.prototype.slice.call(
      document.querySelectorAll(".page-nav__sub-link")
    );
    var sections = Array.prototype.slice.call(
      document.querySelectorAll(".content-section[data-nav-anchor]")
    );
    var sectionToGroup = {};

    overgroups.forEach(function (overgroup) {
      overgroup.sections.forEach(function (section) {
        sectionToGroup[section.id] = overgroup.id;
      });
    });

    if (!sections.length) {
      return;
    }

    var scheduled = false;

    function updateActiveNavigationState() {
      var activeSectionId = getActiveSectionId(sections);

      topLinks.forEach(function (link) {
        var linkTarget = link.getAttribute("data-nav-target");
        link.classList.toggle(
          "is-active",
          linkTarget === sectionToGroup[activeSectionId]
        );
      });

      subLinks.forEach(function (link) {
        var linkTarget = link.getAttribute("data-nav-target");
        link.classList.toggle("is-active", linkTarget === activeSectionId);
      });
    }

    function scheduleActiveNavigationUpdate() {
      if (scheduled) {
        return;
      }

      scheduled = true;

      window.requestAnimationFrame(function () {
        scheduled = false;
        updateActiveNavigationState();
      });
    }

    window.addEventListener("scroll", scheduleActiveNavigationUpdate, { passive: true });
    window.addEventListener("resize", scheduleActiveNavigationUpdate);
    window.addEventListener("hashchange", scheduleActiveNavigationUpdate);
    updateActiveNavigationState();
  }

  function getActiveSectionId(sections) {
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var viewportAnchor = Math.min(viewportHeight * 0.32, 260);
    var scrollBottom =
      window.scrollY + viewportHeight >= document.documentElement.scrollHeight - 4;
    var activeSectionId = sections[0] ? sections[0].id : null;
    var nearestDistance = Number.POSITIVE_INFINITY;

    if (scrollBottom && sections.length) {
      return sections[sections.length - 1].id;
    }

    sections.forEach(function (section) {
      var rect = section.getBoundingClientRect();
      var sectionTop = rect.top;
      var sectionBottom = rect.bottom;
      var distanceToAnchor;

      if (sectionTop <= viewportAnchor && sectionBottom > viewportAnchor) {
        activeSectionId = section.id;
        nearestDistance = -1;
        return;
      }

      if (nearestDistance < 0) {
        return;
      }

      if (sectionTop > viewportAnchor) {
        distanceToAnchor = sectionTop - viewportAnchor;
      } else {
        distanceToAnchor = viewportAnchor - sectionBottom;
      }

      if (distanceToAnchor < nearestDistance) {
        nearestDistance = distanceToAnchor;
        activeSectionId = section.id;
      }
    });

    return activeSectionId;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();

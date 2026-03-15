(function () {
  var INFO_BUCKET_STORAGE_KEY = "pharmaAtlas.autoExpandBuckets";
  var collection = window.pharmaAtlasCollection;
  var category = resolveCurrentCategory(collection);

  if (!collection || !collection.categories || !collection.categories.length || !category) {
    return;
  }

  var currentView = resolveCurrentView(category);
  var rendererConfig = resolveRendererConfig(collection, category);
  var categorySwitcher = document.getElementById("library-switcher");
  var sidePanelIntro = document.querySelector(".side-panel__intro");
  var pageNav = document.getElementById("page-nav");
  var groupLibrary = document.getElementById("group-library");
  var learningLinkLookup = buildLearningLinkLookup(category.overgroups);
  var infoBucketNavigationItems = rendererConfig.infoBuckets || [];

  updateDocumentMetadata(category, currentView);

  if (categorySwitcher) {
    categorySwitcher.innerHTML = renderCategorySwitcher(collection, category);
  }

  if (sidePanelIntro) {
    sidePanelIntro.hidden = true;
  }

  if (pageNav) {
    pageNav.innerHTML = renderPageNav(category.overgroups, currentView);
  }

  if (groupLibrary) {
    groupLibrary.innerHTML = renderMainContent(category, currentView);
  }

  setupCollapsibleSections();
  setupGlobalCollapseButtons();
  setupInfoBucketButtons();
  setupActiveNavigation();

  function resolveCurrentCategory(currentCollection) {
    var categories = (currentCollection && currentCollection.categories) || [];
    var defaultCategoryId = currentCollection && currentCollection.defaultCategoryId;
    var params = new URLSearchParams(window.location.search);
    var requestedCategoryId = params.get("kategorie") || params.get("thema");
    var matchedCategory = categories.find(function (item) {
      return item.id === requestedCategoryId;
    });

    if (matchedCategory) {
      return matchedCategory;
    }

    return (
      categories.find(function (item) {
        return item.id === defaultCategoryId;
      }) || categories[0]
    );
  }

  function resolveCurrentView(currentCategory) {
    var params = new URLSearchParams(window.location.search);
    var requestedOvergroupId = params.get("gruppe");
    var requestedOvergroup = findOvergroupById(currentCategory.overgroups, requestedOvergroupId);
    var hashOvergroup = findOvergroupByHash(currentCategory, window.location.hash);

    if (requestedOvergroup) {
      return {
        isOverview: false,
        activeOvergroup: requestedOvergroup,
      };
    }

    if (hashOvergroup) {
      return {
        isOverview: false,
        activeOvergroup: hashOvergroup,
      };
    }

    return {
      isOverview: true,
      activeOvergroup: null,
    };
  }

  function findOvergroupById(overgroups, overgroupId) {
    if (!overgroupId) {
      return null;
    }

    return (
      overgroups.find(function (overgroup) {
        return overgroup.id === overgroupId;
      }) || null
    );
  }

  function findOvergroupByHash(currentCategory, hash) {
    var targetId;

    if (!hash || hash === "#top") {
      return null;
    }

    targetId = hash.replace(/^#/, "");

    return (
      currentCategory.overgroups.find(function (overgroup) {
        if (overgroup.id === targetId) {
          return true;
        }

        return overgroup.sections.some(function (section) {
          if (section.id === targetId) {
            return true;
          }

          if (!section.entries) {
            return false;
          }

          return section.entries.some(function (entry) {
            if (getEntryAnchorId(entry) === targetId) {
              return true;
            }

            return Boolean(
              entry.variants &&
                entry.variants.some(function (variant) {
                  return getVariantAnchorId(entry, variant) === targetId;
                })
            );
          });
        });
      }) || null
    );
  }

  function resolveRendererConfig(currentCollection, currentCategory) {
    var collectionRenderer = currentCollection.renderer || {};
    var categoryRenderer = currentCategory.renderer || {};

    return {
      labels: Object.assign(
        {
          librarySwitcher: "Kategorie",
          startView: "Start",
          pageControls: "Seitensteuerung",
          autoExpand: "Automatisch ausklappen",
          expandAll: "Alles ausklappen",
          collapseAll: "Alles einklappen",
          entryEyebrow: "Wirkstoffgruppe",
          pearlEyebrow: "Merksatz",
          quickReferencePrimary: "Inhalte",
          referenceIndexPrimary: "Medikamente",
          learningFocusFallback: "Fokus",
          learningWarningFallback: "Hinweise",
          emptyReferenceIndex: "Noch keine Einträge vorhanden.",
          overviewEmptyState: "Noch keine Inhalte vorhanden.",
        },
        collectionRenderer.labels || {},
        categoryRenderer.labels || {}
      ),
      infoBuckets: categoryRenderer.infoBuckets || collectionRenderer.infoBuckets || [],
      semanticTags: categoryRenderer.semanticTags || [],
    };
  }

  function updateDocumentMetadata(currentCategory, view) {
    var activeOvergroup = view.activeOvergroup;
    var documentTitle = currentCategory.page.documentTitle || currentCategory.page.title;

    if (activeOvergroup) {
      documentTitle =
        getOvergroupHeading(activeOvergroup) +
        " | " +
        currentCategory.page.title +
        " | Pharma-Atlas";
    } else {
      documentTitle = documentTitle + " | Pharma-Atlas";
    }

    document.title = documentTitle;

    var descriptionMeta = document.querySelector('meta[name="description"]');

    if (descriptionMeta && currentCategory.page.description) {
      descriptionMeta.setAttribute("content", currentCategory.page.description);
    }

    document.body.setAttribute("data-category", currentCategory.id);
    document.body.setAttribute("data-library", currentCategory.id);
    document.body.setAttribute("data-view", activeOvergroup ? activeOvergroup.id : "start");
  }

  function renderCategorySwitcher(currentCollection, currentCategory) {
    return [
      '<section class="library-switcher" aria-label="Kategorie auswählen">',
      '<p class="page-nav__bucket-label">' +
        escapeHtml(rendererConfig.labels.librarySwitcher) +
        "</p>",
      '<div class="library-switcher__list">',
      currentCollection.categories
        .map(function (item) {
          return [
            '<a class="library-switcher__link' +
              (item.id === currentCategory.id ? " is-active" : "") +
              '" href="' +
              escapeHtml(buildViewHref(item.id, null, "top")) +
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

  function buildViewHref(categoryId, overgroupId, hash) {
    var params = new URLSearchParams(window.location.search);
    var queryString;

    params.set("kategorie", categoryId);
    params.delete("thema");

    if (overgroupId) {
      params.set("gruppe", overgroupId);
    } else {
      params.delete("gruppe");
    }

    queryString = params.toString();

    return (
      window.location.pathname +
      (queryString ? "?" + queryString : "") +
      "#" +
      (hash || "top")
    );
  }

  function renderPageNav(overgroups, view) {
    return [
      renderStartViewNavItem(view),
      overgroups
        .map(function (overgroup) {
          return renderOvergroupNavItem(overgroup, view);
        })
        .join(""),
      renderInfoBucketNavigation(),
    ].join("");
  }

  function renderStartViewNavItem(view) {
    return [
      '<section class="page-nav__group">',
      '<a class="page-nav__top' +
        (view.isOverview ? " is-active" : "") +
        '" href="' +
        escapeHtml(buildViewHref(category.id, null, "top")) +
        '">',
      '<span class="page-nav__label">' + escapeHtml(rendererConfig.labels.startView) + "</span>",
      "</a>",
      "</section>",
    ].join("");
  }

  function renderOvergroupNavItem(overgroup, view) {
    var isActive = Boolean(view.activeOvergroup && view.activeOvergroup.id === overgroup.id);

    return [
      '<section class="page-nav__group" data-group="' + escapeHtml(overgroup.id) + '">',
      '<a class="page-nav__top' +
        (isActive ? " is-active" : "") +
        '" href="' +
        escapeHtml(buildViewHref(category.id, overgroup.id, "top")) +
        '">',
      '<span class="page-nav__label">' + escapeHtml(getOvergroupHeading(overgroup)) + "</span>",
      "</a>",
      isActive ? renderOvergroupSectionNav(overgroup) : "",
      "</section>",
    ].join("");
  }

  function renderOvergroupSectionNav(overgroup) {
    var visibleSections = overgroup.sections.filter(function (section) {
      return !section.hideTitle;
    });

    if (!visibleSections.length) {
      return "";
    }

    return [
      '<div class="page-nav__subnav">',
      visibleSections
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
    ].join("");
  }

  function renderInfoBucketNavigation() {
    var autoExpandPanel = infoBucketNavigationItems.length
      ? [
          '<section class="page-nav__bucket-panel">',
          '<p class="page-nav__bucket-label">' +
            escapeHtml(rendererConfig.labels.autoExpand) +
            "</p>",
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
        ].join("")
      : "";

    return [
      '<section class="page-nav__bucket-panel page-nav__bucket-panel--compact">',
      '<p class="page-nav__bucket-label">' +
        escapeHtml(rendererConfig.labels.pageControls) +
        "</p>",
      '<div class="page-nav__global-actions">',
      '<button class="header-action-button" id="expand-all-button" type="button">',
      escapeHtml(rendererConfig.labels.expandAll),
      "</button>",
      '<button class="header-action-button" id="reset-collapse-button" type="button">',
      escapeHtml(rendererConfig.labels.collapseAll),
      "</button>",
      "</div>",
      "</section>",
      autoExpandPanel,
    ].join("");
  }

  function renderMainContent(currentCategory, view) {
    if (view.isOverview) {
      return renderCategoryOverview(currentCategory);
    }

    return renderOvergroupPanel(view.activeOvergroup);
  }

  function renderCategoryOverview(currentCategory) {
    return [
      '<section class="category-overview">',
      currentCategory.overgroups
        .map(function (overgroup) {
          return renderOverviewCard(overgroup);
        })
        .join(""),
      "</section>",
    ].join("");
  }

  function renderOverviewCard(overgroup) {
    var summarySections = buildOverviewSections(overgroup);

    if (summarySections.length === 1 && summarySections[0].hideTitle) {
      return renderOverviewCardWithDirectItems(overgroup, summarySections[0].items);
    }

    return [
      '<article class="overview-card panel"' +
        renderThemeStyleAttribute(resolveOvergroupTheme(overgroup), "overview") +
        ">",
      '<div class="overview-card__header">',
      '<a class="overview-card__title-link" href="' +
        escapeHtml(buildViewHref(category.id, overgroup.id, "top")) +
        '">',
      renderHeading("h3", overgroup.title),
      "</a>",
      "</div>",
      summarySections.length
        ? '<div class="overview-card__sections">' +
          summarySections
            .map(function (section) {
              return renderOverviewSection(overgroup, section);
            })
            .join("") +
          "</div>"
        : '<p class="overview-card__empty">' +
          escapeHtml(rendererConfig.labels.overviewEmptyState) +
          "</p>",
      "</article>",
    ].join("");
  }

  function renderOverviewCardWithDirectItems(overgroup, items) {
    return [
      '<article class="overview-card panel"' +
        renderThemeStyleAttribute(resolveOvergroupTheme(overgroup), "overview") +
        ">",
      '<div class="overview-card__header">',
      '<a class="overview-card__title-link" href="' +
        escapeHtml(buildViewHref(category.id, overgroup.id, "top")) +
        '">',
      renderHeading("h3", overgroup.title),
      "</a>",
      "</div>",
      items.length
        ? '<div class="overview-pill-list">' +
          items
            .map(function (item) {
              return renderOverviewItem(item);
            })
            .join("") +
          "</div>"
        : '<p class="overview-card__empty">' +
          escapeHtml(rendererConfig.labels.overviewEmptyState) +
          "</p>",
      "</article>",
    ].join("");
  }

  function buildOverviewSections(overgroup) {
    return overgroup.sections.map(function (section) {
      return {
        id: section.id,
        title: section.title,
        hideTitle: Boolean(section.hideTitle),
        items: buildOverviewItems(overgroup, section),
      };
    });
  }

  function buildOverviewItems(overgroup, section) {
    if (
      section.entries &&
      section.entries.length === 1 &&
      shouldRenderInlineEntry(section, section.entries[0])
    ) {
      return [];
    }

    if (section.entries && section.entries.length) {
      return section.entries.map(function (entry) {
        return {
          label: entry.name,
          href: buildViewHref(category.id, overgroup.id, getEntryAnchorId(entry)),
        };
      });
    }

    if (section.cards && section.cards.length) {
      return section.cards.map(function (card) {
        return {
          label: card.title || card.label,
          href: buildViewHref(category.id, overgroup.id, section.id),
        };
      });
    }

    return [];
  }

  function renderOverviewSection(overgroup, section) {
    if (section.hideTitle) {
      return "";
    }

    return [
      '<section class="overview-card__section">',
      '<a class="overview-card__section-link" href="' +
        escapeHtml(buildViewHref(category.id, overgroup.id, section.id)) +
        '">',
      escapeHtml(section.title),
      "</a>",
      section.items.length
        ? '<div class="overview-pill-list">' +
          section.items
            .map(function (item) {
              return renderOverviewItem(item);
            })
            .join("") +
          "</div>"
        : "",
      "</section>",
    ].join("");
  }

  function renderOverviewItem(item) {
    return [
      '<a class="overview-pill" href="' + escapeHtml(item.href) + '">',
      escapeHtml(item.label),
      "</a>",
    ].join("");
  }

  function renderQuickReferenceCard(card, options) {
    var currentOptions = options || {};

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
      renderLearningLinkBlock(
        currentOptions.primaryLabel || rendererConfig.labels.quickReferencePrimary,
        card.items,
        {
          tone: "primary",
        }
      ),
      card.focusItems
        ? renderLearningLinkBlock(
            card.focusLabel || rendererConfig.labels.learningFocusFallback,
            card.focusItems,
            {
              tone: "focus",
            }
          )
        : "",
      card.warningItems
        ? renderLearningLinkBlock(
            card.warningLabel || rendererConfig.labels.learningWarningFallback,
            card.warningItems,
            {
              tone: "warning",
            }
          )
        : "",
      "</div>",
      "</article>",
    ].join("");
  }

  function renderEmptyReferenceCard(message) {
    return [
      '<article class="reference-card reference-card--empty">',
      '<div class="reference-card__body">',
      '<p class="reference-empty-state">' + escapeHtml(message) + "</p>",
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
      '<p class="eyebrow">' + escapeHtml(rendererConfig.labels.pearlEyebrow) + "</p>",
      renderHeading("h4", pearl.label),
      "</div>",
      pearl.items
        ? renderLearningLinkBlock(null, pearl.items, { compact: true, tone: "primary" })
        : "<p>" + escapeHtml(pearl.text) + "</p>",
      "</article>",
    ].join("");
  }

  function renderOvergroupPanel(overgroup) {
    var overgroupClasses = ["overgroup", "panel"];
    var sectionLinks = overgroup.sections
      .filter(function (section) {
        return !section.hideTitle;
      })
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

    if (overgroup.kind) {
      overgroupClasses.push("overgroup--" + overgroup.kind);
    }

    return [
      '<section class="' +
        overgroupClasses.map(escapeHtml).join(" ") +
        '" id="' +
        escapeHtml(overgroup.id) +
        '" data-group="' +
        escapeHtml(overgroup.id) +
        '"' +
        renderThemeStyleAttribute(resolveOvergroupTheme(overgroup)),
      '>',
      '<div class="overgroup__content">',
      renderOvergroupHeader(overgroup),
      sectionLinks ? '<div class="section-links">' + sectionLinks + "</div>" : "",
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

  function renderOvergroupHeader(overgroup) {
    if (!overgroup.title && !overgroup.description) {
      return "";
    }

    return [
      '<header class="overgroup__header">',
      '<div class="overgroup__heading-copy">',
      overgroup.title ? renderHeading("h2", overgroup.title) : "",
      overgroup.description ? "<p>" + escapeHtml(overgroup.description) + "</p>" : "",
      "</div>",
      "</header>",
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
        section.entries
          .map(function (entry) {
            return renderSectionEntry(section, entry);
          })
          .join("") +
        "</div>";
    } else if (section.type === "quickReference") {
      sectionBody =
        '<div class="reference-grid">' +
        section.cards.map(renderQuickReferenceCard).join("") +
        "</div>";
    } else if (section.type === "referenceIndex") {
      sectionBody = renderReferenceIndexSection(section);
    } else if (section.type === "pearls") {
      sectionBody =
        '<div class="pearl-grid">' +
        section.cards.map(renderClinicalPearl).join("") +
        "</div>";
    }

    if (section.hideTitle) {
      return renderSectionBodyOnly(overgroup, section, sectionBody);
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

  function renderSectionBodyOnly(overgroup, section, body) {
    return [
      '<section class="content-section content-section--bare content-section--' +
        escapeHtml(section.type) +
        '" id="' +
        escapeHtml(section.id) +
        '" data-parent-group="' +
        escapeHtml(overgroup.id) +
        '">',
      body,
      "</section>",
    ].join("");
  }

  function renderReferenceIndexSection(section) {
    var cards = buildReferenceIndexCards(section);

    if (!cards.length) {
      return [
        '<div class="reference-grid">',
        renderEmptyReferenceCard(section.emptyState || rendererConfig.labels.emptyReferenceIndex),
        "</div>",
      ].join("");
    }

    return [
      '<div class="reference-grid">',
      cards
        .map(function (card) {
          return renderQuickReferenceCard(card, {
            primaryLabel: section.itemLabel || rendererConfig.labels.referenceIndexPrimary,
          });
        })
        .join(""),
      "</div>",
    ].join("");
  }

  function buildReferenceIndexCards(section) {
    var groupedCards = {};

    category.overgroups.forEach(function (overgroup) {
      if (overgroup.includeInLearningLookup === false) {
        return;
      }

      overgroup.sections.forEach(function (currentSection) {
        if (!currentSection.entries) {
          return;
        }

        currentSection.entries.forEach(function (entry) {
          registerReferenceIndexItems(groupedCards, section.source, entry, entry.name);

          if (!entry.variants) {
            return;
          }

          entry.variants.forEach(function (variant) {
            registerReferenceIndexItems(groupedCards, section.source, variant, variant.name);
          });
        });
      });
    });

    return Object.keys(groupedCards)
      .map(function (groupKey) {
        var group = groupedCards[groupKey];

        group.items.sort(compareTextValues);

        return {
          title: group.title,
          items: group.items,
        };
      })
      .sort(function (left, right) {
        return compareTextValues(left.title, right.title);
      });
  }

  function registerReferenceIndexItems(groupedCards, source, item, targetLabel) {
    var sourceItems = item[source];

    if (!source || !sourceItems || !sourceItems.length) {
      return;
    }

    sourceItems.forEach(function (sourceItem) {
      var normalizedItem = normalizeFact(sourceItem);
      var groupKey = normalizeLookupKey(normalizedItem.main);
      var group = groupedCards[groupKey];
      var targetKey = normalizeLookupKey(targetLabel);

      if (!group) {
        group = {
          title: normalizedItem.main,
          items: [],
          lookup: {},
        };

        groupedCards[groupKey] = group;
      }

      if (group.lookup[targetKey]) {
        return;
      }

      group.lookup[targetKey] = true;
      group.items.push(targetLabel);
    });
  }

  function compareTextValues(left, right) {
    return String(left).localeCompare(String(right), "de", {
      sensitivity: "base",
    });
  }

  function setupCollapsibleSections() {
    var collapsibles = Array.prototype.slice.call(
      document.querySelectorAll("[data-collapsible]")
    );
    var anchorLinks = Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]'));

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
    applySelectedInfoBucketState(target);
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
    var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-info-bucket]"));
    var activeKinds = readPersistedInfoBucketKinds();

    buttons.forEach(function (button) {
      var bucketKind = button.getAttribute("data-info-bucket");
      var isActive = activeKinds.indexOf(bucketKind) !== -1;

      button.setAttribute("aria-pressed", isActive ? "true" : "false");
      button.classList.toggle("is-active", isActive);
    });

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var isActive = button.getAttribute("aria-pressed") === "true";

        button.setAttribute("aria-pressed", isActive ? "false" : "true");
        button.classList.toggle("is-active", !isActive);

        if (isActive) {
          collapseAllInfoBlocks();
        }

        persistInfoBucketKinds(getActiveInfoBucketKinds());
        applySelectedInfoBucketState(document);
      });
    });

    applySelectedInfoBucketState(document);
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

  function readPersistedInfoBucketKinds() {
    var rawValue;
    var parsedKinds;
    var allowedKinds = infoBucketNavigationItems.map(function (item) {
      return item.kind;
    });

    try {
      rawValue = window.localStorage.getItem(INFO_BUCKET_STORAGE_KEY);
    } catch (error) {
      return [];
    }

    if (!rawValue) {
      return [];
    }

    try {
      parsedKinds = JSON.parse(rawValue);
    } catch (error) {
      return [];
    }

    if (!Array.isArray(parsedKinds)) {
      return [];
    }

    return parsedKinds.filter(function (kind) {
      return allowedKinds.indexOf(kind) !== -1;
    });
  }

  function persistInfoBucketKinds(kinds) {
    try {
      window.localStorage.setItem(INFO_BUCKET_STORAGE_KEY, JSON.stringify(kinds));
    } catch (error) {
      // Ignore storage failures and keep the UI functional without persistence.
    }
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

  function renderSectionEntry(section, entry) {
    if (shouldRenderInlineEntry(section, entry)) {
      return renderInlineEntryCard(entry);
    }

    return renderEntryCard(entry);
  }

  function shouldRenderInlineEntry(section, entry) {
    return (
      Boolean(section.entries && section.entries.length === 1) &&
      normalizeLookupKey(section.title) === normalizeLookupKey(entry.name)
    );
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
      '<p class="entry-card__eyebrow">' +
        escapeHtml(rendererConfig.labels.entryEyebrow) +
        "</p>",
      renderHeading("h4", entry.name),
      entry.overview ? "<p>" + escapeHtml(entry.overview) + "</p>" : "",
      "</span>",
      renderCollapseChevron(),
      "</button>",
      "</div>",
      renderEntryCardBody(entry),
      "</article>",
    ].join("");
  }

  function renderInlineEntryCard(entry) {
    return [
      '<article class="entry-card entry-card--inline" id="' +
        escapeHtml(getEntryAnchorId(entry)) +
        '">',
      entry.overview ? '<p class="entry-card__inline-copy">' + escapeHtml(entry.overview) + "</p>" : "",
      renderEntryCardBody(entry),
      "</article>",
    ].join("");
  }

  function renderEntryCardBody(entry) {
    return [
      '<div class="entry-card__body">',
      entry.variants ? renderVariantStack(entry) : renderInformationBlocks(entry),
      entry.variants
        ? renderInformationBlocks(entry, {
            hideSubstances: true,
          })
        : "",
      "</div>",
    ].join("");
  }

  function renderVariantStack(entry) {
    var variantCount = entry.variants.length;
    var columnCount = variantCount > 3 ? Math.ceil(variantCount / 2) : variantCount;

    return [
      '<div class="variant-stack variant-stack--balanced" style="--variant-columns: ' +
        escapeHtml(String(columnCount)) +
        ';">',
      entry.variants
        .map(function (variant) {
          return renderVariantCard(entry, variant);
        })
        .join(""),
      "</div>",
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

    return infoBucketNavigationItems
      .filter(function (bucketDefinition) {
        return !(options.hideSubstances && bucketDefinition.kind === "substances");
      })
      .map(function (bucketDefinition) {
        return renderConfiguredInfoBlock(item, bucketDefinition);
      })
      .join("");
  }

  function renderConfiguredInfoBlock(item, bucketDefinition) {
    var items = item[bucketDefinition.source];
    var subsectionMarkup = renderConfiguredInfoSubsections(item, bucketDefinition.subsections);
    var bodyParts = [];

    if (items && items.length) {
      bodyParts.push(
        bucketDefinition.listType === "plain"
          ? renderPlainInfoList(items)
          : renderFactInfoList(items)
      );
    }

    if (subsectionMarkup) {
      bodyParts.push(subsectionMarkup);
    }

    if (!bodyParts.length) {
      return "";
    }

    return renderInfoBlock(
      bucketDefinition.title,
      bucketDefinition.tone,
      bodyParts.join(""),
      bucketDefinition.kind
    );
  }

  function renderConfiguredInfoSubsections(item, subsectionDefinitions) {
    if (!subsectionDefinitions || !subsectionDefinitions.length) {
      return "";
    }

    return subsectionDefinitions
      .map(function (subsectionDefinition) {
        var items = item[subsectionDefinition.source];

        if (!items || !items.length) {
          return "";
        }

        return renderInfoSubsection(
          subsectionDefinition.title,
          items,
          subsectionDefinition.tone,
          subsectionDefinition.description
        );
      })
      .join("");
  }

  function renderFactInfoList(items) {
    return '<ul class="fact-list">' + items.map(renderFactItem).join("") + "</ul>";
  }

  function renderPlainInfoList(items) {
    return (
      '<ul class="substance-list">' +
      items
        .map(function (item) {
          return '<li class="substance-list__item">' + escapeHtml(item) + "</li>";
        })
        .join("") +
      "</ul>"
    );
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
    var targets = resolveLearningTargets(normalizedItem.target || normalizedItem.main);

    return [
      '<li class="learning-link-item">',
      targets.length
        ? targets
            .map(function (target) {
              return renderEntryLink(target, normalizedItem);
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

  function renderEntryLink(target, sourceItem) {
    var splitLabel = splitHeading(target.label);
    var displayLabel = sourceItem.target ? sourceItem.main : splitLabel.main;
    var detailText = "";
    var href =
      currentView.activeOvergroup && currentView.activeOvergroup.id === target.groupId
        ? "#" + target.href
        : buildViewHref(category.id, target.groupId, target.href);

    if (sourceItem.target && sourceItem.detail) {
      detailText = sourceItem.detail;
    } else if (target.context && target.context !== splitLabel.main) {
      detailText = target.context;
    } else if (splitLabel.detail) {
      detailText = splitLabel.detail;
    } else if (sourceItem.detail) {
      detailText = sourceItem.detail;
    } else if (
      target.sourceLabel &&
      normalizeLookupKey(sourceItem.main) !== normalizeLookupKey(splitLabel.main) &&
      normalizeLookupKey(target.sourceLabel) !== normalizeLookupKey(splitLabel.main)
    ) {
      detailText = target.sourceLabel;
    }

    return [
      '<a class="wirkstoff-link" href="' +
        escapeHtml(href) +
        '"' +
        renderThemeStyleAttribute(target.theme, "link") +
        '">',
      '<span class="wirkstoff-link__label">' + escapeHtml(displayLabel) + "</span>",
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
    var emphasizedPrefixes = ["Ausschließlich", "Keine", "Nicht"];

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
    return overgroup.title || overgroup.kicker || "";
  }

  function resolveOvergroupTheme(overgroup) {
    return overgroup && overgroup.theme ? overgroup.theme : null;
  }

  function buildLearningLinkLookup(overgroups) {
    var lookup = {};

    overgroups.forEach(function (overgroup) {
      if (overgroup.includeInLearningLookup === false) {
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
            theme: resolveOvergroupTheme(overgroup),
          });

          registerEntryLookupKeys(
            lookup,
            entry,
            overgroup.id,
            resolveOvergroupTheme(overgroup)
          );

          if (!entry.variants) {
            return;
          }

          entry.variants.forEach(function (variant) {
            var variantTarget = {
              label: entry.name,
              href: getVariantAnchorId(entry, variant),
              groupId: overgroup.id,
              context: variant.name,
              theme: resolveOvergroupTheme(overgroup),
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
                  theme: resolveOvergroupTheme(overgroup),
                });
              });
            }
          });
        });
      });
    });

    return lookup;
  }

  function registerEntryLookupKeys(lookup, entry, groupId, theme) {
    var target = {
      label: entry.name,
      href: getEntryAnchorId(entry),
      groupId: groupId,
      theme: theme,
    };

    if (entry.substances) {
      entry.substances.forEach(function (substance) {
        registerLookup(lookup, substance, {
          label: entry.name,
          href: getEntryAnchorId(entry),
          groupId: groupId,
          sourceLabel: substance,
          theme: theme,
        });
      });
    }

    registerLookup(lookup, stripHeadingDetail(entry.name), target);
  }

  function registerLookup(lookup, text, target) {
    lookup[normalizeLookupKey(text)] = target;
  }

  function resolveLearningTargets(text) {
    var normalized = normalizeLookupKey(text);
    var directMatch = learningLinkLookup[normalized];

    if (directMatch) {
      return [directMatch];
    }

    if (String(text).indexOf(" / ") !== -1) {
      return String(text)
        .split(" / ")
        .map(function (part) {
          return learningLinkLookup[normalizeLookupKey(part)];
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

  function setThemeVariables(element, theme, prefix) {
    var themeVariables = buildThemeVariables(theme, prefix);

    Object.keys(themeVariables).forEach(function (variableName) {
      element.style.setProperty(variableName, themeVariables[variableName]);
    });
  }

  function renderThemeStyleAttribute(theme, prefix) {
    var themeVariables = buildThemeVariables(theme, prefix);
    var styleTokens = Object.keys(themeVariables).map(function (variableName) {
      return variableName + ": " + themeVariables[variableName];
    });

    if (!styleTokens.length) {
      return "";
    }

    return ' style="' + escapeHtml(styleTokens.join("; ")) + '"';
  }

  function buildThemeVariables(theme, prefix) {
    var variablePrefix = prefix ? prefix + "-" : "";
    var themeVariables = {};

    if (!theme) {
      return themeVariables;
    }

    if (theme.accent) {
      themeVariables["--" + variablePrefix + "accent"] = theme.accent;
    }

    if (theme.accentSoft) {
      themeVariables["--" + variablePrefix + "accent-soft"] = theme.accentSoft;
    }

    if (theme.accentStrong) {
      themeVariables["--" + variablePrefix + "accent-strong"] = theme.accentStrong;
    }

    return themeVariables;
  }

  function extractSemanticTags(text) {
    var normalizedText = String(text).toLowerCase();
    return rendererConfig.semanticTags.filter(function (definition) {
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

  function setupActiveNavigation() {
    var subLinks = Array.prototype.slice.call(document.querySelectorAll(".page-nav__sub-link"));
    var sections = Array.prototype.slice.call(
      document.querySelectorAll(".content-section[data-nav-anchor]")
    );

    if (!subLinks.length || !sections.length) {
      return;
    }

    var scheduled = false;

    function updateActiveNavigationState() {
      var activeSectionId = getActiveSectionId(sections);

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

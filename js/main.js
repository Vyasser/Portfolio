(function () {
  "use strict";

  var DATA = window.PORTFOLIO_DATA;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------------------------------------------------------------------
     RENDER: About
  --------------------------------------------------------------------- */
  function renderAbout() {
    document.getElementById("aboutLead").textContent = DATA.about.lead;
    document.getElementById("aboutText").innerHTML = DATA.about.paragraphs
      .map(function (p) { return "<p>" + p + "</p>"; })
      .join("");
  }

  /* ---------------------------------------------------------------------
     RENDER: What I Build
  --------------------------------------------------------------------- */
  function renderCapabilities() {
    var grid = document.getElementById("capabilityGrid");
    grid.innerHTML = DATA.capabilities.map(function (c) {
      return (
        '<div class="capability-card reveal">' +
          "<h3>" + escapeHtml(c.name) + "</h3>" +
          "<p>" + escapeHtml(c.detail) + "</p>" +
        "</div>"
      );
    }).join("");
  }

  /* ---------------------------------------------------------------------
     RENDER: Skills
  --------------------------------------------------------------------- */
  function renderSkills() {
    var grid = document.getElementById("skillsGrid");
    grid.innerHTML = DATA.skills.groups.map(function (group) {
      var items = group.items.map(function (i) { return "<li>" + escapeHtml(i) + "</li>"; }).join("");
      return (
        '<div class="skill-group reveal' + (group.primary ? " is-primary" : "") + '">' +
          "<h3>" + escapeHtml(group.name) + "</h3>" +
          "<ul>" + items + "</ul>" +
        "</div>"
      );
    }).join("");
  }

  /* ---------------------------------------------------------------------
     RENDER: Work / Projects
  --------------------------------------------------------------------- */
  function renderWork() {
    var grid = document.getElementById("workGrid");
    grid.innerHTML = DATA.projects.map(function (p) {
      var stack = p.stack.map(function (s) { return "<span>" + escapeHtml(s) + "</span>"; }).join("");
      return (
        '<button class="work-card reveal' + (p.size === "sm" ? " is-sm" : "") + '" type="button" data-project="' + p.id + '">' +
          '<div class="work-visual">' + (p.img ? '<img src="' + p.img + '" alt="' + escapeHtml(p.name) + '">' : '') + '<span class="work-index">' + p.index + '</span></div>' +
          '<div class="work-content">' +
            '<span class="work-cat">' + escapeHtml(p.category) + '</span>' +
            '<div class="work-top">' +
              "<h3>" + escapeHtml(p.name) + "</h3>" +
              '<span class="work-status">' + escapeHtml(p.status) + '</span>' +
            "</div>" +
            '<p class="work-desc">' + escapeHtml(p.description) + '</p>' +
            '<div class="work-stack">' + stack + '</div>' +
            '<span class="work-open">View case study →</span>' +
          "</div>" +
        "</button>"
      );
    }).join("");

    grid.querySelectorAll(".work-card").forEach(function (card) {
      card.addEventListener("click", function () { openModal(card.getAttribute("data-project")); });
    });
  }

  /* ---------------------------------------------------------------------
     RENDER: Process
  --------------------------------------------------------------------- */
  function renderProcess() {
    var list = document.getElementById("processList");
    list.innerHTML = DATA.process.map(function (step) {
      return (
        '<li class="reveal">' +
          '<span class="process-step">' + step.step + '</span>' +
          "<h3>" + escapeHtml(step.name) + "</h3>" +
          "<p>" + escapeHtml(step.detail) + "</p>" +
        "</li>"
      );
    }).join("");
  }

  /* ---------------------------------------------------------------------
     RENDER: Approach
  --------------------------------------------------------------------- */
  function renderApproach() {
    document.getElementById("approachHeading").textContent = DATA.approach.heading;
    document.getElementById("approachAi").textContent = DATA.approach.aiNote;
    var grid = document.getElementById("approachGrid");
    grid.innerHTML = DATA.approach.topics.map(function (t) {
      return (
        '<div class="approach-item reveal">' +
          "<strong>" + escapeHtml(t.name) + "</strong>" +
          "<span>" + escapeHtml(t.detail) + "</span>" +
        "</div>"
      );
    }).join("");
  }

  /* ---------------------------------------------------------------------
     RENDER: Brand statement
  --------------------------------------------------------------------- */
  function renderStatement() {
    document.getElementById("brandStatement").textContent = DATA.brandStatement;
  }

  /* ---------------------------------------------------------------------
     RENDER: Contact + footer
  --------------------------------------------------------------------- */
  function renderContact() {
    var p = DATA.profile;
    var grid = document.getElementById("contactGrid");

    var cards = [
      { label: "Email", value: p.email, href: p.email && p.email.indexOf("YOUR_") === -1 ? "mailto:" + p.email : null , icon: '<svg viewBox="0 49.4 512 399.42"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"/><path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"/><path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"/></g><path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"/><path fill="#c5221f" fill-rule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"/></g></svg>' },
      { label: "GitHub", value: p.github ? p.github.replace(/^https?:\/\//, "") : "YOUR_GITHUB", href: p.github, icon: '<svg viewBox="0 0 1024 1024" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#ffff"/></svg>' },
      { label: "LinkedIn", value: p.linkedin ? p.linkedin.replace(/^https?:\/\//, "") : "YOUR_LINKEDIN", href: p.linkedin, icon: '<svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"/></svg>' },
      { label: "WhatsApp", value: p.whatsapp ? p.whatsapp.replace(/^https?:\/\//, "") : "YOUR_PHONE_NUMBER", href: p.whatsapp, icon: '<svg fill="none" viewBox="0 0 360 362"><path fill="#25D366" fill-rule="evenodd" d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z" clip-rule="evenodd"/></svg>' }
    ];

    grid.innerHTML = cards.map(function (c) {
      var disabled = !c.href;
      var tag = disabled ? "div" : "a";
      var hrefAttr = disabled ? "" : ' href="' + c.href + '" target="_blank" rel="noopener"';
      return (
        "<" + tag + ' class="contact-card' + (disabled ? " is-disabled" : "") + '"' + hrefAttr + ">" +
          '<div class="contact-card-content"> <div class="icon">' + c.icon + "</div>" +
          '<span class="label">' + escapeHtml(c.label) + "</span> </div>" +
          '<span class="value">' + escapeHtml(c.value) + "</span>" +
        "</" + tag + ">"
      );
    }).join("");

    var form = document.getElementById("contactForm");
    var formStatus = document.getElementById("contactFormStatus");
    if (form && formStatus) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var recipient = p.email && p.email.indexOf("YOUR_") === -1 ? p.email : null;

        if (!recipient) {
          formStatus.textContent = "Add your email in data.js before using the form.";
          formStatus.classList.add("is-error");
          return;
        }

        var formData = new FormData(form);
        var subject = "New project inquiry — " + (formData.get("type") || "Web project");
        var body = [
          "Name: " + formData.get("name"),
          "Email: " + formData.get("email"),
          "Project type: " + formData.get("type"),
          "",
          formData.get("message")
        ].join("\n");

        formStatus.classList.remove("is-error");
        formStatus.hidden = false;
        formStatus.textContent = "Opening your email app…";
        window.location.href = "mailto:" + recipient +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(body);
      });
    }

    var footerLinks = document.getElementById("footerLinks");
    footerLinks.innerHTML = cards.map(function (c) {
      return c.href
        ? '<a href="' + c.href + '" target="_blank" rel="noopener">' + c.label + "</a>"
        : "<span>" + c.label + "</span>";
    }).join("");
  }

  /* ---------------------------------------------------------------------
     MODAL / CASE STUDY
  --------------------------------------------------------------------- */
  var overlay = document.getElementById("modalOverlay");
  var modalContent = document.getElementById("modalContent");
  var modalClose = document.getElementById("modalClose");
  var lastFocused = null;

  var STAGES = [
    ["01", "Overview", function (c) { return "<p>" + escapeHtml(c.overview) + "</p>"; }],
    ["02", "The Challenge", function (c) { return "<p>" + escapeHtml(c.challenge) + "</p>"; }],
    ["03", "The Solution", function (c) { return "<p>" + escapeHtml(c.solution) + "</p>"; }],
    ["04", "Features", function (c) {
      return "<ul>" + c.features.map(function (f) { return "<li>" + escapeHtml(f) + "</li>"; }).join("") + "</ul>";
    }],
    ["05", "Interface", function (c) { return "<p>" + escapeHtml(c.interface) + "</p>"; }],
    ["06", "Architecture", function (c) { return "<p>" + escapeHtml(c.architecture) + "</p>"; }],
    ["07", "Technology", function (c) {
      return "<ul>" + c.technology.map(function (t) { return "<li>" + escapeHtml(t) + "</li>"; }).join("") + "</ul>";
    }],
    ["08", "Outcome", function (c) { return "<p>" + escapeHtml(c.outcome) + "</p>"; }]
  ];

  function openModal(id) {
    var project = DATA.projects.find(function (p) { return p.id === id; });
    if (!project) return;

    var stagesHtml = STAGES.map(function (stage) {
      return (
        '<div class="case-stage">' +
          '<span class="case-stage-num">' + stage[0] + " — " + stage[1] + "</span>" +
          stage[2](project.case) +
        "</div>"
      );
    }).join("");

    var demoDisabled = !project.links.demo;
    var repoDisabled = !project.links.repo;

    modalContent.innerHTML =
      '<p class="case-eyebrow">' + escapeHtml(project.category) + "</p>" +
      '<h3 id="modalTitle" class="case-title">' + escapeHtml(project.name) + "</h3>" +
      '<p class="case-meta">' + escapeHtml(project.role) + " · " + escapeHtml(project.status) + "</p>" +
      stagesHtml +
      '<div class="case-links">' +
        '<a class="btn btn-primary" ' + (demoDisabled ? 'aria-disabled="true" tabindex="-1" style="opacity:.4;pointer-events:none;"' : 'href="' + project.links.demo + '" target="_blank" rel="noopener"') + ">Live demo</a>" +
        '<a class="btn btn-ghost" ' + (repoDisabled ? 'aria-disabled="true" tabindex="-1" style="opacity:.4;pointer-events:none;"' : 'href="' + project.links.repo + '" target="_blank" rel="noopener"') + ">Source code</a>" +
      "</div>";

    lastFocused = document.activeElement;
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  modalClose.addEventListener("click", closeModal);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !overlay.hidden) closeModal(); });

  /* ---------------------------------------------------------------------
     NAV: scroll transform + mobile menu
  --------------------------------------------------------------------- */
  function setupNav() {
    var nav = document.getElementById("nav");
    window.addEventListener("scroll", function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 20);
    }, { passive: true });

    var menuBtn = document.getElementById("menuBtn");
    var mobileMenu = document.getElementById("mobileMenu");

    menuBtn.addEventListener("click", function () {
      var open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!open));
      mobileMenu.hidden = open;
      mobileMenu.setAttribute("data-open", String(!open));
      document.body.style.overflow = open ? "" : "hidden";
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuBtn.setAttribute("aria-expanded", "false");
        mobileMenu.hidden = true;
        mobileMenu.setAttribute("data-open", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------------------------------------------------------------------
     SCROLL REVEAL
  --------------------------------------------------------------------- */
  function setupReveal() {
    var items = document.querySelectorAll(".reveal");
    if (reduceMotion) {
      items.forEach(function (el) { el.classList.add("in-view"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------------------------------------------------------------------
     MAGNETIC BUTTONS (desktop, fine pointer, motion allowed)
  --------------------------------------------------------------------- */
  function setupMagnetic() {
    if (reduceMotion || !finePointer) return;
    document.querySelectorAll(".magnetic").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        el.style.setProperty("--mx", (x * 0.25) + "px");
        el.style.setProperty("--my", (y * 0.25) + "px");
      });
      el.addEventListener("mouseleave", function () {
        el.style.setProperty("--mx", "0px");
        el.style.setProperty("--my", "0px");
      });
    });
  }

  /* ---------------------------------------------------------------------
     CUSTOM CURSOR (desktop, fine pointer, motion allowed)
  --------------------------------------------------------------------- */
  function setupCursor() {
    if (reduceMotion || !finePointer) return;
    var dot = document.getElementById("cursorDot");
    dot.classList.add("is-active");

    window.addEventListener("mousemove", function (e) {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    });

    document.querySelectorAll("a, button").forEach(function (el) {
      el.addEventListener("mouseenter", function () { dot.classList.add("is-hover"); });
      el.addEventListener("mouseleave", function () { dot.classList.remove("is-hover"); });
    });
  }

  /* ---------------------------------------------------------------------
     HERO PARALLAX (subtle, desktop only, motion allowed)
     Base rotation always applies via data-rotate; parallax only adds a
     translate on top of it, so cards keep their tilt at rest.
  --------------------------------------------------------------------- */
  function setupParallax() {
    var visual = document.getElementById("heroVisual");
    if (!visual) return;
    var cards = visual.querySelectorAll("[data-depth]");

    function applyTransform(card, moveX, moveY) {
      var rotate = card.getAttribute("data-rotate") || "0deg";
      card.style.transform = "rotate(" + rotate + ") translate(" + moveX + "px, " + moveY + "px)";
    }

    cards.forEach(function (card) { applyTransform(card, 0, 0); });

    if (reduceMotion || !finePointer) return;

    visual.addEventListener("mousemove", function (e) {
      var rect = visual.getBoundingClientRect();
      var relX = (e.clientX - rect.left) / rect.width - 0.5;
      var relY = (e.clientY - rect.top) / rect.height - 0.5;
      cards.forEach(function (card) {
        var depth = parseFloat(card.getAttribute("data-depth")) || 0.5;
        applyTransform(card, relX * 18 * depth, relY * 18 * depth);
      });
    });

    visual.addEventListener("mouseleave", function () {
      cards.forEach(function (card) { applyTransform(card, 0, 0); });
    });
  }

  /* ---------------------------------------------------------------------
     INIT
  --------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderAbout();
    renderCapabilities();
    renderSkills();
    renderWork();
    renderProcess();
    renderApproach();
    renderStatement();
    renderContact();

    setupNav();
    setupReveal();
    setupMagnetic();
    setupCursor();
    setupParallax();
  });
})();

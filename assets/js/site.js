(function () {
  "use strict";
  var root = document.documentElement;

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  // Tema: açık/koyu. Varsayılan sistem tercihidir; seçim bu tarayıcıda hatırlanır.
  var themeBtn = document.querySelector("[data-theme-toggle]");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      if (!current) current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      themeBtn.setAttribute("aria-pressed", String(next === "dark"));
      store("theme", next);
    });
  }

  // Mobil menü
  var header = document.querySelector(".site-header");
  var menuBtn = document.querySelector("[data-menu-toggle]");
  if (header && menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = header.getAttribute("data-open") === "true";
      header.setAttribute("data-open", String(!open));
      menuBtn.setAttribute("aria-expanded", String(!open));
      menuBtn.setAttribute("aria-label", open ? menuBtn.dataset.labelOpen : menuBtn.dataset.labelClose);
    });
    header.addEventListener("click", function (e) {
      if (e.target === header && header.getAttribute("data-open") === "true") {
        header.setAttribute("data-open", "false");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", menuBtn.dataset.labelOpen);
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && header.getAttribute("data-open") === "true") {
        header.setAttribute("data-open", "false");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.focus();
      }
    });
  }

  // Sözlük: ?q= ile ya da arama kutusuyla süzme
  var list = document.querySelector("[data-terms]");
  var input = document.querySelector("[data-terms-filter]");
  if (list && input) {
    var locale = root.lang || "en";
    var items = Array.prototype.slice.call(list.querySelectorAll("li"));
    var filter = function () {
      var q = input.value.trim().toLocaleLowerCase(locale);
      items.forEach(function (li) {
        var hay = (li.getAttribute("data-search") || li.textContent).toLocaleLowerCase(locale);
        li.hidden = q !== "" && hay.indexOf(q) === -1;
      });
    };
    var params = new URLSearchParams(window.location.search);
    if (params.get("q")) input.value = params.get("q");
    input.addEventListener("input", filter);
    filter();
  }
})();

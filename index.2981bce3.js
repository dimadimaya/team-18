!function(){var e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-button-close]"),s=document.querySelector("[data-menu]"),a=document.querySelector("[data-menu-backdrop]"),d="true"===e.getAttribute("aria-expanded");e.addEventListener("click",(function(){t.classList.add("is-open"),e.classList.add("is-open"),e.setAttribute("aria-expanded",!d),s.classList.toggle("is-open"),a.classList.add("is-open"),document.body.classList.add("body-fixed")})),a.addEventListener("click",(function(){t.classList.remove("is-open"),e.classList.remove("is-open"),e.setAttribute("aria-expanded",!d),s.classList.toggle("is-open"),a.classList.remove("is-open"),document.body.classList.remove("body-fixed")}))}();
//# sourceMappingURL=index.2981bce3.js.map

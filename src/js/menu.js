(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuBtnRefClose = document.querySelector('[data-menu-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileMenuRefBackdrop = document.querySelector('[data-menu-backdrop]');
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true';

  function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);
  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);
  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
}
  
  let scrlBarWdth = getScrollbarWidth();

  menuBtnRef.addEventListener('click', () => {
    menuBtnRefClose.classList.add('is-open');
    menuBtnRef.classList.add('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    mobileMenuRefBackdrop.classList.add('is-open');
    document.body.classList.add('body-fixed');
    //Adding previously calculated width of the vertical scrool pane as right padding of <body>
    document.body.style.paddingRight = scrlBarWdth + "px";
  });

  mobileMenuRefBackdrop.addEventListener('click', () => {
    menuBtnRefClose.classList.remove('is-open');
    menuBtnRef.classList.remove('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    mobileMenuRefBackdrop.classList.remove('is-open');
    document.body.classList.remove('body-fixed');
    document.body.style.paddingRight = 0;
    //Removing right padding of <body>
  });
})();

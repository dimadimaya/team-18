(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuBtnRefClose = document.querySelector('[data-menu-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileMenuRefBackdrop = document.querySelector('[data-menu-backdrop]');
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true';
  menuBtnRef.addEventListener('click', () => {
    menuBtnRefClose.classList.add('is-open');
    menuBtnRef.classList.add('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    mobileMenuRefBackdrop.classList.add('is-open');
    document.body.classList.add('body-fixed');
  });
  mobileMenuRefBackdrop.addEventListener('click', () => {
    menuBtnRefClose.classList.remove('is-open');
    menuBtnRef.classList.remove('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    mobileMenuRefBackdrop.classList.remove('is-open');
    document.body.classList.remove('body-fixed');
  });
})();

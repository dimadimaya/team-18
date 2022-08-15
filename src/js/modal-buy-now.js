(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-buy-open1]'),
    openModalBtn2: document.querySelector('[data-modal-buy-open2]'),
    closeModalBtn: document.querySelector('[data-modal-buy-close]'),
    modal: document.querySelector('[data-modal-buy]'),
  };
  const maxWidth = document.body.clientWidth;

  refs.openModalBtn1.addEventListener('click', addModal);
  refs.openModalBtn2.addEventListener('click', addModal);

  refs.closeModalBtn.addEventListener('click', removeModal);

  function addModal() {
    refs.modal.classList.remove('is-hidden');
    document.body.setAttribute(
      'style',
      `max-width: ${maxWidth}px; overflow: hidden;`
    );
  }

  function removeModal() {
    document.body.classList.remove('modal-buy-open');
    refs.modal.classList.add('is-hidden');
    document.body.removeAttribute('style');
  }
})();

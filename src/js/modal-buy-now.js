(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-buy-open]'),
    closeModalBtn: document.querySelector('[data-modal-buy-close]'),
    modal: document.querySelector('[data-modal-buy]'),
  };
  const maxWidth = document.body.clientWidth;

  refs.openModalBtn.addEventListener('click', addModal);
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

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-buy-open]'),
//     closeModalBtn: document.querySelector('[data-modal-buy-close]'),
//     modal: document.querySelector('[data-modal-buy]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

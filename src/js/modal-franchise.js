(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-locations-open]"),
    closeModalBtn: document.querySelector("[data-modal-locations-close]"),
    modal: document.querySelector("[data-modal-locations]"),
  };
  const maxWidth = document.body.clientWidth;

  refs.openModalBtn.addEventListener('click', addModal);
  refs.closeModalBtn.addEventListener('click', removeModal);


  function addModal() {
     refs.modal.classList.remove('is-hidden');
     document.body.setAttribute('style', `max-width: ${maxWidth}px; overflow: hidden;`);
  }

    function removeModal() {
    document.body.classList.remove('modal-locations-open');
    refs.modal.classList.add('is-hidden');
    document.body.removeAttribute('style');
  }

})();
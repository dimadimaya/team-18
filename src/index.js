(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
  
const buttons = document.querySelectorAll('.product-card button');
buttons.forEach((btn) => btn.addEventListener('click', flipCard));
function flipCard({ currentTarget }) {
  currentTarget.closest('.products-list__wraper').classList.toggle('is-flipped');
}
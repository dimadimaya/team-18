!function(){var e={openModalBtn1:document.querySelector("[data-modal-buy-open1]"),openModalBtn2:document.querySelector("[data-modal-buy-open2]"),closeModalBtn:document.querySelector("[data-modal-buy-close]"),modal:document.querySelector("[data-modal-buy]")},o=document.body.clientWidth;function t(){e.modal.classList.remove("is-hidden"),document.body.setAttribute("style","max-width: ".concat(o,"px; overflow: hidden;"))}e.openModalBtn1.addEventListener("click",t),e.openModalBtn2.addEventListener("click",t),e.closeModalBtn.addEventListener("click",(function(){document.body.classList.remove("modal-buy-open"),e.modal.classList.add("is-hidden"),document.body.removeAttribute("style")}))}();
//# sourceMappingURL=index.7c532f11.js.map
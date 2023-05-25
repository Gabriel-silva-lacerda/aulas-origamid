export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleMotal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    function cliqueForaModal(event) {
      if (event.target === this) toggleMotal(event);
    }

    botaoAbrir.addEventListener("click", toggleMotal);
    botaoFechar.addEventListener("click", toggleMotal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}

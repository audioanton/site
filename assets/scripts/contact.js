const dialogElement = document.getElementById("contactDialog");

function openContactModal() {
  dialogElement.showModal();
}

function closeContactModal() {
  dialogElement.close();
}

dialogElement.addEventListener("click", (event) => {
  if (event.target === dialogElement) {
    dialogElement.close();
  }
});

function toggleMobileNav() {
  const links = document.querySelector(".mobile-links")
  links.classList.toggle('mobile-links-hidden');
}

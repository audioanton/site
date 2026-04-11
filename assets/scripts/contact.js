const dialogElement = document.getElementById("contactDialog");
const closeContactBtn = document.getElementById("closeContactBtn");
const contactModal = document.getElementById("contactButton");

contactModal.addEventListener("click", (event) => {
  dialogElement.showModal();
});

closeContactBtn.addEventListener("click", (event) => {
  dialogElement.close();
});

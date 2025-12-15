const formModal = document.getElementById("formModal");
const contactButton = document.getElementById("contactButton");
const closeSpan = document.getElementById("closeForm");

contactButton.onclick = function () {
  formModal.style.display = "flex";
};

closeSpan.onclick = function () {
  formModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == formModal) {
    formModal.style.display = "none";
  }
};

function onSubmit(token) {
  document.getElementById("contactForm").submit();
}

const posters = document.querySelectorAll(".poster");

posters.forEach(poster => poster.addEventListener("click", function (e) {
    this.classList.add("poster-active")
}))

document.querySelectorAll('.poster').forEach(poster => {
    const url = poster.dataset.poster;
    poster.style.setProperty('--poster-url', `url(${url})`);
});
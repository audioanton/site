function openTab(event, tabName) {
    hideTabs()
    removeActive()
    // use classList.toggle() instead of inline style
    document.getElementById(tabName).style.display = "block"
    event.currentTarget.classList.add("active")
}

function hideTabs() {
    document.querySelectorAll(".tabcontent").forEach(
        tab => tab.style.display = "none"
    )
}

function removeActive() {
    const active = document.querySelector(".active")
    if (active !== null)
        active.classList.remove("active")
}
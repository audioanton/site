function openTab(event, tabName) {
    hideTab()
    toggleActiveButton(event)
    makeTabVisible(document.getElementById(tabName))
}

function makeTabVisible(tab) {
    tab.classList.replace("hidden", "tabcontent")
}

function hideTab() {
    document.querySelector(".tabcontent").classList.replace("tabcontent", "hidden")
}

function toggleActiveButton(event) {
    document.querySelector(".active").classList.remove("active")
    event.currentTarget.classList.add("active")
}

// make first tab visible
makeTabVisible(document.querySelector(".hidden"))
document.querySelector(".tablinks").classList.add("active")
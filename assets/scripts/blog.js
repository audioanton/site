function shortenText(text, length) {
    if (text.length > length)
        return text.slice(0, length).trimEnd() + '...'
    else 
        return text
}

document.querySelectorAll(".card-post").forEach(
    div => div.addEventListener("click", () => {
        location.href=div.dataset.url
    })
);

// TODO: change div background on hover also

// shorten all excerpts
// document.querySelectorAll("p").forEach(excerpt => excerpt.textContent = shortenText(excerpt.textContent, 80))
// shorten all headings
// document.querySelectorAll("h3").forEach(heading => heading.textContent = shortenText(heading.textContent, 40))
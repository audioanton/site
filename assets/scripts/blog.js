function shortenText(text, length) {
    if (text.length > length)
        return text.slice(0, length).trimEnd() + '...'
    else 
        return text
}

// shorten all excerpts
document.querySelectorAll("p").forEach(excerpt => excerpt.textContent = shortenText(excerpt.textContent, 80))
// shorten all headings
document.querySelectorAll("h3").forEach(heading => heading.textContent = shortenText(heading.textContent, 40))
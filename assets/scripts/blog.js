function shortenText(text, length) {
    if (text.length > length) {
        wordEnd = text.slice(length).search(/\s|\./) + length
        return text.slice(0, wordEnd) + '...'
    }        
    else 
        return text
}

document.querySelectorAll(".card-post").forEach(
    div => div.addEventListener("click", () => {
        location.href=div.dataset.url
    })
);

// shorten all excerpts
document.querySelectorAll("p").forEach(
    excerpt => excerpt.innerText = shortenText(excerpt.innerText, 60)
)
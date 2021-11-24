let languageButton = document.getElementById("language-button")
let paragraphs = document.querySelectorAll(".english")
arrayparagraphs = Array.from(paragraphs);
console.log(arrayparagraphs);

function changeLanguage() {
    arrayparagraphs.classList.add("hidden");
    return arrayparagraphs;
}

languageButton.addEventListener('click', changeLanguage)

/*a function that changes elements with 
lang="en" to .hidden = true and lang="yi" 
to .hidden = false and vice versa when 
clicked again
*/
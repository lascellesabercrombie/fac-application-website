let languageButton = document.getElementById("language-button")

function changeLanguage() {
    if (lang="en") {
        Element.hidden = true;
    }
    Element.hidden = false;
}

languageButton.addEventListener('click', changeLanguage)

/*a function that changes elements with 
lang="en" to .hidden = true and lang="yi" 
to .hidden = false and vice versa when 
clicked again
*/
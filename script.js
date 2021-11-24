let languageButton = document.getElementById("language-button")
let english = document.querySelectorAll(".english")
let yiddish = document.querySelectorAll(".french")

function changeLanguage() {
    english.forEach((element) => {
        element.classList.add("hidden")});
      return english;
}

languageButton.addEventListener('click', changeLanguage)

/*a function that changes elements with 
lang="en" to .hidden = true and lang="yi" 
to .hidden = false and vice versa when 
clicked again
*/
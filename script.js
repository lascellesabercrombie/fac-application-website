let languageButton = document.getElementById("language-button")
let english = document.querySelectorAll(".english")
let yiddish = document.querySelectorAll(".yiddish")

function changeLanguage(language) {
    language.forEach((element) => {
      if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
        element.classList.add("visible");}
      else {
        element.classList.remove("visible");
        element.classList.add("hidden");}
      }

      );
      return language;
}

function changeAlignment(language) {
  language.forEach((element) => {

    if (element.style.direction ="rtl"){
      element.style.direction ="ltr";
      element.style.textAlign = "left";
    }
    else{
      element.style.direction ="rtl";
      element.style.textAlign = "right";
    }
  })
  return language;
}

function langChanger() {
  changeLanguage(english);
  changeLanguage(yiddish);
  changeAlignment(english && yiddish);
}

languageButton.addEventListener('click', langChanger)

/*a function that changes elements with 
lang="en" to .hidden = true and lang="yi" 
to .hidden = false and vice versa when 
clicked again
*/
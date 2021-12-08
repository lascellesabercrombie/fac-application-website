let languageButton = document.getElementById("language-button")
let english = document.querySelectorAll(".english")
let yiddish = document.querySelectorAll(".yiddish")
let nav = document.querySelector("nav")
let projectContainer = document.querySelector(".project-container")
let linkContainer = document.querySelector(".link-container")

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

function changeFlowAlignment(container) {

if (container.classList.contains("english-container")) {
  container.classList.remove("english-container");
  container.classList.add("yiddish-container");
}
else {
   container.classList.remove("yiddish-container");
  container.classList.add("english-container") 
}
}

function langChanger() {
  changeLanguage(english);
  changeLanguage(yiddish);
  changeFlowAlignment(nav);
  changeFlowAlignment(projectContainer);
}


languageButton.addEventListener('click', langChanger)
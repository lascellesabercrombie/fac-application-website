let languageButton = document.getElementById("language-button")
let english = document.querySelectorAll(".english")
let yiddish = document.querySelectorAll(".yiddish")
let nav = document.querySelector("nav")
let projectContainer = document.querySelector(".project-container")
let linkContainer = document.querySelector(".link-container")
let test = document.querySelector("#test")
let intro = document.querySelector("#intro")

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

function changeAlignment() {
if (nav.style.flexFlow = "row wrap"){
nav.style.flexFlow = "row-reverse wrap";
// linkContainer.style.flexFlow = "row-reverse wrap";
}
else if (nav.style.flexFlow = "row-reverse wrap") {
  nav.style.flexFlow = "row wrap";
}
// else if (test.classList.contains("english")) {
// nav.style.flexFlow = "row wrap";
// linkContainer.style.flexFlow = "row wrap";
// }

}

//what i may want is to have a class fed in generically that
//i then make more specific in a second function
//to limit repetition
//but first i need to work out the project gallery, i think
//maybe better done with classes

//if language detected is yiddish, then flexboxes (navbar, project gallery and end links)
//should change direction
//if english, then back

function langChanger() {
  changeLanguage(english);
  changeLanguage(yiddish);
  // changeAlignment(english)
  // changeAlignment(yiddish);
}

languageButton.addEventListener('click', langChanger)
languageButton.addEventListener('click', changeAlignment)

/*a function that changes elements with 
lang="en" to .hidden = true and lang="yi" 
to .hidden = false and vice versa when 
clicked again
*/
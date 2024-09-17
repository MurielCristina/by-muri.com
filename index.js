// NAVBAR

let themeButton = document.getElementById("theme-toggle");
let body = document.body;
let topBar = document.getElementById("top-bar");

themeButton.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  body.classList.toggle("dark-theme"); //  start with dark theme
  topBar.classList.toggle("dark-theme");
  topBar.classList.toggle("light-theme"); //  start with ligth theme the navbar
  if (body.classList.contains("dark-theme")) {
    themeButton.textContent = "Switch to Light";
  } else {
    themeButton.textContent = "Switch to Dark";
  }
});

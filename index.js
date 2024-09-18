// NAVBAR
let themeButton = document.getElementById("theme-toggle");
let body = document.body;
let topBar = document.getElementById("top-bar");
let bigFooter = document.getElementById("big-footer");

themeButton.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  body.classList.toggle("dark-theme"); //  start with dark theme
  topBar.classList.toggle("dark-theme");
  topBar.classList.toggle("light-theme"); //  start with ligth theme the navbar
  bigFooter.classList.toggle("dark-theme");
  bigFooter.classList.toggle("light-theme"); //  start with ligth theme the navbar
  if (body.classList.contains("dark-theme")) {
    themeButton.textContent = "Switch to Light";
  } else {
    themeButton.textContent = "Switch to Dark";
  }
});

// alert in the CONTACT
let mailButton = document.getElementById("mail");
let phoneButton = document.getElementById("phone");

mailButton.addEventListener("click", () => {
  alert(
    "I know how annoying it is when the mail app opens. Here’s my email for you to copy and paste: mcsanchezlaguna@gmail.com"
  );
});

phoneButton.addEventListener("click", () => {
  alert("Please call between 13-19 (GMT+2) - (🇪🇸)648440317");
});

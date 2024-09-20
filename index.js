// NAVBAR
let themeButton = document.getElementById("theme-toggle");
let body = document.body;
let topBar = document.getElementById("top-bar");
let bigFooter = document.getElementById("big-footer");

themeButton.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");

    topBar.classList.remove("light-theme");
    topBar.classList.add("dark-theme");

    if (bigFooter) {
      bigFooter.classList.remove("light-theme");
      bigFooter.classList.add("dark-theme");
    }

    themeButton.textContent = "🌑";
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");

    topBar.classList.remove("dark-theme");
    topBar.classList.add("light-theme");

    if (bigFooter) {
      bigFooter.classList.remove("dark-theme");
      bigFooter.classList.add("light-theme");
    }

    themeButton.textContent = "☀️";
  }
});

// alert in the CONTACT
let mailButton = document.getElementById("mail");
let phoneButton = document.getElementById("phone");

if (mailButton) {
  mailButton.addEventListener("click", () => {
    alert(
      "I know how annoying it is when the mail app opens. Here’s my email for you to copy and paste: mcsanchezlaguna@gmail.com"
    );
  });
}

if (phoneButton) {
  phoneButton.addEventListener("click", () => {
    alert("Please call between 13-19 (GMT+2) - (🇪🇸)648440317");
  });
}

// typing effect in About page

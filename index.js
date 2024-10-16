// Theme toggle
let themeButton = document.getElementById("theme-toggle");
let body = document.body;
let topBar = document.getElementById("top-bar");
let bigFooter = document.getElementById("big-footer");

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");

    topBar.classList.remove("light-theme");
    topBar.classList.add("dark-theme");

    if (bigFooter) {
      bigFooter.classList.remove("light-theme");
      bigFooter.classList.add("dark-theme");
    }

    themeButton.textContent = "🌒";
  } else {
    // Por defecto, aplicar el tema oscuro
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");

    topBar.classList.remove("dark-theme");
    topBar.classList.add("light-theme");

    if (bigFooter) {
      bigFooter.classList.remove("dark-theme");
      bigFooter.classList.add("light-theme");
    }

    themeButton.textContent = "🌔";
  }

  const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
  setLanguage(savedLanguage);

  const typeEffectElement = document.getElementById("type-effect");
  if (typeEffectElement) {
    const phrases = loadPhrases(savedLanguage);
    typeEffect(typeEffectElement, phrases);
  }

  // Añadir evento de cambio de idioma a los botones
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLang = button.getAttribute("data-language");
      setLanguage(selectedLang);
    });
  });
});

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

    themeButton.textContent = "🌒";

    // Guardar preferencia en localStorage
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");

    topBar.classList.remove("dark-theme");
    topBar.classList.add("light-theme");

    if (bigFooter) {
      bigFooter.classList.remove("dark-theme");
      bigFooter.classList.add("light-theme");
    }

    themeButton.textContent = "🌔";

    // Guardar preferencia en localStorage
    localStorage.setItem("theme", "dark");
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

// Efecto de escritura con traducciones
function loadPhrases(language) {
  return [
    translations[language].about.lover1,
    translations[language].about.lover2,
    translations[language].about.lover3,
    translations[language].about.lover4,
  ];
}

function updateTypeEffect(language) {
  const typeEffectElement = document.getElementById("type-effect");
  if (typeEffectElement) {
    const phrases = loadPhrases(language);
    typeEffect(typeEffectElement, phrases);
  }
}

function typeEffect(element, phrases) {
  let phraseIndex = 0;
  let letterIndex = 0;
  let currentPhrase = "";
  let isDeleting = false;
  let delay = 200;

  function type() {
    if (phraseIndex >= phrases.length) {
      phraseIndex = 0;
    }

    currentPhrase = phrases[phraseIndex];
    let displayedText = currentPhrase.substring(0, letterIndex);
    element.innerHTML = `and a - <span>${displayedText}</span>`;

    if (!isDeleting) {
      if (letterIndex < currentPhrase.length) {
        letterIndex++;
        delay = 200; // Ajuste de la velocidad de escritura
      } else {
        isDeleting = true;
        delay = 2000; // Pausa antes de borrar
      }
    } else {
      if (letterIndex > 0) {
        letterIndex--;
        delay = 100; // Velocidad de borrado
      } else {
        isDeleting = false;
        phraseIndex++;
        delay = 500; // Pausa antes de la siguiente frase
      }
    }

    setTimeout(type, delay);
  }

  type();
}

// Cambio de idioma
let languageButtons = document.querySelectorAll(".language-button");

function setLanguage(language) {
  localStorage.setItem("selectedLanguage", language);
  translatePage(language);
  updateTypeEffect(language);
}

function translatePage(language) {
  const elements = document.querySelectorAll("[data-translate-key]");
  elements.forEach((element) => {
    const translateKey = element.getAttribute("data-translate-key");
    const keys = translateKey.split("."); // para estructuras más profundas

    let translation = translations[language];
    keys.forEach((key) => {
      if (translation) {
        translation = translation[key];
      }
    });

    if (translation) {
      element.innerHTML = translation;
    }
  });
}

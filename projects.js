//Array best brojects (up to 6)

let bestProjects = [
  {
    title: "Welcome to Panama",
    tools: [
      "HTML/CSS",
      "SEO",
      "Bootstrap",
      "Responsive",
      "Hosting",
      "Git & GitHub",
      "VS Code",
    ],
    description: `Embark on a virtual journey with "Welcome to Panama," a vibrant web application designed to showcase the beauty and culture of Panama.`,
    gitHubLink: "https://github.com/MurielCristina/Travel-to-PANAMA---Project",
    liveDemo: "https://travel-to-panama.netlify.app/",
    image: "/images/snaps of projects/Welcome to Panama.jpeg",
  },
  {
    title: "Dictionary",
    tools: [
      "React.js",
      "API",
      "Bootstrap",
      "Hosting",
      "CSS",
      "JavaScript",
      "Git & GitHub",
      "VS Code",
      "Responsive",
    ],
    description: `Discover language with this dictionary, designed to provide
                quick and accurate definitions and images through cutting-edge
                technology.`,
    gitHubLink: "https://github.com/MurielCristina/react-dictionary-project",
    liveDemo: "https://regal-toffee-5eb8d7.netlify.app/",
    image: "/images/snaps of projects/Dictionary.jpeg",
  },
  {
    title: "Weather Forecasts",
    tools: [
      "React.js",
      "API",
      "Bootstrap",
      "Hosting",
      "CSS",
      "JavaScript",
      "Git & GitHub",
      "VS Code",
      "Responsive",
    ],
    description: `Stay updated with real-time weather forecasts using this
                React-powered app, designed to provide accurate, up-to-date
                weather information.`,
    gitHubLink: "https://github.com/MurielCristina/react-weather-search-engine",
    liveDemo: "https://calm-mousse-9a4410.netlify.app/",
    image: "/images/snaps of projects/React - Weather Forecast.jpeg",
  },
  {
    title: "Family World Clock",
    tools: [
      "HTML/CSS",
      "JavaScript",
      "API",
      "Responsive",
      "Hosting",
      "Git & GitHub",
      "VS Code",
    ],
    description: `This web application provides accurate, real-time time zone
                information, ensuring you never miss a moment with your loved
                ones.`,
    gitHubLink: "https://github.com/MurielCristina/World-Clock-Project",
    liveDemo: "https://world-clock-codedbymuri.netlify.app/",
    image: "/images/snaps of projects/Family World Clock.jpeg",
  },
  {
    title: "AI Bare Pantry Chef",
    tools: [
      "HTML/CSS",
      "JavaScript",
      "VS Code",
      "Git & GitHub",
      "Hosting",
      "API",
      "AI",
      "Responsive",
    ],
    description: `Utilizing AI, this app helps you create delicious recipes with
                the ingredients you have on hand. Say goodbye to food waste and
                hello to culinary creativity!`,
    gitHubLink: "https://github.com/MurielCristina/Bare-Pantry-Chef-Project",
    liveDemo: "https://bare-pantry-chef.netlify.app/",
    image: "/images/snaps of projects/AI Bare Pantry Chef.jpeg",
  },
];

let projectContainer = document.querySelector(".project-boxes");

bestProjects.forEach((project) => {
  let projectHTML = `
    <div class="project-box">
            <div class="project-box-content">
              <h3>${project.title}</h3>
              <p class="tools">
              ${project.tools.map((tool) => `<span>${tool}</span>`).join("")}
              </p>
              <p> ${project.description}</p>
              <a
                href="${project.gitHubLink}"
                target="_blank"
                rel="noreferrer"
                title="Open-source code at GitHub"
                ><i class="fa-brands fa-github project-page-icon"></i
              ></a>
              <a
                href="${project.liveDemo}"
                target="_blank"
                rel="noreferrer"
                title="Launch-project"
                ><i
                  class="fa-solid fa-arrow-up-right-from-square project-page-icon"
                ></i
              ></a>
            </div>
            <div class="project-box-content project-snap">
              <img
                src="${project.image}"
                alt="Snap of the project"
                class="img-fluid"
              />
            </div>
          </div>
        `;

  projectContainer.insertAdjacentHTML("beforeend", projectHTML);
});

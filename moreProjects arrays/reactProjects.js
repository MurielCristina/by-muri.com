let reactProjects = [
  {
    title: "Dictionary",
    tools: [
      "React.js",
      "Bootstrap",
      "API",
      "Hosting",
      "CSS",
      "JavaScript",
      "VS Code",
      "Git & GitHub",
    ],
    description: `Discover language with this dictionary, designed to provide
                  quick and accurate definitions and images through cutting-edge
                  technology.`,
    gitHubLink: "https://github.com/MurielCristina/react-dictionary-project",
    launchProject: "https://regal-toffee-5eb8d7.netlify.app/",
  },
  {
    title: "Weather Forecasts",
    tools: [
      "React.js",
      "Bootstrap",
      "API",
      "Hosting",
      "CSS",
      "JavaScript",
      "VS Code",
      "Git & GitHub",
    ],
    description: `Stay updated with real-time weather forecasts using this
                  React-powered app, designed to provide accurate, up-to-date
                  weather information.`,
    gitHubLink: "https://github.com/MurielCristina/react-weather-search-engine",
    launchProject: "https://calm-mousse-9a4410.netlify.app/",
  },
];

let projectContainerReact = document.querySelector(".react-projects");

reactProjects.forEach((project) => {
  let projectHTML = `
    <div class="projectsCards">
        <h3>${project.title}</h3>
        <p class="tools">
            ${project.tools
              .map((tool) => `<span>${tool}</span>`)
              .join(" ")}          
        </p>
        <p>${project.description}</p>
        <a
            href="${project.gitHubLink}"
            target="_blank"
            rel="noreferrer"
            title="Open-source code at GitHub"
        ><i class="fa-brands fa-github project-page-icon"></i>
        </a>
        <a 
            href="${project.launchProject}"
            target="_blank"
            rel="noreferrer"
            title="Launch-project"
        ><i class="fa-solid fa-arrow-up-right-from-square project-page-icon"></i>
        </a>
    </div>
    `;

  projectContainerReact.insertAdjacentHTML("beforeend", projectHTML);
});

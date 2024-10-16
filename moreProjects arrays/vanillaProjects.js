let vanillaProjects = [
  {
    title: "BS: A True Inspiration",
    tools: [
      "HTML/CSS",
      "Bootstrap",
      "VS Code",
      "Hosting",
      "JavaScript",
      "Git & GitHub",
      "Responsive",
    ],
    description: `Discover Britney Spears' journey of strength and resilience,
                  highlighting her influence as an inspiring female role model.`,
    gitHubLink: "https://github.com/MurielCristina/Inspiring-Female-Role-Model",
    launchProject: "https://bs-a-true-inspiration-codedbymuri.netlify.app/",
  },
  {
    title: "My first Phone",
    tools: [
      "HTML/CSS",
      "JavaScript",
      "VS Code",
      "Git & GitHub",
      "Bootstrap",
      "Hosting",
      "SEO",
      "Responsive",
    ],
    description: `Explore this responsive web app, crafted to enhance mobile
                  usability and design.`,
    gitHubLink: "https://github.com/MurielCristina/First-Phone-Challenge",
    launchProject: "https://my-first-phone-challenge.netlify.app",
  },
  {
    title: "Portfolio Project",
    tools: [
      "HTML/CSS",
      "JavaScript",
      "VS Code",
      "Git & GitHub",
      "Bootstrap",
      "Hosting",
      "SEO",
      "Responsive",
    ],
    description: `Showcase your skills and projects with this elegant portfolio,
                  designed to highlight your work and attract opportunities.`,
    gitHubLink: "https://github.com/MurielCristina/Personal-Portfolio",
    launchProject: "https://muri-portfolio.netlify.app",
  },
  {
    title: "Dream Travel Destination",
    tools: [
      "HTML/CSS",
      "JavaScript",
      "VS Code",
      "Git & GitHub",
      "Bootstrap",
      "Hosting",
      "SEO",
      "Responsive",
    ],
    description: `Explore the stunning Amalfi Coast with this interactive web
                  application.`,
    gitHubLink:
      "https://github.com/MurielCristina/Dream-Travel-Destination-Challenge",
    launchProject: "https://the-amalfi-coast.netlify.app",
  },
  {
    title: "Welcome to Panama",
    tools: [
      "HTML/CSS",
      "JavaScript",
      "VS Code",
      "Git & GitHub",
      "Bootstrap",
      "Hosting",
      "SEO",
      "Responsive",
    ],
    description: `"Welcome to Panama," a vibrant web application designed to
                  showcase the beauty and culture of Panama.`,
    gitHubLink: "https://github.com/MurielCristina/Travel-to-PANAMA---Project",
    launchProject: "https://travel-to-panama.netlify.app",
  },
  {
    title: "AI Bare Pantry Chef",
    tools: [
      "HTML/CSS",
      "JavaScript",
      "VS Code",
      "Git & GitHub",
      "Bootstrap",
      "Hosting",
      "SEO",
      "Responsive",
      "API",
      "AI",
    ],
    description: `Utilizing AI, this app helps you create delicious recipes with
                  the ingredients you have on hand.`,
    gitHubLink: "https://github.com/MurielCristina/Bare-Pantry-Chef-Project",
    launchProject: "https://bare-pantry-chef.netlify.app",
  },
  {
    title: "Family World Clock",
    tools: [
      "HTML/CSS",
      "JavaScript",
      "VS Code",
      "Git & GitHub",
      "Bootstrap",
      "Hosting",
      "API",
      "Responsive",
    ],
    description: `This web application provides accurate, real-time time zone
                  information, ensuring you never miss a moment with your loved
                  ones.`,
    gitHubLink: "https://github.com/MurielCristina/World-Clock-Project",
    launchProject: "https://world-clock-codedbymuri.netlify.app",
  },
  {
    title: "Weather Forecast",
    tools: [
      "HTML/CSS",
      "JavaScript",
      "VS Code",
      "Git & GitHub",
      "API",
      "Hosting",
      "Responsive",
    ],
    description: `Stay informed with real-time weather forecasts using this
                  sleek vanilla JavaScript app`,
    gitHubLink: "https://github.com/MurielCristina/Vanilla-Weather-Forecast",
    launchProject: "https://vanilla-weather-forecast-codedbymuri.netlify.app",
  },
  {
    title: "Weather Search",
    tools: [
      "HTML/CSS",
      "JavaScript",
      "VS Code",
      "Git & GitHub",
      "API",
      "Hosting",
    ],
    description: `Get real-time weather updates with this simple vanilla
                  JavaScript application.`,
    gitHubLink: "https://github.com/MurielCristina/Vanilla-Weather-Search",
    launchProject: "https://vanilla-weather-seach-codedbymuri.netlify.app",
  },
];

let projectContainerVanilla = document.querySelector(".vanilla-projects");

vanillaProjects.forEach((project, index) => {
  let projectHTML = `
    <div class="projectsCards">
        <h3 data-translate-key="vanillaProjects.title${index + 1}">${
    project.title
  }</h3>
        <p class="tools">
            ${project.tools.map((tool) => `<span>${tool}</span>`).join(" ")}
        </p>
        <p data-translate-key="vanillaProjects.description${index + 1}">${
    project.description
  }</p>
        <a
            href="${project.gitHubLink}"
            target="_blank"
            rel="noreferrer"
            title="Open-source code at GitHub"
        ><i class="fa-brands fa-github project-page-icon"></i></a>
        <a
            href="${project.launchProject}"
            target="_blank"
            rel="noreferrer"
            title="Launch-project"
        ><i class="fa-solid fa-arrow-up-right-from-square project-page-icon"></i></a>
    </div>
    `;

  projectContainerVanilla.insertAdjacentHTML("beforeend", projectHTML);
});

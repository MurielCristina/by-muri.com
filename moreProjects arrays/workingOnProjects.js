//Array best brojects (up to 6)

let workingOnProjects = [
  {
    title: "Juans Trainer",
    tools: [
      "React.js",
      "Bootstrap",
      "VS Code",
      "Hosting",
      "CSS",
      "JavaScript",
      "Git & GitHub",
      "Responsive",
    ],
    description: `Achieve your fitness goals with personalized training, guided
                  by expert coaching and proven techniques. Based in Porto, we
                  help you get lasting results.`,
    gitHubLink: "https://github.com/MurielCristina/juans.trainer",
  },
];

let projectContainer = document.querySelector(".working-on");

workingOnProjects.forEach((project, index) => {
  let reversedIndex = workingOnProjects.length - index;
  let projectHTML = `
    <div class="projectsCards">
        <h3 data-translate-key="workingOnProjects.title${reversedIndex}">${
    project.title
  }</h3>
        <p class="tools">
        ${project.tools.map((tool) => `<span>${tool}</span>`).join(" ")}
        </p>
        <p data-translate-key="workingOnProjects.description${reversedIndex}">${
    project.description
  }</p>
        <a
            href="${project.gitHubLink}"
            target="_blank"
            rel="noreferrer"
            title="Open-source code at GitHub"
        >
            <i class="fa-brands fa-github project-page-icon"></i>
        </a>
    </div>
        `;

  projectContainer.insertAdjacentHTML("beforeend", projectHTML);
});

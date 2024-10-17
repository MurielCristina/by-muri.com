let otherProjects = [
  {
    title: "Weather Forecasts",
    tools: ["Python", "API", "Data Structure", "replit"],
    description: `Stay informed with real-time weather updates powered by the
                  fundamentals of Python, delivering accurate forecasts with
                  simple, efficient code.`,
    launchProject:
      "https://www.shecodes.io/cohorts/1978/projects/2309468?_gl=1*eoy7p9*_gcl_aw*R0NMLjE3MjE3MTgzMDIuQ2p3S0NBandxZjIwQmhCd0Vpd0F0N2R0ZFNKRHM4S0luRXdnaFNSNXNIaFJ4Y0ZqclMzMFViblpOZzBfNl9MYkstWFh5NERHM3BjZE9Sb0N0ZElRQXZEX0J3RQ..*_gcl_au*MTk2OTk4MzY5MS4xNzI1OTY0NTA2",
  },
];

let projectContainerOther = document.querySelector(".other-projects");

otherProjects.forEach((project, index) => {
  let reversedIndex = otherProjects.length - index;
  let projectHTML = `
    <div class="projectsCards">
        <h3 data-translate-key="otherProjects.title${reversedIndex}">${
    project.title
  }</h3>
        <p class="tools">
            ${project.tools.map((tool) => `<span>${tool}</span>`).join(" ")}  
        </p>
        <p data-translate-key="otherProjects.description${reversedIndex}">${
    project.description
  }</p>
        <a 
            href="${project.launchProject}"
            target="_blank"
            rel="noreferrer"
            title="Launch-project"
        ><i class="fa-solid fa-arrow-up-right-from-square project-page-icon"></i>
        </a>
    </div>
    `;

  projectContainerOther.insertAdjacentHTML("beforeend", projectHTML);
});

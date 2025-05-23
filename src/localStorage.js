import { Projects } from "./project";
import { addProjectToDOM, projectsIsEmpty } from "./project";

function retrieveFromLocalStorage() {
  const storedProjects = JSON.parse(localStorage.getItem("Projects"));
  if (storedProjects) {
    Object.assign(Projects, storedProjects);
    Object.keys(Projects).forEach((project) => {
      console.log(project);
      if (project !== "Home" && project !== "Week" && project !== "Today") {
        addProjectToDOM(project);
      }
    });
    return true;
  } else {
    return false;
  }
}

function updateLocalStorage() {
  const projectString = JSON.stringify(Projects);
  localStorage.setItem("Projects", projectString);
}

function localStorageIsEmpty() {
  const temp = JSON.parse(localStorage.getItem("Projects"));
  if (temp) {
    return false;
  } else {
    return true;
  }
}

export { retrieveFromLocalStorage, updateLocalStorage, localStorageIsEmpty };

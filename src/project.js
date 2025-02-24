import { todo } from "./todo"
import { displayTodos, todoFormEventListener, showAllProjectTodos} from "./todo";

const projects = document.querySelector(".projects");

const Projects = {
    home: [
        todo("go home", "just go home", "15-20-2002", "low"),
    ],
    today: [
        todo("brush teeth", "with sensodyne", "15-20-2002", "low"),
        todo("pack for school", "read", "15-20-2002", "low"), 
        todo("go for a walk", "read", "15-20-2002", "low"),
        todo("feed Bruce", "read", "15-20-2002", "low"),
    ],
    week: [
        todo("check mailbox", "read", "15-20-2002", "low"),
        todo("learn react", "read", "15-20-2002", "low"),
    ],
};

function createProject(title) {
    Projects[title] = []; 
    addProjectToDOM(title);
}

function addProjectToDOM(title) {
    const navItem = document.querySelector(".project-section");

    const projectsList = document.createElement("ul");
    projectsList.classList.add("projects");

    const projectItem = document.createElement("li");
    projectItem.classList.add("project-item");

    const projectTitle = document.createElement("span");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = title;

    const weekCount = document.createElement("div");
    weekCount.classList.add("week-count", "count");
    weekCount.textContent = "0";

    projectItem.appendChild(projectTitle);
    projectItem.appendChild(weekCount);
    projectsList.appendChild(projectItem);
    navItem.appendChild(projectsList);

    console.log(title);    

    projectSwitch();

}   

function projectSwitch() {
    const updateStorage = todoFormEventListener();
    updateStorage("home");

    document.querySelectorAll(".project-item").forEach((item) => {
        item.addEventListener("click", (event) => {
            const projectTitle = event.currentTarget.querySelector(".project-title").textContent;
            console.log("Clicked:", projectTitle);
            displayTodos(projectTitle);
            updateStorage(projectTitle);
        });
    });
    document.querySelector(".home").addEventListener("click", () => {
        showAllProjectTodos();
        updateStorage("home");
    });

    document.querySelector(".today").addEventListener("click", () => {
        displayTodos("today");
        updateStorage("today");
    });

    document.querySelector(".week").addEventListener("click", () => {
        displayTodos("week");
        updateStorage("week");
    });
}

export { Projects, createProject, projectSwitch};

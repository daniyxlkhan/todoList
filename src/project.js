import { todo } from "./todo"
import { displayTodos, showAllProjectTodos } from "./todo";

const Projects = {
    Home: [
        todo("go home", "just go home", "15-20-2002", "low"),
    ],
    Today: [
        todo("brush teeth", "with sensodyne", "15-20-2002", "low"),
        todo("pack for school", "read", "15-20-2002", "low"), 
        todo("go for a walk", "read", "15-20-2002", "low"),
        todo("feed Bruce", "read", "15-20-2002", "low"),
    ],
    Week: [
        todo("check mailbox", "read", "15-20-2002", "low"),
        todo("learn react", "read", "15-20-2002", "low"),
    ],
};

function createProject(title) {
    Projects[title] = []; 
    addProjectToDOM(title);
}

function addProjectToDOM(title) {
    const projectsList = document.querySelector(".projects");

    const projectItem = document.createElement("li");
    projectItem.classList.add("project-item");

    const projectTitle = document.createElement("span");
    projectTitle.classList.add("project-name");
    projectTitle.classList.add("project");
    projectTitle.textContent = title;

    const weekCount = document.createElement("div");
    weekCount.classList.add("week-count", "count");
    weekCount.textContent = "0";

    projectItem.appendChild(projectTitle);
    projectItem.appendChild(weekCount);
    projectsList.appendChild(projectItem); 
}   

function projectSwitch() {
    document.querySelector(".nav").addEventListener("click", (event) => {    
        if (event.target.closest(".project-name")) {
            const projectTitle = event.target.textContent.trim();
            console.log(projectTitle);
            if (projectTitle === "Home") {
                showAllProjectTodos();
            } else {
                displayTodos(projectTitle);
            }
        }
    });
}

function createDummyDataForProjects() {
    createProject("Gym");

    const tempTodo1 = todo("bench press", "275 lbs", "12-04-2025", "low");
    const tempTodo2 = todo("squat", "300 lbs", "12-04-2025", "low");
    Projects["Gym"].push(tempTodo1);
    Projects["Gym"].push(tempTodo2);

    createProject("Study");

    const tempTodo3 = todo("learn how to write cursive", "cursive writing websites", "12-04-2025", "low");
    const tempTodo4 = todo("do homework", "on my ipad", "12-04-2025", "low");
    const tempTodo5 = todo("talk to teammates about group project", "discord vc", "12-04-2025", "low");
    Projects["Study"].push(tempTodo3);
    Projects["Study"].push(tempTodo4);
    Projects["Study"].push(tempTodo5);
}

createDummyDataForProjects();

export { Projects, createProject, projectSwitch};

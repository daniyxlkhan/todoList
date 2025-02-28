import { todo } from "./todo"
import { displayTodos, showAllProjectTodos } from "./todo";

const Projects = {
    Home: [
        todo("read a book", "just go home", "Dec 12th", "low", 0),
    ],
    Today: [
        todo("brush teeth", "with sensodyne", "Mar 12th", "medium", 1),
        todo("pack for school", "read", "Mar 12th", "medium", 2),
        todo("go for a walk", "read", "Mar 12th", "low", 3),
        todo("feed Bruce", "read", "Mar 12th", "high", 4),
    ],
    Week: [
        todo("check mailbox", "read", "Jan 30th", "medium", 5),
        todo("learn react", "read", "Oct 1st", "low", 6),
    ],
};

// Creates a project inside the Projects array and adds it the DOM
function createProject(title) {
    Projects[title] = []; 
    addProjectToDOM(title);
}

// Displays all the dynamically added projects on the DOM
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

// When the user switches between projects, this displays the content of each project
function projectSwitch() {
    document.querySelector(".nav").addEventListener("click", (event) => {
        // when user clicks anything inside nav it "navItem" becomes the closet item either be a dynamically added project-item or hard coded nav-item
        let navItem = event.target.closest(".project-item") || event.target.closest(".nav-item");
        const projectTitleElement = navItem.querySelector(".project-name");
        if(!projectTitleElement) {
            return;
        }

        const projectTitle = projectTitleElement.textContent.trim();
        if (projectTitle === "Home") {
            showAllProjectTodos();
        } else {
            displayTodos(projectTitle);
        }
    });
}

// Just creates some dynamic projects as dummy data
function createDummyDataForProjects() {
    createProject("Gym");
    const tempTodo1 = todo("bench press", "275 lbs", "Jun 12th", "medium", 7);
    const tempTodo2 = todo("squat", "300 lbs", "Jul 1st", "low", 8);
    Projects["Gym"].push(tempTodo1);
    Projects["Gym"].push(tempTodo2);

    createProject("Study");
    const tempTodo3 = todo("learn how to write cursive", "cursive writing websites", "Oct 9th", "low", 9);
    const tempTodo4 = todo("do homework", "on my ipad", "Dec 31st", "high", 10);
    const tempTodo5 = todo("talk to teammates about group project", "discord vc", "Feb 10th", "low", 11);
    Projects["Study"].push(tempTodo3);
    Projects["Study"].push(tempTodo4);
    Projects["Study"].push(tempTodo5);
}

createDummyDataForProjects();

export { Projects, createProject, projectSwitch};

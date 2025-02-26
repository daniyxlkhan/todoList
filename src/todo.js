import trashIcon from "./assets/delete-icon.svg";
import { Projects, createProject } from "./project";

const content = document.querySelector(".content");
const todoSubmitForm = document.querySelector("#todo-submit-form");
const projectSubmitForm = document.querySelector("#project-submit-form");

let currentProject = "home"; // Default project

// Keeping track of what project is currently selected
document.querySelector(".nav").addEventListener("click", (event) => { 
    if (event.target.classList.contains("project")) { 
        currentProject = event.target.textContent.trim(); 
    }
});

function todo(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority
    };
}

// Creates a todo task and stores it in the current selected project, also updates the content with the newly added todo
function createTodo(title, description, dueDate, priority) {
    const tempTodo = todo(title, description, dueDate, priority);
    Projects[currentProject].push(tempTodo);
    if (currentProject === "Home") {
        showAllProjectTodos();
    } else {
        displayTodos(currentProject);
    }
}

// When a user creates a todo task
todoSubmitForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const description = document.querySelector("#details").value;
    const dueDate = document.querySelector("#date").value;
    const priority = document.querySelector(`input[name="priority"]:checked`)?.value;

    createTodo(title, description, dueDate, priority);
})

// When a user creates a new project
projectSubmitForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const projectTitle = document.querySelector("#project-title").value;
    createProject(projectTitle);
})

// Displays all the todo tasks in every project
function showAllProjectTodos() {
    content.innerHTML = "";
    for (let project in Projects) {
        Projects[project].forEach(todo => {
            createTodoDOM(todo.title, todo.description, todo.dueDate, todo.priority);
        })
    }
}

// Display all the todo tasks in a project
function displayTodos(project) { 
    content.innerHTML = "";
    Projects[project].forEach(todo => {
        createTodoDOM(todo.title, todo.description, todo.dueDate, todo.priority);
    });
}

// Creates a todo task on the DOM
function createTodoDOM(title, description, dueDate, priority) { 
    const task = document.createElement("div");
    task.classList.add("task");

    const taskCheck = document.createElement("div");
    taskCheck.classList.add("task-check");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const taskTitle = document.createElement("span");
    taskTitle.classList.add("title");
    taskTitle.textContent = title;

    taskCheck.append(checkbox);
    taskCheck.append(taskTitle);

    const taskOptions = document.createElement("div");
    taskOptions.classList.add("task-options");
    const taskDetailsButton = document.createElement("button");
    taskDetailsButton.classList.add("task-details-button");
    taskDetailsButton.textContent = "Details";
    const taskDate = document.createElement("span");
    taskDate.classList.add("task-date");
    taskDate.textContent = dueDate;

    let img = document.createElement("img");
    img.src = trashIcon;
    img.setAttribute("width", "30");
    img.setAttribute("height", "30");

    taskOptions.append(taskDetailsButton)
    taskOptions.append(taskDate)
    taskOptions.append(img);

    task.append(taskCheck);
    task.append(taskOptions);

    content.append(task);
}

export {displayTodos, todo, showAllProjectTodos};




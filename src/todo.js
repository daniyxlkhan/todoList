import trashIcon from "./assets/delete-icon.svg";

const Projects = []

const content = document.querySelector(".content");
const todoSubmitForm = document.querySelector("#todo-submit-form");

function todo(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority
    };
}

function createTodo(title, description, dueDate, priority, storageArray) {
    const tempTodo = todo(title, description, dueDate, priority);
    storageArray.push(tempTodo);
    displayTodos(storageArray);
}

function formEventListener() {
    let currentStorage = [];

    todoSubmitForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.querySelector("#title").value;
        const description = document.querySelector("#details").value;
        const dueDate = document.querySelector("#date").value;
        const priority = document.querySelector(`input[name="priority"]:checked`)?.value;

        createTodo(title, description, dueDate, priority, currentStorage);
    })

    return (newStorage) => {
        currentStorage = newStorage;
    };
}

function displayTodos(todoArray) {
    content.innerHTML = "";
    todoArray.forEach(todo => {
        createTodoDOM(todo.title, todo.description, todo.dueDate, todo.priority);
    });
}

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

export {displayTodos, formEventListener, todo};




import trashIcon from "./assets/delete-icon.svg";
import { Projects, createProject } from "./project";
import { parseISO, format } from "date-fns";
import { updateLocalStorage } from "./localStorage";

const formatDateString = (dateString) => {
  return format(parseISO(dateString), "LLL do"); // Month date (Dec 1st etc)
};

const content = document.querySelector(".content");
const todoSubmitForm = document.querySelector("#todo-submit-form");
const projectSubmitForm = document.querySelector("#project-submit-form");

let currentProject = "Home"; // Default project

// Keeping track of what project is currently selected
document.querySelector(".nav").addEventListener("click", (event) => {
  const navItem = event.target.closest(".nav-item, .project-item");

  // Exclude .project-section
  if (!navItem || navItem.classList.contains("project-section")) return;

  const projectTitleElement = navItem.querySelector(".project-name");
  if (projectTitleElement) {
    currentProject = projectTitleElement.textContent.trim();
    console.log("Current Project:", currentProject);
  }
});

// Creates a todo objects
function todo(title, description, dueDate, priority, id, completed) {
  return {
    title,
    description,
    dueDate,
    priority,
    id,
    completed
  };
}

// Generates a unique todo ID
const generateTodoId = (function () {
  let id = 12; // Private variable
  return function () {
    return id++;
  };
})();

// Creates a todo task and stores it in the current selected project, also updates the content with the newly added todo
function createTodo(title, description, dueDate, priority) {
  const tempTodo = todo(
    title,
    description,
    formatDateString(dueDate),
    priority,
    generateTodoId(),
    false
  );
  Projects[currentProject].push(tempTodo);
  updateLocalStorage();
  if (currentProject === "Home") {
    showAllProjectTodos();
  } else {
    displayTodos(currentProject);
  }
}

// Removes a todo from a project given the todo's ID
function removeTodo(id) {
  Object.keys(Projects).forEach((projectKey) => {
    Projects[projectKey] = Projects[projectKey].filter(
      (todo) => todo.id !== id,
    );
  });
  updateLocalStorage();
  if (currentProject === "Home") {
    showAllProjectTodos();
  } else {
    displayTodos(currentProject);
  }
  updateAllTodoCounts();
}

function getTodoCount(project) {
  if (project === "Home") {
    let sum = 0;
    Object.keys(Projects).forEach((proj) => {
      sum += Projects[proj].length;
    });
    return sum;
  }
  return Projects[project].length;
}

function updateAllTodoCounts() {
  Object.keys(Projects).forEach((project) => {
    const count = document.querySelector(`.${project}-count`);
    if (count) {
      count.textContent = getTodoCount(project);
    } else {
      console.warn(`Element .${project}-count not found!`);
    }
  });
}

// When a user creates a todo task
todoSubmitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#details").value;
  const dueDate = document.querySelector("#date").value;
  const priority = document.querySelector(
    `input[name="priority"]:checked`,
  )?.value;

  updateAllTodoCounts();
  createTodo(title, description, dueDate, priority);
  todoSubmitForm.reset();
});

// When a user creates a new project
projectSubmitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const projectTitle = document.querySelector("#project-title").value;
  createProject(projectTitle);
  projectSubmitForm.reset();
});

// Displays all the todo tasks in every project
function showAllProjectTodos() {
  content.innerHTML = "";
  for (let project in Projects) {
    Projects[project].forEach((todo) => {
      createTodoDOM(
        todo.title,
        todo.description,
        todo.dueDate,
        todo.priority,
        todo.id,
        todo.completed
      );
      updateAllTodoCounts();
    });
  }
}

// Display all the todo tasks in a project
function displayTodos(project) {
  content.innerHTML = "";
  Projects[project].forEach((todo) => {
    createTodoDOM(
      todo.title,
      todo.description,
      todo.dueDate,
      todo.priority,
      todo.id,
      todo.completed
    );
    updateAllTodoCounts();
  });
}

// Creates a todo task on the DOM
function createTodoDOM(title, description, dueDate, priority, id, completed) {
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
  img.classList.add("delete-task");

  img.addEventListener("click", () => {
    removeTodo(id);
  });

  if (completed) {
    checkbox.checked = true;
    taskTitle.classList.add("checked");
  }

  checkbox.addEventListener("change", () => {
    taskTitle.classList.toggle("checked", checkbox.checked)

    for (const project in Projects) {
      const todos = Projects[project];
      const todo = todos.find((t) => t.id === id);
      if (todo) {
        todo.completed = checkbox.checked;
        updateLocalStorage();
        break;
      }
    }
  });

  taskOptions.append(taskDetailsButton);
  taskOptions.append(taskDate);
  taskOptions.append(img);

  task.append(taskCheck);
  task.append(taskOptions);

  const priorityClasses = {
    low: "low-priority",
    medium: "medium-priority",
    high: "high-priority",
  };

  if (priorityClasses[priority]) {
    task.classList.add(priorityClasses[priority]);
  }

  content.append(task);
}

export { displayTodos, todo, showAllProjectTodos, updateAllTodoCounts };

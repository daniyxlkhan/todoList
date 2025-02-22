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

function createTodo(title, description, dueDate, priority) {
    const todo = todo(title, description, dueDate, priority);
    Projects.push(todo);
}

todoSubmitForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title");
    const description = document.querySelector("#details");
    const dueDate = document.querySelector("#date");
    const priority = document.querySelector(`input[name="priority"]:checked`)?.value;

    const todo = todo(title, description, dueDate, priority);
    console.log(todo);
    return todo(title, description, dueDate, priority);
})

function displayTodos(todoArray) {
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
    const title = document.createElement("span");
    title.classList.add("title");
    
}




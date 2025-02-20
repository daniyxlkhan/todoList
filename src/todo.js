const Projects = []

const content = document.querySelector(".content");
const todoSubmitForm = document.querySelector("#todo-submit-form");
const homePage = document.querySelector(".home")
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

homePage.addEventListener("click", () => {
    
})

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




import styles from "./style.css"
import { openDialog, closeDialog } from "./showDialogForm";

openDialog();
closeDialog();


const Projects = []

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
    const todoItem = todo(title, description, dueDate, priority);
    console.log(todoItem);
    Projects.push(todo);
}

todoSubmitForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const description = document.querySelector("#details").value;
    const dueDate = document.querySelector("#date").value;
    const priority = document.querySelector(`input[name="priority"]:checked`)?.value;

    createTodo(title, description, dueDate, priority);
});


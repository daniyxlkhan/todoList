// when the user makes a todo item from the + button and submits it

const showButton = document.querySelector(".new-todo");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".close-button")

function openDialog() {
    showButton.addEventListener("click", () => {
        dialog.showModal();
    });
}

function closeDialog() {
    closeButton.addEventListener("click", () => {
        dialog.close();
    });
}

export {openDialog, closeDialog};
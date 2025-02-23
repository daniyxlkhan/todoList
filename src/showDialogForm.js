// too show and close the dialog which pops up when user hits the + button on the sidebar

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
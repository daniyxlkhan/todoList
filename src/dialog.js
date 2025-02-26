const dialogContent = document.querySelector(".dialog-content");

function dialogPopUp() {
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
    openDialog();
    closeDialog();    
}

function dialogTabSwtich() {
    const makeTodo = document.querySelector(".make-todo");
    const makeProject = document.querySelector(".make-project");
    makeTodo.style.display = "block";
    makeProject.style.display = "none";

    document.querySelector(".submit-todo").addEventListener("click", () => {
        makeTodo.style.display = "block";
        makeProject.style.display = "none";
    })

    document.querySelector(".submit-project").addEventListener("click", () => {
        makeProject.style.display = "block";
        makeTodo.style.display = "none";
    })
}

export {dialogTabSwtich, dialogPopUp};
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

// function displaySubmitTodoForm() {
//     dialogContent.innerHTML = "";

//     const makeTodo = document.createElement("div");
//     makeTodo.classList.add("make-todo");

//     const form = document.createElement("form");
//     form.setAttribute("id", "todo-submit-form");

//     // Title Input
//     const titleLabel = document.createElement("label");
//     titleLabel.setAttribute("for", "title");

//     const titleInput = document.createElement("input");
//     titleInput.setAttribute("name", "title");
//     titleInput.setAttribute("id", "title");
//     titleInput.setAttribute("placeholder", "Title: Do groceries");

//     titleLabel.appendChild(titleInput);

//     // Details Input
//     const detailsLabel = document.createElement("label");
//     detailsLabel.setAttribute("for", "details");

//     const detailsInput = document.createElement("input");
//     detailsInput.setAttribute("name", "details");
//     detailsInput.setAttribute("id", "details");
//     detailsInput.setAttribute("placeholder", "Details: eg internet, rent, phone");

//     detailsLabel.appendChild(detailsInput);

//     // Date Input
//     const dateLabel = document.createElement("label");
//     dateLabel.setAttribute("for", "date");

//     const dateInput = document.createElement("input");
//     dateInput.setAttribute("type", "date");
//     dateInput.setAttribute("id", "date");

//     dateLabel.appendChild(dateInput);

//     // Priority Section
//     const priorityDiv = document.createElement("div");
//     priorityDiv.classList.add("priority");

//     const priorityText = document.createElement("p");
//     priorityText.textContent = "Priority:";
//     priorityDiv.appendChild(priorityText);

//     const priorities = ["low", "medium", "high"];

//     priorities.forEach(priority => {
//         const label = document.createElement("label");
//         label.classList.add("radio-btn");

//         const input = document.createElement("input");
//         input.setAttribute("type", "radio");
//         input.setAttribute("name", "priority");
//         input.setAttribute("value", priority);

//         const span = document.createElement("span");
//         span.textContent = priority.charAt(0).toUpperCase() + priority.slice(1); // Capitalize

//         label.appendChild(input);
//         label.appendChild(span);
//         priorityDiv.appendChild(label);
//     });

//     // Submit Button
//     const submitButton = document.createElement("button");
//     submitButton.setAttribute("type", "submit");
//     submitButton.classList.add("submit-todo-button")
//     submitButton.textContent = "Add TO DO";

//     // Appending Elements
//     form.appendChild(titleLabel);
//     form.appendChild(detailsLabel);
//     form.appendChild(dateLabel);
//     form.appendChild(priorityDiv);
//     form.appendChild(submitButton);
//     makeTodo.appendChild(form);
//     dialogContent.appendChild(makeTodo);

//     console.log("Form added to dialog:", dialogContent);
// }

export {dialogTabSwtich, dialogPopUp};
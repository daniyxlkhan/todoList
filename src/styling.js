function selectedProjectStyleForNavItems() {
    const navItems = document.querySelectorAll(".nav-item, .project-item");

    navItems.forEach((element) => {
        element.addEventListener("click", () => {
            // Check if the clicked element is not the project-section
            if (!element.classList.contains("project-section")) {
                // Remove the selected class from all nav-items and project-items
                document.querySelectorAll(".nav-item, .project-item").forEach(el => el.classList.remove("selected"));

                // Add the selected class to the clicked element
                element.classList.add("selected");
            }
        });
    });
}

function selectedTabForDialog() {
    const dialogItems = document.querySelectorAll(".dialog-nav-item");

    dialogItems.forEach((element) => {
        element.addEventListener("click", () => {
            document.querySelectorAll(".dialog-nav-item").forEach(el => el.classList.remove("selected"));

            element.classList.add("selected");
        });
    });
}

export { selectedProjectStyleForNavItems, selectedTabForDialog};

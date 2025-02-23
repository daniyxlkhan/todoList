import styles from "./style.css"
import { openDialog, closeDialog } from "./showDialogForm";
import {displayTodos, formEventListener, todo} from "./todo";

const todo1 = todo("real", "read", "15-20-2002", "low");

openDialog();
closeDialog();

function tabSwtich() {
    const home = [];
    const today = [];
    const week = [];

    home.push(todo1);

    const updateStorage = formEventListener();

    document.querySelector(".home").addEventListener("click", () => {
        displayTodos(home);
        updateStorage(home);
    });

    document.querySelector(".today").addEventListener("click", () => {
        displayTodos(today);
        updateStorage(today);
    });

    document.querySelector(".week").addEventListener("click", () => {
        displayTodos(week);
        updateStorage(week);
    });
}

tabSwtich();
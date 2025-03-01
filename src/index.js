import styles from "./style.css"
import { showAllProjectTodos, updateAllTodoCounts } from "./todo";
import { dialogTabSwitch, dialogPopUp } from "./dialog";
import { projectSwitch, createDummyData } from "./project";
import { selectedProjectStyleForNavItems, selectedTabForDialog} from "./styling";
import { retrieveFromLocalStorage } from "./localStorage.js"

function initializeApp() {
    retrieveFromLocalStorage();
    createDummyData();
    selectedProjectStyleForNavItems();
    selectedTabForDialog();
    updateAllTodoCounts();
    dialogPopUp();
    dialogTabSwitch();
    showAllProjectTodos();
    projectSwitch();
}

initializeApp();
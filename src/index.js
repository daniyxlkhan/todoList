import styles from "./style.css"
import { showAllProjectTodos } from "./todo";
import { dialogTabSwitch, dialogPopUp } from "./dialog";
import { projectSwitch } from "./project";
import { selectedProjectStyleForNavItems, selectedTabForDialog} from "./styling";

selectedProjectStyleForNavItems();
selectedTabForDialog();

dialogPopUp();
dialogTabSwitch();

showAllProjectTodos();
projectSwitch();


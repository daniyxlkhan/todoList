import styles from "./style.css"
import { showAllProjectTodos, updateAllTodoCounts } from "./todo";
import { dialogTabSwitch, dialogPopUp } from "./dialog";
import { projectSwitch } from "./project";
import { selectedProjectStyleForNavItems, selectedTabForDialog} from "./styling";

selectedProjectStyleForNavItems();
selectedTabForDialog();
updateAllTodoCounts();

dialogPopUp();
dialogTabSwitch();

showAllProjectTodos();
projectSwitch();


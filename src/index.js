import styles from "./style.css"
import { showAllProjectTodos } from "./todo";
import { dialogTabSwitch, dialogPopUp } from "./dialog";
import { projectSwitch } from "./project";

dialogPopUp();
dialogTabSwitch();

showAllProjectTodos();
projectSwitch();


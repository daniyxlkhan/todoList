import styles from "./style.css"
import { showAllProjectTodos } from "./todo";
import { dialogTabSwitch, dialogPopUp } from "./dialog";
import { projectSwitch } from "./project";
import {selectedProjectStyle} from "./styling";

selectedProjectStyle();

dialogPopUp();
dialogTabSwitch();

showAllProjectTodos();
projectSwitch();


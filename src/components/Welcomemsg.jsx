import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./Welcomemsg.module.css";

const Welcomemsg = ({}) => {
  const {todoItems} = useContext(TodoItemsContext);
  return todoItems.length === 0 && <p className={styles.Welcomemsg}>Enjoy Your Day</p>
}

export default Welcomemsg;
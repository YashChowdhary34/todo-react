import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/TodoItemsContext-store.jsx";
import { useContext } from "react";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems &&
    todoItems.length === 0 && <p className={styles.message}>Enjoy Your Day!</p>
  );
};

export default WelcomeMessage;

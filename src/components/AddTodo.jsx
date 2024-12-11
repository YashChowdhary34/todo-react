import { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext-store.jsx";

function AddTodo() {
  const contextObj = useContext(TodoItemsContext);

  const dueDate = useRef("");
  const todoItem = useRef("");
  const handleFormSubmit = () => {
    const dueDateValue = dueDate.current.value;
    const todoItemValue = todoItem.current.value;

    contextObj.onNewItem(todoItemValue, dueDateValue);
    dueDate.current.value = "";
    todoItem.current.value = "";
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleFormSubmit} className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" ref={dueDate} />
        </div>
        <div className="col-4">
          <input type="date" ref={todoItem} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleFormSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

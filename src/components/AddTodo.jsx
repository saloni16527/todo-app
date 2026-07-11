import { useContext, useRef, useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo({onNewItem}) {
const {addNewItem} = useContext(TodoItemsContext);
/*const [todoName, setTodoName] = useState("");
const [dueDate, setDueDate] = useState("");*/
const todoNameElement = useRef();
const dueDateElement = useRef();

/*const handleNameChange = (event) => {
   setTodoName(event.target.value);
};

const handleDateChange = (event) => {
   setDueDate(event.target.value);
};*/

const handleAddButtonClicked = (event) => {
  event.preventDefault();
  const todoName = todoNameElement.current.value;
  const dueDate = dueDateElement.current.value;
  todoNameElement.current.value = "";
  dueDateElement.current.value = "";
  addNewItem(todoName,dueDate);
  /*setDueDate("");
  setTodoName("");*/
}

    return <div className="container text-center">
  <form className="row kg-row"
  onSubmit={handleAddButtonClicked}>
    <div className="col-6">
      <input 
      ref={todoNameElement}
      type="text" placeholder="Enter Todo Here" /*value={todoName} onChange = {handleNameChange}*//>
    </div>
    <div className="col-4">
      <input 
      ref={dueDateElement}
      type="date"/* value={dueDate} onChange={handleDateChange}*//>
    </div>
    <div className="col-2">
     <button type="submit" class="btn btn-success kg-button"
     ><IoBagAdd /></button>
    </div>
  </form>
</div>
}

export default AddTodo;
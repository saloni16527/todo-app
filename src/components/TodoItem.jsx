/*function TodoItem () {

   let todoName = 'Buy Milk';
   let todoDate = ' 4/10/2026';


    return  <div class="container">
  <div class="row kg-row">
    <div class="col-6">
      {todoName}
    </div>
    <div class="col-4">
      {todoDate}
    </div>
    <div class="col-2">
     <button type="button" class="btn btn-danger kg-button">Delete</button>
    </div>
  </div>
</div>
}

export default TodoItem;*/






import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem ({ todoName,todoDate, onDeleteClick}) {

  const {deleteItem }= useContext(TodoItemsContext);

    return  <div className="container">
  <div className="row kg-row">
    <div className="col-6">
      {todoName}
    </div>
    <div className="col-4">
      {todoDate}
    </div>
    <div className="col-2">
     <button type="button" class="btn btn-danger kg-button"
      onClick={() => deleteItem(todoName)}
     > < MdDeleteForever /></button>
    </div>
  </div>
</div>
}

export default TodoItem;
import { useState } from "react";

import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./components/App.css";
import Todoitems from "./components/Todoitems";
import Welcomemsg from "./components/Welcomemsg";
import { TodoItemsContext } from "./store/todo-items-store";

function App(){ 
   /* const todoItems =[
      {
        name:"Buy Milk",
        dueDate: "4/10/2026",
      },
      {
        name:"Go to college",
        dueDate:"4/10/2026",
      },
      {
        name:"like this video",
        dueDate:"right now",
      },
    ];*/

 const [todoItems , setTodoItems] = useState ([]);

  const addNewItem = (itemName , itemDueDate) => {
    console.log(`New item added : ${itemName} date : ${itemDueDate}`);
      const newTodoItems =[...todoItems,
      {name:itemName , dueDate :itemDueDate},
      ];
      setTodoItems(newTodoItems);


     /* setTodoItems((currValue) => {
        const newTodoItems =[...currValue,
      {name:itemName , dueDate :itemDueDate},
      ];
      return newTodoItems;
      });


      setTodoItems((currValue) => [...currValue,
      {name:itemName , dueDate :itemDueDate},
      ]);*/
  };

  const deleteItem = (todoItemName) => {
     const newTodoItems = todoItems.filter(item => item.name !== todoItemName );
     setTodoItems(newTodoItems);
  }

 /* const defaultTodoItems = [{name: 'buy ghee' , dueDate: 'Today'}];*/

      return (
      <TodoItemsContext.Provider value={{
         todoItems,
         addNewItem,
         deleteItem,
      }} >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Welcomemsg></Welcomemsg>
        <Todoitems></Todoitems>
       
      </center>
      </TodoItemsContext.Provider>
   )
}

export default App;
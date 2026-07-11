import styles from './TodoItems.module.css';


import TodoItem from "./TodoItem";
import { TodoItemsContext } from '../store/todo-items-store';
import { useContext } from 'react';

const Todoitems = () => {

const {todoItems} = useContext(TodoItemsContext);

    return  <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
            <TodoItem key={item.name} todoDate={item.dueDate} todoName={item.name}></TodoItem>
        ))}
    </div>
};

export default Todoitems;


   /* return  <div className="items-container">

        <TodoItem todoDate=" 4/10/2026" todoName="Buy Milk" ></TodoItem>
        <TodoItem todoDate="4/10/2026" todoName="Go to college" ></TodoItem>
        
        </div>
}*/


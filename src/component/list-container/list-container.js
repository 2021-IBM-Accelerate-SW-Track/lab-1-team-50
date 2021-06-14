import React, {useState} from 'react';
import './list-container.css';
import Todo from "./todo";
import Index from "./index"


export default function ListContainer() {
    const [todos, setTodo] = useState([]);

    function addTodo(todo) {
        setTodo([
            todo,
            ...todos
        ]);
    }

    return <div class="list-container">
        <div class="banner">
            <img class="bannerImage" src="https://i.imgur.com/Y7CWhEo.png" alt="todo header"></img>
        </div>
        <div class="header">
            <h1 class="title">What do you have to do?</h1>
        </div>

        <Index addTodo={addTodo}/>


        <div class="toDoListHolder">
            <Todo/>
        </div>
    </div>
}

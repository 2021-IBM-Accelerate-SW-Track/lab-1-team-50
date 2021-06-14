import React, {useState} from 'react';

import TextField from '@material-ui/core/TextField';
import Button from "./button";

const index = ({addTodo}) => {

    const [todo, setTodo] = useState({id: "", task: ""});

    function inputChange(e) {
        setTodo({
            ...todo,
            task: e.target.value
        });
    }

    function handleAdd(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({
                ...todo,
                id: Math.random(10000) + 1
            });
            setTodo({
                ...todo,
                task: ""
            });
        }
    }

    return (
        <div>
            <div class="add-item">
                <TextField id="standard-textarea" label="Add a To-Do!" placeholder="buy milk, workout, etc" multiline="true"
                    onChange={inputChange}/>

                <Button onClick={handleAdd}/>
            </div>
            <li>{
                todo.task
            }</li>
        </div>
    )
}

export default index

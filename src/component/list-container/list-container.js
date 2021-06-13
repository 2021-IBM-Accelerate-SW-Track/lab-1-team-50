import React from 'react';
import './list-container.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import AddBoxIcon from '@material-ui/icons/AddBox';

export default function ListContainer(){
    return <div class="list-container">
        <div class="banner">
            <img class="bannerImage"src="https://i.imgur.com/Y7CWhEo.png"></img>
        </div>
        <div class="header">
            <div className="itemAdder">
            <h1 class="title">What do you have to do?</h1>
            </div>
        <AddBoxIcon id="addButton">AddBox</AddBoxIcon>
        </div>
        <div class="toDoListHolder">

            <ul id="list">
                <li id="item">
                    <FormControlLabel
                        control={
                        <Checkbox
                            // checked={state.checkedF}
                            // onChange={handleChange}
                            name="checkedF"
                        />
                        }
                        label="list-item"
                    />

                </li>
            </ul>
            <div class="add-item">
                
                <TextField
                    id="standard-textarea"
                    label="Add a To-Do!"
                    placeholder="buy milk, workout, etc"
                    multiline
                />
                        <IconButton id="delete">
                    <DeleteIcon />
                    </IconButton>
            </div>
        </div>
    </div>
}
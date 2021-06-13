import React from "react";
import "./list-container.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import AddBoxIcon from "@material-ui/icons/AddBox";

export default function ListContainer() {
  return (
    <div class="list-container">
      <div class="banner">
        <img class="bannerImage" src="https://i.imgur.com/Y7CWhEo.png"></img>
      </div>
      <div class="header">
        <h1 class="title">What do you have to do?</h1>
      </div>

      <div id="input">
        <AddBoxIcon id="addButton">AddBox</AddBoxIcon>
        <br></br>
        <TextField label="Add a To-Do!" placeholder="buy milk, workout, etc" />
      </div>

      <div class="toDoListHolder">
        <ul id="list">
          <li class="item" id="item">
            <Checkbox
              // checked={checked}
              // onChange={handleChange}
              id="checkbox"
            />
            <p class="text"></p>
            <IconButton id="delete">
              <DeleteIcon />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
}

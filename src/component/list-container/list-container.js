import React from "react";
// import "./list-container.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import AddBoxIcon from "@material-ui/icons/AddBox";

export default function ListContainer() {
  return (
    <div class="list-container">
      <div id="input">
        <Checkbox
          // checked={checked}
          // onChange={handleChange}
          id="checkbox"
        />
        <p class="text"></p>
        <IconButton id="delete">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

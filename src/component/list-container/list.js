import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import AddCircle from "@material-ui/icons/AddCircle";
import "./list.css";
import { blue } from "@material-ui/core/colors";

class List extends Component {
  state = {
    todos: [
      {
        text: "",
        timestamp: "",
        complete: false,
      },
    ],
  };

  checkBox() {
    this.isChecked = !this.isChecked;
    return this.isChecked;
  }

  rendertags() {
    //check for if there is white space or if it's empty
    if (!this.state.text || /^\s*$/.test(this.state.text)) {
      return;
    }

    return (
      <ul>
        {" "}
        {this.state.todos.map((todo) => (
          <p
            key={todo}
            style={{
              color: "black",
              textDecoration: this.checkBox ? "null" : "Line-through",
              outlineColor: blue,
            }}
          >
            {" "}
            <Checkbox
              checked={this.state.checked}
              onClick={() => this.checkBox()}
              id="checkbox"
            />
            <Input defaultValue={todo.text} />
            {todo}{" "}
            <span className="dateTime">
              {" "}
              {new Date().toLocaleString().replace(",", "")}{" "}
            </span>
            <IconButton id="delete" onClick={() => this.removeItem(todo)}>
              <DeleteIcon />
            </IconButton>{" "}
          </p>
        ))}{" "}
      </ul>
    );
  }

  removeItem = (tag) => {
    let arr = this.state.todos;
    return this.setState({ tags: arr.filter((item) => item !== tag) });
  };

  render() {
    return (
      <span>
        <IconButton className="pressButton" onChange={this.increaseArr}>
          <AddCircle />
        </IconButton>
        <div className="listOutput">{this.rendertags()}</div>
      </span>
    );
  }

  increaseArr = () => {
    let word = this.props.text;
    let time = this.timestamp;
    if (word.includes(word)) return alert("No duplicates allowed");
    this.setState({
      tags: [...[word, time, "false"]],
    });
  };
}

export default List;

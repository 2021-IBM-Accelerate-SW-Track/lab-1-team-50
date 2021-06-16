import React, { Component } from "react";
import List from "./list";
import TextField from "@material-ui/core/TextField";
import "./listUpdate.css";

class ListUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userText: "",
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    this.setState({ userText: event.target.value });
  }

  handleSubmit() {
    console.log("Your input value is: " + this.state.userText);
  }
  render() {
    return (
      <span className="addToDo">
        <TextField
          label="Add a To-Do!"
          placeholder="buy milk, workout, etc"
          onChange={this.updateInput}
        />
        <List text={this.state.userText} />
      </span>
    );
  }
}

export default ListUpdate;

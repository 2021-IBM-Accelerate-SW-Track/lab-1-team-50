import React, { Component } from "react";
import List from "./list";
import TextField from "@material-ui/core/TextField";

class ListUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit() {
    console.log("Your input value is: " + this.state.username);
  }
  render() {
    return (
      <div>
        {/* <input type="text" onChange={this.updateInput}></input> */}
        <TextField
          label="Add a To-Do!"
          placeholder="buy milk, workout, etc"
          onChange={this.updateInput}
        />
        <List text={this.state.username} />
      </div>
    );
  }
}

export default ListUpdate;

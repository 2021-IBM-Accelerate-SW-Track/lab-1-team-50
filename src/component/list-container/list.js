import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

class List extends Component {
  state = {
    tags: [],
    date_time: new Date().toLocaleString().replace(",", ""),
  };

  rendertags() {
    if (this.state.tags.length === 0)
      return <p>Please enter to do list tasks</p>;

    return (
      <ul>
        {" "}
        {this.state.tags.map((tag) => (
          <p key={tag}>
            {" "}
            <Checkbox
              // checked={checked}
              // onChange={handleChange}
              id="checkbox"
            />
            {tag} {new Date().toLocaleString().replace(",", "")}
            <IconButton id="delete">
              <DeleteIcon />
            </IconButton>{" "}
          </p>
        ))}{" "}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.increaseArr}>click me</button>
        {this.rendertags()}
      </div>
    );
  }

  increaseArr = () => {
    let arr = this.state.tags;
    let words = this.props.text;
    if (arr.includes(words)) return alert("No duplicates allowed");
    this.setState({
      tags: [...arr, words],
    });
  };
}

export default List;

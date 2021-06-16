import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import "./list.css";
import { blue } from "@material-ui/core/colors";

class List extends Component {
  state = {
    tags: [],
  };

  checkBox() {
    return false;
  }

  rendertags() {
    if (this.state.tags.length === 0)
      return <p>Please enter to do list tasks</p>;

    return (
      <ul>
        {" "}
        {this.state.tags.map((tag) => (
          <p
            key={tag}
            style={{
              color: "black",
              textDecoration: this.checkBox ? "null" : "Line-through",
              outlineColor: blue,
            }}
          >
            {" "}
            <Checkbox
              // checked={checked}
              // onClick={() => this.checkBox(tag)}
              id="checkbox"
            />
            <Input defaultValue={tag} />
            {/* {tag}{" "} */}
            <span className="dateTime">
              {" "}
              {new Date().toLocaleString().replace(",", "")}{" "}
            </span>
            <IconButton id="delete" onClick={() => this.removeItem(tag)}>
              <DeleteIcon />
            </IconButton>{" "}
          </p>
        ))}{" "}
      </ul>
    );
  }

  removeItem = (tag) => {
    let arr = this.state.tags;
    return this.setState({ tags: arr.filter((item) => item !== tag) });
  };

  render() {
    return (
      <span>
        <button className="pressButton" onClick={this.increaseArr}>
          ADD
        </button>
        <div className="listOutput">{this.rendertags()}</div>
      </span>
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

import React, { Component } from "react";

class List extends Component {
  state = {
    tags: [],
  };

  rendertags() {
    if (this.state.tags.length === 0)
      return <p>Please enter to do list tasks</p>;

    return (
      <ul>
        {" "}
        {this.state.tags.map((tag) => (
          <h1 key={tag}>{tag}</h1>
        ))}{" "}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h2>{this.state.textValue}</h2>
        <button onClick={this.increaseArr}>click me</button>
        {this.rendertags()}
      </div>
    );
  }

  increaseArr = () => {
    let arr = this.state.tags;
    let words = this.props.text;
    if (arr.includes(words)) return;
    this.setState({
      tags: [...arr, words],
    });
  };
}

export default List;

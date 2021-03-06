import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Edit from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
import "./list.css";

// initialize empty array
class List extends Component {
  state = {
    todos: [],
  };

  //if there are no todos to be displayed return statement below
  renderTodos() {
    if (this.state.todos.length === 0)
      return <p>Please enter to do list tasks</p>;

    return (
      <ul>
        {" "}
        {this.state.todos.map((todo) => (
          //the literal text is also the key value. todo[0] -> is what the user enters in the text field
          <p key={todo[0]}>
            {" "}
            <IconButton id="update" onClick={() => this.boxChecked(todo)}>
              <Checkbox />
            </IconButton>
            {/* boolean value determines when checkbox is trigger. todo[2] -> is the boolean value for the checkbox */}
            <span className={todo[2] ? "listComplete" : null}>
              <p1> </p1>
              {todo[0]} <p1> </p1>
              {/* todo[1] -> is the date-time value */}
              <span className="dateTime">{todo[1]} </span>
            </span>
            <IconButton id="update" onClick={() => this.updateItem(todo)}>
              <Edit />
            </IconButton>
            <IconButton id="delete" onClick={() => this.removeItem(todo)}>
              <DeleteIcon />
            </IconButton>{" "}
          </p>
        ))}{" "}
      </ul>
    );
  }

  render() {
    return (
      <span>
        <IconButton
          id="add"
          onClick={this.increaseArr}
          data-testid="new-item-button"
        >
          <AddCircleIcon />
        </IconButton>

        <div className="listOutput" id = "listOutputSpace">{this.renderTodos()}</div>
      </span>
    );
  }
  //using map to iterate through array, and when desired todoID is found the todo[2] boolean value is negated
  boxChecked = (todoID) => {
    let booln = todoID[2];
    this.state.todos.map((todo) => {
      if (todo === todoID) {
        todo[2] = !booln;
      }
      //this rerenders the page after changing the boolean value of given todoID
      return this.setState({
        todos: this.state.todos,
      });
    });
  };

  //using the builtin array filter method to delete desired todo element
  removeItem = (todo) => {
    let arr = this.state.todos;
    return this.setState({
      todos: arr.filter((item) => item !== todo),
    });
  };

  //=================================================== Start of Edit Field ===========================================\\
  //using map to find desired todoID then creating a textfield element to enter the new text to, then updating that item once text is entered. -K.S.
  updateItem = (todoID) => {
    let arr = this.state.todos;
    //alert(arr)
    let holder = this;
    let listDiv = document.getElementById("listOutputSpace");

        let inputText = document.createElement("input");
        inputText.type = "text";
        inputText.value = todoID[0];
        inputText.id = "editField";
        inputText.className = this.props.text;
        //alert(words)
        if(document.getElementById("editField") != null){
          document.getElementById("editField").remove();
        }
        let x = document.getElementById("input-add");
        x.value = ''
        inputText.addEventListener('focus', (event) => {
          inputText.value = ''
        })
        inputText.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
            for (let i of arr) {
                  if (i.includes(inputText.value)){ 
                    inputText.remove();
                    return alert("No duplicates allowed!");
                  }
            }
            if (inputText.value.length < 1){ 
              inputText.remove();
              return alert("Please enter a list item!");
          }
                holder.state.todos.map((todo) => {
                  if (todo === todoID) {
                    todo[0] = inputText.value;
                  }
                  return holder.setState({//rerenders page after editing element.
                    todos: holder.state.todos,
                  });
                }); 
                inputText.remove();
                //alert(words);
            }
        });
        listDiv.prepend(inputText)
        alert("Press ENTER once you're done to edit text.")
  };
//=================================================== End of Edit Field ===========================================\\


  //adds the user inputted task to the  array
  increaseArr = () => {
    let arr = this.state.todos;
    let words = this.props.text;
    //loops through array making sure there are no duplicate elements, otherwise return alert
    for (let i of arr) {
      if (i.includes(words)) return alert("No duplicates allowed!");
    }
    //if user tries to press add without typing anything, this is triggered
    if (words.length < 1) return alert("Please enter a list item!");

    //renders the paage with new todo elements, each todo element has three properties: text, date-time, boolean value
    this.setState({
      todos: [
        [words, new Date().toLocaleString().replace(",", ""), false],
        ...arr,
      ],
    });
  };
}

export default List;

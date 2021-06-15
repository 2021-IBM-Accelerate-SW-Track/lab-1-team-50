import React from "react";
import Header from "./component/header";
import ListContainer from "./component/list-container/list-container";
import "./App.css";
import ListUpdate from "./component/list-container/listUpdate";

function App() {
  return (
    <div className="App">
      <Header />
      <ListUpdate />
      <ListContainer />
    </div>
  );
}

export default App;

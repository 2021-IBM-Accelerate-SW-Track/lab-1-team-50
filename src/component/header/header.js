import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div>
      <h1>Welcome to our To-Do List</h1>
      <div class="banner">
        <img
          class="bannerImage"
          src="https://i.imgur.com/Y7CWhEo.png?2"
          alt="todo list banner"
        ></img>
      </div>
      <div class="header">
        <h2 class="title">What do you have to do?</h2>
      </div>
    </div>
  );
}

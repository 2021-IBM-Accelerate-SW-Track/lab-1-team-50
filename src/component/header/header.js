import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div>
      <h1>Welcome to our todo List</h1>
      <div class="banner">
        <img
          class="bannerImage"
          src="https://i.imgur.com/Y7CWhEo.png"
          alt="todo list banner"
        ></img>
      </div>
      <div class="header">
        <h2 class="title">What do you have to do?</h2>
      </div>
    </div>
  );
}

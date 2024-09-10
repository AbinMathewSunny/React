import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <img className="food-img"  src="283-jsx-attributes-and-styling\20240209.jpg"> </img>
    <img className="food-img" src="283-jsx-attributes-and-styling\20240223.jpg"> </img>
    <img className="food-img" src="283-jsx-attributes-and-styling\mountains-river-forest.png"> </img>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

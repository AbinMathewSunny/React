import React from "react";
import ReactDOM from "react-dom";



const name1="Angela";
const name2="Angela";

const num=7;
ReactDOM.render(
    <div>
<h1>Hello {name1+" "+name2}!</h1>
<p>lucky number is {Math.floor(Math.random()*10)}</p>
</div>,
 document.getElementById("root"));


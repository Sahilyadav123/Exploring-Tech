import ReactDOM from "react-dom/client";
import App from "./App";
import New from "./New";
import Counter from "./Counter";  
import React from "react";
import "./index.css";


//this is a
const value="hello this is a code "

const element = React.createElement(
  "a", // tags
  { href: "https://google.com", target: "_blank" }, // attributs
  "click to visit google",
   // text
   value
  
);


const second = (
  <a href="https://github.com" target="_blank">
    Visit GitHub
  </a>
);

//! this second gets conveted to an object like this 
// {
//   "a",
//   {
//     href: "https://github.com",
//     target: "_blank",
//   },
//   "Visit GitHub",
// }


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  {/* {element}  // this can have the final js value but it cannot hold the function or the condotional statementjust the values finally  */}
  {/* {element}
  {second}
  <App/>
  <New/> */}
  <Counter/>
  <App/>
  </>
  
);

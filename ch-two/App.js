import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> Object ==> HTMLElement(render)

const heading = React.createElement("h1", null, "Hello ji");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// JSX 

const jsxHeading = <h1>Hello from jsx</h1>

root.render(jsxHeading)
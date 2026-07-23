import React from "react";
import ReactDOM from "react-dom";

const h1 = React.createElement("h1", { id: "heading" }, "Hellow World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);

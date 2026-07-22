index.html - hello world using html 

index2.html - hello world using js 

index2.html - hello world using React

{} - this is the place where you can give attributes to the tag 
---
Props stands for Properties.
Props are used to pass data from a parent component to a child component.
Props are read-only and should never be modified by the child.
Props can contain strings, numbers, booleans, arrays, objects, functions, or even other React elements.
Data in React flows one way: Parent → Child.
---
React.createElement() is a React method that creates a React element (a JavaScript object).

- React.createElement(type, props, children)

- const h1 = React.createElement("h1", {}, "Hello World");

- <h1>Hello World</h1>

React.createElement() creates React elements that React later converts into real DOM elements and displays in the browser.
---
root.render() is used to render (display) a React element or React component inside the root DOM element.

Example
const h1 = React.createElement("h1", {}, "Hello World");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(h1);
Work of root.render()
Takes a React element/component.
Converts it into real DOM elements.
Displays it inside the <div id="root"></div>.

In simple words:
root.render() tells React to show the React element/component on the webpage.

---
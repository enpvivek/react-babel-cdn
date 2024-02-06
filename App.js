// function to create Button in React
function MyButton() {
  return <button>Click Me</button>;
}

// Creating H1 with button using JXS (Transpiled by Babel)
function MyApp() {
  return (
    <div id="app">
      <h1>Welcome to my app</h1>
      <MyButton />
      {parent}
    </div>
  );
}

// Creating H1 under div using React.createElement
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "This is heading under 2 Div"),
    React.createElement(
      "p",
      { id: "paragraph" },
      "This is  pragraph which is below heading and heading is within child div which is within parent div"
    ),
  ])
);
// binding root div to react and rendering
ReactDOM.render(<MyApp />, document.getElementById("root"));

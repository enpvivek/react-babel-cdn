// function to create Button in React
function MyButton() {
  return <button>I'm a button</button>;
}

// Creating H1 with button
function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
// binding root div to react and rendering
ReactDOM.render(<MyApp />, document.getElementById("root"));

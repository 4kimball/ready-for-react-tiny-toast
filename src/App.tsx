import React from "react";
import Todo from "./views/Todo";
import Test from "./views/Test";
import ToastProvider from "./components/ToastProvider";
function App() {
  return (
    <div className="App">
      <ToastProvider />
      <Todo />
      <Test />
    </div>
  );
}

export default App;

// import "./App.css";
// import AddTodo from "./components/AddTodo";
// import Todo from "./components/Todo";

// function App() {
//   return (
//     <>
//       <h1>Hello redux ji ka haal baaa</h1>
//       <AddTodo />
//       <Todo />
//     </>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app-container">
      <h1>Task Management Application</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;

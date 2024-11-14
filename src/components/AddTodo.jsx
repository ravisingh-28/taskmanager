// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTodo } from "../features/todo/todoSlice";
// import "./AddTodo.css"; // Import the CSS file

// function AddTodo() {
//   const [input, setInput] = useState("");
//   const dispatch = useDispatch();

//   const addTodoHandler = (e) => {
//     e.preventDefault();
//     if (input.trim()) {
//       dispatch(addTodo(input));
//       setInput("");
//     }
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={addTodoHandler}>
//         <input
//           type="text"
//           placeholder="Write Todo..."
//           className="input-field"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button type="submit" className="add-button">
//           Add Todo
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddTodo;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./AddTodo.css";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo({ title, description, dueDate, priority }));
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("Medium");
    }
  };

  return (
    <div className="todo-form-container">
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Task Title"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Task Description"
          className="description-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          className="task-date-input"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select
          className="priority-input"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit" className="add-task-btn">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTodo;

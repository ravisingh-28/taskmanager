import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  toggleComplete,
  updateTodo,
} from "../features/todo/todoSlice";
import "./TodoItem.css";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filterPriority, setFilterPriority] = useState("");

  const filteredTodos = todos
    .filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()))
    .filter((todo) =>
      filterPriority ? todo.priority === filterPriority : true
    );

  return (
    <div className="todo-items-container">
      <div className="filters-container">
        <input
          type="text"
          placeholder="Search tasks"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="filter-input"
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
        >
          <option value="">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {filteredTodos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : "Pending"}`}
        >
          <div className="task-details">
            <input
              type="checkbox"
              className="task-checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleComplete(todo.id))}
            />
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Due Date: {todo.dueDate}</p>
            <p>Priority: {todo.priority}</p>
          </div>
          <button
            className="edit-btn"
            onClick={() => dispatch(updateTodo(todo.id))}
          >
            Edit
          </button>
          <button
            className="delete-btn"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

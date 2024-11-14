// import { createSlice, nanoid } from "@reduxjs/toolkit";

// //store starting me kaisa dikhega
// const initialState = {
//   todos: [
//     {
//       id: 1,
//       text: "hello world",
//     },
//   ],
// };

// export const todoSlice = createSlice({
//   name: "todo",
//   initialState,

//   //it contains properties and functions
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: nanoid(),
//         text: action.payload,
//       };
//       state.todos.push(todo);
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },

//     updateTodo: (state, action) => {
//       const todo = state.todos.find((todo) => todo.id === action.payload.id);
//       if (todo) {
//         todo.text = action.payload.text;
//       }
//     },
//   },
// });

// export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// export default todoSlice.reducer;

// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [
//     {
//       id: nanoid(),
//       title: "Sample Task",
//       description: "This is a sample task.",
//       dueDate: "2023-12-31",
//       priority: "High",
//       completed: false,
//     },
//   ],
// };

// const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const { title, description, dueDate, priority } = action.payload;
//       state.todos.push({
//         id: nanoid(),
//         title,
//         description,
//         dueDate,
//         priority,
//         completed: false,
//       });
//     },
//     toggleComplete: (state, action) => {
//       const todo = state.todos.find((todo) => todo.id === action.payload);
//       if (todo) todo.completed = !todo.completed;
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },
//     updateTodo: (state, action) => {
//       const { id, title, description, dueDate, priority } = action.payload;
//       const todo = state.todos.find((todo) => todo.id === id);
//       if (todo) {
//         todo.title = title;
//         todo.description = description;
//         todo.dueDate = dueDate;
//         todo.priority = priority;
//       }
//     },
//   },
// });

// export const { addTodo, toggleComplete, removeTodo, updateTodo } =
//   todoSlice.actions;
// export default todoSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";

// Function to load the initial state from sessionStorage
const loadTodosFromSession = () => {
  const savedTodos = sessionStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const initialState = {
  todos: loadTodosFromSession(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Action to add a new todo
    addTodo: (state, action) => {
      const { title, description, dueDate, priority } = action.payload;
      const todo = {
        id: nanoid(),
        title,
        description,
        dueDate,
        priority,
        completed: false,
      };
      state.todos.push(todo);
      // Save updated todos list in sessionStorage
      sessionStorage.setItem("todos", JSON.stringify(state.todos));
    },

    // Action to remove a todo
    removeTodo: (state, action) => {
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      state.todos = updatedTodos;
      // Save updated todos list in sessionStorage
      sessionStorage.setItem("todos", JSON.stringify(state.todos));
    },

    // Action to toggle a todo's completion status
    toggleComplete: (state, action) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      state.todos = updatedTodos;
      // Save updated todos list in sessionStorage
      sessionStorage.setItem("todos", JSON.stringify(state.todos));
    },

    // Action to update an existing todo
    updateTodo: (state, action) => {
      const { id, updatedFields } = action.payload;
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedFields } : todo
      );
      state.todos = updatedTodos;
      // Save updated todos list in sessionStorage
      sessionStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo, toggleComplete, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;

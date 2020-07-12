import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoState = {
  todos: [
    {
      id: 1,
      name: "Make Breakfast",
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: todoState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: uuidv4(), ...action.payload });
    },
    removeTodo: (state, action) => {
      const filtered = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = filtered;
    },
    doneTodo: (state, action) => {
      const completed = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : todo
      );
      state.todos = completed;
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, removeTodo, doneTodo } = todoSlice.actions;

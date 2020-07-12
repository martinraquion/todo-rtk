import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, doneTodo } from "../app/slices/todoSlice";
function Todo() {
  const [newTodo, setNewTodo] = useState({
    name: "",
    completed: false,
  });
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo({ name: "", completed: false });
  };
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo.name}
          onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <ul>
          {todos.map((todo) => (
            <div key={todo.id}>
              <input
                type="checkbox"
                value={todo.completed}
                onChange={() => {
                  dispatch(doneTodo(todo));
                }}
              />
              <li>{todo.name}</li>
              <span>{todo.completed ? "Yes" : "Nos"}</span>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;

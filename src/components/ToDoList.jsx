import React, { useContext } from "react";
import { ToDoContext } from "../Context/ToDoContext";
export default function ToDoList() {
  const { todos, deleteToDo } = useContext(ToDoContext);
  return (
    <div>
      <h2>Your Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>: {todo.description}
            <button
              onClick={() => deleteToDo(todo.id)}
              style={{ marginLeft: "30px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p>No todos to display.</p>}
    </div>
  );
}

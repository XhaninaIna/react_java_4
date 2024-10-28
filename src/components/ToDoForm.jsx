import React, { useState, useContext } from "react";
import { ToDoContext } from "../Context/ToDoContext";

export default function ToDoForm() {
  const { addToDo } = useContext(ToDoContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addToDo(title, description);
      setTitle("");
      setDescription("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add To Do</button>
    </form>
  );
}

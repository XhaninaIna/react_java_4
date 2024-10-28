import React, { createContext, useState } from "react";

export const ToDoContext = createContext();
export const ToDoProvider = ({ children }) => {
  const [todos, setToDos] = useState([]);

  function addToDo(title, description) {
    setToDos([...todos, { id: Date.now(), title, description }]);
  }
  function clearToDos() {
    setToDos([]);
  }
  function deleteToDo(id) {
    setToDos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <ToDoContext.Provider value={{ todos, addToDo, clearToDos, deleteToDo }}>
      {children}
    </ToDoContext.Provider>
  );
};

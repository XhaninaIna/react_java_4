import "./App.css";
import React, { useContext } from "react";
import { ToDoProvider, ToDoContext } from "./Context/ToDoContext";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <ToDoProvider>
      <MainContent />
    </ToDoProvider>
  );
}
export default App;
function MainContent() {
  const { clearToDos, todos } = useContext(ToDoContext);
  return (
    <div>
      <h1>Todo List App</h1>
      <ToDoForm />
      <ToDoList />
      {todos.length > 0 && (
        <button onClick={clearToDos}>Clear All Todos</button>
      )}
    </div>
  );
}

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { ToDos } from "./components/ToDos";

function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos").then(async function (res) {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // });

  return (
    <div>
      <h1>Hello</h1>
      <CreateTodo></CreateTodo>
      <ToDos todos={todos}></ToDos>
    </div>
  );
}

export default App;

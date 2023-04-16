import { useState } from "react";
import Counter from "./components/Counter.jsx";
import CreateTodo from "./components/CreateTodo.jsx";
import Title from "./components/Title.jsx";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <Title />
      <Counter />
      <CreateTodo setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </div>
  );
}
export default App;

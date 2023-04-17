import { useState } from "react";
import Container from "./components/Container.jsx";
import Counter from "./components/Counter.jsx";
import CreateTodo from "./components/CreateTodo.jsx";
import Title from "./components/Title.jsx";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const onRemove = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
    console.log(id);
  };

  const onEdit = (id) => {
    console.log(id);
  };
  return (
    <Container>
      <Title />
      <Counter />
      <CreateTodo setTodoList={setTodoList} />
      <TodoList todoList={todoList} onRemove={onRemove} onEdit={onEdit} />
    </Container>
  );
}
export default App;

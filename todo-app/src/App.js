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
  };

  const onEdit = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isUpdating: !todo.isUpdating } : todo
      )
    );
  };

  const onEnterEdit = (e, id) => {
    console.log(todoList);
    if (e.key === "Enter") {
      setTodoList(
        todoList.map(
          (todo) => {
            if (todo.id === id) {
              return { ...todo, text: e.target.value, isUpdating: false };
            }
            return todo;
          }

          // todo.id === id
          //   ? { ...todo, text: e.target.value, isUpating: false }
          //   : todo
        )
      );
    }
  };
  return (
    <Container>
      <Title />
      <Counter />
      <CreateTodo setTodoList={setTodoList} />
      <TodoList
        todoList={todoList}
        onRemove={onRemove}
        onEdit={onEdit}
        onEnterEdit={onEnterEdit}
      />
    </Container>
  );
}
export default App;

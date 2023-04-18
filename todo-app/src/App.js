import { useEffect, useState } from "react";
import Container from "./components/Container.jsx";
import Counter from "./components/Counter.jsx";
import CreateTodo from "./components/CreateTodo.jsx";
import Title from "./components/Title.jsx";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [todoId, setTodoId] = useState(0);

  // 투두 입력 시
  const onChangeInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  // 등록 버튼 클릭
  const onClickAddTodo = () => {
    if (inputValue) {
      setTodoList((prev) => [
        ...prev,
        {
          id: todoId,
          text: inputValue,
          isComplete: false,
          isUpdating: false,
        },
      ]);
      setTodoId((prev) => prev + 1);
      setInputValue("");
    }
  };

  // 렌더링 시, 로컬스토리지의 투두리스트 가져와서 출력
  useEffect(() => {
    const localTodoList = localStorage.getItem("todoListData");
    if (localTodoList) {
      setTodoList(JSON.parse(localTodoList));
    }
  }, []);
  // todolist와 todoId 업데이트 시, 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("todoListData", JSON.stringify(todoList));
  }, [todoList, todoId]);
  return (
    <Container>
      <Title />
      {/* <Counter /> */}
      <CreateTodo
        onChangeInput={onChangeInput}
        onClickAddTodo={onClickAddTodo}
        inputValue={inputValue}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </Container>
  );
}
export default App;

import { useEffect, useState } from "react";
import "./reset.css";
import Container from "./components/Container.jsx";
import Counter from "./components/Counter.jsx";
import CreateTodo from "./components/CreateTodo.jsx";
import Title from "./components/Title.jsx";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const unDoneTodoList = todoList.filter((todo) => !todo.done);
  const doneTodoList = todoList.filter((todo) => todo.done);

  // 투두 입력 시
  const onChangeInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  // 등록 버튼 클릭
  // +) 에러사항 : useState가 새로고침 시 초기화 되어서 todoId 값이 다시 0이 된다.
  // 투두를 등록하고 새로고침한 뒤에 다시 등록하면 id가 다시 0부터 시작하기 때문에 id값이 중복이 된다.
  // 그래서 우선은 Date.now()로 해결한다.
  const onClickAddTodo = () => {
    if (inputValue) {
      setTodoList((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: inputValue,
          done: false,
          isUpdating: false,
        },
      ]);

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
  }, [todoList]);

  return (
    <Container>
      <Title />
      <CreateTodo
        onChangeInput={onChangeInput}
        onClickAddTodo={onClickAddTodo}
        inputValue={inputValue}
      />
      <Counter unDoneTodoList={unDoneTodoList} doneTodoList={doneTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </Container>
  );
}
export default App;

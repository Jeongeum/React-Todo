import React from "react";
import "./TodoItem.css";
// key를 list에서 props로 받아오면 안된다. props로 각 item을 받아와서 여기에서 펼쳐줘야한다.
export default function TodoItem({
  todoList,
  setTodoList,
  text,
  done,
  isUpdating,
  item,
}) {
  const { id } = item;
  console.log(todoList);

  // 수정 버튼 클릭
  const onEdit = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isUpdating: !todo.isUpdating } : todo
      )
    );
  };

  // 수정 후 엔터
  const onEnterEdit = (e, id) => {
    console.log(todoList);
    if (e.key === "Enter") {
      setTodoList(
        todoList.map((todo) => {
          if (todo.id === id) {
            return { ...todo, text: e.target.value, isUpdating: false };
          }
          return todo;
        })
      );
    }
  };

  // 체크박스 체크
  const checkToggle = (id) => {
    console.log("체크");
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !done };
        }
        return todo;
      })
    );
  };

  // 삭제
  const onRemove = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <li key={id} className="todoitemWrapper">
        <div className="todoitemCont">
          <span
            className={done ? "checked" : ""}
            onClick={() => checkToggle(id)}
          >
            {done ? "✅ " : "☑️ "}
          </span>

          {isUpdating ? (
            <input
              type="text"
              onKeyDown={(e) => onEnterEdit(e, id)}
              className="updateTodoInput"
            ></input>
          ) : (
            <span className={done ? "checked checkedText" : ""}>{text}</span>
          )}
        </div>

        {isUpdating ? (
          <></>
        ) : (
          <button onClick={() => onEdit(id)} className="todoitemBtn">
            수정
          </button>
        )}
        <button onClick={() => onRemove(id)} className="todoitemBtn">
          삭제
        </button>
      </li>
    </>
  );
}

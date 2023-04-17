import React, { useState } from "react";

export default function CreateTodo({ setTodoList }) {
  const [inputValue, setInputValue] = useState("");
  const [todoId, setTodoId] = useState(0);

  const onChangeInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };
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
  return (
    <>
      <input
        placeholder="할 일을 입력하세요."
        onChange={onChangeInput}
        value={inputValue}
      ></input>
      <button type="submit" onClick={onClickAddTodo}>
        등록
      </button>
    </>
  );
}

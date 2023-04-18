import React, { useState } from "react";

export default function CreateTodo({
  onChangeInput,
  onClickAddTodo,
  inputValue,
}) {
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

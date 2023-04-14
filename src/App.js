import { useState, useRef, useCallback } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import CreateTodo from "./components/CreateTodo";
import TodoContainer from "./components/TodoContainer";
import TodoList from "./components/TodoList";
import TodoTitle from "./components/TodoTitle";

const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

body {
background-color: aliceblue;
}
`;

function App() {
  const todos = {
    todo: {
      id: 1,
      text: "리액트 공부하기",
      check: false,
    },
  };
  return (
    <>
      <GlobalStyle />
      <TodoContainer>
        <TodoTitle />
        <TodoList />
        <CreateTodo />
      </TodoContainer>
    </>
  );
}
export default App;

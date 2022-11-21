import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListUl = styled.ul`
flex: 1;
padding: 20px;
background-color: lightgreen;
`

export default function TodoList() {
  return (
  <>
  <TodoListUl>
    <TodoItem></TodoItem>
  </TodoListUl>
  </>
  );
}

import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoList }) {
  // todoList.map((item) => console.log(item.id));
  console.log(todoList);
  return (
    <ul>
      {todoList.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}

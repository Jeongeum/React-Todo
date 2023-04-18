import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoList, setTodoList }) {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          todoList={todoList}
          setTodoList={setTodoList}
          text={item.text}
          isComplete={item.isComplete}
          isUpdating={item.isUpdating}
          item={item}
        />
      ))}
    </ul>
  );
}

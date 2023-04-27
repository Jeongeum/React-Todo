import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({ todoList, setTodoList }) {
  return (
    <div className="todolistWrapper">
      <ul className="todolists">
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
    </div>
  );
}

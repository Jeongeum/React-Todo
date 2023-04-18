import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoList, onRemove, onEdit, onEnterEdit }) {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          isComplate={item.isComplate}
          isUpdating={item.isUpdating}
          item={item}
          onRemove={onRemove}
          onEdit={onEdit}
          onEnterEdit={onEnterEdit}
        />
      ))}
    </ul>
  );
}

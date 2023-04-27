import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div className="todolistWrapper">
      <ul className="todolists">
        {todoList.map((item) => (
          <TodoItem
            key={item.id}
            todoList={todoList}
            setTodoList={setTodoList}
            text={item.text}
            done={item.done}
            isUpdating={item.isUpdating}
            item={item}
          />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoList);

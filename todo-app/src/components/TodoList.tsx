import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
import { Todo } from '../App';

type TodoListType = {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList = ({ todoList, setTodoList }: TodoListType) => {
  return (
    <div className="todolistWrapper">
      <ul className="todolists">
        {todoList.map((item) => (
          <TodoItem
            key={item.id}
            todoList={todoList}
            setTodoList={setTodoList}
            item={item}
          />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoList);

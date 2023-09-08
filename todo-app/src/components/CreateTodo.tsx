import React from 'react';
import './CreateTodo.css';

type CreateTodoType = {
  onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
  onClickAddTodo: () => void;
  inputValue: string;
};

const CreateTodo: React.FC<CreateTodoType> = ({
  onChangeInput,
  onClickAddTodo,
  inputValue,
}) => {
  return (
    <div>
      <input
        placeholder="할 일을 입력하세요."
        onChange={onChangeInput}
        value={inputValue}
        className="createTodoInput"
      ></input>
      <button type="submit" onClick={onClickAddTodo} className="addBtn">
        등록
      </button>
    </div>
  );
};

export default React.memo(CreateTodo);

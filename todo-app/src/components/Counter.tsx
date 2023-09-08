import React from 'react';
import './Counter.css';
import { Todo } from '../App';

type CouterType = {
  unDoneTodoList: Todo[];
  doneTodoList: Todo[];
};

const Counter = ({ unDoneTodoList, doneTodoList }: CouterType) => {
  return (
    <>
      <div className="countWrapper">
        <span>☑️ {unDoneTodoList.length}개 남음 </span>
        <span>✅ {doneTodoList.length}개 완료</span>
      </div>
    </>
  );
};

export default React.memo(Counter);

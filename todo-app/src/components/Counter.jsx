import React, { useState } from "react";
import "./Counter.css";

export default function Counter({ unDoneTodoList, doneTodoList }) {
  // todo 상태관리
  let [todoCount, setTodoCount] = useState(0);
  let [todoFinished, setTodoFinished] = useState(0);
  return (
    <>
      <div className="countWrapper">
        <span>☑️ {unDoneTodoList.length}개 남음 </span>
        <span>✅ {doneTodoList.length}개 완료</span>
      </div>
    </>
  );
}

import React from "react";
import "./Counter.css";

const Counter = ({ unDoneTodoList, doneTodoList }) => {
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

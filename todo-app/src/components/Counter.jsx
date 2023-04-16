import React, { useState } from "react";

export default function Counter() {
  // todo 상태관리
  let [todoCount, setTodoCount] = useState(0);
  let [todoFinished, setTodoFinished] = useState(0);
  return (
    <>
      <div>
        <span>💪🏻 {todoCount}개 남음</span>
        <span>✅ {todoFinished}개 완료</span>
      </div>
    </>
  );
}

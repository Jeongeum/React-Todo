import React, { useState } from "react";

export default function Header() {
  const dt = new Date();
  const year = dt.getFullYear();
  const month = dt.getMonth() + 1;
  const date = dt.getDate();
  const dayArr = ["일", "월", "화", "수", "목", "금", "토"];
  const day = dayArr[dt.getDay()];

  return (
    <section>
      <h2>
        {year}년 {month}월 {date}일
      </h2>
      <p>{day}요일</p>
    </section>
  );
}

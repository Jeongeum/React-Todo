import React from "react";
import "./Title.css";

export default function Title() {
  const dt = new Date();
  const year = dt.getFullYear();
  const month = dt.getMonth() + 1;
  const date = dt.getDate();
  const dayArr = ["일", "월", "화", "수", "목", "금", "토"];
  const day = dayArr[dt.getDay()];

  return (
    <section className="title-wrapper">
      <h2>
        {year}년 {month}월 {date}일 <span>{day}요일</span>
      </h2>
    </section>
  );
}

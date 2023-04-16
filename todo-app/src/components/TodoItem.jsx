import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
// key를 list에서 props로 받아오면 안된다. props로 각 item을 받아와서 여기에서 펼쳐줘야한다.
export default function TodoItem({ todo }) {
  const { id, text, checked } = todo;
  return (
    <>
      <li key={id}>
        <input type="checkbox" />

        {text}
        <BsFillPencilFill />
        <FaTrash />
      </li>
    </>
  );
}

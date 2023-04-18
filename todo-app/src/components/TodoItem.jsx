import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
// key를 list에서 props로 받아오면 안된다. props로 각 item을 받아와서 여기에서 펼쳐줘야한다.
export default function TodoItem({
  text,
  isComplate,
  isUpdating,
  item,
  onRemove,
  onEdit,
  onEnterEdit,
}) {
  const { id } = item;
  return (
    <>
      <li key={id}>
        <div>
          <input type="checkbox" />
        </div>
        {isUpdating ? (
          <input type="text" onKeyDown={(e) => onEnterEdit(e, id)}></input>
        ) : (
          text
        )}

        {isUpdating ? (
          <></>
        ) : (
          <button onClick={() => onEdit(id)}>
            수정
            {/* <BsFillPencilFill /> */}
          </button>
        )}
        <button onClick={() => onRemove(id)}>
          삭제
          {/* <FaTrash /> */}
        </button>
      </li>
    </>
  );
}

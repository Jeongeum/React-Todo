import styled from "styled-components";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import { IoPencil, IoTrashOutline } from "react-icons/io5";

const TodoItemLi = styled.li`
  display: flex;
  align-items: center;
`;

const CheckBoxDiv = styled.div`
  width: 30px;
  height: 30px;
  background-color: #eee;
  border: 1px solid #000;
  border-radius: 50%;
`;

const Text = styled.p`
  font-size: 18px;
`;

export default function TodoItem() {
  return (
    <TodoItemLi>
      <CheckBoxDiv>
        {/* 체크 true이면 ✅ 체크 false이면 🟩 에 해당하는 코드 */}
      </CheckBoxDiv>
      <Text>텍스트가 나올 자리</Text>
      <IoPencil>수정</IoPencil>
      <IoTrashOutline>삭제</IoTrashOutline>
    </TodoItemLi>
  );
}

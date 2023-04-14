import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

const CreateBtn = styled.button`
  width: 50px;
  height: 50px;
  font-size: 20px;
  color: #fff;
  border: none;
  border-radius: 50%;
  background-color: #83d483;
  &:hover {
    background-color: #96e896;
  }
  &:active {
    background-color: tomato;
    transform: rotate(45deg);
  }
`;

const Createcontainer = styled.section`
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
`;

const CreateForm = styled.form`
  width: 100%;
  margin-right: 10px;
`;

const CreateInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 7px;
`;

export default function CreateTodo({ onCreate }) {
  return (
    <Createcontainer>
      <CreateForm>
        <CreateInput
          type="text"
          placeholder="할 일을 입력 후, Enter를 눌러주세요!"
        />
        <CreateBtn type="submit">
          <AiOutlinePlus />
        </CreateBtn>
      </CreateForm>
    </Createcontainer>
  );
}

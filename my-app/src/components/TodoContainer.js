import styled from "styled-components";

const TodoContSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 512px;
  height: 768px;

  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 14px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

export default function TodoContainer({ children }) {
  return <TodoContSection>{children}</TodoContSection>;
}

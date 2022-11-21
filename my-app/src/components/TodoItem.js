import styled from "styled-components"

const TodoItemLi = styled.li`
    display: flex;
`

const CheckBoxDiv = styled.div`
    width: 30px;
    height: 30px;
    background-color: #eee;
    border: 1px solid #000;
    border-radius: 50%;
`

function handleTodoCheck() {
    
}
export default function TodoItem() {
    return (
        <TodoItemLi>
            <CheckBoxDiv onClick={handleTodoCheck}/>하나
        </TodoItemLi>
    )
}
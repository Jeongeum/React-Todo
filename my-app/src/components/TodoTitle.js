import styled from "styled-components";

const TodoTitSection = styled.section`
padding-bottom: 20px;
border-bottom: 1px solid black;

h2 {
    font-size: 32px;
}

p {
    font-size: 20px;
    color: #9e9c9c;
    margin-top: 10px;
}

.TodoCountCont {
    display: flex;
    gap: 15px;
    margin-top: 10px;
}

.ing {
    color: tomato;
}

.finish {
    color: green;
}
`

export default function TodoTitle() {
    const dt = new Date();
    const year = dt.getFullYear();
    const month = dt.getMonth() + 1;
    const date = dt.getDate();
    const dayArr = ['일', '월', '화', '수', '목', '금', '토'];
    const day = dayArr[dt.getDay()]; // 요일
    console.log(year)
    console.log(month)
    console.log(date)
    console.log(day)
    return (
        <TodoTitSection>
        <h2>{year}년 {month}월 {date}일</h2>
        <p>{day}요일</p>
        <div className="TodoCountCont">
            <span className="ing">📍 1개 남음</span>
            <span className="finish">✅ 10개 완료</span>
        </div>
        </TodoTitSection>
    )
}
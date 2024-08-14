/** @jsxImportSource @emotion/react */
import * as s from "./style";

function TodoBox({ todo }) {
    return <div css={s.todoBox}>
        <div css={s.todoTitleBox}>
            <div css={s.todoCheckBox}>
                <input type="checkbox" id={todo.todoId} checked={todo.status === 2} />
                <label htmlFor={todo.todoId}></label>
            </div>

            <div css={s.todoTitleAndTime}>
                <h2>{todo.title}</h2>
                <span>{todo.todoDateTime.slice(11)}</span>
            </div>
        </div>
        <div css={s.todoSubBox}></div>
    </div>
}

function TodoDateGroup({date, todos}) {
    return <>
        <h2 css={s.dateTitle}>{date}</h2>
        <div>
            {
                todos.map(todo => <TodoBox todo={todo} key={todo.todoId}/>)
            }
        </div>
    </>
}

function TodoMonthGroup({month, dateOfCalendarData}) {
    const entriesOfDate = Object.entries(dateOfCalendarData);

    return <>
        <h2 css={s.monthTitle}>{month}월</h2>
        <div>
            {
                entriesOfDate.map(([date, todos]) => 
                <TodoDateGroup date={date} todos={todos} />)
            }
        </div>
    </>
}

function TodoYearGroup({year, monthOfCalendarData}) {
    const entriesOfMonth = Object.entries(monthOfCalendarData);

    return <>
        <h2 css={s.yearTitle}>{year}년</h2>
        <div>
            {
                // month에 따라 todos(todolist들) 데이터 들이 나오는  
                entriesOfMonth.map(([month, dateOfCalendarData]) => 
                <TodoMonthGroup key={year + month} month={month} dateOfCalendarData={dateOfCalendarData} />) 
            }
        </div>
    </>
}

function TodoCalendar({ calendarData }) {
    const entriesOfCalendarData = Object.entries(calendarData); // entries는 entries안에 배열로 들어가 있다는 의미 / [[key: value]] => 이런 배열들이 들어가 있다 

    return (
        <div css={s.layout}>
            {
                // year에 따라 month만 계속 바뀌는 / 24년에 8월, 9월... 25년에 1월, 2월... 이런식으로 
                entriesOfCalendarData.map(([year, monthOfCalendarData]) => 
                <TodoYearGroup key={year} year={year} monthOfCalendarData={monthOfCalendarData}/>)
            }
        </div>
    );
}

export default TodoCalendar;
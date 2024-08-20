/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { changeCheckTodoStatus } from "../../apis/todoApis/modifyTodoApi";
import { refreshTodolistAtom } from "../../atoms/todolistAtoms";
import { modifyTodoAtom, selectedCalendarTodoAtom } from "../../atoms/calendarAtoms";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import FullRedButton from "../FullRedButton/FullRedButton";
import { deleteTodoApi } from "../../apis/todoApis/deleteTodoApi";

function TodoBox({ todo }) {

    const importantOptions = [
        { label: "❗ 중요", value: 1, },
        { label: "❕ 중요하지않음", value: 2, },
    ];

    const busyOptions = [
        { label: "🚨 급함", value: 1, },
        { label: "🌈 급하지않음", value: 2, },
    ]

    const [ selectedTodo, setSelectedTodo ] = useRecoilState(selectedCalendarTodoAtom);
    const setRefresh = useSetRecoilState(refreshTodolistAtom);
    const [ modifyTodo, setModifyTodo ] = useRecoilState(modifyTodoAtom);

    useEffect(() => {
        if(selectedTodo === todo.todoId) {
            // 수정본을 원본으로 바꾸는 작업
            setModifyTodo({
                ...todo,
                todoDateTime: todo.todoDateTime.replaceAll(" ", "T")
            });  
        }
    }, [selectedTodo]);

    const handleCheckBoxOnChange = async (e) => {
        await changeCheckTodoStatus(e.target.value);
        setRefresh(true);

    }

    const handleSelectTodoClick = (todoId) => {
         setSelectedTodo(todoId);
    }

    const handleModifyChange = (e) => {
        setModifyTodo(modifyTodo => ({
            ...modifyTodo,
            [e.target.name]: e.target.value
        }));
    }

    const handleImportantSelectOnChange = (option) => {
        setModifyTodo(modifyTodo => ({
            ...modifyTodo,
            important: option.value
        }))
    }

    const handleBusySelectOnChange = (option) => {
        setModifyTodo(modifyTodo => ({
            ...modifyTodo,
            busy: option.value
        }))
    }

    const handleDeleteClick = async (todoId) => {
        await deleteTodoApi(todoId);
        setRefresh(true);
        setSelectedTodo(0); // 완료 취소 버튼이 사라지록
    }

    return <div css={s.todoBox}>
        <div css={s.todoTitleBox}>
            <div css={s.todoCheckBox}>
                <input type="checkbox" 
                    id={todo.todoId} 
                    checked={todo.status === 2} 
                    onChange={handleCheckBoxOnChange}
                    value={todo.todoId} />
                <label htmlFor={todo.todoId}></label>
            </div>

            <div css={s.todoTitleAndTime}>
                {
                    selectedTodo === todo.todoId 
                    ? <input type="text" name="title" onChange={handleModifyChange} value={modifyTodo.title} />
                    : <h2 onClick={() => handleSelectTodoClick(todo.todoId)}>{todo.title}</h2>
                }
                
                <span>{todo.todoDateTime.slice(11)}</span>
            </div>
        </div>
        <div css={s.todoSubBox}>
            {
                selectedTodo === todo.todoId && 
                <>
                    <div css={s.contentBox}>
                        <h3>메모</h3>
                        <textarea name="content" onChange={handleModifyChange} value={modifyTodo.content} ></textarea>
                        <input type="datetime-local" name="dateTime" onChange={handleModifyChange} value={todo.dateTime} />
                    </div>

                    <div>
                        <ReactSelect
                            onChange={handleImportantSelectOnChange}
                            styles={{
                                control: (style) => ({
                                    ...style, 
                                    marginBottom: "5px",
                                    border: "none", 
                                    border: "none",
                                    outline: "none", 
                                    boxShadow: "none",
                                    backgroundColor: "#f5f5f5",
                                    cursor: "pointer",
                                }),
                                
                                menu: (style) => ({
                                    ...style,
                                    backgroundColor: "#f5f5f5",
                                }),

                                option: (style) => ({
                                    ...style,
                                    cursor: "pointer",
                                })
                            }}

                            options={importantOptions}
                            value={importantOptions.filter(option => option.value === modifyTodo.important)[0]} // 처음에 띄우고 싶은 데이터를 띄우게 해줌
                        />

                        <ReactSelect
                            onChange={handleBusySelectOnChange}
                            styles={{
                                control: (style) => ({
                                    ...style, 
                                    marginBottom: "10px",
                                    border: "none", 
                                    border: "none",
                                    outline: "none", 
                                    boxShadow: "none",
                                    backgroundColor: "#f5f5f5",
                                    cursor: "pointer",
                                }),
                                
                                menu: (style) => ({
                                    ...style,
                                    backgroundColor: "#f5f5f5",
                                }),

                                option: (style) => ({
                                    ...style,
                                    cursor: "pointer",
                                })
                            }}

                            options={busyOptions}
                            value={busyOptions.filter(option => option.value === modifyTodo.busy)[0]}
                        />
                        <div css={s.deletButton}>
                            <FullRedButton onClick={() => {handleDeleteClick(todo.todoId)}}>삭제하기</FullRedButton> 
                        </div>
                    </div>
                </>
            }
        </div>
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
    const entriesOfDate = Object.entries(dateOfCalendarData); // 객체 이므로 entry로 바꿔야한다

    return <>
        <h2 css={s.monthTitle}>{month}월</h2>
        <div>
            {
                entriesOfDate.map(([date, todos]) => 
                <TodoDateGroup key={date} date={date} todos={todos} />) // date를 기준으로 todo들이 존재한다 
            }
        </div>
    </>
}

function TodoYearGroup({year, monthOfCalendarData}) {
    const entriesOfMonth = Object.entries(monthOfCalendarData); // 객체 이므로 entry로 바꿔야한다

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

    const [ selectedTodo, setSelectedTodo ] = useRecoilState(selectedCalendarTodoAtom);
    // entries는 entries안에 배열로 들어가 있다는 의미 / [[key: value]] => 이런 배열들이 들어가 있다
    const entriesOfCalendarData = Object.entries(calendarData);  

    // 처음 랜더링이 됬을 때 한번만 실행해라 라는 뜻
    useEffect(() => {
        setSelectedTodo(0);
    }, []);

    // 0이 아닌 다른 값이 들어오면 그때 실행돼라
    // if(!!selectedTodo) {
    //     setSelectedTodo(0);
    // } // useEffect 대신 쓸수도 있음 

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
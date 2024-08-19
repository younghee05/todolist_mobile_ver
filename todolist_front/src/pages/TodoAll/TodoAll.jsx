/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import PageAnimationLayout from '../../components/PageAnimationLayout/PageAnimationLayout';
import MainContainer from '../../components/MainContainer/MainContainer';
import BackButtonTop from '../../components/BackButtonTop/BackButtonTop';
import PageTitle from '../../components/PageTitle/PageTitle';
import { MENUS } from '../../constants/menus';
import { useRecoilState } from 'recoil';
import { todolistAtom } from '../../atoms/todolistAtoms';
import TodoCalendar from '../../components/TodoCalendar/TodoCalendar';
import ConfirmButtonTop from '../../components/ConfirmButtonTop/confirmButtonTop';
import RegisterTodoButton from '../../components/RegisterTodoButton/RegisterTodoButton';
import { modifyTodoAtom, selectedCalendarTodoAtom } from "../../atoms/calendarAtoms";

function TodoAll(props) {
    // useRecoil
    const [ todolistAll ] = useRecoilState(todolistAtom);
    const [ selectedTodo, setSelectedTodo ] = useRecoilState(selectedCalendarTodoAtom);
    const [ modifyTodo, setModifyTodo ] = useRecoilState(modifyTodoAtom);

    // useState
    const [ calendarData, setCalendarData ] = useState({});
    const [ isShow, setShow ] = useState(true);
    const [ submitButtonDisabled, setSubmitButtonDisabled ] = useState(true);

    useEffect(() => {
        let preTodo = {
            ...(todolistAll.todolist.filter(todo => 
            todo.todoId === modifyTodo?.todoId)[0]),
        };

        preTodo = {
            ...preTodo, todoDateTime: preTodo?.todoDateTime?.relaceAll(" ", "T")
        };
        
        // json 구조로 바뀌면서 주소값을 비교하지 않음
        const disabled = JSON.stringify(modifyTodo) === JSON.stringify(preTodo) || !modifyTodo?.title?.trim(); 
        setSubmitButtonDisabled(disabled);

    }, [modifyTodo]);

    useEffect(() => {
        // temp : 임시라는 뜻으로 많이 사용됨 
        const tempCalendarData = {};

        for(let todo of todolistAll.todolist) {
            const dateTime = todo.todoDateTime;
            const year = dateTime.slice(0, 4); // 년도
            const month = dateTime.slice(5, 7); // 월
            const date = dateTime.slice(0, 10); // 년, 월, 일 (시간을 제외한 모든 date값)

            if(!tempCalendarData[year]) {
                tempCalendarData[year] = {}; // 년도에 대한 객체를 만듦
            }
            if(!tempCalendarData[year][month]) {
                tempCalendarData[year][month] = {}; // 월에 대한 객체를 만듦
            }
            if(!tempCalendarData[year][month][date]) {
                tempCalendarData[year][month][date] = []; // 월에 대한 배열을 만듦
            }

            // 년 월 일에 push 하겠다 
            tempCalendarData[year][month][date].push(todo);
        }

        setCalendarData(tempCalendarData);

    }, [todolistAll]);

    const modifyCancel = () => {
        setSelectedTodo(0);
    }

    const modifySubmit = () => {

        setSelectedTodo(0);
    }


    return (
        <PageAnimationLayout isShow={isShow} setShow={setShow}>
            <MainContainer>
                <div css={s.layout}>
                    {
                        selectedTodo === 0 
                        ? <BackButtonTop setShow={setShow} />
                        : <ConfirmButtonTop onCancel={modifyCancel} onSubmit={modifySubmit} disabled={submitButtonDisabled} />

                    }
                    
                    <PageTitle title={MENUS.all.title} color={MENUS.all.color} />
                    <TodoCalendar calendarData={calendarData} />
                    <RegisterTodoButton />
                </div>
            </MainContainer>
        </PageAnimationLayout>
    );
}
export default TodoAll;
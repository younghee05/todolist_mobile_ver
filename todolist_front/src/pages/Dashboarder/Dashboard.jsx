/** @jsxImportSource @emotion/react */
import DateTitle from "../../components/Dashboard/DateTitle/DateTitle";
import Search from "../../components/Dashboard/Search/Search";
import MenuList from "../../components/Dashboard/MenuList/MenuList";
import RegisterTodoButton from "../../components/RegisterTodoButton/RegisterTodoButton";
import * as s from "./style";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Route, Routes } from "react-router-dom";
import TodoAll from "../TodoAll/TodoAll";
import { useRecoilState, useSetRecoilState } from "recoil";
import { refreshTodolistAtom, todolistAtom } from "../../atoms/todolistAtoms";
import { getTodoAllApi, getTodoCountsApi } from "../../apis/todoApis/getTodoApi";
import { useEffect } from "react";


function Dashboard(props) {
    const setTodolistAll = useSetRecoilState(todolistAtom);
    const [ refresh, setRefresh ] = useRecoilState(refreshTodolistAtom);

    const requestTodolist = async () => {
        const todolist = await getTodoAllApi();
        const counts = await getTodoCountsApi();
        setTodolistAll({
            todolist: todolist?.data, // null 이면 참조하지 말라는 뜻 (삼항연산자가 다름)
            counts: counts?.data    // null if 라고 불림 
        });
    }  

    useEffect(() => {
        if(refresh) {
            requestTodolist();
        }
        // refresh가 false가 되면 useEffect가 더이상 실행 안되겠끔
        setRefresh(false); 
    }, [refresh]);

    return (
        <MainContainer>
            <div css={s.layout}>
                <header>
                    <Search />
                </header>
                <main>
                    <DateTitle />
                    <MenuList />
                </main>
                <footer>
                    <RegisterTodoButton />
                </footer>
            </div>
            <Routes>
                <Route path="/all" element={<TodoAll />} />    
            </Routes>
        </MainContainer>
    );
}

export default Dashboard;
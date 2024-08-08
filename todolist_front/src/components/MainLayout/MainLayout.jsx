import React, { useEffect, useState } from 'react';
import { IoCellularSharp } from "react-icons/io5";
import { IoIosWifi, IoIosBatteryFull  } from "react-icons/io";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import MainContainer from '../MainContainer/MainContainer';

//                 (    props   )
function MainLayout({ children }) {
    const [ clock, setClock ] = useState("0:00");

    // 한번만 실행 (일회용)
    useEffect(() => {
        // 1초가 지날때 마다 함수가 실행되는 방식
        setInterval(() => {
            const now = new Date();
            // toLocaleTimeString : 현재시간(시:분:초)
            // const localTime = now.toLocaleTimeString(); 
            // setClock(localTime.slice(2, 8)); 
            const hours = now.getHours(); // 현재 시
            const minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes(); // 현재 분
            setClock(`${hours}:${minutes}`); 
        }, 1000);
    }, []);

    return (
        <div css={s.layout}>
            <div css={s.frame}>
                <div css={s.topBar}>
                    <div css={s.clock}>{clock}</div>
                    <div css={s.topBarCenter}></div>
                    <div css={s.rightItems}><IoCellularSharp /><IoIosWifi />< IoIosBatteryFull /></div>
                </div>
                <MainContainer>
                    {/* children을 props의 비구조 할당으로 가지고 오는 것 */}
                    {children}
                </MainContainer>
            </div>
        </div>
    );
}

export default MainLayout;
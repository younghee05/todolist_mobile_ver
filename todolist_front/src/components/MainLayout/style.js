import { css } from "@emotion/react";

// 모바일 사이즈

// 전체 화면을 잡는 
export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    // root 의 너비 높이에 맞춰짐
    width: 100%;
    height: 100%;
`;

// 폰 테두리
export const frame = css`
    position: relative; // relative 로 잡아야 자식요소가 absolute 일때 여기가 기준이 된다.
    border: 5px solid #000000;
    border-radius: 40px;
    width: 375px;
    height: 812px;
    background-color: white;
    overflow: hidden; // 안에 있는 것들이 튀어 나오지 않기 위함
`;

export const topBar = css`
    position: absolute;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;
`;

export const topBarCenter = css`
    border-radius: 20px;
    width: 36%;
    height: 30px;
    background-color: black;
`; 

// 시간
export const clock = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32%;
    font-size: 15px;
    font-weight: 600;
    cursor: default;
`;

// 와이파이, 안테나, 배터리
export const rightItems = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32%;
    & *:nth-of-type(2) {
        margin: 0px 8px;
    }

`;
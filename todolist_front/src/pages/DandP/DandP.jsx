import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// 1번째 박스 (position ex)
const parent = css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;
`;



const child = css`
    box-sizing: border-box;
    border: 4px solid red;
    width: 150px;
    height: 50px;
    background-color: white;

    &:nth-of-type(1) {
        background-color: pink;
        align-self: flex-start; /* self 를 쓰면 item이 대각선으로 간다 */
    }

    /* 자식들 중3번째 요소 */
    &:nth-of-type(3) {
        background-color: pink;
        align-self: flex-end;
    }

    &:nth-of-type(5) {
        background-color: pink;
        align-self: flex-start;
    }
`;

const inputBox = css`   
    position: relative;
`;

const input = css`
    width: 300px;
    height: 50px;
    padding-right: 70px;
    /* 인접형제 */
    & + button {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%); 
        z-index: 0;
        color: white;
        background-color: red;
    }  
`;


// 2번째 박스 (flex ex)
// const parent = css`
//     box-sizing: border-box;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//     margin: 50px auto;
//     border: 1px solid #dbdbdb;
//     padding: 10px;
//     width: 800px;
//     height: 400px;
// `;



// const child = css`
//     box-sizing: border-box;
//     border: 4px solid red;
//     width: 150px;
//     height: 50px;
//     background-color: white;

//     &:nth-of-type(1) {
//         background-color: pink;
//         align-self: flex-start;
//     }

//     /* 자식들 중3번째 요소 */
//     &:nth-of-type(3) {
//         background-color: pink;
//         align-self: flex-end;
//     }

//     &:nth-of-type(5) {
//         background-color: pink;
//         align-self: flex-start;
//     }
// `;

const parent2 = css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;
`;


const child2 = css`
    box-sizing: border-box;
    border: 4px solid blue;
    width: 300px;
    height: 100%;
    background-color: white;
    &:nth-of-type(1) {
        background-color: yellow;
        flex-shrink: 2;
    }
    &:nth-of-type(2) {
        background-color: green;
        flex-shrink: 1;
    }
    &:nth-of-type(3) {
        background-color: purple;
    }
`;

function DandP(props) {
    return (
        <>
            <div css={parent}>
                <div css={child}>1</div>
                <div css={child}>2</div>
                <div css={child}>3</div>
                <div css={child}>4</div>
                <div css={child}>5</div>
                <div css={inputBox}>
                    <input type="text" css={input}/>
                    <button>OK</button>
                </div>
                {/* <div css={child}>6</div>
                <div css={child}>7</div>
                <div css={child}>8</div>
                <div css={child}>9</div>
                <div css={child}>10</div>
                <div css={child}>11</div>
                <div css={child}>12</div>
                <div css={child}>13</div>
                <div css={child}>14</div>
                <div css={child}>15</div> */}
            </div>
            <div css={parent2}>
                <div css={child2}></div>
                <div css={child2}></div>
                <div css={child2}></div>
            </div>
        </>
    );
}

export default DandP;
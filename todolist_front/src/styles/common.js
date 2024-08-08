import { css } from "@emotion/react";

export const reset = css`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
    * {
        font-family: "Noto Sans KR";
        font-weight: 400;
        font-size: 16px;
    }

    html, body, #root {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: #555555;
    }

    h1, h2, h3, ul, p {
        margin: 0;
        padding: 0;
        
    }

    ul, ol {
        list-style-type: none;
    }

    button {
        border: none;
        padding: 5px 10px;
        color: #087fff;
        background-color: transparent;
        cursor: pointer;
    }

    button:active {
        color: #008ada40;
        background-color: transparent;
        
    }

    button:disabled {
        color: #008ada40;
        background-color: transparent;
        cursor: default;
    }

    // 애니메이션을 주기 위함
    // 모달창 열리는 효과
    @keyframes registerModalContentOpen {
        // 시작점
        from {
            inset: auto 0 -650px;
        }
        // 끝점
        to {
            inset: auto 0 0;
        }
    }

    // 모달창 닫는 효과
    @keyframes registerModalContentClose {
        // 시작점
        from {
            inset: auto 0 0;
        }
        // 끝점
        to {
            inset: auto 0 -650px;
        }
    }
`;
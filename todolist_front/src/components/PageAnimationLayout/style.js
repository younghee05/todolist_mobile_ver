import { css } from "@emotion/react";

export const layout = (isShow) => css`
    @keyframes show {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0%); // 다시 원점 
        }
    }

    @keyframes hide {
        from {
            transform: translateX(0%); // 0에서
        }
        to {
            transform: translateX(100%); // 100%로 이동 
        }
    }
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // isShow가 true 이면 show 애니메이션을 실행 &  false이면 hide 애니메이션 실행
    animation: ${isShow ? "show" : "hide"} 0.5s 1;

`;
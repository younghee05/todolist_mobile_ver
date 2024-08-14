import { css } from "@emotion/react";

export const container = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-top: 45px;
    padding-bottom: 15px;
    height: 100%;
    background-color: #efefef;
    overflow-y: scroll;
    // scrollbar 안보이게 하는 
    &::-webkit-scrollbar { 
        display: none;
    }

`;
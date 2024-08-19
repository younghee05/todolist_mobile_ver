/** @jsxImportSource @emotion/react */
import * as s from "./style";

function confirmButtonTop({ onSubmit, onCancel, disabled }) {
    
    const handelCancelClick = () => {
        onCancel();
    };

    const handelSubmitClick = () => {

        onSubmit();
    };

    return (
        <div css={s.layout}>
            <button onClick={handelCancelClick}>취소</button>
            <button onClick={handelSubmitClick} disabled={disabled} >완료</button>
        </div>
    );
}

export default confirmButtonTop;
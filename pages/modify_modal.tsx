import React from "react";
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";

const ModifyModal = (props) => {
    const closeModal = () => {
        props.setShowModal(false);
    }

    return (
        <div>
            {props.showFlag ? (
                <div className='overlay'>
                    <div className='modalContent'>
                        <p>情報の編集</p>
                        {/* モーダルの中身をかく。*/}
                        <Button onClick={closeModal}>閉じる</Button>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default ModifyModal;
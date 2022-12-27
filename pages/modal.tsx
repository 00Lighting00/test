import React from "react";
import Button from '@material-ui/core/Button';
import Input_info from "./input_info";

const Modal = (props) => {

    const closeModal = () => {
        props.setShowModal(false);
    }
    return (
        <div>
            {props.showFlag ? (
                <div className='overlay'>
                    <div className='modalContent'>
                        <p>新規登録</p>
                        <Input_info />
                        <Button onClick={closeModal}>閉じる</Button>
                    </div>
                </div>
            ) : (
                <div>
                </div>
            )
            }
        </div>
    )
}
export default Modal;
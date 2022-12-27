import React from 'react';
import Button from '@material-ui/core/Button';
import Modify_info from './modify_info';

const ModifyModal = (props) => {
    const closeModal = () => {
        props.setShowModal(false)
    }

    return (
        <div>
            {props.showFlag ? (
                <div className='overlay'>
                    <div className='modalContent'>
                        <p>内容の編集</p>
                        <Modify_info num={props.id} />
                        <Button onClick={closeModal}>閉じる</Button>
                    </div>
                </div>
            ) : (
                <div>
                </div>
            )}
        </div>
    )
}

export default ModifyModal;
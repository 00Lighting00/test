import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Modal from './modal';

const Create_user = () => {
    const [showModal, setShowModal] = useState(false);

    const ShowModal = () => {
        setShowModal(true);
    }

    return (
        <div className='createButton'>
            <Button variant='contained' color='primary' onClick={ShowModal}>+新規作成</Button>
            <Modal showFlag={showModal} setShowModal={setShowModal} />
        </div>
    )

}

export default Create_user;
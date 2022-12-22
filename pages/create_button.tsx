import { useState } from 'react';
import InputModal from './input_modal'
import Button from '@material-ui/core/Button';

const CreateButton: React.FC = () => {
    const [showModal, setShowModal] = useState(false)

    const ShowModal = () => {
        setShowModal(true)
    }

    return (
        <div>
            <div className='createButton'>
                <Button variant='contained' color='primary' onClick={ShowModal}>+新規登録</Button>
            </div>
            <InputModal showFlag={showModal} setShowModal={setShowModal} />
        </div>
    )
}

export default CreateButton;
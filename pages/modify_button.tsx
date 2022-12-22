import { useState } from 'react';
import Button from '@material-ui/core/Button';
import ModifyModal from './modify_modal';

const ModifyButton: React.FC = (props) => {
    const [showModal, setShowModal] = useState(false)

    const ShowModal = () => {
        setShowModal(true)
    }

    return (
        <div>
            <Button variant='contained' color='primary' onClick={ShowModal}>編集する</Button>
            <ModifyModal showFlag={showModal} setShowModal={setShowModal} id={props.num} />
        </div>
    )
}

export default ModifyButton;
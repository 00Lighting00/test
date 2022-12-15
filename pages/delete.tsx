import React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const DeleteButton = (props) => {
    const [users, setUsers] = useState([])

    const deleteUser = (id) => {
        axios.delete('http://demo.jriss.jp:8888/users/' + id)
            .then(responce => {
                console.log(responce)
                setUsers(users.filter(user => user.id !== id))
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            {users.map((user) => (
                // eslint-disable-next-line react/jsx-key
                <Button onClick={() => deleteUser(user.props.id)}>削除する</Button>
            ))}
        </div>
    )
}

export default DeleteButton;
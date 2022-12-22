import React from 'react';
import { useContext } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { ServerData } from './main';

const Delete: React.FC = (props) => {
    const { users, setUsers } = useContext(ServerData)

    const deleteUser = () => {
        axios.delete('http://demo.jriss.jp:8888/users/' + props.id)
            .then(responce => {
                console.log(responce)
                setUsers(users.filter(user => user.id !== props.id))
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <Button onClick={deleteUser} color='primary'>削除する</Button>
        </div>
    )
}

export default Delete;
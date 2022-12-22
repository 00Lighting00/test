import React from 'react';
import axios from 'axios';
import { ServerData } from './main';
import { useContext } from 'react';
import { Button } from '@material-ui/core';

const Put: React.FC = (props) => {
    const { users, setUsers } = useContext(ServerData)

    const put = () => {
        axios.put('http://demo.jriss.jp:8888/users/' + props.id,
            {
                firstname: props.firstname,
                lastname: props.lastname,
                age: props.age
            })
            .then((responce) => {
                setUsers(responce.data)
                window.location.reload()
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <Button variant='contained' color='primary' onClick={put}>更新</Button>
        </div>
    )
}

export default Put;
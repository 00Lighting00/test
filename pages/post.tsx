import React from 'react';
import axios from 'axios';
import { ServerData } from './main';
import { useContext } from 'react';
import { Button } from '@material-ui/core';

const Post: React.FC = (props) => {
    const { users, setUsers } = useContext(ServerData)

    const post = () => { //ここの引数にprops入れたら再定義なるので入力しない
        axios.post('http://demo.jriss.jp:8888/users/', {
            firstname: props.firstname,
            lastname: props.lastname,
            age: props.age
        })
            .then(response => {
                setUsers([...users, response.data])
                window.location.reload()
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Button variant='contained' color='primary' onClick={post}>登録</Button>
        </div>
    )
}
export default Post;
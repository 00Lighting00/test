import { useEffect, useContext } from 'react';
import { ServerData } from './main'
import axios from 'axios';
import Datatable from './datatable';

const Get = () => {
    const { users, setUsers } = useContext(ServerData)
    useEffect(() => {
        axios.get('http://demo.jriss.jp:8888/users/')
            .then(responce => setUsers(responce.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <Datatable inf={users} />
        </div>
    )
}

export default Get;
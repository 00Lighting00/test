import axios from 'axios';
import { Button } from '@mui/material';

const CreateNewUser = (props) => {

    function Post(props) {
        axios.post('http://demo.jriss.jp:8888/users/', {
            firstname: firstname,
            lastname: lastname,
            age: age,
        })
            .then(response => {
                setUsers([...users, response.data])
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div>
            <Button variant='contained' color='primary' onClick={Post}>登録する</Button>
        </div>
    )
}

export default CreateNewUser;
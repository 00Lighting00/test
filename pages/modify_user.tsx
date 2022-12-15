import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ModifyUser = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState('')

    const handleChange_modify_firstname = (first) => {
        setFirstname(first.target.value)
    }

    const handleChange_modify_lastname = (last) => {
        setLastname(last.target.value)
    }

    const handleChange_modify_age = (age) => {
        setAge(age.target.value)
    }

    const [users, setUsers] = useState([])

    const modifyUser = (id) => {
        axios.patch('http://demo.jriss.jp:8888/users/' + id, {
            firstname: firstname,
            lastname: lastname,
            age: age
        })
            .then(responce => {
                let updateUsers = users.map(user => {
                    if (user.id === responce.data.id) {
                        return responce.data
                    } else {
                        return user;
                    }
                })
                setUsers(updateUsers)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div>
                <TextField
                    label="姓(Firstname)"
                    onChange={handleChange_modify_firstname}
                />
            </div>

            <div>
                <TextField
                    label="名(Lastname)"
                    onChange={handleChange_modify_lastname}
                />
            </div>

            <div>
                <TextField
                    label="年齢(Age)"
                    onChange={handleChange_modify_age}
                />
            </div>

            <div>
                <Button color="primary" variant='contained'>変更した内容を更新する</Button>
            </div>
        </div>
    )

}

export default ModifyUser;
import React from 'react';
import { TextField } from '@material-ui/core';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const Input_info = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState('')

    const handleChange_firstname = (first) => {
        setFirstname(first.target.value)
    }

    const handleChange_lastname = (last) => {
        setLastname(last.target.value)
    }

    const handleChange_age = (age) => {
        setAge(age.target.value)
    }

    const [users, setUsers] = useState([])
    const post = () => {
        axios.post('http://demo.jriss.jp:8888/users/', {
            firstname: firstname,
            lastname: lastname,
            age: age,
        })
            .then(response => {
                setUsers([...users, response.data])
                window.location.reload()//ポストできたらリロードして画面の更新
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div>
                <TextField
                    label="姓(Firstname)"
                    value={firstname}
                    onChange={handleChange_firstname}
                />
            </div>

            <div>
                <TextField
                    label="名(Lastname)"
                    value={lastname}
                    onChange={handleChange_lastname}
                />
            </div>

            <div>
                <TextField
                    label="年齢(age)"
                    value={age}
                    onChange={handleChange_age}
                />
            </div>

            <div>
                <Button type='submit' variant='contained' color='primary' onClick={post}>登録する</Button>
            </div>
        </div >
    )
}
export default Input_info;
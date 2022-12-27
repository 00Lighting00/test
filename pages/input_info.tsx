import React from 'react';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import Post from './post';

const InputInfo = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState('')

    const handleChange_firstname = (event1) => {
        setFirstname(event1.target.value)
    }
    const handleChange_lastname = (event2) => {
        setLastname(event2.target.value)
    }
    const handleChange_age = (event3) => {
        setAge(event3.target.value)
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
            <Post firstname={firstname} lastname={lastname} age={age} />
        </div>
    )
}

export default InputInfo;
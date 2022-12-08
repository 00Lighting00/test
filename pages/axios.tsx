import { useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {
    useEffect(() => {
        axios.get('http://demo.jriss.jp:8888/users/')
            .then(responce => console.log(responce))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <p>Axios</p>
        </div>
    )
}

export default Form;
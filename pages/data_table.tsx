import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import { TextField } from '@material-ui/core';

export default function Datatable() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://demo.jriss.jp:8888/users/')
            .then(responce => setUsers(responce.data))
            .catch(error => console.log(error))
    }, [])

    const deleteUser = (id) => {
        axios.delete('http://demo.jriss.jp:8888/users/' + id)
            .then(responce => {
                console.log(responce)
                setUsers(users.filter(user => user.id !== id))
            })
            .catch(error => console.log(error))
    }

    /*const modifyUser = (id) => {
        axios.patch('http://demo.jriss.jp:8888/users/' + id, {
            firstname: 
        })
    }*/

    const [showModal, setShowModal] = useState(false);
    const ShowModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    /*ここから情報の編集 */

    const ModifyUser = (props) => {
        /*axios.get('http://demo.jriss.jp:8888/users/' + id)
            .then(responce => setModify_Firstname(responce.data[id - 1].firstname))
            .then(responce => setModify_Lastname(responce.data[id - 1].lastname))
            .then(responce => setModify_Age(responce.data[id - 1].age))
            .catch(error => console.log(error))*/

        const [modify_firstname, setModify_Firstname] = useState('')
        const [modify_lastname, setModify_Lastname] = useState('')
        const [modify_age, setModify_Age] = useState('')

        const handleChange_modify_firstname = (e_1) => {
            setModify_Firstname(e_1.target.value)
        }

        const handleChange_modify_lastname = (e_2) => {
            setModify_Lastname(e_2.target.value)
        }

        const handleChange_modify_age = (e_3) => {
            setModify_Age(e_3.target.value)
        }

        const modify = (id) => {
            axios.patch('http://demo.jriss.jp:8888/users/' + id, {
                firstname: modify_firstname,
                lastname: modify_lastname,
                age: modify_age
            })
                .then(responce => {
                    let updateUsers = users.map(user => {
                        if (user.id === responce.data.id) {
                            window.location.reload();
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
                {props.showFlag ? (
                    <div className='overlay'>
                        <div className='modalContent'>
                            <p>内容の編集</p>
                            <div>
                                <TextField
                                    label="姓(Firstname)"
                                    value={modify_firstname}
                                    onChange={handleChange_modify_firstname}
                                />
                            </div>

                            <div>
                                <TextField
                                    label="名(Lastname)"
                                    value={modify_lastname}
                                    onChange={handleChange_modify_lastname}
                                />
                            </div>

                            <div>
                                <TextField
                                    label="年齢(Age)"
                                    value={modify_age}
                                    onChange={handleChange_modify_age}
                                />
                            </div>

                            <div>
                                {users.map((user, index) => (
                                    <div key={index}>
                                        <Button variant='contained' color='primary' onClick={() => modify(user.id)}>更新</Button>
                                    </div>
                                ))}
                                <Button color='primary' onClick={closeModal}>閉じる</Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>

                    </div>
                )
                }

            </div>
        )
    }
    /*ここまで情報の編集 */

    return (
        <div>
            <Paper style={{ width: '100%' }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>ID</TableCell>
                                <TableCell align='center'>氏名</TableCell>
                                <TableCell align='center'>年齢</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {users.map((user, index) => (
                                <TableRow key={users.name}>
                                    <TableCell align='center' key={index}>{user.id}</TableCell>
                                    <TableCell align='center' key={index}>{user.firstname}&nbsp;{user.lastname}</TableCell>
                                    <TableCell align='center' key={index}>{user.age}</TableCell>
                                    <span className="edit-delete">
                                        <Button color='primary' variant='contained' onClick={ShowModal}>編集する</Button>
                                        <Button color="primary" onClick={() => { deleteUser(user.id) }}>削除する</Button>
                                    </span>
                                </TableRow>
                            ))}
                            <ModifyUser showFlag={showModal} setShowModal={setShowModal} />
                        </TableBody>

                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}
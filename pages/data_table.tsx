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

export default function Datatable() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://demo.jriss.jp:8888/users/')
            .then(responce => setUsers(responce.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>氏名</TableCell>
                            <TableCell>年齢</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow
                                key={users.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.firstname}&nbsp;{user.lastname}</TableCell>
                                <TableCell>{user.age}</TableCell>
                                <Button color='primary' variant='contained'>編集する</Button>
                                <Button color='primary'>削除する</Button>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    );
}
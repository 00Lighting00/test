import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useContext } from 'react';
import { ServerData } from './main';
import Delete from './delete';
import ModifyButton from './modify_button';

/* 
編集ボタンはいっぱい出てきて欲しいけど更新ボタンは1つが良い
*/

const Datatable: React.FC = () => {
    const { users, setUsers } = useContext(ServerData)

    console.log(typeof (users)); //string

    return (
        <div>
            <p>登録された情報の一覧</p>
            <Paper>
                <TableContainer component={Paper}>
                    <Table>

                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>氏名</TableCell>
                                <TableCell>年齢</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody> { /* mapメソッドはarray型でないと使えないので Object.values(users)でarray型に変える*/}
                            {Object.values(users).map((user, index) => (
                                <TableRow key={user.name}>
                                    <TableCell key={index}>{user.id}</TableCell>
                                    <TableCell key={index}>{user.firstname}&nbsp;{user.lastname}</TableCell>
                                    <TableCell key={index}>{user.age}</TableCell>
                                    <ModifyButton num={user.id} />
                                    <Delete id={user.id} />
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

export default Datatable;
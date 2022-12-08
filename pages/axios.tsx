import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
/*
---memo---
・内容を変更するボタン、変更を入力する欄のhandleChangeの名前が全て同じであるため全てが連動している。
・更新に関してはidでの紐付けができているため、指定した1つのデータのみ更新できる。
    ->現在はstylesで表示、非表示を管理している部分を関数化し、idを渡して結びつけると解決できそう。
    ->ファイル分けしてからの方が作りやすそう？

    テーブルで操作ができるように
    1行に名前、年齢と編集ボタン -> ホップアップで編集できる
    右に削除ボタン

    初めにゲットしたものが表示
    新規作成から作れるように ->更新、削除が一行ずつできる
    muiにデータテーブル
*/

const Form = () => {
    /*ココからデータの取得とブラウザ画面への表示*/
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://demo.jriss.jp:8888/users/')
            .then(responce => setUsers(responce.data))
            .catch(error => console.log(error))
    }, [])
    /* ココまでがデータの取得とブラウザ画面への表示*/

    /* ココから情報の登録*/
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState('')

    const handleChange_firstname = (event_1) => {
        setFirstname(event_1.target.value)
    }

    const handleChange_lastname = (event_2) => {
        setLastname(event_2.target.value)
    }

    const handleChange_age = (event) => {
        setAge(event.target.value)
    }
    const createNewUser = () => {
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
    /*ココまでが情報の登録*/


    /*ココから情報の変更 */

    const [modify_firstname, setModifyFirstname] = useState('')
    const [modify_lastname, setModifyLastname] = useState('')
    const [modify_age, setModifyAge] = useState('')

    const [visible, setVisible] = useState(false);

    const handleChange_modify_firstname = (event_a) => {
        setModifyFirstname(event_a.target.value)

    }

    const handleChange_modify_lastname = (event_b) => {
        setModifyLastname(event_b.target.value)
    }

    const handleChange_modify_age = (event_c) => {
        setModifyAge(event_c.target.value)
    }

    const modifyUser = (id) => {
        axios.patch('http://demo.jriss.jp:8888/users/' + id, {
            firstname: modify_firstname,
            lastname: modify_lastname,
            age: modify_age,
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

    /*ココまでが情報の変更 */


    /*ココから情報の削除*/
    const deleteUser = (id) => {
        axios.delete('http://demo.jriss.jp:8888/users/' + id)
            .then(responce => {
                console.log(responce)
                setUsers(users.filter(user => user.id !== id))
            })
            .catch(error => console.log(error))
    }
    /*ココまでが情報の削除*/

    return (
        <div>
            <p>Axios</p>

            <TextField
                label="姓(Firstname)"
                value={firstname}
                onChange={handleChange_firstname}
            />

            <TextField
                label="名(Lastname)"
                value={lastname}
                onChange={handleChange_lastname}
            />

            <div>
                <TextField
                    label="年齢(Age)"
                    value={age}
                    onChange={handleChange_age}
                />
            </div>

            <Button variant='contained' onClick={createNewUser}>登録する</Button>

            <ul>
                <p>登録された情報の一覧</p>
                {users.map((user, index) => (
                    <li key={index}>{user.firstname}&nbsp;{user.lastname}, {user.age}歳
                        <div
                        ><Button
                            variant='contained'
                            onClick={() => setVisible(!visible)}

                        >{visible ? "閉じる" : "内容を変更する"}
                            </Button>
                            <Button
                                onClick={() => deleteUser(user.id)}>
                                削除する
                            </Button>
                        </div>
                        <div style={{ visibility: visible ? "visible" : "hidden" }}>
                            <p>変更後の内容を入力してください。</p>
                            <TextField
                                label="姓(Firstname)"
                                value={modify_firstname}
                                onChange={handleChange_modify_firstname}
                            />
                            <TextField
                                label="名(Lastname)"
                                value={modify_lastname}
                                onChange={handleChange_modify_lastname}
                            />
                            <TextField
                                label="年齢(Age)"
                                value={modify_age}
                                onChange={handleChange_modify_age}
                            />
                            <Button onClick={() => modifyUser(user.id)}>更新する</Button>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Form;
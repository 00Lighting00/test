import React from 'react';
import { TextField } from '@material-ui/core';
import { useState, useEffect } from 'react';
import Put from './put';

import axios from 'axios';

const Modify_info: React.FC = (props) => {

    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [age, setAge] = useState()

    const handleChange_firstname = (event1) => {
        setFirstname(event1.target.value)
    }
    const handleChange_lastname = (event2) => {
        setLastname(event2.target.value)
    }
    const handleChange_age = (event3) => {
        setAge(event3.target.value)
    }

    useEffect(() => {
        axios.get('http://demo.jriss.jp:8888/users/' + props.num)
            .then(responce => {
                setFirstname(responce.data.firstname)
                setLastname(responce.data.lastname)
                setAge(responce.data.age)
                /*
                配列のインデックスを基準に参照してしまうと、削除された情報がある際に合わなくなってしまう。
                ・別の取得を探す
                ・動作の重さの原因にもなっているので、サーバーから取得するのではなく、別の方法を考える
                等必要である。
                 -IDで情報を参照できるようにする......?
                  -一瞬でできたwwwwwwwwwwwww
                 -配列を参照するのもok. ズレたとしても確実にデータが表示できるような参照方法はなかろうか......?
                  -配列の場合、サーバーから取得したdataの配列と設定されているIDが1だけズレているのでそこを叩けるだろうか......?
                */
            })
            .catch((error) => console.log(error))
    }, []) //useEffectから[]までがないと永遠に実行してしまう。

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
            <Put id={props.num} firstname={firstname} lastname={lastname} age={age} />
        </div>
    )
}

export default Modify_info;
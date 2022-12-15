import axios from 'axios';
import { useEffect } from 'react';

const GetTest = () => {
    useEffect(() => {
        axios.get('http://demo.jriss.jp:8888/users/')
            .then(responce => console.log(responce.data[0].firstname))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            Getのテストだよ
        </div>
    )
}

export default GetTest;

/*
useEffect(() => {
        axios.get('http://demo.jriss.jp:8888/users/')
            .then(responce => console.log(responce.data[0]))
            .catch(error => console.log(error))
    }, [])

    この書き方で配列dataのインデックスに対応する情報のみ受け取ることができる。
    ただし、今回であれば姓、名、年齢、idの3種類

*/

/*
useEffect(() => {
        axios.get('http://demo.jriss.jp:8888/users/')
            .then(responce => console.log(responce.data[0].firstname))
            .catch(error => console.log(error))
    }, [])

    この書き方で特定のものだけ出せる！

*/
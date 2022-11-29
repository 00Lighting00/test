/*
・画像+Login into CyberPortの表示
・email入力欄
・パスワード入力欄
・チェックボックス
・Loginボタン5点をこのファイル(Body.tsx)にまとめる。
以上の
*/

import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import LoginButton from "./LoginButton";

const Body = () => {
    return (
        <div>
            <InputEmail />
            <InputPassword />
            <LoginButton />
        </div>
    )

}

export default Body;
/*
・画像+Login into CyberPortの表示(Image.tsx)
・email入力欄(InputEmail.tsx)
・パスワード入力欄(InputPassWord.tsx)
・チェックボックス(InputCheckbox.tsx)
・LOGINボタン(LoginButton.tsx)
以上の5点をこのファイル(Body.tsx)にまとめる。
*/

import SeeImage from "./Image";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import InputCheckbox from "./InputCheckbox";
import LoginButton from "./LoginButton";

const Body = () => {
    return (
        <div>
            <SeeImage />
            <InputEmail />
            <InputPassword />
            <InputCheckbox />
            <LoginButton />
        </div>
    )
}

export default Body;
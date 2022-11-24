import React from 'react';
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useFormContext, SubmitHandler } from "react-hook-form"; //SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import type { ContactType } from "types/contact";

const Footer = () => {
    const router = useRouter();
    const { handleSubmit } = useFormContext();

    const onSubmit: SubmitHandler<ContactType> = async (data) => {
        console.log(data);
        router.push("/?confirm=1");
    }

    return (
        <div>
            <form className="footer">
                <Button variant="contained" onClick={handleSubmit(onSubmit)}>入力内容を確認</Button>
                { /* variant の箇所では、ボタンの外観を変更することができる。 */}
            </form>
        </div>
    )

}
export default Footer;

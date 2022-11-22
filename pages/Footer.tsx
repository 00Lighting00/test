import React from 'react';
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
            <form>
                <button onClick={handleSubmit(onSubmit)}>入力内容を確認する。</button>
            </form>
        </div>
    )

}
export default Footer;

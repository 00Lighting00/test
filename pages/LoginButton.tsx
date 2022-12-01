/* 
ログインボタンの記述
*/

import React from 'react';
import { useFormContext, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import type { ContactType } from "types/contact";

const LoginButton = () => {
    const { handleSubmit } = useFormContext();

    const onSubmit: SubmitHandler<ContactType> = async (data) => {
        console.log(data);
    }

    return (
        <div>
            <form className='Login'>
                <Button
                    variant="contained"
                    onClick={handleSubmit(onSubmit)}
                    className="Login_button"
                >LOGIN
                </Button>
            </form>
        </div>
    )
}
export default LoginButton;
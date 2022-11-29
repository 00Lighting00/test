/* 
ログインボタンの記述
*/

import React from 'react';
import { useFormContext, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import type { ContactType } from "types/contact";

const LoginButton = () => {
    const { handleSubmit } = useFormContext();

    const onSubmit: SubmitHandler<ContactType> = async (data) => {
        console.log(data);
    }

    return (
        <div>
            <form>
                <Button variant="contained" onClick={handleSubmit(onSubmit)}>LOGIN</Button>
            </form>
        </div>
    )
}
export default LoginButton;
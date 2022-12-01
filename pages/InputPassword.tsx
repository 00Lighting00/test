/* 
パスワード入力欄
*/

import React from 'react';
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const InputPassword = (props) => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();

    const rules = {
        required: "こちらは必須項目です。",
    }

    return (
        <div>
            <form >
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            className="Input_Text"
                            {...field}
                            {...register("password", rules)}
                            margin="normal"
                            error={"password" in errors}
                            type="password"
                            label="Password"
                            helperText={errors.password && errors.password.message}
                        />
                    )}
                />
            </form >
        </div >
    )
}

export default InputPassword;
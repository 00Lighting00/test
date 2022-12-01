/*
email入力欄
*/
import React from 'react';
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const InputEmail = (props) => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();

    const rules = {
        required: "こちらは必須項目です。",
        pattern: { value: /^(?!.*[ぁ-んァ-ヶ亜-熙]).*$/, message: "メールアドレスを正しく入力してください。" }
    }


    return (
        <div>
            <form>
                <Controller
                    name="Email"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            label="Email address"
                            /*margin="normal"*/
                            className="Input_Text"
                            {...field}
                            {...register("email", rules)}
                            error={"email" in errors}
                            placeholder='john@gmail.com'
                            helperText={errors.email && errors.email.message}
                        />)}
                />
                <div>

                </div>
            </form>
        </div>
    )
}

export default InputEmail;
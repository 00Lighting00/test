import React from 'react';
import { useFormContext } from "react-hook-form"; //SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import TextField from '@mui/material/TextField';

const InputName = (props) => {
    const {
        register,
        formState: { errors }
    } = useFormContext();

    const rules = {
        pattern: { value: /^(?!.*\d).*$/i, message: "※漢字、ひらがな、アルファベットで入力してください。" },
        required: "※こちらは入力必須項目です。",
        maxLength: { value: 20, message: "20文字以内で入力してください。" },
    }

    return (
        <div>
            <p className="firstname">{props.Firstname}</p>
            <form className="form-input-name">
                <TextField
                    className="form-name"
                    label="姓*"
                    {...register("firstname", rules)}
                    type="text"
                />
                {errors.firstname && errors.firstname.message}
            </form>

            <p className="lastname">{props.Lastname}</p>
            <form className="form-input-name">
                <TextField
                    className="form-name"
                    label="名*"
                    {...register("lastname", rules)}
                    type="text"
                />
                {errors.lastname && errors.lastname.message}
            </form>
        </div>
    )
}

export default InputName;
import React from 'react';
import { useFormContext } from "react-hook-form"; //SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import TextField from '@mui/material/TextField';

const InputAge = (props) => {
    const {
        register,
        formState: { errors }
    } = useFormContext();

    const rules = {
        pattern: { value: /\d*/ && /^(?!0).*$/ && /^(?!.*[A-Za-z]).*$/, message: "※0から120のうち、適切な整数を入力してください。" },
        required: "※こちらは入力必須項目です。",
        max: { value: 120, message: "1から120のうちの整数を一つ入力してください。" },
        min: { value: 1, message: "※1から120のうちの整数を一つ入力してください。" }
    }

    return (
        <div className="form-input-age">
            <p>{props.Age}</p>
            <TextField
                {...register("age", rules)}
                label="年齢*"
                type="text"
            />
            {errors.age && errors.age.message}
        </div>
    )
}
export default InputAge;
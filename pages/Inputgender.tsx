import React from 'react';
import { useFormContext } from "react-hook-form"; //SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import { useState } from 'react';

const InputGender = (props) => {
    const {
        register,
        formState: { errors }
    } = useFormContext();

    const handleChange = (event) => {
        console.log(event.target.value)
    }
    const rules = {
        required: "※こちらは入力必須項目です。"
    }

    return (
        <div>
            <p>{props.Gender}</p>
            <label>
                <select {...register("gender", rules)} onChange={handleChange}>
                    <option value="">選択......</option>
                    <option value="男性">男性</option>
                    <option value="女性">女性</option>
                    <option value="その他">その他</option>
                </select>
            </label>
            {errors.gender && errors.gender.message}
        </div>
    )
}

export default InputGender;
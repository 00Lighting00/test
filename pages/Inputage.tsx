import React from 'react';
import { useFormContext, SubmitHandler, FormProvider } from "react-hook-form"; //SubmitHandlerは、submitイベントに関する関数の型宣言に使う

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
        <div>
            <p>{props.Age}</p>
            <input
                {...register("age", rules)}
                type="text"
            />
            {errors.age && errors.age.message}
        </div>
    )
}
export default InputAge;
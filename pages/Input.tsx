//入力画面のコンポーネント
import React from 'react';
import { useRouter } from "next/router"; //Next.jsの機能
import { useFormContext, SubmitHandler, FormProvider } from "react-hook-form"; //SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import { ErrorMessage } from "@hookform/error-message"; //エラーメッセージコンポーネント
import { useState } from 'react';
import type { ContactType } from "type/contact";
import GenderSelect from "./Selectbox";



const Contact = () => {
    //ここから名前を入力する箇所のシステムの記述
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useFormContext();

    const onSubmit: SubmitHandler<ContactType> = async (data) => {
        console.log(data);
        router.push('/?confirm=1');
    }

    const rules = {
        pattern: { value: /^(?!.*\d).*$/i, message: "※漢字、ひらがな、アルファベットで入力してください。" }, //現在は数字が入るとOUT
        required: "※こちらは入力必須項目です。",
        maxLength: { value: 20, message: "20文字以内で入力してください。" },
    }/*一箇所の入力項目で複数個のルールを設けたい時にこの書き方が便利。*/

    const rules_age = {
        pattern: { value: /\d*/ && /^(?!0).*$/, message: "※0から120のうち、適切な整数を入力してください。" },
        required: "※こちらは入力必須項目です。",
        max: { value: 120, message: "※0から120の整数を一つ入力してください。" },
        min: { value: 1, message: "※1から120の整数を一つ入力してください。" }
    }
    //ここまでが名前を入力する箇所のシステムの記述



    //ここからはチェックボックスのシステムの記述
    const [checkedValues, setCheckedValues] = useState([]);

    const handleChange_checkbox = (event) => {
        if (checkedValues.includes(event.target.value)) {
            setCheckedValues(
                checkedValues.filter((checkedValues) => checkedValues !== event.target.value)
            )
        } else {
            setCheckedValues([...checkedValues, event.target.value])
            console.log(event.target.value)
        }
    }
    //ここまでがチェックボックスのシステムの記述


    return (
        <div>
            <h1>自己紹介入力フォーム</h1>
            <h3>以下の各項目を入力してください。</h3>
            <h5>*の項目は入力必須項目です。</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                { /* ここから名前を入力する欄のUI */}
                <div className="form-unit">
                    <p className="form-unit-title">姓*</p>
                    <input
                        {...register("firstname", rules)}
                        type="text"
                        className="input-text"
                    />
                    {errors.firstname && errors.firstname.message}
                </div>

                <div className="form-unit">
                    <p className="form-unit-title">名*</p>
                    <input
                        {...register("lastname", rules)}
                        type="text"
                        className="input-text"
                    />
                    {errors.lastname && errors.lastname.message}
                </div>

                <div className="form-unit">
                    <p className="form-unit-title">年齢*</p>
                    <input
                        {...register("age", rules_age)}
                        type="text"
                        className="input-text"
                    />
                    {errors.age && errors.age.message}
                </div>
                { /* ここまでが名前を入力する欄のUI */}


                { /*ここから性別を選択するシステムとそのUI */}
                <GenderSelect />
                { /*ここまでが性別を選択するシステムとそのUI */}


                { /* ここからチェックボックスのUI */}
                <div className="form-unit">
                    <p className="form-unit-title">内容考え中......(複数選択可能)</p>
                    <label>
                        <input
                            {...register("checkedValues")}
                            type="checkbox"
                            value="A"
                            onChange={handleChange_checkbox}
                        />
                        A
                    </label>

                    <label>
                        <input
                            {...register("checkedValues")}
                            type="checkbox"
                            value="B"
                            onChange={handleChange_checkbox}
                        />
                        B
                    </label>

                    <label>
                        <input
                            {...register("checkedValues")}
                            type="checkbox"
                            value="C"
                            onChange={handleChange_checkbox}
                        />
                        C
                    </label>

                    <label>
                        <input
                            {...register("checkedValues")}
                            type="checkbox"
                            value="D"
                            onChange={handleChange_checkbox}
                        />
                        D
                    </label>
                </div>
                { /* ここまでがチェックボックスの UI*/}


                <div className="form-actionArea">
                    <button type="submit" class="form-submitButton">
                        入力内容を確認する。
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Contact;



//http://localhost:3000
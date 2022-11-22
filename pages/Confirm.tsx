//入力確認画面のコンポーネント
import { useRouter } from "next/router";
import { useState } from 'react';
import { useFormContext, SubmitHandler, FormProvider } from "react-hook-form";
import Contact from "./Input";
import type { ContactType } from "types/contact";

const Confirm = () => {
    const router = useRouter();

    /*const {
        handleSubmit,
        getValues,
        formState: { isValid }
    } = useFormContext<ContactType>();*/

    //const { values, hideConfirmation } = props

    const { getValues } = useFormContext<ContactType>();
    const values = getValues();

    const onSubmit: SubmitHandler<ContactType> = async (data) => {
        console.log(data);
        router.push('/');
    }

    /*if (!isValid) {
        router.push('/');
    }*/

    /*const onSubmit: SubmitHandler<ContactType> = async (data) => {
        console.log("入力した内容は正常に送信されました。")
    }*/

    return (
        <div>
            <h1>入力確認画面</h1>
            <form /*onSubmit={handleSubmit(onSubmit)}*/>
                <div className="form-unit">
                    <p className="form-unit-title">氏名</p>
                    <h4>{values.firstname}　{values.lastname}</h4>
                </div>

                <div className="form-unit">
                    <p className="form-unit-title">年齢</p>
                    <h4>{values.age} 歳 </h4>
                </div>

                <div className="form-unit">
                    <p className="form-unit-tittle">性別</p>
                    <h4>{values.gender}</h4>
                </div>

                <div className="form-unit">
                    <p className="form-unit-title">選択した内容</p>
                    <h4> {values.checkedValues} </h4>
                </div>

                <div className="form-actionArea">
                    <div className="form-buttonWrapper">
                        <input
                            type="button"
                            onClick={onSubmit}
                            value="入力確認を閉じる。"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Confirm; 
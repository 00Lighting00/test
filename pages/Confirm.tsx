//入力確認画面のコンポーネント
import { useRouter } from "next/router";
import { useFormContext, SubmitHandler, FormProvider } from "react-hook-form";
import type { ContactType } from "type/contact";

const Confirm = () => {
    const router = useRouter();

    const { handleSubmit,
        getValues,
        formState: { isValid }
    } = useFormContext<ContactType>();

    const values = getValues(); //入力データの取得

    if (!isValid) {
        router.push('/');
    }

    const onSubmit: SubmitHandler<ContactType> = async (data) => {
        console.log("入力した内容は正常に送信されました。")
    }

    return (
        <div>
            <h1>入力確認画面</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-unit">
                    <p className="form-unit-title">氏名</p>
                    <h4>{values.firstname}　{values.lastname}</h4>
                </div>

                <div className="form-unit">
                    <p className="form-unit-title">年齢</p>
                    <h4>{values.age} 歳 </h4>
                </div>

                <div className="form-unit">
                    <p className="form-unit-title">選択した内容</p>
                    <h4>??{values.checkedValues}</h4>
                </div>

                <div className="form-actionArea">
                    <div className="form-buttonWrapper">
                        <button type="submit" className="form-submitButton">
                            送信する
                        </button>
                        <button>
                            <p className="for-backButton">入力内容を修正する</p>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Confirm; 
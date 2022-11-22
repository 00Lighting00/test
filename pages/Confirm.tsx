import { useRouter } from "next/router";
import { useFormContext, SubmitHandler } from "react-hook-form";
import type { ContactType } from "types/contact";

const Confirm = () => {
    const router = useRouter();
    const { getValues } = useFormContext<ContactType>();
    const values = getValues();

    const onSubmit: SubmitHandler<ContactType> = async (data) => {
        console.log(data);
        router.push("/");
    }

    const submit = () => {
        console.log("入力内容は正常に送信されました。")
    }

    return (
        <div>
            <h1>確認画面</h1>
            <form>
                <div>
                    <p>氏名</p>
                    <h4>{values.firstname}　{values.lastname}</h4>
                </div>

                <div>
                    <p>年齢</p>
                    <h4>{values.age} 歳</h4>
                </div>

                <div>
                    <p>性別</p>
                    <h4>{values.gender}</h4>
                </div>

                <div>
                    <p>選択した内容</p>
                    <h4>{values.checkedValues}</h4>
                </div>

                <div>
                    <input
                        type="button"
                        onClick={submit}
                        value="送信"
                    />
                    <input
                        type="button"
                        onClick={onSubmit}
                        value="戻って入力内容を修正する。"
                    />
                </div>
            </form>
        </div>
    )
}
export default Confirm;
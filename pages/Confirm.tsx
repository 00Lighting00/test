import { useRouter } from "next/router";
import { useFormContext, SubmitHandler } from "react-hook-form";
import type { ContactType } from "types/contact";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";



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
            <h1 className="confirm-headline">入力確認画面</h1>
            <form>
                <div>
                    <span className="confirm-label">氏名</span>
                    <b>{values.firstname}　{values.lastname}</b>
                </div>

                <div>
                    <span className="confirm-label">年齢</span>
                    <b>{values.age} 歳</b>
                </div>

                <div>
                    <span className="confirm-label">性別</span>
                    <b>{values.gender}</b>
                </div>

                <div>
                    <span className="confirm-check">選択した内容</span>
                    <b>{values.checkedValues}</b>
                </div>
            </form>

            <a className="SignUp-Button">
                <Button variant="contained" size="large" onClick={submit}>登録する</Button>
            </a>

            <a className="Back-Button">
                <Button variant="outlined" size="large" onClick={onSubmit}>戻って修正する</Button>
            </a>

        </div>
    )
}
export default Confirm;
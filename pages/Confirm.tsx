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
        <div className="confirm">
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
            </form>
            <Button variant="contained" size="large" onClick={submit}>送信</Button>
            <Button variant="contained" size="large" onClick={onSubmit}>戻って修正する</Button>
        </div>
    )
}
export default Confirm;
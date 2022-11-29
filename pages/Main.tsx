/* 
header body footerは最低限ファイル分けする。
・header -> 画面上部のバナー
・body -> 画像、Login into CyberPort、input関連をまとめる。
->コンポーネントは、画像+Login into CyberPort、email、パスワード、チェックボックス、Loginボタンで分ける。これらをbodyで呼び出す。
・footer -> 下のcopyright
以上の3点をこのファイル(Main.tsx)で呼び出して1つのページにする。
*/
import { useForm, FormProvider } from "react-hook-form";
import Body from "./Body";

const Main = () => {

    const methods = useForm({
        mode: "onChange",
        criteriaMode: "all",
    })

    return (

        <div>
            <FormProvider {...methods}>
                <Body />
            </FormProvider>
        </div>
    )

}

export default Main;
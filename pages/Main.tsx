/* 
header body footerは最低限ファイル分けする。
・header -> 画面上部のバナー
・body -> 画像、Login into CyberPort、input関連をまとめる。
->コンポーネントは、画像+Login into CyberPort、email、パスワード、チェックボックス、Loginボタンで分ける。これらをbodyで呼び出す。
・footer -> 下のcopyright
以上の3点をこのファイル(Main.tsx)で呼び出して1つのページにする。
*/
import { useForm, FormProvider } from "react-hook-form";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { CardContent } from "@mui/material";


const Main = () => {

    const methods = useForm({
        mode: "onChange",
        criteriaMode: "all",
    })

    return (

        <div>
            <FormProvider {...methods}>
                <Header />

                <CardContent className="Card">
                    <Body />
                </CardContent>

                <Footer />
            </FormProvider>
        </div>
    )

}

export default Main;
/* 
Header ->上3行
Inputname ->氏名入力欄
Inputagec ->年齢入力欄
Inputgender ->性別選択欄
Iputscheck ->チェックボックス
Footer ->確認画面へ移動できるボタン
Confirm ->確認画面
これらをMainにまとめる。

Inputシリーズに入力された情報をConfirmに流し込み、表示する。
Mainから項目の名前をInputシリーズへ流し込む。

MUI導入後の問題点
・入力確認画面で「戻って修正する」をクリックして入力画面に戻った際にセレクトボックスとチェックボックスで入力した情報が画面から消えている。
 -その状態で何も入力しないで「入力内容を確認する」をクリックすると入力確認画面では情報は表示されるので、値の保持はできている模様。画面に表示させ続けることが必要。
・ボタンの間隔を変えられるようにする。
 -Stackタグを用いたところ思うような挙動にならなかった。
*/
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import Header from "./Header";
import InputName from "./Inputname";
import InputAge from "./Inputage";
import InputGender from "./Inputgender";
import InputCheck from "./Inputcheck";
import Footer from "./Footer";
import Confirm from "./Confirm";

const Main = () => {
  const router = useRouter();

  /*const firstname = "姓*";
  const lastname = "名*"
  const age = "年齢*";
  const gender = "性別*";*/
  const check = "以下より選択してください。(複数選択可)"
  const CheckList = ["A", "B", "C", "D"];

  const isConfirm = router.query.confirm;
  const methods = useForm({
    mode: "onChange",
    criteriaMode: "all",
  })

  return (
    <div className="wrapper">
      <FormProvider {...methods}>
        {!isConfirm ? (
          <>
            <Header />
            <InputName />
            <InputAge />
            <InputGender />

            <p>{check}</p>
            {CheckList.map((CheckItem) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <InputCheck
                  Item={CheckItem}
                />
              )
            })
            }
            <Footer />
          </>
        ) : (
          <>
            <Confirm />
          </>
        )
        }
      </FormProvider>
    </div>
  )
}
export default Main;
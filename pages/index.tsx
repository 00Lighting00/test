/* 
Header ->上3業
Inputname ->氏名入力欄
Inputagec ->年齢入力欄
Inputgender ->性別選択欄
Iputscheck ->チェックボックス
Footer ->確認画面へ移動できるボタン
Confirm ->確認画面
これらをMainにまとめる。

Inputシリーズに入力された情報をConfirmに流し込み、表示する。
Mainから項目の名前をInputシリーズへ流し込む。
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

  const firstname = "姓*";
  const lastname = "名*"
  const age = "年齢*";
  const gender = "性別*";
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

            <InputName
              Firstname={firstname}
              Lastname={lastname}
            />

            <InputAge
              Age={age}
            />

            <InputGender
              Gender={gender}
            />

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
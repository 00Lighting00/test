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
 ・自由にレイアウトできない。
 -ボタンどうしの間隔を変えられるようにする。
 -Stackタグを用いたところ思うような挙動にならなかった。 ->CSSでレイアウト

入力フォームのUIデザインのヒント
・フォームは縦一列に配置する。
・ラベルは入力データの上に配置する。
・ラベルと入力データはグループ化する。ラベルと入力フィードが寄せて配置されているのが良い。違うラベルからフィード、フィードどうしで等間隔に並んでいるのはのは良くない。
・全て大文字での表記は避ける。
・選択肢が5個以下なら全て表示してしまう。
・プレースホルダテキストは、入力時に見えなくなってしまうので必ず枠外にもラベルを表示する。
・チェックボックスは縦に配置することによりチェックしたかどうか分かりやすくなるので縦に表示する。
・CTAはどんなアクションにつながるか、を分かりやすく表示する。ex.)「送信する」では何が送信されるか曖昧であるので「登録する」「Sign Up」等の書き方にする。
・エラー表示はインラインで表示。
・入力途中でバリデーションエラーを表示しない。
・基本的なヘルプテキストは表示する。
・入力フォームの幅は適切にする。
・関連情報ごとにグループ化する。ex.)「基本情報」と「会社情報」
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

  const firstname = "姓【必須】";
  const lastname = "名【必須】";
  const age = "年齢【必須】";
  const gender = "性別【必須】";
  const check = "以下より選択してください。(複数選択可) (任意)"
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

            <p className="form-input-name"></p>
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

            <p className="check">{check}</p>
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
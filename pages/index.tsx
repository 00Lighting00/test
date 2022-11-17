//入力画面と確認画面のコンポーネントをFormProviderでラップする。
import { useRouter } from "next/router";
import Contact from "./Input"; //入力画面のインポート
import Confirm from "./Confirm";//入力確認画面のインポート

import { useForm, FormProvider } from "react-hook-form";

const Main = () => {
  const router = useRouter(); //コンポーネントを切り替えるための値を取得する。
  const isConfirm = router.query.confirm;

  const methods = useForm({
    mode: "onChange",
    criteriaMode: "all"
  })

  return (
    <div className="wrapper">
      <FormProvider {...methods}>
        {!isConfirm ? (
          <>
            <Contact />
          </>
        ) :
          (
            <>
              <Confirm />
            </>
          )
        }
      </FormProvider>
    </div >
  )
}

export default Main; 
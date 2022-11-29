import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
    MenuItem,
    Stack,
    TextField
} from "@mui/material";
import { VFC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IceCreamType {
    label: string;
    value: string;
}

interface Topping {
    label: string;
    value: string;
}

interface FormInput {
    userName: string;
    iceCreamType: IceCreamType;
    email: string;
    emailConfirm: string;
}

const ices = [
    { value: "chocolate", label: "チョコレート" },
    { value: "strawberry", label: "ストロベリー" },
    { value: "vanilla", label: "バニラ" }
];

const ExampleForm: VFC = () => {
    // バリデーションエラーを表示するため、 formState: { errors }を使用する
    const {
        control,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm<FormInput>();

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        console.log("Subtmit");
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2} padding={2}>
                    <Controller
                        name="userName"
                        control={control}
                        defaultValue=""
                        // バリデーションルールを定義
                        rules={{
                            required: "入力してください",
                            maxLength: { value: 20, message: "20文字以内にしてください" }
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="お名前"
                                // バリデーションエラーがあればhelperTextに表示する
                                error={!!errors.userName}
                                helperText={errors.userName && errors.userName.message}
                            />
                        )}
                    />
                    <Controller
                        name="iceCreamType"
                        control={control}
                        defaultValue=""
                        // バリデーションルールを定義
                        rules={{
                            required: "選択してください"
                        }}
                        render={({ field }) => (
                            <TextField
                                label="アイスクリーム"
                                {...field}
                                select
                                // バリデーションエラーがあればhelperTextに表示する
                                error={!!errors.iceCreamType}
                                helperText={errors.iceCreamType && errors.iceCreamType.message}
                            >
                                {ices.map((ice) => (
                                    <MenuItem key={ice.value} value={ice.value}>
                                        {ice.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        // バリデーションルールを定義
                        rules={{
                            required: "入力してください"
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="メールアドレス"
                                // バリデーションエラーがあればhelperTextに表示する
                                error={!!errors.email}
                                helperText={errors.email && errors.email.message}
                            />
                        )}
                    />
                    <Controller
                        name="emailConfirm"
                        control={control}
                        defaultValue=""
                        // バリデーションルールを定義
                        rules={{
                            required: "入力してください",
                            validate: (value) => {
                                if (value !== getValues("email")) {
                                    return "メールアドレスが一致しません";
                                }
                            }
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="メールアドレスの確認"
                                // バリデーションエラーがあればhelperTextに表示する
                                error={!!errors.emailConfirm}
                                helperText={errors.emailConfirm && errors.emailConfirm.message}
                            />
                        )}
                    />
                    <Button type="submit" variant="contained">
                        送信
                    </Button>
                </Stack>
            </form>
        </>
    );
};

export default ExampleForm;

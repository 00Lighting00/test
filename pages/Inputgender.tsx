import React from 'react';
import { useFormContext } from "react-hook-form"; //SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const InputGender = (props) => {

    const [select, setSelect] = React.useState('');

    const {
        register,
        formState: { errors }
    } = useFormContext();

    const handleChange = (event: SelectChangeEvent) => {
        setSelect(event.target.value as string);
        console.log(event.target.value as string)
    }
    const rules = {
        required: "※こちらは入力必須項目です。"
    }

    return (
        <div>
            <p>{props.Gender}</p>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="box_label">性別*</InputLabel>
                <Select
                    labelId="box_label"
                    value={select}
                    {...register("gender", rules)}
                    onChange={handleChange}
                >
                    <MenuItem value="男性">男性</MenuItem>
                    <MenuItem value="女性">女性</MenuItem>
                    <MenuItem value="その他">その他</MenuItem>
                </Select>
            </FormControl>
            {/*<label>*/}
            {/*<select {...register("gender", rules)} onChange={handleChange}>/*}
                    {/*<option value="">選択......</option>
                    <option value="男性">男性</option>
                    <option value="女性">女性</option>
                    <option value="その他">その他</option>*/}

            { /*</select>*/}
            {/*</label>*/}
            {errors.gender && errors.gender.message}
        </div>
    )
}

export default InputGender;
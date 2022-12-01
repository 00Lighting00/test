/*
「ログイン情報を保持する」のチェックボックスの記述
*/

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import Checkbox from "@mui/material/Checkbox"; // or import { Checkbox } from '@mui/material';

const InputCheckbox = () => {
    const { register } = useFormContext();
    const [checkedValues, setCheckedValues] = useState([]);

    const handleChange = (event) => {
        if (checkedValues.includes(event.target.value)) {
            setCheckedValues(
                checkedValues.filter((checkedValues => checkedValues !== event.target.value))
            )
        } else {
            setCheckedValues([...checkedValues, event.target.value])
            console.log(event.target.value)
        }
    }

    return (
        <div>
            <label>
                <Checkbox
                    {...register("checkedValues")}
                    value="ログイン情報を保持する。"
                    onChange={handleChange}
                />
                ログイン情報を保持する
            </label>
        </div>
    )

}

export default InputCheckbox;
import React from 'react';
import { useFormContext } from "react-hook-form"; //SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import { useState } from 'react';

const InputCheck = (props) => {
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
            <form>
                <label>
                    <input
                        {...register("checkedValues")}
                        type="checkbox"
                        value={props.Item}
                        onChange={handleChange}
                    />
                    {props.Item}
                </label>
            </form>
        </div>
    )
}
export default InputCheck;
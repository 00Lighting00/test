import React from 'react';
import { useFormContext } from "react-hook-form"; //SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import { useState } from 'react';
import Checkbox from "@mui/material/Checkbox"; // or import { Checkbox } from '@mui/material';
import { FormGroup, FormControlLabel, } from '@mui/material';
import { Button, Grid, Box } from '@mui/material';

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
        <div className="form-input-check">
            <FormGroup row={true} className="check-item">
                {/*<label>
                    <Checkbox
                        className='check-item'
                        {...register("checkedValues")}
                        value={props.Item}
                        onChange={handleChange}
                    />
                    {props.Item}
    </label>*/}
                <FormControlLabel control={
                    <Checkbox
                        {...register("checkedValues")}
                        value="A"
                        onChange={handleChange}
                    />} label="A" />

                <FormControlLabel control={
                    <Checkbox
                        {...register("checkedValues")}
                        value="B"
                        onChange={handleChange}
                    />} label="B" />

                <FormControlLabel control={
                    <Checkbox
                        {...register("checkedValues")}
                        value="C"
                        onChange={handleChange}
                    />} label="C" />

                <FormControlLabel control={
                    <Checkbox
                        {...register("checkedValues")}
                        value="D"
                        onChange={handleChange}
                    />} label="D" />
            </FormGroup>
        </div >
    )
}
export default InputCheck;
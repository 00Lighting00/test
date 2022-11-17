/*import React from 'react';
import { useState } from 'react';
import { useForm, SubmitHandler, Controller, } from 'react-hook-form';

/*const gender = [
    {
        label: "男性",
        value: "男性",
    },
    {
        label: "女性",
        value: "女性",
    },
    {
        label: "その他",
        value: "その他",
    }
];

class GenderSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "男性" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    //this.state.valueで表示することができる。
    render() {
        return (
            <div className="form-unit">
                <label>
                    <div>性別*</div>
                    <select value={this.state.value} onChange={this.handleChange}>
                        {gender.map((gender) => (
                            // eslint-disable-next-line react/jsx-key
                            <option value={gender.value}>{gender.value}</option>
                        ))}
                    </select>
                </label>
            </div>
        )
    }
}
export default GenderSelect;*/

import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";


const GenderSelect = () => {
    const [gender, setGender] = useState();

    const { register } = useForm({
        defaultValues: {
            gender: "",
        }
    });

    const handleChange = (event) => {
        setGender(event.target.value);
        console.log("event.target.value：" + event.target.value);
        console.log("gender：" + gender)
    }

    return (
        <div>
            <p>性別* </p>
            <label>
                <select {...register("gender")} onChange={handleChange}>
                    <option value="">選択......</option>
                    <option value="男性">男性</option>
                    <option value="女性">女性</option>
                    <option value="その他">その他</option>
                </select>
            </label>
        </div >
    )
}

export default GenderSelect;

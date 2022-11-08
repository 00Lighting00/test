/*import React, { useState } from "react";
import Select from "react-select";

const Selectbox = () => {
    const options = [
        { value: "男性", label: "男性" },
        { value: "女性", label: "女性" },
        { value: "その他", label: "その他" },
    ];
    const customStyles = {
        control: () => ({
            width: 200,
            desplay: "flex"
        })
    }
    return <Select options={options} styles={customStyles} />;
};
export default Selectbox;
*/

//セレクトボックス
import React from 'react';

class GenderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '男性' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('入力内容を確認してください。: ' + this.state.value);
        event.preventDefault();
        console.log(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    性別を選択してください。:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="男性">男性</option>
                        <option value="女性">女性</option>
                        <option value="その他">その他</option>
                    </select>
                </label>
                <input type="submit" value="送信" />
            </form>
        );
    }
}

export default GenderForm;
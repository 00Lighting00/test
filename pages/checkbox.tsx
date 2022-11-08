/*import React, { useState } from "react";

const InputCheckBox = () => {
    const [checkedValues, setCheckedValues] = useState([]);

    const handleChange = (e) => {
        if (checkedValues.includes(e.target.value)) {
            setCheckedValues(
                checkedValues.filter((checkedValue) => checkedValue !== e.target.value)

            );
        } else {
            setCheckedValues([...checkedValues, e.target.value])
            console.log(e.target.value) //すぐに配列の中身が表示されるわけではない。現在の値を直接表示するという一つの手段
        }
    };

    return (
        <div className="App">
            <p>インターンシップの参加理由を以下より選択してください。(複数選択可)</p>
            <h6>現在選択されている項目：<b>{checkedValues.join(", ")}</b></h6>
            <label>
                <input
                    type="checkbox"
                    value="事業内容に興味があったから"
                    onChange={handleChange}
                    checked={checkedValues.includes("事業内容に興味があったから")}
                />
                事業内容に興味があったから
            </label>
            <label>
                <input
                    type="checkbox"
                    value="インターンシップの内容に興味があったから"
                    onChange={handleChange}
                    checked={checkedValues.includes("インターンシップの内容に興味があったから")}
                />
                インターンシップの内容に興味があったから
            </label>
            <label>
                <input
                    type="checkbox"
                    value="開催期間がちょうど良かったから"
                    onChange={handleChange}
                    checked={checkedValues.includes("開催期間がちょうど良かったから")}
                />
                開催期間がちょうど良かったから
            </label>
            <label>
                <input
                    type="checkbox"
                    value="オンラインで受けられるから"
                    onChange={handleChange}
                    checked={checkedValues.includes("オンラインで受けられるから")}
                />
                オンラインで受けられるから
            </label>
        </div>
    );
};

export default function App() {
    return <InputCheckBox />;
}:*/

//チェックボックス
import React from 'react';

class CheckForm extends React.Component {
    InputCheckbox() { //イベントには何も値が入っていない
        const [checkedValues, setCheckedValues] = useState([]);
        const handleChange = (event) => {
            if (checkedValues.includes(event.target.value)) {
                setCheckedValues(
                    checkedValues.filter((checkedValue) => checkedValue !== event.target.value)
                )
            } else {
                setCheckedValues([...checkedValues, event.target.value])
                console.log(event.target.value)
            }
        }
    }

    handleSubmit(event) {
        alert('入力内容を確認してください。：' + event.target.value);
        event.preventDefault();
        console.log(event);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>好きなFPSのゲームを以下より選択してください。(複数選択可)</p>
                <label>
                    <input
                        type='checkbox'
                        value="Call of Duty"
                        onChange={this.handleChange}
                    //checked={checkedValues.includes("Call of Duty")}
                    />
                    Call of Duty
                </label>

                <label>
                    <input
                        type='checkbox'
                        value="Battle Field"
                        onChange={this.handleChange}
                    //checked={checkedValues.includes("Battle Field")}
                    />
                    Battle Field
                </label>

                <input type="submit" value="送信" onClick={this.handleSubmit} />
            </form>
        )
    }
}
export default function App() {
    return <CheckForm />
};
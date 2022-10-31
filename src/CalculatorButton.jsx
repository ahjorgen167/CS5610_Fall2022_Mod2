import React from 'react';

export default function CalculatorButton(props) {

    const text = props.text;
    const onClickFunc = props.onClickFunc;

    return (<button onClick={onClickFunc}>
        {text}
        </button>)

}
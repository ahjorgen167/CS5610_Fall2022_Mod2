import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ChildOfCBAN5 from './ChildOfCBANB5';

export default function CalculatorButtonAndMultiplyByFive(props) {

    //attributeToUpdate = "square1IsBlack"
    //props.favoriteNumber = 7



    const { valueA, valueB, setValueFunc, attributeToUpdate, calculatorValues, setCalculatorValues } = props;
    // const valueA = props.valueA;
    // const valueB = props.valueB;
    // const favoriteNumber = props.favoriteNumber;
    // const leastFavoriteNumber = props.leastFavoriteNumber; //undefined => {}.leastFavoriteNumber

    const [isBlack, setIsBlack] = useState(false);

    function otherOnClick() {
        // const newCalculatorValues = {...calculatorValues};
        // newCalculatorValues[attributeToUpdate] = true;
        // setCalculatorValues(newCalculatorValues)

        const newParentValues = {...calculatorValues};
        if (!isBlack) { 
            newParentValues.counterAmount = newParentValues.counterAmount + 1
        } else {
            newParentValues.counterAmount = newParentValues.counterAmount - 1
        }


        setIsBlack(!isBlack);
        setCalculatorValues(newParentValues)

    }

    function onClickFunc() {
        const newValue = valueA * valueB * 5;
        setValueFunc({value: newValue});

    }

    let backgroundColorClass = "whiteBackground";
    if (isBlack) {
        backgroundColorClass = "blackBackground";
    }
    // const text = props.text;
    
    return (<button onClick={onClickFunc} className={backgroundColorClass}>
        "Multiply All Values Together and then By Five"
        <ChildOfCBAN5 totalSum={valueA} />
        </button>)

}
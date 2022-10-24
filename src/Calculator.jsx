import React from 'react';
import { useState } from 'react';
import Result from './Result';

function Calculator() {
    const [valueA, setValueA] = useState(3)

    // let valueA = 3;
    let valueB = 2;

    function incrementA() {
        console.log("Call incrementA")
        console.log(valueB);
        valueB = valueB + 1;
        console.log(valueB)
        setValueA(valueA + 1);
    }

    return (
        <div>
            {valueA} + {valueB} = <Result result={valueA + valueB} />
            
            <div>
                <button onClick={incrementA}>
                    Increment A
                </button>
            </div>
        </div>
    );

}

export default Calculator;
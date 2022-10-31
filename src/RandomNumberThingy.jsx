import React, { useContext } from 'react';
import { calculatorContext } from './CalculatorProvider';

export default function RandomNumberThingy() {

    const [globalNumber, setGlobalNumber] = useContext(calculatorContext);

    function setRandomNumber() {
        const newNumber = Math.floor(1000*Math.random());
        setGlobalNumber(newNumber);
    }

    return (<div>
        {globalNumber}
        <button onClick={setRandomNumber} >Randomize!</button>
        </div>) 


}


// index.js
//  CalculatorProvider
//     Calculator
//        RandomNumberThingy
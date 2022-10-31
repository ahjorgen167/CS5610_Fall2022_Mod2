import React from 'react';
import { useState } from 'react';
import Result from './Result';

import './Calculator.css';
import CalculatorButton from './CalculatorButton';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import FancyBorder from './FancyBorder';
import RandomNumberThingy from './RandomNumberThingy';


/*
let calcValueA = 0;

function setCalcValueA(arg) {
    calcValueA = arg;
    Calcultor();
}


*/
function Calculator() {

    const [calcValueA, setCalcValueA] = useState(0);
    const [calcValueB, setCalcValueB] = useState(0);
    // const [totalSum, setTotalSum] = useState(0);

    // action === {value: num}
    function trySetFinalSum(state, action) {
        const value = action.value;

        const evaluatedNumber = Number(value);

        if (!evaluatedNumber) {
            return state;
        }
        
        return evaluatedNumber;

    }

    const [totalSumReducer, setTotalSumReducerDispatch] = useReducer(trySetFinalSum,0 )

    // let valueA = 0;
    // let valueB = 0;
    // let sum = calcValueA + calcValueB;

    function didCalcValueAChange() {
        console.log("Calc Value A Changed!");
    }

    useEffect(didCalcValueAChange, []);

    // useEffect(didCalcValueAChange, [calcValueA] )

      
    function onInputA(event) {
        setCalcValueA(Number(event.target.value));
    }

    function onInputB(event) {
        setCalcValueB(Number(event.target.value));
    }

    function onClickPlus() {
        setTotalSumReducerDispatch({value: "banana"});
    }

    function onClickMinus() {
        setTotalSumReducerDispatch({value: calcValueA - calcValueB});
    }

    // onInput = {(e) => inputA(event)}
    return (<div>
        {/* <NavLink
            to="result5"
          >
            See Result 5
          </NavLink> */}
        {/* {calcValueA} + {calcValueB} = /> */}
        <div className="CalcInputRow">
            <div>Input A:</div>
            
            <input onInput={onInputA} value={calcValueA}/>
            <div>Input B:</div>
            <input onInput={onInputB} value={calcValueB}/>
            = <FancyBorder><Result totalSum={totalSumReducer} /></FancyBorder>

        </div>
        <div>
            <CalculatorButton text={"+"} onClickFunc={onClickPlus} />
            <CalculatorButton text={"-"} onClickFunc={onClickMinus} />
        </div>

        <div>
          <RandomNumberThingy />

        </div>
        {/* <button onClick={incrementA}>Increment A</button>
        <button onClick={incrementB}>Increment B</button> */}

    </div>);
  

 
  // const [valueA, setValueA] = useState(3)

    // // let valueA = 3;
    // let valueB = 2;

    // function incrementA() {
    //     console.log("Call incrementA")
    //     console.log(valueB);
    //     valueB = valueB + 1;
    //     console.log(valueB)
    //     setValueA(valueA + 1);
    // }

    // return (
    //     <div>
    //         {valueA} + {valueB} = <Result result={valueA + valueB} />
            
    //         <div>
    //             <button onClick={incrementA}>
    //                 Increment A
    //             </button>
    //         </div>
    //     </div>
    // );

}

export default Calculator;



function iCallAnotherFunction(func, arg) {

    func(arg);

}

function printToConsole(str) {
    console.log(str);
}

iCallAnotherFunction(printToConsole, "I got printed to console!")
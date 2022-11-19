import React, {useContext} from 'react';


import { calculatorContext } from './CalculatorProvider';

export default function ChildOfCBAN5(props) {
    const [globalNumber, setGlobalNumber] = useContext(calculatorContext);

    return (<div>Hello! + {globalNumber}</div>)

}
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const calculatorContext = createContext();


export function CalculatorProvider(props) {

    const [globalNumber, setGlobalNumber] = useState(0);

    return (
        <calculatorContext.Provider value={[globalNumber, setGlobalNumber]}>
            {props.children}
        </calculatorContext.Provider>
    )

}
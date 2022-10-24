import React from 'react';


// object, {}
// it is the set of attributes when
// this component is used
export default function Result(props) {
    //console.log(props)
    const resultValue = 1 + 3;    

    return (
        <b>{props.result}</b>
    )
}
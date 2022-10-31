import React from 'react';

import './Result.css';

export default function Result(props) {

    const totalSum = props.totalSum;
    let className = 'greenClass';
    if (totalSum >= 5) {
        className = 'blueClass'
    }

    if (totalSum % 2 === 0) {
        return (<u className={className}>
                {totalSum}
            </u>)
    } else {
        return (
            <b className={className}>{props.totalSum}</b>
        )
    }
}


// object, {}
// it is the set of attributes when
// this component is used
// export default function Result(props) {
//     //console.log(props)
//     const resultValue = 1 + 3;    

//     return (
//         <b>{props.result}</b>
//     )
// }
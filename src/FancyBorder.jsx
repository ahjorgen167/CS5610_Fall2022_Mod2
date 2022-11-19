import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import './FancyBorder.css';

/*
<FancyBorder>
    <div>My name is Hunter</div>
</FancyBorder>
*/

export default function FancyBorder(props) {

    const [hasBeenClicked, setHasBeenClicked] = useState(false);
    let clickHistory = [];

    function onClickFunc() {
        setHasBeenClicked(true);
    }

    useEffect(() => {console.log("I have been rerender")}, [clickHistory])

    clickHistory.push(Date.now());

    // let hasBeenClicked = false;

    let borderClassName = "FancyBorder";
    if(hasBeenClicked) {
        borderClassName = "ThickerFancyBorder";
    }

    return (
        <div className={borderClassName} onClick={onClickFunc}>
            {props.children}
        </div>
    )
}
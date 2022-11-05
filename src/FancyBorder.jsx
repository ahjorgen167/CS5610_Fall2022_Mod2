import React from 'react'
import { useState } from 'react';

import './FancyBorder.css';

/*
<FancyBorder>
    <div>My name is Hunter</div>
</FancyBorder>
*/

export default function FancyBorder(props) {

    const [hasBeenClicked, setHasBeenClicked] = useState(false);

    function onClickFunc() {
        setHasBeenClicked(true);
    }

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
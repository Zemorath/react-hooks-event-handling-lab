// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe () {
    function blurChange(event) {
        console.log('Hey! Eyes on me!')
    }

    function focusChange(event) {
        console.log('Good!')
    }

    return (
        <button onBlur={blurChange} onFocus={focusChange}>Eyes on me</button>
    )
}

export default EyesOnMe;
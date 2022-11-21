import React from "react";


function Time () {

    const date = new date()
    const hours = date.getHours() % 12

    let timeOfDay

    if (hours>12) {timeOfDay="morning"}
    else if(hours>= 12 && hours<17) {timeOfDay="afternoon"}
    else {timeOfDay="night"}

    return( 

        <h1>Good {timeOfDay}</h1>

    )
}
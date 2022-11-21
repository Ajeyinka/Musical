import React from "react";

function Track(props) {
    return (   
    <div>
        <img src={props.image} className="newrel-image"/>
        <p className="new-p">{props.record}</p>
        <p className="new-2">{props.singer}</p>

    </div>

    )
}

export default Track

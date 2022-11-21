
import React from "react";
import Track from "./Track";
import TrackData from "./TrackData";

function NewRelease () {

    const TrackElement= TrackData.map( track => {
        return <      Track image={track.image}
                            record={track.record}
                            singer={track.singer}
                      
                       />
       })
    return(
        <div className="newrealease">
            <h3>New releases.</h3>
            <div className="newrealease-flex">
              {TrackElement}

            </div>
            
        </div>
    )
}

export default NewRelease
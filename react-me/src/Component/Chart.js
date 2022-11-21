import React from "react";
import Card from "./Card";
import CardsData from "./CardsData";

function Chart() {
     const CardElements= CardsData.map( card => {
      return < Card img={card.img}
                    trackname={card.trackname}
                    artist={card.artist}
                    time={card.time} />
     })
    return (
        <div>
            <h3>Top charts</h3>
            <div className="chat-container">
              
               {CardElements}
             </div>
            
          </div>
    )
}

export default Chart

 


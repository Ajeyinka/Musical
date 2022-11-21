import React from "react";


function Card (props) {
  
  
  const [like, setLike]= React.useState(false)

  let likeIcon = like? "https://i.postimg.cc/LXd0mSpc/Group-13-1.png" : "https://i.postimg.cc/4dz2d04m/Group-13.png" 
  
  
  function favorite() {
    setLike(prevState=>!prevState)
  }





    return (
        <div>
            <div className="chart">
              <div className="info-chart"><img src={props.img} alt="record" className="record"/>
                   <div>
                     <p className="track-title">{props.trackname}</p>
                     <p className="artist">{props.artist}</p>
                     <p className="time">{props.time}</p>
                   </div>
              </div>
              <div className="like" onClick={favorite}>
                <img src={`${likeIcon}`} className="heart"/>
              </div>
            </div>
            
        </div>
    )
}

export default Card




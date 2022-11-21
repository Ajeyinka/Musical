import React from "react";



function MusicPlayer () {
    return(
        <div className="music-player">
            <div className="player-details">
                <img src="https://i.postimg.cc/RFCD9mkD/Rectangle-22.png"/>
                <div>
                    <p className="player-title">Seasons in</p>
                    <p className="player-name">James</p>
                </div>

            </div>
            <div className="controler">
               <div className="control">
                 <button class="shuffle"><img src="https://i.postimg.cc/rwzGstDc/shuffle.png"/></button>
                 <button><img src="https://i.postimg.cc/pXsYPBXq/previous.png"/></button>
                 <button><img src="https://i.postimg.cc/HWr8t4t7/Frame-7.png" id="play"/></button>
                 <button><img src="https://i.postimg.cc/DyvPVNFS/next.png"/></button>
                 <button><img src="https://i.postimg.cc/kgZQbXSS/repeate-one.png"/></button>
                 </div>
                 
                 
            
               <div>
                    
             
                    <input type="range" id="play-slider" className="play-slider" min="0" max="100" oninput="rangevalue.value=value"/>
                
            
               </div>
               
               <div>

               </div>
            </div>
            <div className="volume">
                <button><img src="https://i.postimg.cc/SxHgy7G0/volume-high.png"/></button>
                
                <input type="range" id="volume-slider" min="0" max="100" oninput="rangevalue.value=value"></input>
            </div>
        </div>
    )
}

/*const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

numberInput.addEventListener('input', handleInputChange)*/


export default MusicPlayer
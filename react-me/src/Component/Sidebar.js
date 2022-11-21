import React from "react"


function Sidebar() {

    
    return(
        <>
            
            <div className="side-bar">
                <img src="https://i.postimg.cc/wTLWcQtx/logo-1.png" className="logo"/>
                <nav>
                <ul className="app-nav"> 
                  <li><img src="https://i.postimg.cc/GmnFL0md/Home.png" className="app-img"/></li>
                  <li><img src="https://i.postimg.cc/7ZGjRBqF/playlist.png" className="app-img"/></li>
                  <li><img src="https://i.postimg.cc/PrqgWX9r/radio.png" className="app-img"/></li>
                  <li><img src="https://i.postimg.cc/3JbPnMQj/videos.png" className="app-img"/></li>
                </ul>
                <ul className="profile"> 
                  <li><img src="https://i.postimg.cc/RCnByVGs/profile.png" className="profile-img"/></li>
                  <li><img src="https://i.postimg.cc/C5DpqmzT/Logout.png" className="profile-img"/></li>
                  
                </ul>
                </nav>
            </div>
        </>

    )
}
 export default Sidebar


import React from "react"
import "./index.css"
import ReactDom from "react-dom/client"
import Sidebar from "./Component/Sidebar"
import Search from "./Component/Search"
import MainComponent from "./Component/MainComponent"
import NewRelease from "./Component/NewRelease"
import MusicPlayer from "./Component/MusicPlayer"






function App () {
    return(
        <div className="body">
            <Sidebar />
            <div>
                <Search />
                <MainComponent />
                <NewRelease /> 
            </div>
            <MusicPlayer />
            
                 
    
        </div>
    )
}
        


const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<App />)



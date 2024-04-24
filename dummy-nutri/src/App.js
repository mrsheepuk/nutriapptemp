import logo from "./logo.svg";
import CookieTwoToneIcon from "@mui/icons-material/CookieTwoTone";
import Draggable from "react-draggable";
import "./App.css";
import { useState } from "react";

function App() {
  const[position,setposition]=useState(null)

function positionHandler(e,d){
setposition({x:d.x,y:d.y})  
}
  return (
    <div className="App">
      <header className="App-header">
        <div style={{width:'100px', height:"100px", backgroundColor:"pink" ,position:'absolute' ,top:'10px',left:'10px'}}></div>
        <span style={{width:'100px', height:"100px", backgroundColor:"green",position:'absolute' ,top:'10px',left:'110px'}}></span>
        <Draggable position={position} onStop={positionHandler}>
            <CookieTwoToneIcon style={{ fontSize: "72px" }} />
          </Draggable>
      </header>
    </div>
  );
}

export default App;


/*onStart: DraggableEventHandler,

// Called while dragging.
onDrag: DraggableEventHandler,

// Called when dragging stops.
onStop: DraggableEventHandler,
*/ 

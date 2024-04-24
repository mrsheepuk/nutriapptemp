import logo from "./logo.svg";
import CookieTwoToneIcon from "@mui/icons-material/CookieTwoTone";
import Draggable from "react-draggable";
import "./App.css";
import { useState } from "react";

function App() {
  const[position,setposition]=useState(null)

function positionHandler(e,d){
  console.log(d)
  // if wwe are not happy, dont set the positiom
  if(d.x>=10&&d.x<=210&&d.y>=10&&d.y<=110)
  {setposition({x:d.x,y:d.y})}
//setposition({x:d.x,y:d.y})  
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

import React from "react"
import ContactCard from "./ContactCard"
function handleClick(){
  console.log("Clicked Here...")
}

function App(){
    return (
  
<div>
<img onMouseOver={()=>console.log("hovered")}src="https://www.fillmurray.com/200/100"/>
<br></br>
<button onClick={handleClick}>Click me </button>

  </div>



    )
}

export default App

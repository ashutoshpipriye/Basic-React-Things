
import React from 'react'
import ReactDom from 'react-dom'
function MyInfo(){
  return(
    <div>
    <h1>Ashutosh</h1>
    <p>Learning a react</p>
    <ul>
    <li>Skills</li>
    <li>Hobbies</li>
	<li>Goals</li>
    </ul>
    
    </div>
  )
}
ReactDom.render(<MyInfo/>,document.getElementById("root"))

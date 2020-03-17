import React from "react"

function Conditional(props) {
   return (
     props.isLoading===true? <h1>Hello...</h1>:<h1>Hii...</h1>
   )
}

export default Conditional

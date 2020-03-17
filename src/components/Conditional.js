import React from 'react'

function Conditional(props){
    // if(props.isLoading===true){
    //     return(
    //         <h1>Loading...</h1>
    //     )
    // }else{
    //     return(
    //         <h1>Check your intrenet connectivity...</h1>
    //     )
    // } 
    return(
        props.isLoading===true ?  <h1>Loading...</h1> : <h1>Check your intrenet connectivity...</h1>
    )
}

export default Conditional
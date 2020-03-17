import React from 'react'

// function Greet(){
//     return <h1>Hello Ashish Rana</h1> 
// }
const Greet = props => {

    const {name, surName}=props

    console.log(props)
    return (
        <div>
            <h1>Hello {name} {surName}</h1>
            {props.children}
        </div>
        
    )
}
// export const Greet = ()=><h1>Hello Ashutosh</h1>
export default Greet 
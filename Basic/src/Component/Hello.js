import React from 'react'

const Hello = () =>{
    // This is using JSX
    // return(
    //     <div>
    //         <h1>Hello Ashutosh</h1>
    //     </div>
    // )

    //This is using without JSX
    return React.createElement(
        'div',
        {id : 'hello', className: 'dummyClass'},
        React.createElement('h1',null,'Hello to everyone'))
}

export default Hello
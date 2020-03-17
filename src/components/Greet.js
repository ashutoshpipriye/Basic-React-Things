import React, { Component } from 'react'
import Conditional from './Conditional'

class Greet extends Component {

    constructor() {
        super()
        this.state = {
            // isLoggedIn: true

            // isLoading: true

            unreadMessages: [
                "Call me",
                "Send me docs",
                "I want to do changes in the block"
            ]
        }
    }

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({
    //             isLoading: false
    //         })
    //     }, 1500)
    // }

    render() {
        // let wordDisplay
        // if(this.state.isLoggedIn){
        //     wordDisplay= "in"
        // }else{
        //     wordDisplay="out"
        // }
        return (
        // <h1>You are logged {wordDisplay}</h1>
        // <Conditional isLoading={this.state.isLoading}/>
        <div>
            <h1>You have {this.state.unreadMessages.length} unread messages</h1>
        </div>
        )
    }
}

export default Greet
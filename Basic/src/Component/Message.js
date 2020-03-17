import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome to React community'
        }
    }

    changeMessagenext() {
        this.setState({
            message: 'Thank you'
        })
    }

    changeMessagepre() {
        this.setState({
            message: 'Welcome to react community'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessagenext()}>Next</button><br />
                <button onClick={() => this.changeMessagepre()}>Previous</button>
            </div>
        )
    }
}

export default Message
import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increament() {

        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('Callback value', this.state.count)
        }
        )

        // this.setState((prevState,props) => ({
        //     count: prevState.count + 1
        // }))

        console.log(this.state.count)

    }

    increamentFive() {
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
    }

    decreament() {
        this.setState(prevState => ({
            count: prevState.count - 1
        }))
        // console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <div><h1>Count :{this.state.count}</h1></div>
                <button onClick={() => this.increament()}>Increament</button><br />
                <button onClick={() => this.decreament()}>Decreament</button>
            </div>
        )
    }
}

export default Counter
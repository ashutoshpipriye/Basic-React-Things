import React, { Component } from 'react'

class Fetching_data_frm_API extends Component {
    constructor() {
        super()
        this.state = {
            character: {}
        }  
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
            .then(Response => Response.json())
            .then(data =>
                this.setState({
                    loading: false,
                    character: data
                })
            )
    }

    render() {
        const text = this.state.loading ? "Loading..." : "Name: "+this.state.character.name+" Height:"+this.state.character.height
        return (
            <div>
               <p>{text}</p>
            </div>
        )
    }
}

export default Fetching_data_frm_API
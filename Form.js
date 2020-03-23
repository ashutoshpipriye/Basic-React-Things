import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstname: "",
            lastname: "",
            isFriendly: true,
            isFriendly1: false,
            isFriendly2: true,
            gender: "",
            favcolor: ""
        }
        this.handelChange = this.handelChange.bind(this)
        this.handelCheckbox = this.handelCheckbox.bind(this)
    }

    handelChange(event) {
        const { name, value } = event.target
        this.setState({
            // firstname: event.target.value
            // [event.target.name]: event.target.value
            [name]: value
        })
    }

    handelCheckbox(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handelSubmit}>
                    <input
                        type="text"
                        name="firstname"
                        value={this.state.firstname}
                        placeholder="Firstname"
                        onChange={this.handelChange}
                    />
                    <br />
                    <input
                        type="text"
                        name="lastname"
                        value={this.state.lastname}
                        placeholder="Lastname"
                        onChange={this.handelChange}
                    />
                    <h1>{this.state.firstname} {this.state.lastname}</h1>

                    <textarea
                        value={"Some default value"}
                        onChange={this.handelChange}
                    />
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isFriendly"
                            checked={this.state.isFriendly}
                            onChange={this.handelCheckbox}
                        />Raect js
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isFriendly1"
                            checked={this.state.isFriendly1}
                            onChange={this.handelCheckbox}
                        />Raect Native
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isFriendly2"
                            checked={this.state.isFriendly2}
                            onChange={this.handelCheckbox}
                        />Javascript
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={this.state.gender === "Male"}
                            onChange={this.handelCheckbox}
                        />Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={this.state.gender === "Female"}
                            onChange={this.handelCheckbox}
                        />Female
                    </label>
                    <br />
                    <label>Favorite color : </label>
                    <select
                        value={this.state.favcolor}
                        onChange={this.handelCheckbox}
                        name="favcolor"
                    >
                        <option value="________">Select your color </option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="black">Black</option>
                    </select>
                    <h1>You are {this.state.gender}</h1>
                    <h1>Your favorite color is {this.state.favcolor}</h1>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
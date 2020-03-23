import React, { Component } from 'react'

class Reg extends Component {

    constructor() {
        super()
        this.state = {
            firstname: "",
            lastname: "",
            age: "",
            dob: "",
            gender: "",
            course: "",
            isReactjs: false,
            isReactNative: false,
            isHtml: false,
            isPython: false

        }
        this.handelChange = this.handelChange.bind(this)
    }

    handelChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
        this.setState({
            [name]: checked
        }) : 
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <main>
                <form>
                    <table>
                        <tr>
                            <td>First Name : </td>
                            <td>
                                <input
                                    placeholder="Enter first name"
                                    type="text"
                                    name="firstname"
                                    value={this.state.firstname}
                                    onChange={this.handelChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Last Name : </td>
                            <td>
                                <input
                                    placeholder="Enter last name"
                                    type="text"
                                    name="lastname"
                                    value={this.state.lastname}
                                    onChange={this.handelChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Age : </td>
                            <td>
                                <input
                                    placeholder="Enter age"
                                    type="text"
                                    name="age"
                                    value={this.state.age}
                                    onChange={this.handelChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Date of birth : </td>
                            <td>
                                <input
                                    name="dob"
                                    type="date"
                                    value={this.state.dob}
                                    onChange={this.handelChange}
                                    placeholder="DD/MM/YYYY"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Gender : </td>
                            <td>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={this.state.gender === "Male"}
                                    onChange={this.handelChange}
                                /> Male
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={this.state.gender === "Female"}
                                    onChange={this.handelChange}
                                /> Female
                            </td>
                        </tr>
                        <tr>
                            <td>Select Your Course : </td>
                            <td>
                                <select
                                    name="course"
                                    value={this.state.course}
                                    onChange={this.handelChange}
                                >
                                    <option value=""> Select your Course </option>
                                    <option value="B-Tech">B-TECH</option>
                                    <option value="BCA">BCA</option>
                                    <option value="M-Tech">M-TECH</option>
                                    <option value="MCA">MCA</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Select Your Subject : </td>
                            <td>
                                <input
                                    name="isReactjs"
                                    onChange={this.handelChange}
                                    checked={this.state.isReactjs}
                                    type="checkbox"
                                />React js
                                <input
                                    name="isReactNative"
                                    onChange={this.handelChange}
                                    checked={this.state.isReactNative}
                                    type="checkbox"
                                />React
                                <input
                                    name="isHtml"
                                    onChange={this.handelChange}
                                    checked={this.state.isHtml}
                                    type="checkbox"
                                />HTML
                                <input
                                    name="isPython"
                                    onChange={this.handelChange}
                                    checked={this.state.isPython}
                                    type="checkbox"
                                />Python
                            </td>
                        </tr>
                        <br />
                        <tr>
                            <td></td>
                            <td><button>Submit</button></td>
                        </tr>
                    </table>
                </form>
                <h1>Check Information is write or wrong</h1>
                <h3>Name : {this.state.firstname} {this.state.lastname}</h3>
                <h3>Age : {this.state.age}</h3>
                <h3>Date of birth : {this.state.dob}</h3>
                <h3>You are {this.state.gender}</h3>
                <h3>Your selected course {this.state.course}</h3>
                <h3>Your subjects </h3>
                <p>Reactjs {this.state.isReactjs ? "Yes" : "No"}</p>
                <p>React Native {this.state.isReactNative ? "Yes" : "No"}</p>
                <p>Html {this.state.isHtml ? "Yes" : "No"}</p>
                <p>Python {this.state.isPython ? "Yes" : "No"}</p>
            </main>
        )
    }
}

export default Reg
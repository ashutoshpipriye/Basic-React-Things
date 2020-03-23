import React, { Component } from 'react'
import FormComponent from './FormComponent'

class FormContainer extends Component {
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
            <FormComponent
                handelChange={this.handelChange}
                data={this.state} />
        )
    }
}

export default FormContainer
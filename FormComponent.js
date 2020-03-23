import React from 'react'

function FormComponent(props) {
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
                                value={props.data.firstname}
                                onChange={props.handelChange}
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
                                value={props.data.lastname}
                                onChange={props.handelChange}
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
                                value={props.data.age}
                                onChange={props.handelChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Date of birth : </td>
                        <td>
                            <input
                                name="dob"
                                type="date"
                                value={props.data.dob}
                                onChange={props.handelChange}
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
                                checked={props.data.gender === "Male"}
                                onChange={props.handelChange}
                            /> Male
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={props.data.gender === "Female"}
                                onChange={props.handelChange}
                            /> Female
                        </td>
                    </tr>
                    <tr>
                        <td>Select Your Course : </td>
                        <td>
                            <select
                                name="course"
                                value={props.data.course}
                                onChange={props.handelChange}
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
                                onChange={props.handelChange}
                                checked={props.data.isReactjs}
                                type="checkbox"
                            />React js
                            <input
                                name="isReactNative"
                                onChange={props.handelChange}
                                checked={props.data.isReactNative}
                                type="checkbox"
                            />React
                            <input
                                name="isHtml"
                                onChange={props.handelChange}
                                checked={props.data.isHtml}
                                type="checkbox"
                            />HTML
                            <input
                                name="isPython"
                                onChange={props.handelChange}
                                checked={props.data.isPython}
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
                <h1>Check Information is write or wrong</h1>
                <p>Name : {props.data.firstname} {props.data.lastname}</p>
                <p>Age : {props.data.age}</p>
                <p>Date of birth : {props.data.dob}</p>
                <p>You are {props.data.gender}</p>
                <p>Your selected course {props.data.course}</p>
                <h3>Your subjects </h3>
                <p>Reactjs {props.data.isReactjs ? "Yes" : "No"}</p>
                <p>React Native {props.data.isReactNative ? "Yes" : "No"}</p>
                <p>Html {props.data.isHtml ? "Yes" : "No"}</p>
                <p>Python {props.data.isPython ? "Yes" : "No"}</p>
            </form>
        </main>
    )
}

export default FormComponent
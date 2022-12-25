import React, {useState} from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const errorStyle = {
        color: "red"
    }
    const divStyle = {
        // width: "45%",
        marginLeft: "27.5%",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center"
    }

    return (
        <div>
            <form onSubmit={(e) => {e.preventDefault()}}>
                <div style={divStyle}>
                    <table>
                        <tr>
                            <td>First Name</td>
                            <td><input type="text" onChange={(e) => setFirstName(e.target.value)}/></td>
                            <td style={errorStyle}>
                                {
                                firstName.length < 2 && firstName.length > 0?
                                "First name must be at least 2 characters.":
                                ""
                                }
                            </td>
                        </tr>
                    </table>
                </div>
                <div style={divStyle}>
                    <table>
                        <tr>
                            <td>Last Name</td>
                            <td><input type="text" onChange={(e) => setLastName(e.target.value)}/></td>
                            <td style={errorStyle}>
                                {
                                lastName.length < 2 && lastName.length > 0?
                                "Last name must be at least 2 characters.":
                                ""
                                }
                            </td>
                        </tr>
                    </table>
                </div>
                <div style={divStyle}>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td><input type="text" onChange={(e) => setEmail(e.target.value)}/></td>
                            <td style={errorStyle}>
                                {
                                email.length < 5 && email.length > 0?
                                "Email should be at least 5 characters.":
                                ""
                                }
                            </td>
                        </tr>
                    </table>
                </div>
                <div style={divStyle}>
                    <table>
                        <tr>
                            <td>Password</td>
                            <td><input type="password" onChange={(e) => setPassword(e.target.value)}/></td>
                            <td style={errorStyle}>
                                {
                                password.length < 8 && password.length > 0?
                                "Password must be at least 8 characters.":
                                ""
                                }
                            </td>
                        </tr>
                    </table>
                </div>
                <div style={divStyle}>
                    <table>
                        <tr>
                            <td>Confirm Password</td>
                            <td><input type="password" onChange={(e) => setConfirmPassword(e.target.value)}/></td>
                            <td style={errorStyle}>
                                {
                                password === confirmPassword?
                                "":
                                "Passwords must match"
                                }
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
            <br></br>
            <hr></hr>
            <br></br>
            <p>Your form data</p>
            <div style={divStyle}>
                <table>
                    <tr>
                        <td>First Name</td>
                        <td>{firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{lastName}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>{password}</td>
                    </tr>
                    <tr>
                        <td>Confirm Password</td>
                        <td>{confirmPassword}</td>
                    </tr>
                </table>
            </div>
        </div>
  )
}

export default Form

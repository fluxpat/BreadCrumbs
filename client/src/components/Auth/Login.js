import React, { useState } from "react";
import { Link } from "react-router-dom"
import { login } from "../../services/auth-services"

const Login = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let handleFormSubmit = (event) => {
        event.preventDefault();
        // const username = this.state.username;
        // const password = this.state.password;

        login(username, password)
            .then(response => {
                console.log("This is the login response: ", response)
                setUsername("")
                setPassword("")
                props.setUser(response)
                // this.props.getUser(response)
            })
            .catch(error => console.log(error))

    }

    return (
        <div className="login">
            <p>Don't have an account?</p>
            <Link to='/signup'>Click here to signup</Link>
            <form onSubmit={handleFormSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />

                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
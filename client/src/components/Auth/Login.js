import React, { useState } from "react";
import { Link } from "react-router-dom"
import { login } from "../../services/auth-services"
import './Auth.css'

const Login = (props) => {

    console.log("PAVLINA WAS ASKING: ", props.setUser)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

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

                if (response.message) {
                    setError(response.message)
                }
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="Auth">
            <h1>Login</h1>
            <p>Don't have an account?</p>
            <Link to='/signup'>Click here to signup</Link>
            <form className="auth-form" onSubmit={handleFormSubmit}>
                <div className="credentials">
                    <label>Username: </label>
                    <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="credentials">
                    <label>Password: </label>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <input className="button" type="submit" value="Login" />
            </form>
            {error ? (
                <p className="error">{error}</p>
            ) : (<></>)}
        </div>
    )
}

export default Login
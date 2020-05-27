import React, { useState } from "react";
import { Link } from "react-router-dom"
import { signup } from "../../services/auth-services"
import './Auth.css'

const Signup = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    let handleFormSubmit = (event) => {
        event.preventDefault();
        // const username = username;
        // const password = password;

        signup(username, password)
            .then(response => {
                setUsername("")
                setPassword("")
                props.setUser(response)

                if (response.message) {
                    setError(response.message)
                } else {
                    props.history.push('/')
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="Auth">
            <p>Already have an account?</p>
            <Link to='/'>Click here to login</Link>
            <form className="auth-form" onSubmit={handleFormSubmit}>
                <div className="username">
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="password">
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <input type="submit" value="Signup" />
            </form>
            {error ? (
                <p>{error}</p>
            ) : (<></>)}
        </div>
    )
}

export default Signup
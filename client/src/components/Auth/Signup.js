import React, { useState } from "react";
import { Link } from "react-router-dom"
import { signup } from "../../services/auth-services"

const Signup = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let handleFormSubmit = (event) => {
        event.preventDefault();
        // const username = username;
        // const password = password;

        signup(username, password)
            .then(response => {
                setUsername("")
                setPassword("")
                props.setUser(response)
                props.history.push('/')
                // this.props.getUser(response)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="signup">
            <p>Already have an account?</p>
            <Link to='/'>Click here to login</Link>
            <form onSubmit={handleFormSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />

                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />

                <input type="submit" value="Signup" />
            </form>
        </div>
    )
}

export default Signup
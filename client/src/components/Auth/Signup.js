import React, { useState } from "react";
import { signup } from "../../services/auth-services"

const Signup = () => {

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
                // this.props.getUser(response)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="signup">
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
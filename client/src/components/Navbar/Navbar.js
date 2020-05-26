import React from 'react';
import { logout } from "../../services/auth-services"

const Navbar = (props) => {

    let handleClick = () => {
        logout();
        props.setUser({ message: 'Not currently logged in' })
    }

    return (
        <div className="Navbar">
            <div className="logo">
                <h2>BreadCrumbs</h2>
            </div>
            <div className="navButtons">
                <button>My Crumbs</button>
                <button>New Crumb</button>
                <button onClick={handleClick}>Logout</button>
            </div>
        </div>
    )

}

export default Navbar
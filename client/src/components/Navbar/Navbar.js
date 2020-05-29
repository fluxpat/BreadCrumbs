import React from 'react';
// import { Link } from 'react-router-dom'
import { logout } from "../../services/auth-services"
import './Navbar.css'

const Navbar = (props) => {

    let handleClick = () => {
        logout();
        props.setUser({ message: 'Not currently logged in' })
    }

    return (
        <div className="Navbar">
            <div className="nav-content">
                <h2 className="nav-logo">BreadCrumbs</h2>
                <div className="nav-buttons">
                    <img src="./home.png" alt="home" title="Home" className="home-icon" />
                    <img src="./user.png" alt="user profile" title="Profile" className="profile-icon" />
                    <img src="./logout.png" alt="logout" className="logout-icon" title="Logout" onClick={handleClick} />
                    <img src="./donut.png" alt="new post" className="new-crumb" title="New Post" />
                </div>
            </div>
        </div>
    )

}

export default Navbar
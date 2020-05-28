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
                    <img src="./home.png" alt="home button" className="home-icon" />
                    <img src="./user.png" alt="button to navigate to user profile" className="profile-icon" />
                    <img src="./logout.png" alt="logout button" className="logout-icon" onClick={handleClick} />
                    <img src="./donut.png" alt="button for adding a new post" className="new-crumb" />
                </div>
            </div>
        </div>
    )

}

export default Navbar
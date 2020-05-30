import React from 'react';
// import { Link } from 'react-router-dom'
import { logout } from "../../services/auth-services"
import './Navbar.css'

const Navbar = (props) => {

    let handleClick = () => {
        logout();
        props.setUser({ message: 'Not currently logged in' })
    }

    let scroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="Navbar easeInTop">
            <div className="nav-content">
                <h2 className="nav-logo" title="Home" onClick={scroll}>BreadCrumbs</h2>
                <div className="nav-buttons">
                    <div className="nav-button-div" onClick={scroll} >
                        <img src="./home.png" alt="home" title="Scroll home" className="home-icon" />
                    </div>
                    {/* <div className="nav-button-icon"> */}
                    {/* <img src="./user.png" alt="user profile" title="Profile" className="profile-icon" /> */}
                    {/* </div> */}
                    <div className="nav-button-div" onClick={handleClick} >
                        <img src="./logout.png" alt="logout" className="logout-icon" title="Logout" />
                    </div>
                    <div className="nav-button-div">
                        <img src="./donut.png" alt="new post" className="new-crumb" title="New Post" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Navbar
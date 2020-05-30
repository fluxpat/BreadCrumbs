import React from 'react';
import { Route } from 'react-router-dom'
import './Homepage.css'
import Signup from '../Auth/Signup'
import Login from '../Auth/Login'

const Homepage = (props) => {

    let setUser = props.setUser

    console.log("HOMEPAGE's props: ", props)

    return (
        <div className="Homepage">
            <div className='home-intro fadeIn'>
                <h1 className="logo easeIn">BreadCrumbs</h1>
                <p className='home-intro-text easeIn'>
                    Self-reflection is a key part of personal development.
                    Documenting and reflecting on our progress helps us continuously improve with direction and purpose.
                    BreadCrumbs provides a simple system for logging your thoughts and state of mind allowing you to look back and reflect as you change and grow over time.
                </p>
                <img className="brioche breadJiggle" src="/Brioche.png" alt="Brioche bun" />
                {/* <button>See Demo</button> */}
            </div>
            <Route exact path='/' render={props => <Login {...props} setUser={setUser} />} />
            <Route exact path='/signup' render={props => <Signup {...props} setUser={setUser} />} />
        </div>
    )
}

export default Homepage;
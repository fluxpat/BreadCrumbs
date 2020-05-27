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
            <div className='home-intro'>
                <h1>BreadCrumbs</h1>
                <p className='home-intro-text'>
                    It is said that self-reflection is the key to personal development.
                    How can we measure our growth without documenting our progress in important facets of life?
                    BreadCrumbs provides a simple system for logging your thoughts and state of mind at different moments allowing you to reflect as you change and grow over time.
                </p>
                <button>See Demo</button>
            </div>
            <Route exact path='/' render={props => <Login {...props} setUser={setUser} />} />
            <Route exact path='/signup' render={props => <Signup {...props} setUser={setUser} />} />
        </div>
    )
}

export default Homepage;
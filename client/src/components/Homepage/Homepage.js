import React from 'react';
import { Route } from 'react-router-dom'
import './Homepage.css'
import Signup from '../Auth/Signup'
import Login from '../Auth/Login'

const Homepage = () => {


    return (
        <div className="Homepage">
            <div className='introduction'>
                <h1>BreadCrumbs</h1>
                <p className='intro-text'>
                    It is said that self-reflection is the key to personal development.
                    How can we measure our growth without documenting our progress in important facets of life?
                    BreadCrumbs provides a simple system for logging your state of mind at different moments (called crumbs) and allows you to reflect on how much you've changed as a person over time.
                </p>
                <button>See Demo</button>
            </div>
            <Route exact path='/' component={Login} />
            <Route exact path='/signup' component={Signup} />
        </div>
    )
}

export default Homepage;